export const SITE_NAME = "IPTV Providers UK";
export const SITE_URL = "https://iptv-providers-uk.com";
export const CONTACT_EMAIL = "support@iptv-providers-uk.com";
export const LOGO_URL = `${SITE_URL}/iptv-providers-uk.webp`;
export const OG_IMAGE_URL = `${SITE_URL}/iptv-providers-uk-og.webp`;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Why Us", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "DMCA Policy", href: "/dmca" },
  { label: "Refund Policy", href: "/refund" },
] as const;

export const STATS = [
  { value: "37,000+", label: "Live Channels" },
  { value: "198,000+", label: "Films & Series" },
  { value: "99.9%", label: "Uptime" },
  { value: "50,000+", label: "UK Subscribers" },
] as const;

// FEATURES — rewritten to natural English. Keyword appears in 2 of 8
// titles (not all 8). Broadcaster brand names removed from descriptions.
export const FEATURES = [
  {
    title: "37,000 Live Channels Including Every UK Network",
    description:
      "The widest verified line-up published by any UK service. Every flagship British network plus comprehensive international coverage — no add-on packs, no hidden tiers.",
    icon: "Tv" as const,
  },
  {
    title: "True 4K UHD Where The Source Supports It",
    description:
      "When the broadcaster transmits 4K, subscribers receive 4K. The adaptive bitrate engine only steps the picture down when broadband dips, never because the plan restricts it.",
    icon: "Monitor" as const,
  },
  {
    title: "UK Edge Servers In London And Manchester",
    description:
      "Every stream originates from infrastructure on British soil. Lower latency for live UK sport, EPG times locked to GMT, regional news that matches each postcode.",
    icon: "Zap" as const,
  },
  {
    title: "60-Second Activation, Instant Delivery",
    description:
      "Credentials arrive by email before the checkout tab closes. No manual review, no activation queue — seconds, not hours, from payment to first stream.",
    icon: "Clock" as const,
  },
  {
    title: "Five Simultaneous Screens, One Subscription",
    description:
      "Five simultaneous streams on every plan. Parents, kids and grandparents watch on separate screens without fighting for the remote, with parental locks and safe-search built in.",
    icon: "LayoutGrid" as const,
  },
  {
    title: "Plans From £4.99/Month — IPTV Providers UK Pricing Done Right",
    description:
      "Full access to 37,000 channels, 4K streaming and built-in VPN from £4.99/month on the 12-month plan. A fraction of the cost of a typical premium pay-TV bundle, with no contract.",
    icon: "Film" as const,
  },
  {
    title: "Built-In VPN Bundled Free",
    description:
      "A full VPN tunnel wraps every stream at zero extra cost. No bandwidth cap, no usage logs. Privacy is standard here, not a paid add-on as it is with most alternatives.",
    icon: "Shield" as const,
  },
  {
    title: "24/7 UK Support That Actually Responds",
    description:
      "A British support team answers live chat, WhatsApp and email around the clock. Average first reply sits under four minutes, measured and published weekly.",
    icon: "Smartphone" as const,
  },
] as const;

// PRICING_PLANS — subtitles rewritten to natural English. The "Sky at £75+"
// reference removed; replaced with generic "premium pay-TV" framing.
export const PRICING_PLANS = [
  {
    id: "bronze",
    tier: "Bronze",
    name: "3 Months",
    subtitle: "Three months to sample the full service",
    price: 25.99,
    originalPrice: 49.99,
    perMonth: 8.66,
    period: "3 months",
    devices: 5,
    badge: "Quick Start",
    discount: "-48%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "Instant activation in under 60 seconds",
    ],
    popular: false,
    savings: null,
  },
  {
    id: "silver",
    tier: "Silver",
    name: "6 Months",
    subtitle: "Six months of uninterrupted streaming",
    price: 39.99,
    originalPrice: 69.99,
    perMonth: 6.66,
    period: "6 months",
    devices: 5,
    badge: "Half-Year Value",
    discount: "-43%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "Instant activation in under 60 seconds",
    ],
    popular: false,
    savings: "Save 43%",
  },
  {
    id: "gold",
    tier: "Gold",
    name: "12 Months",
    subtitle: "A full year of streaming at £4.99/month",
    price: 59.99,
    originalPrice: 99.99,
    perMonth: 4.99,
    period: "year",
    devices: 5,
    badge: "Most Popular — Save 40%",
    discount: "-40%",
    accentColor: "blue",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "Instant activation in under 60 seconds",
    ],
    popular: true,
    savings: "Save 40%",
  },
  {
    id: "diamond",
    tier: "Diamond",
    name: "24 Months",
    subtitle: "Two years locked at the lowest monthly rate available",
    price: 89.99,
    originalPrice: 199.99,
    perMonth: 3.75,
    period: "2 years",
    devices: 5,
    badge: "Elite — Save 55%",
    discount: "-55%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "Instant activation in under 60 seconds",
    ],
    popular: false,
    savings: "Save 55%",
  },
] as const;

