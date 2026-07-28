import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your data.`,
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="July 28, 2026">
      <section>
        <h2>1. Information We Collect</h2>
        <p>
          We collect account information you provide directly (such as your
          name, email address, and company details), along with usage data
          generated as you interact with the {siteConfig.name} platform —
          including property, tenant, and payment records you choose to
          store with us.
        </p>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <p>
          We use collected information to operate and improve the platform,
          process rent payments and maintenance requests, communicate
          service updates, and provide customer support. We do not sell
          your personal data to third parties.
        </p>
      </section>

      <section>
        <h2>3. Data Security</h2>
        <p>
          We apply industry-standard safeguards — encryption in transit and
          at rest, role-based access controls, and regular security
          reviews — to protect the data you entrust to {siteConfig.name}.
        </p>
      </section>

      <section>
        <h2>4. Data Retention</h2>
        <p>
          We retain account and property data for as long as your account
          is active, or as needed to comply with legal obligations, resolve
          disputes, and enforce our agreements.
        </p>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your
          personal data at any time by contacting our support team.
        </p>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>
          Questions about this policy can be sent to our team using the
          contact form on our homepage.
        </p>
      </section>
    </LegalPage>
  );
}
