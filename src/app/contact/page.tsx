import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — 24/7 UK IPTV Support",
  description:
    "Get in touch with Premium IPTV UK. 24/7 customer support via WhatsApp, email, and live chat. We're here to help with setup, troubleshooting, and all your IPTV needs.",
};

export default function ContactPage() {
  return <ContactContent />;
}
