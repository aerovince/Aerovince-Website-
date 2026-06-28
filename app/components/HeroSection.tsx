







"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Zap,
  TrendingUp,
  Users,
  BarChart3,
  Globe,
  Star,
  Heart,
  MessageCircle,
  Share2,
  Server,
  ShieldCheck,
  Cpu,
  Megaphone,
  MousePointerClick,
  Mail,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavLink {
  label: string;
  href: string;
}

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

interface DashboardMetric {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ReactNode;
}

interface ServicePanel {
  key: string;
  name: string;
  badge: string;
  accent: string;
  chartColor: string;
  bigStatLabel: string;
  bigStatValue: string;
  bigStatChange: string;
  metrics: DashboardMetric[];
  chartPoints: number[];
  progressLabel: string;
  progressValue: number;
  pillOne: { label: string; sub: string; icon: React.ReactNode; color: string };
}

// ─── Constants ────────────────────────────────────────────────────────────────

const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

const ANIMATED_WORDS = [
  { text: "Grow", gradient: "from-blue-500 to-cyan-400" },
  { text: "Scale", gradient: "from-violet-500 to-purple-400" },
  { text: "Convert", gradient: "from-cyan-500 to-blue-400" },
  { text: "Dominate", gradient: "from-rose-500 to-orange-400" },
  { text: "Launch", gradient: "from-emerald-500 to-teal-400" },
  { text: "Automate", gradient: "from-amber-500 to-yellow-400" },
];

const STATS: StatItem[] = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 12, suffix: "M+", label: "Revenue Generated", prefix: "$" },
  { value: 40, suffix: "+", label: "Businesses Scaled" },
];

const CLIENT_LOGOS = [
  "TechVault", "NovaBrand", "PulseMedia", "ZenithCo", "CoreScale",
  "BrightPath", "OmniLaunch", "StrideCo", "FlowBase", "PeakForge",
];

