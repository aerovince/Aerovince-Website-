

"use client";

import {
  useEffect,
  useState,
  useCallback,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  X,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Target,
  Users,
  Code2,
  Smartphone,
  Zap,
  BarChart3,
  Mail,
  ChevronRight,
  ExternalLink,
  Instagram,
  Camera,
  Lightbulb,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────

const ONE_HOUR_MS = 60 * 60 * 1000;

// ─────────────────────────────────────────────────────────────
// Email storage helpers (grow popup no longer needs these)
// ─────────────────────────────────────────────────────────────

function canShowEmailAgain(): boolean {
  if (typeof window === "undefined") return false;
  const last = localStorage.getItem("mt_email_seen");
  if (!last) return true;
  const lastDate = new Date(parseInt(last, 10));
  if (isNaN(lastDate.getTime())) return true;
  const now = new Date();
  return (
    lastDate.getFullYear() !== now.getFullYear() ||
    lastDate.getMonth() !== now.getMonth() ||
    lastDate.getDate() !== now.getDate()
  );
}

function markShown(key: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, Date.now().toString());
}

// ─────────────────────────────────────────────────────────────
// Shared overlay + card wrapper
// ─────────────────────────────────────────────────────────────

function Overlay({
  children,
  onClose,
  zIndex = "z-[500]",
}: {
  children: React.ReactNode;
  onClose: () => void;
  zIndex?: string;
}) {
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className={`fixed inset-0 bg-black/55 backdrop-blur-[3px] ${zIndex} flex items-end sm:items-center justify-center p-3 sm:p-5`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 28, scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 34, mass: 0.8 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full"
        role="dialog"
        aria-modal="true"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// POPUP 1 — GROW YOUR BRAND
// Shows 8s after every page load/reload, then repeats every hour
// ─────────────────────────────────────────────────────────────

const GROW_OPTIONS = [
  {
    icon: TrendingUp,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100 hover:border-blue-300",
    label: "Grow my brand",
    sub: "Strategy, identity & storytelling",
  },
  {
    icon: Target,
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-100 hover:border-orange-300",
    label: "Generate leads",
    sub: "Meta, Google & performance ads",
  },
  {
    icon: Users,
    color: "text-pink-500",
    bg: "bg-pink-50",
    border: "border-pink-100 hover:border-pink-300",
    label: "Build a community",
    sub: "Social media & influencer marketing",
  },
  {
    icon: Code2,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100 hover:border-purple-300",
    label: "Launch a product",
    sub: "Website, app & go-to-market",
  },
  {
    icon: BarChart3,
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100 hover:border-green-300",
    label: "Scale revenue",
    sub: "Funnels, retargeting & analytics",
  },
  {
    icon: Smartphone,
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100 hover:border-teal-300",
    label: "Build an app",
    sub: "iOS, Android & full-stack",
  },
];

function PopupGrow({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Overlay onClose={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto overflow-hidden">
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

        <div className="px-5 pt-5 pb-6">
          {/* Header row */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm flex-shrink-0">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-500 mb-0.5">
                  Marktale World
                </p>
                <h2 className="text-[17px] sm:text-lg font-black text-gray-900 leading-tight">
                  What&apos;s your growth goal?
                </h2>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors flex-shrink-0 mt-0.5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Options grid */}
          <div className="grid grid-cols-2 gap-2 mb-5">
            {GROW_OPTIONS.map(({ icon: Icon, color, bg, border, label, sub }, i) => (
              <button
                key={label}
                onClick={() => setSelected(i === selected ? null : i)}
                className={`flex items-start gap-2.5 p-3 rounded-xl border transition-all text-left ${border} ${
                  selected === i
                    ? "ring-2 ring-blue-500 border-blue-300 bg-blue-50/60"
                    : "border-gray-100 bg-white"
                }`}
              >
                <div className={`w-7 h-7 rounded-lg ${bg} ${color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[12px] font-bold text-gray-800 leading-tight">{label}</p>
                  <p className="text-[10px] text-gray-400 leading-tight mt-0.5 truncate">{sub}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Stats strip */}
          <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-2.5 mb-5">
            {[["30+", "Brands"], ["15×", "Avg ROI"], ["98%", "Retention"]].map(
              ([num, lbl]) => (
                <div key={lbl} className="text-center">
                  <p className="text-sm font-black text-gray-900">{num}</p>
                  <p className="text-[10px] text-gray-500">{lbl}</p>
                </div>
              )
            )}
          </div>

          {/* CTA */}
          <Link
            href="/grow"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-sm shadow-blue-200"
          >
            Let&apos;s grow my brand <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={onClose}
            className="w-full text-[11px] text-gray-400 hover:text-gray-500 py-2.5 transition-colors"
          >
            I&apos;ll explore on my own
          </button>
        </div>
      </div>
    </Overlay>
  );
}

// ─────────────────────────────────────────────────────────────
// POPUP 2 — EMAIL NEWSLETTER  (20 s, once per calendar day)
// ─────────────────────────────────────────────────────────────

const EMAIL_PERKS = [
  "Weekly AI marketing experiments — real results",
  "Behind-the-scenes brand case studies",
  "Exclusive tools, prompts & growth playbooks",
];

function PopupEmail({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");

    // Optimistic UI — show success immediately
    setSubmitted(true);

    // Permanently suppress this popup — they're subscribed now
    localStorage.setItem("mt_email_subscribed", "1");

    // Fire-and-forget background save
    fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }).catch((err) => {
      console.error("Newsletter subscribe failed silently:", err);
    });
  };

  return (
    <Overlay onClose={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-auto overflow-hidden">
        <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

        <div className="px-5 pt-5 pb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm flex-shrink-0">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -8 }}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-indigo-500 mb-1">
                  Free weekly newsletter
                </p>
                <h2 className="text-[17px] sm:text-lg font-black text-gray-900 mb-1 leading-tight">
                  Marketing that actually works.
                </h2>
                <p className="text-xs text-gray-500 mb-4">
                  Join 1,000+ founders. No fluff — just strategies that move the needle.
                </p>

                <ul className="space-y-2 mb-5">
                  {EMAIL_PERKS.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                        <ChevronRight className="w-2.5 h-2.5" />
                      </span>
                      <span className="text-[12px] text-gray-600 leading-snug">{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 mb-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    placeholder="your@email.com"
                    className="flex-1 min-w-0 px-3.5 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm transition-all placeholder:text-gray-300"
                  />
                  <button
                    onClick={handleSubmit}
                    className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.97] text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-all flex-shrink-0"
                  >
                    <Sparkles className="w-3.5 h-3.5" /> Join
                  </button>
                </div>
                {error && (
                  <p className="text-[11px] text-red-500 mt-1 pl-0.5">{error}</p>
                )}
                <button
                  onClick={onClose}
                  className="w-full text-[11px] text-gray-400 hover:text-gray-500 pt-3 pb-0.5 transition-colors"
                >
                  No thanks, I prefer to figure it out alone
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-4"
              >
                <div className="text-3xl mb-3">🎉</div>
                <h3 className="text-base font-black text-gray-900 mb-1">You&apos;re in!</h3>
                <p className="text-xs text-gray-500 mb-5">
                  Welcome to the club. Check your inbox for a confirmation.
                </p>
                <button
                  onClick={onClose}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  Back to exploring →
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Overlay>
  );
}

// ─────────────────────────────────────────────────────────────
// AGENCY DRAWER — "See what we do"
// ─────────────────────────────────────────────────────────────

const SERVICES = [
  { icon: Instagram,  label: "Social media",         desc: "Instagram, YouTube, LinkedIn, X",     bg: "bg-blue-50",   color: "text-blue-700"   },
  { icon: TrendingUp, label: "Brand growth",          desc: "Strategy, identity & positioning",    bg: "bg-green-50",  color: "text-green-700"  },
  { icon: Target,     label: "Performance ads",       desc: "Meta, Google & programmatic",         bg: "bg-amber-50",  color: "text-amber-700"  },
  { icon: Users,      label: "Influencer marketing",  desc: "50+ micro & macro partnerships",      bg: "bg-pink-50",   color: "text-pink-700"   },
  { icon: Code2,      label: "Websites",              desc: "Fast, conversion-optimised sites",    bg: "bg-purple-50", color: "text-purple-700" },
  { icon: Smartphone, label: "App development",       desc: "iOS, Android & full-stack",           bg: "bg-teal-50",   color: "text-teal-700"   },
  { icon: Lightbulb,  label: "Brand mentoring",       desc: "1-on-1 strategy & coaching",         bg: "bg-red-50",    color: "text-red-700"    },
  { icon: Camera,     label: "Creative production",   desc: "Photography, reels & ad creatives",   bg: "bg-gray-100",  color: "text-gray-700"   },
];

const WORKS = [
  { icon: "🍽️", bg: "bg-blue-50",   title: "Delhi059",   cat: "Restaurant · Canada", result: "650+ reviews"  },
  { icon: "🚗",  bg: "bg-green-50",  title: "Local Ride", cat: "Mobility · Canada",   result: "100K+ rides"   },
  { icon: "🛒",  bg: "bg-amber-50",  title: "BG Foods",   cat: "E-commerce · NA",     result: "50K+ orders"   },
  { icon: "📚",  bg: "bg-purple-50", title: "MentorLeap", cat: "EdTech · India",      result: "10K+ trained"  },
  { icon: "🚕",  bg: "bg-orange-50", title: "CabTale",    cat: "Transport · India",   result: "1M+ downloads" },
  { icon: "💎",  bg: "bg-pink-50",   title: "Dee Cee",    cat: "Jewellery · India",   result: "10× sales"     },
];

function AgencyDrawer({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/55 backdrop-blur-[3px] z-[500] flex items-end sm:items-center justify-center sm:p-5"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        transition={{ type: "spring", stiffness: 380, damping: 36, mass: 0.85 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full sm:max-w-2xl sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[92vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="MarkTale agency overview"
      >
        {/* Drag handle (mobile) */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 bg-gray-200 rounded-full" />
        </div>

        {/* Sticky header */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              M
            </div>
            <div>
              <p className="font-bold text-gray-900 leading-tight text-sm">Marktale World</p>
              <p className="text-[11px] text-gray-500">Full-service brand growth agency</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-5 py-5 space-y-6">
          {/* Services */}
          <section>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-3">
              What we do
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {SERVICES.map(({ icon: Icon, label, desc, bg, color }) => (
                <div
                  key={label}
                  className="flex flex-col gap-2 p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
                >
                  <div className={`w-8 h-8 rounded-lg ${bg} ${color} flex items-center justify-center`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-gray-800 leading-tight">{label}</p>
                    <p className="text-[11px] text-gray-500 leading-tight mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stats */}
          <section>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-3">
              Track record
            </p>
            <div className="grid grid-cols-4 gap-2">
              {[["30+","Brands"], ["15×","Avg ROI"], ["10M+","Reach"], ["98%","Retention"]].map(
                ([num, lbl]) => (
                  <div key={lbl} className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-base font-black text-gray-900">{num}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">{lbl}</p>
                  </div>
                )
              )}
            </div>
          </section>

          {/* Past work */}
          <section>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-3">
              Past work
            </p>
            <div className="flex gap-2.5 overflow-x-auto pb-1 -mx-5 px-5">
              {WORKS.map(({ icon, bg, title, cat, result }) => (
                <div
                  key={title}
                  className="flex-shrink-0 w-32 border border-gray-100 hover:border-blue-200 rounded-xl p-3 transition-colors"
                >
                  <div className={`w-8 h-8 ${bg} rounded-lg flex items-center justify-center text-base mb-2`}>
                    {icon}
                  </div>
                  <p className="text-[12px] font-bold text-gray-800">{title}</p>
                  <p className="text-[10px] text-gray-500 mb-1.5">{cat}</p>
                  <span className="inline-block bg-blue-50 text-blue-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    {result}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonial */}
          <blockquote className="border-l-4 border-blue-500 pl-4 text-sm italic text-gray-500 leading-relaxed">
            &ldquo;MarkTale didn&apos;t just market our restaurant — they made us the go-to place for the
            entire Indian community in our city.&rdquo;
            <footer className="mt-1 not-italic text-[11px] text-gray-400">
              — Owner, Delhi059 · Canada
            </footer>
          </blockquote>

          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-5 text-center">
            <p className="font-black text-gray-900 text-base mb-1">Ready to grow your brand?</p>
            <p className="text-xs text-blue-600 mb-4">
              Free 30-minute strategy call — no commitment, just clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all"
              >
                Get a free consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 border border-blue-200 text-blue-700 hover:bg-blue-100 font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
              >
                View portfolio <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bottom spacer for mobile safe area */}
          <div className="h-1 sm:h-0" />
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// DEFAULT EXPORT — place in (main)/layout.tsx
// ─────────────────────────────────────────────────────────────

export default function BehavioralPopups() {
  const [activePopup, setActivePopup] = useState<"grow" | "email" | null>(null);
  const [agencyOpen, setAgencyOpen] = useState(false);

  // Tab title trick
  useEffect(() => {
    const orig = document.title;
    const alts = [
      "We miss you! 👀",
      "One last thing… 🚀",
      "Don't miss this ✨",
    ];
    const handle = () => {
      document.title = document.hidden
        ? alts[Math.floor(Math.random() * alts.length)]
        : orig;
    };
    document.addEventListener("visibilitychange", handle);
    return () => {
      document.removeEventListener("visibilitychange", handle);
      document.title = orig;
    };
  }, []);

  // ── Popup 1 — Grow Your Brand ──────────────────────────────
  // Always shows 8s after every page load/reload.
  // Then repeats automatically every 1 hour while the tab stays open.
  // No localStorage gate — reload always resets the 8s timer.
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Show 8s after every load/reload
    const initial = setTimeout(() => {
      setActivePopup("grow");
    }, 8_000);

    // Repeat every hour while tab is open
    const interval = setInterval(() => {
      // Only show if no other popup is currently open
      setActivePopup((cur) => (cur === null ? "grow" : cur));
    }, ONE_HOUR_MS);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, []);

  // ── Popup 2 — Email Newsletter ─────────────────────────────
  // 20s delay, once per calendar day, permanently off after subscribe.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem("mt_email_subscribed")) return;
    if (!canShowEmailAgain()) return;

    const t = setTimeout(() => {
      setActivePopup((cur) => {
        if (cur === null) {
          markShown("mt_email_seen");
          return "email";
        }
        return cur;
      });
    }, 20_000);

    return () => clearTimeout(t);
  }, []);

  const closePopup = useCallback(() => setActivePopup(null), []);

  return (
    <>
      {/* ── Timed popups ────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {activePopup === "grow" && (
          <PopupGrow key="grow" onClose={closePopup} />
        )}
        {activePopup === "email" && (
          <PopupEmail key="email" onClose={closePopup} />
        )}
      </AnimatePresence>

      {/* ── Agency drawer ────────────────────────────────────── */}
      <AnimatePresence>
        {agencyOpen && (
          <AgencyDrawer key="agency" onClose={() => setAgencyOpen(false)} />
        )}
      </AnimatePresence>

      {/* ── Persistent floating button ───────────────────────── */}
      {/* z-[150] keeps it below popups (z-500) and above page content */}
      {/* bottom-24 leaves clear space above WhatsApp float buttons  */}
      <motion.div
        className="fixed bottom-[88px] right-4 z-[150]"
        initial={{ opacity: 0, scale: 0.7, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2.5, type: "spring", stiffness: 360, damping: 28 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setAgencyOpen(true)}
          aria-label="See what MarkTale can do"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[12px] font-bold px-4 py-2.5 rounded-full shadow-lg shadow-blue-200/60 transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5" />
          See what we do
        </motion.button>
      </motion.div>
    </>
  );
}