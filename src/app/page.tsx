import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import DevicesSection from "@/components/DevicesSection";
import ChannelsSection from "@/components/ChannelsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import {
  CONTACT_EMAIL,
  PRICING_PLANS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

export default function HomePage() {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const webpageId = `${SITE_URL}/#webpage`;
  const productId = `${SITE_URL}/#product`;
  const logoUrl = `${SITE_URL}/buy-iptv-uk.webp`;

  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <PricingSection />
      <DevicesSection />
      <ChannelsSection />
      <TestimonialsSection />
      <FAQSection />
      <TrustSection />
      <CTASection />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": organizationId,
                name: SITE_NAME,
                url: SITE_URL,
                logo: {
                  "@type": "ImageObject",
                  url: logoUrl,
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  availableLanguage: "English",
                  areaServed: "GB",
                  email: CONTACT_EMAIL,
                },
              },
              {
                "@type": "WebSite",
                "@id": websiteId,
                name: SITE_NAME,
                url: SITE_URL,
                inLanguage: "en-GB",
                publisher: {
                  "@id": organizationId,
                },
              },
              {
                "@type": "WebPage",
                "@id": webpageId,
                url: SITE_URL,
                name: "Buy IPTV UK | IPTV Subscription",
                inLanguage: "en-GB",
                isPartOf: {
                  "@id": websiteId,
                },
                about: {
                  "@id": organizationId,
                },
                description:
                  "Buy IPTV in the UK with instant activation, 4K UHD channels, multi-device streaming, and 24/7 support.",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "@id": productId,
            name: `${SITE_NAME} Subscription`,
            url: SITE_URL,
            image: [logoUrl],
            description:
              "Buy IPTV UK subscription with 37,000+ live channels and 198,000+ VOD titles in HD & 4K quality.",
            brand: { "@type": "Brand", name: SITE_NAME },
            offers: PRICING_PLANS.map((plan) => ({
              "@type": "Offer",
              name: `${plan.name} Plan`,
              price: plan.price.toFixed(2),
              priceCurrency: "GBP",
              availability: "https://schema.org/InStock",
              itemCondition: "https://schema.org/NewCondition",
              url: `${SITE_URL}/#pricing`,
            })),
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "2847",
              bestRating: "5",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I buy IPTV in the UK?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Choose a plan on this page, pay by card or PayPal and check your email. Your login and setup guide land in under 60 seconds. You do not need any technical knowledge to get started.",
                },
              },
              {
                "@type": "Question",
                name: "Is it safe to buy IPTV online?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, when you buy from a provider with a secure checkout and a money-back guarantee. We use Stripe and PayPal for all payments, and no card data touches our servers.",
                },
              },
              {
                "@type": "Question",
                name: "What is the best IPTV UK package to buy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The 12-month plan is our best-seller because it cuts the monthly rate by 40 percent while covering every channel, screen and VOD title. The 24-month plan saves 55 percent for viewers who are committed.",
                },
              },
              {
                "@type": "Question",
                name: "Can I buy IPTV for a Firestick?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Install IPTV Smarters Pro from the Amazon store, open the app, and enter the M3U credentials from your welcome email. The full 37,000-channel guide loads in under two minutes.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
