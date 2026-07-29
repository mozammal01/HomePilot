"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { getAccentColor } from "@/components/sections/shared/gradients";
import {
  TestimonialCard,
  type TestimonialData,
} from "@/components/sections/testimonials/TestimonialCard";
import { EASE_OUT } from "@/lib/motion";

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
  const [hovered, setHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const total = testimonials.length;
  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const paused = hovered;

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
  const accent = getAccentColor(index);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="relative"
    >
      <div className="relative mx-auto min-h-88 w-full max-w-3xl sm:min-h-76">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="absolute inset-0"
          >
            <TestimonialCard {...current} index={index} />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous testimonial"
          className="absolute bottom-4 left-4 z-30 flex size-10 items-center justify-center rounded-full border border-border/70 bg-background/60 text-foreground backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-border hover:bg-muted active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          <ChevronLeft className="size-4" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next testimonial"
          className="absolute right-4 bottom-4 z-30 flex size-10 items-center justify-center rounded-full border border-border/70 bg-background/60 text-foreground backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-border hover:bg-muted active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          <ChevronRight className="size-4" aria-hidden="true" />
        </button>
      </div>

      <div
        className="mt-6 flex items-center justify-center gap-2"
        role="group"
        aria-label="Testimonials"
      >
        {testimonials.map((testimonial, i) => (
          <button
            key={testimonial.name}
            type="button"
            aria-current={i === index ? "true" : undefined}
            aria-label={`Show testimonial from ${testimonial.name}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 ${
              i === index ? "w-6" : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
            }`}
            style={i === index ? { backgroundColor: accent } : undefined}
          />
        ))}
      </div>
    </div>
  );
}
