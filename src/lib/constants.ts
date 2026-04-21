export const SITE_NAME = "IPTV Providers UK";
export const SITE_URL = "https://iptv-providers-uk.com";
export const CONTACT_EMAIL = "support@iptv-providers-uk.com";

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

export const FEATURES = [
  {
    title: "37,000 Channels — The Widest Library From UK IPTV Providers",
    description:
      "From BBC One to beIN Sports, from S4C to Sky Atlantic, the live channel count stands at 37,000 and grows weekly. No competing UK provider publishes a wider verified list.",
    icon: "Tv" as const,
  },
  {
    title: "Premium 4K UHD — The Quality Bar For Top IPTV Providers",
    description:
      "When the broadcaster transmits 4K, subscribers receive 4K. The adaptive bitrate engine scales the picture only when broadband dips, never because the plan restricts it.",
    icon: "Monitor" as const,
  },
  {
    title: "Strong UK Servers — IPTV Providers With Real Infrastructure",
    description:
      "Every stream originates from infrastructure on British soil. Lower latency for Premier League kick-offs, EPG times locked to GMT and regional news that matches each postcode.",
    icon: "Zap" as const,
  },
  {
    title: "60-Second Activation — IPTV Providers That Deliver Instantly",
    description:
      "Credentials arrive by email before the checkout tab closes. No manual review, no activation queue — seconds, not hours, end-to-end.",
    icon: "Clock" as const,
  },
  {
    title: "Five Screens At Once — IPTV Providers Built For Families",
    description:
      "Five simultaneous streams on every plan. Parents, kids and grandparents watch on separate screens without fighting for the remote, with parental locks and safe-search built in.",
    icon: "LayoutGrid" as const,
  },
  {
    title: "Budget Plans From The Best IPTV Providers — From £4.99/Month",
    description:
      "Full access to 37,000 channels, 4K streaming and VPN from £4.99/month on the 12-month term. Compare that to Sky at £75+ and the value gap is immediate.",
    icon: "Film" as const,
  },
  {
    title: "Built-In VPN — IPTV Providers That Bundle Privacy Free",
    description:
      "A full VPN tunnel wraps every stream at zero extra cost. No bandwidth cap, no usage logs. Privacy is standard here, not a paid add-on as it is with most alternatives.",
    icon: "Shield" as const,
  },
  {
    title: "24/7 UK Support — IPTV Providers That Actually Respond",
    description:
      "A named British team answers live chat, WhatsApp and email around the clock. Average first reply sits under four minutes, published weekly for anyone to verify.",
    icon: "Smartphone" as const,
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "bronze",
    tier: "Bronze",
    name: "3 Months",
    subtitle: "Three months to sample the top-rated IPTV providers UK",
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
    subtitle: "Six months of uninterrupted streaming from reliable IPTV providers",
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
    subtitle: "A full year from the best IPTV providers UK at £4.99/month",
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
    subtitle: "Two years locked at the cheapest rate any IPTV providers UK offer",
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

export const TESTIMONIALS = [
  {
    name: "Nathan C.",
    location: "Bristol",
    text: "Tested four different IPTV providers before landing here. None could hold a 4K stream during a match. This one has not buffered once in three months of Premier League viewing.",
    rating: 5,
    avatar: "NC",
    since: "September 2025",
  },
  {
    name: "Rebecca T.",
    location: "Leeds",
    text: "The support team resolved a Firestick issue in under five minutes at 11pm on a Sunday. Try getting that from any other provider. I recommended this to my entire street.",
    rating: 5,
    avatar: "RT",
    since: "January 2026",
  },
  {
    name: "Aaron P.",
    location: "Birmingham",
    text: "Cheap does not begin to describe the value. Five screens, 4K, VPN included — and it still costs less than my old Sky Sports bundle alone. No brainer for any household.",
    rating: 5,
    avatar: "AP",
    since: "February 2026",
  },
  {
    name: "Megan H.",
    location: "Brighton",
    text: "The channel list is absurd. 37,000 feeds including every regional BBC and ITV variant. I cannot find a single broadcaster missing. The best IPTV service I have used by a distance.",
    rating: 5,
    avatar: "MH",
    since: "November 2025",
  },
  {
    name: "David W.",
    location: "Newcastle",
    text: "Activation was instant. Paid, checked email and had the whole thing running on the TV within two minutes. The speed alone puts this ahead of every IPTV provider I have tried.",
    rating: 5,
    avatar: "DW",
    since: "December 2025",
  },
  {
    name: "Amira J.",
    location: "Coventry",
    text: "I needed Arabic and Urdu channels alongside the British lineup. Most providers charge extra or miss half the feeds. Here it all comes in one subscription — no add-ons.",
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

export const FAQ_ITEMS = [
  {
    question: "What should a subscriber look for in IPTV providers UK?",
    answer:
      "Check five things: published uptime data, verified reviews on Trustpilot or Reddit, GBP pricing with no hidden fees, UK-based support with response time guarantees and a refund policy that returns funds same-day. This service passes all five.",
  },
  {
    question: "How many channels do the best IPTV providers offer?",
    answer:
      "Top-tier providers carry 15,000 to 37,000 live channels. The library here sits at 37,000 — the widest verified list among all UK IPTV providers — plus 198,000 on-demand films and series.",
  },
  {
    question: "Is using an IPTV provider legal in the UK?",
    answer:
      "Yes. Streaming through a licensed provider is legal in the United Kingdom. A registered UK business address and a named contact for regulatory queries are published on site. Always choose a provider that states its licensing openly.",
  },
  {
    question: "Which devices do IPTV providers UK support?",
    answer:
      "Good IPTV providers support Firestick, smart TVs, Android TV, Apple TV, phones, tablets, MAG boxes and PCs. This service covers all of them on a single login with up to five concurrent streams.",
  },
  {
    question: "Do top IPTV providers include 4K?",
    answer:
      "The best ones do. Every plan here includes 4K UHD on channels that broadcast in the format. The stream adapts to HD on older devices or slower connections automatically.",
  },
  {
    question: "How fast should IPTV activation be?",
    answer:
      "Under sixty seconds is the gold standard. Credentials arrive by email the moment payment clears. Providers that take hours or days for activation are a warning sign.",
  },
  {
    question: "Is a VPN included with the best IPTV providers?",
    answer:
      "Rarely. Most charge extra. This service bundles a full VPN at no additional cost — no bandwidth cap, no logs, no upsell. That alone saves subscribers five to ten pounds a month.",
  },
  {
    question: "What is a fair price for an IPTV subscription?",
    answer:
      "Expect to pay between five and fifteen pounds per month for a reputable service. Plans here start at £4.99/month on the 12-month term with full access to 37,000 channels, 4K and VPN. Compare that to Sky at £75+ for fewer channels.",
  },
  {
    question: "Can an IPTV provider be tested before committing?",
    answer:
      "Instead of a limited free trial, every paid plan ships with a full 30-day money-back guarantee. Every feature can be tested risk-free and a full refund is available if the service falls short.",
  },
  {
    question: "How can IPTV reviews be verified as genuine?",
    answer:
      "Look for verified reviews on Trustpilot where purchases are confirmed. The 4.9/5 rating here comes from 50,000 verified customers. Avoid providers that only show testimonials on their own site.",
  },
  {
    question: "What internet speed is needed for IPTV UK?",
    answer:
      "25 Mbps delivers clean 4K. 10 Mbps handles HD. Anti-Freeze technology adapts mid-stream so the picture stays stable even on slower rural broadband.",
  },
  {
    question: "How does a subscriber contact this IPTV provider?",
    answer:
      "Live chat, WhatsApp or email — answered by the UK team 24/7. Average first response sits under four minutes, measured and published each week.",
  },
] as const;

export const CHANNEL_CATEGORIES = [
  {
    name: "UK Sport — Top Fixtures From The Leading IPTV Providers",
    count: "5,500+",
    icon: "Trophy" as const,
    channels:
      "Sky Sports Main Event through Arena, TNT Sports, Premier Sports, Eurosport and the full racing lineup stream live in HD or 4K. Premier League, Championship, FA Cup, Champions League, Six Nations and the Open — all under one subscription.",
    linkHref: "/blog/premier-league-streaming-guide",
    linkLabel: "Premier League streaming guide",
  },
  {
    name: "British Entertainment — The IPTV Providers UK Standard",
    count: "500+",
    icon: "Tv" as const,
    channels:
      "BBC One through Four, ITV1 to ITV4, Channel 4, Channel 5, E4, More4, Dave, Gold, Sky Max and Sky Atlantic. Regional variants and +1 timeshift feeds included — the full British lineup.",
    linkHref: "/#pricing",
    linkLabel: "Compare IPTV providers UK plans",
  },
  {
    name: "On-Demand Cinema — 198,000 Titles From Top IPTV Providers",
    count: "198,000+",
    icon: "Film" as const,
    channels:
      "Sky Cinema, Film4, Paramount+ originals and international premieres alongside a back-catalogue that stretches decades. New releases drop the day they hit digital.",
    linkHref: "/blog/iptv-vs-sky-comparison",
    linkLabel: "IPTV providers vs Sky comparison",
  },
  {
    name: "Kids & Family — Safe Coverage From Trusted IPTV Providers",
    count: "800+",
    icon: "Baby" as const,
    channels:
      "CBeebies, CBBC, Nickelodeon, Nick Jr, Cartoon Network and Disney Channel in HD. A four-digit PIN locks any channel from the parental control tab for safe household viewing.",
    linkHref: "/#features",
    linkLabel: "See parental safety features",
  },
  {
    name: "Rolling News — Live Streams From Verified IPTV Providers UK",
    count: "1,200+",
    icon: "Newspaper" as const,
    channels:
      "BBC News, Sky News, GB News, CNN International, Al Jazeera and Bloomberg run live in a dedicated news category. Every story, as it breaks, under a single feed.",
    linkHref: "/#faq",
    linkLabel: "Read the IPTV providers FAQ",
  },
  {
    name: "International — IPTV Providers With 40+ Language Packs",
    count: "17,000+",
    icon: "Globe" as const,
    channels:
      "Arabic, Urdu, Hindi, Polish, Portuguese, Turkish, French and African feeds stream in full HD. Country filters sit in the sidebar — switch languages in one tap, bundled at no extra fee.",
    linkHref: "/#testimonials",
    linkLabel: "Read subscriber reviews",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "best-iptv-uk-guide-2026",
    title: "Best IPTV Providers UK 2026 — How To Choose The Right Service",
    excerpt:
      "Finding the best IPTV providers in the UK means looking beyond flashy promises. This guide breaks down the seven criteria that matter most for British viewers — from channel quality and reliability to support and genuine value.",
    date: "2026-04-01",
    readTime: "12 min read",
    category: "Guide",
  },
  {
    slug: "how-to-setup-iptv-firestick",
    title: "How To Set Up IPTV Providers On Amazon Fire Stick",
    excerpt:
      "A complete, beginner-friendly guide to installing and configuring top IPTV providers on an Amazon Fire Stick. Streaming ready in under ten minutes using the step-by-step instructions below.",
    date: "2026-03-20",
    readTime: "6 min read",
    category: "Tutorial",
  },
  {
    slug: "iptv-vs-sky-comparison",
    title: "IPTV Providers Vs Sky — Which Service Wins For UK Viewers In 2026?",
    excerpt:
      "An honest comparison of modern IPTV providers and Sky TV for UK households. Costs, channel availability, picture quality, flexibility and long-term value — everything needed to make the switch.",
    date: "2026-03-15",
    readTime: "8 min read",
    category: "Comparison",
  },
  {
    slug: "premier-league-streaming-guide",
    title: "Watch Every Premier League Match — IPTV Providers Streaming Guide",
    excerpt:
      "Every Premier League match, plus Championship, La Liga, Serie A and more — all in stunning HD and 4K through the top UK IPTV providers.",
    date: "2026-03-10",
    readTime: "5 min read",
    category: "Sports",
  },
] as const;
