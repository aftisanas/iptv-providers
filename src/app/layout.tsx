import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IPTV UK — Premium IPTV Subscription | Premium IPTV 2026",
    template: "%s | Premium IPTV",
  },
  description:
    "Premium IPTV UK subscription with 28,000+ channels in HD & 4K. British TV, live sports, movies & VOD. Instant activation, 30-day guarantee. Subscribe now.",
  keywords: [
    "IPTV UK",
    "iptv subscription",
    "premium IPTV",
    "IPTV service",
    "british IPTV",
    "IPTV providers",
    "best IPTV UK",
    "UK IPTV subscription",
    "IPTV UK 2026",
    "live TV streaming UK",
  ],
  authors: [{ name: "Premium IPTV" }],
  creator: "Premium IPTV",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Premium IPTV",
    title: "IPTV UK — Premium IPTV Subscription | Premium IPTV 2026",
    description:
      "Premium IPTV UK subscription with 28,000+ channels in HD & 4K. British TV, live sports, movies & VOD. Instant activation, 30-day guarantee.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV UK — Premium IPTV Subscription | Premium IPTV",
    description:
      "28,000+ live channels. HD & 4K quality. No buffering. 30-day guarantee.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-[var(--font-sans)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
