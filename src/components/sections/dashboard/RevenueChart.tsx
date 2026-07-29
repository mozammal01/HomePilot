"use client";

import { AnimatePresence, motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { useState } from "react";

import { DashboardMiniCard } from "@/components/sections/dashboard/DashboardMiniCard";
import { EASE_OUT } from "@/lib/motion";

type Period = "monthly" | "weekly";

type PeriodData = {
  label: string;
  total: string;
  delta: string;
  categories: string[];
  values: number[];
};

const periods: Record<Period, PeriodData> = {
  monthly: {
    label: "Monthly",
    total: "$284,500",
    delta: "+12.4%",
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    values: [58, 64, 72, 68, 90, 100],
  },
  weekly: {
    label: "Weekly",
    total: "$68,240",
    delta: "+6.8%",
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    values: [45, 60, 52, 78, 70, 95, 82],
  },
};

export function RevenueChart() {
  const [period, setPeriod] = useState<Period>("monthly");
  const [hovered, setHovered] = useState<number | null>(null);
  const data = periods[period];

  return (
    <DashboardMiniCard>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-muted-foreground">
            Revenue Analytics
          </p>
          <div className="mt-1.5 flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold text-foreground">
              {data.total}
            </span>
            <span className="flex items-center gap-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <TrendingUp className="size-3" aria-hidden="true" />
              {data.delta}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 rounded-full border border-border/60 bg-background/80 p-1">
          {(Object.keys(periods) as Period[]).map((key) => (
            <button
              key={key}
              type="button"
              aria-pressed={period === key}
              onClick={() => setPeriod(key)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 ${
                period === key
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {periods[key].label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex h-32 items-end gap-2 sm:gap-3">
        {data.values.map((height, i) => (
          <div
            key={`${period}-${i}`}
            className="relative flex h-full flex-1 items-end"
          >
            <AnimatePresence>
              {hovered === i && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-lg bg-foreground px-2 py-1 text-[11px] font-medium whitespace-nowrap text-background"
                >
                  {height}%
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: EASE_OUT,
              }}
              style={{ height: `${height}%` }}
              className={`w-full origin-bottom rounded-md transition-colors ${
                hovered === i ? "bg-foreground" : "bg-foreground/15"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="mt-2 flex gap-2 sm:gap-3">
        {data.categories.map((cat) => (
          <span
            key={cat}
            className="flex-1 text-center text-[11px] text-muted-foreground"
          >
            {cat}
          </span>
        ))}
      </div>
    </DashboardMiniCard>
  );
}
