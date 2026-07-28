"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import { useRef } from "react";

const gridStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(to right, color-mix(in srgb, var(--foreground) 5%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--foreground) 5%, transparent) 1px, transparent 1px)",
  backgroundSize: "64px 64px",
  maskImage:
    "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
};

type SectionBackgroundProps = {
  /** Flips blob placement so consecutive sections don't feel identical. */
  variant?: "default" | "reverse";
  /** Renders a soft gradient hairline at the top edge, visually stitching this section to the one above. */
  withDivider?: boolean;
};

export function SectionBackground({
  variant = "default",
  withDivider = false,
}: SectionBackgroundProps) {
  const flipped = variant === "reverse";
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = isInView && !prefersReducedMotion;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {withDivider && (
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
      )}

      <div className="absolute inset-0" style={gridStyle} />

      <motion.div
        className={`absolute size-[26rem] rounded-full bg-[radial-gradient(circle,_oklch(0.66_0.18_320)_0%,_transparent_70%)] opacity-[0.12] blur-3xl dark:opacity-[0.08] ${
          flipped ? "-top-32 right-[-8rem]" : "-top-32 left-[-8rem]"
        }`}
        animate={shouldAnimate ? { x: [0, 30, -10, 0], y: [0, 20, -10, 0] } : undefined}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute size-[24rem] rounded-full bg-[radial-gradient(circle,_oklch(0.7_0.15_200)_0%,_transparent_70%)] opacity-[0.1] blur-3xl dark:opacity-[0.07] ${
          flipped ? "-bottom-24 left-[-6rem]" : "-bottom-24 right-[-6rem]"
        }`}
        animate={shouldAnimate ? { x: [0, -20, 10, 0], y: [0, -15, 10, 0] } : undefined}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
