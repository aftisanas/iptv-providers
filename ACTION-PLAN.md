# SEO Action Plan — IPTV Providers UK

Prioritized from the live audit (2026-06-20). Effort: **S** = <30 min, **M** = a few hours, **L** = day+.
Live score **62/100** → projected **~79/100** once the items already done locally are deployed.

---

## 🔴 CRITICAL — fix immediately (blocks indexing / rich results / paint)

### C1 — Deploy the current local branch  ·  Effort: S
The single highest-ROI action. Your uncommitted local changes already resolve C1–C3 below; they just aren't live.
- [ ] Commit + deploy. Then verify on production:
  - `curl -I https://iptv-providers-uk.com/iptv-providers-uk.webp` → expect **200** (currently `buy-iptv-uk.webp` → **500**)
  - View source: `og:image` and `twitter:image` present
  - View source: no `AggregateRating` / `reviewCount":"50000"`

### C2 — Broken image in all structured data + LCP hero  ·  Effort: S *(done locally)*
`buy-iptv-uk.webp` returns **500** and is referenced by homepage `Product`/`ImageObject` schema, every blog `Article` schema, and the preloaded LCP hero. Local source now points to `iptv-providers-uk.webp` (exists, 102 KB). **Ships with C1.**

### C3 — Remove fabricated `AggregateRating`  ·  Effort: S *(done locally)*
Live schema claims 4.9 from 50,000 reviews with no review system — a Google review-policy violation / manual-action risk. Already removed from `src/app/page.tsx`. **Ships with C1.** Do **not** re-introduce a rating without a real, visible `Review` mechanism.

### C4 — Add social share images  ·  Effort: S *(done locally)*
No `og:image`/`twitter:image` live despite `summary_large_image`. `iptv-providers-uk-og.webp` (1200×630-class, 37 KB) is wired in `layout.tsx` OpenGraph. **Ships with C1.** After deploy, validate with the X/Facebook share debuggers.

---

## 🟠 HIGH — within 1 week (significant ranking impact)

### H1 — Expand blog posts to genuine depth  ·  Effort: L
All four posts are 333–469 words; the blog is your stated ranking vehicle.
- [ ] Bring each priority post to **1,500–2,500 words** with real subtopics, comparison tables, and step-by-step detail.
- [ ] Add a "Last updated" date and a named author/byline block per post.

### H2 — Add outbound citations (E-E-A-T)  ·  Effort: M
Zero external links site-wide.
- [ ] Add 2–4 links per post to authoritative sources you already reference in prose (Ofcom guidance, broadcaster pages, relevant Reddit threads). Use `rel="noopener"`; leave them followable unless affiliate.

### H3 — Ship `llms.txt`  ·  Effort: S
`public/llms.txt` exists locally but 404s live. Deploy and confirm `200` at `/llms.txt`.

### H4 — Re-run PageSpeed after deploy  ·  Effort: S
Capture real LCP/INP/CLS once the hero paints. Re-run: `python pagespeed_check.py https://iptv-providers-uk.com` (API was rate-limited during this audit).

---

## 🟡 MEDIUM — within 1 month

### M1 — Add HSTS header  ·  Effort: S
At Cloudflare: `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`.

### M2 — Reduce keyword over-optimization on homepage  ·  Effort: M
Trim repeated "IPTV providers UK" / "#1 Rated" phrasing; vary entities and add substantive comparison content.

### M3 — Expand the content cluster  ·  Effort: L
Only 4 posts + 6 utility pages. Per SEO-RANK-1-PLAN, build out the 15-post topic cluster with internal links back to the homepage/pricing hub. Update `sitemap.xml` as posts ship.

### M4 — Add real review/testimonial collection  ·  Effort: L
Prerequisite to ever using rating schema again. Collect verifiable reviews, render them with `Review` markup, then (optionally) reinstate `AggregateRating` backed by real counts.

---

## 🔵 LOW — backlog

- L1 — Add `Content-Security-Policy` and `Permissions-Policy` headers (defense-in-depth).
- L2 — Add `BreadcrumbList` schema to blog posts (verify rendering after deploy).
- L3 — Confirm `Offer.priceValidUntil` is auto-rolled forward so it never goes stale.
- L4 — Audit `alt` text on the deployed hero/logo after the image rename ships.

---

## Verification checklist (run after deploy)
```
curl -I  https://iptv-providers-uk.com/iptv-providers-uk.webp      # 200
curl -o /dev/null -w "%{http_code}" https://iptv-providers-uk.com/llms.txt   # 200
curl -I  https://iptv-providers-uk.com/ | grep -i strict-transport  # present after M1
# View-source checks: og:image present, no reviewCount":"50000", schema image = iptv-providers-uk.webp
```
Then validate structured data in Google's Rich Results Test and re-run PageSpeed.