// Dynamic, rotating "service dashboards" — each one represents a different
// service offering (Social Media, Growth/SEO, IT Services, Marketing/Ads).
// chartColor / accent are plain values (not animated as gradient strings)
// so swapping panels is just a className/style swap, not a tween — cheap.
const SERVICE_PANELS: ServicePanel[] = [
  {
    key: "social",
    name: "Social Media Growth",
    badge: "Social Media Management",
    accent: "from-pink-500 to-rose-400",
    chartColor: "#ec4899",
    bigStatLabel: "Followers Gained",
    bigStatValue: "+18.4K",
    bigStatChange: "+52.3%",
    chartPoints: [12, 18, 16, 24, 22, 30, 28, 38, 35, 46, 44, 58],
    progressLabel: "Engagement Rate",
    progressValue: 92,
    metrics: [
      { label: "New Followers", value: "18.4K", change: "+52.3%", positive: true, icon: <Users size={14} /> },
      { label: "Total Likes", value: "92.1K", change: "+38.9%", positive: true, icon: <Heart size={14} /> },
      { label: "Comments", value: "4,210", change: "+27.4%", positive: true, icon: <MessageCircle size={14} /> },
      { label: "Shares", value: "1,860", change: "+44.1%", positive: true, icon: <Share2 size={14} /> },
    ],
    pillOne: { label: "Viral post", sub: "240K reach", icon: <TrendingUp size={10} className="text-white" />, color: "from-pink-400 to-rose-500" },
  },
  {
    key: "growth",
    name: "Growth & SEO",
    badge: "Growth Dashboard",
    accent: "from-blue-500 to-cyan-400",
    chartColor: "#3b82f6",
    bigStatLabel: "Monthly Revenue",
    bigStatValue: "$94,300",
    bigStatChange: "+41.2%",
    chartPoints: [18, 32, 28, 45, 38, 55, 48, 67, 58, 72, 65, 88],
    progressLabel: "SEO Authority Score",
    progressValue: 87,
    metrics: [
      { label: "Organic Traffic", value: "48.2K", change: "+34.7%", positive: true, icon: <Globe size={14} /> },
      { label: "Leads Generated", value: "1,847", change: "+22.1%", positive: true, icon: <Users size={14} /> },
      { label: "Revenue Growth", value: "$94.3K", change: "+41.2%", positive: true, icon: <TrendingUp size={14} /> },
      { label: "Conversion Rate", value: "7.4%", change: "+2.3%", positive: true, icon: <Zap size={14} /> },
    ],
    pillOne: { label: "+238 leads", sub: "this week", icon: <TrendingUp size={10} className="text-white" />, color: "from-emerald-400 to-teal-500" },
  },
  {
    key: "it",
    name: "IT & Web Services",
    badge: "Infrastructure Health",
    accent: "from-emerald-500 to-teal-400",
    chartColor: "#10b981",
    bigStatLabel: "System Uptime",
    bigStatValue: "99.98%",
    bigStatChange: "+0.3%",
    chartPoints: [70, 75, 72, 80, 78, 85, 83, 90, 88, 94, 92, 98],
    progressLabel: "Site Speed Score",
    progressValue: 96,
    metrics: [
      { label: "Page Load Time", value: "0.8s", change: "-46.0%", positive: true, icon: <Server size={14} /> },
      { label: "Security Score", value: "A+", change: "+12.0%", positive: true, icon: <ShieldCheck size={14} /> },
      { label: "API Uptime", value: "99.98%", change: "+0.3%", positive: true, icon: <Cpu size={14} /> },
      { label: "Bugs Resolved", value: "312", change: "+18.5%", positive: true, icon: <Zap size={14} /> },
    ],
    pillOne: { label: "Zero downtime", sub: "last 90 days", icon: <ShieldCheck size={10} className="text-white" />, color: "from-emerald-400 to-teal-500" },
  },
  {
    key: "marketing",
    name: "Performance Marketing",
    badge: "Ad Campaign Performance",
    accent: "from-amber-500 to-orange-400",
    chartColor: "#f59e0b",
    bigStatLabel: "Ad Spend ROI",
    bigStatValue: "4.8x",
    bigStatChange: "+29.6%",
    chartPoints: [20, 26, 24, 34, 30, 42, 38, 50, 46, 60, 56, 74],
    progressLabel: "Campaign Score",
    progressValue: 91,
    metrics: [
      { label: "Ad Impressions", value: "1.2M", change: "+61.0%", positive: true, icon: <Megaphone size={14} /> },
      { label: "Click-through", value: "9.6%", change: "+18.2%", positive: true, icon: <MousePointerClick size={14} /> },
      { label: "Email Opens", value: "62.4%", change: "+11.8%", positive: true, icon: <Mail size={14} /> },
      { label: "ROAS", value: "4.8x", change: "+29.6%", positive: true, icon: <TrendingUp size={14} /> },
    ],
    pillOne: { label: "+312 sales", sub: "this campaign", icon: <TrendingUp size={10} className="text-white" />, color: "from-amber-400 to-orange-500" },
  },
];

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useAnimatedCounter(target: number, duration = 1800, start = false) {
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

/** Cycles through indices on an interval, pausing while `paused` is true. */
function useCycle(length: number, intervalMs: number, paused = false) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % length), intervalMs);
    return () => clearInterval(id);
  }, [length, intervalMs, paused]);
  return [index, setIndex] as const;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function AnimatedStat({ value, suffix, label, prefix, delay, start }: StatItem & { delay: number; start: boolean }) {
  const count = useAnimatedCounter(value, 1600, start);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col"
    >
      <span className="text-xl sm:text-2xl font-bold text-gray-900 tabular-nums">
        {prefix}{count}{suffix}
      </span>
      <span className="text-[11px] sm:text-xs text-gray-500 mt-0.5 whitespace-nowrap">{label}</span>
    </motion.div>
  );
}

