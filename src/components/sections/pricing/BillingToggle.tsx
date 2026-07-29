"use client";

import { Switch } from "@/components/ui/switch";
import { pricingPlans } from "@/config/pricing";

function getMinYearlyDiscountPercent() {
  const discounts = pricingPlans
    .filter((plan) => plan.monthlyPrice !== null && plan.yearlyPrice !== null)
    .map((plan) => {
      const monthly = plan.monthlyPrice as number;
      const yearly = plan.yearlyPrice as number;
      return ((monthly - yearly) / monthly) * 100;
    });

  return Math.floor(Math.min(...discounts));
}

type BillingToggleProps = {
  yearly: boolean;
  onChange: (yearly: boolean) => void;
};

export function BillingToggle({ yearly, onChange }: BillingToggleProps) {
  const minDiscountPercent = getMinYearlyDiscountPercent();

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
          Save {minDiscountPercent}%+
        </span>
      </span>
    </div>
  );
}
