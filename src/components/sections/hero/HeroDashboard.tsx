"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { TrendingUp, Users } from "lucide-react";
import type { PointerEvent } from "react";

import { FloatingCards } from "@/components/sections/hero/FloatingCards";
import { EASE_OUT } from "@/lib/motion";

const revenueSpark = [40, 55, 48, 62, 58, 72, 68, 84];
const paymentBars = [55, 72, 48, 90, 64, 100, 78];

const container: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.15, ease: EASE_OUT },
  },
};

function StatCard({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      {children}
    </div>
  );
}

export function HeroDashboard() {
  const prefersReducedMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const parallaxX = useSpring(rawX, { stiffness: 120, damping: 20 });
  const parallaxY = useSpring(rawY, { stiffness: 120, damping: 20 });

  const panelRotateX = useTransform(parallaxY, [-20, 20], [3, -3]);
  const panelRotateY = useTransform(parallaxX, [-20, 20], [-3, 3]);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
    rawX.set(relativeX * 40);
    rawY.set(relativeY * 40);
  }

  function handlePointerLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-hidden="true"
      className="relative mx-auto w-full max-w-140 perspective-[1600px] lg:max-w-none"
    >
      <motion.div variants={container} initial="hidden" animate="visible">
        <motion.div
          style={{
            rotateX: panelRotateX,
            rotateY: panelRotateY,
            x: parallaxX,
            y: parallaxY,
          }}
        >
          <motion.div
            animate={!prefersReducedMotion ? { y: [0, -14, 0] } : undefined}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: "transform" }}
            className="relative rounded-3xl border border-border/60 bg-card/80 p-5 shadow-2xl backdrop-blur-lg sm:p-6"
          >
            {/* window chrome */}
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-red-400/80" />
                <span className="size-2.5 rounded-full bg-amber-400/80" />
                <span className="size-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <span className="relative flex size-1.5">
                  <span className="absolute size-full animate-ping rounded-full bg-emerald-500/70" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                </span>
                Live
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <StatCard label="Occupancy Rate">
                <div className="mt-3 flex items-center gap-3">
                  <div
                    className="relative size-12 shrink-0 rounded-full"
                    style={{
                      background:
                        "conic-gradient(var(--foreground) 0% 94%, color-mix(in srgb, var(--foreground) 12%, transparent) 94% 100%)",
                    }}
                  >
                    <div className="absolute inset-0.75 flex items-center justify-center rounded-full bg-card">
                      <span className="text-[11px] font-semibold text-foreground">
                        94%
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    212 of 226 units
                  </p>
                </div>
              </StatCard>

              <StatCard label="Total Revenue">
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display text-xl font-semibold text-foreground">
                    $284,500
                  </span>
                  <span className="flex items-center gap-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <TrendingUp className="size-3" aria-hidden="true" />
                    12.4%
                  </span>
                </div>
                <svg
                  viewBox="0 0 100 32"
                  className="mt-2 h-8 w-full text-foreground/70"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={revenueSpark
                      .map(
                        (v, i) =>
                          `${(i / (revenueSpark.length - 1)) * 100},${32 - (v / 100) * 32}`,
                      )
                      .join(" ")}
                  />
                </svg>
              </StatCard>

              <StatCard label="Monthly Rent">
                <div className="mt-3">
                  <p className="text-sm font-semibold text-foreground">
                    $42,300{" "}
                    <span className="font-normal text-muted-foreground">
                      / $45,000
                    </span>
                  </p>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-foreground/10">
                    <motion.div
                      className="h-full w-[94%] rounded-full bg-foreground"
                      style={{ transformOrigin: "left" }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.45,
                        ease: EASE_OUT,
                      }}
                    />
                  </div>
                </div>
              </StatCard>

              <StatCard label="Active Tenants">
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-display text-xl font-semibold text-foreground">
                    1,284
                  </span>
                  <div className="flex -space-x-2">
                    {["bg-violet-400", "bg-sky-400", "bg-amber-400"].map(
                      (color, i) => (
                        <span
                          key={color}
                          className={`size-6 rounded-full border-2 border-card ${color}`}
                          style={{ zIndex: 3 - i }}
                        />
                      ),
                    )}
                  </div>
                </div>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <Users className="size-3" aria-hidden="true" />
                  +18 this month
                </p>
              </StatCard>
            </div>

            <div className="mt-3 rounded-2xl border border-border/60 bg-background/60 p-4 sm:mt-4">
              <p className="text-xs font-medium text-muted-foreground">
                Payment Analytics
              </p>
              <div className="mt-3 flex h-16 items-end gap-2">
                {paymentBars.map((height, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-md bg-foreground/15"
                    style={{ height: `${height}%` }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.55 + i * 0.04,
                      ease: EASE_OUT,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <FloatingCards parallaxX={parallaxX} parallaxY={parallaxY} />
    </div>
  );
}
