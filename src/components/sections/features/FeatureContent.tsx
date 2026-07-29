"use client";

import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FeatureHighlights } from "@/components/sections/features/FeatureHighlights";
import { getAccentColor } from "@/components/sections/shared/gradients";
import { siteConfig } from "@/config/site";
import { createFadeUpVariants, createStaggerContainer } from "@/lib/motion";

const container = createStaggerContainer();
const fadeUp = createFadeUpVariants(20);

type FeatureContentProps = {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  highlights: string[];
  index: number;
  headingId: string;
};

export function FeatureContent({
  icon: Icon,
  number,
  title,
  description,
  highlights,
  index,
  headingId,
}: FeatureContentProps) {
  const accent = getAccentColor(index);

  return (
    <motion.div
      variants={container}
      className="flex flex-col items-start gap-5"
    >
      <motion.div
        variants={fadeUp}
        className="flex items-center gap-3"
      >
        <span
          className="flex size-11 items-center justify-center rounded-2xl bg-foreground/5"
          style={{ color: accent }}
        >
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <span className="font-display text-sm font-semibold tracking-widest text-muted-foreground/70">
          {number}
        </span>
      </motion.div>

      <motion.h3
        id={headingId}
        variants={fadeUp}
        className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        {title}
      </motion.h3>

      <motion.p
        variants={fadeUp}
        className="text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        {description}
      </motion.p>

      <motion.div variants={fadeUp}>
        <FeatureHighlights highlights={highlights} />
      </motion.div>

      <motion.div variants={fadeUp}>
        <Button
          variant="outline"
          nativeButton={false}
          className="group h-11 rounded-full border-border/80 bg-background/60 px-6 backdrop-blur-sm"
          render={<Link href={siteConfig.auth.getStarted} />}
        >
          Start Free Trial
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Button>
      </motion.div>
    </motion.div>
  );
}
