export type ProjectStat = { value: string; label: string };

export type ProjectTestimonial = {
  quote: string;
  author: string;
  role: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  location: string;
  tagline: string;
  description: string;
  image: string;
  heroImage?: string; // optional wider banner image; falls back to `image`
  gallery?: string[]; // optional screenshots for the detail page
  tags: string[];
  result: string;
  growth: string;
  featured: boolean;
  website?: string;
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
  stats: ProjectStat[];
  services: string[];
  technologies?: string[];
  year?: string;
  client?: string;
  testimonial?: ProjectTestimonial;
};

// NOTE: TEST DATA — fictional startup names, logos, and websites for
// local/dev testing only. Swap back to real client data before deploying.

export const projects: Project[] = [
  {
    id: "swiftcab",
    title: "SwiftCab",
    category: "Mobility",
    location: "India",
    tagline: "Full-stack ride-hailing, built from the ground up",
    description:
      "A cab-hailing platform with real-time booking, driver onboarding, and a cinematic 3D-scroll marketing site.",
    image: "/test-logos/swiftcab-logo.png",
    tags: ["App Development", "Featured"],
    result: "14+ Components Shipped",
    growth: "New Launch",
    featured: true,
    year: "2025",
    client: "SwiftCab",
    website: "https://www.swiftcab-example.com/",
    overview:
      "SwiftCab is a ride-hailing service built to compete with established players through a faster, lighter booking experience and a driver-first onboarding flow.",
    challenge:
      "Launching a two-sided marketplace product needs both a technically sound booking engine and a marketing site that builds instant trust with riders and drivers alike.",
    solution:
      "Built the full public marketing site — hero with a hand-crafted animated SVG taxi, a cinematic Three.js scroll experience, a three-step driver registration flow with Google Sheets integration, and a Firestore-backed email signup system.",
    outcome:
      "Shipped a complete, production-ready component library covering booking, driver acquisition, testimonials, city coverage, and safety messaging — ready for launch marketing.",
    stats: [
      { value: "14+", label: "Marketing Components" },
      { value: "3D", label: "Scroll Experience" },
      { value: "1", label: "Driver Onboarding Flow" },
    ],
    services: ["Product Design", "App Development", "Brand Identity", "Growth Marketing"],
    technologies: ["Next.js", "Three.js", "Firebase", "Framer Motion"],
  },
  {
    id: "growthly",
    title: "Growthly",
    category: "Marketing Agency",
    location: "India",
    tagline: "A full-funnel digital marketing agency site",
    description:
      "A polished, conversion-focused agency website with a lead-capture engine and detailed service pages.",
    image: "/test-logos/growthly-logo.png",
    tags: ["Web Design", "Featured"],
    result: "Full Funnel Built",
    growth: "New Launch",
    featured: true,
    year: "2025",
    client: "Growthly",
    website: "https://www.growthly-example.com/",
    overview:
      "Growthly is a digital marketing agency offering SEO, paid ads, and growth services, positioned around a clean, trust-building light-theme design system.",
    challenge:
      "Agency sites live or die on their ability to convert visitors into booked calls — that means fast-loading service pages, a frictionless enquiry flow, and design that signals credibility immediately.",
    solution:
      "Designed a full multi-section homepage with an animated hero dashboard, service detail pages, a two-tier popup system (goal-capture + free growth guide with automated PDF delivery), and WhatsApp-based pricing enquiries instead of hard price walls.",
    outcome:
      "Delivered a complete, production-ready site with automated lead capture — background email delivery, Firebase logging, and a service page architecture built to scale to new offerings.",
    stats: [
      { value: "10+", label: "Homepage Sections" },
      { value: "2", label: "Lead Capture Popups" },
      { value: "Auto", label: "Email + PDF Delivery" },
    ],
    services: ["Web Design", "Lead Generation", "Brand Identity", "SEO"],
    technologies: ["Next.js", "Firebase Admin", "Nodemailer", "Framer Motion"],
  },
  {
    id: "brandforge",
    title: "BrandForge",
    category: "Marketing Agency",
    location: "India",
    tagline: "Case studies, reels, and a fast-converting lead engine",
    description:
      "A cinematic portfolio and lead-generation site showcasing real client work across video, design, and growth.",
    image: "/test-logos/brandforge-logo.png",
    tags: ["Web Design", "Featured"],
    result: "Sub-200ms Lead Capture",
    growth: "New Launch",
    featured: true,
    year: "2026",
    client: "BrandForge",
    website: "https://www.brandforge-example.com/",
    overview:
      "BrandForge is a marketing agency's own portfolio and lead-generation site, built to showcase past client results — poster design, reels, and campaign case studies — while converting visitors fast.",
    challenge:
      "A portfolio site needs to feel premium and load instantly, while the admin side needs real visibility into every enquiry without adding engineering overhead.",
    solution:
      "Built a `/grow` lead magnet page using a fire-and-forget email + Firestore logging pattern for near-instant perceived response time, an exit-intent growth popup, a full admin dashboard for enquiry tracking, and a cinematic portfolio page with a poster gallery and auto-playing reels showcase.",
    outcome:
      "Delivered a fast, cinematic client-facing site paired with an internal admin dashboard for enquiry management — built for the agency's own growth, not just client work.",
    stats: [
      { value: "~200ms", label: "Perceived Lead Response" },
      { value: "9+", label: "Featured Case Studies" },
      { value: "1", label: "Admin Dashboard" },
    ],
    services: ["Web Design", "Video Production", "Growth Marketing", "Admin Tooling"],
    technologies: ["Next.js", "Firestore", "Cloudinary", "Framer Motion"],
  },
  {
    id: "eduspherer",
    title: "EduSphere",
    category: "EdTech",
    location: "India",
    tagline: "A full school management platform",
    description:
      "An end-to-end school platform covering exams, students, teachers, homework, and attendance.",
    image: "/test-logos/edusphere-logo.png",
    tags: ["Education", "App Development", "Featured"],
    result: "10+ Modules Shipped",
    growth: "Ongoing Build",
    featured: true,
    year: "2025",
    client: "EduSphere Academy",
    website: "https://www.edusphere-example.com/",
    overview:
      "EduSphere is a school management platform serving both administrators and students, spanning exams, fees, attendance, and communication in one system.",
    challenge:
      "Schools need a single platform that handles everything from online exams with autosave and anti-cheating safeguards to fee tracking and parent-facing announcements — without the complexity becoming unmanageable for non-technical staff.",
    solution:
      "Built a full Online Exam Portal with countdown timers, autosave, and server-side grading; student and teacher management with auto-generated ID cards; a notes and homework module with secure PDF uploads; webinar management with automated notifications; and a unified auth system across the whole platform.",
    outcome:
      "Delivered a production school platform now handling exams, student records, fees, homework, and communication end-to-end for both admin staff and students.",
    stats: [
      { value: "10+", label: "Platform Modules" },
      { value: "2", label: "User-Facing Portals" },
      { value: "Auto", label: "Exam Grading & Notifications" },
    ],
    services: ["Platform Architecture", "App Development", "UI/UX Design"],
    technologies: ["Next.js", "Prisma", "Supabase", "Resend"],
  },
  {
    id: "spice-route-kitchen",
    title: "Spice Route Kitchen",
    category: "Food & Delivery",
    location: "Dubai, UAE",
    tagline: "Homemade Indian food, delivered",
    description:
      "A warm, conversion-focused site for a homemade Indian food delivery brand in Dubai.",
    image: "/test-logos/spice-route-logo.png",
    tags: ["Web Design", "Hospitality"],
    result: "Full Site Launch",
    growth: "New Launch",
    featured: false,
    year: "2024",
    client: "Spice Route Kitchen",
    website: "https://www.spicerouteexample.com/",
    overview:
      "Spice Route Kitchen delivers homemade Indian meals across Dubai, built around a personal, founder-led brand story rather than a faceless delivery app.",
    challenge:
      "Standing out in a crowded food delivery market meant leading with authenticity and a real founder story, not generic delivery-app UI.",
    solution:
      "Designed a warm, red-orange themed site with a founder section featuring a custom illustration, veg/non-veg meal plan toggles with transparent pricing, and a floating WhatsApp order button for instant ordering.",
    outcome:
      "Launched a complete, mobile-first site (down to 360px) giving the brand a distinct, personal identity in the Dubai food delivery market.",
    stats: [
      { value: "100%", label: "Mobile Optimized" },
      { value: "2", label: "Meal Plan Tiers" },
      { value: "1-Click", label: "WhatsApp Ordering" },
    ],
    services: ["Web Design", "Brand Identity", "UI/UX Design"],
    technologies: ["Next.js", "Framer Motion"],
  },
];