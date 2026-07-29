"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAccentColor } from "@/components/sections/shared/gradients";
import { useSmoothNavClick } from "@/hooks/use-smooth-nav-click";
import { EASE_OUT, createFadeUpVariants } from "@/lib/motion";

const itemVariants = createFadeUpVariants(24);

export type PricingPlan = {
  name: string;
  description: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  recommended?: boolean;
};

type PricingCardProps = {
  plan: PricingPlan;
  yearly: boolean;
  index: number;
};

export function PricingCard({ plan, yearly, index }: PricingCardProps) {
  const accent = getAccentColor(index);
  const handleSmoothClick = useSmoothNavClick();
  const isAnchor = plan.ctaHref.startsWith("#");
  const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <motion.li
      variants={itemVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: EASE_OUT }}
      className={`group relative list-none rounded-3xl p-px ${
        plan.recommended ? "lg:-my-4" : ""
      }`}
      style={{
        backgroundImage: plan.recommended
          ? `linear-gradient(135deg, color-mix(in srgb, ${accent} 70%, transparent), color-mix(in srgb, ${accent} 20%, transparent))`
          : `linear-gradient(135deg, color-mix(in srgb, var(--foreground) 12%, transparent), transparent 60%)`,
      }}
    >
      {plan.recommended && (
        <div className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2">
          <Badge className="rounded-full px-3 py-1 text-xs font-semibold shadow-lg">
            Most Popular
          </Badge>
        </div>
      )}

      <div
        className={`relative flex h-full flex-col gap-6 rounded-[calc(var(--radius-3xl)-1px)] p-6 backdrop-blur-xl transition-all duration-500 sm:p-8 ${
          plan.recommended
            ? "bg-card/90 shadow-2xl"
            : "bg-card/60 shadow-lg group-hover:bg-card/80 group-hover:shadow-xl"
        }`}
      >
        <div>
          <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
            {plan.name}
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {plan.description}
          </p>
        </div>

        <div className="flex items-baseline gap-1.5">
          {price === null ? (
            <span className="font-display text-4xl font-semibold tracking-tight text-foreground">
              Custom
            </span>
          ) : (
            <>
              <span className="font-display text-lg font-semibold text-foreground">
                $
              </span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={`${plan.name}-${yearly}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, ease: EASE_OUT }}
                  className="font-display text-4xl font-semibold tracking-tight text-foreground"
                >
                  {price}
                </motion.span>
              </AnimatePresence>
              <span className="text-sm text-muted-foreground">/ month</span>
            </>
          )}
        </div>

        <ul className="flex flex-1 flex-col gap-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm">
              <span
                className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-foreground/10"
                style={{ color: accent }}
              >
                <Check className="size-2.5" aria-hidden="true" />
              </span>
              <span className="text-foreground/85">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          size="lg"
          variant={plan.recommended ? "default" : "outline"}
          nativeButton={false}
          className="group/btn h-12 w-full rounded-full text-base"
          render={
            isAnchor ? (
              <a
                href={plan.ctaHref}
                onClick={(event) => handleSmoothClick(event, plan.ctaHref)}
              />
            ) : (
              <Link href={plan.ctaHref} />
            )
          }
        >
          {plan.ctaLabel}
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1"
            aria-hidden="true"
          />
        </Button>
      </div>
    </motion.li>
  );
}
