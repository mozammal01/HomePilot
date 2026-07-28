"use client";

import { DashboardBackground } from "@/components/sections/dashboard/DashboardBackground";
import { DashboardContent } from "@/components/sections/dashboard/DashboardContent";
import { DashboardWindow } from "@/components/sections/dashboard/DashboardWindow";

export function DashboardShowcase() {
  return (
    <section
      id="platform-preview"
      aria-labelledby="dashboard-showcase-heading"
      className="relative overflow-x-clip px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <DashboardBackground />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-5 lg:gap-14 xl:gap-20">
        <div className="lg:col-span-2">
          <DashboardContent headingId="dashboard-showcase-heading" />
        </div>
        <div className="lg:col-span-3">
          <DashboardWindow />
        </div>
      </div>
    </section>
  );
}
