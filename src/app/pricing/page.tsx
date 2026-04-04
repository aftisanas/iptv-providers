import type { Metadata } from "next";
import PricingHero from "./PricingHero";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "IPTV UK Plans & Pricing — Subscribe from £9.99",
  description:
    "Buy your IPTV subscription today. Plans from £9.99 with 28,000+ channels, 4K quality, instant activation & 30-day guarantee. No contract, cancel anytime.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingSection />
      <TrustSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
