"use client";

import { motion } from "framer-motion";

import { SectionBackground } from "@/components/sections/shared/SectionBackground";

export function DashboardBackground() {
  return (
    <>
      <SectionBackground withDivider />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-12rem] -z-10 hidden size-[36rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_oklch(0.62_0.19_280)_0%,_transparent_70%)] opacity-[0.16] blur-3xl lg:block dark:opacity-[0.1]"
        animate={{ x: [0, -24, 12, 0], y: [0, 18, -18, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}
