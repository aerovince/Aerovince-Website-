// lib/projects.ts
// Single source of truth for all portfolio projects.
// Used by: WorkGallery (home), ProjectsGallery (portfolio page), [id] detail page.

// export type ProjectStat = { value: string; label: string };
// export type ProjectService = string;

// export type Project = {
//   id: string;
//   title: string;
//   category: string;
//   location: string;
//   tagline: string; // short punch line shown on cards
//   description: string; // 1–2 sentence card description
//   image: string; // card / hero thumbnail
//   tags: string[]; // for filter chips
//   result: string; // e.g. "650+ Reviews"
//   growth: string; // e.g. "500%"
//   featured: boolean;
//   website?: string;

//   // ── Detail page fields ──────────────────────────────────────────────────
//   heroImage?: string; // full-width banner (falls back to `image`)
//   clientLogo?: string; // optional small logo in sidebar
//   overview: string; // 2–3 sentence "about the client"
//   challenge: string; // problem statement paragraph
//   solution: string; // what MarkTale did
//   outcome: string; // narrative outcome paragraph
//   stats: ProjectStat[]; // 3 big numbers shown in the outcome block
//   services: ProjectService[]; // tag pills in sidebar
//   technologies?: string[]; // tech stack badges
//   gallery?: string[]; // screenshot / poster paths
//   testimonial?: { quote: string; author: string; role: string };
//   year?: string;
//   client?: string; // formal client name if different from title
// };

// export const projects: Project[] = [
//   // ── 1. MentorLeap ─────────────────────────────────────────────────────
//   {
//     id: "mentorleap",
//     title: "MentorLeap",
//     category: "EdTech",
//     location: "India",
//     tagline: "10,000+ professionals transformed",
//     description:
//       "Transforming professionals into confident communicators and strategic leaders through AI-powered mentorship and structured learning programs.",
//     image: "/Feature_logos/mentorleep.png",
//     tags: ["EdTech", "Featured"],
//     result: "10k+ Professionals",
//     growth: "400%",
//     featured: true,
//     website: "https://mentorleap.in",
//     year: "2023",
//     client: "MentorLeap Pvt. Ltd.",

//     overview:
//       "MentorLeap is an AI-assisted professional development platform helping working professionals sharpen communication, leadership, and strategic thinking skills through structured cohort-based programs.",

//     challenge:
//       "Despite a strong curriculum, MentorLeap had near-zero organic visibility. The website lacked a clear value proposition, conversion paths were broken, and the brand had no authority in a crowded EdTech space. Paid CAC was unsustainably high.",

//     solution:
//       "MarkTale rebuilt the brand narrative from scratch — repositioning MentorLeap as the fastest path from competent to confident. We redesigned the website with clear conversion funnels, built an SEO content engine around high-intent queries, and launched a cohort marketing system that turned alumni into referral machines.",

//     outcome:
//       "Within 18 months MentorLeap crossed 10,000 active professionals, reduced paid CAC by 60%, and achieved a 4.8★ average rating across platforms.",

//     stats: [
//       { value: "10k+", label: "Professionals Trained" },
//       { value: "400%", label: "Year-on-Year Growth" },
//       { value: "60%", label: "CAC Reduction" },
//     ],
//     services: [
//       "Brand Strategy",
//       "Website Design",
//       "SEO",
//       "Growth Marketing",
//       "Content",
//     ],
//     technologies: ["Next.js", "Supabase", "Google Analytics", "Mailchimp"],
//   },

//   // ── 2. Delhi059 ────────────────────────────────────────────────────────
//   {
//     id: "delhi059",
//     title: "Delhi059",
//     category: "Restaurant",
//     location: "Canada",
//     tagline: "Canada's culinary icon — built without a rupee in ad spend",
//     description:
//       "From zero to Canada's culinary icon with 650+ Google reviews — all without spending a rupee on performance marketing.",
//     image: "/delhi059-logo.jpg",
//     tags: ["Hospitality", "Featured"],
//     result: "650+ Reviews",
//     growth: "500%",
//     featured: true,
//     website: "https://delhi059.ca",
//     year: "2022",
//     client: "Delhi059 Restaurant",

