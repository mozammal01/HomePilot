import type { Metadata } from "next";

import { DemoRequestForm } from "@/components/demo/DemoRequestForm";
import { SectionBackground } from "@/components/sections/shared/SectionBackground";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Request a Demo",
  description: `See ${siteConfig.name} in action — request a live walkthrough with our team.`,
  alternates: {
    canonical: `${siteConfig.url}/demo`,
  },
};

export default function DemoPage() {
  return (
    <main className="relative flex flex-1 flex-col justify-center overflow-x-clip px-4 py-28 sm:px-6 lg:px-8">
      <SectionBackground />

      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Live Demo
          </p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            See HomePilot Running On Your Portfolio
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Book a personalized walkthrough with our team. We&apos;ll show you
            how HomePilot handles rent collection, maintenance workflows,
            and reporting for a portfolio your size.
          </p>
        </div>

        <DemoRequestForm />
      </div>
    </main>
  );
}
