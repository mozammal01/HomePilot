"use client";

import { Building2 } from "lucide-react";

export function PropertyCard() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-background/60 p-4 transition-colors duration-300 hover:border-foreground/15 sm:p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-muted-foreground">
          Property Overview
        </p>
        <Building2 className="size-4 text-muted-foreground" aria-hidden="true" />
      </div>

      <div className="flex items-center gap-3">
        <div
          className="relative size-14 shrink-0 rounded-full"
          style={{
            background:
              "conic-gradient(var(--foreground) 0% 92%, color-mix(in srgb, var(--foreground) 12%, transparent) 92% 100%)",
          }}
        >
          <div className="absolute inset-1 flex items-center justify-center rounded-full bg-card">
            <span className="text-xs font-semibold text-foreground">92%</span>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">
            Occupancy Rate
          </p>
          <p className="text-xs text-muted-foreground">212 of 226 units</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 border-t border-border/60 pt-3.5">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">
            48
          </p>
          <p className="text-xs text-muted-foreground">Total Properties</p>
        </div>
        <div>
          <p className="font-display text-lg font-semibold text-foreground">
            14
          </p>
          <p className="text-xs text-muted-foreground">Vacant Units</p>
        </div>
      </div>
    </div>
  );
}