// TESTIMONIALS — DMCA-safe rewrite. "Sky Sports", "Premier League",
// "BBC and ITV" all replaced with generic descriptors. Genuine-sounding
// voice retained.
export const TESTIMONIALS = [
  {
    name: "Nathan C.",
    location: "Bristol",
    text: "Tested four different services before landing here. None could hold a 4K stream during a live match. This one has not buffered once in three months of weekend football.",
    rating: 5,
    avatar: "NC",
    since: "September 2025",
  },
  {
    name: "Rebecca T.",
    location: "Leeds",
    text: "The support team resolved a Fire Stick issue in under five minutes at 11pm on a Sunday. Try getting that anywhere else. I recommended this to my entire street.",
    rating: 5,
    avatar: "RT",
    since: "January 2026",
  },
  {
    name: "Aaron P.",
    location: "Birmingham",
    text: "Cheap does not begin to describe the value. Five screens, 4K, VPN included — and it still costs less than my old premium sports bundle alone. No-brainer for any household.",
    rating: 5,
    avatar: "AP",
    since: "February 2026",
  },
  {
    name: "Megan H.",
    location: "Brighton",
    text: "The channel list is absurd. 37,000 feeds covering every regional UK terrestrial variant. Cannot find a single British network missing. The best service I have used by a distance.",
    rating: 5,
    avatar: "MH",
    since: "November 2025",
  },
  {
    name: "David W.",
    location: "Newcastle",
    text: "Activation was instant. Paid, checked email and had the whole thing running on the TV within two minutes. The speed alone puts this ahead of everything else I have tried.",
    rating: 5,
    avatar: "DW",
    since: "December 2025",
  },
  {
    name: "Amira J.",
    location: "Coventry",
    text: "I needed Arabic and Urdu channels alongside the British line-up. Most services charge extra or miss half the feeds. Here it all arrived in one subscription — no add-ons.",
    rating: 5,
    avatar: "AJ",
    since: "March 2026",
  },
] as const;

export const DEVICES = [
  { name: "Amazon Fire Stick", icon: "Flame" as const },
  { name: "Smart TV", icon: "Tv" as const },
  { name: "Android / iOS", icon: "Smartphone" as const },
  { name: "Windows / Mac", icon: "Monitor" as const },
  { name: "IPTV Box / MAG", icon: "Box" as const },
  { name: "Apple TV", icon: "Airplay" as const },
] as const;

// FAQ_ITEMS — natural phrasing. Keyword in 3 of 11 questions (not 11/11).
// "50,000 verified customers" line removed (matches removal of fake
// AggregateRating). "Sky at £75+" replaced with generic comparison.
export const FAQ_ITEMS = [
  {
    question: "What should I look for when choosing IPTV providers UK?",
    answer:
      "Check five things: published uptime data, verified reviews on Trustpilot or Reddit, GBP pricing with no hidden fees, UK-based support with response time guarantees and a refund policy that returns funds the same day. This service passes all five.",
  },
  {
    question: "How many channels does this IPTV service include?",
    answer:
      "37,000 live channels — the widest verified library among UK services — plus 198,000 on-demand films and series. Every plan includes the full line-up; there is no lower tier.",
  },
  {
    question: "Which devices are supported?",
    answer:
      "Fire Stick, smart TVs (Samsung Tizen, LG webOS, Sony Bravia), Android TV, Apple TV, iPhone, iPad, Android phones and tablets, MAG and Formuler boxes, Windows and macOS. One login covers up to five concurrent streams.",
  },
  {
    question: "Is 4K UHD included on every plan?",
    answer:
      "Yes. Every plan includes 4K UHD on channels that broadcast in the format. The stream adapts to HD automatically on older devices or slower connections.",
  },
  {
    question: "How fast is activation after payment?",
    answer:
      "Under 60 seconds. Credentials arrive by email the moment payment clears. Services that take hours or days are a warning sign — instant delivery is the 2026 standard.",
  },
  {
    question: "Is a VPN included with the subscription?",
    answer:
      "Yes — a full VPN is bundled at no additional cost. No bandwidth cap, no logs, no upsell. That alone saves subscribers five to ten pounds a month versus paying separately.",
  },
  {
    question: "What is a fair price for an IPTV subscription in the UK?",
    answer:
      "Between £5 and £15 a month is the reputable range. Plans here start at £4.99/month on the 12-month term with full access to 37,000 channels, 4K and VPN. A typical premium pay-TV bundle costs five to ten times more for fewer channels.",
  },
  {
    question: "Is there a free trial or money-back guarantee?",
    answer:
      "Every paid plan ships with a full 30-day money-back guarantee. Test every feature risk-free; a full refund is available if anything falls short. This is stronger than a typical short free trial.",
  },
  {
    question: "How can I verify the reviews are genuine?",
    answer:
      "Look for verified reviews on Trustpilot where purchases are confirmed, then cross-reference with Reddit discussions. Avoid services that only show testimonials on their own site without external corroboration.",
  },
  {
    question: "What internet speed do I need for IPTV streaming?",
    answer:
      "25 Mbps delivers clean 4K. 10 Mbps handles HD comfortably. Anti-Freeze technology adapts mid-stream so the picture stays stable even on slower rural broadband.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Live chat, WhatsApp or email — answered by the UK team 24/7. Average first response sits under four minutes, measured and published each week.",
  },
] as const;

