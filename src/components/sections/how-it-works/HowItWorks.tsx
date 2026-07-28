"use client";

import {
  BarChart3,
  Building2,
  CreditCard,
  Search,
  Users,
  Wrench,
} from "lucide-react";

import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Timeline } from "@/components/sections/how-it-works/Timeline";
import type { TimelineStepData } from "@/components/sections/how-it-works/TimelineStep";
import { SectionBackground } from "@/components/sections/shared/SectionBackground";

const steps: TimelineStepData[] = [
  {
    icon: Search,
    title: "Discover",
    description:
      "Explore HomePilot's platform and see how it fits your portfolio, from a single building to a multi-city operation.",
  },
  {
    icon: Building2,
    title: "Add Properties",
    description:
      "Import your properties in minutes with guided setup, bulk CSV import, or our concierge onboarding team.",
  },
  {
    icon: Users,
    title: "Manage Tenants",
    description:
      "Invite tenants to their own portal, digitize leases, and keep every conversation in one thread.",
  },
  {
    icon: CreditCard,
    title: "Collect Rent",
    description:
      "Turn on automatic rent collection with reminders, late fees, and instant payout tracking.",
  },
  {
    icon: Wrench,
    title: "Track Maintenance",
    description:
      "Tenants submit requests in seconds — your team assigns, tracks, and resolves them without the back-and-forth.",
  },
  {
    icon: BarChart3,
    title: "Analyze Performance",
    description:
      "Watch occupancy, revenue, and satisfaction trends update in real time on your dashboard.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative overflow-x-clip px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <SectionBackground withDivider />

      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          headingId="how-it-works-heading"
          badge="How It Works"
          headline="From Sign-Up to Fully Automated in Six Steps"
          description="A guided path that takes you from exploring the platform to running your entire portfolio on autopilot — click any step to learn more."
        />

        <div className="mt-12 sm:mt-16">
          <Timeline steps={steps} />
        </div>
      </div>
    </section>
  );
}
