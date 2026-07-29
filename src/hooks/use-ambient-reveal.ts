"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/**
 * Shared gating for decorative ambient animations (background blobs, glows):
 * only animate while in view and while the user hasn't asked for reduced motion.
 */
export function useAmbientReveal<T extends HTMLElement = HTMLDivElement>(
  amount = 0.1
) {
  const ref = useRef<T>(null);
  const isInView = useInView(ref, { amount });
  const prefersReducedMotion = useReducedMotion();

  return { ref, shouldAnimate: isInView && !prefersReducedMotion };
}
