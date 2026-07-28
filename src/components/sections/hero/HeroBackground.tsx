"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import { useRef } from "react";

const gridStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(to right, color-mix(in srgb, var(--foreground) 7%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--foreground) 7%, transparent) 1px, transparent 1px)",
  backgroundSize: "64px 64px",
  maskImage:
    "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)",
};

export function HeroBackground() {
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
      {/* base grid */}
      <div className="absolute inset-0" style={gridStyle} />

      {/* aurora blobs */}
      <motion.div
        className="absolute -top-40 -left-40 size-[32rem] rounded-full bg-[radial-gradient(circle,_oklch(0.7_0.14_280)_0%,_transparent_70%)] opacity-30 blur-3xl dark:opacity-20"
        animate={shouldAnimate ? { x: [0, 40, -20, 0], y: [0, 30, -10, 0] } : undefined}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -top-24 right-[-10rem] size-[28rem] rounded-full bg-[radial-gradient(circle,_oklch(0.75_0.13_200)_0%,_transparent_70%)] opacity-25 blur-3xl dark:opacity-15"
        animate={shouldAnimate ? { x: [0, -30, 20, 0], y: [0, 20, 40, 0] } : undefined}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_oklch(0.72_0.12_320)_0%,_transparent_70%)] opacity-20 blur-3xl dark:opacity-10"
        animate={
          shouldAnimate ? { scale: [1, 1.08, 1], opacity: [0.2, 0.28, 0.2] } : undefined
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* soft top glow */}
      <div className="absolute inset-x-0 top-0 h-[36rem] bg-linear-to-b from-background/0 via-background/0 to-background" />
    </div>
  );
}
