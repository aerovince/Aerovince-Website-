

"use client";

// components/grow/GrowPage.tsx
//
// Aerovince's dedicated "Grow" landing page — same blue → violet → cyan
// language, glass-card dashboards, and magnetic CTAs as HeroSection, so
// visitors landing here from an ad or a nav link feel like they never
// left the same product. No third-party agency branding anywhere.

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Globe2,
  Target,
  Users,
  Search,
  Palette,
  Smartphone,
  Star,
  CheckCircle,
  Zap,
  Rocket,
  BarChart,
  BookOpen,
  Download,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: Globe2,
    title: "Premium Website Development",
    desc: "Fast, conversion-ready Next.js sites — with a full year of free maintenance and free hosting included. Your site should sell while you sleep.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Users,
    title: "Social Media & Reels Growth",
    desc: "Scroll-stopping content and Reels, posted on a real schedule. We build the kind of page people actually follow, not just visit once.",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: Search,
    title: "Google SEO",
    desc: "On-page and technical SEO so your business shows up when people are already searching for you — not just when you're paying for ads.",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
  },
  {
    icon: Target,
    title: "Meta & Google Ad Campaigns",
    desc: "Performance campaigns built around cost-per-lead, not vanity impressions. We scale what's working and cut what isn't, every week.",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & Email Marketing",
    desc: "Bulk WhatsApp campaigns and email sequences that keep leads warm and bring past customers back — without feeling like spam.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: Palette,
    title: "Logo & Brand Identity",
    desc: "A logo and visual identity people remember and trust on sight — the foundation everything else (site, ads, socials) is built on.",
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    icon: Smartphone,
    title: "Product & App Scaling",
    desc: "UI/UX and full-stack development for apps that need to hold up under real traffic — we've scaled ride-hailing and EdTech products past thousands of concurrent users.",
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
  },
  {
    icon: BarChart,
    title: "Data & Analytics",
    desc: "GA4, Meta Pixel, and clear monthly reporting. You'll know exactly where leads come from and where they drop off — no guesswork.",
    color: "text-gray-600",
    bg: "bg-gray-50",
    border: "border-gray-100",
  },
];

const RESULTS = [
  {
    brand: "CabTale",
    category: "Transport · India",
    metric: 1000,
    metricSuffix: "K+",
    metricPrefix: "",
    label: "App Downloads",
    sub: "12 cities. 800% growth in 18 months.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    brand: "GlowRetail",
    category: "D2C Beauty · India",
    metric: 46,
    metricSuffix: "%",
    metricPrefix: "",
    label: "Drop in Cost-per-Lead",
    sub: "Meta Ads overhaul + a rebuilt landing page.",
    color: "from-violet-500 to-purple-400",
  },
  {
    brand: "Northwind Foods",
    category: "F&B Chain · India",
    metric: 3,
    metricSuffix: "x",
    metricPrefix: "",
    label: "Organic Instagram Growth",
    sub: "Reels-first content strategy, 6 months.",
    color: "from-emerald-500 to-teal-400",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Free Strategy Audit",
    desc: "We look at your current site, socials, and ad spend and tell you plainly where you're losing customers — and how to fix it.",
  },
  {
    step: "02",
    title: "The Growth Blueprint",
    desc: "A custom 90-day plan with clear goals, timelines, and budget — built around your business, not a generic template.",
  },
  {
    step: "03",
    title: "Rapid Execution",
    desc: "Sites go live in days, not months. Campaigns launch fast and get tested ruthlessly until we find what actually works for you.",
  },
  {
    step: "04",
    title: "Scale & Optimize",
    desc: "Weekly check-ins. Once a channel proves itself, we pour budget and attention into it and keep pushing the numbers up.",
  },
];

const TESTIMONIAL = {
  quote:
    "Aerovince didn't just post content for us — they rebuilt our website, fixed our WhatsApp follow-ups, and our Instagram actually converts into bookings now.",
  author: "Rohit Malhotra, Founder",
  brand: "Northwind Foods",
};

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useAnimatedCounter(target: number, duration = 1600, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf = 0;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return count;
}

