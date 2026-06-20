import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/constants";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Best IPTV Providers UK 2026 | 37K Channels From £4.99/mo",
    template: "%s | IPTV Providers UK",
  },
  description:
    "Compare the best IPTV providers UK 2026. 37,000 channels in 4K, built-in VPN, instant activation, 30-day money-back guarantee. From £4.99/month.",
  keywords: [
    "iptv providers",
    "iptv providers uk",
    "best iptv providers",
    "best iptv providers uk",
    "uk iptv providers",
    "iptv subscription",
    "iptv uk",
    "best iptv uk",
    "iptv service",
    "iptv reviews",
    "buy iptv",
    "british iptv",
    "premium iptv",
  ],
  authors: [{ name: "IPTV Providers UK" }],
  creator: "IPTV Providers UK",
  applicationName: "IPTV Providers UK",
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/",
    },
  },
  manifest: "/favicon_io/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico", sizes: "any" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon_io/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "IPTV Providers UK",
    url: SITE_URL,
    title: "Best IPTV Providers UK 2026 — 37K Channels, 4K, £4.99/mo",
    description:
      "Compare the best IPTV providers UK 2026. 37,000 channels, 198,000 films, 4K UHD, built-in VPN and instant activation. From £4.99/month with a 30-day refund.",
    images: [
      {
        url: "/iptv-providers-uk-og.webp",
        width: 1200,
        height: 630,
        alt: "IPTV Providers UK — The #1 Rated 4K IPTV Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IPTV Providers UK 2026 — 37K Channels, 4K, £4.99/mo",
    description:
      "Compare the best IPTV providers UK. 37,000 channels, 4K UHD, built-in VPN, five screens, 30-day guarantee. From £4.99/month.",
    images: ["/iptv-providers-uk-og.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-(--font-sans)">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg focus:outline-2 focus:outline-violet-600"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
