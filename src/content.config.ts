import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { ROLE_TAGS, TAGS } from "./data/taxonomy";
import { localMarkdownProjects } from "./content/loaders/projects-loader.mjs";

const projects = defineCollection({
  loader: localMarkdownProjects(),
  schema: z.object({
    title: z.string(),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    period: z.string(),
    sortDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    organization: z.string(),
    tags: z.array(z.enum(TAGS)).min(1).superRefine((tags, context) => {
      const selectedTags = tags as readonly string[];
      const roleCount = ROLE_TAGS.filter((tag) => selectedTags.includes(tag)).length;
      if (roleCount > 1) {
        context.addIssue({
          code: "custom",
          message: "Each project can have only one role tag.",
        });
      }
    }),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        }),
      )
      .default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.url(),
          type: z.enum(["report", "publication", "repository", "external"]).default("external"),
        }),
      )
      .default([]),
  }),
});

export const collections = { projects };
