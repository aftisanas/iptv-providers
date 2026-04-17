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
    default: "Buy IPTV UK | 37,000 Channels in 4K From £12.99",
    template: "%s | Premium IPTV",
  },
  description:
    "Buy IPTV in the UK and get 37,000 channels, 4K UHD, built-in VPN and instant setup. From £25.99 with a 30-day money-back guarantee. Activate in 60 seconds.",
  keywords: [
    "buy IPTV UK",
    "buy IPTV",
    "IPTV UK",
    "IPTV subscription",
    "best IPTV UK",
    "cheap IPTV UK",
    "IPTV providers",
    "UK IPTV providers",
    "IPTV 4K UK",
    "IPTV Firestick UK",
  ],
  authors: [{ name: "Premium IPTV" }],
  creator: "Premium IPTV",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Premium IPTV",
    title: "Buy IPTV UK — 37,000 Channels, 4K UHD, From £12.99",
    description:
      "Ready to buy IPTV in the UK? Get 37,000 live channels, 198,000 on-demand titles, five screens and 24/7 UK support. Activate the moment you pay.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy IPTV UK — 37,000 Channels, 4K UHD, From £12.99",
    description:
      "Buy IPTV in the UK and get 37,000 channels, 4K UHD, built-in VPN and instant setup. From £25.99 with a 30-day money-back guarantee.",
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
