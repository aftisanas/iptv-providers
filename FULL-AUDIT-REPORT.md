# Full Website SEO Audit — IPTV Providers UK

- **Site:** https://iptv-providers-uk.com
- **Audit date:** 2026-06-20
- **Method:** Live crawl of the deployed production site (HTML, headers, schema, sitemap, robots, image assets verified by HTTP status). PageSpeed field data was rate-limited by the API at audit time; performance is assessed structurally.
- **Business type detected:** Single-brand subscription product / e-commerce-style sales site (national UK IPTV subscription) with a content-marketing blog. **Not** a local business — no GBP/NAP/maps factors apply.

> ⚠️ **Important context:** The local working tree contains substantial **uncommitted changes that fix the three most severe live issues** (broken image, fake rating, missing OG image) — but they are **not deployed**. The score below reflects the **live deployed site**. A projected post-deploy score is given in the Action Plan.

---

## Executive Summary

### Overall SEO Health Score (live): **62 / 100**
### Projected after deploying current local fixes: **~79 / 100**

| Category | Weight | Score (live) | Weighted |
|----------|:------:|:------------:|:--------:|
| Technical SEO | 22% | 80 | 17.6 |
| Content Quality | 23% | 50 | 11.5 |
| On-Page SEO | 20% | 72 | 14.4 |
| Schema / Structured Data | 10% | 45 | 4.5 |
| Performance (CWV) | 10% | 55 | 5.5 |
| AI Search Readiness | 10% | 58 | 5.8 |
| Images | 5% | 45 | 2.3 |
| **Total** | **100%** | | **≈ 62** |

The technical foundation is genuinely strong — clean canonicals, a complete sitemap with `lastmod`/`priority`, working HTTP→HTTPS and www handling, a real 404, and rich structured data. The score is pulled down by issues that are **already fixed in your local tree but not shipped**, plus two structural weaknesses (thin blog content, zero outbound citations) that the local changes do **not** address.

### Top 5 Critical Issues
1. **Broken image returns HTTP 500 site-wide** — `https://iptv-providers-uk.com/buy-iptv-uk.webp` 500s. It is referenced in the homepage `Product` + `ImageObject` schema **and** every blog post's `Article` schema, **and** it is the preloaded `fetchPriority=high` LCP hero. → invalid rich results everywhere + a broken hero image (severe LCP/UX). *Fixed locally (renamed to `iptv-providers-uk.webp`), not deployed.*
2. **Fabricated-looking rating in schema** — live `AggregateRating` shows `ratingValue 4.9` from `reviewCount 50000` with no on-site review system. This violates Google's structured-data review guidelines and is a manual-action risk. *Removed locally, not deployed.*
3. **No `og:image` / `twitter:image`** — `twitter:card` is `summary_large_image` but no image is provided, so every social/Slack/WhatsApp share renders blank. *Fixed locally (`iptv-providers-uk-og.webp` added to OpenGraph), not deployed.*
4. **Thin blog content** — all four posts are 333–469 words. The blog is the intended ranking vehicle (per SEO-RANK-1-PLAN) but is far below the depth needed to compete.
5. **Zero outbound links site-wide** — no citations to authoritative sources on any page, a real E-E-A-T weakness in a trust-sensitive niche.

### Top 5 Quick Wins
1. **Deploy the current local branch** — instantly clears issues #1, #2, #3 above. Highest ROI action on the site.
2. **Ship `llms.txt`** — it exists in `public/llms.txt` locally but returns 404 live.
3. **Add `Strict-Transport-Security` (HSTS)** header at Cloudflare — currently absent.
4. **Add 2–4 outbound citations per blog post** to authoritative sources (Ofcom, broadcaster sites, Reddit threads already referenced in copy).
5. **Re-run PageSpeed after deploy** to confirm the LCP hero now paints.

---

## Technical SEO — 80/100

