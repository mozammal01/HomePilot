export const siteConfig = {
  name: "AmazePMS",
  tagline: "Property management, simplified.",
  description:
    "AmazePMS is a modern property management system that helps hospitality teams run reservations, front desk, and operations from one platform.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.amazepms.com",
  ogImage: "/og.png",
  links: {
    twitter: "",
    linkedin: "",
  },
  nav: [] as { label: string; href: string }[],
} as const;

export type SiteConfig = typeof siteConfig;
