"use client";

import { motion } from "framer-motion";
import { Clock, ArrowLeft, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionLink from "@/components/SectionLink";

interface RelatedGuide {
  slug: string;
  title: string;
  excerpt: string;
}

interface BlogPostContentProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
  };
  content: string[];
  related?: RelatedGuide[];
}

// Render a single line of text, parsing markdown-style [text](url) links
// inline so blog content can deep-link to other guides or pricing anchors.
function renderInlineLinks(line: string, keyPrefix: string) {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: Array<React.ReactNode> = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let partIndex = 0;

  while ((match = regex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      parts.push(line.slice(lastIndex, match.index));
    }
    const [, text, url] = match;
    parts.push(
      <Link
        key={`${keyPrefix}-link-${partIndex++}`}
        href={url}
        className="text-violet-600 underline-offset-2 hover:underline hover:text-violet-700"
      >
        {text}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < line.length) {
    parts.push(line.slice(lastIndex));
  }
  return parts.length ? parts : line;
}

export default function BlogPostContent({ post, content, related }: BlogPostContentProps) {
  return (
    <div className="pt-20">
      <article className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 text-sm text-muted mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
              <span>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              {post.title}
            </h1>

            <p className="text-lg text-muted leading-relaxed">
              {post.excerpt}
            </p>
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose-custom"
          >
            {content.map((block, i) => {
              const lines = block.split("\n");
              return (
                <div key={i} className="mb-8">
                  {lines.map((line, j) => {
                    const lineKey = `b${i}-l${j}`;
                    if (line.startsWith("## ")) {
                      return (
                        <h2
                          key={lineKey}
                          className="text-2xl font-bold text-foreground mt-10 mb-4"
                        >
                          {line.replace("## ", "")}
                        </h2>
                      );
                    }
                    if (line.startsWith("- **")) {
                      const match = line.match(/- \*\*(.+?)\*\*(.+)/);
                      if (match) {
                        return (
                          <li
                            key={lineKey}
                            className="text-sm text-gray-600 leading-relaxed ml-4 mb-2 list-disc"
                          >
                            <strong className="text-foreground">{match[1]}</strong>
                            {renderInlineLinks(match[2], lineKey)}
                          </li>
                        );
                      }
                    }
                    if (line.startsWith("- ")) {
                      return (
                        <li
                          key={lineKey}
                          className="text-sm text-gray-600 leading-relaxed ml-4 mb-2 list-disc"
                        >
                          {renderInlineLinks(line.replace("- ", ""), lineKey)}
                        </li>
                      );
                    }
                    if (line.trim() === "") return <br key={lineKey} />;
                    return (
                      <p
                        key={lineKey}
                        className="text-base text-gray-600 leading-relaxed mb-4"
                      >
                        {renderInlineLinks(line, lineKey)}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </motion.div>

          {/* Related guides — internal linking cluster */}
          {related && related.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 rounded-2xl border border-violet-100 bg-white p-8"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">
                Related IPTV Providers UK Guides
              </h3>
              <p className="text-sm text-muted mb-6">
                Continue the comparison with these focused guides from our 2026
                buyer&apos;s research.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/blog/${guide.slug}`}
                    className="group block rounded-xl border border-violet-100/60 bg-white p-4 transition-all hover:border-violet-200 hover:shadow-md hover:shadow-violet-100/40"
                  >
                    <h4 className="text-sm font-semibold text-foreground mb-1 group-hover:text-violet-700 transition-colors">
                      {guide.title}
                    </h4>
                    <p className="text-xs text-muted leading-relaxed mb-2 line-clamp-2">
                      {guide.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-violet-600 group-hover:gap-1.5 transition-all">
                      Read the guide
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl border border-primary/15 bg-blue-50 p-8 text-center"
          >
            <h3 className="text-xl font-bold text-foreground mb-3">
              Ready To Subscribe To The Best IPTV Providers UK?
            </h3>
            <p className="text-muted mb-6">
              Start with the top UK service. Plans from £4.99/month with a 30-day money-back guarantee.
            </p>
            <SectionLink
              href="/#pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              View Subscription Plans
            </SectionLink>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
