"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck2, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  demoRequestSchema,
  type DemoRequestValues,
} from "@/lib/validations/demo";

export function DemoRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DemoRequestValues>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues: { name: "", email: "", company: "", portfolioSize: "" },
  });

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setSubmitted(true);
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-6 shadow-xl backdrop-blur-xl sm:p-8">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4 py-10 text-center"
          >
            <span className="flex size-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="size-7" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Request received
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                A member of our team will reach out within one business day
                to find a time that works for you.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="demo-name">Name</Label>
                <Input
                  id="demo-name"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "demo-name-error" : undefined}
                  className="h-11"
                  {...register("name")}
                />
                {errors.name && (
                  <p id="demo-name-error" className="text-xs text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="demo-email">Work email</Label>
                <Input
                  id="demo-email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "demo-email-error" : undefined}
                  className="h-11"
                  {...register("email")}
                />
                {errors.email && (
                  <p id="demo-email-error" className="text-xs text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="demo-company">Company</Label>
              <Input
                id="demo-company"
                autoComplete="organization"
                aria-invalid={!!errors.company}
                aria-describedby={errors.company ? "demo-company-error" : undefined}
                className="h-11"
                {...register("company")}
              />
              {errors.company && (
                <p id="demo-company-error" className="text-xs text-destructive">
                  {errors.company.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="demo-portfolio-size">Portfolio size</Label>
              <Input
                id="demo-portfolio-size"
                placeholder="e.g. 50 units across 3 properties"
                aria-invalid={!!errors.portfolioSize}
                aria-describedby={
                  errors.portfolioSize ? "demo-portfolio-size-error" : undefined
                }
                className="h-11"
                {...register("portfolioSize")}
              />
              {errors.portfolioSize && (
                <p id="demo-portfolio-size-error" className="text-xs text-destructive">
                  {errors.portfolioSize.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="group mt-2 h-12 w-full rounded-full text-base"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  Submitting...
                </>
              ) : (
                <>
                  Request a Demo
                  <CalendarCheck2
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
