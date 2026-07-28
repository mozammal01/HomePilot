import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern your use of ${siteConfig.name}.`,
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="July 28, 2026">
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By creating an account or using {siteConfig.name}, you agree to be
          bound by these Terms of Service and our Privacy Policy.
        </p>
      </section>

      <section>
        <h2>2. Use of the Service</h2>
        <p>
          {siteConfig.name} grants you a limited, non-exclusive,
          non-transferable license to access and use the platform for
          managing your properties, tenants, and related operations, subject
          to your subscription plan.
        </p>
      </section>

      <section>
        <h2>3. Account Responsibilities</h2>
        <p>
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activity that occurs under your
          account.
        </p>
      </section>

      <section>
        <h2>4. Subscriptions and Billing</h2>
        <p>
          Paid plans are billed monthly or annually as selected at checkout.
          You may cancel at any time; access continues through the end of
          the current billing period.
        </p>
      </section>

      <section>
        <h2>5. Limitation of Liability</h2>
        <p>
          {siteConfig.name} is provided &quot;as is&quot; without warranties of any
          kind. To the fullest extent permitted by law, we are not liable
          for indirect, incidental, or consequential damages arising from
          your use of the platform.
        </p>
      </section>

      <section>
        <h2>6. Changes to These Terms</h2>
        <p>
          We may update these terms from time to time. Continued use of the
          platform after changes take effect constitutes acceptance of the
          revised terms.
        </p>
      </section>

      <section>
        <h2>7. Contact Us</h2>
        <p>
          Questions about these terms can be sent to our team using the
          contact form on our homepage.
        </p>
      </section>
    </LegalPage>
  );
}
