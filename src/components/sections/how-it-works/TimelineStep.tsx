"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { getAccentColor } from "@/components/sections/shared/gradients";

export type TimelineStepData = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type TimelineStepProps = {
  step: TimelineStepData;
  index: number;
  active: boolean;
  onSelect: () => void;
};

export function TimelineStep({
  step: { icon: Icon, title, description },
  index,
  active,
  onSelect,
}: TimelineStepProps) {
  const accent = getAccentColor(index);

  return (
    <motion.li
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <button
        type="button"
        onClick={onSelect}
        aria-pressed={active}
        className="relative flex w-full items-start gap-5 rounded-2xl border border-transparent py-2 pl-16 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 sm:gap-6 sm:pl-20"
        style={{
          borderColor: active
            ? `color-mix(in srgb, ${accent} 35%, transparent)`
            : "transparent",
          backgroundColor: active
            ? "color-mix(in srgb, var(--card) 70%, transparent)"
            : "transparent",
        }}
      >
        <span
          aria-hidden="true"
          className="absolute left-0 flex size-12 shrink-0 items-center justify-center rounded-full border bg-card shadow-md transition-all duration-300 sm:size-14"
          style={{
            borderColor: active
              ? accent
              : "color-mix(in srgb, var(--border) 100%, transparent)",
            boxShadow: active
              ? `0 0 0 4px color-mix(in srgb, ${accent} 18%, transparent)`
              : undefined,
          }}
        >
          <Icon
            className="size-5 transition-colors duration-300 sm:size-6"
            style={{ color: active ? accent : "var(--muted-foreground)" }}
            aria-hidden="true"
          />
        </span>

        <span className="flex flex-col gap-1.5 p-2 sm:p-3">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: accent }}
          >
            Step {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            {title}
          </span>
          <span className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </span>
        </span>
      </button>
    </motion.li>
  );
}
