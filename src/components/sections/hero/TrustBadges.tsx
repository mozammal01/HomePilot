"use client";

import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";

import { EASE_OUT, createStaggerContainer } from "@/lib/motion";

const items = [
  "No Credit Card Required",
  "Free 14-Day Trial",
  "Cancel Anytime",
] as const;

const container = createStaggerContainer(0.08, 0);

const item: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
};

export function TrustBadges() {
  return (
    <motion.ul
      variants={container}
      className="flex flex-col gap-2.5 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2"
    >
      {items.map((label) => (
        <motion.li
          key={label}
          variants={item}
          className="flex items-center gap-2"
        >
          <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-foreground">
            <Check className="size-3" aria-hidden="true" />
          </span>
          {label}
        </motion.li>
      ))}
    </motion.ul>
  );
}
