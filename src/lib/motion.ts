import type { Variants } from "framer-motion";

/** Standard ease-out curve used for every entrance animation site-wide. */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function createFadeUpVariants(distance = 18): Variants {
  return {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_OUT },
    },
  };
}

export function createStaggerContainer(
  staggerChildren = 0.08,
  delayChildren = 0.1
): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  };
}
