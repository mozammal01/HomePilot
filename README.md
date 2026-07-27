# AmazePMS — Premium Redesign

Awwwards-quality marketing site redesign for [amazepms.com](https://www.amazepms.com), preserving the existing business purpose.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- Lucide React
- Lenis (smooth scroll)
- React Hook Form + Zod

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/                  routes, layout, global styles, metadata
  components/
    ui/                 shadcn/ui primitives
    layout/             header, footer, nav (not yet built)
    shared/              cross-page reusable components (not yet built)
    providers/           theme + smooth-scroll providers
  config/                site-wide config (name, links, nav)
  hooks/                 reusable hooks
  lib/
    fonts.ts             next/font definitions
    utils.ts             cn() class helper
    validations/          zod schemas
  types/                  shared TypeScript types
```
