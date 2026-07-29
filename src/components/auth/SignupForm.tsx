"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { signupSchema, type SignupValues } from "@/lib/validations/auth";

export function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", company: "", password: "" },
  });

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 1200));
  }

  if (isSubmitSuccessful) {
    return (
      <p role="status" aria-live="polite" className="text-center text-sm text-muted-foreground">
        This is a demo — account creation isn&apos;t wired up to a live backend
        yet, but your form submitted successfully.
      </p>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <FormField id="signup-name" label="Full name" error={errors.name?.message}>
        <Input autoComplete="name" className="h-11" {...register("name")} />
      </FormField>

      <FormField id="signup-email" label="Work email" error={errors.email?.message}>
        <Input type="email" autoComplete="email" className="h-11" {...register("email")} />
      </FormField>

      <FormField id="signup-company" label="Company" optional>
        <Input autoComplete="organization" className="h-11" {...register("company")} />
      </FormField>

      <FormField id="signup-password" label="Password" error={errors.password?.message}>
        <Input
          type="password"
          autoComplete="new-password"
          className="h-11"
          {...register("password")}
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
            Creating account...
          </>
        ) : (
          <>
            Start Free Trial
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </>
        )}
      </Button>
    </form>
  );
}
