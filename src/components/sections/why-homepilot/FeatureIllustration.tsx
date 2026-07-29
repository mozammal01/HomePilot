"use client";

import { motion } from "framer-motion";
import { Building2, CreditCard, UserCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { EASE_OUT } from "@/lib/motion";

type WorkflowStep = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
};

const steps: WorkflowStep[] = [
  { icon: Building2, title: "Property Added", subtitle: "123 Maple Street" },
  { icon: UserCheck, title: "Tenant Verified", subtitle: "Sarah Chen · Unit 4B" },
  {
    icon: CreditCard,
    title: "Rent Collected",
    subtitle: "$2,400 · Auto-processed",
  },
];

/**
 * A lightweight "automated workflow" illustration — distinct from the Hero's
 * literal dashboard mockup — reinforcing that HomePilot connects the whole
 * property lifecycle end to end.
 */
export function FeatureIllustration() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto max-w-4xl px-4 sm:px-8"
    >
      <div className="absolute inset-x-12 top-1/2 hidden h-px -translate-y-1/2 overflow-hidden bg-border/60 sm:block">
        <motion.div
          className="h-full w-1/3 bg-linear-to-r from-transparent via-foreground/40 to-transparent"
          animate={{ x: ["-100%", "400%"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: EASE_OUT,
            }}
            className={index === 1 ? "sm:mt-8" : undefined}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.4,
              }}
              className="relative z-10 flex items-center gap-3 rounded-2xl border border-border/60 bg-card/85 p-4 shadow-lg backdrop-blur-xl"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-foreground/5 text-foreground">
                <step.icon className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-foreground">
                  {step.title}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {step.subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
