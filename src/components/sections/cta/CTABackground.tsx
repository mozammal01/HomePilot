"use client";

import { motion } from "framer-motion";

import { GridPattern } from "@/components/sections/shared/GridPattern";
import { useAmbientReveal } from "@/hooks/use-ambient-reveal";

export function CTABackground() {
  const { ref, shouldAnimate } = useAmbientReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]"
    >
      <GridPattern
        lineOpacity={0.06}
        cellSize={56}
        mask="radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)"
      />

      <motion.div
        className="absolute -top-24 -left-24 size-[28rem] rounded-full bg-[radial-gradient(circle,_oklch(0.62_0.19_280)_0%,_transparent_70%)] opacity-30 blur-3xl dark:opacity-20"
        animate={shouldAnimate ? { x: [0, 40, -10, 0], y: [0, 20, -20, 0] } : undefined}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 -bottom-24 size-[28rem] rounded-full bg-[radial-gradient(circle,_oklch(0.7_0.15_200)_0%,_transparent_70%)] opacity-30 blur-3xl dark:opacity-20"
        animate={shouldAnimate ? { x: [0, -30, 15, 0], y: [0, -20, 15, 0] } : undefined}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 size-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_oklch(0.66_0.18_320)_0%,_transparent_70%)] opacity-20 blur-3xl dark:opacity-15"
        animate={shouldAnimate ? { scale: [1, 1.15, 1] } : undefined}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
