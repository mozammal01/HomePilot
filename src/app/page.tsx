import dynamic from "next/dynamic";

import { Hero } from "@/components/sections/hero";
import { SuccessMetrics } from "@/components/sections/metrics";
import { TrustedCompanies } from "@/components/sections/trusted";
import { WhyHomePilot } from "@/components/sections/why-homepilot";

const Features = dynamic(() =>
  import("@/components/sections/features").then((mod) => mod.Features)
);
const DashboardShowcase = dynamic(() =>
  import("@/components/sections/dashboard").then((mod) => mod.DashboardShowcase)
);
const Benefits = dynamic(() =>
  import("@/components/sections/benefits").then((mod) => mod.Benefits)
);
const HowItWorks = dynamic(() =>
  import("@/components/sections/how-it-works").then((mod) => mod.HowItWorks)
);
const Pricing = dynamic(() =>
  import("@/components/sections/pricing").then((mod) => mod.Pricing)
);
const Testimonials = dynamic(() =>
  import("@/components/sections/testimonials").then((mod) => mod.Testimonials)
);
const Faq = dynamic(() =>
  import("@/components/sections/faq").then((mod) => mod.Faq)
);
const CTA = dynamic(() =>
  import("@/components/sections/cta").then((mod) => mod.CTA)
);
const Newsletter = dynamic(() =>
  import("@/components/sections/newsletter").then((mod) => mod.Newsletter)
);
const Contact = dynamic(() =>
  import("@/components/sections/contact").then((mod) => mod.Contact)
);

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <TrustedCompanies />
      <SuccessMetrics />
      <WhyHomePilot />
      <Features />
      <DashboardShowcase />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Faq />
      <CTA />
      <Newsletter />
      <Contact />
    </main>
  );
}
