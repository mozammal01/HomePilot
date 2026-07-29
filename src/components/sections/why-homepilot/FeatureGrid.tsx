"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { FeatureCard } from "@/components/sections/why-homepilot/FeatureCard";
import { createStaggerContainer } from "@/lib/motion";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const container = createStaggerContainer();

type FeatureGridProps = {
  features: Feature[];
};

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
      aria-label="HomePilot features"
      className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
    >
      {features.map((feature, index) => (
        <FeatureCard key={feature.title} {...feature} index={index} />
      ))}
    </motion.ul>
  );
}
