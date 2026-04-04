"use client";

import { motion } from "framer-motion";
import { Play, MessageCircle, Shield, Tv, Clock, Star, Zap, ChevronRight } from "lucide-react";
import { WHATSAPP_BASE_URL } from "@/lib/constants";
import ParticleBackground from "./ParticleBackground";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Deep premium gradient background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#1a0a3e] to-[#0c1445]" />

      {/* ── Vivid aurora blobs ── */}
      <div
        className="aurora-blob w-[700px] h-[700px] bg-purple-600/25 -top-32 -left-32"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="aurora-blob w-[500px] h-[500px] bg-blue-500/20 top-1/4 right-[-8%]"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="aurora-blob w-[600px] h-[600px] bg-violet-500/15 bottom-[-15%] left-1/3"
        style={{ animationDelay: "8s" }}
      />
      <div
        className="aurora-blob w-[400px] h-[400px] bg-cyan-500/20 top-[60%] left-[-5%]"
        style={{ animationDelay: "12s" }}
      />
      <div
        className="aurora-blob w-[350px] h-[350px] bg-fuchsia-500/15 top-[10%] left-[55%]"
        style={{ animationDelay: "6s" }}
      />

      {/* ── Layered radial overlays for depth ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.1),transparent_40%)]" />

      {/* ── Subtle mesh grid ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Decorative floating orbs ── */}
      <div className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-purple-400/60 animate-float" />
      <div className="absolute top-[35%] right-[15%] w-1.5 h-1.5 rounded-full bg-cyan-400/50 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-[25%] left-[20%] w-1 h-1 rounded-full bg-blue-400/60 animate-float" style={{ animationDelay: "4s" }} />
      <div className="absolute top-[50%] right-[8%] w-2.5 h-2.5 rounded-full bg-violet-400/40 animate-float" style={{ animationDelay: "1s" }} />

      {/* ── Particles ── */}
      <ParticleBackground />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="text-center">
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-white/[0.07] backdrop-blur-md px-5 py-2.5 text-sm text-purple-200 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-medium">The UK&apos;s #1 IPTV Service — 28,000+ Channels Live Now</span>
            <span className="flex gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-7"
          >
            <span className="text-white">Premium IPTV Subscription</span>
            <br />
            <span className="text-white">for the UK — </span>
            <span className="gradient-text-hero">Watch Everything,</span>
            <br className="hidden sm:block" />
            <span className="gradient-text-hero"> Pay Less</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-300/90 leading-relaxed mb-10"
          >
            Enjoy <strong className="text-white font-semibold">28,000+</strong> live channels — including
            every major British broadcaster and premium sports network — plus{" "}
            <strong className="text-white font-semibold">99,000+ films and series</strong> on demand.
            One account, every device, instant activation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/pricing"
              className="group relative flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98] w-full sm:w-auto justify-center"
            >
              <Play className="h-5 w-5 fill-current" />
              <span>View Our Subscription Plans</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
            <a
              href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Hello Premium IPTV, I'd like to subscribe!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:border-purple-400/30 hover:bg-white/10 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="h-5 w-5 text-cyan-400" />
              <span>Contact Us on WhatsApp</span>
            </a>
          </motion.div>

          {/* Trust badges — glass cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            {[
              { icon: Zap, text: "IPTV Stable", sub: "99.9% Uptime" },
              { icon: Tv, text: "HD & 4K Quality", sub: "Ultra HD Streaming" },
              { icon: Shield, text: "30-Day Guarantee", sub: "Money-Back Promise" },
              { icon: Clock, text: "24/7 UK Support", sub: "Real-Time Assistance" },
            ].map((badge, i) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="glass-dark rounded-xl px-5 py-3 flex items-center gap-3 group hover:border-purple-400/20 transition-all"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/25 to-cyan-500/15">
                  <badge.icon className="h-4 w-4 text-cyan-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white">{badge.text}</div>
                  <div className="text-[11px] text-gray-400">{badge.sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade to site background */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#fafbff] via-[#fafbff]/80 to-transparent" />
    </section>
  );
}
