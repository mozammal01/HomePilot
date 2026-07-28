"use client";

import { Switch } from "@/components/ui/switch";

type BillingToggleProps = {
  yearly: boolean;
  onChange: (yearly: boolean) => void;
};

export function BillingToggle({ yearly, onChange }: BillingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={`text-sm font-medium transition-colors ${
          !yearly ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        Monthly
      </span>
      <Switch
        checked={yearly}
        onCheckedChange={onChange}
        aria-label="Toggle yearly billing"
      />
      <span
        className={`flex items-center gap-2 text-sm font-medium transition-colors ${
          yearly ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        Yearly
        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
          Save 20%
        </span>
      </span>
    </div>
  );
}
