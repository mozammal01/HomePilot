"use client";

import { motion, type Variants } from "framer-motion";

import { SectionBackground } from "@/components/sections/shared/SectionBackground";
import { CompanyLogo } from "@/components/sections/trusted/CompanyLogo";

const companies = [
  "UrbanNest",
  "Skyline Realty",
  "Prime Estates",
  "Nova Living",
  "BlueRock Properties",
  "Horizon Homes",
  "Elite Rentals",
  "Vertex Realty",
] as const;

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function TrustedCompanies() {
  return (
    <section
      aria-labelledby="trusted-companies-heading"
      className="relative overflow-x-clip px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <SectionBackground withDivider />

      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={container}
          className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center"
        >
          <motion.h2
            id="trusted-companies-heading"
            variants={fadeUp}
            className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Trusted by Leading Property Management Teams
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-balance text-base leading-relaxed text-muted-foreground"
          >
            Join thousands of landlords, agencies, and property managers who
            trust HomePilot to manage their business efficiently.
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          aria-label="Companies that trust HomePilot"
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4"
        >
          {companies.map((name, index) => (
            <CompanyLogo key={name} name={name} index={index} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
