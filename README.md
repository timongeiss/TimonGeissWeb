# Timon Geiss Portfolio

A static, local-first portfolio website built with Astro and TypeScript. It has no database, backend, analytics or cookie banner.

## Run locally

1. Install the current Node.js LTS release.
2. In this directory, run `npm install`.
3. Start the site with `npm run dev` and open the local URL shown in the terminal.
4. Create a production build with `npm run build`; the static website is written to `dist/`.

## Add a project

Create `src/content/projects/<project-slug>.md`. The filename is internal; `slug` in the frontmatter becomes the public URL at `/projects/<slug>/`.

```md
---
title: "Project title"
slug: "project-slug"
period: "Month YYYY — Month YYYY"
sortDate: "2026-01-31" # project start date; used to order the chronology
organization: "Organisation · Context"
tags:
  - "Energy System Modelling"
  - "Python"
  - "Simulation & Optimisation"
  - "Data & Scenario Analysis"
  - "Research"
images: []
links: []
---

## Purpose

Describe the project.

## Contribution

Describe your contribution and result.
```

Select tags from the controlled taxonomy in `src/data/taxonomy.ts` wherever they materially describe the project. A project may omit dimensions when no shared tag is suitable; at most one role is permitted. The schema rejects unsupported values during a build.

For project media, add files under `public/projects/<project-slug>/` and reference them in frontmatter:

```yaml
images:
  - src: "/projects/project-slug/example.png"
    alt: "Short, meaningful image description"
    caption: "Optional caption"
links:
  - label: "Project report"
    href: "https://example.org/report"
    type: "report"
```

Empty `images` and `links` arrays do not render empty page sections.

## Future publishing

The site intentionally has no deployment configuration yet. It can later be published as static files from `dist/`, for example through GitHub Pages. Before publishing, add the final production domain to the Astro configuration and complete the legal/privacy review appropriate to the selected host and jurisdiction.
