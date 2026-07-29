"use client";

import { motion, type Variants } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { HeroButtons } from "@/components/sections/hero/HeroButtons";
import { TrustBadges } from "@/components/sections/hero/TrustBadges";
import {
  EASE_OUT,
  createFadeUpVariants,
  createStaggerContainer,
} from "@/lib/motion";

type HeadlineLine = {
  words: string[];
  gradient?: boolean;
};

const headline: HeadlineLine[] = [
  { words: ["Manage", "Properties"] },
  { words: ["Smarter,", "Faster,"], gradient: true },
  { words: ["and", "Stress-Free."], gradient: true },
];

const container = createStaggerContainer(0.09, 0.15);
const fadeUp = createFadeUpVariants();

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex max-w-xl flex-col items-start gap-6 text-left"
    >
      <motion.div variants={fadeUp}>
        <Badge
          variant="outline"
          className="gap-2 rounded-full border-border/70 bg-background/60 px-4 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur-sm"
        >
          <span className="relative flex size-1.5">
            <motion.span
              className="absolute inline-flex size-full rounded-full bg-emerald-500"
              animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.8, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
          </span>
          Built for Modern Property Teams
        </Badge>
      </motion.div>

      <h1 className="font-display text-4xl leading-[1.08] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        {headline.map((line, lineIndex) => (
          <div key={lineIndex} className="flex flex-wrap gap-x-3">
            {line.words.map((word, wordIndex) =>
              line.gradient ? (
                <motion.span
                  key={`${lineIndex}-${wordIndex}`}
                  variants={wordVariants}
                  className="inline-block"
                >
                  <motion.span
                    className="bg-size-[200%_auto] bg-linear-to-r from-[oklch(0.62_0.19_280)] via-[oklch(0.66_0.18_320)] to-[oklch(0.7_0.15_200)] bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {word}
                  </motion.span>
                </motion.span>
              ) : (
                <motion.span
                  key={`${lineIndex}-${wordIndex}`}
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              ),
            )}
          </div>
        ))}
      </h1>

      <motion.p
        variants={fadeUp}
        className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        HomePilot brings your properties, tenants, rent, and maintenance into
        one intelligent dashboard — so you can manage more, stress less, and
        grow with confidence.
      </motion.p>

      <motion.div variants={fadeUp} className="w-full">
        <HeroButtons />
      </motion.div>

      <motion.div variants={fadeUp}>
        <TrustBadges />
      </motion.div>
    </motion.div>
  );
}
