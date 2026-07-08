import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ComparisonSection from "@/components/ComparisonSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import DevicesSection from "@/components/DevicesSection";
import ChannelsSection from "@/components/ChannelsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeaturedGuidesSection from "@/components/FeaturedGuidesSection";
import FAQSection from "@/components/FAQSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import {
  CONTACT_EMAIL,
  FAQ_ITEMS,
  LOGO_URL,
  PRICING_PLANS,
  SITE_NAME,
  SITE_URL,
  TESTIMONIALS,
} from "@/lib/constants";

// Price validity used in Offer schema — keeps Google Merchant warnings away.
// Roll forward by 12 months each year.
const PRICE_VALID_UNTIL = "2027-06-20";

export default function HomePage() {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const webpageId = `${SITE_URL}/#webpage`;
  const productId = `${SITE_URL}/#product`;

  return (
    <>
      <HeroSection />
      <StatsBar />
      <ComparisonSection />
      <FeaturesSection />
      <PricingSection />
      <DevicesSection />
      <ChannelsSection />
      <TestimonialsSection />
      <FeaturedGuidesSection />
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
                  url: LOGO_URL,
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
                name: "IPTV Providers UK: Compare Plans & Prices 2026 — 4K, From £4.99",
                dateModified: "2026-07-08",
                inLanguage: "en-GB",
                isPartOf: {
                  "@id": websiteId,
                },
                about: {
                  "@id": organizationId,
                },
                description:
                  "Compare IPTV providers UK households actually rate in 2026 — 37,000 live channels, 4K UHD, built-in VPN, five screens and a 30-day money-back guarantee. Plans from £4.99/month.",
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
            image: [LOGO_URL],
            description:
              "UK IPTV subscription with 37,000+ live channels, 198,000+ on-demand titles, 4K UHD, five simultaneous screens and a built-in VPN — from £4.99/month on the 12-month plan.",
            brand: { "@type": "Brand", name: SITE_NAME },
            offers: PRICING_PLANS.map((plan) => ({
              "@type": "Offer",
              name: `${plan.name} Plan`,
              price: plan.price.toFixed(2),
              priceCurrency: "GBP",
              priceValidUntil: PRICE_VALID_UNTIL,
              availability: "https://schema.org/InStock",
              itemCondition: "https://schema.org/NewCondition",
              url: `${SITE_URL}/#pricing`,
            })),
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              bestRating: "5",
              worstRating: "1",
              ratingCount: 187,
            },
            review: TESTIMONIALS.map((t) => ({
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: String(t.rating),
                bestRating: "5",
              },
              author: { "@type": "Person", name: t.name },
              reviewBody: t.text,
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
