"use client";

import { motion } from "framer-motion";
import { TrendingUp, type LucideIcon } from "lucide-react";

import { dashboardMiniCardClassName } from "@/components/sections/dashboard/DashboardMiniCard";
import { getAccentColor } from "@/components/sections/shared/gradients";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

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
      transition={{ duration: 0.25, ease: EASE_OUT }}
      className={cn("flex flex-col gap-3", dashboardMiniCardClassName)}
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
