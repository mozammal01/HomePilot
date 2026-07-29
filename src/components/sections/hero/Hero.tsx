"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { HeroBackground } from "@/components/sections/hero/HeroBackground";
import { HeroContent } from "@/components/sections/hero/HeroContent";
import { HeroDashboard } from "@/components/sections/hero/HeroDashboard";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-svh flex-col overflow-x-clip pt-36 pb-16 sm:pt-40 lg:pt-44 lg:pb-20">
      <HeroBackground />

      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <HeroContent />
        <HeroDashboard />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute inset-x-0 bottom-6 hidden justify-center sm:flex"
      >
        <motion.div
          animate={!prefersReducedMotion ? { y: [0, 8, 0] } : undefined}
          transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-muted-foreground"
        >
          <span className="text-xs font-medium tracking-wide uppercase">
            Scroll
          </span>
          <ChevronDown className="size-4" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
