import { CreditCard } from "lucide-react";

const transactions = [
  { name: "Sarah Chen", amount: "$1,450", status: "Collected", tone: "positive" as const },
  { name: "Marcus Lee", amount: "$1,200", status: "Collected", tone: "positive" as const },
  { name: "Priya Patel", amount: "$1,600", status: "Pending", tone: "warning" as const },
];

const toneClasses = {
  positive: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
} as const;

export function PaymentCard() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-background/60 p-4 transition-colors duration-300 hover:border-foreground/15 sm:p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-muted-foreground">
          Payment Activity
        </p>
        <CreditCard className="size-4 text-muted-foreground" aria-hidden="true" />
      </div>

      <div className="flex flex-col gap-2.5">
        {transactions.map((tx) => (
          <div
            key={tx.name}
            className="flex items-center justify-between gap-2"
          >
            <p className="truncate text-xs font-medium text-foreground">
              {tx.name}
            </p>
            <div className="flex shrink-0 items-center gap-2">
              <span className="text-xs text-muted-foreground">
                {tx.amount}
              </span>
              <span
                className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium whitespace-nowrap ${toneClasses[tx.tone]}`}
              >
                {tx.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
