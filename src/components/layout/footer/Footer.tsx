"use client";

import Link from "next/link";

import { siteConfig } from "@/config/site";
import { useSmoothNavClick } from "@/hooks/use-smooth-nav-click";

const productLinks = siteConfig.nav.filter((item) => item.href !== "/");

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const socialLinks = Object.entries(siteConfig.links).filter(
  ([, href]) => href
);

export function Footer() {
  const handleClick = useSmoothNavClick();

  return (
    <footer className="relative border-t border-border/60">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex max-w-sm flex-col gap-4">
            <Link
              href="/"
              onClick={(event) => handleClick(event, "/")}
              aria-label={`${siteConfig.name} — Home`}
              className="flex w-fit items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              <span className="flex size-8 items-center justify-center rounded-xl bg-foreground text-background">
                <span className="font-display text-base font-semibold">H</span>
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-2">
                {socialLinks.map(([platform, href]) => (
                  <a
                    key={platform}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${siteConfig.name} on ${platform}`}
                    className="flex h-9 items-center justify-center rounded-full border border-border/70 px-4 text-sm text-muted-foreground capitalize transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            )}
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Product
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {productLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(event) => handleClick(event, item.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
