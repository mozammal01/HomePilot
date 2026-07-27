"use client";

import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

import { useLenis } from "@/hooks/use-lenis";

/**
 * Smoothly scrolls in-page nav links via Lenis. Falls back to native
 * navigation for hrefs that aren't an in-page anchor or don't resolve
 * to an existing element (sections not built yet).
 */
export function useSmoothNavClick() {
  const lenis = useLenis();
  const pathname = usePathname();

  return (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/" && pathname === "/") {
      event.preventDefault();
      lenis?.scrollTo(0, { duration: 1.2 });
      return;
    }

    if (href.startsWith("#") && document.querySelector(href)) {
      event.preventDefault();
      lenis?.scrollTo(href, { offset: -96, duration: 1.2 });
    }
  };
}
