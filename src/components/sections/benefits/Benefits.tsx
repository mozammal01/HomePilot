"use client";

import { motion, type Variants } from "framer-motion";
import {
  BarChart3,
  Building2,
  Clock,
  MessagesSquare,
  TrendingUp,
  Users,
} from "lucide-react";

import { BenefitCard, type BenefitData } from "@/components/sections/benefits/BenefitCard";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { SectionBackground } from "@/components/sections/shared/SectionBackground";

const benefits: BenefitData[] = [
  {
    icon: Clock,
    stat: "10+ hrs/wk",
    title: "Save Valuable Time",
    description:
      "Automate rent reminders, lease renewals, and maintenance dispatch so your team can focus on growth instead of busywork.",
  },
  {
    icon: TrendingUp,
    stat: "+35%",
    title: "Collect Rent Faster",
    description:
      "Automated payment reminders and one-click online payments mean fewer late payments and healthier cash flow.",
  },
  {
    icon: Building2,
    stat: "-40%",
    title: "Lower Vacancy Rates",
    description:
      "Fill units faster with streamlined applications, instant screening, and a frictionless move-in experience.",
  },
  {
    icon: MessagesSquare,
    stat: "100%",
    title: "Centralize Communication",
    description:
      "Every tenant message, maintenance request, and lease document lives in one searchable place.",
  },
  {
    icon: BarChart3,
    stat: "Real-Time",
    title: "Make Smarter Decisions",
    description:
      "Live dashboards surface the occupancy, revenue, and expense trends that actually move your business.",
  },
  {
    icon: Users,
    stat: "3x",
    title: "Scale Without the Overhead",
    description:
      "Manage three times the portfolio with the same size team, thanks to intelligent automation.",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export function Benefits() {
  return (
    <section
      id="benefits"
      aria-labelledby="benefits-heading"
      className="relative overflow-x-clip px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <SectionBackground variant="reverse" withDivider />

      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          headingId="benefits-heading"
          badge="Key Benefits"
          headline="Real Outcomes for Property Businesses of Every Size"
          description="HomePilot isn't just software — it's measurable time saved, revenue protected, and growth unlocked for the teams that run on it."
        />

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
          className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} {...benefit} index={index} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
