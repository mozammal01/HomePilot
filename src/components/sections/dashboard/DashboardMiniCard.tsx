import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Exported so motion.div-based cards (which need whileHover) can share the same shell. */
export const dashboardMiniCardClassName =
  "rounded-2xl border border-border/60 bg-background/60 p-4 transition-colors duration-300 hover:border-foreground/15 sm:p-5";

type DashboardMiniCardProps = {
  children: ReactNode;
  className?: string;
};

/** Shared shell for every widget inside the dashboard mockup window. */
export function DashboardMiniCard({ children, className }: DashboardMiniCardProps) {
  return (
    <div className={cn(dashboardMiniCardClassName, className)}>{children}</div>
  );
}
