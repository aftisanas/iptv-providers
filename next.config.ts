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
      {
        source: "/blog/iptv-vs-sky-comparison",
        destination: "/blog/iptv-providers-vs-traditional-tv",
        permanent: true,
      },
      {
        source: "/blog/premier-league-streaming-guide",
        destination: "/blog/iptv-providers-uk-sport-guide",
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
