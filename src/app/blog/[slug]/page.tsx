import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BLOG_POSTS,
  SITE_URL,
  SITE_NAME,
  LOGO_URL,
  OG_IMAGE_URL,
} from "@/lib/constants";
import BlogPostContent from "./BlogPostContent";
import { blogData } from "./blogData";

type PageParams = { slug: string };

// Per-post hero + mid images. The 15 originals come from public/blog/<slug>.webp.
// The 8 new posts re-use sensible sibling images.
const HERO_IMAGES: Record<string, string> = {
  "best-iptv-providers-uk-2026": "/blog/best-iptv-providers-uk-2026.webp",
  "how-to-find-iptv-providers": "/blog/how-to-find-iptv-providers.webp",
  "how-do-iptv-providers-work": "/blog/how-do-iptv-providers-work.webp",
  "cheap-iptv-providers-uk": "/blog/cheap-iptv-providers-uk.webp",
  "iptv-providers-free-trial": "/blog/iptv-providers-free-trial.webp",
  "iptv-providers-reviews-2026": "/blog/iptv-providers-reviews-2026.webp",
  "best-iptv-providers-firestick": "/blog/best-iptv-providers-firestick.webp",
  "are-iptv-providers-legal-uk": "/blog/are-iptv-providers-legal-uk.webp",
  "how-to-spot-reliable-iptv-provider": "/blog/how-to-spot-reliable-iptv-provider.webp",
  "iptv-providers-vs-traditional-tv": "/blog/iptv-providers-vs-traditional-tv.webp",
  "iptv-providers-setup-fire-stick": "/blog/iptv-providers-setup-fire-stick.webp",
  "iptv-providers-smart-tv-setup": "/blog/iptv-providers-smart-tv-setup.webp",
  "iptv-providers-uk-sport-guide": "/blog/iptv-providers-uk-sport-guide.webp",
  "iptv-subscription-uk-2026": "/blog/best-iptv-providers-uk-2026.webp",
  "buy-iptv-subscription-uk": "/blog/cheap-iptv-providers-uk.webp",
  "iptv-packages-uk": "/blog/iptv-providers-comparison-2026.webp",
  "iptv-vs-sky-comparison": "/blog/iptv-providers-vs-traditional-tv.webp",
  "iptv-providers-reddit": "/blog/iptv-providers-reviews-2026.webp",
};

const MID_IMAGES: Record<string, string> = {
  "best-iptv-providers-uk-2026": "/blog/iptv-providers-comparison-2026.webp",
  "how-to-find-iptv-providers": "/blog/how-to-spot-reliable-iptv-provider.webp",
  "how-do-iptv-providers-work": "/blog/are-iptv-providers-legal-uk.webp",
  "cheap-iptv-providers-uk": "/blog/iptv-providers-vs-traditional-tv.webp",
  "iptv-providers-free-trial": "/blog/iptv-providers-reviews-2026.webp",
  "iptv-providers-reviews-2026": "/blog/how-to-spot-reliable-iptv-provider.webp",
  "best-iptv-providers-firestick": "/blog/iptv-providers-setup-fire-stick.webp",
  "are-iptv-providers-legal-uk": "/blog/how-to-spot-reliable-iptv-provider.webp",
  "how-to-spot-reliable-iptv-provider": "/blog/iptv-providers-reviews-2026.webp",
  "iptv-providers-vs-traditional-tv": "/blog/cheap-iptv-providers-uk.webp",
  "iptv-providers-setup-fire-stick": "/blog/best-iptv-providers-firestick.webp",
  "iptv-providers-smart-tv-setup": "/blog/iptv-providers-setup-fire-stick.webp",
  "iptv-providers-uk-sport-guide": "/blog/best-iptv-providers-firestick.webp",
  "iptv-subscription-uk-2026": "/blog/iptv-providers-vs-traditional-tv.webp",
  "buy-iptv-subscription-uk": "/blog/iptv-providers-reviews-2026.webp",
  "iptv-packages-uk": "/blog/iptv-providers-vs-traditional-tv.webp",
  "iptv-vs-sky-comparison": "/blog/cheap-iptv-providers-uk.webp",
  "iptv-providers-reddit": "/blog/how-to-spot-reliable-iptv-provider.webp",
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  const heroPath = HERO_IMAGES[slug];
  const ogImageUrl = heroPath ? `${SITE_URL}${heroPath}` : OG_IMAGE_URL;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
      languages: { "en-GB": `/blog/${post.slug}` },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImageUrl],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const data = blogData[slug];

  if (!post || !data) {
    notFound();
  }

  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const heroImage = HERO_IMAGES[slug];
  const midImage = MID_IMAGES[slug];
  const ogImageAbs = heroImage ? `${SITE_URL}${heroImage}` : OG_IMAGE_URL;

  const relatedGuides: { slug: string; title: string; excerpt: string }[] = [];
  for (const relatedSlug of data.related) {
    const related = BLOG_POSTS.find((p) => p.slug === relatedSlug);
    if (related) {
      relatedGuides.push({
        slug: related.slug,
        title: related.title,
        excerpt: related.excerpt,
      });
    }
  }

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en-GB",
    image: [ogImageAbs],
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  };

  const faqLd = data.faqs && data.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }
    : null;

  const howToLd = data.howTo
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: data.howTo.name,
        description: data.howTo.description,
        image: ogImageAbs,
        totalTime: "PT10M",
        step: data.howTo.steps.map((step, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: step.name,
          text: step.text,
        })),
      }
    : null;

  return (
    <>
      <BlogPostContent
        post={post}
        content={data.content}
        related={relatedGuides}
        heroImage={heroImage}
        midImage={midImage}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
      {howToLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />}
    </>
  );
}
