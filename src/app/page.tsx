import { DashboardShowcase } from "@/components/sections/dashboard";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { SuccessMetrics } from "@/components/sections/metrics";
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
    </main>
  );
}
