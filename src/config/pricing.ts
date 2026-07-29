import type { PricingPlan } from "@/components/sections/pricing/PricingCard";
import { siteConfig } from "@/config/site";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    description: "For independent landlords getting organized.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      "Up to 10 properties",
      "Online rent collection",
      "Tenant portal",
      "Maintenance tracking",
      "Basic reports",
      "Email support",
    ],
    ctaLabel: "Start Free Trial",
    ctaHref: siteConfig.auth.getStarted,
  },
  {
    name: "Professional",
    description: "For growing teams that need automation.",
    monthlyPrice: 129,
    yearlyPrice: 99,
    features: [
      "Everything in Starter",
      "Up to 100 properties",
      "Advanced analytics & reports",
      "Automation workflows",
      "Team collaboration (5 seats)",
      "API access",
      "Priority support",
    ],
    ctaLabel: "Start Free Trial",
    ctaHref: siteConfig.auth.getStarted,
    recommended: true,
  },
  {
    name: "Enterprise",
    description: "For large portfolios with custom needs.",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Everything in Professional",
      "Unlimited properties",
      "Unlimited team seats",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced security & SSO",
      "SLA & premium support",
    ],
    ctaLabel: "Contact Sales",
    ctaHref: "#contact",
  },
];