// ─── Subcomponents ────────────────────────────────────────────────────────────

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Same magnetic-follow button used on the Hero navbar CTA, reused here so
 *  the two primary "Book a call" buttons on the site feel identical. */
function MagneticButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 25 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.3);
      mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.3);
    },
    [mouseX, mouseY]
  );
  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <motion.div style={{ x: springX, y: springY }} className="inline-block w-full sm:w-auto">
      <Link
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={className}
      >
        {children}
      </Link>
    </motion.div>
  );
}

function ResultCard({
  brand,
  category,
  metric,
  metricPrefix,
  metricSuffix,
  label,
  sub,
  color,
  delay,
}: (typeof RESULTS)[number] & { delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useAnimatedCounter(metric, 1600, inView);

  return (
    <FadeUp delay={delay}>
      <div
        ref={ref}
        className="group relative bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      >
        <div
          className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-300`}
        />
        <div className="relative flex items-center gap-4 mb-8">
          <div
            className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center text-white text-lg font-black shadow-md`}
          >
            {brand[0]}
          </div>
          <div>
            <p className="font-bold text-slate-900 text-lg">{brand}</p>
            <p className="text-slate-500 text-sm">{category}</p>
          </div>
        </div>
        <p className="relative text-5xl font-black text-slate-900 mb-2 tabular-nums">
          {metricPrefix}
          {count}
          {metricSuffix}
        </p>
        <p
          className={`relative text-lg font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${color}`}
        >
          {label}
        </p>
        <p className="relative text-sm text-slate-500 leading-relaxed">{sub}</p>
      </div>
    </FadeUp>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GrowPage() {
  const [guideEmail, setGuideEmail] = useState("");
  const [guideStatus, setGuideStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleGuideSubmit = async () => {
    if (!guideEmail || !guideEmail.includes("@")) return;
    setGuideStatus("loading");
    try {
      const res = await fetch("/api/grow-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: guideEmail }),
      });
      const data = await res.json();
      if (data.success) {
        setGuideStatus("success");
        const link = document.createElement("a");
        link.href = "/guides/The Business Growth Blueprint - Aerovince.pdf";
        link.download = "The Business Growth Blueprint - Aerovince.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        setGuideStatus("error");
      }
    } catch {
      setGuideStatus("error");
    }
  };

  const heroWords = useMemo(
    () => [
      { text: "Users", gradient: "from-blue-400 to-cyan-400" },
      { text: "Customers", gradient: "from-violet-400 to-purple-400" },
      { text: "Revenue", gradient: "from-cyan-400 to-blue-400" },
    ],
    []
  );
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % heroWords.length), 2400);
    return () => clearInterval(id);
  }, [heroWords.length]);
  const currentWord = heroWords[wordIndex];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* ── HERO ── (same dark canvas + blue/violet glow language as HeroSection) */}
      <section className="relative pt-28 pb-32 px-6 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-600/20 blur-[120px] will-change-transform"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[40%] -right-[20%] w-[60%] h-[60%] rounded-full bg-violet-600/20 blur-[120px] will-change-transform"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-xs font-bold uppercase tracking-widest mb-8">
              <Zap className="w-4 h-4 fill-blue-300" />
              Aerovince Growth — for Startups & Ambitious Brands
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8"
          >
            Build your product. <br />
            <span>We&apos;ll build your </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`inline-block text-transparent bg-clip-text bg-gradient-to-r ${currentWord.gradient}`}
              >
                {currentWord.text}
              </motion.span>
            </AnimatePresence>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12 font-light"
          >
            Aerovince is the full-stack marketing and tech partner that turns
            an MVP into a market leader — premium websites, social growth,
            SEO, and ad campaigns that build a brand people actually trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton
              href="/contact"
              className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg overflow-hidden group shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 transition-transform"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Free Strategy Call <ArrowRight className="w-5 h-5" />
              </span>
            </MagneticButton>
            <Link
              href="#free-guide"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all backdrop-blur-sm"
            >
              <Download className="w-5 h-5" /> Get the Growth Guide
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">
              End-to-End Execution
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Everything your business needs to grow
            </h2>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto">
              One team — strategists, designers, and engineers — instead of
              five disconnected freelancers who don't talk to each other.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc, color, bg, border }, i) => (
              <FadeUp key={title} delay={i * 0.05}>
                <div
                  className={`h-full bg-white border ${border} rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                >
                  <div
                    className={`w-14 h-14 ${bg} ${color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3 leading-tight">
                    {title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD MAGNET (FREE GUIDE) ── */}
      <section id="free-guide" className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 via-violet-600 to-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <BookOpen className="w-64 h-64" />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/30 border border-blue-400/30 text-blue-100 text-xs font-bold tracking-wider uppercase mb-6">
                100% Free Resource
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                The 0 to 10,000 Customers Playbook
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Stop spending on ads that don&apos;t convert. Download the
                exact framework Aerovince uses to build a website that
                converts, grow social pages that matter, and lower cost per
                lead for early-stage businesses.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "How to turn your website into your best salesperson.",
                  "A simple way to calculate what a customer is really worth.",
                  "Zero-budget growth moves for your first 1,000 followers.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-blue-50 font-medium">
                    <CheckCircle className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.2} className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Get the playbook</h3>
              <p className="text-slate-500 text-sm mb-6">
                Delivered instantly to your inbox + downloaded automatically.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="sr-only">Work Email</label>
                  <input
                    type="email"
                    placeholder="you@business.com"
                    value={guideEmail}
                    onChange={(e) => setGuideEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleGuideSubmit()}
                    disabled={guideStatus === "loading" || guideStatus === "success"}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all disabled:opacity-60"
                  />
                </div>

                <button
                  onClick={handleGuideSubmit}
                  disabled={guideStatus === "loading" || guideStatus === "success"}
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors"
                >
                  {guideStatus === "loading" ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : guideStatus === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Check your inbox!
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" /> Download Free Guide
                    </>
                  )}
                </button>

                {guideStatus === "error" && (
                  <p className="text-red-500 text-sm text-center">
                    Something went wrong. Please try again.
                  </p>
                )}

                <p className="text-xs text-center text-slate-400 mt-4">
                  We hate spam as much as you do. Unsubscribe anytime.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Results businesses can actually point to
            </h2>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto">
              Real numbers from real Aerovince clients — not vanity metrics.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESULTS.map((r, i) => (
              <ResultCard key={r.brand} {...r} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute -top-32 right-0 w-[420px] h-[420px] rounded-full bg-violet-600/10 blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <FadeUp className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4">
              How We Work
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              A clear, four-step sprint
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
              No bloated retainers, no vanity dashboards — just fast execution
              and numbers you can check yourself.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {PROCESS.map(({ step, title, desc }, i) => (
              <FadeUp key={step} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-colors">
                  <span className="text-5xl font-black text-blue-500/30 block mb-6">
                    {step}
                  </span>
                  <h3 className="font-bold text-white text-xl mb-4">{title}</h3>
                  <p className="text-slate-400 text-base leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <blockquote className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
              &ldquo;{TESTIMONIAL.quote}&rdquo;
            </blockquote>
            <p className="text-slate-600 text-lg">
              <span className="font-bold text-slate-900">{TESTIMONIAL.author}</span> —{" "}
              {TESTIMONIAL.brand}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="py-10 px-6 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-slate-400">
          {[
            { icon: ShieldCheck, label: "Free hosting & maintenance, 1st year" },
            { icon: Rocket, label: "Sites shipped in days, not months" },
            { icon: Star, label: "4.9/5 from 150+ clients" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm font-medium">
              <Icon className="w-4 h-4 text-blue-500" />
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
              Ready to grow your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400">
                business?
              </span>
            </h2>
            <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Book a free 30-minute strategy call. We&apos;ll audit your
              website and socials and give you honest, actionable steps —
              whether you hire Aerovince or not.
            </p>
            <MagneticButton
              href="/contact"
              className="relative inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all shadow-xl shadow-blue-600/20 hover:-translate-y-1 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Book Your Growth Consultation <ArrowRight className="w-6 h-6" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </MagneticButton>
            <p className="text-slate-400 text-sm mt-6 font-medium">
              Zero commitment · Honest feedback · Founder to founder
            </p>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}