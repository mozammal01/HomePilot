"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { createFadeUpVariants, createStaggerContainer } from "@/lib/motion";

const container = createStaggerContainer();
const fadeUp = createFadeUpVariants(20);

const contactMethods = [
  {
    icon: Mail,
    label: "Email us",
    value: "hello@homepilot.com",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+1 (555) 200-4820",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "One Market Street, San Francisco, CA",
  },
  {
    icon: Clock,
    label: "Support hours",
    value: "Mon – Fri, 6am – 6pm PT",
  },
];

type ContactInfoProps = {
  headingId: string;
};

export function ContactInfo({ headingId }: ContactInfoProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={container}
      className="flex flex-col items-start gap-5 text-left"
    >
      <motion.div variants={fadeUp}>
        <Badge
          variant="outline"
          className="rounded-full border-border/70 bg-background/60 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-foreground/70 uppercase backdrop-blur-sm"
        >
          Contact
        </Badge>
      </motion.div>

      <motion.h2
        id={headingId}
        variants={fadeUp}
        className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
      >
        Let&apos;s Talk About Your Portfolio
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        Whether you have a question about pricing, need a custom Enterprise
        plan, or just want a walkthrough — our team is ready to help.
      </motion.p>

      <motion.ul variants={fadeUp} className="mt-2 flex w-full flex-col gap-4">
        {contactMethods.map(({ icon: Icon, label, value }) => (
          <li key={label} className="flex items-center gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-foreground/5 text-foreground">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="text-sm font-medium text-foreground">{value}</p>
            </div>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
