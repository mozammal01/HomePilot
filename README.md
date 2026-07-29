# HomePilot

A premium, animated marketing site for **HomePilot** — a property management SaaS platform for landlords, property managers, and real estate businesses. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

Live sections include a hero with an animated dashboard preview, trusted-by logos, success metrics, feature highlights, a full dashboard showcase, benefits, a how-it-works timeline, pricing with a monthly/yearly toggle, testimonials carousel, FAQ accordion, newsletter signup, and a contact form — plus fully built `/login`, `/get-started`, `/demo`, `/privacy`, and `/terms` pages.

## Features

- **Premium hero** with an interactive, tilt-responsive dashboard mockup and trust badges
- **14 marketing sections** covering the full funnel: trust signals → features → pricing → social proof → conversion
- **Dark mode** with a navbar toggle (system-aware via `next-themes`, no flash of incorrect theme)
- **Smooth scrolling** powered by Lenis, with in-page nav links that scroll-spy the active section
- **Accessible forms** (Contact, Newsletter, Demo request, Login, Sign up) built with React Hook Form + Zod, with proper `aria-describedby` error association and `aria-live` success announcements
- **Accessible interactions**: focus-trapped mobile menu, keyboard-operable accordion and carousel, visible focus rings throughout
- **Motion that respects preference**: all Framer Motion animation site-wide is gated by `prefers-reduced-motion` via a single `MotionConfig`, and decorative background animations pause automatically when scrolled off-screen
- **SEO-complete**: Metadata API with dynamic OG/Twitter images (`next/og`), JSON-LD structured data, `robots.txt`, and `sitemap.xml`
- **Code-split by design**: below-the-fold sections load via `next/dynamic` (server-rendered, no SEO cost) to keep the initial bundle lean

## Tech Stack

| Category | Choice |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI primitives | shadcn/ui on top of [Base UI](https://base-ui.com) |
| Animation | Framer Motion |
| Smooth scroll | [Lenis](https://lenis.darkroom.engineering) |
| Forms & validation | React Hook Form + Zod |
| Icons | Lucide React |
| Theming | next-themes |

## Folder Structure

```
src/
  app/                        Routes, layouts, and metadata files
    layout.tsx                 Root layout — fonts, theme, motion config, nav/footer
    page.tsx                   Homepage — composes all 14 marketing sections
    robots.ts                  robots.txt (Metadata Route)
    sitemap.ts                 sitemap.xml (Metadata Route)
    opengraph-image.tsx        Dynamic OG image (next/og)
    twitter-image.tsx          Dynamic Twitter card image (next/og)
    login/, get-started/       Auth UI (demo — not wired to a backend)
    demo/                      "Request a demo" page + form
    privacy/, terms/           Legal pages
  components/
    ui/                        shadcn/ui primitives (button, input, accordion, ...)
    layout/
      navbar/                  Navbar, mobile menu, nav links, theme toggle
      footer/                  Site footer
    sections/                  One folder per homepage section
      shared/                  Cross-section SectionHeader & SectionBackground
      hero/, pricing/, faq/, dashboard/, ...
    auth/                      Login & signup form components
    demo/                      Demo request form
    legal/                     Shared legal-page layout
    providers/                 Theme provider, Lenis smooth-scroll provider
    structured-data.tsx        JSON-LD injected into <head>
  config/
    site.ts                    Site-wide config: name, nav, links, keywords
  hooks/                       useLenis, useActiveSection, useScrolled, ...
  lib/
    fonts.ts                   next/font definitions
    utils.ts                   cn() class helper
    og-image.tsx                Shared JSX for OG/Twitter image generation
    validations/                 Zod schemas (contact, newsletter, auth, demo)
  types/                       Shared TypeScript types
```

Each section follows the same pattern: a barrel `index.ts`, a top-level component, and local sub-components — making sections easy to reorder, reuse, or remove from `page.tsx`.

## Assets

The site ships with **no static image files** — every visual is generated in code, so there's nothing to license, optimize, or swap out manually:

| Asset type | Source | Notes |
|---|---|---|
| Fonts | `Inter` and `Bricolage_Grotesque` via `next/font/google` ([src/lib/fonts.ts](src/lib/fonts.ts)) | Self-hosted and subset automatically at build time by Next.js — no font files checked into the repo, no external requests at runtime |
| Icons | [Lucide React](https://lucide.dev) (`lucide-react`) | Rendered as inline SVG components throughout `src/components/` — no icon sprite or image files |
| Favicon | [src/app/favicon.ico](src/app/favicon.ico) | The only binary asset in the repo |
| OG / Twitter card images | [src/app/opengraph-image.tsx](src/app/opengraph-image.tsx), [src/app/twitter-image.tsx](src/app/twitter-image.tsx), shared JSX in [src/lib/og-image.tsx](src/lib/og-image.tsx) | Rendered on-demand with `next/og` (`ImageResponse`) from JSX + CSS gradients — no static image behind them |
| Dashboard/hero visuals, illustrations, gradients | Local components (e.g. `HeroDashboard`, `FeatureIllustration`, `FloatingCards`) | Built from CSS, SVG, and Framer Motion — no raster or vector image files |

`public/` is present but intentionally empty. If you add real product screenshots, logos, or marketing images later, that's where they belong (referenced via Next.js `<Image>` from `/`).

## Installation

Requires **Node.js 18.18+** (Node 20 LTS recommended) and npm.

```bash
git clone <repository-url>
cd HomePilot
npm install
```

## Environment Variables

No environment variables are required to run the project locally. One optional variable controls the canonical site URL used in metadata, the sitemap, and OG images:

| Variable | Required | Default | Purpose |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | No | `https://www.homepilot.com` | Base URL used for `metadataBase`, canonical links, `sitemap.xml`, and structured data |

To override it, create a `.env.local` file:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build Commands

```bash
npm run build   # Production build (runs type-checking + ESLint)
npm run start   # Serve the production build locally
npm run lint    # ESLint only
```

`npm run build` fails the build on TypeScript or ESLint errors — a clean build is a hard requirement for deployment.

## Deployment

The project deploys to [Vercel](https://vercel.com) with zero configuration:

1. Push the repository to GitHub/GitLab/Bitbucket.
2. Import the repository in the Vercel dashboard (or run `vercel`).
3. Vercel auto-detects Next.js — no build settings need to be changed.
4. Optionally set `NEXT_PUBLIC_SITE_URL` to your production domain in the Vercel project's Environment Variables.
5. Deploy. Every push to the default branch triggers a new production deployment; pull requests get preview deployments automatically.

The app is fully static-renderable (no server-only runtime dependencies), so it also works on any host that supports Next.js (e.g. `next start` behind a Node process).

## License

This project is private and proprietary. All rights reserved — no license is granted for reuse or redistribution unless otherwise agreed with the project owner.