**Working well**
- `robots.txt`: `Allow: /`, sensible disallows (`/api/`, `/_next/`, `/admin/`), sitemap declared.
- `sitemap.xml`: 11 URLs, all with `<lastmod>`, `<changefreq>`, `<priority>`. Clean.
- Canonicals present and self-referential on home and posts.
- `http://` → `https://` 301; non-canonical host handled.
- Real 404 status on missing pages.
- Cloudflare CDN + `X-Nextjs-Cache: HIT`, sane `Cache-Control`, HTTP/3 (`alt-svc h3`).
- Security headers present: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`.

**Issues**
- **Missing `Strict-Transport-Security` (HSTS)** — add at Cloudflare: `max-age=31536000; includeSubDomains; preload`.
- **No `Content-Security-Policy`** and no `Permissions-Policy` — defense-in-depth gaps (Low priority for SEO).
- **Broken static asset** `buy-iptv-uk.webp` (500) — a crawlable broken resource (see Critical #1).

## Content Quality — 50/100

- **Thin posts**: `best-iptv-uk-guide-2026` 469w, `iptv-vs-sky-comparison` 370w, `premier-league-streaming-guide` 360w, `how-to-setup-iptv-firestick` 333w. Competitive guides in this space run 1,500–3,000 words.
- **Homepage** is solid at ~1,926 words with a strong FAQ, but copy leans heavily on repeated keyword phrasing and self-referential superlatives ("#1 Rated").
- **No outbound citations** anywhere → weak E-E-A-T. The blog FAQs already *reference* Reddit, Ofcom-style guidance, and DMCA concepts in prose — link them.
- **No visible author/byline or "reviewed by" signals** on posts.

## On-Page SEO — 72/100

- **Titles**: well-formed and within length (home 58 chars, posts descriptive). Good.
- **Meta descriptions**: present, compelling, correct length on home and posts.
- **Headings**: clean — homepage 1×H1 / 8×H2; posts 1×H1. Good hierarchy.
- **Internal linking**: 40 internal links on home, ~20 per post. Healthy.
- **Missing social images**: no `og:image`/`twitter:image` (Critical #3). OG title/description/url/locale all present and good.

## Schema & Structured Data — 45/100

**Implemented (rich):** `Organization`, `WebSite`, `WebPage`, `Product` (+4 `Offer`), `Brand`, `ContactPoint`, `FAQPage` (11 Q&A), `ImageObject`, `AggregateRating` on home; `Article`, `WebPage`, `Organization`, `ImageObject` on posts.

**Errors / risks**
- **Every schema `image` points to the 500'ing asset** — invalidates the image property across all rich-result types.
- **`AggregateRating` 4.9 / 50,000 reviews** with no review collection mechanism — policy violation risk; remove or back with real, verifiable reviews + visible `Review` markup. *(Already removed in local tree.)*
- Confirm `Offer.priceValidUntil` (`PRICE_VALID_UNTIL`) stays in the future.

## Performance (CWV) — 55/100

- PageSpeed Insights API was rate-limited at audit time — no field (CrUX) numbers captured.
- **Structural red flag**: the LCP image is preloaded with `fetchPriority=high` but the asset 500s on live → the hero fails to paint, which directly harms LCP and CLS. This alone likely fails LCP in the field. *Resolved by deploying the renamed image.*
- Positives: Next.js `<Image>` responsive `srcset`, font preloading, Cloudflare edge caching.
- **Re-run PageSpeed after deploy** to capture true LCP/INP/CLS.

## AI Search Readiness (GEO) — 58/100

- **`llms.txt` returns 404** on live though `public/llms.txt` exists locally — deploy it.
- Strong `FAQPage` markup is good for AI Overviews / ChatGPT extraction.
- AI crawlers are not blocked in `robots.txt` (good for citation).
- **No outbound authority links** and thin posts limit citation-worthiness — AI engines favour well-sourced, in-depth passages.
- Brand/Organization entity is well-defined in schema (helps entity recognition) — fix the broken `image` so the entity card is valid.

## Images — 45/100

- **Hero/brand image 500s** on live (Critical #1).
- **No social preview image** served (Critical #3).
- Next.js image optimization pipeline is in place (responsive `srcset`, WebP) — once the source asset is valid, this category jumps.
- Verify `alt` text on the deployed hero and logo after the rename ships.

---

## What the live site does NOT have that competitors will
- In-depth (1,500w+) blog guides with sourced claims.
- Outbound citations / references.
- Visible author/expertise signals.
- A real review/testimonial system to justify rating schema.
- `llms.txt` and social share images live.

See **ACTION-PLAN.md** for prioritized, sequenced fixes.
