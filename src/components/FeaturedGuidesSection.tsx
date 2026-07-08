"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Search,
  Star,
  Scale,
  ArrowRight,
  Tv,
  ShieldCheck,
  PoundSterling,
  Trophy,
} from "lucide-react";
import Link from "next/link";

const guides = [
  { title: "Best IPTV Providers UK 2026", description: "The definitive 2026 ranking — top 10 UK IPTV providers tested across channel coverage, 4K stream quality, support and refund honesty.", href: "/blog/best-iptv-providers-uk-2026", icon: Star, category: "Buyer's Guide", readTime: "10 min read" },
  { title: "IPTV Subscription UK 2026", description: "Complete pricing breakdown of every IPTV subscription tier in the UK, what each plan includes and the £4.99/month sweet spot for households.", href: "/blog/iptv-subscription-uk-2026", icon: PoundSterling, category: "Pricing", readTime: "9 min read" },
  { title: "How To Find Reliable IPTV Providers", description: "Where to look, what red flags to avoid, and the 7-point checklist every UK buyer should run before paying any IPTV provider a penny.", href: "/blog/how-to-find-iptv-providers", icon: Search, category: "Guide", readTime: "7 min read" },
  { title: "Buy IPTV Subscription UK", description: "How to buy an IPTV subscription safely in 2026 — payment safety, refund verification, instant activation and the 30-day money-back guarantee.", href: "/blog/buy-iptv-subscription-uk", icon: ShieldCheck, category: "Buying", readTime: "7 min read" },
  { title: "IPTV Providers Reviews 2026", description: "Why most IPTV reviews cannot be trusted, where genuine subscriber feedback actually lives, and the five red flags that mark a fake review at a glance.", href: "/blog/iptv-providers-reviews-2026", icon: BookOpen, category: "Trust", readTime: "8 min read" },
  { title: "Are IPTV Providers Legal In The UK?", description: "A definitive 2026 answer on IPTV legal status in the UK, what makes a provider legal versus not, and the red flags to walk away from.", href: "/blog/are-iptv-providers-legal-uk", icon: Scale, category: "Legal", readTime: "6 min read" },
  { title: "Best IPTV For Fire Stick", description: "Fire Stick is the #1 IPTV device in the UK in 2026. Here are the providers built for it — H.265, TiViMate-compatible, adaptive bitrate, fast setup.", href: "/blog/best-iptv-providers-firestick", icon: Tv, category: "Devices", readTime: "8 min read" },
  { title: "UK Sport On IPTV Providers", description: "What live UK sport coverage looks like in 2026: football, rugby, cricket, motorsport, international tournaments. Picture quality, latency, peak-traffic reliability.", href: "/blog/iptv-providers-uk-sport-guide", icon: Trophy, category: "Sports", readTime: "9 min read" },
];

export default function FeaturedGuidesSection() {
  return (
    <section id="guides" className="relative py-11 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-sm font-medium text-violet-700 mb-4">
            UK Buyer&apos;s Guides 2026
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Guides For Choosing An{" "}
            <span className="gradient-text">IPTV Provider In The UK</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Independent, evidence-based guides covering every part of the UK buyer&apos;s journey. Read these eight first before committing to any subscription — they cover everything that matters.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {guides.map((guide, i) => {
            const Icon = guide.icon;
            return (
              <motion.div key={guide.href} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link href={guide.href} className="group relative block h-full overflow-hidden rounded-2xl border border-violet-100/60 bg-white p-6 transition-all duration-500 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/40 premium-card">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-50/50 to-cyan-50/20 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex flex-col h-full">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-cyan-50 transition-all group-hover:from-violet-200/80 group-hover:to-cyan-100/50 group-hover:shadow-md group-hover:shadow-violet-200/30">
                      <Icon className="h-6 w-6 text-violet-600 transition-colors group-hover:text-purple-600" />
                    </div>
                    <div className="mb-2 flex items-center gap-2 text-xs text-muted">
                      <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-0.5 text-violet-700 font-medium">{guide.category}</span>
                      <span>·</span>
                      <span>{guide.readTime}</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">{guide.title}</h3>
                    <p className="text-sm text-muted leading-relaxed flex-1 mb-4">{guide.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 transition-all group-hover:gap-2">
                      Read the guide
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 text-center">
          <Link href="/blog" className="group inline-flex items-center gap-2 rounded-xl border border-violet-200 bg-white px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-violet-300 hover:bg-violet-50 shadow-sm">
            Browse All 18 IPTV Buyer&apos;s Guides
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
