"use client";

import { motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";

import {
  TimelineStep,
  type TimelineStepData,
} from "@/components/sections/how-it-works/TimelineStep";

type TimelineProps = {
  steps: TimelineStepData[];
};

export function Timeline({ steps }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.4"],
  });

  return (
    <div ref={containerRef} className="relative mx-auto max-w-3xl">
      <div
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-6 w-px bg-border sm:left-7"
      />
      <motion.div
        aria-hidden="true"
        style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
        className="absolute top-2 bottom-2 left-6 w-px bg-foreground sm:left-7"
      />

      <ol className="flex flex-col gap-6 sm:gap-8">
        {steps.map((step, index) => (
          <TimelineStep
            key={step.title}
            step={step}
            index={index}
            active={activeIndex === index}
            onSelect={() => setActiveIndex(index)}
          />
        ))}
      </ol>
    </div>
  );
}
