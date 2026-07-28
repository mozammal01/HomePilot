"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";

import { BillingToggle } from "@/components/sections/pricing/BillingToggle";
import { PricingCard, type PricingPlan } from "@/components/sections/pricing/PricingCard";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { SectionBackground } from "@/components/sections/shared/SectionBackground";
import { siteConfig } from "@/config/site";

const plans: PricingPlan[] = [
  {
    name: "Starter",
    description: "For independent landlords getting organized.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      "Up to 10 properties",
      "Online rent collection",
      "Tenant portal",
      "Maintenance tracking",
      "Basic reports",
      "Email support",
    ],
    ctaLabel: "Start Free Trial",
    ctaHref: siteConfig.auth.getStarted,
  },
  {
    name: "Professional",
    description: "For growing teams that need automation.",
    monthlyPrice: 129,
    yearlyPrice: 99,
    features: [
      "Everything in Starter",
      "Up to 100 properties",
      "Advanced analytics & reports",
      "Automation workflows",
      "Team collaboration (5 seats)",
      "API access",
      "Priority support",
    ],
    ctaLabel: "Start Free Trial",
    ctaHref: siteConfig.auth.getStarted,
    recommended: true,
  },
  {
    name: "Enterprise",
    description: "For large portfolios with custom needs.",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Everything in Professional",
      "Unlimited properties",
      "Unlimited team seats",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced security & SSO",
      "SLA & premium support",
    ],
    ctaLabel: "Contact Sales",
    ctaHref: "#contact",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

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
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} yearly={yearly} index={index} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
