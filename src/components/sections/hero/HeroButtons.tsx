"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarClock } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function HeroButtons() {
  return (
    <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
      <motion.div whileHover={{ scale: 1.02 }}>
        <Button
          size="lg"
          nativeButton={false}
          className="group h-12 w-full rounded-full px-7 text-base shadow-lg shadow-primary/20 transition-transform active:scale-[0.98] sm:w-auto"
          render={<Link href={siteConfig.auth.getStarted} />}
        >
          Start Free Trial
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }}>
        <Button
          size="lg"
          variant="outline"
          nativeButton={false}
          className="h-12 w-full rounded-full border-border/80 bg-background/60 px-7 text-base backdrop-blur-sm transition-transform active:scale-[0.98] sm:w-auto"
          render={<Link href={siteConfig.auth.demo} />}
        >
          <CalendarClock className="size-4" />
          Book a Demo
        </Button>
      </motion.div>
    </div>
  );
}
