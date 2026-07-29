"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { EASE_OUT } from "@/lib/motion";

export function formatCounterValue(value: number, decimals = 0): string {
  return decimals > 0
    ? value.toFixed(decimals)
    : Math.round(value).toLocaleString("en-US");
}

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
};

/**
 * Counts up from 0 to `value` once it scrolls into view. The animated digits
 * are hidden from assistive tech (`aria-hidden`) — pair with a static,
 * fully-formatted label elsewhere for screen readers.
 */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.8,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const controls = animate(0, value, {
      duration,
      ease: EASE_OUT,
      onUpdate: (latest) => setDisplay(latest),
    });

    return () => controls.stop();
  }, [isInView, value, duration, prefersReducedMotion]);

  return (
    <span ref={ref} aria-hidden="true" className="tabular-nums">
      {prefix}
      {formatCounterValue(display, decimals)}
      {suffix}
    </span>
  );
}
