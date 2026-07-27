"use client";

import {
  BarChart3,
  Building,
  CreditCard,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { FeatureGrid, type Feature } from "@/components/sections/why-homepilot/FeatureGrid";
import { FeatureIllustration } from "@/components/sections/why-homepilot/FeatureIllustration";
import { SectionHeader } from "@/components/sections/why-homepilot/SectionHeader";
import { SectionBackground } from "@/components/sections/shared/SectionBackground";

const features: Feature[] = [
  {
    icon: Building,
    title: "Smart Property Management",
    description:
      "Manage residential, commercial, and multi-unit properties effortlessly.",
  },
  {
    icon: MessageCircle,
    title: "Tenant Communication",
    description:
      "Centralize conversations, announcements, and support requests.",
  },
  {
    icon: CreditCard,
    title: "Automated Rent Collection",
    description: "Secure online payments with automatic reminders.",
  },
  {
    icon: Wrench,
    title: "Maintenance Tracking",
    description:
      "Track maintenance requests from submission to completion.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Monitor occupancy, revenue, expenses, and performance instantly.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Bank-level security with encrypted data and role-based access.",
  },
];

export function WhyHomePilot() {
  return (
    <section
      aria-labelledby="why-homepilot-heading"
      className="relative overflow-x-clip px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <SectionBackground withDivider />

      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          headingId="why-homepilot-heading"
          badge="Why HomePilot"
          headline="Why Thousands of Property Managers Choose HomePilot"
          description="HomePilot helps property managers automate daily operations, increase efficiency, reduce manual work, and deliver exceptional experiences to tenants from one intelligent platform."
        />

        <div className="mt-12 sm:mt-16">
          <FeatureGrid features={features} />
        </div>

        <div className="mt-16 lg:mt-20">
          <FeatureIllustration />
        </div>
      </div>
    </section>
  );
}