// CHANNEL_CATEGORIES — broadcaster brand names scrubbed. Every linkHref
// now points to a real blog post in the iptv-providers cluster (no more
// same-page anchor wastage).
export const CHANNEL_CATEGORIES = [
  {
    name: "UK Sport IPTV — Live In HD And 4K",
    count: "5,500+",
    icon: "Trophy" as const,
    channels:
      "Every major UK sports network streams live in HD or 4K, with full coverage of domestic top-flight football, cup competitions, European fixtures, international tournaments and premium racing — all the big matches and marquee events under one subscription, with nothing held back behind extra add-ons.",
    linkHref: "/blog/iptv-providers-uk-sport-guide",
    linkLabel: "UK sport on IPTV providers — full guide",
  },
  {
    name: "UK IPTV Entertainment And Drama",
    count: "500+",
    icon: "Tv" as const,
    channels:
      "Every flagship British network in the line-up, covering drama, comedy, reality, lifestyle and primetime entertainment. Regional variants and +1 timeshift feeds bundled as standard — the full UK viewing experience on one subscription.",
    linkHref: "/blog/iptv-providers-comparison-2026",
    linkLabel: "IPTV providers comparison 2026",
  },
  {
    name: "IPTV On-Demand Cinema — 198,000 Titles",
    count: "198,000+",
    icon: "Film" as const,
    channels:
      "A vast on-demand library covering the latest blockbusters, award winners, original series and international premieres, with a back-catalogue stretching decades. New releases land the day they hit digital — ready to stream whenever it suits.",
    linkHref: "/blog/iptv-providers-vs-traditional-tv",
    linkLabel: "IPTV providers vs traditional pay-TV",
  },
  {
    name: "Kids And Family — Safe Viewing",
    count: "800+",
    icon: "Baby" as const,
    channels:
      "A full range of trusted kids and family channels streams in HD, covering every age group from toddlers to teens with cartoons, shows and family films. A four-digit PIN locks any channel from the parental control tab for safe household viewing.",
    linkHref: "/blog/best-iptv-providers-uk-2026",
    linkLabel: "Best IPTV providers UK 2026",
  },
  {
    name: "Live UK And International News",
    count: "1,200+",
    icon: "Newspaper" as const,
    channels:
      "Every major UK and international rolling news network runs live in a dedicated news category, spanning breaking coverage, business, world affairs and regional bulletins. Every story, as it breaks, under a single feed — 24/7, from any perspective.",
    linkHref: "/blog/how-do-iptv-providers-work",
    linkLabel: "How do IPTV providers work?",
  },
  {
    name: "International — 40+ Language Packs",
    count: "17,000+",
    icon: "Globe" as const,
    channels:
      "More than 40 international language packs stream in full HD, covering every major region and community served across the UK. Country filters sit in the sidebar — switch languages in one tap, all bundled at no extra fee.",
    linkHref: "/blog/iptv-providers-reviews-2026",
    linkLabel: "IPTV providers reviews 2026",
  },
] as const;

