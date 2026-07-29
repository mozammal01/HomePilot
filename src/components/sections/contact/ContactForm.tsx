"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EASE_OUT } from "@/lib/motion";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", company: "", phone: "", message: "" },
  });

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setSubmitted(true);
  }

  function handleReset() {
    reset();
    setSubmitted(false);
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
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            className="flex flex-col items-center gap-4 py-10 text-center"
          >
            <motion.span
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: EASE_OUT }}
              className="flex size-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
            >
              <CheckCircle2 className="size-7" aria-hidden="true" />
            </motion.span>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Message sent
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                This is a demo — no message was actually sent, but in a live
                deployment our team would reply within one business day.
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              className="mt-2 rounded-full"
              onClick={handleReset}
            >
              Send another message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField id="contact-name" label="Name" error={errors.name?.message}>
                <Input autoComplete="name" className="h-11" {...register("name")} />
              </FormField>

              <FormField id="contact-email" label="Email" error={errors.email?.message}>
                <Input
                  type="email"
                  autoComplete="email"
                  className="h-11"
                  {...register("email")}
                />
              </FormField>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField id="contact-company" label="Company" optional>
                <Input autoComplete="organization" className="h-11" {...register("company")} />
              </FormField>

              <FormField id="contact-phone" label="Phone" optional>
                <Input type="tel" autoComplete="tel" className="h-11" {...register("phone")} />
              </FormField>
            </div>

            <FormField id="contact-message" label="Message" error={errors.message?.message}>
              <Textarea rows={5} {...register("message")} />
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
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send
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
