"use client";

import { motion } from "framer-motion";
import { useId } from "react";

import { getAccentColor } from "@/components/sections/shared/gradients";
import { EASE_OUT, createFadeUpVariants } from "@/lib/motion";

const itemVariants = createFadeUpVariants(16);

type CompanyLogoProps = {
  name: string;
  index: number;
};

/**
 * Abstract monogram mark + wordmark, rendered as an original SVG placeholder
 * (no real brand assets). Grayscale by default, reveals its accent color on hover.
 */
export function CompanyLogo({ name, index }: CompanyLogoProps) {
  const gradientId = useId();
  const accent = getAccentColor(index);

  return (
    <motion.li
      variants={itemVariants}
      whileHover={{ scale: 1.06, y: -2 }}
      transition={{ duration: 0.3, ease: EASE_OUT }}
      className="group relative flex list-none items-center justify-center rounded-2xl border border-border/60 bg-card/40 px-5 py-6 backdrop-blur-sm sm:px-6"
    >
      {/* soft color glow, revealed on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
        style={{ backgroundColor: accent }}
      />

      <div className="flex items-center gap-2.5 grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          <defs>
            <linearGradient
              id={gradientId}
              x1="0"
              y1="0"
              x2="28"
              y2="28"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor={accent} stopOpacity="0.9" />
              <stop offset="1" stopColor={accent} stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <rect
            x="0.5"
            y="0.5"
            width="27"
            height="27"
            rx="8"
            fill={`url(#${gradientId})`}
            fillOpacity="0.18"
          />
          <path
            d="M7 15.5L14 8.5L21 15.5"
            stroke={`url(#${gradientId})`}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 19H18"
            stroke={`url(#${gradientId})`}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>

        <span className="font-display text-sm font-semibold tracking-tight text-foreground sm:text-base">
          {name}
        </span>
      </div>
    </motion.li>
  );
}
