import type { NavItem } from "@/types";

export const siteConfig = {
  name: "HomePilot",
  tagline: "Your Smart Property Management Partner.",
  description:
    "HomePilot is a premium property management platform that helps landlords, property managers, and real estate businesses manage properties, tenants, rent, and maintenance from one intelligent dashboard.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.homepilot.com",
  keywords: [
    "property management software",
    "landlord software",
    "tenant management platform",
    "rent collection software",
    "real estate management platform",
    "maintenance tracking software",
    "property management dashboard",
  ],
  links: {
    twitter: "",
    linkedin: "",
  },
  auth: {
    login: "/login",
    getStarted: "/get-started",
    demo: "/demo",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
} as const;

export type SiteConfig = typeof siteConfig;
