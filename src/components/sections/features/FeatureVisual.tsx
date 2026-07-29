"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Bell,
  BarChart3,
  CreditCard,
  MessageCircle,
  TrendingUp,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useRef } from "react";

import { getAccentColor } from "@/components/sections/shared/gradients";
import { EASE_OUT } from "@/lib/motion";

export type FeatureVisualVariant =
  | "property"
  | "tenant"
  | "rent"
  | "maintenance"
  | "analytics"
  | "automation";

type FeatureVisualProps = {
  variant: FeatureVisualVariant;
  align: "left" | "right";
  index: number;
  label: string;
};

const floatingBadgeByVariant: Record<
  FeatureVisualVariant,
  { icon: LucideIcon; title: string; subtitle: string }
> = {
  property: {
    icon: Bell,
    title: "Property Added",
    subtitle: "Birchwood Residences",
  },
  tenant: { icon: MessageCircle, title: "New Message", subtitle: "Sarah Chen" },
  rent: { icon: CreditCard, title: "Payment Received", subtitle: "$1,450" },
  maintenance: { icon: Wrench, title: "Ticket Completed", subtitle: "Unit 2A" },
  analytics: { icon: BarChart3, title: "Report Ready", subtitle: "Monthly Summary" },
  automation: { icon: Zap, title: "Automation Active", subtitle: "3 workflows running" },
};

function StatusChip({
  tone,
  children,
}: {
  tone: "positive" | "warning" | "neutral";
  children: React.ReactNode;
}) {
  const toneClasses = {
    positive:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    neutral: "bg-foreground/8 text-muted-foreground",
  } as const;

  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[11px] font-medium whitespace-nowrap ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}

function OccupancyRing({ percent, caption }: { percent: number; caption: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="relative size-14 shrink-0 rounded-full"
        style={{
          background: `conic-gradient(var(--foreground) 0% ${percent}%, color-mix(in srgb, var(--foreground) 12%, transparent) ${percent}% 100%)`,
        }}
      >
        <div className="absolute inset-1 flex items-center justify-center rounded-full bg-card">
          <span className="text-xs font-semibold text-foreground">{percent}%</span>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">{caption}</p>
    </div>
  );
}

function MiniBars({ values }: { values: number[] }) {
  return (
    <div className="flex h-14 items-end gap-1.5">
      {values.map((height, i) => (
        <motion.div
          key={i}
          className="w-full flex-1 rounded-md bg-foreground/15"
          style={{ height: `${height}%` }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: i * 0.05, ease: EASE_OUT }}
        />
      ))}
    </div>
  );
}

