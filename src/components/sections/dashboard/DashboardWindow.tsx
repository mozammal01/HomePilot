"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Bell,
  Building2,
  CreditCard,
  Heart,
  Search,
  TrendingUp,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { PointerEvent } from "react";
import { useRef } from "react";

import { AnalyticsCard } from "@/components/sections/dashboard/AnalyticsCard";
import { CalendarWidget } from "@/components/sections/dashboard/CalendarWidget";
import { MaintenanceCard } from "@/components/sections/dashboard/MaintenanceCard";
import { NotificationPanel } from "@/components/sections/dashboard/NotificationPanel";
import { PaymentCard } from "@/components/sections/dashboard/PaymentCard";
import { PropertyCard } from "@/components/sections/dashboard/PropertyCard";
import { RevenueChart } from "@/components/sections/dashboard/RevenueChart";
import { TenantCard } from "@/components/sections/dashboard/TenantCard";

type FloatingToastData = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  className: string;
  floatDuration: number;
  floatDelay: number;
};

const floatingToasts: FloatingToastData[] = [
  {
    icon: CreditCard,
    title: "Payment Received",
    subtitle: "$1,450 · Unit 4B",
    className: "-top-6 -left-4 sm:-left-10",
    floatDuration: 6,
    floatDelay: 0,
  },
  {
    icon: Wrench,
    title: "Ticket Completed",
    subtitle: "Unit 2A · window latch",
    className: "-bottom-6 -right-4 sm:-right-10",
    floatDuration: 6.5,
    floatDelay: 0.4,
  },
];

function FloatingToast({
  icon: Icon,
  title,
  subtitle,
  className,
  floatDuration,
  floatDelay,
}: FloatingToastData) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: 0.5 + floatDelay,
        ease: [0.16, 1, 0.3, 1],
      }}
      aria-hidden="true"
      className={`absolute z-20 hidden sm:block ${className}`}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        }}
        className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card/90 p-3.5 shadow-xl backdrop-blur-xl"
      >
        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-foreground/5 text-foreground">
          <Icon className="size-4" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-foreground">
            {title}
          </p>
          <p className="truncate text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function DashboardWindow() {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const tiltX = useSpring(rawX, { stiffness: 120, damping: 20 });
  const tiltY = useSpring(rawY, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(tiltY, [-20, 20], [2.5, -2.5]);
  const rotateY = useTransform(tiltX, [-20, 20], [-2.5, 2.5]);

  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowBackground = useMotionTemplate`radial-gradient(480px circle at ${glowX}px ${glowY}px, color-mix(in srgb, var(--foreground) 7%, transparent), transparent 75%)`;

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
    rawX.set(relativeX * 40);
    rawY.set(relativeY * 40);
    glowX.set(event.clientX - rect.left);
    glowY.set(event.clientY - rect.top);
  }

  function handlePointerLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <div
      ref={ref}
      role="group"
      aria-label="Live product dashboard preview"
      className="relative mx-auto w-full perspective-[1600px]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 32 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          style={{ rotateX, rotateY, x: tiltX, y: tiltY }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 shadow-2xl backdrop-blur-2xl"
          >
            <motion.div
              style={{ background: glowBackground }}
              className="pointer-events-none absolute inset-0"
            />

            <div className="relative flex flex-col gap-4 p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-red-400/80" />
                  <span className="size-2.5 rounded-full bg-amber-400/80" />
                  <span className="size-2.5 rounded-full bg-emerald-400/80" />
                </div>

                <div className="hidden items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-muted-foreground sm:flex">
                  <Search className="size-3" aria-hidden="true" />
                  app.homepilot.com/dashboard
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <span className="relative flex size-1.5">
                      <span className="absolute size-full animate-ping rounded-full bg-emerald-500/70" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                    </span>
                    Live
                  </span>
                  <span className="relative flex size-7 items-center justify-center rounded-full bg-foreground/5">
                    <Bell
                      className="size-3.5 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <motion.span
                      className="absolute -top-0.5 -right-0.5 flex size-3.5 items-center justify-center rounded-full bg-red-500 text-[9px] font-semibold text-white"
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      6
                    </motion.span>
                  </span>
                  <span className="size-7 rounded-full bg-violet-400" />
                </div>
              </div>

              <RevenueChart />

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <PropertyCard />
                <TenantCard />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <MaintenanceCard />
                <PaymentCard />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <CalendarWidget />
                <NotificationPanel />
              </div>

              <div className="grid grid-cols-1 gap-3 border-t border-border/60 pt-4 sm:grid-cols-3 sm:gap-4">
                <AnalyticsCard
                  icon={TrendingUp}
                  label="Revenue Growth"
                  value="+12.4%"
                  trend="vs last quarter"
                  accentIndex={0}
                />
                <AnalyticsCard
                  icon={Building2}
                  label="Occupancy Growth"
                  value="+4.8%"
                  trend="vs last quarter"
                  accentIndex={2}
                />
                <AnalyticsCard
                  icon={Heart}
                  label="Satisfaction Score"
                  value="4.9 / 5"
                  trend="+0.3 pts"
                  accentIndex={1}
                />
              </div>
            </div>
          </motion.div>

          {floatingToasts.map((toast) => (
            <FloatingToast key={toast.title} {...toast} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