//     overview:
//       "Delhi059 is a North Indian restaurant in Canada serving an authentic street-food experience to the Indian diaspora and adventurous locals. It launched with no reputation, no reviews, and no digital presence.",

//     challenge:
//       "New restaurant in a saturated market with zero online footprint. The owner had no marketing budget for paid ads and needed organic traction fast. Competing restaurants had years of Google reviews and social proof.",

//     solution:
//       "MarkTale engineered a hyper-local organic launch — Google Business optimisation, UGC-first Instagram strategy, community seeding with local Indian associations, and a structured review generation flow baked into the dining experience itself.",

//     outcome:
//       "Delhi059 crossed 650 Google reviews with a 4.7★ average, ranked #1 on Google Maps for 'Indian restaurant' in their city, and consistently operates at full capacity on weekends — all with zero ad spend.",

//     stats: [
//       { value: "650+", label: "Google Reviews" },
//       { value: "4.7★", label: "Average Rating" },
//       { value: "#1", label: "Local Map Ranking" },
//     ],
//     services: [
//       "Local SEO",
//       "Google Business",
//       "Social Media",
//       "Community Marketing",
//       "Photography",
//     ],
//     technologies: ["Google Business Profile", "Instagram", "Canva Pro"],
//     testimonial: {
//       quote:
//         "MarkTale didn't just market our restaurant — they made us the go-to place for the entire Indian community in our city.",
//       author: "Owner",
//       role: "Delhi059, Canada",
//     },
//   },

//   // ── 3. Local Ride ──────────────────────────────────────────────────────
//   {
//     id: "local-ride",
//     title: "Local Ride",
//     category: "Transportation",
//     location: "Canada",
//     tagline: "100,000+ rides. Zero commission for drivers.",
//     description:
//       "Engineered from the ground up into a thriving Canadian rideshare powerhouse. Full-stack iOS/Android apps with zero commission for drivers.",
//     image: "/Feature_logos/localride.jpg",
//     tags: ["App Development", "Featured"],
//     result: "100k+ Rides",
//     growth: "300%",
//     featured: true,
//     website: "https://localride.ca",
//     year: "2022",
//     client: "Local Ride Inc.",

//     overview:
//       "Local Ride is a Canadian rideshare challenger positioning itself as the driver-first alternative to Uber and Lyft — with zero commission, meaning drivers keep 100% of every fare.",

//     challenge:
//       "Building a two-sided marketplace from scratch in a market dominated by global giants. The app needed to attract drivers before it had riders, and riders before it had enough drivers — the classic cold-start problem, compounded by limited launch capital.",

//     solution:
//       "MarkTale led product strategy, brand identity, and go-to-market. We designed and shipped native iOS and Android apps, built a driver acquisition funnel targeting ride-share drivers already active on competitor platforms, and launched a hyperlocal city-by-city rider campaign.",

//     outcome:
//       "Local Ride completed 100,000+ rides in its first year of operation and established a loyal driver base of 2,000+ in three Canadian cities.",

//     stats: [
//       { value: "100k+", label: "Rides Completed" },
//       { value: "2,000+", label: "Active Drivers" },
//       { value: "3", label: "Cities Launched" },
//     ],
//     services: [
//       "Product Strategy",
//       "App Development",
//       "Brand Identity",
//       "Growth Marketing",
//       "Driver Acquisition",
//     ],
//     technologies: [
//       "React Native",
//       "Node.js",
//       "Firebase",
//       "Stripe",
//       "Google Maps API",
//     ],
//   },

//   // ── 4. BG Foods ────────────────────────────────────────────────────────
//   {
//     id: "bg-foods",
//     title: "BG Foods",
//     category: "E-commerce",
//     location: "Canada / USA",
//     tagline: "50,000+ orders. Built from scratch.",
//     description:
//       "Building a thriving food e-commerce platform across North America — from brand identity to fulfilment strategy.",
//     image: "/Feature_logos/bgfoods.jpeg",
//     tags: ["E-commerce", "Featured"],
//     result: "50k+ Orders",
//     growth: "1000%",
//     featured: true,
//     website: "https://bgfoods.ca",
//     year: "2023",
//     client: "BG Foods",

