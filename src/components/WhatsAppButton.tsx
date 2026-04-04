"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_BASE_URL } from "@/lib/constants";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Hello Premium IPTV, I have a question!")}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/35 active:scale-95"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 fill-current" />

      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.a>
  );
}
