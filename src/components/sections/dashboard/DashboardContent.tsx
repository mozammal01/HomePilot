"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { FeatureHighlights } from "@/components/sections/features/FeatureHighlights";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const capabilities = [
  "Real-Time Portfolio Insights",
  "Automated Rent & Payment Tracking",
  "Smart Maintenance Workflows",
];

type DashboardContentProps = {
  headingId: string;
};

export function DashboardContent({ headingId }: DashboardContentProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={container}
      className="flex flex-col items-start gap-5 text-left"
    >
      <motion.div variants={fadeUp}>
        <Badge
          variant="outline"
          className="rounded-full border-border/70 bg-background/60 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-foreground/70 uppercase backdrop-blur-sm"
        >
          Platform Preview
        </Badge>
      </motion.div>

      <motion.h2
        id={headingId}
        variants={fadeUp}
        className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
      >
        Manage Your Entire Property Portfolio From One Beautiful Dashboard
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        HomePilot provides a unified workspace where you can monitor
        properties, tenants, rent payments, maintenance requests, financial
        reports, and team activities in real time.
      </motion.p>

      <motion.div variants={fadeUp}>
        <FeatureHighlights highlights={capabilities} />
      </motion.div>

      <motion.div variants={fadeUp}>
        <Button
          size="lg"
          nativeButton={false}
          className="group h-12 rounded-full px-7 text-base shadow-lg shadow-primary/20"
          render={<Link href={siteConfig.auth.demo} />}
        >
          See Live Demo
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Button>
      </motion.div>
    </motion.div>
  );
}
