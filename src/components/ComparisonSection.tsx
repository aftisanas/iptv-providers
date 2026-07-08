import Link from "next/link";
import { Check, X, AlertTriangle } from "lucide-react";
import SectionLink from "./SectionLink";

// Server component on purpose: the comparison table and the definition
// paragraph are the two blocks most likely to be quoted by featured
// snippets / AI Overviews, so they must ship as plain SSR HTML with no
// client-side animation wrapper.

const ROWS = [
  {
    label: "Effective monthly cost",
    us: "£3.75–£8.66",
    reseller: "£10–£20, often hidden fees",
    payTv: "£75–£120 after intro period",
  },
  {
    label: "Live channels",
    us: "37,000+ incl. every UK network",
    reseller: "Inflated claims, unverified",
    payTv: "150–300",
  },
  {
    label: "4K UHD",
    us: "Included on every plan",
    reseller: "Often HD-only or paid tier",
    payTv: "Extra £5–£15/month",
  },
  {
    label: "VPN included",
    us: "Yes, bundled free",
    reseller: "Rarely",
    payTv: "No",
  },
  {
    label: "Simultaneous screens",
    us: "5 on every plan",
    reseller: "1, upsell for more",
    payTv: "2–4, hardware-bound",
  },
  {
    label: "Activation",
    us: "Under 60 seconds",
    reseller: "Hours to days",
    payTv: "Engineer visit / dish install",
  },
  {
    label: "Refund policy",
    us: "30-day money-back",
    reseller: "Usually none",
    payTv: "14-day cooling-off, contract after",
  },
  {
    label: "7-day EPG + catch-up",
    us: "Included",
    reseller: "Hit and miss",
    payTv: "Included",
  },
  {
    label: "Contract",
    us: "None — prepaid term only",
    reseller: "None",
    payTv: "18–24 months typical",
  },
] as const;

export default function ComparisonSection() {
  return (
    <section id="compare" className="relative py-12 lg:py-14">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-sm font-medium text-violet-700 mb-4">
            The 2026 Comparison — Updated 8 July 2026
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How UK IPTV Providers{" "}
            <span className="gradient-text">Compare In 2026</span>
          </h2>
          {/* Quotable definition block — kept to one tight paragraph */}
          <p className="mx-auto max-w-3xl text-lg text-muted">
            A good IPTV provider in the UK streams live TV over broadband to a
            Fire Stick, smart TV or phone using an M3U or app login, with a full
            EPG, catch-up and 4K where the source broadcasts it. The reliable
            ones publish their pricing, uptime and refund policy up front — the
            table below shows how the three ways of paying for TV in 2026
            actually stack up.
          </p>
        </div>

        {/* Comparison table — wide content scrolls inside its own container */}
        <div className="overflow-x-auto rounded-2xl border border-violet-100/60 bg-white shadow-sm">
          <table className="w-full min-w-[640px] text-left text-sm">
            <caption className="sr-only">
              Comparison of this IPTV service against typical UK IPTV resellers
              and traditional pay-TV across price, channels, 4K, VPN, screens,
              activation, refunds, EPG and contract terms.
            </caption>
            <thead>
              <tr className="border-b border-violet-100/60 bg-violet-50/50">
                <th scope="col" className="px-4 py-4 font-semibold text-foreground w-[22%]">
                  What you get
                </th>
                <th scope="col" className="px-4 py-4 font-semibold text-violet-700 w-[28%]">
                  IPTV Providers UK
                  <span className="block text-xs font-normal text-violet-500">this service</span>
                </th>
                <th scope="col" className="px-4 py-4 font-semibold text-foreground w-[25%]">
                  Typical IPTV reseller
                  <span className="block text-xs font-normal text-muted">unverified services</span>
                </th>
                <th scope="col" className="px-4 py-4 font-semibold text-foreground w-[25%]">
                  Traditional pay-TV
                  <span className="block text-xs font-normal text-muted">satellite / cable bundle</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label} className="border-b border-violet-50 last:border-0">
                  <th scope="row" className="px-4 py-3.5 font-medium text-foreground align-top">
                    {row.label}
                  </th>
                  <td className="px-4 py-3.5 align-top">
                    <span className="flex items-start gap-2 text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden />
                      {row.us}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 align-top">
                    <span className="flex items-start gap-2 text-muted">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden />
                      {row.reseller}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 align-top">
                    <span className="flex items-start gap-2 text-muted">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" aria-hidden />
                      {row.payTv}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnote + CTA */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <SectionLink
            href="/#pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-purple-200/60 transition-all hover:shadow-lg active:scale-[0.98]"
          >
            Compare the four plans
          </SectionLink>
          <Link
            href="/blog/best-iptv-providers-uk-2026"
            className="inline-flex items-center gap-2 rounded-xl border border-violet-200 bg-white px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-violet-300 hover:bg-violet-50"
          >
            Read the full 2026 ranking
          </Link>
        </div>
      </div>
    </section>
  );
}
