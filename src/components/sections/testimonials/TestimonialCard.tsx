"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

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

export function TestimonialCard({
  name,
  role,
  company,
  rating,
  review,
  initials,
  avatarColor,
}: TestimonialData) {
  return (
    <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-6 rounded-3xl border border-border/60 bg-card/70 p-8 text-center shadow-xl backdrop-blur-xl sm:p-12">
      <Quote
        className="size-10 text-foreground/10 sm:size-12"
        aria-hidden="true"
      />

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

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="flex items-center gap-3"
      >
        <Avatar size="lg">
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
  );
}
