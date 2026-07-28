import Link from "next/link";
import type { ReactNode } from "react";

import { SectionBackground } from "@/components/sections/shared/SectionBackground";
import { siteConfig } from "@/config/site";

type AuthCardProps = {
  title: string;
  description: string;
  footerPrompt: string;
  footerLinkLabel: string;
  footerLinkHref: string;
  children: ReactNode;
};

export function AuthCard({
  title,
  description,
  footerPrompt,
  footerLinkLabel,
  footerLinkHref,
  children,
}: AuthCardProps) {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-x-clip px-4 py-28 sm:px-6">
      <SectionBackground />

      <Link
        href="/"
        aria-label={`${siteConfig.name} — Home`}
        className="mb-8 flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
      >
        <span className="flex size-8 items-center justify-center rounded-xl bg-foreground text-background">
          <span className="font-display text-base font-semibold">H</span>
        </span>
        <span className="font-display text-lg font-semibold tracking-tight text-foreground">
          {siteConfig.name}
        </span>
      </Link>

      <div className="w-full max-w-md rounded-3xl border border-border/60 bg-card/70 p-6 shadow-xl backdrop-blur-xl sm:p-8">
        <div className="text-center">
          <h1 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            {title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>

        <div className="mt-8">{children}</div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          {footerPrompt}{" "}
          <Link
            href={footerLinkHref}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            {footerLinkLabel}
          </Link>
        </p>
      </div>
    </main>
  );
}
