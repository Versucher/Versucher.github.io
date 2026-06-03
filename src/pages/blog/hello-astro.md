---
layout: ../../layouts/BlogPostLayout.astro
title: "Hello Astro"
description: "A short test article to verify that Markdown posts are generated automatically."
date: "2026-06-03"
tags:
  - astro
  - build-log
---

## Why this post exists

This is a small test article for the Blog section. The goal is simple: when a Markdown file is added under `src/pages/blog/`, Astro should generate a public article page during the static build.

## Current setup

The post uses normal Markdown frontmatter for metadata:

- `title` controls the article heading and Blog list title.
- `description` appears in the article header and Blog list preview.
- `date` is used for sorting and display.
- `tags` are rendered as small labels.

## Next steps

Future posts can be added by creating another `.md` file in the same folder. After pushing to GitHub, the existing Pages workflow will rebuild the site and publish the new article route.
