import { Benefits } from "@/components/sections/benefits";
import { Contact } from "@/components/sections/contact";
import { CTA } from "@/components/sections/cta";
import { DashboardShowcase } from "@/components/sections/dashboard";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SuccessMetrics } from "@/components/sections/metrics";
import { Newsletter } from "@/components/sections/newsletter";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustedCompanies } from "@/components/sections/trusted";
import { WhyHomePilot } from "@/components/sections/why-homepilot";

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
