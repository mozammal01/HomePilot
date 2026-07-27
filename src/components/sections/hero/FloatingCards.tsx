"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { Bell, CalendarClock, Wrench } from "lucide-react";
import type { ComponentType } from "react";

type FloatingCardsProps = {
  parallaxX: MotionValue<number>;
  parallaxY: MotionValue<number>;
};

type FloatingCard = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  className: string;
  depth: number;
  floatDuration: number;
  floatDelay: number;
};

const cards: FloatingCard[] = [
  {
    icon: Wrench,
    title: "Maintenance",
    subtitle: "3 pending requests",
    className: "-top-6 -left-6 sm:-left-10 lg:-left-14",
    depth: 0.6,
    floatDuration: 5,
    floatDelay: 0,
  },
  {
    icon: Bell,
    title: "Payment received",
    subtitle: "$2,400 · just now",
    className: "-top-12 -right-4 sm:-right-8 lg:-right-14",
    depth: 0.9,
    floatDuration: 6.5,
    floatDelay: 0.3,
  },
  {
    icon: CalendarClock,
    title: "Lease renewal",
    subtitle: "Aug 12 · Unit 204",
    className: "-bottom-8 -right-2 sm:-right-6 lg:-right-10",
    depth: 0.45,
    floatDuration: 5.8,
    floatDelay: 0.6,
  },
];

function FloatingCard({
  icon: Icon,
  title,
  subtitle,
  className,
  depth,
  floatDuration,
  floatDelay,
  parallaxX,
  parallaxY,
}: FloatingCard & FloatingCardsProps) {
  const x = useTransform(parallaxX, (v) => v * depth);
  const y = useTransform(parallaxY, (v) => v * depth);

  return (
    <motion.div
      style={{ x, y }}
      className={`absolute z-20 hidden sm:block ${className}`}
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.9 + floatDelay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        }}
        className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card/90 p-3.5 shadow-xl backdrop-blur-xl"
      >
        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-foreground/5 text-foreground">
          <Icon className="size-4" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-foreground">
            {title}
          </p>
          <p className="truncate text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FloatingCards({ parallaxX, parallaxY }: FloatingCardsProps) {
  return (
    <>
      {cards.map((card) => (
        <FloatingCard
          key={card.title}
          {...card}
          parallaxX={parallaxX}
          parallaxY={parallaxY}
        />
      ))}
    </>
  );
}
