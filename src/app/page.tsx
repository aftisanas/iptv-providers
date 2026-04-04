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

export default function HomePage() {
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
                "@id": "https://iptv-premium-uk.tv/#organization",
                name: "Premium IPTV",
                url: "https://iptv-premium-uk.tv",
                logo: {
                  "@type": "ImageObject",
                  url: "https://iptv-premium-uk.tv/logo.png",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  availableLanguage: "English",
                  areaServed: "GB",
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://iptv-premium-uk.tv/#website",
                name: "Premium IPTV",
                url: "https://iptv-premium-uk.tv",
                inLanguage: "en-GB",
                publisher: {
                  "@id": "https://iptv-premium-uk.tv/#organization",
                },
                potentialAction: {
                  "@type": "SearchAction",
                  target:
                    "https://iptv-premium-uk.tv/?s={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@type": "WebPage",
                "@id": "https://iptv-premium-uk.tv/#webpage",
                url: "https://iptv-premium-uk.tv",
                name: "IPTV UK — Premium IPTV Subscription | Premium IPTV 2026",
                inLanguage: "en-GB",
                isPartOf: {
                  "@id": "https://iptv-premium-uk.tv/#website",
                },
                about: {
                  "@id": "https://iptv-premium-uk.tv/#organization",
                },
                description:
                  "Premium IPTV UK subscription with 28,000+ channels in HD & 4K. British TV, live sports, movies & VOD.",
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
            name: "Premium IPTV Subscription",
            description:
              "Premium UK IPTV subscription with 28,000+ live channels and 99,000+ VOD titles in HD & 4K quality.",
            brand: { "@type": "Brand", name: "Premium IPTV" },
            offers: [
              {
                "@type": "Offer",
                name: "1-Month Plan",
                price: "9.99",
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock",
                priceValidUntil: "2026-12-31",
              },
              {
                "@type": "Offer",
                name: "3-Month Plan",
                price: "24.99",
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock",
                priceValidUntil: "2026-12-31",
              },
              {
                "@type": "Offer",
                name: "12-Month Plan",
                price: "49.99",
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock",
                priceValidUntil: "2026-12-31",
              },
            ],
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
                name: "What is IPTV and how does it differ from traditional TV?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "IPTV (Internet Protocol Television) delivers television content over your internet connection rather than through a traditional aerial, satellite dish, or cable. You can watch live TV, on-demand films, and catch-up content on any internet-connected device.",
                },
              },
              {
                "@type": "Question",
                name: "Which devices can I use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our service works on Amazon Firestick, Android TV boxes, Android phones and tablets, iPhones and iPads, Samsung/LG/Sony Smart TVs, Windows and Mac computers, MAG devices, and Enigma2 receivers.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if I am not satisfied?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You are covered by our 30-day money-back guarantee. If the service does not meet your expectations for any reason, contact our support team and we will process a full refund — no questions asked.",
                },
              },
              {
                "@type": "Question",
                name: "How quickly will I receive access after payment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Access is activated within minutes. You will receive your login credentials by email immediately after your payment is confirmed.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
