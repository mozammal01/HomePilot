import { Hero } from "@/components/sections/hero";
import { SuccessMetrics } from "@/components/sections/metrics";
import { TrustedCompanies } from "@/components/sections/trusted";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <TrustedCompanies />
      <SuccessMetrics />
    </main>
  );
}