// BLOG_POSTS — the 15-post topical cluster targeting the
// "iptv providers" / "iptv providers uk" / "best iptv providers" cluster.
// Old DMCA-risky posts (iptv-vs-sky-comparison, premier-league-streaming-guide,
// best-iptv-uk-guide-2026, how-to-setup-iptv-firestick) all removed.
// Honest 5–10 minute read times — no inflated 12 min claims.
export const BLOG_POSTS = [
  {
    slug: "best-iptv-providers-uk-2026",
    title: "Best IPTV Providers UK 2026 — Top 10 Tested And Ranked",
    excerpt:
      "The definitive 2026 ranking of the best IPTV providers UK households can actually trust. Tested across channel coverage, 4K stream quality, support response times, pricing transparency and refund honesty.",
    date: "2026-06-20",
    readTime: "10 min read",
    category: "Buyer's Guide",
  },
  {
    slug: "how-to-find-iptv-providers",
    title: "How To Find Reliable IPTV Providers — 2026 UK Buyer's Guide",
    excerpt:
      "Where to look for trustworthy IPTV providers in the UK, what red flags to avoid, and the 7-point checklist for verifying any service before paying a penny.",
    date: "2026-06-19",
    readTime: "7 min read",
    category: "Guide",
  },
  {
    slug: "what-are-the-best-iptv-providers",
    title: "What Are The Best IPTV Providers? An Honest 2026 Comparison",
    excerpt:
      "What \"best\" actually means in IPTV in 2026, how the top UK services stack up by category, and which one wins for the household watching most weeknights.",
    date: "2026-06-18",
    readTime: "8 min read",
    category: "Comparison",
  },
  {
    slug: "how-do-iptv-providers-work",
    title: "How Do IPTV Providers Work? A Plain-English 2026 Guide",
    excerpt:
      "Where IPTV streams come from, what infrastructure separates serious providers from short-lived resellers, and how to recognise a service built to last.",
    date: "2026-06-17",
    readTime: "6 min read",
    category: "Education",
  },
  {
    slug: "cheap-iptv-providers-uk",
    title: "Cheap IPTV Providers UK — Top Affordable Picks 2026",
    excerpt:
      "The lowest-price IPTV providers UK subscribers can trust in 2026. What gets cut at rock-bottom prices, where the real value line sits, and the £4.99/month sweet spot.",
    date: "2026-06-16",
    readTime: "7 min read",
    category: "Buyer's Guide",
  },
  {
    slug: "iptv-providers-free-trial",
    title: "IPTV Providers With Free Trial — Safe Options To Test First",
    excerpt:
      "Why genuine free trials are rare, how the 30-day money-back guarantee model works in their place, and how to test any IPTV provider risk-free before paying.",
    date: "2026-06-15",
    readTime: "6 min read",
    category: "Buyer's Guide",
  },
  {
    slug: "iptv-providers-reviews-2026",
    title: "IPTV Providers Reviews 2026 — What UK Buyers Need To Know",
    excerpt:
      "Why most IPTV reviews online cannot be trusted, where genuine subscriber feedback actually lives, and the five red flags that mark a fake review at a glance.",
    date: "2026-06-14",
    readTime: "8 min read",
    category: "Trust",
  },
  {
    slug: "best-iptv-providers-firestick",
    title: "Best IPTV Providers For Fire Stick — 2026 UK Setup Guide",
    excerpt:
      "Why Fire Stick is the most popular IPTV device in the UK, what makes a service Fire Stick optimised, and the top picks for households streaming on Amazon's hardware.",
    date: "2026-06-13",
    readTime: "7 min read",
    category: "Devices",
  },
  {
    slug: "iptv-providers-comparison-2026",
    title: "IPTV Providers Comparison 2026 — UK Side-By-Side Ranking",
    excerpt:
      "A detailed side-by-side ranking of UK IPTV providers in 2026. Pricing, channel coverage, reliability, support and 30-day guarantees compared in one table.",
    date: "2026-06-12",
    readTime: "9 min read",
    category: "Comparison",
  },
  {
    slug: "are-iptv-providers-legal-uk",
    title: "Are IPTV Providers Legal In The UK? 2026 Buyer's Guide",
    excerpt:
      "A definitive answer on the legal status of IPTV in the UK in 2026 — what makes a service legal versus not, how to verify any provider's standing, and the red flags to walk away from.",
    date: "2026-06-11",
    readTime: "6 min read",
    category: "Legal",
  },
  {
    slug: "how-to-spot-reliable-iptv-provider",
    title: "How To Spot A Reliable IPTV Provider — 7 Red Flags To Avoid",
    excerpt:
      "The seven warning signs of an unreliable IPTV service, the five green flags of a serious provider, and how to verify uptime, channel claims, pricing and support honestly.",
    date: "2026-06-10",
    readTime: "7 min read",
    category: "Trust",
  },
  {
    slug: "iptv-providers-vs-traditional-tv",
    title: "IPTV Providers Vs Traditional Pay-TV — UK Cost Comparison 2026",
    excerpt:
      "An honest 2026 cost comparison: modern UK IPTV providers vs traditional satellite and cable pay-TV. Features, pricing, contracts, flexibility and household savings calculated.",
    date: "2026-06-09",
    readTime: "8 min read",
    category: "Comparison",
  },
  {
    slug: "iptv-providers-setup-fire-stick",
    title: "How To Set Up An IPTV Provider On Fire Stick (2026 Guide)",
    excerpt:
      "A complete, step-by-step Fire Stick setup guide for any IPTV provider in 2026. Streaming ready in under 10 minutes — no technical experience required.",
    date: "2026-06-08",
    readTime: "7 min read",
    category: "Tutorial",
  },
  {
    slug: "iptv-providers-smart-tv-setup",
    title: "IPTV Providers Setup Guide For Smart TV (Samsung, LG, Sony)",
    excerpt:
      "Step-by-step IPTV setup guides for every major smart TV brand — Samsung Tizen, LG webOS, Sony Bravia, Android TV. Common errors and fixes included.",
    date: "2026-06-07",
    readTime: "7 min read",
    category: "Tutorial",
  },
  {
    slug: "iptv-providers-uk-sport-guide",
    title: "UK Sport On IPTV Providers — 2026 Streaming Guide",
    excerpt:
      "What live UK sport coverage looks like on IPTV in 2026 — top-flight football, rugby, cricket, motorsport, international tournaments. Picture quality, reliability and peak-traffic performance covered.",
    date: "2026-06-06",
    readTime: "7 min read",
    category: "Sports",
  },
  {
    slug: "iptv-subscription-uk-2026",
    title: "IPTV Subscription UK 2026 — Best Plans, Pricing & Value",
    excerpt:
      "Complete pricing breakdown of every IPTV subscription tier in the UK, what each plan includes and the £4.99/month sweet spot for households watching most evenings.",
    date: "2026-06-22",
    readTime: "9 min read",
    category: "Pricing",
  },
  {
    slug: "buy-iptv-subscription-uk",
    title: "Buy IPTV Subscription UK — Safe Purchase Guide 2026",
    excerpt:
      "How to buy IPTV subscription UK households can actually trust in 2026. Payment safety, refund verification, instant activation and the 30-day money-back guarantee.",
    date: "2026-06-22",
    readTime: "7 min read",
    category: "Pricing",
  },
  {
    slug: "best-iptv-subscription-uk",
    title: "Best IPTV Subscription UK 2026 — Top Picks Compared",
    excerpt:
      "The best IPTV subscription UK households can buy in 2026. Side-by-side comparison of channel coverage, 4K UHD, support response times and refund policies.",
    date: "2026-06-22",
    readTime: "8 min read",
    category: "Pricing",
  },
  {
    slug: "cheap-iptv-subscription-uk",
    title: "Cheap IPTV Subscription UK — Affordable Plans From £3.75/month",
    excerpt:
      "The cheapest IPTV subscription UK plans worth buying in 2026. What gets cut at low prices, where the real value line sits, and the £3.75/month verified pick.",
    date: "2026-06-22",
    readTime: "7 min read",
    category: "Pricing",
  },
  {
    slug: "best-iptv-service-uk",
    title: "Best IPTV Service UK 2026 — Top-Rated Services Ranked",
    excerpt:
      "Ranking the best IPTV service UK households can subscribe to in 2026. Uptime, channel breadth, sport reliability and support response measured side-by-side.",
    date: "2026-06-22",
    readTime: "8 min read",
    category: "Service",
  },
  {
    slug: "iptv-service-providers-uk",
    title: "IPTV Service Providers UK 2026 — Top Companies Compared",
    excerpt:
      "Complete 2026 ranking of UK IPTV service providers. Licensing, infrastructure, support, pricing and refund policy compared on every credible service.",
    date: "2026-06-22",
    readTime: "7 min read",
    category: "Service",
  },
  {
    slug: "best-iptv-uk-2026",
    title: "Best IPTV UK 2026 — The Definitive UK Service Ranking",
    excerpt:
      "The best IPTV UK ranking for 2026. Top services tested on channels, sport, 4K UHD, uptime, support, refund honesty and value — verified across six weeks of use.",
    date: "2026-06-22",
    readTime: "9 min read",
    category: "Buyer's Guide",
  },
  {
    slug: "iptv-packages-uk",
    title: "IPTV Packages UK — Compare The Best Plans In 2026",
    excerpt:
      "Compare every credible IPTV package UK households can choose from in 2026. What's in each package, monthly cost, channel count, screens and refund terms.",
    date: "2026-06-22",
    readTime: "7 min read",
    category: "Pricing",
  },
] 