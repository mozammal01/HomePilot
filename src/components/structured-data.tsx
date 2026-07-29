import { pricingPlans } from "@/config/pricing";
import { siteConfig } from "@/config/site";

function getPriceRange() {
  const prices = pricingPlans
    .flatMap((plan) => [plan.monthlyPrice, plan.yearlyPrice])
    .filter((price): price is number => price !== null);

  return {
    lowPrice: Math.min(...prices).toString(),
    highPrice: Math.max(...prices).toString(),
  };
}

export function StructuredData() {
  const { lowPrice, highPrice } = getPriceRange();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/favicon.ico`,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        name: siteConfig.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: siteConfig.description,
        url: siteConfig.url,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice,
          highPrice,
          offerCount: pricingPlans.length.toString(),
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
