"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import {
  TestimonialCard,
  type TestimonialData,
} from "@/components/sections/testimonials/TestimonialCard";

type TestimonialCarouselProps = {
  testimonials: TestimonialData[];
};

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 48 : -48,
  }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -48 : 48,
  }),
};

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [[index, direction], setIndex] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const total = testimonials.length;
  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function goTo(nextIndex: number) {
    const dir = nextIndex > index ? 1 : -1;
    setIndex([(nextIndex + total) % total, dir]);
  }

  useEffect(() => {
    if (prefersReducedMotion || paused) return;

    timeoutRef.current = setInterval(() => {
      setIndex(([current]) => [(current + 1) % total, 1]);
    }, 6000);

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [paused, prefersReducedMotion, total]);

  const current = testimonials[index];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative"
    >
      <div className="relative min-h-[22rem] sm:min-h-[19rem]">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <TestimonialCard {...current} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous testimonial"
          className="flex size-10 items-center justify-center rounded-full border border-border/70 bg-background/60 text-foreground backdrop-blur-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          <ChevronLeft className="size-4" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Testimonials">
          {testimonials.map((testimonial, i) => (
            <button
              key={testimonial.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial from ${testimonial.name}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 ${
                i === index ? "w-6 bg-foreground" : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next testimonial"
          className="flex size-10 items-center justify-center rounded-full border border-border/70 bg-background/60 text-foreground backdrop-blur-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          <ChevronRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
