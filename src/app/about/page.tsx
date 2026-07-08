import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Target, Scale, MailCheck } from "lucide-react";
import { CONTACT_EMAIL, LOGO_URL, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us — Who Runs IPTV Providers UK",
  description:
    "Who runs IPTV Providers UK, how the service is operated, how our guides are researched, and the four standards every claim on this site is held to.",
  alternates: {
    canonical: "/about",
    languages: { "en-GB": "/about" },
  },
};

const STANDARDS = [
  {
    icon: Target,
    title: "Measured claims only",
    text: "Every number published on this site — channel counts, uptime, support response times, refund processing — is stated precisely so it can be checked. We treat inflated claims as the industry disease, not a marketing tool.",
  },
  {
    icon: ShieldCheck,
    title: "The refund is the contract",
    text: "Every plan carries a 30-day money-back guarantee, published in full on the refund policy page. We ask buyers to verify us the same way we tell them to verify anyone: test first, trust after.",
  },
  {
    icon: Scale,
    title: "Honest comparisons",
    text: "Our buyer's guides state plainly where alternatives win — including where traditional pay-TV genuinely beats IPTV. A comparison that only ever favours the house is an advert, and we label our recommendations as our own.",
  },
  {
    icon: MailCheck,
    title: "Reachable, around the clock",
    text: "A UK-based support team answers live chat, WhatsApp and email 24/7, with first-reply times we measure weekly. Send a question before paying — response speed is the fastest honesty test in this industry.",
  },
] as const;

export default function AboutPage() {
  const aboutLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About IPTV Providers UK",
    url: `${SITE_URL}/about`,
    inLanguage: "en-GB",
    mainEntity: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: LOGO_URL,
      email: CONTACT_EMAIL,
      areaServed: "GB",
      description:
        "UK-focused IPTV subscription service and independent buyer's-guide library: 37,000+ live channels, 4K UHD, built-in VPN, five screens and a 30-day money-back guarantee on every plan.",
    },
  };

  return (
    <div className="relative pt-28 pb-16">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <span className="inline-block rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-sm font-medium text-violet-700 mb-4">
          About Us
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Who Runs <span className="gradient-text">IPTV Providers UK</span>
        </h1>

        <div className="space-y-5 text-lg text-muted leading-relaxed mb-12">
          <p>
            IPTV Providers UK is a UK-focused streaming subscription service and
            buyer&apos;s-guide library, operated by a small team that has worked in
            IPTV infrastructure and UK streaming since the late 2010s. The site
            does two things: it runs a subscription service — 37,000+ live
            channels, 198,000+ on-demand titles, 4K UHD, five screens and a
            built-in VPN from £4.99/month — and it publishes the research we
            wish had existed when we started:{" "}
            <Link href="/blog" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              guides on finding, vetting and comparing UK IPTV services
            </Link>{" "}
            without the affiliate noise.
          </p>
          <p>
            The UK IPTV market has a trust problem, and we think the fix is
            boring: publish specific claims, publish a real refund policy, and
            invite buyers to verify both before paying. Everything on this site
            is written to that standard — including the guides that tell you how
            to check up on us. Start with{" "}
            <Link href="/blog/how-to-spot-reliable-iptv-provider" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              how to spot a reliable IPTV provider
            </Link>{" "}
            and apply every test in it to this service.
          </p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          The Four Standards Every Page Is Held To
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 mb-12">
          {STANDARDS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="rounded-2xl border border-violet-100/60 bg-white p-6 premium-card"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-cyan-50">
                  <Icon className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{s.text}</p>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-violet-100/60 bg-white p-8 text-center">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Questions, corrections or verification requests
          </h2>
          <p className="text-muted mb-4">
            Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              {CONTACT_EMAIL}
            </a>{" "}
            or use the{" "}
            <Link href="/contact" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              contact page
            </Link>
            . Factual corrections to any guide are applied and dated. Our{" "}
            <Link href="/refund" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              refund policy
            </Link>
            ,{" "}
            <Link href="/terms" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              terms
            </Link>{" "}
            and{" "}
            <Link href="/dmca" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              DMCA policy
            </Link>{" "}
            are published in full.
          </p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }}
      />
    </div>
  );
}
