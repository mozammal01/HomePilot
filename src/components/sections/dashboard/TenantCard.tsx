"use client";

import { Users } from "lucide-react";

const stats = [
  { label: "Active Tenants", value: "1,284" },
  { label: "Lease Renewals", value: "18" },
  { label: "New Applications", value: "7" },
];

const avatarColors = ["bg-violet-400", "bg-sky-400", "bg-amber-400", "bg-emerald-400"];

export function TenantCard() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-background/60 p-4 transition-colors duration-300 hover:border-foreground/15 sm:p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-muted-foreground">
          Tenant Management
        </p>
        <Users className="size-4 text-muted-foreground" aria-hidden="true" />
      </div>

      <div className="flex flex-col gap-2.5">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">{stat.label}</p>
            <p className="text-sm font-semibold text-foreground">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="flex -space-x-2 border-t border-border/60 pt-3.5">
        {avatarColors.map((color, i) => (
          <span
            key={color}
            className={`size-7 rounded-full border-2 border-card ${color}`}
            style={{ zIndex: avatarColors.length - i }}
          />
        ))}
        <span className="flex size-7 items-center justify-center rounded-full border-2 border-card bg-foreground/10 text-[10px] font-medium text-foreground">
          +9
        </span>
      </div>
    </div>
  );
}
