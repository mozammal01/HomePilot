"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Tracks which in-page `#section` from `hrefs` is currently in view.
 * Falls back to `hrefs[0]` and no-ops when the target sections don't
 * exist yet, so it degrades safely before those sections are built.
 * Only tracks on "/" — other routes have no matching sections to observe.
 */
export function useActiveSection(hrefs: string[]) {
  const pathname = usePathname();
  const [active, setActive] = useState(hrefs[0] ?? "");

  useEffect(() => {
    if (pathname !== "/") return;

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
  }, [hrefs, pathname]);

  return pathname === "/" ? active : "";
}
