import type { NavItem } from "@/types";

export const siteConfig = {
  name: "HomePilot",
  tagline: "Your Smart Property Management Partner.",
  description:
    "HomePilot is a premium property management platform that helps teams run reservations, operations, and guest experience from one place.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.homepilot.com",
  ogImage: "/og.png",
  links: {
    twitter: "",
    linkedin: "",
  },
  auth: {
    login: "/login",
    getStarted: "/get-started",
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
