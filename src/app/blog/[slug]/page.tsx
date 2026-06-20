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
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [OG_IMAGE_URL],
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

  // Build the related-guides array from the linking map in blogData,
  // joined against BLOG_POSTS to pull title + excerpt. Any related slug
  // that does not exist in BLOG_POSTS is silently dropped — defensive
  // against typos in the linking map.
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

  // Article schema — Person author for stronger E-E-A-T signal (per Google
  // 2024+ guidance preferring named human authors over Organization).
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en-GB",
    image: [OG_IMAGE_URL],
    author: {
      "@type": "Person",
      name: "James Whitfield",
      jobTitle: "Senior IPTV Editor",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  // BreadcrumbList schema — Home → Blog → Post. Helps Google show the
  // sitelinks breadcrumb in SERP results.
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  // FAQPage schema — emitted per-post when the post has FAQs (every
  // post does, currently). Each FAQ feeds rich-result eligibility.
  const faqLd = data.faqs && data.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      }
    : null;

  // HowTo schema — emitted for tutorial posts only (Fire Stick setup,
  // smart TV setup). Provides rich-result eligibility in SERPs.
  const howToLd = data.howTo
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: data.howTo.name,
        description: data.howTo.description,
        image: OG_IMAGE_URL,
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
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      {howToLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }}
        />
      )}
    </>
  );
}
