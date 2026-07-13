

// Aerovince\app\components\BehavioralPopups.tsx

"use client";

import {
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
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
  Mail,
  ChevronRight,
  ExternalLink,
  Instagram,
  Camera,
  Lightbulb,
  Globe,
  MapPin,
  Star,
  CheckCircle2,
  Rocket,
  Flame,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────

const ONE_HOUR_MS = 60 * 60 * 1000;

// ─────────────────────────────────────────────────────────────
// Email storage helpers
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
// POPUP 1 — AEROVINCE GROWTH SIGNAL
// A live, animated "read" of a business's digital presence,
// framed as a signal scan rather than a lead-gen form.
// Shows 8s after every page load/reload, then repeats every hour.
// ─────────────────────────────────────────────────────────────

type ScanPhase = "connecting" | "reading" | "findings" | "blueprint";

const SIGNAL_CHECKS = [
  { label: "Website experience", icon: Globe },
  { label: "Search visibility", icon: TrendingUp },
  { label: "Local presence", icon: MapPin },
  { label: "Review strength", icon: Star },
  { label: "Social consistency", icon: Instagram },
  { label: "Short-form reach", icon: Camera },
  { label: "Content cadence", icon: Lightbulb },
  { label: "Lead conversion", icon: Target },
] as const;

const FINDINGS = [
  {
    icon: Globe,
    accent: "from-blue-500 to-cyan-400",
    title: "Website",
    note: "Most visitors leave before taking action — the funnel likely needs tightening.",
  },
  {
    icon: TrendingUp,
    accent: "from-emerald-500 to-teal-400",
    title: "Search Visibility",
    note: "There's very likely search traffic being left on the table right now.",
  },
  {
    icon: MapPin,
    accent: "from-violet-500 to-purple-400",
    title: "Local Presence",
    note: "Nearby customers may be finding competitors first.",
  },
  {
    icon: Star,
    accent: "from-amber-500 to-orange-400",
    title: "Reviews & Trust",
    note: "A stronger review signal could meaningfully lift conversion rate.",
  },
  {
    icon: Instagram,
    accent: "from-pink-500 to-rose-400",
    title: "Social Consistency",
    note: "Irregular posting is likely costing reach and recall.",
  },
  {
    icon: Camera,
    accent: "from-cyan-500 to-blue-400",
    title: "Short-Form Content",
    note: "Reels and shorts remain an under-used growth lever here.",
  },
];

const BLUEPRINT_ITEMS = [
  { icon: Zap, label: "More qualified website leads" },
  { icon: TrendingUp, label: "Stronger search rankings" },
  { icon: Star, label: "A more trusted online reputation" },
  { icon: Camera, label: "Content built for reach, not just posting" },
  { icon: Users, label: "A consistent, recognizable presence" },
];

/** Rotating "signal" visual — layered rotating rings + pulsing core. */
function SignalOrb({ phase }: { phase: ScanPhase }) {
  const active = phase !== "blueprint";
  return (
    <div className="relative w-20 h-20 mx-auto" style={{ perspective: 600 }}>
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-blue-400/30"
        animate={active ? { rotateX: 360 } : {}}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: "preserve-3d" }}
      />
      <motion.div
        className="absolute inset-2 rounded-full border-2 border-violet-400/40"
        animate={active ? { rotateY: 360 } : {}}
        transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: "preserve-3d" }}
      />
      <motion.div
        className="absolute inset-5 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400 shadow-lg shadow-blue-500/40"
        animate={active ? { scale: [1, 1.12, 1] } : { scale: 1 }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      />
      {active && (
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-400/30"
          animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
        />
      )}
    </div>
  );
}

/** One row in the scanning checklist — fills, then ticks. */
function SignalRow({
  icon: Icon,
  label,
  status,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  status: "pending" | "active" | "done";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: status === "pending" ? 0.35 : 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-3 py-1.5"
    >
      <div
        className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${
          status === "done"
            ? "bg-emerald-500"
            : status === "active"
            ? "bg-gradient-to-br from-blue-500 to-violet-500"
            : "bg-white/10"
        }`}
      >
        {status === "done" ? (
          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
        ) : (
          <Icon className="w-3.5 h-3.5 text-white/90" />
        )}
      </div>
      <span className="text-[12.5px] text-white/85 flex-1">{label}</span>
      {status === "active" && (
        <div className="w-14 h-1 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 to-cyan-300"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </div>
      )}
      {status === "done" && (
        <span className="text-[10px] font-semibold text-emerald-400">Read</span>
      )}
    </motion.div>
  );
}

/** 3D-tilt finding card — cursor-tracked. */
function FindingCard({
  item,
  index,
}: {
  item: (typeof FINDINGS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 250, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY]
  );
  const handleLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.09, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 700 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-xl bg-white/[0.05] border border-white/10 p-3 overflow-hidden"
      >
        <div
          className={`absolute -inset-6 bg-gradient-to-br ${item.accent} opacity-0 hover:opacity-10 blur-xl transition-opacity duration-300`}
        />
        <div
          className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.accent} flex items-center justify-center mb-2 shadow-md`}
          style={{ transform: "translateZ(20px)" }}
        >
          <item.icon className="w-4 h-4 text-white" />
        </div>
        <p className="text-[12.5px] font-bold text-white mb-0.5" style={{ transform: "translateZ(15px)" }}>
          {item.title}
        </p>
        <p className="text-[10.5px] text-white/50 leading-snug" style={{ transform: "translateZ(10px)" }}>
          {item.note}
        </p>
      </motion.div>
    </motion.div>
  );
}

