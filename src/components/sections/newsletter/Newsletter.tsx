"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import { NewsletterForm } from "@/components/sections/newsletter/NewsletterForm";
import { getAccentColor } from "@/components/sections/shared/gradients";
import { createFadeUpVariants, createStaggerContainer } from "@/lib/motion";

const container = createStaggerContainer();
const fadeUp = createFadeUpVariants();

export function Newsletter() {
  const accent = getAccentColor(1);

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="relative overflow-x-clip px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/60 px-6 py-14 shadow-2xl backdrop-blur-xl sm:px-12 sm:py-16">
          <motion.div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.14] blur-3xl dark:opacity-[0.1]"
            style={{
              backgroundImage: `radial-gradient(circle, ${accent} 0%, transparent 70%)`,
            }}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
            className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center"
          >
            <motion.span
              variants={fadeUp}
              className="flex size-12 items-center justify-center rounded-2xl bg-foreground/5"
              style={{ color: accent }}
            >
              <Mail className="size-5" aria-hidden="true" />
            </motion.span>

            <motion.h2
              id="newsletter-heading"
              variants={fadeUp}
              className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              Get Property Management Tips in Your Inbox
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-balance text-base leading-relaxed text-muted-foreground"
            >
              Join thousands of property professionals getting monthly
              insights on automation, tenant retention, and portfolio growth.
              No spam, unsubscribe anytime.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-2 w-full">
              <NewsletterForm />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
