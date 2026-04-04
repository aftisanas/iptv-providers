import type { Metadata } from "next";
import ReviewsContent from "./ReviewsContent";

export const metadata: Metadata = {
  title: "Customer Reviews — Trusted by Thousands of UK Viewers",
  description:
    "Read real reviews from Premium IPTV customers across the UK. See why we're rated 4.9/5 by thousands of satisfied viewers in London, Manchester, Birmingham and beyond.",
};

export default function ReviewsPage() {
  return <ReviewsContent />;
}
