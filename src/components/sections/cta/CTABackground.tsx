"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";

const gridStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(to right, color-mix(in srgb, var(--foreground) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--foreground) 6%, transparent) 1px, transparent 1px)",
  backgroundSize: "56px 56px",
  maskImage:
    "radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)",
};

export function CTABackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]"
    >
      <div className="absolute inset-0" style={gridStyle} />

      <motion.div
        className="absolute -top-24 -left-24 size-[28rem] rounded-full bg-[radial-gradient(circle,_oklch(0.62_0.19_280)_0%,_transparent_70%)] opacity-30 blur-3xl dark:opacity-20"
        animate={{ x: [0, 40, -10, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 -bottom-24 size-[28rem] rounded-full bg-[radial-gradient(circle,_oklch(0.7_0.15_200)_0%,_transparent_70%)] opacity-30 blur-3xl dark:opacity-20"
        animate={{ x: [0, -30, 15, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 size-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_oklch(0.66_0.18_320)_0%,_transparent_70%)] opacity-20 blur-3xl dark:opacity-15"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
