"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Clock,
  DollarSign,
  MapPinned,
  ShieldCheck,
  Users,
} from "lucide-react";

import { MetricCard } from "@/components/sections/metrics/MetricCard";
import { IllustrativeDataNote } from "@/components/sections/shared/IllustrativeDataNote";
import { SectionBackground } from "@/components/sections/shared/SectionBackground";
import { createFadeUpVariants, createStaggerContainer } from "@/lib/motion";

const metrics = [
  {
    icon: Building2,
    value: 10000,
    suffix: "+",
    label: "Active Properties",
  },
  {
    icon: Users,
    value: 50000,
    suffix: "+",
    label: "Tenants Managed",
  },
  {
    icon: ShieldCheck,
    value: 99.9,
    decimals: 1,
    suffix: "%",
    label: "Platform Uptime",
  },
  {
    icon: DollarSign,
    value: 250,
    prefix: "$",
    suffix: "M+",
    label: "Rent Processed",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "Support",
  },
  {
    icon: MapPinned,
    value: 150,
    suffix: "+",
    label: "Cities Served",
  },
] as const;

const container = createStaggerContainer();
const fadeUp = createFadeUpVariants();

export function SuccessMetrics() {
  return (
    <section
      aria-labelledby="success-metrics-heading"
      className="relative overflow-x-clip px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <SectionBackground variant="reverse" withDivider />

      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={container}
          className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center"
        >
          <motion.h2
            id="success-metrics-heading"
            variants={fadeUp}
            className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Numbers That Speak for Themselves
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-balance text-base leading-relaxed text-muted-foreground"
          >
            Targets for a platform built to scale with property businesses of
            every size.
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3"
        >
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} {...metric} index={index} />
          ))}
        </motion.ul>

        <IllustrativeDataNote>
          Figures shown are illustrative targets for demonstration purposes,
          not audited platform statistics.
        </IllustrativeDataNote>
      </div>
    </section>
  );
}
