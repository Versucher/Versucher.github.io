# Mystery_HUB

Personal GitHub Pages site built with Astro and Tailwind CSS.

## Local Development

```sh
npm install
npm.cmd run dev
```

On Windows PowerShell, `npm.cmd` avoids local execution-policy issues with `npm.ps1`.

## Production Check

```sh
npm.cmd run build
npm.cmd run preview -- --host 127.0.0.1
```

The static output is generated in `dist/`.

## Blog Posts

Markdown posts live in `src/pages/blog/`.

Create a new file such as:

```text
src/pages/blog/my-note.md
```

Use this frontmatter:

```md
---
layout: ../../layouts/BlogPostLayout.astro
title: "My Note"
description: "Short summary shown on the Blog page."
date: "2026-06-03"
tags:
  - astro
  - notes
---
```

After pushing the Markdown file, Astro generates the article route during the GitHub Pages build. For example, `src/pages/blog/hello-astro.md` becomes `/blog/hello-astro/`.

## Deployment

Deployment is handled by `.github/workflows/deploy.yml` using the Astro GitHub Action and GitHub Pages.

The site uses the custom domain in `public/CNAME`:

```text
www.shimazu.ndjp.net
```

Keep `public/CNAME` in the repository so the generated Pages artifact includes the custom domain file.