function LogoMarquee() {
  return (
    <div className="relative overflow-hidden mt-8 sm:mt-10">
      <p className="text-[11px] sm:text-xs font-medium text-gray-400 uppercase tracking-widest mb-3 sm:mb-4 text-center sm:text-left">
        Trusted by ambitious brands
      </p>
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        {/* Pure CSS marquee (no per-frame JS) — much cheaper than a framer-motion x tween */}
        <div className="flex gap-8 sm:gap-10 shrink-0 animate-marquee" style={{ "--duration": "22s" } as React.CSSProperties}>
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((name, i) => (
            <span
              key={i}
              className="text-gray-300 font-semibold text-sm tracking-wide hover:text-blue-500 transition-colors duration-300 cursor-default select-none whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Animated growth chart. Path math is memoized per dataset so it's only
 * recomputed when the active service actually changes, not on every render.
 */
function GrowthChart({ points, color }: { points: number[]; color: string }) {
  const { path, fillPath, endPoint } = useMemo(() => {
    const max = Math.max(...points);
    const min = Math.min(...points);
    const range = max - min || 1;

    const pts = points.map((v, i) => ({
      x: (i / (points.length - 1)) * 100,
      y: 100 - ((v - min) / range) * 80 - 10,
    }));

    const d = pts
      .map((p, i) => {
        if (i === 0) return `M${p.x} ${p.y}`;
        const prev = pts[i - 1];
        const cx = (prev.x + p.x) / 2;
        return `Q${prev.x} ${prev.y} ${cx} ${(prev.y + p.y) / 2} T${p.x} ${p.y}`;
      })
      .join(" ");

    return {
      path: d,
      fillPath: `${d} L100 100 L0 100 Z`,
      endPoint: pts[pts.length - 1],
    };
  }, [points]);

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-20 sm:h-24">
      <defs>
        <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Fill + stroke recolor via CSS transition (cheap) instead of framer-motion color tween */}
      <path d={fillPath} fill="url(#heroChartGrad)" style={{ transition: "d 0.5s ease" }} />
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "stroke 0.4s ease" }}
      />
      <circle cx={endPoint.x} cy={endPoint.y} r="3" fill={color} style={{ transition: "fill 0.4s ease" }}>
        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function ServiceSwitcher({
  panels,
  activeIndex,
  onSelect,
}: {
  panels: ServicePanel[];
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex items-center gap-1.5 overflow-x-auto sm:overflow-visible">
      {panels.map((panel, i) => {
        const active = i === activeIndex;
        return (
          <button
            key={panel.key}
            onClick={() => onSelect(i)}
            className="relative px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold whitespace-nowrap transition-colors"
            style={{ color: active ? "white" : "#6b7280" }}
          >
            {active && (
              <motion.span
                layoutId="service-pill-bg"
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${panel.accent}`}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10">{panel.name.split(" ")[0]}</span>
          </button>
        );
      })}
    </div>
  );
}

function FloatingDashboard() {
  const [hovered, setHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useCycle(SERVICE_PANELS.length, 3600, hovered);
  const panel = SERVICE_PANELS[activeIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[540px] mx-auto"
    >
      {/* Ambient glow — plain div + CSS transition, recolors cheaply on panel change */}
      <div
        className="absolute -inset-6 rounded-3xl blur-2xl"
        style={{
          background: `linear-gradient(135deg, ${panel.chartColor}33, transparent 70%)`,
          transition: "background 0.6s ease",
        }}
      />

      {/* Main glass card */}
      <div className="relative rounded-2xl bg-white/85 backdrop-blur-md border border-white/60 shadow-xl shadow-blue-500/10 overflow-hidden">

        {/* Header bar */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 border-b border-gray-100/80 gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ background: panel.chartColor, transition: "background 0.5s ease" }}
            />
            <AnimatePresence mode="wait">
              <motion.span
                key={panel.key}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.25 }}
                className="text-xs sm:text-sm font-semibold text-gray-800 truncate"
              >
                {panel.badge}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-emerald-600 bg-emerald-50 px-2 sm:px-2.5 py-1 rounded-full font-medium shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
            Live
          </div>
        </div>

        {/* Service switcher tabs */}
        <div className="px-4 sm:px-5 pt-3">
          <ServiceSwitcher panels={SERVICE_PANELS} activeIndex={activeIndex} onSelect={setActiveIndex} />
        </div>

        {/* Chart section */}
        <div className="px-4 sm:px-5 pt-3 pb-2">
          <div className="flex items-end justify-between mb-1">
            <div className="min-w-0">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${panel.key}-label`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="text-[11px] sm:text-xs text-gray-400 font-medium"
                >
                  {panel.bigStatLabel}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${panel.key}-value`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, delay: 0.04 }}
                  className="text-xl sm:text-2xl font-bold text-gray-900"
                >
                  {panel.bigStatValue}
                </motion.p>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              <motion.span
                key={`${panel.key}-change`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="text-[11px] sm:text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md whitespace-nowrap"
              >
                {panel.bigStatChange} ↑
              </motion.span>
            </AnimatePresence>
          </div>

          <GrowthChart points={panel.chartPoints} color={panel.chartColor} />

          <div className="flex justify-between text-[9px] sm:text-[10px] text-gray-300 font-medium mt-1">
            {["Jan", "Mar", "May", "Jul", "Sep", "Nov", "Dec"].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 px-4 sm:px-5 py-3.5 sm:py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={panel.key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="contents"
            >
              {panel.metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="bg-gray-50/80 rounded-xl p-2.5 sm:p-3 border border-gray-100"
                >
                  <div className="flex items-center gap-1.5 text-gray-400 mb-1.5">
                    <span style={{ color: panel.chartColor }}>{m.icon}</span>
                    <span className="text-[9px] sm:text-[10px] font-medium truncate">{m.label}</span>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-gray-900">{m.value}</p>
                  <p className={`text-[9px] sm:text-[10px] font-semibold mt-0.5 ${m.positive ? "text-emerald-600" : "text-red-500"}`}>
                    {m.change} this month
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress / score bar */}
        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
          <div
            className="rounded-xl p-3 sm:p-3.5 border border-gray-100"
            style={{
              background: `linear-gradient(90deg, ${panel.chartColor}14, ${panel.chartColor}08)`,
              transition: "background 0.5s ease",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 min-w-0">
                <BarChart3 size={12} style={{ color: panel.chartColor }} className="shrink-0" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${panel.key}-progress-label`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[10px] sm:text-[11px] font-semibold text-gray-700 truncate"
                  >
                    {panel.progressLabel}
                  </motion.span>
                </AnimatePresence>
              </div>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${panel.key}-progress-value`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm font-bold shrink-0"
                  style={{ color: panel.chartColor }}
                >
                  {panel.progressValue}/100
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="w-full bg-white rounded-full h-1.5 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                animate={{ width: `${panel.progressValue}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ background: panel.chartColor, transition: "background 0.5s ease" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification pill — recolors instantly via plain className/style, no string tween */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${panel.key}-pill-1`}
          initial={{ opacity: 0, x: 16, y: 8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 16, y: -8 }}
          transition={{ duration: 0.3 }}
          className="absolute -top-4 -right-2 sm:-right-4 bg-white rounded-xl shadow-lg border border-gray-100 px-2.5 sm:px-3 py-2 flex items-center gap-2"
        >
          <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${panel.pillOne.color} flex items-center justify-center shrink-0`}>
            {panel.pillOne.icon}
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-gray-800 whitespace-nowrap">{panel.pillOne.label}</p>
            <p className="text-[9px] text-gray-400 whitespace-nowrap">{panel.pillOne.sub}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, x: -16, y: -8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        className="absolute -bottom-4 -left-2 sm:-left-4 bg-white rounded-xl shadow-lg border border-gray-100 px-2.5 sm:px-3 py-2 flex items-center gap-2"
      >
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center shrink-0">
          <Star size={10} className="text-white" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-gray-800 whitespace-nowrap">5.0 ⭐ Rating</p>
          <p className="text-[9px] text-gray-400 whitespace-nowrap">98% satisfaction</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 25 });

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-100/80 shadow-sm shadow-gray-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <span className="text-white font-black text-sm">A</span>
            </div>
            <span className="font-bold text-lg text-gray-900 tracking-tight">
              Aero<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">vince</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="relative px-3.5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group"
                whileHover={{ y: -1 }}
              >
                {link.label}
                <span className="absolute inset-x-3.5 bottom-1 h-px bg-gradient-to-r from-blue-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#work"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-3 py-2"
            >
              View Work
            </a>
            <motion.button
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ x: springX, y: springY }}
              className="relative overflow-hidden bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Book Free Call
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>

          {/* Mobile toggle */}
          <motion.button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 mt-1 border-t border-gray-100">
                <button className="w-full bg-gray-900 text-white text-sm font-semibold px-5 py-3 rounded-xl mt-1">
                  Book Free Strategy Call
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ─── Background ─────────────────────────────────────────────────────────────
// Lightweight version: fewer blurred layers, no full-viewport rotating blob
// (rotation of a giant blurred element forces continuous repaint), fewer
// particles, smaller blur radii. All purely CSS-driven (GPU-friendly
// transform/opacity only) — no JS recalculation per frame.

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-white to-white" />

      <motion.div
        className="absolute -top-24 -right-24 w-[280px] sm:w-[460px] lg:w-[600px] h-[280px] sm:h-[460px] lg:h-[600px] rounded-full bg-gradient-to-br from-blue-200/30 via-violet-200/20 to-transparent blur-2xl will-change-transform"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-[220px] sm:w-[340px] lg:w-[420px] h-[220px] sm:h-[340px] lg:h-[420px] rounded-full bg-gradient-to-tr from-cyan-200/25 via-blue-100/20 to-transparent blur-2xl will-change-transform"
        animate={{ scale: [1, 1.07, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Grid overlay — static, no animation cost */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Floating particles — fewer, CSS keyframe driven via the global `animate-float` class */}
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-blue-400/40 animate-float will-change-transform"
          style={{
            left: `${18 + i * 20}%`,
            top: `${22 + (i % 2) * 30}%`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${4 + i * 0.6}s`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Only used for a subtle parallax fade — capped range keeps it cheap.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % ANIMATED_WORDS.length), 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const currentWord = ANIMATED_WORDS[wordIndex];

  const containerVariants: Variants = useMemo(
    () => ({
      hidden: {},
      visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
    }),
    []
  );

  const childVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
      },
    }),
    []
  );

  return (
    <>
      {/* <Navbar /> */}
      <section
        ref={sectionRef}
        aria-label="Hero section"
        className="relative flex items-center overflow-hidden"
      >
        <HeroBackground />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

            {/* ─── LEFT COLUMN ─── */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col"
            >
              {/* Eyebrow badge */}
              <motion.div variants={childVariants} className="mb-5 sm:mb-6">
                <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-[11px] sm:text-xs font-semibold px-3 sm:px-3.5 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  Marketing Agency · Results-Driven
                </span>
              </motion.div>

              {/* Main headline */}
              <motion.h1
                variants={childVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px] font-extrabold text-gray-900 leading-[1.08] sm:leading-[1.05] tracking-tight text-center sm:text-left"
              >
                We Help Brands{" "}
                <span className="block mt-1">
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
                </span>
                <span className="block mt-1">Faster.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={childVariants}
                className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl text-center sm:text-left mx-auto sm:mx-0"
              >
                From SEO and Performance Ads to AI Automation and Conversion Engineering —
                we build the exact marketing infrastructure your business needs to generate consistent leads
                and compound revenue.
              </motion.p>

              {/* Service pills */}
              <motion.div variants={childVariants} className="flex flex-wrap gap-2 mt-5 justify-center sm:justify-start">
                {["SEO", "Paid Ads", "Branding", "Web Dev", "AI Automation", "Lead Gen"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-gray-500 bg-gray-100 hover:bg-blue-50 hover:text-blue-600 px-3 py-1 rounded-full border border-gray-200/80 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-3 mt-8 w-full sm:w-auto">
                <motion.a
                  href="#contact"
                  className="relative inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold text-sm px-6 py-3.5 rounded-xl overflow-hidden group shadow-lg shadow-gray-900/20 w-full sm:w-auto"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Free Strategy Call
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>

                <motion.a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 text-gray-700 font-semibold text-sm px-6 py-3.5 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all group w-full sm:w-auto"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Our Work
                  <ArrowRight size={15} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                </motion.a>
              </motion.div>

              {/* Trust badges */}
              <motion.div variants={childVariants} className="flex items-center gap-3 mt-6 justify-center sm:justify-start">
                <div className="flex -space-x-2">
                  {["bg-blue-400", "bg-violet-400", "bg-cyan-400", "bg-emerald-400"].map((color, i) => (
                    <div
                      key={i}
                      className={`w-7 h-7 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-[10px] font-bold`}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    <span className="font-semibold text-gray-700">4.9/5</span> from 150+ clients
                  </p>
                </div>
              </motion.div>

              {/* Dashboard on mobile/tablet — shown right after CTAs */}
              <div className="flex lg:hidden justify-center items-center mt-10">
                <FloatingDashboard />
              </div>

              {/* Stats row */}
              <div ref={statsRef}>
                <motion.div
                  variants={childVariants}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mt-8 pt-8 border-t border-gray-100 text-center sm:text-left"
                >
                  {STATS.map((stat, i) => (
                    <AnimatedStat key={stat.label} {...stat} delay={0.5 + i * 0.08} start={statsVisible} />
                  ))}
                </motion.div>
              </div>

              {/* Logo marquee */}
              <motion.div variants={childVariants}>
                <LogoMarquee />
              </motion.div>
            </motion.div>

            {/* ─── RIGHT COLUMN (desktop/large screens only) ─── */}
            <div className="hidden lg:flex justify-center items-center">
              <FloatingDashboard />
            </div>

          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="hidden sm:flex absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-gray-400"
          aria-hidden="true"
        >
          <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}