//     overview:
//       "BG Foods is a specialty South Asian food brand selling packaged goods, spices, and ready-to-cook products across Canada and the United States through direct-to-consumer e-commerce and retail partnerships.",

//     challenge:
//       "Zero brand equity in a grocery category dominated by established names. The founder needed to go from a home-kitchen idea to a multi-country operation — with no digital infrastructure, no supply chain, and no audience.",

//     solution:
//       "MarkTale built everything: brand identity, Shopify store, product photography, Amazon and Flipkart listings, a DTC email growth engine, and a social proof strategy using food influencers in the South Asian diaspora. Supply chain and fulfilment consulting was layered in as the operation scaled.",

//     outcome:
//       "BG Foods hit 50,000 orders within 18 months of launch, expanded from one product line to seven, and entered retail distribution in 40+ grocery stores.",

//     stats: [
//       { value: "50k+", label: "Orders Fulfilled" },
//       { value: "40+", label: "Retail Stores" },
//       { value: "1000%", label: "Revenue Growth" },
//     ],
//     services: [
//       "Brand Identity",
//       "E-commerce Build",
//       "Product Photography",
//       "Amazon Listing",
//       "Influencer Marketing",
//     ],
//     technologies: ["Shopify", "Klaviyo", "Amazon Seller Central", "Meta Ads"],
//   },

//   // ── 5. Dee Cee Accessories ─────────────────────────────────────────────
//   {
//     id: "dee-cee-accessories",
//     title: "Dee Cee Accessories",
//     category: "Jewellery",
//     location: "India",
//     tagline: "10× sales with zero prior digital presence",
//     description:
//       "Digital setup from scratch: product photography, SEO-based listings on Amazon and Flipkart, and full social media accounts.",
//     image: "/Feature_logos/deecee.jpg",
//     tags: ["E-commerce"],
//     result: "10× Sales",
//     growth: "900%",
//     featured: false,
//     year: "2022",
//     client: "Dee Cee Accessories",

//     overview:
//       "Dee Cee Accessories is a jewellery brand based in India selling fashion accessories for women — primarily earrings, necklaces, and bangles — through online marketplaces.",

//     challenge:
//       "The brand was entirely offline and invisible online. Product listings were non-existent. The founder had quality products but no photography, no SEO strategy, and no idea how to navigate marketplace algorithms.",

//     solution:
//       "MarkTale conducted a full digital setup: professional product photography sessions, keyword-optimised Amazon and Flipkart listings, pricing strategy based on competitor analysis, and Instagram/Facebook accounts with content calendars.",

//     outcome:
//       "Dee Cee Accessories achieved 10× its pre-digital sales volume within 12 months and now generates consistent monthly revenue from marketplace channels.",

//     stats: [
//       { value: "10×", label: "Sales Growth" },
//       { value: "900%", label: "Revenue Increase" },
//       { value: "2", label: "Marketplaces Launched" },
//     ],
//     services: [
//       "Product Photography",
//       "Amazon Listing",
//       "Flipkart Listing",
//       "Social Media Setup",
//       "SEO",
//     ],
//   },

//   // ── 6. CabTale ─────────────────────────────────────────────────────────
//   {
//     id: "cabtale",
//     title: "CabTale",
//     category: "Transportation",
//     location: "India",
//     tagline: "1M+ downloads. Urban mobility redefined.",
//     description:
//       "Building the future of urban mobility with seamless booking experiences and real-time tracking solutions.",
//     image: "/Feature_logos/cabtale.jpg",
//     tags: ["Mobility", "App Development"],
//     result: "1M+ Downloads",
//     growth: "800%",
//     featured: false,
//     year: "2023",
//     client: "CabTale",

//     overview:
//       "CabTale is an Indian ride-booking platform targeting tier-2 and tier-3 cities underserved by Ola and Uber — markets with high demand and low smartphone penetration where a lighter app experience wins.",

//     challenge:
//       "Competing in a market where the incumbents had already captured top-tier cities. CabTale needed a differentiated product that could work on low-end Android devices with poor connectivity, and a go-to-market strategy targeting cities the big players ignored.",

