"use client";

import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";

const item: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

type FeatureHighlightsProps = {
  highlights: string[];
};

export function FeatureHighlights({ highlights }: FeatureHighlightsProps) {
  return (
    <ul className="flex flex-col gap-2.5">
      {highlights.map((highlight) => (
        <motion.li
          key={highlight}
          variants={item}
          className="flex items-center gap-2.5 text-sm text-foreground/85 sm:text-base"
        >
          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-foreground">
            <Check className="size-3" aria-hidden="true" />
          </span>
          {highlight}
        </motion.li>
      ))}
    </ul>
  );
}
