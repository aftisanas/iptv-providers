"use client";

import { motion } from "framer-motion";
import { Tv, Trophy, Film, Baby, Newspaper, Globe } from "lucide-react";
import { CHANNEL_CATEGORIES } from "@/lib/constants";

const iconMap = { Tv, Trophy, Film, Baby, Newspaper, Globe } as const;

export default function ChannelsSection() {
  return (
    <section id="channels" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-sm font-medium text-violet-700 mb-4">
            UK Channels That Matter
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            28,000+ Channels &{" "}
            <span className="gradient-text">99,000+ On Demand</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            We carry the channels British viewers actually watch. Comprehensive coverage
            of BBC, ITV, Channel 4, Sky, TNT Sports, and thousands more.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {CHANNEL_CATEGORIES.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-violet-100/60 bg-white p-6 transition-all duration-500 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/40 premium-card"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-50 to-transparent rounded-bl-full opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-cyan-50 transition-all group-hover:from-violet-200/80 group-hover:to-cyan-100/50">
                      <Icon className="h-6 w-6 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{cat.name}</h3>
                      <p className="text-2xl font-bold gradient-text">{cat.count}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {cat.channels}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live channels preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-violet-100/60 bg-white p-6 lg:p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
            </div>
            <span className="text-sm font-medium text-foreground">Live Channels Preview</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              "Sky Sports", "TNT Sports", "BBC One", "ITV Hub", "Channel 4",
              "Sky Cinema", "BBC Two", "Sky News", "Dave", "E4",
              "Film4", "BT Sport",
            ].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="group flex items-center justify-center rounded-xl border border-violet-100/50 bg-violet-50/30 p-4 h-16 transition-all hover:border-violet-200 hover:bg-violet-50 cursor-default"
              >
                <span className="text-xs font-medium text-muted text-center transition-colors group-hover:text-violet-600">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
