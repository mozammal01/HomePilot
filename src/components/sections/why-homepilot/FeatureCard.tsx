"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

import { getAccentColor } from "@/components/sections/shared/gradients";
import { useSmoothNavClick } from "@/hooks/use-smooth-nav-click";

export const featureItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Varies hover lift per card so the grid doesn't feel mechanically uniform. */
const HOVER_LIFTS = [-8, -12, -10] as const;

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: FeatureCardProps) {
  const accent = getAccentColor(index);
  const lift = HOVER_LIFTS[index % HOVER_LIFTS.length];
  const handleSmoothClick = useSmoothNavClick();

  return (
    <motion.li
      variants={featureItemVariants}
      whileHover={{ y: lift }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group relative list-none rounded-3xl p-px"
      style={{
        backgroundImage: `linear-gradient(135deg, color-mix(in srgb, ${accent} 45%, transparent), transparent 45%, color-mix(in srgb, ${accent} 25%, transparent))`,
      }}
    >
      {/* ambient glow, intensifies on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60"
        style={{
          backgroundImage: `linear-gradient(135deg, ${accent}, transparent 65%)`,
        }}
      />

      <div className="relative flex h-full flex-col gap-4 rounded-[calc(var(--radius-3xl)-1px)] bg-card/70 p-6 shadow-lg backdrop-blur-xl transition-all duration-500 group-hover:bg-card/85 group-hover:shadow-2xl sm:p-7">
        <motion.span
          whileHover={{ scale: 1.08, rotate: -6 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex size-11 items-center justify-center rounded-2xl bg-foreground/5"
          style={{ color: accent }}
        >
          <Icon className="size-5" aria-hidden="true" />
        </motion.span>

        <div>
          <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        <a
          href="#features"
          onClick={(event) => handleSmoothClick(event, "#features")}
          aria-label={`Learn more about ${title}`}
          className="group/link mt-auto flex w-fit items-center gap-1.5 rounded-sm text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          Learn more
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover/link:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </motion.li>
  );
}
