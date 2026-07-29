"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect, useRef, type RefObject } from "react";

import { CTAButtons } from "@/components/layout/navbar/CTAButtons";
import { useSmoothNavClick } from "@/hooks/use-smooth-nav-click";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

type MobileMenuProps = {
  isOpen: boolean;
  items: readonly NavItem[];
  activeHref: string;
  onLinkClick: () => void;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
};

const panelVariants: Variants = {
  hidden: { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.5,
      ease: EASE_OUT,
      when: "beforeChildren",
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    clipPath: "inset(0% 0% 100% 0%)",
    transition: { duration: 0.35, ease: [0.7, 0, 0.84, 0] },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
};

export function MobileMenu({
  isOpen,
  items,
  activeHref,
  onLinkClick,
  returnFocusRef,
}: MobileMenuProps) {
  const handleSmoothClick = useSmoothNavClick();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const toggleButton = returnFocusRef.current;
    const panel = panelRef.current;
    const firstFocusable =
      panel?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
    firstFocusable?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onLinkClick();
        return;
      }

      if (event.key !== "Tab" || !panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      toggleButton?.focus();
    };
  }, [isOpen, onLinkClick, returnFocusRef]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={panelRef}
          id="mobile-menu"
          key="mobile-menu"
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-40 flex flex-col bg-background/95 pt-24 backdrop-blur-xl md:hidden"
        >
          <nav
            aria-label="Mobile"
            className="flex flex-1 flex-col items-center justify-center gap-2"
          >
            {items.map((item) => {
              const isActive = activeHref === item.href;

              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  variants={itemVariants}
                  onClick={(event) => {
                    handleSmoothClick(event, item.href);
                    onLinkClick();
                  }}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "font-display px-4 py-2 text-3xl font-medium tracking-tight transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </motion.a>
              );
            })}
          </nav>

          <motion.div
            variants={itemVariants}
            className="border-border/60 border-t p-6 pb-10"
          >
            <CTAButtons fullWidth onNavigate={onLinkClick} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
