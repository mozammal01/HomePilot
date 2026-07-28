"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, CalendarClock } from "lucide-react";
import Link from "next/link";

import { CTABackground } from "@/components/sections/cta/CTABackground";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function CTA() {
  return (
    <section
      id="get-started"
      aria-labelledby="cta-heading"
      className="relative overflow-x-clip px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[2.5rem] border border-border/60 bg-card/70 px-6 py-20 text-center shadow-2xl backdrop-blur-xl sm:px-12 sm:py-24">
        <CTABackground />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="mx-auto flex max-w-2xl flex-col items-center gap-6"
        >
          <motion.h2
            id="cta-heading"
            variants={fadeUp}
            className="text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Ready to Modernize Your Property Management?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Join thousands of property managers running their portfolios on
            HomePilot. Start your free trial today — no credit card required.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-2 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          >
            <motion.div whileHover={{ scale: 1.02 }}>
              <Button
                size="lg"
                nativeButton={false}
                className="group h-12 w-full rounded-full px-7 text-base shadow-lg shadow-primary/20 active:scale-[0.98] sm:w-auto"
                render={<Link href={siteConfig.auth.getStarted} />}
              >
                Start Free Trial
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                className="h-12 w-full rounded-full border-border/80 bg-background/60 px-7 text-base backdrop-blur-sm active:scale-[0.98] sm:w-auto"
                render={<Link href={siteConfig.auth.demo} />}
              >
                <CalendarClock className="size-4" aria-hidden="true" />
                Book a Demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
