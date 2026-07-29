"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { useSmoothNavClick } from "@/hooks/use-smooth-nav-click";
import { EASE_OUT } from "@/lib/motion";

export function Logo() {
  const handleClick = useSmoothNavClick();

  return (
    <Link
      href="/"
      onClick={(event) => handleClick(event, "/")}
      aria-label={`${siteConfig.name} — Home`}
      className="relative z-50 flex items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.4, ease: EASE_OUT }}
        className="flex items-center gap-2.5"
      >
        <span className="flex size-8 items-center justify-center rounded-xl bg-foreground text-background">
          <span className="font-display text-base font-semibold">H</span>
        </span>
        <span className="font-display text-lg font-semibold tracking-tight text-foreground">
          {siteConfig.name}
        </span>
      </motion.span>
    </Link>
  );
}
