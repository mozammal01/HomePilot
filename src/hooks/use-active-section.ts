"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which in-page `#section` from `hrefs` is currently in view.
 * Falls back to `hrefs[0]` and no-ops when the target sections don't
 * exist yet, so it degrades safely before those sections are built.
 */
export function useActiveSection(hrefs: string[]) {
  const [active, setActive] = useState(hrefs[0] ?? "");

  useEffect(() => {
    const sections = hrefs
      .filter((href) => href.startsWith("#"))
      .map((href) => document.querySelector(href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible) {
          setActive(`#${mostVisible.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [hrefs]);

  return active;
}
