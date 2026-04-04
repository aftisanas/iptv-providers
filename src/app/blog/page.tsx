import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "IPTV UK Blog — Guides, Tips & Streaming News",
  description:
    "Expert guides on IPTV UK setup, streaming tips, device compatibility, and the latest in UK television. Learn how to get the best IPTV experience.",
};

export default function BlogPage() {
  return <BlogContent />;
}
