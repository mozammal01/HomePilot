import type { Metadata } from "next";

import { AuthCard } from "@/components/auth/AuthCard";
import { LoginForm } from "@/components/auth/LoginForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Log in",
  description: `Log in to your ${siteConfig.name} account.`,
  alternates: {
    canonical: `${siteConfig.url}/login`,
  },
};

export default function LoginPage() {
  return (
    <AuthCard
      title="Welcome back"
      description="Log in to manage your properties, tenants, and rent."
      footerPrompt="Don't have an account?"
      footerLinkLabel="Start a free trial"
      footerLinkHref={siteConfig.auth.getStarted}
    >
      <LoginForm />
    </AuthCard>
  );
}
