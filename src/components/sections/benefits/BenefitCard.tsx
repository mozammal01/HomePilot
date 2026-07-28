"use client";

import { motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { getAccentColor } from "@/components/sections/shared/gradients";

export const benefitItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export type BenefitData = {
  icon: LucideIcon;
  stat: string;
  title: string;
  description: string;
};

type BenefitCardProps = BenefitData & { index: number };

export function BenefitCard({
  icon: Icon,
  stat,
  title,
  description,
  index,
}: BenefitCardProps) {
  const accent = getAccentColor(index);

  return (
    <motion.li
      variants={benefitItemVariants}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group relative list-none rounded-3xl p-px"
      style={{
        backgroundImage: `linear-gradient(135deg, color-mix(in srgb, ${accent} 45%, transparent), transparent 45%, color-mix(in srgb, ${accent} 25%, transparent))`,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60"
        style={{
          backgroundImage: `linear-gradient(135deg, ${accent}, transparent 65%)`,
        }}
      />

      <div className="relative flex h-full flex-col gap-5 overflow-hidden rounded-[calc(var(--radius-3xl)-1px)] bg-card/70 p-6 shadow-lg backdrop-blur-xl transition-all duration-500 group-hover:bg-card/85 group-hover:shadow-2xl sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <motion.span
            aria-hidden="true"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex size-11 items-center justify-center rounded-2xl bg-foreground/5"
            style={{ color: accent }}
          >
            <Icon className="size-5" aria-hidden="true" />
          </motion.span>

          <span
            className="font-display text-xl font-semibold tracking-tight sm:text-2xl"
            style={{ color: accent }}
          >
            {stat}
          </span>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </motion.li>
  );
}
