"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck2, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { EASE_OUT } from "@/lib/motion";
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
            transition={{ duration: 0.4, ease: EASE_OUT }}
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
                This is a demo — no request was actually sent, but in a live
                deployment our team would follow up within one business day.
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
              <FormField id="demo-name" label="Name" error={errors.name?.message}>
                <Input autoComplete="name" className="h-11" {...register("name")} />
              </FormField>

              <FormField id="demo-email" label="Work email" error={errors.email?.message}>
                <Input
                  type="email"
                  autoComplete="email"
                  className="h-11"
                  {...register("email")}
                />
              </FormField>
            </div>

            <FormField id="demo-company" label="Company" error={errors.company?.message}>
              <Input autoComplete="organization" className="h-11" {...register("company")} />
            </FormField>

            <FormField
              id="demo-portfolio-size"
              label="Portfolio size"
              error={errors.portfolioSize?.message}
            >
              <Input
                placeholder="e.g. 50 units across 3 properties"
                className="h-11"
                {...register("portfolioSize")}
              />
            </FormField>

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
