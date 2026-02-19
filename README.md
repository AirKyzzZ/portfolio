# Maxime Mansiet — Personal Website

![Next.js](https://img.shields.io/badge/Next.js-15.4-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css)

**[maximemansiet.fr](https://maximemansiet.fr)**

Research-focused academic website for Maxime Mansiet — fullstack developer and researcher specializing in decentralized identity, Self-Sovereign Identity (SSI), and verifiable credentials.

## Stack

- **Framework:** Next.js 15 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **i18n:** next-intl (EN/FR with `[locale]` routing)
- **Blog:** MDX via next-mdx-remote (remark-gfm, remark-math, rehype-katex, rehype-highlight)
- **Fonts:** Source Serif 4, Inter, JetBrains Mono (next/font)
- **Hosting:** Netlify (static)

## Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (minimal)
│   ├── page.tsx                # Redirect → /en/
│   └── [locale]/
│       ├── layout.tsx          # Locale layout (fonts, nav, footer, i18n provider)
│       ├── page.tsx            # Homepage (about, research interests, news)
│       ├── research/           # Research areas & open questions
│       ├── projects/           # Project grid + detail pages
│       ├── blog/               # MDX blog listing + posts
│       ├── publications/       # Publications (empty, ready for future)
│       ├── talks/              # Talks & presentations
│       └── cv/                 # Structured CV
├── components/
│   ├── layout/                 # Header, footer, sidebar, locale switcher
│   ├── ui/                     # Section heading, tag, cards, news item
│   ├── mdx/                    # Custom MDX components, code block
│   └── seo/                    # JSON-LD structured data
├── i18n/                       # next-intl routing + request config
├── lib/                        # Utils, MDX pipeline, content loaders
└── types/                      # Blog, project, publication interfaces

content/
├── blog/{en,fr}/               # MDX blog posts per locale
├── projects/{en,fr}.json       # Project data
└── publications/{en,fr}.json   # Publication data

messages/
├── en.json                     # English UI strings
└── fr.json                     # French UI strings
```

## Development

```bash
npm install
npm run dev        # Dev server with Turbopack
npm run build      # Static export to /out/
npm run lint       # ESLint
```

## Deployment

Deployed on Netlify via `npm run build`. The `out/` directory is published. Root `/` redirects to `/en/` via Netlify 302 rule.

## Adding Content

**Blog post:** Create `content/blog/{locale}/my-post.mdx` with frontmatter:

```yaml
---
title: "Post Title"
date: "2026-01-01"
description: "Short description"
tags: ["SSI", "DIDs"]
---
```

**Project:** Add entry to `content/projects/{locale}.json`.

**Publication:** Add entry to `content/publications/{locale}.json`.

## Links

- [maximemansiet.fr](https://maximemansiet.fr)
- [GitHub](https://github.com/airkyzzz)
- [LinkedIn](https://linkedin.com/in/maxime-mansiet)
- [X / Twitter](https://x.com/maximecodes)
