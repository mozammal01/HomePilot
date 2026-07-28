"use client";

import { CalendarClock } from "lucide-react";

const days = ["S", "M", "T", "W", "T", "F", "S"];
const activeDay = 3;
const eventDays = [1, 3, 5];

const events = [
  { title: "Property Inspection", meta: "Maple Grove · Tomorrow" },
  { title: "Lease Expiration", meta: "Unit 9C · Aug 4" },
  { title: "AC Maintenance", meta: "Unit 2A · Aug 6" },
];

export function CalendarWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-background/60 p-4 transition-colors duration-300 hover:border-foreground/15 sm:p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-muted-foreground">Calendar</p>
        <CalendarClock className="size-4 text-muted-foreground" aria-hidden="true" />
      </div>

      <div className="flex items-center justify-between">
        {days.map((day, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span
              className={`flex size-6 items-center justify-center rounded-full text-[11px] font-medium ${
                i === activeDay
                  ? "bg-foreground text-background"
                  : "text-muted-foreground"
              }`}
            >
              {day}
            </span>
            <span
              className={`size-1 rounded-full ${
                eventDays.includes(i) ? "bg-foreground/60" : "bg-transparent"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2.5 border-t border-border/60 pt-3.5">
        {events.map((event) => (
          <div key={event.title} className="flex items-center gap-2.5">
            <span className="size-1.5 shrink-0 rounded-full bg-foreground/50" />
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-foreground">
                {event.title}
              </p>
              <p className="truncate text-[11px] text-muted-foreground">
                {event.meta}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
