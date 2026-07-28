"use client";

import { motion } from "framer-motion";

import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { SectionBackground } from "@/components/sections/shared/SectionBackground";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-x-clip px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <SectionBackground variant="reverse" withDivider />

      <div className="mx-auto grid w-full max-w-7xl items-start gap-16 lg:grid-cols-5 lg:gap-14 xl:gap-20">
        <div className="lg:col-span-2 lg:sticky lg:top-32">
          <ContactInfo headingId="contact-heading" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-3"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
