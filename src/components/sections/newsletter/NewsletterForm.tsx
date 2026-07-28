"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  newsletterFormSchema,
  type NewsletterFormValues,
} from "@/lib/validations/newsletter";

export function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubscribed(true);
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <AnimatePresence mode="wait" initial={false}>
        {subscribed ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-600 dark:text-emerald-400"
          >
            <CheckCircle2 className="size-4 shrink-0" aria-hidden="true" />
            You're subscribed — welcome aboard!
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <div className="relative flex-1">
                <Mail
                  className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <Input
                  type="email"
                  placeholder="you@company.com"
                  aria-label="Email address"
                  aria-invalid={!!errors.email}
                  autoComplete="email"
                  className="h-12 rounded-full pl-11"
                  {...register("email")}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="h-12 shrink-0 rounded-full px-6"
              >
                {isSubmitting ? (
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                ) : (
                  "Subscribe"
                )}
              </Button>
            </div>
            {errors.email && (
              <p className="mt-2 text-center text-xs text-destructive sm:text-left">
                {errors.email.message}
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
