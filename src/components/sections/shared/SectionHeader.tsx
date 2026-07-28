"use client";

import { motion, type Variants } from "framer-motion";

import { Badge } from "@/components/ui/badge";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

type SectionHeaderProps = {
  badge: string;
  headline: string;
  description: string;
  headingId: string;
};

export function SectionHeader({
  badge,
  headline,
  description,
  headingId,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={container}
      className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center"
    >
      <motion.div variants={fadeUp}>
        <Badge
          variant="outline"
          className="rounded-full border-border/70 bg-background/60 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-foreground/70 uppercase backdrop-blur-sm"
        >
          {badge}
        </Badge>
      </motion.div>
      <motion.h2
        id={headingId}
        variants={fadeUp}
        className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        {headline}
      </motion.h2>
      <motion.p
        variants={fadeUp}
        className="text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
