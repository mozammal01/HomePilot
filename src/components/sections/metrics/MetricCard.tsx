"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  Counter,
  formatCounterValue,
} from "@/components/sections/metrics/Counter";
import { getAccentColor } from "@/components/sections/shared/gradients";
import { EASE_OUT, createFadeUpVariants } from "@/lib/motion";

const itemVariants = createFadeUpVariants(24);

type MetricCardProps = {
  icon: LucideIcon;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  index: number;
};

export function MetricCard({
  icon: Icon,
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
  index,
}: MetricCardProps) {
  const accent = getAccentColor(index);
  const accessibleValue = `${prefix}${formatCounterValue(value, decimals)}${suffix}`;

  return (
    <motion.li
      variants={itemVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: EASE_OUT }}
      className="group relative list-none overflow-hidden rounded-3xl border border-border/60 bg-card/60 p-6 shadow-xl backdrop-blur-xl transition-shadow duration-300 hover:shadow-2xl sm:p-7"
    >
      {/* soft accent glow, revealed on hover */}
      <div
        aria-hidden="true"
        className="absolute -top-10 -right-10 -z-10 size-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
        style={{ backgroundColor: accent }}
      />

      <motion.span
        aria-hidden="true"
        whileHover={{ scale: 1.08, rotate: -4 }}
        transition={{ duration: 0.3, ease: EASE_OUT }}
        className="flex size-11 items-center justify-center rounded-2xl bg-foreground/5 text-foreground"
        style={{ color: accent }}
      >
        <Icon className="size-5" aria-hidden="true" />
      </motion.span>

      <p className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        <Counter
          value={value}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
        />
        <span className="sr-only">{accessibleValue}</span>
      </p>

      <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">
        {label}
      </p>
    </motion.li>
  );
}
