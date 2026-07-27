"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { useSmoothNavClick } from "@/hooks/use-smooth-nav-click";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

type NavLinksProps = {
  items: readonly NavItem[];
  activeHref: string;
};

export function NavLinks({ items, activeHref }: NavLinksProps) {
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const handleClick = useSmoothNavClick();

  return (
    <nav aria-label="Primary" className="hidden md:block">
      <ul
        className="flex items-center gap-1"
        onMouseLeave={() => setHoveredHref(null)}
      >
        {items.map((item) => {
          const isActive = activeHref === item.href;

          return (
            <li key={item.href} className="relative">
              {hoveredHref === item.href && (
                <motion.span
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 rounded-full bg-muted"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}

              <a
                href={item.href}
                onClick={(event) => handleClick(event, item.href)}
                onMouseEnter={() => setHoveredHref(item.href)}
                onFocus={() => setHoveredHref(item.href)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group relative z-10 block rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute inset-x-4 -bottom-0.5 h-px origin-left bg-foreground transition-transform duration-300 ease-out group-hover:scale-x-100",
                    isActive ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
