import type { Metadata } from "next";

import { AuthCard } from "@/components/auth/AuthCard";
import { SignupForm } from "@/components/auth/SignupForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Get Started",
  description: `Start your free ${siteConfig.name} trial — no credit card required.`,
  alternates: {
    canonical: `${siteConfig.url}/get-started`,
  },
};

export default function GetStartedPage() {
  return (
    <AuthCard
      title="Start your free trial"
      description="14 days free. No credit card required."
      footerPrompt="Already have an account?"
      footerLinkLabel="Log in"
      footerLinkHref={siteConfig.auth.login}
    >
      <SignupForm />
    </AuthCard>
  );
}
