import { Wrench } from "lucide-react";

const tickets = [
  { title: "Leaking faucet", unit: "Unit 4B", priority: "High", tone: "negative" as const },
  { title: "AC not cooling", unit: "Unit 9C", priority: "Medium", tone: "warning" as const },
  { title: "Hallway lighting", unit: "Unit 2A", priority: "Low", tone: "neutral" as const },
];

const toneClasses = {
  negative: "bg-red-500/10 text-red-600 dark:text-red-400",
  warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  neutral: "bg-foreground/8 text-muted-foreground",
} as const;

export function MaintenanceCard() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-background/60 p-4 transition-colors duration-300 hover:border-foreground/15 sm:p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-muted-foreground">
          Maintenance Center
        </p>
        <Wrench className="size-4 text-muted-foreground" aria-hidden="true" />
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">
            9
          </p>
          <p className="text-xs text-muted-foreground">Open Requests</p>
        </div>
        <div>
          <p className="font-display text-lg font-semibold text-foreground">
            142
          </p>
          <p className="text-xs text-muted-foreground">Completed</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-border/60 pt-3.5">
        {tickets.map((ticket) => (
          <div
            key={ticket.title}
            className="flex items-center justify-between gap-2"
          >
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-foreground">
                {ticket.title}
              </p>
              <p className="text-[11px] text-muted-foreground">{ticket.unit}</p>
            </div>
            <span
              className={`inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[10px] font-medium whitespace-nowrap ${toneClasses[ticket.tone]}`}
            >
              {ticket.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
