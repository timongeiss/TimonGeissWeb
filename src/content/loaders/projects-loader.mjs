import { promises as fs } from "node:fs";
import { dirname, extname, join, relative } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

/**
 * A deliberately small Markdown loader for the local project collection.
 *
 * Astro's generic glob loader is excellent for large, nested collections. This
 * portfolio keeps one Markdown file per project in a single directory, so a
 * native filesystem loader is simpler and avoids adding a client dependency.
 */
export function localMarkdownProjects() {
  return {
    name: "local-markdown-projects",
    async load(context) {
      const directory = new URL("./src/content/projects/", context.config.root);
      const directoryPath = fileURLToPath(directory);
      const rootPath = fileURLToPath(context.config.root);
      const entryType = context.entryTypes.get(".md");

      if (!entryType) {
        context.logger.error("Markdown support is unavailable for the projects collection.");
        return;
      }

      const render = entryType.getRenderFunction
        ? await entryType.getRenderFunction(context.config)
        : undefined;

      const loadFiles = async () => {
        const entries = await fs.readdir(directoryPath, { withFileTypes: true });
        const files = entries
          .filter((entry) => entry.isFile() && extname(entry.name) === ".md")
          .map((entry) => entry.name)
          .sort();

        context.store.clear();

        for (const name of files) {
          const filePath = join(directoryPath, name);
          const relativeFilePath = relative(rootPath, filePath);
          const fileUrl = pathToFileURL(filePath);
          const contents = await fs.readFile(filePath, "utf-8");
          const { body, data } = await entryType.getEntryInfo({ contents, fileUrl });
          const id = String(data.slug ?? name.slice(0, -3));
          const parsedData = await context.parseData({ id, data, filePath });
          const digest = context.generateDigest(contents);
          const rendered = render
            ? await render({ id, data, body, filePath, digest })
            : undefined;

          context.store.set({
            id,
            data: parsedData,
            body,
            digest,
            filePath: relativeFilePath,
            rendered,
            assetImports: rendered?.metadata?.imagePaths,
          });
        }
      };

      await loadFiles();

      if (context.watcher) {
        context.watcher.add(directoryPath);
        const reloadIfProjectChanged = async (changedPath) => {
          if (extname(changedPath) === ".md" && dirname(changedPath) === directoryPath) {
            await loadFiles();
            context.logger.info("Reloaded project collection");
          }
        };
        context.watcher.on("add", reloadIfProjectChanged);
        context.watcher.on("change", reloadIfProjectChanged);
        context.watcher.on("unlink", reloadIfProjectChanged);
      }
    },
  };
}
