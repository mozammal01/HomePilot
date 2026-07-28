"use client";

import { motion } from "framer-motion";
import { TrendingUp, type LucideIcon } from "lucide-react";

import { getAccentColor } from "@/components/sections/shared/gradients";

type AnalyticsCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  trend?: string;
  accentIndex?: number;
};

export function AnalyticsCard({
  icon: Icon,
  label,
  value,
  trend,
  accentIndex = 0,
}: AnalyticsCardProps) {
  const accent = getAccentColor(accentIndex);

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/60 p-4 transition-colors duration-300 hover:border-foreground/15 sm:p-5"
    >
      <span
        className="flex size-9 items-center justify-center rounded-xl bg-foreground/5"
        style={{ color: accent }}
      >
        <Icon className="size-4" aria-hidden="true" />
      </span>

      <div>
        <p className="font-display text-xl font-semibold text-foreground">
          {value}
        </p>
        <p className="text-xs text-muted-foreground">{label}</p>
      </div>

      {trend && (
        <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
          <TrendingUp className="size-3" aria-hidden="true" />
          {trend}
        </span>
      )}
    </motion.div>
  );
}