function PopupGrowthSignal({ onClose }: { onClose: () => void }) {
  const [phase, setPhase] = useState<ScanPhase>("connecting");
  const [checkIndex, setCheckIndex] = useState(-1);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("reading"), 1400);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (phase !== "reading") return;
    let i = 0;
    let cancelled = false;
    const step = () => {
      if (cancelled) return;
      setCheckIndex(i);
      i += 1;
      if (i < SIGNAL_CHECKS.length) {
        setTimeout(step, 480);
      } else {
        setTimeout(() => !cancelled && setPhase("findings"), 700);
      }
    };
    step();
    return () => {
      cancelled = true;
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "findings") return;
    const t = setTimeout(() => setPhase("blueprint"), 2600);
    return () => clearTimeout(t);
  }, [phase]);

  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);
  const handleCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    spotX.set(((e.clientX - rect.left) / rect.width) * 100);
    spotY.set(((e.clientY - rect.top) / rect.height) * 100);
  };
  const spotlight = useTransform([spotX, spotY], ([x, y]) =>
    `radial-gradient(500px circle at ${x}% ${y}%, rgba(96,165,250,0.10), transparent 60%)`
  );

  return (
    <Overlay onClose={onClose}>
      <motion.div
        onMouseMove={handleCardMove}
        className="relative bg-gray-950 rounded-2xl shadow-2xl w-full max-w-md mx-auto overflow-hidden border border-white/10"
      >
        <motion.div className="absolute inset-0 pointer-events-none" style={{ background: spotlight }} />

        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#60a5fa 1px, transparent 1px), linear-gradient(90deg, #60a5fa 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 relative z-10" />

        <div className="relative z-10 px-5 pt-5 pb-6">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full text-white/40 hover:text-white/80 hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <AnimatePresence mode="wait">
            {phase === "connecting" && (
              <motion.div
                key="connecting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-6 text-center"
              >
                <SignalOrb phase={phase} />
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-400 mt-5 mb-1">
                  Aerovince Signal
                </p>
                <h2 className="text-base font-black text-white">Tuning in to your presence…</h2>
              </motion.div>
            )}

            {phase === "reading" && (
              <motion.div key="reading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="text-center mb-4">
                  <SignalOrb phase={phase} />
                  <h2 className="text-[15px] font-black text-white mt-3">Reading your digital footprint</h2>
                  <p className="text-[11px] text-white/40 mt-0.5">
                    Checking the areas that most affect growth
                  </p>
                </div>
                <div className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3">
                  {SIGNAL_CHECKS.map((c, i) => (
                    <SignalRow
                      key={c.label}
                      icon={c.icon}
                      label={c.label}
                      status={i < checkIndex ? "done" : i === checkIndex ? "active" : "pending"}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {phase === "findings" && (
              <motion.div key="findings" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="text-center mb-4">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 mb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Signal read complete
                  </div>
                  <h2 className="text-[15px] font-black text-white leading-snug">A few things stood out</h2>
                </div>
                <div className="grid grid-cols-2 gap-2.5 max-h-[260px] overflow-y-auto pr-0.5">
                  {FINDINGS.map((item, i) => (
                    <FindingCard key={item.title} item={item} index={i} />
                  ))}
                </div>
              </motion.div>
            )}

            {phase === "blueprint" && (
              <motion.div key="blueprint" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <div className="text-center mb-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-400 mb-1">
                    Your Growth Blueprint
                  </p>
                  <h2 className="text-[17px] font-black text-white leading-snug">
                    Here's what's realistically possible
                  </h2>
                </div>

                <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4 mb-5 space-y-2.5">
                  {BLUEPRINT_ITEMS.map((b, i) => (
                    <motion.div
                      key={b.label}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-2.5"
                    >
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shrink-0">
                        <b.icon className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-[12.5px] text-white/85">{b.label}</span>
                    </motion.div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  onClick={onClose}
                  className="relative flex items-center justify-center gap-2 w-full overflow-hidden bg-white text-gray-900 font-bold py-3 px-4 rounded-xl text-sm transition-transform active:scale-[0.98] shadow-lg mb-2"
                >
                  Build My Growth Blueprint
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={onClose}
                  className="w-full text-[11px] text-white/35 hover:text-white/60 py-1.5 transition-colors"
                >
                  Not right now
                </button>

                <div className="mt-4 pt-4 border-t border-white/10 text-center">
                  <p className="text-[9.5px] text-white/30 uppercase tracking-widest mb-1.5">Trusted for</p>
                  <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[10px] text-white/40 font-medium">
                    <span>Websites</span>
                    <span>·</span>
                    <span>SEO</span>
                    <span>·</span>
                    <span>Social Media</span>
                    <span>·</span>
                    <span>Google Ads</span>
                    <span>·</span>
                    <span>Meta Ads</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
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
    setSubmitted(true);
    localStorage.setItem("mt_email_subscribed", "1");

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
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -8 }}>
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
                {error && <p className="text-[11px] text-red-500 mt-1 pl-0.5">{error}</p>}
                <button
                  onClick={onClose}
                  className="w-full text-[11px] text-gray-400 hover:text-gray-500 pt-3 pb-0.5 transition-colors"
                >
                  No thanks, I prefer to figure it out alone
                </button>
              </motion.div>
            ) : (
              <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-4">
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
        aria-label="Aerovince agency overview"
      >
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 bg-gray-200 rounded-full" />
        </div>

        <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              A
            </div>
            <div>
              <p className="font-bold text-gray-900 leading-tight text-sm">Aerovince</p>
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

          <blockquote className="border-l-4 border-blue-500 pl-4 text-sm italic text-gray-500 leading-relaxed">
            &ldquo;Aerovince didn&apos;t just market our restaurant — they made us the go-to place for the
            entire Indian community in our city.&rdquo;
            <footer className="mt-1 not-italic text-[11px] text-gray-400">
              — Owner, Delhi059 · Canada
            </footer>
          </blockquote>

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

          <div className="h-1 sm:h-0" />
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// FLOATING GROWTH CTA — rotates through curiosity-driven titles
// so returning visitors always see a fresh hook, not the same
// static "See what we do" label.
// ─────────────────────────────────────────────────────────────

const GROWTH_CTA_TITLES = [
  { text: "See how fast you can grow", icon: Rocket },
  { text: "Unlock your growth blueprint", icon: Sparkles },
  { text: "What's holding your brand back?", icon: Target },
  { text: "Peek inside our growth engine", icon: TrendingUp },
  { text: "Your competitors are watching this", icon: Flame },
  { text: "Discover what we can do for you", icon: Star },
];

const CTA_ROTATE_MS = 4000;

function FloatingGrowthButton({ onClick }: { onClick: () => void }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % GROWTH_CTA_TITLES.length);
    }, CTA_ROTATE_MS);
    return () => clearInterval(id);
  }, [hovered]);

  const current = GROWTH_CTA_TITLES[index];
  const Icon = current.icon;

  return (
    <motion.div
      className="fixed bottom-[88px] right-4 z-[150]"
      initial={{ opacity: 0, scale: 0.7, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 360, damping: 28 }}
    >
      {/* Soft pulsing halo behind the button to draw the eye */}
      <motion.div
        className="absolute inset-0 rounded-full bg-blue-500/40 blur-md"
        animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        aria-label="See how Aerovince can grow your business"
        className="relative flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white text-[12px] font-bold pl-3.5 pr-4 py-2.5 rounded-full shadow-lg shadow-blue-500/30 transition-colors overflow-hidden max-w-[260px]"
      >
        <span className="relative flex items-center justify-center w-4 h-4 shrink-0">
          <motion.span
            animate={{ rotate: [0, 12, -8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon className="w-4 h-4" />
          </motion.span>
        </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={current.text}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="truncate"
          >
            {current.text}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// DEFAULT EXPORT — place in (main)/layout.tsx
// ─────────────────────────────────────────────────────────────

export default function BehavioralPopups() {
  const [activePopup, setActivePopup] = useState<"grow" | "email" | null>(null);
  const [agencyOpen, setAgencyOpen] = useState(false);

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

  // ── Popup 1 — Growth Signal ─────────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined") return;

    const initial = setTimeout(() => {
      setActivePopup("grow");
    }, 8_000);

    const interval = setInterval(() => {
      setActivePopup((cur) => (cur === null ? "grow" : cur));
    }, ONE_HOUR_MS);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, []);

  // ── Popup 2 — Email Newsletter ──────────────────────────────
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
      <AnimatePresence mode="wait">
        {activePopup === "grow" && (
          <PopupGrowthSignal key="grow" onClose={closePopup} />
        )}
        {activePopup === "email" && (
          <PopupEmail key="email" onClose={closePopup} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {agencyOpen && (
          <AgencyDrawer key="agency" onClose={() => setAgencyOpen(false)} />
        )}
      </AnimatePresence>

      <FloatingGrowthButton onClick={() => setAgencyOpen(true)} />
    </>
  );
}




