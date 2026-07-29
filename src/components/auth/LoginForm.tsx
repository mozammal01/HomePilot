"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, LogIn } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginSchema, type LoginValues } from "@/lib/validations/auth";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 1200));
  }

  if (isSubmitSuccessful) {
    return (
      <p role="status" aria-live="polite" className="text-center text-sm text-muted-foreground">
        This is a demo — sign-in isn&apos;t wired up to a live account yet, but
        your form submitted successfully.
      </p>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <FormField id="login-email" label="Email" error={errors.email?.message}>
        <Input type="email" autoComplete="email" className="h-11" {...register("email")} />
      </FormField>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="login-password">Password</Label>
          <button
            type="button"
            disabled
            className="text-xs font-medium text-muted-foreground/60"
          >
            Forgot password?
          </button>
        </div>
        <Input
          id="login-password"
          type="password"
          autoComplete="current-password"
          aria-invalid={!!errors.password}
          aria-describedby={errors.password ? "login-password-error" : undefined}
          className="h-11"
          {...register("password")}
        />
        {errors.password && (
          <p id="login-password-error" className="text-xs text-destructive">
            {errors.password.message}
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
            Signing in...
          </>
        ) : (
          <>
            Sign in
            <LogIn
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </>
        )}
      </Button>
    </form>
  );
}