function MiniSpark({ values }: { values: number[] }) {
  const points = values
    .map((v, i) => `${(i / (values.length - 1)) * 100},${32 - (v / 100) * 32}`)
    .join(" ");

  return (
    <svg
      viewBox="0 0 100 32"
      className="h-8 w-full text-foreground/70"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
}

function Avatar({ color }: { color: string }) {
  return <span className={`size-8 shrink-0 rounded-full ${color}`} />;
}

function PropertyMockup() {
  const rows = [
    { name: "Maple Grove Apartments", units: "24 units", occ: "96%" },
    { name: "Cedar Point Complex", units: "12 units", occ: "83%" },
    { name: "Birchwood Residences", units: "5 units", occ: "100%" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
        <p className="text-xs font-medium text-muted-foreground">
          Portfolio Occupancy
        </p>
        <div className="mt-3">
          <OccupancyRing percent={92} caption="38 of 41 units occupied" />
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        {rows.map((row) => (
          <div
            key={row.name}
            className="flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-background/60 p-3.5"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">
                {row.name}
              </p>
              <p className="text-xs text-muted-foreground">{row.units}</p>
            </div>
            <StatusChip tone="neutral">{row.occ} occ.</StatusChip>
          </div>
        ))}
      </div>
    </div>
  );
}

function TenantMockup() {
  const rows = [
    { name: "Sarah Chen", unit: "Unit 4B", status: "Active", tone: "positive" as const, color: "bg-violet-400" },
    { name: "Marcus Lee", unit: "Unit 2A", status: "Active", tone: "positive" as const, color: "bg-sky-400" },
    { name: "Priya Patel", unit: "Unit 9C", status: "Lease Ending", tone: "warning" as const, color: "bg-amber-400" },
  ];

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/60 p-4">
        <p className="text-sm font-semibold text-foreground">128 Active Tenants</p>
        <Users className="size-4 text-muted-foreground" aria-hidden="true" />
      </div>

      {rows.map((row) => (
        <div
          key={row.name}
          className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/60 p-3.5"
        >
          <Avatar color={row.color} />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-foreground">
              {row.name}
            </p>
            <p className="text-xs text-muted-foreground">{row.unit}</p>
          </div>
          <StatusChip tone={row.tone}>{row.status}</StatusChip>
        </div>
      ))}
    </div>
  );
}

function RentMockup() {
  const rows = [
    { name: "Sarah Chen", unit: "Unit 4B", amount: "$1,450", status: "Paid", tone: "positive" as const },
    { name: "Marcus Lee", unit: "Unit 2A", amount: "$1,200", status: "Paid", tone: "positive" as const },
    { name: "Priya Patel", unit: "Unit 9C", amount: "$1,600", status: "Due in 3 days", tone: "warning" as const },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
        <p className="text-xs font-medium text-muted-foreground">
          Collected This Month
        </p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold text-foreground">
            $48,230
          </span>
          <span className="flex items-center gap-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <TrendingUp className="size-3" aria-hidden="true" />
            8.2%
          </span>
        </div>
        <div className="mt-2">
          <MiniSpark values={[35, 48, 42, 55, 60, 58, 72]} />
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        {rows.map((row) => (
          <div
            key={row.name}
            className="flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-background/60 p-3.5"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">
                {row.unit} · {row.name}
              </p>
              <p className="text-xs text-muted-foreground">{row.amount}</p>
            </div>
            <StatusChip tone={row.tone}>{row.status}</StatusChip>
          </div>
        ))}
      </div>
    </div>
  );
}

function MaintenanceMockup() {
  const rows = [
    { title: "Leaking faucet", unit: "Unit 4B", status: "In Progress", tone: "warning" as const },
    { title: "AC not cooling", unit: "Unit 9C", status: "New", tone: "neutral" as const },
    { title: "Broken window latch", unit: "Unit 2A", status: "Completed", tone: "positive" as const },
  ];

  return (
    <div className="flex flex-col gap-2.5">
      {rows.map((row) => (
        <div
          key={row.title}
          className="flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-background/60 p-3.5"
        >
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">
              {row.title}
            </p>
            <p className="text-xs text-muted-foreground">
              {row.unit} · Mike R.
            </p>
          </div>
          <StatusChip tone={row.tone}>{row.status}</StatusChip>
        </div>
      ))}
    </div>
  );
}

function AnalyticsMockup() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
          <p className="text-xs font-medium text-muted-foreground">Revenue</p>
          <div className="mt-1.5 flex items-baseline gap-1.5">
            <span className="font-display text-lg font-semibold text-foreground">
              $284,500
            </span>
          </div>
          <span className="flex items-center gap-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <TrendingUp className="size-3" aria-hidden="true" />
            12.4%
          </span>
        </div>
        <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
          <p className="text-xs font-medium text-muted-foreground">Occupancy</p>
          <div className="mt-1.5">
            <span className="font-display text-lg font-semibold text-foreground">
              94%
            </span>
          </div>
          <span className="text-xs text-muted-foreground">212 of 226 units</span>
        </div>
      </div>

      <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
        <p className="text-xs font-medium text-muted-foreground">
          Revenue by Month
        </p>
        <div className="mt-3">
          <MiniBars values={[55, 72, 48, 90, 64, 100, 78]} />
        </div>
      </div>
    </div>
  );
}

function AutomationMockup() {
  const rules = ["Rent reminder emails", "Lease renewal alerts", "Maintenance status updates"];

  return (
    <div className="flex flex-col">
      {rules.map((rule, i) => (
        <div key={rule}>
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-background/60 p-3.5">
            <p className="text-sm font-medium text-foreground">{rule}</p>
            <span className="flex h-5 w-9 items-center rounded-full bg-foreground p-0.5">
              <span className="ml-auto size-4 rounded-full bg-background" />
            </span>
          </div>
          {i < rules.length - 1 && (
            <div className="ml-6 h-3 w-px bg-border/70" />
          )}
        </div>
      ))}
    </div>
  );
}

const mockupByVariant: Record<FeatureVisualVariant, () => React.JSX.Element> = {
  property: PropertyMockup,
  tenant: TenantMockup,
  rent: RentMockup,
  maintenance: MaintenanceMockup,
  analytics: AnalyticsMockup,
  automation: AutomationMockup,
};

export function FeatureVisual({ variant, align, index, label }: FeatureVisualProps) {
  const ref = useRef<HTMLDivElement>(null);
  const accent = getAccentColor(index);
  const { icon: BadgeIcon, title: badgeTitle, subtitle: badgeSubtitle } =
    floatingBadgeByVariant[variant];
  const Mockup = mockupByVariant[variant];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [32, -32]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
    >
      <motion.div
        style={{ y: parallaxY }}
        initial={{ opacity: 0, x: align === "left" ? -48 : 48 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="relative rounded-3xl border border-border/60 bg-card/80 p-5 shadow-2xl backdrop-blur-2xl sm:p-6"
        >
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-red-400/80" />
              <span className="size-2.5 rounded-full bg-amber-400/80" />
              <span className="size-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <p className="text-xs font-medium text-muted-foreground">{label}</p>
          </div>

          <Mockup />
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className={`absolute z-10 flex items-center gap-3 rounded-2xl border border-border/60 bg-card/90 p-3.5 shadow-xl backdrop-blur-xl ${
            align === "left"
              ? "-left-4 -bottom-6 sm:-left-8"
              : "-right-4 -bottom-6 sm:-right-8"
          }`}
        >
          <span
            className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-foreground/5"
            style={{ color: accent }}
          >
            <BadgeIcon className="size-4" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-foreground">
              {badgeTitle}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {badgeSubtitle}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
