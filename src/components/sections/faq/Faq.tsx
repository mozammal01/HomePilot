"use client";

import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/sections/faq/SectionHeader";
import { SectionBackground } from "@/components/sections/shared/SectionBackground";

const faqs = [
  {
    question: "What is HomePilot and who is it for?",
    answer:
      "HomePilot is an all-in-one property management platform for landlords, property managers, and real estate businesses. It works for a single-unit owner just as well as a team managing hundreds of properties across multiple cities.",
  },
  {
    question: "How long does it take to get started?",
    answer:
      "Most teams are up and running in under a day. Guided setup, bulk CSV import, and our onboarding concierge make it fast to add properties, tenants, and leases without starting from scratch.",
  },
  {
    question: "Can I import my existing properties and tenants?",
    answer:
      "Yes. You can import properties and tenant records via CSV, or our onboarding team can migrate your data from most popular property management tools at no extra cost on Professional and Enterprise plans.",
  },
  {
    question: "Is online rent collection secure?",
    answer:
      "Absolutely. All payments are processed through PCI-compliant, bank-level encrypted infrastructure. HomePilot never stores raw card or bank account numbers on our servers.",
  },
  {
    question: "Do tenants need to download an app?",
    answer:
      "No download required. Tenants access their portal from any browser to pay rent, submit maintenance requests, and message your team — with an optional mobile app for on-the-go access.",
  },
  {
    question: "What happens if I need to cancel my subscription?",
    answer:
      "You can cancel anytime from your account settings with no cancellation fees. Your data remains exportable for 90 days after cancellation so you're never locked in.",
  },
  {
    question: "Does HomePilot integrate with my accounting software?",
    answer:
      "HomePilot integrates with popular accounting tools like QuickBooks and Xero, plus a REST API on Professional and Enterprise plans for custom integrations with your existing stack.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes — every plan starts with a 14-day free trial, no credit card required. You'll have full access to explore the platform before committing to a plan.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "All plans include email support with fast response times. Professional plans add priority support, and Enterprise customers get a dedicated account manager plus SLA-backed response guarantees.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative overflow-x-clip px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <SectionBackground variant="reverse" withDivider />

      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          headingId="faq-heading"
          badge="FAQ"
          headline="Frequently Asked Questions"
          description="Everything you need to know about getting started with HomePilot. Can't find your answer? Reach out to our team."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-12 max-w-3xl rounded-3xl border border-border/60 bg-card/60 p-2 shadow-lg backdrop-blur-xl sm:mt-16 sm:p-4"
        >
          <Accordion className="px-2 sm:px-4">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="py-4 text-base font-semibold text-foreground sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