//     solution:
//       "MarkTale developed a lightweight, offline-first app architecture and built a regional influencer and auto-driver community strategy that seeded adoption city by city. Localised marketing in Hindi and regional languages drove organic installs.",

//     outcome:
//       "CabTale surpassed 1 million downloads across 12 cities, with a DAU/MAU ratio significantly above category average.",

//     stats: [
//       { value: "1M+", label: "App Downloads" },
//       { value: "12", label: "Cities Active" },
//       { value: "800%", label: "Growth in 18mo" },
//     ],
//     services: [
//       "App Strategy",
//       "Product Design",
//       "Regional Marketing",
//       "Driver Community",
//       "ASO",
//     ],
//     technologies: ["Flutter", "Node.js", "Firebase", "Google Maps", "Razorpay"],
//   },

//   // ── 7. Last Mile Care ──────────────────────────────────────────────────
//   {
//     id: "last-mile-care",
//     title: "Last Mile Care",
//     category: "NGO",
//     location: "India",
//     tagline: "50,000+ lives reached through digital outreach",
//     description:
//       "Supporting communities with compassionate care and digital strategies that amplify their mission.",
//     image: "/Feature_logos/lastmilecare.jpeg",
//     tags: ["Non-profit"],
//     result: "50k+ Reached",
//     growth: "200%",
//     featured: false,
//     year: "2022",
//     client: "Last Mile Care Foundation",

//     overview:
//       "Last Mile Care is an Indian NGO providing healthcare access, hygiene kits, and nutritional support to rural and underserved urban communities — reaching populations where government and private infrastructure doesn't reach.",

//     challenge:
//       "The organisation was doing vital work with almost no online presence. Donations were entirely offline and word-of-mouth. They had no website, no donation infrastructure, and no way to tell their story to potential corporate CSR partners.",

//     solution:
//       "MarkTale built a full digital presence: website with integrated online donation flow, impact storytelling content, social media that humanised beneficiaries with dignity, and a corporate CSR pitch deck for B2B fundraising.",

//     outcome:
//       "Last Mile Care reached 50,000+ individuals through digitally-amplified drives, tripled online donations, and secured two corporate CSR partnerships within six months of launch.",

//     stats: [
//       { value: "50k+", label: "People Reached" },
//       { value: "3×", label: "Online Donations" },
//       { value: "2", label: "CSR Partnerships" },
//     ],
//     services: [
//       "Website Build",
//       "Impact Storytelling",
//       "Social Media",
//       "CSR Pitch Deck",
//       "Donation Integration",
//     ],
//   },
// ];

// lib/projects.ts
// Single source of truth for all portfolio projects.
// Used by: WorkGallery (home), ProjectsGallery (portfolio page), [id] detail page.

export type ProjectStat = { value: string; label: string };
export type ProjectService = string;

export type Project = {
  id: string;
  title: string;
  category: string;
  location: string;
  tagline: string; // short punch line shown on cards
  description: string; // 1–2 sentence card description
  image: string; // card / hero thumbnail
  tags: string[]; // for filter chips
  result: string; // e.g. "650+ Reviews"
  growth: string; // e.g. "500%"
  featured: boolean;
  website?: string;

  // ── Detail page fields ──────────────────────────────────────────────────
  heroImage?: string; // full-width banner (falls back to `image`)
  clientLogo?: string; // optional small logo in sidebar
  overview: string; // 2–3 sentence "about the client"
  challenge: string; // problem statement paragraph
  solution: string; // what MarkTale did
  outcome: string; // narrative outcome paragraph
  stats: ProjectStat[]; // 3 big numbers shown in the outcome block
  services: ProjectService[]; // tag pills in sidebar
  technologies?: string[]; // tech stack badges
  gallery?: string[]; // screenshot / poster paths
  testimonial?: { quote: string; author: string; role: string };
  year?: string;
  client?: string; // formal client name if different from title
};

