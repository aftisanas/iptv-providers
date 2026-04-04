"use client";

import { motion } from "framer-motion";
import { Shield, Wifi, Lock, ServerCog } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "30-Day Money Back",
    description: "Full refund within 30 days if you're not completely satisfied. No questions asked, no hoops, no delays.",
  },
  {
    icon: Wifi,
    title: "99.9% Uptime",
    description: "UK-optimised server infrastructure ensures your entertainment never stops streaming, even during peak hours.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Encrypted connections and VPN-friendly service to protect your viewing privacy at all times.",
  },
  {
    icon: ServerCog,
    title: "Instant Activation",
    description: "Your subscription is activated within minutes of purchase. No waiting, no manual setup — start watching immediately.",
  },
];

export default function TrustSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 section-gradient-2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-4">
            Trust & Guarantee
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Satisfaction,{" "}
            <span className="gradient-text">Guaranteed</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted">
            We stand behind our service with a no-questions-asked guarantee and dedicated UK support.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-cyan-50 transition-all group-hover:border-emerald-200 group-hover:bg-emerald-100 group-hover:shadow-lg group-hover:shadow-emerald-100/50">
                <item.icon className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
