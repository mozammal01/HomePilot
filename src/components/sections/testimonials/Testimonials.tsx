"use client";

import type { TestimonialData } from "@/components/sections/testimonials/TestimonialCard";
import { TestimonialCarousel } from "@/components/sections/testimonials/TestimonialCarousel";
import { SectionHeader } from "@/components/sections/testimonials/SectionHeader";
import { SectionBackground } from "@/components/sections/shared/SectionBackground";

const testimonials: TestimonialData[] = [
  {
    name: "Amanda Reyes",
    role: "Portfolio Director",
    company: "Meridian Living",
    rating: 5,
    review:
      "HomePilot cut our rent collection time in half and our tenants love the portal. It's the best investment we've made in years.",
    initials: "AR",
    avatarColor: "bg-violet-500",
  },
  {
    name: "David Okafor",
    role: "Owner",
    company: "Okafor Properties Group",
    rating: 5,
    review:
      "We manage 40 buildings with a team of four. That would have been impossible before HomePilot's automation.",
    initials: "DO",
    avatarColor: "bg-sky-500",
  },
  {
    name: "Sofia Martins",
    role: "Operations Lead",
    company: "Brightline Residential",
    rating: 5,
    review:
      "The maintenance workflow alone saved us 15 hours a week. Support tickets that used to take days now close in hours.",
    initials: "SM",
    avatarColor: "bg-emerald-500",
  },
  {
    name: "James Whitfield",
    role: "CEO",
    company: "Whitfield Realty Partners",
    rating: 4,
    review:
      "Switching platforms felt risky, but the migration team made it painless. Six months in, we haven't looked back.",
    initials: "JW",
    avatarColor: "bg-amber-500",
  },
  {
    name: "Priya Nandakumar",
    role: "Property Manager",
    company: "Skyline Estates",
    rating: 5,
    review:
      "Our tenant satisfaction score jumped from 72 to 94 within two quarters of switching to HomePilot.",
    initials: "PN",
    avatarColor: "bg-rose-500",
  },
  {
    name: "Marcus Feldman",
    role: "Founder",
    company: "Feldman & Co. Real Estate",
    rating: 4,
    review:
      "Onboarding took a bit of learning, but the analytics dashboard alone is worth it. We finally see our numbers in real time.",
    initials: "MF",
    avatarColor: "bg-blue-500",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-x-clip px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <SectionBackground variant="reverse" withDivider />

      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          headingId="testimonials-heading"
          badge="Testimonials"
          headline="Loved by Property Teams Everywhere"
          description="Don't just take our word for it — here's what property managers and owners say after switching to HomePilot."
        />

        <div className="mt-12 sm:mt-16">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