export const projects: Project[] = [
  // ── 1. MentorLeap ─────────────────────────────────────────────────────
  {
    id: "mentorleap",
    title: "MentorLeap",
    category: "EdTech",
    location: "India",
    tagline: "10,000+ professionals transformed",
    description:
      "Transforming professionals into confident communicators and strategic leaders through AI-powered mentorship and structured learning programs.",
    image: "/Feature_logos/mentorleep.png",
    tags: ["EdTech", "Featured"],
    result: "10k+ Professionals",
    growth: "400%",
    featured: true,
    website: "https://www.mentorleap.co/",
    year: "2023",
    client: "MentorLeap Pvt. Ltd.",

    overview:
      "MentorLeap is an AI-assisted professional development platform helping working professionals sharpen communication, leadership, and strategic thinking skills through structured cohort-based programs.",

    challenge:
      "Despite a strong curriculum, MentorLeap had near-zero organic visibility. The website lacked a clear value proposition, conversion paths were broken, and the brand had no authority in a crowded EdTech space. Paid CAC was unsustainably high.",

    solution:
      "MarkTale rebuilt the brand narrative from scratch — repositioning MentorLeap as the fastest path from competent to confident. We redesigned the website with clear conversion funnels, built an SEO content engine around high-intent queries, and launched a cohort marketing system that turned alumni into referral machines.",

    outcome:
      "Within 18 months MentorLeap crossed 10,000 active professionals, reduced paid CAC by 60%, and achieved a 4.8★ average rating across platforms.",

    stats: [
      { value: "10k+", label: "Professionals Trained" },
      { value: "400%", label: "Year-on-Year Growth" },
      { value: "60%", label: "CAC Reduction" },
    ],
    services: [
      "Brand Strategy",
      "Website Design",
      "SEO",
      "Growth Marketing",
      "Content",
    ],
    technologies: ["Next.js", "Supabase", "Google Analytics", "Mailchimp"],
  },

  // ── 2. Delhi059 ────────────────────────────────────────────────────────
  {
    id: "delhi059",
    title: "Delhi059",
    category: "Restaurant",
    location: "Canada",
    tagline: "Canada's culinary icon — built without a rupee in ad spend",
    description:
      "From zero to Canada's culinary icon with 650+ Google reviews — all without spending a rupee on performance marketing.",
    image: "/delhi059-logo.jpg",
    tags: ["Hospitality", "Featured"],
    result: "650+ Reviews",
    growth: "500%",
    featured: true,
    website: "https://delhi059.ca/",
    year: "2022",
    client: "Delhi059 Restaurant",

    overview:
      "Delhi059 is a North Indian restaurant in Canada serving an authentic street-food experience to the Indian diaspora and adventurous locals. It launched with no reputation, no reviews, and no digital presence.",

    challenge:
      "New restaurant in a saturated market with zero online footprint. The owner had no marketing budget for paid ads and needed organic traction fast. Competing restaurants had years of Google reviews and social proof.",

    solution:
      "MarkTale engineered a hyper-local organic launch — Google Business optimisation, UGC-first Instagram strategy, community seeding with local Indian associations, and a structured review generation flow baked into the dining experience itself.",

    outcome:
      "Delhi059 crossed 650 Google reviews with a 4.7★ average, ranked #1 on Google Maps for 'Indian restaurant' in their city, and consistently operates at full capacity on weekends — all with zero ad spend.",

    stats: [
      { value: "650+", label: "Google Reviews" },
      { value: "4.7★", label: "Average Rating" },
      { value: "#1", label: "Local Map Ranking" },
    ],
    services: [
      "Local SEO",
      "Google Business",
      "Social Media",
      "Community Marketing",
      "Photography",
    ],
    technologies: ["Google Business Profile", "Instagram", "Canva Pro"],
    testimonial: {
      quote:
        "MarkTale didn't just market our restaurant — they made us the go-to place for the entire Indian community in our city.",
      author: "Owner",
      role: "Delhi059, Canada",
    },
  },

  // ── 3. Local Ride ──────────────────────────────────────────────────────
  {
    id: "local-ride",
    title: "Local Ride",
    category: "Transportation",
    location: "Canada",
    tagline: "100,000+ rides. Zero commission for drivers.",
    description:
      "Engineered from the ground up into a thriving Canadian rideshare powerhouse. Full-stack iOS/Android apps with zero commission for drivers.",
    image: "/Feature_logos/localride.jpg",
    tags: ["App Development", "Featured"],
    result: "100k+ Rides",
    growth: "300%",
    featured: true,
    year: "2022",
    client: "Local Ride Inc.",

    overview:
      "Local Ride is a Canadian rideshare challenger positioning itself as the driver-first alternative to Uber and Lyft — with zero commission, meaning drivers keep 100% of every fare.",

    challenge:
      "Building a two-sided marketplace from scratch in a market dominated by global giants. The app needed to attract drivers before it had riders, and riders before it had enough drivers — the classic cold-start problem, compounded by limited launch capital.",

    solution:
      "MarkTale led product strategy, brand identity, and go-to-market. We designed and shipped native iOS and Android apps, built a driver acquisition funnel targeting ride-share drivers already active on competitor platforms, and launched a hyperlocal city-by-city rider campaign.",

    outcome:
      "Local Ride completed 100,000+ rides in its first year of operation and established a loyal driver base of 2,000+ in three Canadian cities.",

    stats: [
      { value: "100k+", label: "Rides Completed" },
      { value: "2,000+", label: "Active Drivers" },
      { value: "3", label: "Cities Launched" },
    ],
    services: [
      "Product Strategy",
      "App Development",
      "Brand Identity",
      "Growth Marketing",
      "Driver Acquisition",
    ],
    technologies: [
      "React Native",
      "Node.js",
      "Firebase",
      "Stripe",
      "Google Maps API",
    ],
  },

  // ── 4. BG Foods ────────────────────────────────────────────────────────
  {
    id: "bg-foods",
    title: "BG Foods",
    category: "E-commerce",
    location: "Canada / USA",
    tagline: "50,000+ orders. Built from scratch.",
    description:
      "Building a thriving food e-commerce platform across North America — from brand identity to fulfilment strategy.",
    image: "/Feature_logos/bgfoods.jpeg",
    tags: ["E-commerce", "Featured"],
    result: "50k+ Orders",
    growth: "1000%",
    featured: true,
    website: "https://bgfoods.com/",
    year: "2023",
    client: "BG Foods",

    overview:
      "BG Foods is a specialty South Asian food brand selling packaged goods, spices, and ready-to-cook products across Canada and the United States through direct-to-consumer e-commerce and retail partnerships.",

    challenge:
      "Zero brand equity in a grocery category dominated by established names. The founder needed to go from a home-kitchen idea to a multi-country operation — with no digital infrastructure, no supply chain, and no audience.",

    solution:
      "MarkTale built everything: brand identity, Shopify store, product photography, Amazon and Flipkart listings, a DTC email growth engine, and a social proof strategy using food influencers in the South Asian diaspora. Supply chain and fulfilment consulting was layered in as the operation scaled.",

    outcome:
      "BG Foods hit 50,000 orders within 18 months of launch, expanded from one product line to seven, and entered retail distribution in 40+ grocery stores.",

    stats: [
      { value: "50k+", label: "Orders Fulfilled" },
      { value: "40+", label: "Retail Stores" },
      { value: "1000%", label: "Revenue Growth" },
    ],
    services: [
      "Brand Identity",
      "E-commerce Build",
      "Product Photography",
      "Amazon Listing",
      "Influencer Marketing",
    ],
    technologies: ["Shopify", "Klaviyo", "Amazon Seller Central", "Meta Ads"],
  },

  // ── 5. Dee Cee Accessories ─────────────────────────────────────────────
  {
    id: "dee-cee-accessories",
    title: "Dee Cee Accessories",
    category: "Jewellery",
    location: "India",
    tagline: "10× sales with zero prior digital presence",
    description:
      "Digital setup from scratch: product photography, SEO-based listings on Amazon and Flipkart, and full social media accounts.",
    image: "/Feature_logos/deecee.jpg",
    tags: ["E-commerce"],
    result: "10× Sales",
    growth: "900%",
    featured: false,
    year: "2022",
    client: "Dee Cee Accessories",

    overview:
      "Dee Cee Accessories is a jewellery brand based in India selling fashion accessories for women — primarily earrings, necklaces, and bangles — through online marketplaces.",

    challenge:
      "The brand was entirely offline and invisible online. Product listings were non-existent. The founder had quality products but no photography, no SEO strategy, and no idea how to navigate marketplace algorithms.",

    solution:
      "MarkTale conducted a full digital setup: professional product photography sessions, keyword-optimised Amazon and Flipkart listings, pricing strategy based on competitor analysis, and Instagram/Facebook accounts with content calendars.",

    outcome:
      "Dee Cee Accessories achieved 10× its pre-digital sales volume within 12 months and now generates consistent monthly revenue from marketplace channels.",

    stats: [
      { value: "10×", label: "Sales Growth" },
      { value: "900%", label: "Revenue Increase" },
      { value: "2", label: "Marketplaces Launched" },
    ],
    services: [
      "Product Photography",
      "Amazon Listing",
      "Flipkart Listing",
      "Social Media Setup",
      "SEO",
    ],
  },

  // ── 6. CabTale ─────────────────────────────────────────────────────────
  {
    id: "cabtale",
    title: "CabTale",
    category: "Transportation",
    location: "India",
    tagline: "1M+ downloads. Urban mobility redefined.",
    description:
      "Building the future of urban mobility with seamless booking experiences and real-time tracking solutions.",
    image: "/Feature_logos/cabtale.jpg",
    tags: ["Mobility", "App Development"],
    result: "1M+ Downloads",
    growth: "800%",
    featured: false,
    website: "https://www.cabtale.com/",
    year: "2023",
    client: "CabTale",

    overview:
      "CabTale is an Indian ride-booking platform targeting tier-2 and tier-3 cities underserved by Ola and Uber — markets with high demand and low smartphone penetration where a lighter app experience wins.",

    challenge:
      "Competing in a market where the incumbents had already captured top-tier cities. CabTale needed a differentiated product that could work on low-end Android devices with poor connectivity, and a go-to-market strategy targeting cities the big players ignored.",

    solution:
      "MarkTale developed a lightweight, offline-first app architecture and built a regional influencer and auto-driver community strategy that seeded adoption city by city. Localised marketing in Hindi and regional languages drove organic installs.",

    outcome:
      "CabTale surpassed 1 million downloads across 12 cities, with a DAU/MAU ratio significantly above category average.",

    stats: [
      { value: "1M+", label: "App Downloads" },
      { value: "12", label: "Cities Active" },
      { value: "800%", label: "Growth in 18mo" },
    ],
    services: [
      "App Strategy",
      "Product Design",
      "Regional Marketing",
      "Driver Community",
      "ASO",
    ],
    technologies: ["Flutter", "Node.js", "Firebase", "Google Maps", "Razorpay"],
  },

  // ── 7. Last Mile Care ──────────────────────────────────────────────────
  {
    id: "last-mile-care",
    title: "Last Mile Care",
    category: "NGO",
    location: "India",
    tagline: "50,000+ lives reached through digital outreach",
    description:
      "Supporting communities with compassionate care and digital strategies that amplify their mission.",
    image: "/Feature_logos/lastmilecare.jpeg",
    tags: ["Non-profit"],
    result: "50k+ Reached",
    growth: "200%",
    featured: false,
    website: "https://lastmilecare.in/",
    year: "2022",
    client: "Last Mile Care Foundation",

    overview:
      "Last Mile Care is an Indian NGO providing healthcare access, hygiene kits, and nutritional support to rural and underserved urban communities — reaching populations where government and private infrastructure doesn't reach.",

    challenge:
      "The organisation was doing vital work with almost no online presence. Donations were entirely offline and word-of-mouth. They had no website, no donation infrastructure, and no way to tell their story to potential corporate CSR partners.",

    solution:
      "MarkTale built a full digital presence: website with integrated online donation flow, impact storytelling content, social media that humanised beneficiaries with dignity, and a corporate CSR pitch deck for B2B fundraising.",

    outcome:
      "Last Mile Care reached 50,000+ individuals through digitally-amplified drives, tripled online donations, and secured two corporate CSR partnerships within six months of launch.",

    stats: [
      { value: "50k+", label: "People Reached" },
      { value: "3×", label: "Online Donations" },
      { value: "2", label: "CSR Partnerships" },
    ],
    services: [
      "Website Build",
      "Impact Storytelling",
      "Social Media",
      "CSR Pitch Deck",
      "Donation Integration",
    ],
  },
];
