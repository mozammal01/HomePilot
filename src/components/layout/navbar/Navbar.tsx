"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { CTAButtons } from "@/components/layout/navbar/CTAButtons";
import { Logo } from "@/components/layout/navbar/Logo";
import { MobileMenu } from "@/components/layout/navbar/MobileMenu";
import { NavLinks } from "@/components/layout/navbar/NavLinks";
import { siteConfig } from "@/config/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

const navHrefs = siteConfig.nav.map((item) => item.href);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled(8);
  const activeHref = useActiveSection(navHrefs);

  useLockBodyScroll(isOpen);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8",
          scrolled
            ? "border-border/60 bg-background/70 shadow-black/[0.04] mt-3 rounded-2xl border py-3 shadow-lg backdrop-blur-xl"
            : "mt-0 border border-transparent bg-transparent py-5"
        )}
      >
        <Logo />

        <NavLinks items={siteConfig.nav} activeHref={activeHref} />

        <div className="hidden md:flex">
          <CTAButtons />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="relative z-50 flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                <X className="size-5" aria-hidden="true" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                <Menu className="size-5" aria-hidden="true" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <MobileMenu
        isOpen={isOpen}
        items={siteConfig.nav}
        activeHref={activeHref}
        onLinkClick={() => setIsOpen(false)}
      />
    </motion.header>
  );
}
