"use client";

import { BarChart3, Building2, CreditCard, Users, Wrench, Zap } from "lucide-react";

import { FeatureItem, type FeatureItemData } from "@/components/sections/features/FeatureItem";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { SectionBackground } from "@/components/sections/shared/SectionBackground";

const features: FeatureItemData[] = [
  {
    variant: "property",
    visualLabel: "Properties",
    icon: Building2,
    number: "01",
    title: "Property Management",
    description:
      "Manage unlimited residential, commercial, and multi-unit properties from one centralized dashboard.",
    highlights: ["Property Profiles", "Occupancy Tracking", "Unit Management"],
  },
  {
    variant: "tenant",
    visualLabel: "Tenants",
    icon: Users,
    number: "02",
    title: "Tenant Management",
    description:
      "Organize tenant information, lease agreements, move-ins, move-outs, and communication in one place.",
    highlights: ["Digital Lease Records", "Tenant Portal", "Notifications"],
  },
  {
    variant: "rent",
    visualLabel: "Payments",
    icon: CreditCard,
    number: "03",
    title: "Online Rent Collection",
    description:
      "Accept secure online payments with recurring billing, automatic reminders, and payment history.",
    highlights: ["Auto Payments", "Payment Tracking", "Invoice Management"],
  },
  {
    variant: "maintenance",
    visualLabel: "Maintenance",
    icon: Wrench,
    number: "04",
    title: "Maintenance Management",
    description:
      "Track maintenance requests from creation to completion with assigned staff and status updates.",
    highlights: ["Ticket System", "Work Orders", "Progress Tracking"],
  },
  {
    variant: "analytics",
    visualLabel: "Analytics",
    icon: BarChart3,
    number: "05",
    title: "Reports & Analytics",
    description:
      "Gain valuable insights with real-time dashboards and customizable reports.",
    highlights: ["Revenue Reports", "Occupancy Analytics", "Expense Tracking"],
  },
  {
    variant: "automation",
    visualLabel: "Automation",
    icon: Zap,
    number: "06",
    title: "Smart Automation",
    description:
      "Reduce repetitive tasks through intelligent automation and scheduled workflows.",
    highlights: ["Email Automation", "Reminder System", "Workflow Automation"],
  },
];

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative overflow-x-clip px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <SectionBackground variant="reverse" withDivider />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 lg:gap-28">
        <SectionHeader
          headingId="features-heading"
          badge="Powerful Features"
          headline="Everything You Need to Manage Properties Efficiently"
          description="HomePilot combines automation, financial management, tenant communication, maintenance tracking, and analytics into one intuitive platform."
        />

        <div className="flex flex-col gap-20 lg:gap-28">
          {features.map((feature, index) => (
            <FeatureItem
              key={feature.variant}
              feature={feature}
              align={index % 2 === 0 ? "left" : "right"}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
