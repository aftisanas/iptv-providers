"use client";

import { motion } from "framer-motion";
import { Clock, ArrowLeft, Tag, ArrowRight, CheckCircle2, ListOrdered } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
  heroImage?: string;
  midImage?: string;
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
        className="text-violet-600 underline-offset-2 hover:underline hover:text-violet-700 font-medium"
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

// Slug helper for TOC anchor IDs (kebab-cased H2 text).
function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function BlogPostContent({
  post,
  content,
  related,
  heroImage,
  midImage,
}: BlogPostContentProps) {
  // Extract H2 headings from content blocks for the sidebar TOC.
  const tocItems: { id: string; text: string }[] = [];
  content.forEach((block) => {
    const lines = block.split("\n");
    lines.forEach((line) => {
      if (line.startsWith("## ")) {
        const text = line.replace("## ", "");
        tocItems.push({ id: slugifyHeading(text), text });
      }
    });
  });

  // Find midpoint to inject the mid-image between content blocks.
  const midIndex = midImage ? Math.floor(content.length / 2) : -1;

  return (
    <div className="pt-20">
      <article className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

          <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-12">
            {/* Main column */}
            <div className="max-w-3xl">
              {/* Header */}
              <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10"
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

              {/* Hero image */}
              {heroImage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10 border border-violet-100/60 shadow-md"
                >
                  <Image
                    src={heroImage}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 768px, 100vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              )}

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
                    <div key={i}>
                      <div className="mb-8">
                        {lines.map((line, j) => {
                          const lineKey = `b${i}-l${j}`;
                          if (line.startsWith("## ")) {
                            const headingText = line.replace("## ", "");
                            return (
                              <h2
                                key={lineKey}
                                id={slugifyHeading(headingText)}
                                className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24"
                              >
                                {headingText}
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

                      {/* Inject mid-image after the midpoint block */}
                      {midImage && i === midIndex && (
                        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden my-10 border border-violet-100/60 shadow-md">
                          <Image
                            src={midImage}
                            alt={`${post.title} — supporting illustration`}
                            fill
                            sizes="(min-width: 1024px) 768px, 100vw"
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </motion.div>

              {related && related.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-16 rounded-2xl border border-violet-100 bg-white p-8"
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">Related IPTV Providers UK Guides</h3>
                  <p className="text-sm text-muted mb-6">Continue the comparison with these focused guides from our 2026 buyer&apos;s research.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {related.map((guide) => (
                      <Link key={guide.slug} href={`/blog/${guide.slug}`} className="group block rounded-xl border border-violet-100/60 bg-white p-4 transition-all hover:border-violet-200 hover:shadow-md hover:shadow-violet-100/40">
                        <h4 className="text-sm font-semibold text-foreground mb-1 group-hover:text-violet-700 transition-colors">{guide.title}</h4>
                        <p className="text-xs text-muted leading-relaxed mb-2 line-clamp-2">{guide.excerpt}</p>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-violet-600 group-hover:gap-1.5 transition-all">Read the guide<ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" /></span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 rounded-2xl border border-primary/15 bg-blue-50 p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-3">Ready To Subscribe To The Best IPTV Providers UK?</h3>
                <p className="text-muted mb-6">Start with the top UK service. Plans from £4.99/month with a 30-day money-back guarantee.</p>
                <SectionLink href="/#pricing" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/20">View Subscription Plans</SectionLink>
              </motion.div>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {tocItems.length > 0 && (
                  <div className="rounded-2xl border border-violet-100/80 bg-white p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="h-4 w-4 text-violet-600" />
                      <h4 className="text-sm font-semibold text-foreground">On this page</h4>
                    </div>
                    <nav className="flex flex-col gap-1.5">
                      {tocItems.map((item) => (
                        <a key={item.id} href={`#${item.id}`} className="text-xs text-muted hover:text-violet-700 leading-snug transition-colors py-0.5">{item.text}</a>
                      ))}
                    </nav>
                  </div>
                )}

                <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-cyan-50 p-6 shadow-sm">
                  <div className="text-xs font-medium uppercase tracking-wide text-violet-600 mb-2">#1 Pick — 2026</div>
                  <h4 className="text-base font-bold text-foreground mb-3 leading-tight">Best IPTV Providers UK from £4.99/month</h4>
                  <ul className="space-y-1.5 mb-4">
                    <li className="flex items-start gap-2 text-xs text-gray-600"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" /><span>37,000+ channels &amp; 4K UHD</span></li>
                    <li className="flex items-start gap-2 text-xs text-gray-600"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" /><span>30-day money-back guarantee</span></li>
                    <li className="flex items-start gap-2 text-xs text-gray-600"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" /><span>5 screens, built-in VPN, instant activation</span></li>
                    <li className="flex items-start gap-2 text-xs text-gray-600"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" /><span>24/7 UK support</span></li>
                  </ul>
                  <SectionLink href="/#pricing" className="block w-full rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2.5 text-center text-xs font-semibold text-white transition-all hover:shadow-md">See Plans &amp; Subscribe</SectionLink>
                  <Link href="/" className="mt-2 block w-full rounded-lg border border-violet-200 bg-white px-4 py-2 text-center text-xs font-medium text-violet-700 transition-all hover:bg-violet-50">Visit Homepage</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </div>
  );
}
