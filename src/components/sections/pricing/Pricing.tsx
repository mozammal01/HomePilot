"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { BillingToggle } from "@/components/sections/pricing/BillingToggle";
import { PricingCard } from "@/components/sections/pricing/PricingCard";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { SectionBackground } from "@/components/sections/shared/SectionBackground";
import { pricingPlans } from "@/config/pricing";
import { createStaggerContainer } from "@/lib/motion";

const container = createStaggerContainer(0.1, 0);

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative overflow-x-clip px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <SectionBackground withDivider />

      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          headingId="pricing-heading"
          badge="Pricing"
          headline="Simple, Transparent Pricing That Scales With You"
          description="Start free, upgrade as your portfolio grows. No hidden fees, no surprises — cancel anytime."
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex justify-center sm:mt-10"
        >
          <BillingToggle yearly={yearly} onChange={setYearly} />
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
          className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-3 lg:items-center lg:gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} yearly={yearly} index={index} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
