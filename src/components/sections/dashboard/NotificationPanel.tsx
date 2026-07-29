"use client";

import { Bell, CreditCard, MessageCircle, Wrench, type LucideIcon } from "lucide-react";
import { useId, useState } from "react";

import { DashboardMiniCard } from "@/components/sections/dashboard/DashboardMiniCard";

type Notification = {
  icon: LucideIcon;
  title: string;
  meta: string;
};

const notifications: Notification[] = [
  { icon: CreditCard, title: "Payment reminder", meta: "Unit 9C · due in 3 days" },
  { icon: Wrench, title: "Maintenance alert", meta: "Unit 4B · faucet leak" },
  { icon: MessageCircle, title: "Tenant message", meta: "Sarah Chen · new message" },
  { icon: CreditCard, title: "Payment received", meta: "Unit 2A · $1,200" },
  { icon: Wrench, title: "Ticket completed", meta: "Unit 2A · window latch" },
  { icon: MessageCircle, title: "Tenant message", meta: "Marcus Lee · new message" },
];

function NotificationItem({ icon: Icon, title, meta }: Notification) {
  return (
    <li className="flex items-center gap-3">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-foreground/5 text-foreground">
        <Icon className="size-3.5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="truncate text-xs font-medium text-foreground">{title}</p>
        <p className="truncate text-[11px] text-muted-foreground">{meta}</p>
      </div>
    </li>
  );
}

export function NotificationPanel() {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();
  const visible = notifications.slice(0, 3);
  const rest = notifications.slice(3);

  return (
    <DashboardMiniCard className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-muted-foreground">
          Notifications
        </p>
        <span className="relative flex size-5 shrink-0 items-center justify-center">
          <Bell className="size-4 text-muted-foreground" aria-hidden="true" />
          <span className="absolute -top-1 -right-1 flex size-3.5 items-center justify-center rounded-full bg-red-500 text-[9px] font-semibold text-white">
            {notifications.length}
          </span>
        </span>
      </div>

      <ul className="flex flex-col gap-3">
        {visible.map((item) => (
          <NotificationItem key={item.title + item.meta} {...item} />
        ))}
      </ul>

      <div
        id={listId}
        className="grid overflow-hidden transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
      >
        <ul className="flex min-h-0 flex-col gap-3 pt-3">
          {rest.map((item) => (
            <NotificationItem key={item.title + item.meta} {...item} />
          ))}
        </ul>
      </div>

      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={listId}
        onClick={() => setExpanded((value) => !value)}
        className="rounded-sm text-left text-xs font-medium text-foreground/80 underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
      >
        {expanded ? "Show less" : `View all (${notifications.length})`}
      </button>
    </DashboardMiniCard>
  );
}
