"use client";

import { motion } from "framer-motion";

import { IllustrativeDataNote } from "@/components/sections/shared/IllustrativeDataNote";
import { SectionBackground } from "@/components/sections/shared/SectionBackground";
import { CompanyLogo } from "@/components/sections/trusted/CompanyLogo";
import { createFadeUpVariants, createStaggerContainer } from "@/lib/motion";

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

const container = createStaggerContainer(0.06, 0.1);
const fadeUp = createFadeUpVariants();

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
            Built for the landlords, agencies, and property managers who need
            to run their business efficiently, at any scale.
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

        <IllustrativeDataNote>
          Company names shown are illustrative examples for demonstration —
          not real HomePilot customers.
        </IllustrativeDataNote>
      </div>
    </section>
  );
}
