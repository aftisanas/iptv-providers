import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  // 301 redirects from the old blog slugs (pre-cluster-rewrite) to their
  // new cluster equivalents. GSC was logging impressions for the old URLs
  // (notably /blog/iptv-vs-sky-comparison with 22 impressions in 90 days)
  // — these 301s preserve every signal Google had built up on those URLs.
  async redirects() {
    return [
      {
        source: "/blog/best-iptv-uk-guide-2026",
        destination: "/blog/best-iptv-providers-uk-2026",
        permanent: true,
      },
      {
        source: "/blog/how-to-setup-iptv-firestick",
        destination: "/blog/iptv-providers-setup-fire-stick",
        permanent: true,
      },
      // NOTE: /blog/iptv-vs-sky-comparison was 301'd here for a while, but it
      // was the site's single biggest impression source in GSC (25 imps for
      // "iptv sky"-family queries), so it has been restored as a live post
      // (2026-07-08). Do NOT re-add a redirect for it.
      {
        source: "/blog/premier-league-streaming-guide",
        destination: "/blog/iptv-providers-uk-sport-guide",
        permanent: true,
      },
      // Cluster consolidation (2026-07-08). Seven near-duplicate posts were
      // cannibalising the homepage and the pillar guides for the same
      // "best/compare iptv providers uk" intents — each 301 targets the one
      // page that should own that intent.
      {
        source: "/blog/what-are-the-best-iptv-providers",
        destination: "/blog/best-iptv-providers-uk-2026",
        permanent: true,
      },
      {
        source: "/blog/iptv-providers-comparison-2026",
        destination: "/blog/best-iptv-providers-uk-2026",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-uk-2026",
        destination: "/blog/best-iptv-providers-uk-2026",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-service-uk",
        destination: "/blog/best-iptv-providers-uk-2026",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-subscription-uk",
        destination: "/blog/iptv-subscription-uk-2026",
        permanent: true,
      },
      {
        source: "/blog/cheap-iptv-subscription-uk",
        destination: "/blog/cheap-iptv-providers-uk",
        permanent: true,
      },
      {
        source: "/blog/iptv-service-providers-uk",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
