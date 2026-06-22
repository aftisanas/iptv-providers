import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// Robots config. Default open — explicit allow rules for major AI crawlers
// (ChatGPT, Claude, Gemini, Perplexity, Copilot, Grok, AI Overviews) so
// they index and cite our content. Belt-and-braces over the wildcard rule.
const baseDisallow = ["/api/", "/_next/", "/admin/"];

export default function robots(): MetadataRoute.Robots {
  const aiAgents = [
    "GPTBot", "ChatGPT-User", "OAI-SearchBot",
    "Google-Extended",
    "ClaudeBot", "anthropic-ai", "claude-web",
    "PerplexityBot", "Perplexity-User",
    "Applebot-Extended",
    "meta-externalagent", "FacebookBot",
    "CCBot", "cohere-ai", "Bytespider",
    "DuckAssistBot", "Diffbot",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: baseDisallow },
      ...aiAgents.map((ua) => ({ userAgent: ua, allow: "/", disallow: baseDisallow })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
