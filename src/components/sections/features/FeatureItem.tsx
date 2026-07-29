"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { FeatureContent } from "@/components/sections/features/FeatureContent";
import {
  FeatureVisual,
  type FeatureVisualVariant,
} from "@/components/sections/features/FeatureVisual";
import { createStaggerContainer } from "@/lib/motion";

export type FeatureItemData = {
  variant: FeatureVisualVariant;
  visualLabel: string;
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  highlights: string[];
};

type FeatureItemProps = {
  feature: FeatureItemData;
  align: "left" | "right";
  index: number;
};

const container = createStaggerContainer(0.1, 0);

export function FeatureItem({ feature, align, index }: FeatureItemProps) {
  const headingId = `feature-${feature.variant}-heading`;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
      className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      <div className={align === "left" ? "lg:order-2" : "lg:order-1"}>
        <FeatureContent
          icon={feature.icon}
          number={feature.number}
          title={feature.title}
          description={feature.description}
          highlights={feature.highlights}
          index={index}
          headingId={headingId}
        />
      </div>

      <div className={align === "left" ? "lg:order-1" : "lg:order-2"}>
        <FeatureVisual
          variant={feature.variant}
          align={align}
          index={index}
          label={feature.visualLabel}
        />
      </div>
    </motion.div>
  );
}
