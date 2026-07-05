// // app/(main)/page.tsx

// import HeroSection from "../components/HeroSection";
// import PhilosophySection from "../components/PhilosophySection";
// import ServicesSection from "../components/ServicesSection";
// import AboutSection from "../components/AboutSection";
// import WorkGallery from "../components/WorkGallery";
// import Testimonials from "../components/Testimonials";
// import StartupFeature from "../components/StartupFeature";
// import AwardsGrid from "../components/awards/AwardsGrid";
// import TeamCTA from "../components/TeamCTA";
// import GlobalIndustries from "../components/GlobalIndustries";
// import CertificationsSection from "../components/CertificationsSection";
// import ReviewsSection from "../components/ReviewsSection";
// import WhatsAppMascot from "../components/WhatsAppMascot";
// import WhatsAppFloat from "../components/WhatsAppFloat";
// import PricingSection from "../components/PricingSection";
// import HomeContactSection from "../components/HomeContactSection";
// import CreativeShowcase from "../components/CreativeShowcase";

// export default async function Home() {

//   return (
//     <main className="min-h-screen bg-white">
//       <HeroSection />
//       <PhilosophySection />
//       <WorkGallery />
//       <StartupFeature />
//       <ServicesSection />
//       <PricingSection />
//       <GlobalIndustries />
//       <CreativeShowcase />
//       <Testimonials />
//       <AwardsGrid />
//       <TeamCTA />
//       <AboutSection />
//       <CertificationsSection />
//       <ReviewsSection />
//       <HomeContactSection />
//       {/* Floating WhatsApp Components */}
//       <WhatsAppMascot />
//       <WhatsAppFloat />
//     </main>
//   );
// }
















// app/(main)/page.tsx
//
// Restructured per the conversion-audit: trust → services → proof → process
// → why-us → testimonials → faq → one final CTA. Company-info sections
// (awards, certifications, team, full company story) have been moved off
// the homepage — link to them from the footer / a dedicated /about page
// instead of making visitors scroll past them before they can decide.

import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import WorkGallery from "../components/WorkGallery";
import CreativeShowcase from "../components/CreativeShowcase";
import MarketingProcess from "../components/Marketingprocess";
import WhyChooseAerovince from "../components/Whychooseaerovince";
import Testimonials from "../components/Testimonials";
import FAQSection from "../components/Faqsection";
import HomeContactSection from "../components/HomeContactSection";


export default async function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero — animated headline, rotating business types, dual CTA */}
      <HeroSection />

      {/* 2. Trusted By + Results
          NOTE: the stats row + logo marquee already live inside
          HeroSection (AnimatedStat + LogoMarquee). That *is* your
          "Trusted By" section — no separate component needed. If you
          want it more prominent, pull those two blocks out of Hero into
          their own <TrustedBrands /> just below Hero instead. */}

      {/* 3. Services — keep to ~6 cards (SEO, Paid Ads, Branding,
          Websites, AI Automation, Social Media), each linking to a
          detail page rather than expanding inline. */}
      <ServicesSection />

      {/* 4. Featured Case Studies — portfolio is now the biggest section.
          WorkGallery + CreativeShowcase are merged here, back-to-back,
          functioning as one combined "proof" block. Long-term, fold
          CreativeShowcase's grid directly into WorkGallery so it reads
          as a single section rather than two. Lead with before/after
          numbers (Traffic +420%, Leads +315%, Revenue +2.3M) over
          "we built this" framing. */}
      <WorkGallery />
      <CreativeShowcase />

      {/* 5. Process — 5-step "how we work" timeline */}
      <MarketingProcess />

      {/* 6. Why Choose Aerovince — proof statements (₹80L+ generated, 98%
          retention, etc.), not philosophy. Absorbs what PhilosophySection
          was trying to say, reframed around numbers. */}
      <WhyChooseAerovince />

      {/* 7. Testimonials — ReviewsSection has been merged in here.
          Don't render ReviewsSection separately anymore. */}
      <Testimonials />

      {/* 8. FAQ — objection-handling accordion right before the final ask */}
      <FAQSection />

      {/* 9. Final CTA — single, focused ask. HomeContactSection should be
          trimmed down to "Book a Strategy Call" / "Get a Free Audit" only
          — no second long contact form competing for attention. */}
      <HomeContactSection />

      {/* Floating, always-available conversion paths — fine to keep global */}
      {/* <WhatsAppMascot /> */}
 
    </main>
  );
}

// ── MOVED OFF THE HOMEPAGE ───────────────────────────────────────────────
// These still exist as components/pages — just no longer compete for
// attention before a visitor has decided to trust you. Link to them from
// the footer or an /about page:
//
//   PhilosophySection   → folded into WhyChooseAerovince once built
//   StartupFeature      → /about or a dedicated case-study page
//   PricingSection      → /pricing (pricing this early loses trust-poor visitors)
//   GlobalIndustries    → reduce to a one-row chip strip if you keep it
//                         on the homepage at all (Healthcare · Education ·
//                         Startups · Finance · Manufacturing · Restaurants ·
//                         Real Estate) — not a full section
//   AwardsGrid          → footer badge row or /about
//   TeamCTA             → merged into /about, not a standalone section
//   AboutSection        → /about
//   CertificationsSection → footer badge row or /about
//   ReviewsSection       → merged into Testimonials (see above)