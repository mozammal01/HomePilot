"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { getAccentColor } from "@/components/sections/shared/gradients";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export type TestimonialData = {
  name: string;
  role: string;
  company: string;
  rating: number;
  review: string;
  initials: string;
  avatarColor: string;
};

type TestimonialCardProps = TestimonialData & { index: number };

export function TestimonialCard({
  name,
  role,
  company,
  rating,
  review,
  initials,
  avatarColor,
  index,
}: TestimonialCardProps) {
  const accent = getAccentColor(index);

  return (
    <div
      className="relative mx-auto w-full max-w-3xl rounded-3xl p-px"
      style={{
        backgroundImage: `linear-gradient(135deg, color-mix(in srgb, ${accent} 40%, transparent), transparent 45%, color-mix(in srgb, ${accent} 20%, transparent))`,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-3xl opacity-40 blur-2xl"
        style={{
          backgroundImage: `linear-gradient(135deg, ${accent}, transparent 65%)`,
        }}
      />

      <div className="relative flex flex-col items-center gap-6 rounded-[calc(var(--radius-3xl)-1px)] bg-card/80 p-8 text-center shadow-xl backdrop-blur-xl sm:p-12">
        <span
          className="flex size-12 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: `color-mix(in srgb, ${accent} 14%, transparent)`,
            color: accent,
          }}
        >
          <Quote className="size-5" aria-hidden="true" />
        </span>

        <div
          className="flex items-center gap-1"
          role="img"
          aria-label={`${rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              aria-hidden="true"
              className={`size-4 ${
                i < rating
                  ? "fill-amber-400 text-amber-400"
                  : "fill-transparent text-border"
              }`}
            />
          ))}
        </div>

        <p className="text-balance font-display text-xl leading-relaxed font-medium tracking-tight text-foreground sm:text-2xl">
          “{review}”
        </p>

        <div
          className="h-px w-12 rounded-full"
          style={{ backgroundColor: `color-mix(in srgb, ${accent} 50%, transparent)` }}
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <Avatar
            size="lg"
            style={{
              boxShadow: `0 0 0 3px color-mix(in srgb, ${accent} 45%, transparent)`,
            }}
          >
            <AvatarFallback className={`${avatarColor} text-white`}>
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="text-left">
            <p className="text-sm font-semibold text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">
              {role} · {company}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
