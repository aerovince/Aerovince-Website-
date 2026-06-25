// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import {
//     Rocket, Target, TrendingUp, ArrowRight, Zap, Globe, Users, Star,
//     Sparkles, CheckCircle, Briefcase, Award, Heart, X, Phone, Mail,
//     MessageCircle, Code, Palette, BarChart2, Share2, Search, Video,
//     Bot, Megaphone, ChevronDown, ChevronUp, Shield, Clock, ExternalLink,
//     Play, ArrowUpRight, Layers, LineChart,
// } from "lucide-react";

// // ─── Animated Counter ────────────────────────────────────────────────────────
// function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
//     const [count, setCount] = useState(0);
//     const ref = useRef<HTMLSpanElement>(null);
//     const inView = useInView(ref, { once: true });
//     useEffect(() => {
//         if (!inView) return;
//         let start = 0;
//         const timer = setInterval(() => {
//             start += to / 80;
//             if (start >= to) { setCount(to); clearInterval(timer); }
//             else setCount(Math.floor(start));
//         }, 16);
//         return () => clearInterval(timer);
//     }, [inView, to]);
//     return <span ref={ref}>{prefix}{count}{suffix}</span>;
// }

// // ─── Data ────────────────────────────────────────────────────────────────────
// const TRUST_ITEMS = [
//     "Startup Focused",
//     "End-to-End Growth Support",
//     "Brand + Technology + Marketing",
//     "Long-Term Growth Partner",
// ];

// const PROBLEMS = [
//     { title: "No Professional Website", desc: "First impressions matter. Without a solid web presence, you lose credibility before the conversation starts.", icon: Globe },
//     { title: "Weak Branding", desc: "If your brand doesn't stand out, you're competing on price alone — a race to the bottom.", icon: Palette },
//     { title: "Low Visibility", desc: "Great products go unnoticed without the right SEO, content, and distribution strategy.", icon: Search },
//     { title: "Poor Lead Generation", desc: "Random social posts don't build pipelines. You need systems that generate qualified leads consistently.", icon: Target },
//     { title: "Inconsistent Content", desc: "Posting once in a while won't build trust. Brands that win show up consistently with value.", icon: Video },
//     { title: "No Marketing Strategy", desc: "Tactics without strategy is noise. Most startups try everything and see results from nothing.", icon: Layers },
//     { title: "Limited Resources", desc: "You can't hire 6 specialists. You need one partner who brings the entire stack.", icon: Users },
//     { title: "Expensive In-House Hiring", desc: "A marketing team costs ₹5–15L/month. A growth partner delivers more at a fraction of that.", icon: Briefcase },
// ];

// const SERVICES = [
//     { icon: Palette, title: "Brand Identity", desc: "Build a memorable brand that customers trust — logo, colors, voice, and positioning that sets you apart.", tag: "Foundation", color: "blue" },
//     { icon: Code, title: "Website Development", desc: "Fast, scalable, conversion-focused websites. Built on Next.js — the same stack powering MarkTale itself.", tag: "Essential", color: "white" },
//     { icon: Share2, title: "Social Media Growth", desc: "Build awareness, community, and loyalty across Instagram, LinkedIn, YouTube, and beyond.", tag: "Visibility", color: "blue" },
//     { icon: Search, title: "SEO", desc: "Rank higher on Google, generate consistent organic traffic, and reduce your dependence on paid ads.", tag: "Long-term", color: "white" },
//     { icon: BarChart2, title: "Performance Marketing", desc: "ROI-focused campaigns on Meta and Google. Every rupee tracked, every campaign optimised.", tag: "High Impact", color: "blue" },
//     { icon: Video, title: "Content & Storytelling", desc: "Create authority through articles, reels, case studies, and videos that attract and convert.", tag: "Authority", color: "white" },
//     { icon: Bot, title: "AI Automation", desc: "Automate repetitive workflows and scale efficiently with smart AI-powered systems.", tag: "Future-Ready", color: "blue" },
//     { icon: Megaphone, title: "Lead Generation", desc: "Build predictable, scalable pipelines — funnels, CRM setup, retargeting, and nurture flows.", tag: "Revenue", color: "white" },
// ];

// const BRANDS = [
//     { id: "mentorleap", name: "MentorLeap", image: "/Feature_logos/mentorleep.png", category: "EdTech", result: "10k+ Professionals", growth: "400%" },
//     { id: "delhi059", name: "Delhi059", image: "/delhi059-logo.jpg", category: "Restaurant · Canada", result: "650+ Reviews", growth: "500%" },
//     { id: "local-ride", name: "Local Ride", image: "/Feature_logos/localride.jpg", category: "Transportation · Canada", result: "100k+ Rides", growth: "300%" },
//     { id: "bg-foods", name: "BG Foods", image: "/Feature_logos/bgfoods.jpeg", category: "E-commerce · Canada/USA", result: "50k+ Orders", growth: "1000%" },
//     { id: "dee-cee-accessories", name: "Dee Cee Accessories", image: "/Feature_logos/deecee.jpg", category: "Jewellery · India", result: "10× Sales", growth: "900%" },
//     { id: "cabtale", name: "CabTale", image: "/Feature_logos/cabtale.jpg", category: "Mobility · India", result: "1M+ Downloads", growth: "800%" },
//     { id: "last-mile-care", name: "Last Mile Care", image: "/Feature_logos/lastmilecare.jpeg", category: "NGO · India", result: "50k+ Reached", growth: "200%" },
//     { id: "promac-advisory", name: "Promac Advisory", image: "/Feature_logos/promac.png", category: "Real Estate · Jaipur", result: "Premium Brand", growth: "350%" },
//     { id: "biryani-bar", name: "Biryani Bar", image: "/Feature_logos/biryanibar.jpg", category: "Hospitality · India", result: "3 Outlets", growth: "450%" },
// ];

// const CASE_STUDIES = [
//     {
//         id: "delhi059",
//         name: "Delhi059",
//         industry: "Restaurant · Canada",
//         image: "/delhi059-logo.jpg",
//         tagline: "Canada's culinary icon — built without a rupee in ad spend",
//         challenge: "New restaurant in a saturated Canadian market. Zero reviews, zero digital presence, zero ad budget.",
//         work: ["Local SEO", "Google Business", "UGC Strategy", "Community Marketing", "Photography"],
//         stats: [
//             { value: "650+", label: "Google Reviews" },
//             { value: "4.7★", label: "Average Rating" },
//             { value: "#1", label: "Local Map Rank" },
//         ],
//         testimonial: { quote: "MarkTale didn't just market our restaurant — they made us the go-to place for the entire Indian community.", author: "Owner, Delhi059 Canada" },
//         color: "blue",
//     },
//     {
//         id: "local-ride",
//         name: "Local Ride",
//         industry: "Transportation · Canada",
//         image: "/Feature_logos/localride.jpg",
//         tagline: "100,000+ rides. Zero commission for drivers.",
//         challenge: "Building a two-sided rideshare marketplace from scratch against Uber and Lyft, with limited launch capital.",
//         work: ["Product Strategy", "App Development", "Brand Identity", "Driver Acquisition", "City Launch Campaigns"],
//         stats: [
//             { value: "100k+", label: "Rides Completed" },
//             { value: "2,000+", label: "Active Drivers" },
//             { value: "3", label: "Cities Launched" },
//         ],
//         testimonial: null,
//         color: "white",
//     },
//     {
//         id: "bg-foods",
//         name: "BG Foods",
//         industry: "E-commerce · Canada/USA",
//         image: "/Feature_logos/bgfoods.jpeg",
//         tagline: "50,000+ orders. Built entirely from scratch.",
//         challenge: "From home-kitchen idea to multi-country operation with no digital infrastructure, no supply chain, no audience.",
//         work: ["Brand Identity", "Shopify Store", "Amazon/Flipkart Listings", "Influencer Marketing", "Email Growth"],
//         stats: [
//             { value: "50k+", label: "Orders Fulfilled" },
//             { value: "40+", label: "Retail Stores" },
//             { value: "1000%", label: "Revenue Growth" },
//         ],
//         testimonial: null,
//         color: "blue",
//     },
// ];

// const TIMELINE = [
//     { step: "01", title: "Discovery", desc: "Deep dive into your business, audience, and competitive landscape. We learn your world before building in it." },
//     { step: "02", title: "Strategy", desc: "A clear growth roadmap with measurable KPIs — no guesswork, no vague deliverables." },
//     { step: "03", title: "Brand Building", desc: "Visual identity, tone of voice, and positioning that makes you unmistakable in your market." },
//     { step: "04", title: "Digital Presence", desc: "Website, social media, SEO setup — all channels built to convert, not just exist." },
//     { step: "05", title: "Marketing & Growth", desc: "Content, ads, lead generation, and community — consistent execution that compounds over time." },
//     { step: "06", title: "Scale & Optimise", desc: "Data-driven iteration, automation, and expansion into new channels as you grow." },
// ];

// const COMPARISONS = [
//     { agency: "Sell services", marktale: "Builds growth systems" },
//     { agency: "Focus on deliverables", marktale: "Focuses on business outcomes" },
//     { agency: "Work project to project", marktale: "Acts as a long-term growth partner" },
//     { agency: "One-size-fits-all packages", marktale: "Custom strategy for each startup" },
//     { agency: "Report vanity metrics", marktale: "Reports revenue impact" },
// ];

// const FAQS = [
//     { q: "How do you work with startups?", a: "We start with a free strategy call to understand your business, stage, and goals. Then we build a custom roadmap — no generic packages. We embed ourselves as your growth team, not just a vendor." },
//     { q: "What industries do you work with?", a: "We've built brands across EdTech, Restaurant, Transportation, E-commerce, Real Estate, NGOs, Food & FMCG, and more. If you're building something that needs to grow, we've probably done something like it." },
//     { q: "Do you offer branding and website development together?", a: "Absolutely — in fact, that's our recommended starting point. Brand identity and website go hand in hand. We deliver both with a single unified strategy." },
//     { q: "Can you manage our marketing completely?", a: "Yes. Our Growth and Scale plans are designed to be your complete marketing function — from strategy to execution to reporting. No need to hire in-house." },
//     { q: "How do we get started?", a: "Book a free 30-minute strategy call. We'll audit your current digital presence, identify the biggest growth levers, and give you a clear next step — whether you work with us or not." },
// ];

// // ─── Main Page ────────────────────────────────────────────────────────────────
// export default function StartupGrowthPage() {
//     const [activeFaq, setActiveFaq] = useState<number | null>(null);
//     const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" });
//     const [submitted, setSubmitted] = useState(false);
//     const [submitting, setSubmitting] = useState(false);
//     const heroRef = useRef<HTMLDivElement>(null);
//     const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
//     const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
//     const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setSubmitting(true);
//         try {
//             await fetch("/api/enquiries", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ ...formData, source: "startup-growth-page" }),
//             });
//         } catch (_) { }
//         setSubmitting(false);
//         setSubmitted(true);
//         setTimeout(() => setSubmitted(false), 5000);
//         setFormData({ name: "", phone: "", email: "", service: "", message: "" });
//     };

//     const fadeUp = {
//         initial: { opacity: 0, y: 40 },
//         whileInView: { opacity: 1, y: 0 },
//         viewport: { once: true },
//         transition: { duration: 0.7 },
//     };

//     return (
//         <div className="bg-black text-white overflow-x-hidden font-body">

//             {/* ── HERO ─────────────────────────────────────────────────────────── */}
//             <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
//                 {/* Parallax bg */}
//                 <motion.div style={{ y: heroY }} className="absolute inset-0 pointer-events-none">
//                     <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-blue-950/30" />
//                     {/* Grid */}
//                     <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
//                     {/* Glows */}
//                     <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
//                     <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-cyan-600/8 rounded-full blur-[100px]" />
//                 </motion.div>

//                 {/* Floating orbs */}
//                 {[
//                     { x: "10%", y: "20%", size: 3, delay: 0 },
//                     { x: "85%", y: "15%", size: 2, delay: 0.5 },
//                     { x: "70%", y: "70%", size: 4, delay: 1 },
//                     { x: "20%", y: "75%", size: 2, delay: 1.5 },
//                     { x: "50%", y: "10%", size: 3, delay: 0.8 },
//                 ].map((orb, i) => (
//                     <motion.div
//                         key={i}
//                         className="absolute rounded-full bg-blue-400/30"
//                         style={{ left: orb.x, top: orb.y, width: orb.size * 4, height: orb.size * 4 }}
//                         animate={{ y: [-12, 12, -12], opacity: [0.2, 0.7, 0.2] }}
//                         transition={{ duration: 4 + i * 0.6, repeat: Infinity, delay: orb.delay }}
//                     />
//                 ))}

//                 <motion.div style={{ opacity: heroOpacity }} className="relative z-10 w-full">
//                     <div className="container mx-auto px-6 max-w-7xl pt-32 pb-20">
//                         <div className="max-w-4xl mx-auto text-center">

//                             {/* Badge */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5 }}
//                                 className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
//                             >
//                                 <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
//                                 <span className="text-sm text-white/70 font-medium tracking-wide">STARTUP GROWTH PROGRAM</span>
//                                 <Sparkles className="w-3.5 h-3.5 text-blue-400" />
//                             </motion.div>

//                             {/* Headline */}
//                             <motion.h1
//                                 initial={{ opacity: 0, y: 30 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.7, delay: 0.1 }}
//                                 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading leading-[1.05] tracking-tight mb-8"
//                             >
//                                 Turn Your Startup
//                                 <span className="block mt-2">
//                                     Into A{" "}
//                                     <span className="relative inline-block">
//                                         <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
//                                             Brand
//                                         </span>
//                                         <motion.div
//                                             className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
//                                             initial={{ scaleX: 0 }}
//                                             animate={{ scaleX: 1 }}
//                                             transition={{ delay: 0.9, duration: 0.6 }}
//                                         />
//                                     </span>{" "}
//                                     People
//                                 </span>
//                                 <span className="block mt-2 text-white/90">Remember</span>
//                             </motion.h1>

//                             {/* Sub */}
//                             <motion.p
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: 0.3 }}
//                                 className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"
//                             >
//                                 From branding and websites to content, SEO, paid ads, and growth systems — we help startups launch, grow, and scale with confidence.
//                             </motion.p>

//                             {/* CTAs */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: 0.45 }}
//                                 className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
//                             >
//                                 <motion.a
//                                     href="#contact"
//                                     whileHover={{ scale: 1.04 }}
//                                     whileTap={{ scale: 0.97 }}
//                                     className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-100 transition-all shadow-2xl shadow-white/10"
//                                 >
//                                     <Phone className="w-4 h-4" />
//                                     Book Free Strategy Call
//                                 </motion.a>
//                                 <motion.a
//                                     href="#audit"
//                                     whileHover={{ scale: 1.04 }}
//                                     whileTap={{ scale: 0.97 }}
//                                     className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full text-sm hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm"
//                                 >
//                                     <Target className="w-4 h-4" />
//                                     Get Startup Growth Audit
//                                 </motion.a>
//                             </motion.div>

//                             {/* Trust badges */}
//                             <motion.div
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{ delay: 0.6, duration: 0.6 }}
//                                 className="flex flex-wrap justify-center gap-3"
//                             >
//                                 {TRUST_ITEMS.map((item, i) => (
//                                     <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
//                                         <CheckCircle className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
//                                         {item}
//                                     </div>
//                                 ))}
//                             </motion.div>

//                             {/* Stats row */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.75, duration: 0.6 }}
//                                 className="grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-white/10 max-w-2xl mx-auto"
//                             >
//                                 {[
//                                     { val: 150, suffix: "+", label: "Brands Built" },
//                                     { val: 7, suffix: "+", label: "Years Experience" },
//                                     { val: 98, suffix: "%", label: "Client Retention" },
//                                 ].map((s, i) => (
//                                     <div key={i} className="text-center">
//                                         <div className="text-3xl md:text-4xl font-bold font-heading text-white mb-1">
//                                             <Counter to={s.val} suffix={s.suffix} />
//                                         </div>
//                                         <p className="text-xs text-white/40 uppercase tracking-wider">{s.label}</p>
//                                     </div>
//                                 ))}
//                             </motion.div>
//                         </div>
//                     </div>
//                 </motion.div>

//                 {/* Scroll indicator */}
//                 <motion.div
//                     className="absolute bottom-8 left-1/2 -translate-x-1/2"
//                     animate={{ y: [0, 10, 0] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                 >
//                     <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
//                         <div className="w-0.5 h-2 bg-white/40 rounded-full" />
//                     </div>
//                 </motion.div>
//             </section>

//             {/* ── PROBLEM ──────────────────────────────────────────────────────── */}
//             <section className="py-28 bg-[#080808] relative overflow-hidden">
//                 <div className="absolute inset-0 pointer-events-none">
//                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
//                 </div>
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <motion.div {...fadeUp} className="text-center mb-16">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5 mb-6">
//                             <span className="text-red-400 text-xs font-semibold uppercase tracking-widest">The Problem</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
//                             Why Most Startups
//                             <span className="block text-white/30 mt-2">Struggle To Grow</span>
//                         </h2>
//                     </motion.div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                         {PROBLEMS.map((p, i) => {
//                             const Icon = p.icon;
//                             return (
//                                 <motion.div
//                                     key={i}
//                                     initial={{ opacity: 0, y: 30 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ delay: i * 0.06, duration: 0.5 }}
//                                     whileHover={{ y: -6, borderColor: "rgba(239,68,68,0.3)" }}
//                                     className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300 cursor-default"
//                                 >
//                                     <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
//                                         <Icon className="w-4 h-4 text-red-400" />
//                                     </div>
//                                     <h3 className="font-bold text-white text-sm mb-2 font-heading">{p.title}</h3>
//                                     <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>

//                     {/* Solution bridge */}
//                     <motion.div
//                         {...fadeUp}
//                         className="mt-16 relative rounded-3xl overflow-hidden border border-blue-500/20 bg-gradient-to-r from-blue-950/50 via-blue-900/30 to-cyan-950/50 p-10 text-center"
//                     >
//                         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
//                         <div className="relative z-10">
//                             <Sparkles className="w-8 h-8 text-blue-400 mx-auto mb-4" />
//                             <h3 className="text-2xl md:text-3xl font-bold font-heading mb-3">
//                                 MarkTale is the solution to all of this.
//                             </h3>
//                             <p className="text-white/50 text-base max-w-xl mx-auto">
//                                 One growth partner. Every function covered. Built specifically for startups who want to move fast and grow sustainably.
//                             </p>
//                         </div>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* ── SERVICES ─────────────────────────────────────────────────────── */}
//             <section className="py-28 bg-black relative" id="services">
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <motion.div {...fadeUp} className="text-center mb-16">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
//                             <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">What We Build</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
//                             Everything Your Startup
//                             <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">
//                                 Needs To Grow
//                             </span>
//                         </h2>
//                     </motion.div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                         {SERVICES.map((s, i) => {
//                             const Icon = s.icon;
//                             const isDark = s.color === "white";
//                             return (
//                                 <motion.div
//                                     key={i}
//                                     initial={{ opacity: 0, y: 30 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ delay: i * 0.07, duration: 0.5 }}
//                                     whileHover={{ y: -8 }}
//                                     className={`group relative p-6 rounded-2xl border transition-all duration-300 ${isDark
//                                             ? "bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.08] hover:border-white/20"
//                                             : "bg-blue-950/30 border-blue-500/20 hover:bg-blue-950/50 hover:border-blue-400/30"
//                                         }`}
//                                 >
//                                     <div className="flex items-start justify-between mb-5">
//                                         <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${isDark ? "bg-white/10" : "bg-blue-500/20"}`}>
//                                             <Icon className={`w-5 h-5 ${isDark ? "text-white/70" : "text-blue-400"}`} />
//                                         </div>
//                                         <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${isDark ? "bg-white/10 text-white/40" : "bg-blue-500/20 text-blue-400"}`}>
//                                             {s.tag}
//                                         </span>
//                                     </div>
//                                     <h3 className="font-bold text-white text-sm mb-2 font-heading leading-snug">{s.title}</h3>
//                                     <p className="text-white/40 text-xs leading-relaxed">{s.desc}</p>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* ── BRAND WALL ───────────────────────────────────────────────────── */}
//             <section className="py-20 bg-[#080808] border-y border-white/[0.06]">
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <motion.div {...fadeUp} className="text-center mb-12">
//                         <p className="text-white/30 text-xs uppercase tracking-[0.3em] mb-3">Trusted By Growing Brands</p>
//                         <h2 className="text-2xl md:text-3xl font-bold font-heading text-white/80">Brands We Have Built</h2>
//                     </motion.div>

//                     <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-9 gap-4">
//                         {BRANDS.map((b, i) => (
//                             <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, scale: 0.9 }}
//                                 whileInView={{ opacity: 1, scale: 1 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: i * 0.05 }}
//                                 whileHover={{ scale: 1.08, borderColor: "rgba(255,255,255,0.2)" }}
//                                 className="group relative aspect-square rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center p-3 cursor-pointer overflow-hidden transition-all duration-300"
//                             >
//                                 <Link href={`/portfolio/${b.id}`}>
//                                     <Image
//                                         src={b.image}
//                                         alt={b.name}
//                                         fill
//                                         className="object-contain p-3 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
//                                     />
//                                     <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
//                                         <div>
//                                             <p className="text-white text-[9px] font-bold leading-tight">{b.name}</p>
//                                             <p className="text-blue-400 text-[8px]">{b.growth} growth</p>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ── CASE STUDIES ─────────────────────────────────────────────────── */}
//             <section className="py-28 bg-black" id="brands">
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <motion.div {...fadeUp} className="text-center mb-16">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
//                             <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Case Studies</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
//                             Real Brands.
//                             <span className="block text-white/30 mt-2">Real Growth Stories.</span>
//                         </h2>
//                     </motion.div>

//                     <div className="space-y-6">
//                         {CASE_STUDIES.map((cs, i) => (
//                             <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, y: 40 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: i * 0.12, duration: 0.6 }}
//                                 className={`group relative rounded-3xl border overflow-hidden transition-all duration-300 ${cs.color === "blue"
//                                         ? "bg-blue-950/20 border-blue-500/20 hover:border-blue-400/30"
//                                         : "bg-white/[0.03] border-white/[0.08] hover:border-white/20"
//                                     }`}
//                             >
//                                 <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
//                                     {/* Brand */}
//                                     <div className="flex flex-col gap-5">
//                                         <div className="relative w-16 h-16 rounded-2xl bg-white/10 overflow-hidden">
//                                             <Image src={cs.image} alt={cs.name} fill className="object-contain p-2" />
//                                         </div>
//                                         <div>
//                                             <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{cs.industry}</p>
//                                             <h3 className="text-2xl font-bold font-heading text-white mb-2">{cs.name}</h3>
//                                             <p className="text-white/50 text-sm italic">&ldquo;{cs.tagline}&rdquo;</p>
//                                         </div>
//                                         <Link
//                                             href={`/portfolio/${cs.id}`}
//                                             className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
//                                         >
//                                             View Full Case Study <ArrowUpRight className="w-4 h-4" />
//                                         </Link>
//                                     </div>

//                                     {/* Details */}
//                                     <div className="space-y-5">
//                                         <div>
//                                             <p className="text-white/30 text-xs uppercase tracking-widest mb-2">The Challenge</p>
//                                             <p className="text-white/70 text-sm leading-relaxed">{cs.challenge}</p>
//                                         </div>
//                                         <div>
//                                             <p className="text-white/30 text-xs uppercase tracking-widest mb-2">What We Did</p>
//                                             <div className="flex flex-wrap gap-1.5">
//                                                 {cs.work.map((w, j) => (
//                                                     <span key={j} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
//                                                         {w}
//                                                     </span>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Stats */}
//                                     <div className="grid grid-cols-3 gap-4">
//                                         {cs.stats.map((stat, j) => (
//                                             <div key={j} className={`text-center p-4 rounded-2xl ${cs.color === "blue" ? "bg-blue-500/10" : "bg-white/5"}`}>
//                                                 <div className="text-2xl font-bold font-heading text-white mb-1">{stat.value}</div>
//                                                 <div className="text-white/40 text-xs">{stat.label}</div>
//                                             </div>
//                                         ))}
//                                         {cs.testimonial && (
//                                             <div className="col-span-3 mt-3 p-4 rounded-2xl bg-white/5 border border-white/10">
//                                                 <p className="text-white/60 text-xs italic mb-2">&ldquo;{cs.testimonial.quote}&rdquo;</p>
//                                                 <p className="text-white/30 text-xs">— {cs.testimonial.author}</p>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>

//                     <motion.div {...fadeUp} className="text-center mt-10">
//                         <Link
//                             href="/portfolio"
//                             className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/70 hover:text-white hover:border-white/40 rounded-full text-sm font-semibold transition-all"
//                         >
//                             View All Projects <ArrowRight className="w-4 h-4" />
//                         </Link>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* ── TIMELINE ─────────────────────────────────────────────────────── */}
//             <section className="py-28 bg-[#080808] relative overflow-hidden">
//                 <div className="absolute inset-0 pointer-events-none">
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px]" />
//                 </div>
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <motion.div {...fadeUp} className="text-center mb-16">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
//                             <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Our Process</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
//                             How We Build
//                             <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">
//                                 Growth Stories
//                             </span>
//                         </h2>
//                     </motion.div>

//                     <div className="relative">
//                         {/* Line */}
//                         <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-px hidden sm:block" />

//                         <div className="space-y-8">
//                             {TIMELINE.map((t, i) => (
//                                 <motion.div
//                                     key={i}
//                                     initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
//                                     whileInView={{ opacity: 1, x: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ delay: i * 0.1, duration: 0.6 }}
//                                     className={`relative flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
//                                 >
//                                     {/* Card */}
//                                     <div className="flex-1 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/15 transition-all">
//                                         <div className="flex items-center gap-4 mb-3">
//                                             <span className="text-4xl font-bold font-heading text-white/10">{t.step}</span>
//                                             <h3 className="text-lg font-bold font-heading text-white">{t.title}</h3>
//                                         </div>
//                                         <p className="text-white/40 text-sm leading-relaxed">{t.desc}</p>
//                                     </div>

//                                     {/* Center dot */}
//                                     <div className="hidden md:flex w-4 h-4 rounded-full bg-blue-500 border-2 border-blue-300 flex-shrink-0 shadow-[0_0_12px_rgba(59,130,246,0.6)]" />

//                                     {/* Spacer */}
//                                     <div className="flex-1 hidden md:block" />
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ── IMPACT METRICS ───────────────────────────────────────────────── */}
//             <section className="py-28 bg-black">
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <motion.div {...fadeUp} className="text-center mb-16">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
//                             <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Results & Impact</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl font-bold font-heading">
//                             Focused On Outcomes,
//                             <span className="block text-white/30 mt-2">Not Just Deliverables</span>
//                         </h2>
//                     </motion.div>

//                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//                         {[
//                             { val: 150, suffix: "+", label: "Brands Built", icon: Briefcase },
//                             { val: 98, suffix: "%", label: "Client Retention", icon: Heart },
//                             { val: 7, suffix: "+", label: "Years Experience", icon: Award },
//                             { val: 200, suffix: "%", label: "Avg Growth", icon: TrendingUp },
//                             { val: 50, suffix: "k+", label: "Leads Generated", icon: Target },
//                             { val: 4, suffix: ".9★", label: "Client Rating", icon: Star },
//                         ].map((m, i) => {
//                             const Icon = m.icon;
//                             return (
//                                 <motion.div
//                                     key={i}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ delay: i * 0.08 }}
//                                     whileHover={{ y: -5, borderColor: "rgba(59,130,246,0.3)" }}
//                                     className="group text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.06] transition-all"
//                                 >
//                                     <Icon className="w-5 h-5 text-blue-400 mx-auto mb-3 opacity-60 group-hover:opacity-100 transition-opacity" />
//                                     <div className="text-3xl font-bold font-heading text-white mb-1">
//                                         <Counter to={m.val} suffix={m.suffix} />
//                                     </div>
//                                     <p className="text-white/30 text-xs">{m.label}</p>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* ── COMPARISON ───────────────────────────────────────────────────── */}
//             <section className="py-28 bg-[#080808] relative overflow-hidden">
//                 <div className="container mx-auto px-6 max-w-5xl">
//                     <motion.div {...fadeUp} className="text-center mb-16">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
//                             <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Why MarkTale</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl font-bold font-heading">
//                             More Than
//                             <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">An Agency</span>
//                         </h2>
//                     </motion.div>

//                     {/* Header */}
//                     <div className="grid grid-cols-2 gap-4 mb-4 px-4">
//                         <div className="text-center text-xs uppercase tracking-[0.2em] text-white/20 font-semibold pb-3 border-b border-white/10">
//                             Most Agencies
//                         </div>
//                         <div className="text-center text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold pb-3 border-b border-blue-500/30">
//                             MarkTale
//                         </div>
//                     </div>

//                     <div className="space-y-3">
//                         {COMPARISONS.map((c, i) => (
//                             <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, x: -20 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: i * 0.08 }}
//                                 className="grid grid-cols-2 gap-4"
//                             >
//                                 <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-3">
//                                     <X className="w-4 h-4 text-red-500/60 flex-shrink-0" />
//                                     <span className="text-white/30 text-sm">{c.agency}</span>
//                                 </div>
//                                 <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-500/20 flex items-center gap-3">
//                                     <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
//                                     <span className="text-white/80 text-sm font-medium">{c.marktale}</span>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
//             <section className="py-28 bg-black">
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <motion.div {...fadeUp} className="text-center mb-16">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
//                             <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Client Love</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl font-bold font-heading">
//                             What Founders
//                             <span className="block text-white/30 mt-2">Say About Us</span>
//                         </h2>
//                         <div className="flex items-center justify-center gap-2 mt-6">
//                             {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
//                             <span className="text-white/40 text-sm ml-2">4.9 · 150+ Founders</span>
//                         </div>
//                     </motion.div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//                         {[
//                             { name: "Owner, Delhi059 Canada", role: "Restaurant · Canada", quote: "MarkTale didn't just market our restaurant — they made us the go-to place for the entire Indian community in our city. 650+ reviews with zero ad spend.", achievement: "650+ Reviews", initials: "D0" },
//                             { name: "Founder, MentorLeap", role: "EdTech · India", quote: "They rebuilt our entire brand narrative and built an SEO engine that reduced our paid CAC by 60%. Our growth went from stagnant to 400% YoY.", achievement: "400% Growth", initials: "ML" },
//                             { name: "CEO, BG Foods", role: "E-commerce · Canada", quote: "From zero to 50,000 orders. MarkTale built everything — brand, store, listings, marketing. They are genuinely a full-stack growth team.", achievement: "50k+ Orders", initials: "BG" },
//                         ].map((t, i) => (
//                             <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: i * 0.12, duration: 0.6 }}
//                                 whileHover={{ y: -6 }}
//                                 className="p-7 rounded-3xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all duration-300"
//                             >
//                                 <div className="flex gap-0.5 mb-5">
//                                     {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
//                                 </div>
//                                 <p className="text-white/60 text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-center gap-3">
//                                         <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
//                                             {t.initials}
//                                         </div>
//                                         <div>
//                                             <p className="text-white font-semibold text-sm">{t.name}</p>
//                                             <p className="text-white/30 text-xs">{t.role}</p>
//                                         </div>
//                                     </div>
//                                     <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20">
//                                         {t.achievement}
//                                     </span>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ── FAQ ──────────────────────────────────────────────────────────── */}
//             <section className="py-28 bg-[#080808]">
//                 <div className="container mx-auto px-6 max-w-3xl">
//                     <motion.div {...fadeUp} className="text-center mb-14">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
//                             <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">FAQ</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl font-bold font-heading">
//                             Common
//                             <span className="block text-white/30 mt-2">Questions</span>
//                         </h2>
//                     </motion.div>

//                     <div className="space-y-2">
//                         {FAQS.map((faq, i) => (
//                             <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, y: 15 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: i * 0.07 }}
//                                 className={`rounded-2xl border transition-all duration-300 overflow-hidden ${activeFaq === i ? "border-blue-500/30 bg-blue-950/20" : "border-white/[0.07] bg-white/[0.02] hover:border-white/15"
//                                     }`}
//                             >
//                                 <button
//                                     onClick={() => setActiveFaq(activeFaq === i ? null : i)}
//                                     className="w-full flex items-center justify-between gap-4 p-5 text-left"
//                                 >
//                                     <span className="font-semibold text-white text-sm leading-snug font-heading">{faq.q}</span>
//                                     <div className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${activeFaq === i ? "bg-blue-500 border-blue-400" : "border-white/20"}`}>
//                                         {activeFaq === i
//                                             ? <ChevronUp className="w-3 h-3 text-white" />
//                                             : <ChevronDown className="w-3 h-3 text-white/50" />
//                                         }
//                                     </div>
//                                 </button>
//                                 <AnimatePresence>
//                                     {activeFaq === i && (
//                                         <motion.div
//                                             initial={{ height: 0, opacity: 0 }}
//                                             animate={{ height: "auto", opacity: 1 }}
//                                             exit={{ height: 0, opacity: 0 }}
//                                             transition={{ duration: 0.3 }}
//                                             className="overflow-hidden"
//                                         >
//                                             <p className="px-5 pb-5 text-white/40 text-sm leading-relaxed border-t border-white/[0.06] pt-4">{faq.a}</p>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ── CONTACT ──────────────────────────────────────────────────────── */}
//             <section className="py-28 bg-black" id="contact">
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
//                         {/* Left */}
//                         <motion.div {...fadeUp}>
//                             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
//                                 <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Let&apos;s Talk</span>
//                             </div>
//                             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
//                                 Your Startup
//                                 <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">
//                                     Deserves More
//                                 </span>
//                                 <span className="block text-white/90 mt-2">Than Just Marketing</span>
//                             </h2>
//                             <p className="text-white/40 text-base leading-relaxed mb-10 max-w-md">
//                                 Whether you&apos;re validating an idea, launching a product, or scaling an existing business — MarkTale helps you build a brand customers trust and remember.
//                             </p>

//                             <div className="space-y-4 mb-10">
//                                 {[
//                                     { icon: Phone, label: "Call / WhatsApp", value: "+91 99583 77050" },
//                                     { icon: Mail, label: "Email", value: "hello@marktaleworld.com" },
//                                     { icon: Globe, label: "Website", value: "marktaleworld.com" },
//                                 ].map((c, i) => {
//                                     const Icon = c.icon;
//                                     return (
//                                         <div key={i} className="flex items-center gap-4">
//                                             <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
//                                                 <Icon className="w-4 h-4 text-white/50" />
//                                             </div>
//                                             <div>
//                                                 <p className="text-white/30 text-xs uppercase tracking-wider">{c.label}</p>
//                                                 <p className="text-white text-sm font-medium">{c.value}</p>
//                                             </div>
//                                         </div>
//                                     );
//                                 })}
//                             </div>

//                             <motion.a
//                                 href="https://wa.me/919958377050?text=Hi%20MarkTale%2C%20I%20want%20a%20free%20startup%20growth%20strategy%20call"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 whileHover={{ scale: 1.04 }}
//                                 whileTap={{ scale: 0.97 }}
//                                 className="inline-flex items-center gap-3 px-7 py-4 bg-[#25D366] hover:bg-[#20bc5a] text-black font-bold rounded-full shadow-xl shadow-green-900/20 transition-all"
//                             >
//                                 <MessageCircle className="w-5 h-5" />
//                                 Chat On WhatsApp
//                             </motion.a>
//                         </motion.div>

//                         {/* Right form */}
//                         <motion.div {...fadeUp} id="audit">
//                             <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8">
//                                 <h3 className="text-xl font-bold font-heading text-white mb-2">Book Free Strategy Call</h3>
//                                 <p className="text-white/30 text-sm mb-7">30-minute session. We&apos;ll audit your digital presence and give you a clear growth roadmap — free.</p>

//                                 <AnimatePresence mode="wait">
//                                     {submitted ? (
//                                         <motion.div
//                                             key="success"
//                                             initial={{ opacity: 0, scale: 0.9 }}
//                                             animate={{ opacity: 1, scale: 1 }}
//                                             exit={{ opacity: 0 }}
//                                             className="text-center py-14"
//                                         >
//                                             <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                                                 <CheckCircle className="w-8 h-8 text-green-400" />
//                                             </div>
//                                             <h4 className="text-xl font-bold text-white mb-2 font-heading">Message Sent!</h4>
//                                             <p className="text-white/40 text-sm">We&apos;ll reach out within 24 hours.</p>
//                                         </motion.div>
//                                     ) : (
//                                         <motion.div key="form" className="space-y-4">
//                                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                                 {[
//                                                     { label: "Your Name *", key: "name", placeholder: "Full name", type: "text" },
//                                                     { label: "Phone / WhatsApp *", key: "phone", placeholder: "+91 98765 43210", type: "tel" },
//                                                 ].map((f) => (
//                                                     <div key={f.key}>
//                                                         <label className="block text-xs text-white/30 uppercase tracking-wider mb-1.5">{f.label}</label>
//                                                         <input
//                                                             type={f.type}
//                                                             placeholder={f.placeholder}
//                                                             value={formData[f.key as keyof typeof formData]}
//                                                             onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
//                                                             className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
//                                                         />
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                             <div>
//                                                 <label className="block text-xs text-white/30 uppercase tracking-wider mb-1.5">Email</label>
//                                                 <input
//                                                     type="email"
//                                                     placeholder="your@email.com"
//                                                     value={formData.email}
//                                                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                                                     className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
//                                                 />
//                                             </div>
//                                             <div>
//                                                 <label className="block text-xs text-white/30 uppercase tracking-wider mb-1.5">Service Needed</label>
//                                                 <select
//                                                     value={formData.service}
//                                                     onChange={(e) => setFormData({ ...formData, service: e.target.value })}
//                                                     className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all appearance-none"
//                                                     style={{ colorScheme: "dark" }}
//                                                 >
//                                                     <option value="" className="bg-gray-900">Select a service</option>
//                                                     {["Website Development", "Brand Identity", "Social Media", "SEO", "Performance Marketing", "Full Startup Package", "Not sure — needs discussion"].map(o => (
//                                                         <option key={o} value={o} className="bg-gray-900">{o}</option>
//                                                     ))}
//                                                 </select>
//                                             </div>
//                                             <div>
//                                                 <label className="block text-xs text-white/30 uppercase tracking-wider mb-1.5">Tell Us About Your Startup</label>
//                                                 <textarea
//                                                     rows={3}
//                                                     placeholder="What's your business? Any specific challenge?"
//                                                     value={formData.message}
//                                                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                                                     className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all resize-none"
//                                                 />
//                                             </div>
//                                             <motion.button
//                                                 onClick={handleSubmit}
//                                                 disabled={submitting}
//                                                 whileHover={{ scale: 1.02 }}
//                                                 whileTap={{ scale: 0.98 }}
//                                                 className="w-full flex items-center justify-center gap-2.5 py-4 bg-white text-black font-bold rounded-xl text-sm hover:bg-gray-100 transition-all disabled:opacity-60 shadow-xl shadow-white/5"
//                                             >
//                                                 <Rocket className="w-4 h-4" />
//                                                 {submitting ? "Sending..." : "Book Free Strategy Call"}
//                                             </motion.button>
//                                             <p className="text-center text-xs text-white/20 flex items-center justify-center gap-1.5">
//                                                 <Shield className="w-3 h-3" />
//                                                 No spam · Free · Response within 24 hours
//                                             </p>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </div>
//             </section>

//             {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
//             <section className="py-28 bg-[#080808] relative overflow-hidden">
//                 <div className="absolute inset-0 pointer-events-none">
//                     <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/8 rounded-full blur-[120px]" />
//                 </div>
//                 <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
//                     <motion.div {...fadeUp}>
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
//                             <Sparkles className="w-3.5 h-3.5 text-blue-400" />
//                             <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Start Today</span>
//                         </div>
//                         <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-[1.05] mb-6">
//                             Your Startup
//                             <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent mt-2">
//                                 Deserves More
//                             </span>
//                             <span className="block text-white/80 mt-2">Than Just Marketing</span>
//                         </h2>
//                         <p className="text-white/40 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
//                             Whether you&apos;re validating an idea, launching a product, or scaling — MarkTale helps you build a brand people trust and remember.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <motion.a
//                                 href="#contact"
//                                 whileHover={{ scale: 1.04 }}
//                                 whileTap={{ scale: 0.97 }}
//                                 className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-100 transition-all shadow-2xl shadow-white/10"
//                             >
//                                 <Phone className="w-4 h-4" />
//                                 Book Free Strategy Call
//                             </motion.a>
//                             <motion.a
//                                 href="https://wa.me/919958377050?text=Hi%20MarkTale%2C%20startup%20growth%20mein%20help%20chahiye"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 whileHover={{ scale: 1.04 }}
//                                 whileTap={{ scale: 0.97 }}
//                                 className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] text-black font-bold rounded-full text-sm hover:bg-[#20bc5a] transition-all"
//                             >
//                                 <MessageCircle className="w-4 h-4" />
//                                 Chat On WhatsApp
//                             </motion.a>
//                         </div>
//                     </motion.div>
//                 </div>
//             </section>

//         </div>
//     );
// }

//C:\New-Marktale-website\app\(main)\startup-growth\page.tsx

//priya 
// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import {
//     Rocket, Target, TrendingUp, ArrowRight, Globe, Users, Star,
//     Sparkles, CheckCircle, Briefcase, Award, Heart, X, Phone, Mail,
//     MessageCircle, Code, Palette, BarChart2, Share2, Search, Video,
//     Bot, Megaphone, ChevronDown, ChevronUp, Shield, ArrowUpRight,
//     Layers,
// } from "lucide-react";

// // ─── ENV VARIABLES ────────────────────────────────────────────────────────────
// const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919958377050";
// const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@marktaleworld.com";
// const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+91 99583 77050";
// const CONTACT_PHONE_RAW = process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW ?? "919958377050";

// // ─── Animated Counter ────────────────────────────────────────────────────────
// function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
//     const [count, setCount] = useState(0);
//     const ref = useRef<HTMLSpanElement>(null);
//     const inView = useInView(ref, { once: true });
//     useEffect(() => {
//         if (!inView) return;
//         let start = 0;
//         const timer = setInterval(() => {
//             start += to / 80;
//             if (start >= to) { setCount(to); clearInterval(timer); }
//             else setCount(Math.floor(start));
//         }, 16);
//         return () => clearInterval(timer);
//     }, [inView, to]);
//     return <span ref={ref}>{count}{suffix}</span>;
// }

// // ─── Data ─────────────────────────────────────────────────────────────────────
// const TRUST_ITEMS = [
//     "Startup Focused",
//     "End-to-End Growth Support",
//     "Brand + Technology + Marketing",
//     "Long-Term Growth Partner",
// ];

// const PROBLEMS = [
//     { title: "No Professional Website", desc: "First impressions matter. Without a solid web presence, you lose credibility before the conversation even starts.", icon: Globe },
//     { title: "Weak Branding", desc: "If your brand doesn't stand out, you're competing on price alone — a race to the bottom you can't win.", icon: Palette },
//     { title: "Low Visibility", desc: "Great products go unnoticed without the right SEO, content, and distribution strategy in place.", icon: Search },
//     { title: "Poor Lead Generation", desc: "Random social posts don't build pipelines. You need systems that generate qualified leads consistently.", icon: Target },
//     { title: "Inconsistent Content", desc: "Posting once in a while won't build trust. Brands that win show up consistently with real value.", icon: Video },
//     { title: "No Marketing Strategy", desc: "Tactics without strategy is noise. Most startups try everything and see results from nothing.", icon: Layers },
//     { title: "Limited Resources", desc: "You can't hire 6 specialists. You need one partner who brings the entire growth stack.", icon: Users },
//     { title: "Expensive In-House Teams", desc: "A full marketing team costs ₹5–15L/month. A growth partner delivers more at a fraction of that cost.", icon: Briefcase },
// ];

// const SERVICES = [
//     { icon: Palette, title: "Brand Identity", desc: "Build a memorable brand that customers trust — logo, colors, voice, and positioning that sets you apart.", tag: "Foundation", accent: "blue" },
//     { icon: Code, title: "Website Development", desc: "Fast, scalable, conversion-focused websites. Built on Next.js — the same stack powering MarkTale itself.", tag: "Essential", accent: "white" },
//     { icon: Share2, title: "Social Media Growth", desc: "Build awareness, community, and loyalty across Instagram, LinkedIn, YouTube, and beyond.", tag: "Visibility", accent: "blue" },
//     { icon: Search, title: "SEO", desc: "Rank higher on Google, generate consistent organic traffic, and reduce your dependence on paid ads.", tag: "Long-term", accent: "white" },
//     { icon: BarChart2, title: "Performance Marketing", desc: "ROI-focused campaigns on Meta and Google. Every rupee tracked, every campaign optimised for returns.", tag: "High Impact", accent: "blue" },
//     { icon: Video, title: "Content & Storytelling", desc: "Create authority through articles, reels, case studies, and videos that attract and convert your audience.", tag: "Authority", accent: "white" },
//     { icon: Bot, title: "AI Automation", desc: "Automate repetitive workflows and scale efficiently with smart AI-powered systems built for your business.", tag: "Future-Ready", accent: "blue" },
//     { icon: Megaphone, title: "Lead Generation", desc: "Build predictable, scalable pipelines — funnels, CRM setup, retargeting, and complete nurture flows.", tag: "Revenue", accent: "white" },
// ];

// const BRANDS = [
//     { id: "mentorleap", name: "MentorLeap", image: "/Feature_logos/mentorleep.png", growth: "400%" },
//     { id: "delhi059", name: "Delhi059", image: "/delhi059-logo.jpg", growth: "500%" },
//     { id: "local-ride", name: "Local Ride", image: "/Feature_logos/localride.jpg", growth: "300%" },
//     { id: "bg-foods", name: "BG Foods", image: "/Feature_logos/bgfoods.jpeg", growth: "1000%" },
//     { id: "dee-cee-accessories", name: "Dee Cee Accessories", image: "/Feature_logos/deecee.jpg", growth: "900%" },
//     { id: "cabtale", name: "CabTale", image: "/Feature_logos/cabtale.jpg", growth: "800%" },
//     { id: "last-mile-care", name: "Last Mile Care", image: "/Feature_logos/lastmilecare.jpeg", growth: "200%" },
//     { id: "promac-advisory", name: "Promac Advisory", image: "/Feature_logos/promac.png", growth: "350%" },
//     { id: "biryani-bar", name: "Biryani Bar", image: "/Feature_logos/biryanibar.jpg", growth: "450%" },
// ];

// const CASE_STUDIES = [
//     {
//         id: "delhi059", name: "Delhi059", industry: "Restaurant · Canada", image: "/delhi059-logo.jpg",
//         tagline: "Canada's culinary icon — built without a rupee in ad spend",
//         challenge: "New restaurant in a saturated Canadian market. Zero reviews, zero digital presence, zero ad budget.",
//         work: ["Local SEO", "Google Business", "UGC Strategy", "Community Marketing", "Photography"],
//         stats: [{ value: "650+", label: "Google Reviews" }, { value: "4.7★", label: "Average Rating" }, { value: "#1", label: "Local Map Rank" }],
//         quote: "MarkTale didn't just market our restaurant — they made us the go-to place for the entire Indian community.", quoteAuthor: "Owner, Delhi059 Canada",
//     },
//     {
//         id: "local-ride", name: "Local Ride", industry: "Transportation · Canada", image: "/Feature_logos/localride.jpg",
//         tagline: "100,000+ rides. Zero commission for drivers.",
//         challenge: "Building a two-sided rideshare marketplace from scratch against Uber and Lyft, with limited launch capital.",
//         work: ["Product Strategy", "App Development", "Brand Identity", "Driver Acquisition", "City Launch Campaigns"],
//         stats: [{ value: "100k+", label: "Rides Completed" }, { value: "2,000+", label: "Active Drivers" }, { value: "3", label: "Cities Launched" }],
//         quote: null, quoteAuthor: null,
//     },
//     {
//         id: "bg-foods", name: "BG Foods", industry: "E-commerce · Canada/USA", image: "/Feature_logos/bgfoods.jpeg",
//         tagline: "50,000+ orders. Built entirely from scratch.",
//         challenge: "From home-kitchen idea to multi-country operation with no digital infrastructure, no supply chain, no audience.",
//         work: ["Brand Identity", "Shopify Store", "Amazon Listings", "Influencer Marketing", "Email Growth"],
//         stats: [{ value: "50k+", label: "Orders Fulfilled" }, { value: "40+", label: "Retail Stores" }, { value: "1000%", label: "Revenue Growth" }],
//         quote: "From zero to 50,000 orders. MarkTale built everything — brand, store, listings, marketing. Genuinely a full-stack growth team.", quoteAuthor: "CEO, BG Foods",
//     },
// ];

// const TIMELINE = [
//     { step: "01", title: "Discovery", desc: "Deep dive into your business, audience, and competitive landscape. We learn your world before building in it." },
//     { step: "02", title: "Strategy", desc: "A clear growth roadmap with measurable KPIs — no guesswork, no vague deliverables. Just a focused plan." },
//     { step: "03", title: "Brand Building", desc: "Visual identity, tone of voice, and positioning that makes you unmistakable in your market segment." },
//     { step: "04", title: "Digital Presence", desc: "Website, social media, SEO setup — all channels built to convert visitors into customers, not just exist." },
//     { step: "05", title: "Marketing & Growth", desc: "Content, ads, lead generation, and community — consistent execution that compounds results over time." },
//     { step: "06", title: "Scale & Optimise", desc: "Data-driven iteration, automation, and expansion into new channels as your business grows." },
// ];

// const COMPARISONS = [
//     { agency: "Sells services, not outcomes", marktale: "Builds complete growth systems" },
//     { agency: "Focuses on deliverables only", marktale: "Focuses on real business outcomes" },
//     { agency: "Works project to project", marktale: "Acts as your long-term growth partner" },
//     { agency: "One-size-fits-all packages", marktale: "Custom strategy for each startup" },
//     { agency: "Reports vanity metrics", marktale: "Reports revenue impact and ROI" },
// ];

// const FAQS = [
//     { q: "How do you work with startups?", a: "We start with a free strategy call to understand your business, stage, and goals. Then we build a custom roadmap — no generic packages. We embed ourselves as your growth team, not just a vendor you call once a month." },
//     { q: "What industries do you work with?", a: "We've built brands across EdTech, Restaurant, Transportation, E-commerce, Real Estate, NGOs, Food & FMCG, and more. If you're building something that needs to grow, we've likely done something similar before." },
//     { q: "Do you offer branding and website development together?", a: "Absolutely — in fact, that's our recommended starting point. Brand identity and website go hand in hand. We deliver both with a single unified strategy so everything looks and feels consistent." },
//     { q: "Can you manage our marketing completely?", a: "Yes. Our Growth and Scale plans are designed to be your complete marketing function — from strategy to execution to reporting. No need to hire in-house for individual roles." },
//     { q: "How do we get started?", a: "Book a free 30-minute strategy call. We'll audit your current digital presence, identify your biggest growth levers, and give you a clear next step — whether you work with us or not." },
// ];

// const TESTIMONIALS = [
//     { name: "Owner, Delhi059 Canada", role: "Restaurant · Canada", initials: "D0", achievement: "650+ Reviews", quote: "MarkTale didn't just market our restaurant — they made us the go-to place for the entire Indian community in our city. 650+ reviews with zero ad spend." },
//     { name: "Founder, MentorLeap", role: "EdTech · India", initials: "ML", achievement: "400% Growth", quote: "They rebuilt our entire brand narrative and built an SEO engine that reduced our paid CAC by 60%. Our growth went from stagnant to 400% YoY — incredible results." },
//     { name: "CEO, BG Foods", role: "E-commerce · Canada", initials: "BG", achievement: "50k+ Orders", quote: "From zero to 50,000 orders. MarkTale built everything — brand, store, listings, marketing. They are genuinely a full-stack growth team that delivers." },
// ];

// // ─── Main Page ────────────────────────────────────────────────────────────────
// export default function StartupGrowthPage() {
//     const [activeFaq, setActiveFaq] = useState<number | null>(null);
//     const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" });
//     const [submitted, setSubmitted] = useState(false);
//     const [submitting, setSubmitting] = useState(false);
//     const [formError, setFormError] = useState("");

//     const heroRef = useRef<HTMLDivElement>(null);
//     const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
//     const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
//     const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setFormError("");
//         if (!formData.name || !formData.phone || !formData.email) {
//             setFormError("Naam, phone aur email zaroori hai.");
//             return;
//         }
//         setSubmitting(true);
//         try {
//             const res = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...formData, source: "startup-growth-page" }) });
//             const data = await res.json();
//             if (!res.ok || !data.success) throw new Error(data.error || "Something went wrong.");
//             setSubmitted(true);
//             setTimeout(() => setSubmitted(false), 6000);
//             setFormData({ name: "", phone: "", email: "", service: "", message: "" });
//         } catch (err: unknown) {
//             setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
//         } finally {
//             setSubmitting(false);
//         }
//     };

//     const fadeUp = {
//         initial: { opacity: 0, y: 32 },
//         whileInView: { opacity: 1, y: 0 },
//         viewport: { once: true },
//         transition: { duration: 0.65 },
//     };

//     return (
//         <div className="bg-white text-black overflow-x-hidden font-body">

//             {/* ══════════════════════════════════════════════════════════════════════
//           HERO  —  DARK / BLACK  (pehle jaisa premium feel)
//       ══════════════════════════════════════════════════════════════════════ */}
//             <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-black">
//                 {/* Parallax background */}
//                 <motion.div style={{ y: heroY }} className="absolute inset-0 pointer-events-none">
//                     <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-blue-950/30" />
//                     {/* Subtle grid */}
//                     <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
//                     {/* Glows */}
//                     <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
//                     <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-cyan-600/8  rounded-full blur-[100px]" />
//                 </motion.div>

//                 {/* Floating dots */}
//                 {[
//                     { x: "10%", y: "20%", s: 12, d: 0 },
//                     { x: "85%", y: "15%", s: 8, d: 0.5 },
//                     { x: "70%", y: "70%", s: 16, d: 1 },
//                     { x: "20%", y: "75%", s: 8, d: 1.5 },
//                     { x: "50%", y: "10%", s: 12, d: 0.8 },
//                 ].map((o, i) => (
//                     <motion.div
//                         key={i}
//                         className="absolute rounded-full bg-blue-400/25"
//                         style={{ left: o.x, top: o.y, width: o.s, height: o.s }}
//                         animate={{ y: [-12, 12, -12], opacity: [0.2, 0.7, 0.2] }}
//                         transition={{ duration: 4 + i * 0.6, repeat: Infinity, delay: o.d }}
//                     />
//                 ))}

//                 <motion.div style={{ opacity: heroOpacity }} className="relative z-10 w-full">
//                     <div className="container mx-auto px-6 max-w-7xl pt-32 pb-20">
//                         <div className="max-w-4xl mx-auto text-center">

//                             {/* Badge */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
//                                 className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
//                             >
//                                 <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
//                                 <span className="text-sm text-white/70 font-medium tracking-wide">STARTUP GROWTH PROGRAM</span>
//                                 <Sparkles className="w-3.5 h-3.5 text-blue-400" />
//                             </motion.div>

//                             {/* Headline */}
//                             <motion.h1
//                                 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
//                                 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading leading-[1.05] tracking-tight mb-8 text-white"
//                             >
//                                 Turn Your Startup
//                                 <span className="block mt-2">
//                                     Into A{" "}
//                                     <span className="relative inline-block">
//                                         <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">Brand</span>
//                                         <motion.div
//                                             className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
//                                             initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.9, duration: 0.6 }}
//                                         />
//                                     </span>{" "}People
//                                 </span>
//                                 <span className="block mt-2 text-white/90">Remember</span>
//                             </motion.h1>

//                             {/* Subheadline */}
//                             <motion.p
//                                 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
//                                 className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"
//                             >
//                                 From branding and websites to content, SEO, paid ads, and growth systems — we help startups launch, grow, and scale with confidence.
//                             </motion.p>

//                             {/* CTAs */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }}
//                                 className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
//                             >
//                                 <motion.a
//                                     href="#contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
//                                     className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-100 transition-all shadow-2xl shadow-white/10"
//                                 >
//                                     <Phone className="w-4 h-4" /> Book Free Strategy Call
//                                 </motion.a>
//                                 <motion.a
//                                     href="#audit" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
//                                     className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full text-sm hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm"
//                                 >
//                                     <Target className="w-4 h-4" /> Get Free Growth Audit
//                                 </motion.a>
//                             </motion.div>

//                             {/* Trust badges */}
//                             <motion.div
//                                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
//                                 className="flex flex-wrap justify-center gap-3"
//                             >
//                                 {TRUST_ITEMS.map((item, i) => (
//                                     <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
//                                         <CheckCircle className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
//                                         {item}
//                                     </div>
//                                 ))}
//                             </motion.div>

//                             {/* Stats */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.6 }}
//                                 className="grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-white/10 max-w-2xl mx-auto"
//                             >
//                                 {[
//                                     { val: 150, suffix: "+", label: "Brands Built" },
//                                     { val: 7, suffix: "+", label: "Years Experience" },
//                                     { val: 98, suffix: "%", label: "Client Retention" },
//                                 ].map((s, i) => (
//                                     <div key={i} className="text-center">
//                                         <div className="text-3xl md:text-4xl font-bold font-heading text-white mb-1">
//                                             <Counter to={s.val} suffix={s.suffix} />
//                                         </div>
//                                         <p className="text-xs text-white/40 uppercase tracking-wider">{s.label}</p>
//                                     </div>
//                                 ))}
//                             </motion.div>
//                         </div>
//                     </div>
//                 </motion.div>

//                 {/* Scroll indicator */}
//                 <motion.div
//                     className="absolute bottom-8 left-1/2 -translate-x-1/2"
//                     animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
//                 >
//                     <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
//                         <div className="w-0.5 h-2 bg-white/40 rounded-full" />
//                     </div>
//                 </motion.div>
//             </section>

//             {/* ══════════════════════════════════════════════════════════════════════
//           PROBLEM  —  WHITE bg
//       ══════════════════════════════════════════════════════════════════════ */}
//             <section className="py-28 bg-white relative overflow-hidden">
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <motion.div {...fadeUp} className="text-center mb-16">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-200 bg-red-50 mb-6">
//                             <span className="text-red-600 text-xs font-bold uppercase tracking-widest">The Problem</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-black leading-tight">
//                             Why Most Startups
//                             <span className="block text-gray-300 mt-2">Struggle To Grow</span>
//                         </h2>
//                         <p className="text-gray-500 mt-4 max-w-xl mx-auto">These are the 8 growth killers we see in almost every startup we talk to.</p>
//                     </motion.div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                         {PROBLEMS.map((p, i) => {
//                             const Icon = p.icon;
//                             return (
//                                 <motion.div
//                                     key={i}
//                                     initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }}
//                                     whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
//                                     className="group p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-red-200 transition-all duration-300 shadow-sm"
//                                 >
//                                     <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
//                                         <Icon className="w-4 h-4 text-red-500" />
//                                     </div>
//                                     <h3 className="font-bold text-black text-sm mb-2 font-heading">{p.title}</h3>
//                                     <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>

//                     {/* Solution bridge */}
//                     <motion.div
//                         {...fadeUp}
//                         className="mt-16 relative rounded-3xl overflow-hidden border-2 border-blue-100 bg-gradient-to-r from-blue-50 via-white to-cyan-50 p-10 text-center"
//                     >
//                         <Sparkles className="w-8 h-8 text-blue-600 mx-auto mb-4" />
//                         <h3 className="text-2xl md:text-3xl font-bold font-heading text-black mb-3">MarkTale is the answer to all of this.</h3>
//                         <p className="text-gray-500 text-base max-w-xl mx-auto">One growth partner. Every function covered. Built specifically for startups who want to move fast and grow sustainably.</p>
//                         <motion.a
//                             href="#contact" whileHover={{ scale: 1.04 }}
//                             className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-full text-sm hover:bg-blue-700 transition-all shadow-md"
//                         >
//                             Talk To Us <ArrowRight className="w-4 h-4" />
//                         </motion.a>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* ══════════════════════════════════════════════════════════════════════
//           SERVICES  —  GRAY-50 bg
//       ══════════════════════════════════════════════════════════════════════ */}
//             <section className="py-28 bg-gray-50 relative" id="services">
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <motion.div {...fadeUp} className="text-center mb-16">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 mb-6">
//                             <span className="text-blue-700 text-xs font-bold uppercase tracking-widest">What We Build</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-black leading-tight">
//                             Everything Your Startup
//                             <span className="block text-blue-600 mt-2">Needs To Grow</span>
//                         </h2>
//                     </motion.div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                         {SERVICES.map((s, i) => {
//                             const Icon = s.icon;
//                             const isBlue = s.accent === "blue";
//                             return (
//                                 <motion.div
//                                     key={i}
//                                     initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
//                                     whileHover={{ y: -8, boxShadow: isBlue ? "0 20px 50px rgba(59,130,246,0.2)" : "0 20px 40px rgba(0,0,0,0.08)" }}
//                                     className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 ${isBlue
//                                         ? "bg-blue-600 border-blue-600 text-white"
//                                         : "bg-white border-gray-200 hover:border-blue-200"
//                                         }`}
//                                 >
//                                     <div className="flex items-start justify-between mb-5">
//                                         <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${isBlue ? "bg-white/20" : "bg-blue-50"}`}>
//                                             <Icon className={`w-5 h-5 ${isBlue ? "text-white" : "text-blue-600"}`} />
//                                         </div>
//                                         <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${isBlue ? "bg-white/20 text-white" : "bg-blue-50 text-blue-700 border border-blue-200"
//                                             }`}>{s.tag}</span>
//                                     </div>
//                                     <h3 className={`font-bold text-sm mb-2 font-heading leading-snug ${isBlue ? "text-white" : "text-black"}`}>{s.title}</h3>
//                                     <p className={`text-xs leading-relaxed ${isBlue ? "text-blue-100" : "text-gray-500"}`}>{s.desc}</p>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* ══════════════════════════════════════════════════════════════════════
//           BRAND WALL  —  BLACK bg (dark divider)
//       ══════════════════════════════════════════════════════════════════════ */}
//             <section className="py-20 bg-black border-y border-white/10">
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <motion.div {...fadeUp} className="text-center mb-12">
//                         <p className="text-white/30 text-xs uppercase tracking-[0.3em] mb-3">Trusted By Growing Brands</p>
//                         <h2 className="text-2xl md:text-3xl font-bold font-heading text-white">Brands We Have Built</h2>
//                     </motion.div>

//                     <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-9 gap-3">
//                         {BRANDS.map((b, i) => (
//                             <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
//                                 whileHover={{ scale: 1.08 }}
//                                 className="group relative aspect-square rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/50 flex items-center justify-center p-3 cursor-pointer overflow-hidden transition-all duration-300"
//                             >
//                                 <Link href={`/portfolio/${b.id}`}>
//                                     <Image
//                                         src={b.image} alt={b.name} fill
//                                         className="object-contain p-3 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
//                                     />
//                                     <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
//                                         <div>
//                                             <p className="text-white text-[9px] font-bold leading-tight">{b.name}</p>
//                                             <p className="text-blue-200 text-[8px]">{b.growth} growth</p>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ══════════════════════════════════════════════════════════════════════
//           CASE STUDIES  —  WHITE bg
//       ══════════════════════════════════════════════════════════════════════ */}
//             <section className="py-28 bg-white" id="brands">
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <motion.div {...fadeUp} className="text-center mb-16">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 mb-6">
//                             <span className="text-gray-600 text-xs font-bold uppercase tracking-widest">Case Studies</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-black leading-tight">
//                             Real Brands.
//                             <span className="block text-gray-300 mt-2">Real Growth Stories.</span>
//                         </h2>
//                     </motion.div>

//                     <div className="space-y-6">
//                         {CASE_STUDIES.map((cs, i) => {
//                             const isDark = i % 2 === 0;
//                             return (
//                                 <motion.div
//                                     key={i}
//                                     initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }}
//                                     className={`group relative rounded-3xl border-2 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl ${isDark ? "bg-black border-black" : "bg-white border-gray-200 hover:border-blue-200"
//                                         }`}
//                                 >
//                                     <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
//                                         {/* Brand info */}
//                                         <div className="flex flex-col gap-5">
//                                             <div className={`relative w-16 h-16 rounded-2xl overflow-hidden border ${isDark ? "bg-white/10 border-white/20" : "bg-gray-50 border-gray-200"}`}>
//                                                 <Image src={cs.image} alt={cs.name} fill className="object-contain p-2" />
//                                             </div>
//                                             <div>
//                                                 <p className={`text-xs uppercase tracking-widest mb-1 ${isDark ? "text-white/40" : "text-gray-400"}`}>{cs.industry}</p>
//                                                 <h3 className={`text-2xl font-bold font-heading mb-2 ${isDark ? "text-white" : "text-black"}`}>{cs.name}</h3>
//                                                 <p className={`text-sm italic ${isDark ? "text-white/50" : "text-gray-500"}`}>&ldquo;{cs.tagline}&rdquo;</p>
//                                             </div>
//                                             <Link
//                                                 href={`/portfolio/${cs.id}`}
//                                                 className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"}`}
//                                             >
//                                                 View Full Case Study <ArrowUpRight className="w-4 h-4" />
//                                             </Link>
//                                         </div>

//                                         {/* Details */}
//                                         <div className="space-y-5">
//                                             <div>
//                                                 <p className={`text-xs uppercase tracking-widest mb-2 ${isDark ? "text-white/30" : "text-gray-400"}`}>The Challenge</p>
//                                                 <p className={`text-sm leading-relaxed ${isDark ? "text-white/70" : "text-gray-600"}`}>{cs.challenge}</p>
//                                             </div>
//                                             <div>
//                                                 <p className={`text-xs uppercase tracking-widest mb-2 ${isDark ? "text-white/30" : "text-gray-400"}`}>What We Did</p>
//                                                 <div className="flex flex-wrap gap-1.5">
//                                                     {cs.work.map((w, j) => (
//                                                         <span key={j} className={`text-xs px-3 py-1 rounded-full border ${isDark ? "border-white/15 bg-white/5 text-white/60" : "border-gray-200 bg-gray-50 text-gray-600"
//                                                             }`}>{w}</span>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* Stats */}
//                                         <div className="space-y-3">
//                                             <div className="grid grid-cols-3 gap-3">
//                                                 {cs.stats.map((stat, j) => (
//                                                     <div key={j} className={`text-center p-4 rounded-2xl ${isDark ? "bg-white/8 border border-white/10" : "bg-blue-50 border border-blue-100"}`}>
//                                                         <div className={`text-xl font-bold font-heading mb-1 ${isDark ? "text-white" : "text-black"}`}>{stat.value}</div>
//                                                         <div className={`text-xs ${isDark ? "text-white/40" : "text-gray-500"}`}>{stat.label}</div>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                             {cs.quote && (
//                                                 <div className={`p-4 rounded-2xl ${isDark ? "bg-white/5 border border-white/10" : "bg-gray-50 border border-gray-200"}`}>
//                                                     <p className={`text-xs italic mb-2 ${isDark ? "text-white/50" : "text-gray-500"}`}>&ldquo;{cs.quote}&rdquo;</p>
//                                                     <p className={`text-xs font-semibold ${isDark ? "text-white/30" : "text-gray-400"}`}>— {cs.quoteAuthor}</p>
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>

//                     <motion.div {...fadeUp} className="text-center mt-10">
//                         <Link href="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-300 rounded-full text-sm font-semibold transition-all">
//                             View All Projects <ArrowRight className="w-4 h-4" />
//                         </Link>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* ══════════════════════════════════════════════════════════════════════
//           TIMELINE  —  GRAY-50 bg
//       ══════════════════════════════════════════════════════════════════════ */}
//             <section className="py-28 bg-gray-50 relative overflow-hidden">
//                 <div className="absolute inset-0 pointer-events-none">
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[150px]" />
//                 </div>
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <motion.div {...fadeUp} className="text-center mb-16">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
//                             <span className="text-gray-600 text-xs font-bold uppercase tracking-widest">Our Process</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-black">
//                             How We Build
//                             <span className="block text-blue-600 mt-2">Growth Stories</span>
//                         </h2>
//                     </motion.div>

//                     <div className="relative">
//                         <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent hidden sm:block" />
//                         <div className="space-y-8">
//                             {TIMELINE.map((t, i) => (
//                                 <motion.div
//                                     key={i}
//                                     initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
//                                     className={`relative flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
//                                 >
//                                     <div className="flex-1 p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
//                                         <div className="flex items-center gap-4 mb-3">
//                                             <span className="text-4xl font-bold font-heading text-blue-100">{t.step}</span>
//                                             <h3 className="text-lg font-bold font-heading text-black">{t.title}</h3>
//                                         </div>
//                                         <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
//                                     </div>
//                                     <div className="hidden md:flex w-4 h-4 rounded-full bg-blue-600 border-2 border-blue-300 flex-shrink-0 shadow-lg shadow-blue-600/30" />
//                                     <div className="flex-1 hidden md:block" />
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ══════════════════════════════════════════════════════════════════════
//           IMPACT METRICS  —  WHITE bg
//       ══════════════════════════════════════════════════════════════════════ */}
//             <section className="py-28 bg-white">
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <motion.div {...fadeUp} className="text-center mb-16">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 mb-6">
//                             <span className="text-gray-600 text-xs font-bold uppercase tracking-widest">Results & Impact</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl font-bold font-heading text-black">
//                             Focused On Outcomes,
//                             <span className="block text-gray-300 mt-2">Not Just Deliverables</span>
//                         </h2>
//                     </motion.div>

//                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//                         {[
//                             { val: 150, suffix: "+", label: "Brands Built", icon: Briefcase },
//                             { val: 98, suffix: "%", label: "Client Retention", icon: Heart },
//                             { val: 7, suffix: "+", label: "Years Experience", icon: Award },
//                             { val: 200, suffix: "%", label: "Avg Growth", icon: TrendingUp },
//                             { val: 50, suffix: "k+", label: "Leads Generated", icon: Target },
//                             { val: 4, suffix: ".9★", label: "Client Rating", icon: Star },
//                         ].map((m, i) => {
//                             const Icon = m.icon;
//                             return (
//                                 <motion.div
//                                     key={i}
//                                     initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
//                                     whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(59,130,246,0.12)" }}
//                                     className="group text-center p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-blue-200 transition-all cursor-default shadow-sm"
//                                 >
//                                     <Icon className="w-5 h-5 text-blue-600 mx-auto mb-3 opacity-60 group-hover:opacity-100 transition-opacity" />
//                                     <div className="text-3xl font-bold font-heading text-black mb-1"><Counter to={m.val} suffix={m.suffix} /></div>
//                                     <p className="text-gray-400 text-xs">{m.label}</p>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* ══════════════════════════════════════════════════════════════════════
//           COMPARISON  —  BLACK bg (dark break)
//       ══════════════════════════════════════════════════════════════════════ */}
//             <section className="py-28 bg-black relative overflow-hidden">
//                 <div className="absolute inset-0 pointer-events-none">
//                     <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[150px]" />
//                 </div>
//                 <div className="container mx-auto px-6 max-w-5xl relative z-10">
//                     <motion.div {...fadeUp} className="text-center mb-16">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
//                             <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Why MarkTale</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
//                             More Than
//                             <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">An Agency</span>
//                         </h2>
//                     </motion.div>

//                     <div className="grid grid-cols-2 gap-4 mb-4 px-4">
//                         <div className="text-center text-xs uppercase tracking-[0.2em] text-white/20 font-semibold pb-3 border-b border-white/10">Most Agencies</div>
//                         <div className="text-center text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold pb-3 border-b border-blue-500/40">MarkTale</div>
//                     </div>
//                     <div className="space-y-3">
//                         {COMPARISONS.map((c, i) => (
//                             <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
//                                 className="grid grid-cols-2 gap-4"
//                             >
//                                 <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
//                                     <X className="w-4 h-4 text-red-500/60 flex-shrink-0" />
//                                     <span className="text-white/30 text-sm">{c.agency}</span>
//                                 </div>
//                                 <div className="p-4 rounded-2xl bg-blue-600 border border-blue-500 flex items-center gap-3">
//                                     <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
//                                     <span className="text-white text-sm font-medium">{c.marktale}</span>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ══════════════════════════════════════════════════════════════════════
//           TESTIMONIALS  —  GRAY-50 bg
//       ══════════════════════════════════════════════════════════════════════ */}
//             <section className="py-28 bg-gray-50">
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <motion.div {...fadeUp} className="text-center mb-16">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
//                             <span className="text-gray-600 text-xs font-bold uppercase tracking-widest">Client Love</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl font-bold font-heading text-black">
//                             What Founders
//                             <span className="block text-gray-300 mt-2">Say About Us</span>
//                         </h2>
//                         <div className="flex items-center justify-center gap-2 mt-6">
//                             {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
//                             <span className="text-gray-400 text-sm ml-2">4.9 · 150+ Founders</span>
//                         </div>
//                     </motion.div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//                         {TESTIMONIALS.map((t, i) => (
//                             <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }}
//                                 whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
//                                 className="p-7 rounded-3xl bg-white border-2 border-gray-200 hover:border-blue-200 transition-all duration-300 shadow-sm"
//                             >
//                                 <div className="flex gap-0.5 mb-5">
//                                     {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
//                                 </div>
//                                 <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-center gap-3">
//                                         <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{t.initials}</div>
//                                         <div>
//                                             <p className="text-black font-semibold text-sm">{t.name}</p>
//                                             <p className="text-gray-400 text-xs">{t.role}</p>
//                                         </div>
//                                     </div>
//                                     <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">{t.achievement}</span>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ══════════════════════════════════════════════════════════════════════
//           FAQ  —  WHITE bg
//       ══════════════════════════════════════════════════════════════════════ */}
//             <section className="py-28 bg-white">
//                 <div className="container mx-auto px-6 max-w-3xl">
//                     <motion.div {...fadeUp} className="text-center mb-14">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 mb-6">
//                             <span className="text-gray-600 text-xs font-bold uppercase tracking-widest">FAQ</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl font-bold font-heading text-black">
//                             Common
//                             <span className="block text-gray-300 mt-2">Questions</span>
//                         </h2>
//                     </motion.div>

//                     <div className="space-y-2">
//                         {FAQS.map((faq, i) => (
//                             <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
//                                 className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${activeFaq === i ? "border-blue-300 bg-blue-50" : "border-gray-200 bg-white hover:border-gray-300"
//                                     }`}
//                             >
//                                 <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
//                                     <span className="font-semibold text-black text-sm leading-snug font-heading">{faq.q}</span>
//                                     <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${activeFaq === i ? "bg-blue-600 border-blue-600" : "border-gray-300"}`}>
//                                         {activeFaq === i ? <ChevronUp className="w-3 h-3 text-white" /> : <ChevronDown className="w-3 h-3 text-gray-400" />}
//                                     </div>
//                                 </button>
//                                 <AnimatePresence>
//                                     {activeFaq === i && (
//                                         <motion.div
//                                             initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
//                                             className="overflow-hidden"
//                                         >
//                                             <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-blue-100 pt-4">{faq.a}</p>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ══════════════════════════════════════════════════════════════════════
//           CONTACT  —  GRAY-50 bg
//       ══════════════════════════════════════════════════════════════════════ */}
//             <section className="py-28 bg-gray-50" id="contact">
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

//                         {/* Left */}
//                         <motion.div {...fadeUp}>
//                             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 mb-8">
//                                 <span className="text-blue-700 text-xs font-bold uppercase tracking-widest">Let&apos;s Talk</span>
//                             </div>
//                             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6 text-black">
//                                 Your Startup
//                                 <span className="block text-blue-600 mt-2">Deserves More</span>
//                                 <span className="block text-black mt-2">Than Just Marketing</span>
//                             </h2>
//                             <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-md">
//                                 Whether you&apos;re validating an idea, launching a product, or scaling an existing business — MarkTale helps you build a brand customers trust and remember.
//                             </p>

//                             <div className="space-y-4 mb-10">
//                                 {[
//                                     { icon: Phone, label: "Call / WhatsApp", value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE_RAW}` },
//                                     { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
//                                     { icon: Globe, label: "Website", value: "marktaleworld.com", href: "https://marktaleworld.com" },
//                                 ].map((c, i) => {
//                                     const Icon = c.icon;
//                                     return (
//                                         <a key={i} href={c.href} className="flex items-center gap-4 group">
//                                             <div className="w-10 h-10 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all shadow-sm">
//                                                 <Icon className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
//                                             </div>
//                                             <div>
//                                                 <p className="text-gray-400 text-xs uppercase tracking-wider">{c.label}</p>
//                                                 <p className="text-black text-sm font-medium group-hover:text-blue-600 transition-colors">{c.value}</p>
//                                             </div>
//                                         </a>
//                                     );
//                                 })}
//                             </div>

//                             <motion.a
//                                 href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20MarkTale%2C%20I%20want%20a%20free%20startup%20growth%20strategy%20call`}
//                                 target="_blank" rel="noopener noreferrer"
//                                 whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
//                                 className="inline-flex items-center gap-3 px-7 py-4 bg-[#25D366] hover:bg-[#20bc5a] text-white font-bold rounded-full shadow-lg shadow-green-500/20 transition-all"
//                             >
//                                 <MessageCircle className="w-5 h-5" />
//                                 Chat On WhatsApp
//                             </motion.a>
//                         </motion.div>

//                         {/* Right — Form */}
//                         <motion.div {...fadeUp} id="audit">
//                             <div className="rounded-3xl border-2 border-gray-200 bg-white shadow-xl p-8">
//                                 <h3 className="text-xl font-bold font-heading text-black mb-2">Book Free Strategy Call</h3>
//                                 <p className="text-gray-400 text-sm mb-7">30-minute session. We&apos;ll audit your digital presence and give you a clear growth roadmap — completely free.</p>

//                                 <AnimatePresence mode="wait">
//                                     {submitted ? (
//                                         <motion.div
//                                             key="success"
//                                             initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
//                                             className="text-center py-14"
//                                         >
//                                             <div className="w-16 h-16 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
//                                                 <CheckCircle className="w-8 h-8 text-green-500" />
//                                             </div>
//                                             <h4 className="text-xl font-bold text-black mb-2 font-heading">Message Sent!</h4>
//                                             <p className="text-gray-400 text-sm">Our team will reach out within 24 hours.</p>
//                                         </motion.div>
//                                     ) : (
//                                         <motion.div key="form" className="space-y-4">
//                                             {formError && (
//                                                 <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">{formError}</div>
//                                             )}
//                                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                                 {[
//                                                     { label: "Your Name *", key: "name", placeholder: "Full name", type: "text" },
//                                                     { label: "Phone / WhatsApp *", key: "phone", placeholder: "+91 98765 43210", type: "tel" },
//                                                 ].map((f) => (
//                                                     <div key={f.key}>
//                                                         <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-semibold">{f.label}</label>
//                                                         <input
//                                                             type={f.type} placeholder={f.placeholder}
//                                                             value={formData[f.key as keyof typeof formData]}
//                                                             onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
//                                                             className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm text-black placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
//                                                         />
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                             <div>
//                                                 <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-semibold">Email *</label>
//                                                 <input
//                                                     type="email" placeholder="your@email.com" value={formData.email}
//                                                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                                                     className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm text-black placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
//                                                 />
//                                             </div>
//                                             <div>
//                                                 <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-semibold">Service Needed</label>
//                                                 <select
//                                                     value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}
//                                                     className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm text-black focus:outline-none focus:border-blue-400 transition-all appearance-none"
//                                                 >
//                                                     <option value="">Select a service</option>
//                                                     {["Website Development", "Brand Identity", "Social Media Growth", "SEO", "Performance Marketing", "Content & Storytelling", "AI Automation", "Lead Generation", "Full Startup Package", "Not sure — needs discussion"].map((o) => (
//                                                         <option key={o} value={o}>{o}</option>
//                                                     ))}
//                                                 </select>
//                                             </div>
//                                             <div>
//                                                 <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-semibold">Tell Us About Your Startup</label>
//                                                 <textarea
//                                                     rows={3} placeholder="What's your business? What specific challenge are you facing?"
//                                                     value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                                                     className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm text-black placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all resize-none"
//                                                 />
//                                             </div>
//                                             <motion.button
//                                                 onClick={handleSubmit} disabled={submitting}
//                                                 whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
//                                                 className="w-full flex items-center justify-center gap-2.5 py-4 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-all disabled:opacity-60 shadow-lg shadow-blue-600/20"
//                                             >
//                                                 <Rocket className="w-4 h-4" />
//                                                 {submitting ? "Sending..." : "Book Free Strategy Call"}
//                                             </motion.button>
//                                             <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
//                                                 <Shield className="w-3 h-3" /> No spam · Free · Response within 24 hours
//                                             </p>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </div>
//             </section>

//             {/* ══════════════════════════════════════════════════════════════════════
//           FINAL CTA  —  BLACK bg (premium dark close)
//       ══════════════════════════════════════════════════════════════════════ */}
//             <section className="py-28 bg-black relative overflow-hidden">
//                 <div className="absolute inset-0 pointer-events-none">
//                     <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/8 rounded-full blur-[120px]" />
//                 </div>
//                 <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
//                     <motion.div {...fadeUp}>
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
//                             <Sparkles className="w-3.5 h-3.5 text-blue-400" />
//                             <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Start Today</span>
//                         </div>
//                         <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-[1.05] mb-6">
//                             Your Startup
//                             <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent mt-2">Deserves More</span>
//                             <span className="block text-white/80 mt-2">Than Just Marketing</span>
//                         </h2>
//                         <p className="text-white/40 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
//                             Whether you&apos;re validating an idea, launching a product, or scaling — MarkTale helps you build a brand people trust and remember.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <motion.a
//                                 href="#contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
//                                 className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-100 transition-all shadow-2xl shadow-white/10"
//                             >
//                                 <Phone className="w-4 h-4" /> Book Free Strategy Call
//                             </motion.a>
//                             <motion.a
//                                 href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20MarkTale%2C%20startup%20growth%20ke%20liye%20baat%20karni%20hai`}
//                                 target="_blank" rel="noopener noreferrer"
//                                 whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
//                                 className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] text-white font-bold rounded-full text-sm hover:bg-[#20bc5a] transition-all shadow-lg"
//                             >
//                                 <MessageCircle className="w-4 h-4" /> Chat On WhatsApp
//                             </motion.a>
//                         </div>
//                     </motion.div>
//                 </div>
//             </section>

//         </div>
//     );
// }



// "use client";

// // app/startup-growth-lp/page.tsx
// // STANDALONE landing page — NO Navbar / Footer
// // Features: Home button, Exit Intent Popup, Floating WhatsApp, Scroll Progress, Scroll-to-Top, Social Proof Ticker

// import React, { useState, useEffect, useRef } from "react";
// import {
//     motion,
//     AnimatePresence,
//     useInView,
//     useScroll,
//     useTransform,
// } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import {
//     Rocket, Target, TrendingUp, ArrowRight, Globe, Users, Star,
//     Sparkles, CheckCircle, Briefcase, Award, Heart, X, Phone, Mail,
//     MessageCircle, Code, Palette, BarChart2, Share2, Search, Video,
//     Bot, Megaphone, ChevronDown, ChevronUp, Shield, ArrowUpRight,
//     Layers, Home, ArrowUp, Clock,
// } from "lucide-react";

// // ─── ENV ──────────────────────────────────────────────────────────────────────
// const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919958377050";
// const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@marktaleworld.com";
// const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+91 99583 77050";
// const CONTACT_PHONE_RAW = process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW ?? "919958377050";

// // ─── Animated Counter ─────────────────────────────────────────────────────────
// function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
//     const [count, setCount] = useState(0);
//     const ref = useRef<HTMLSpanElement>(null);
//     const inView = useInView(ref, { once: true });
//     useEffect(() => {
//         if (!inView) return;
//         let start = 0;
//         const timer = setInterval(() => {
//             start += to / 80;
//             if (start >= to) { setCount(to); clearInterval(timer); }
//             else setCount(Math.floor(start));
//         }, 16);
//         return () => clearInterval(timer);
//     }, [inView, to]);
//     return <span ref={ref}>{count}{suffix}</span>;
// }

// // ─── Data ─────────────────────────────────────────────────────────────────────
// const TRUST_ITEMS = [
//     "Startup Focused", "End-to-End Growth Support",
//     "Brand + Technology + Marketing", "Long-Term Growth Partner",
// ];

// const PROBLEMS = [
//     { title: "No Professional Website", desc: "First impressions matter. Without a solid web presence, you lose credibility before the conversation even starts.", icon: Globe },
//     { title: "Weak Branding", desc: "If your brand doesn't stand out, you're competing on price alone — a race to the bottom you can't win.", icon: Palette },
//     { title: "Low Visibility", desc: "Great products go unnoticed without the right SEO, content, and distribution strategy in place.", icon: Search },
//     { title: "Poor Lead Generation", desc: "Random social posts don't build pipelines. You need systems that generate qualified leads consistently.", icon: Target },
//     { title: "Inconsistent Content", desc: "Posting once in a while won't build trust. Brands that win show up consistently with real value.", icon: Video },
//     { title: "No Marketing Strategy", desc: "Tactics without strategy is noise. Most startups try everything and see results from nothing.", icon: Layers },
//     { title: "Limited Resources", desc: "You can't hire 6 specialists. You need one partner who brings the entire growth stack.", icon: Users },
//     { title: "Expensive In-House Teams", desc: "A full marketing team costs ₹5–15L/month. A growth partner delivers more at a fraction of that cost.", icon: Briefcase },
// ];

// const SERVICES = [
//     { icon: Palette, title: "Brand Identity", desc: "Build a memorable brand that customers trust — logo, colors, voice, and positioning that sets you apart.", tag: "Foundation", accent: "blue" },
//     { icon: Code, title: "Website Development", desc: "Fast, scalable, conversion-focused websites. Built on Next.js — the same stack powering MarkTale itself.", tag: "Essential", accent: "white" },
//     { icon: Share2, title: "Social Media Growth", desc: "Build awareness, community, and loyalty across Instagram, LinkedIn, YouTube, and beyond.", tag: "Visibility", accent: "blue" },
//     { icon: Search, title: "SEO", desc: "Rank higher on Google, generate consistent organic traffic, and reduce your dependence on paid ads.", tag: "Long-term", accent: "white" },
//     { icon: BarChart2, title: "Performance Marketing", desc: "ROI-focused campaigns on Meta and Google. Every rupee tracked, every campaign optimised for returns.", tag: "High Impact", accent: "blue" },
//     { icon: Video, title: "Content & Storytelling", desc: "Create authority through articles, reels, case studies, and videos that attract and convert your audience.", tag: "Authority", accent: "white" },
//     { icon: Bot, title: "AI Automation", desc: "Automate repetitive workflows and scale efficiently with smart AI-powered systems built for your business.", tag: "Future-Ready", accent: "blue" },
//     { icon: Megaphone, title: "Lead Generation", desc: "Build predictable, scalable pipelines — funnels, CRM setup, retargeting, and complete nurture flows.", tag: "Revenue", accent: "white" },
// ];

// const BRANDS = [
//     { id: "mentorleap", name: "MentorLeap", image: "/Feature_logos/mentorleep.png", growth: "400%" },
//     { id: "delhi059", name: "Delhi059", image: "/delhi059-logo.jpg", growth: "500%" },
//     { id: "local-ride", name: "Local Ride", image: "/Feature_logos/localride.jpg", growth: "300%" },
//     { id: "bg-foods", name: "BG Foods", image: "/Feature_logos/bgfoods.jpeg", growth: "1000%" },
//     { id: "dee-cee-accessories", name: "Dee Cee Accessories", image: "/Feature_logos/deecee.jpg", growth: "900%" },
//     { id: "cabtale", name: "CabTale", image: "/Feature_logos/cabtale.jpg", growth: "800%" },
//     { id: "last-mile-care", name: "Last Mile Care", image: "/Feature_logos/lastmilecare.jpeg", growth: "200%" },
//     { id: "promac-advisory", name: "Promac Advisory", image: "/Feature_logos/promac.png", growth: "350%" },
//     { id: "biryani-bar", name: "Biryani Bar", image: "/Feature_logos/biryanibar.jpg", growth: "450%" },
// ];

// const CASE_STUDIES = [
//     {
//         id: "delhi059", name: "Delhi059", industry: "Restaurant · Canada", image: "/delhi059-logo.jpg",
//         tagline: "Canada's culinary icon — built without a rupee in ad spend",
//         challenge: "New restaurant in a saturated Canadian market. Zero reviews, zero digital presence, zero ad budget.",
//         work: ["Local SEO", "Google Business", "UGC Strategy", "Community Marketing", "Photography"],
//         stats: [{ value: "650+", label: "Google Reviews" }, { value: "4.7★", label: "Avg Rating" }, { value: "#1", label: "Local Map Rank" }],
//         quote: "MarkTale didn't just market our restaurant — they made us the go-to place for the entire Indian community.", quoteAuthor: "Owner, Delhi059 Canada",
//     },
//     {
//         id: "local-ride", name: "Local Ride", industry: "Transportation · Canada", image: "/Feature_logos/localride.jpg",
//         tagline: "100,000+ rides. Zero commission for drivers.",
//         challenge: "Building a two-sided rideshare marketplace from scratch against Uber and Lyft, with limited launch capital.",
//         work: ["Product Strategy", "App Development", "Brand Identity", "Driver Acquisition", "City Launch Campaigns"],
//         stats: [{ value: "100k+", label: "Rides Completed" }, { value: "2,000+", label: "Active Drivers" }, { value: "3", label: "Cities Launched" }],
//         quote: null, quoteAuthor: null,
//     },
//     {
//         id: "bg-foods", name: "BG Foods", industry: "E-commerce · Canada/USA", image: "/Feature_logos/bgfoods.jpeg",
//         tagline: "50,000+ orders. Built entirely from scratch.",
//         challenge: "From home-kitchen idea to multi-country operation with no digital infrastructure, no supply chain, no audience.",
//         work: ["Brand Identity", "Shopify Store", "Amazon Listings", "Influencer Marketing", "Email Growth"],
//         stats: [{ value: "50k+", label: "Orders Fulfilled" }, { value: "40+", label: "Retail Stores" }, { value: "1000%", label: "Revenue Growth" }],
//         quote: "From zero to 50,000 orders. MarkTale built everything — brand, store, listings, marketing. Genuinely a full-stack growth team.", quoteAuthor: "CEO, BG Foods",
//     },
// ];

// const TIMELINE = [
//     { step: "01", title: "Discovery", desc: "Deep dive into your business, audience, and competitive landscape. We learn your world before building in it." },
//     { step: "02", title: "Strategy", desc: "A clear growth roadmap with measurable KPIs — no guesswork, no vague deliverables. Just a focused plan." },
//     { step: "03", title: "Brand Building", desc: "Visual identity, tone of voice, and positioning that makes you unmistakable in your market segment." },
//     { step: "04", title: "Digital Presence", desc: "Website, social media, SEO setup — all channels built to convert visitors into customers, not just exist." },
//     { step: "05", title: "Marketing & Growth", desc: "Content, ads, lead generation, and community — consistent execution that compounds results over time." },
//     { step: "06", title: "Scale & Optimise", desc: "Data-driven iteration, automation, and expansion into new channels as your business grows." },
// ];

// const COMPARISONS = [
//     { agency: "Sells services, not outcomes", marktale: "Builds complete growth systems" },
//     { agency: "Focuses on deliverables only", marktale: "Focuses on real business outcomes" },
//     { agency: "Works project to project", marktale: "Acts as your long-term growth partner" },
//     { agency: "One-size-fits-all packages", marktale: "Custom strategy for each startup" },
//     { agency: "Reports vanity metrics", marktale: "Reports revenue impact and ROI" },
// ];

// const FAQS = [
//     { q: "How do you work with startups?", a: "We start with a free strategy call to understand your business, stage, and goals. Then we build a custom roadmap — no generic packages. We embed ourselves as your growth team, not just a vendor you call once a month." },
//     { q: "What industries do you work with?", a: "We've built brands across EdTech, Restaurant, Transportation, E-commerce, Real Estate, NGOs, Food & FMCG, and more. If you're building something that needs to grow, we've likely done something similar before." },
//     { q: "Do you offer branding and website development together?", a: "Absolutely — in fact, that's our recommended starting point. Brand identity and website go hand in hand. We deliver both with a single unified strategy so everything looks and feels consistent." },
//     { q: "Can you manage our marketing completely?", a: "Yes. Our Growth and Scale plans are designed to be your complete marketing function — from strategy to execution to reporting. No need to hire in-house for individual roles." },
//     { q: "How do we get started?", a: "Book a free 30-minute strategy call. We'll audit your current digital presence, identify your biggest growth levers, and give you a clear next step — whether you work with us or not." },
// ];

// const TESTIMONIALS = [
//     { name: "Owner, Delhi059 Canada", role: "Restaurant · Canada", initials: "D0", achievement: "650+ Reviews", quote: "MarkTale didn't just market our restaurant — they made us the go-to place for the entire Indian community in our city. 650+ reviews with zero ad spend." },
//     { name: "Founder, MentorLeap", role: "EdTech · India", initials: "ML", achievement: "400% Growth", quote: "They rebuilt our entire brand narrative and built an SEO engine that reduced our paid CAC by 60%. Our growth went from stagnant to 400% YoY — incredible results." },
//     { name: "CEO, BG Foods", role: "E-commerce · Canada", initials: "BG", achievement: "50k+ Orders", quote: "From zero to 50,000 orders. MarkTale built everything — brand, store, listings, marketing. They are genuinely a full-stack growth team that delivers." },
// ];

// // Social proof notifications — ye randomly dikhenge
// const SOCIAL_PROOF = [
//     "Someone from Mumbai just booked a free strategy call 🚀",
//     "A Delhi startup just got their free growth audit ✅",
//     "Founder from Bangalore connected on WhatsApp 📱",
//     "New enquiry from Pune — Brand Identity package 🎨",
//     "Startup from Hyderabad booked a strategy call 📞",
//     "3 new leads in the last hour from this page 🔥",
// ];

// // ─── Main Page ────────────────────────────────────────────────────────────────
// export default function StartupGrowthLandingPage() {
//     const [activeFaq, setActiveFaq] = useState<number | null>(null);
//     const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" });
//     const [submitted, setSubmitted] = useState(false);
//     const [submitting, setSubmitting] = useState(false);
//     const [formError, setFormError] = useState("");

//     // UI states
//     const [scrolled, setScrolled] = useState(false);
//     const [showScrollTop, setShowScrollTop] = useState(false);
//     const [showExitPopup, setShowExitPopup] = useState(false);
//     const [exitPopupShown, setExitPopupShown] = useState(false);
//     const [socialProofText, setSocialProofText] = useState("");
//     const [showSocialProof, setShowSocialProof] = useState(false);
//     const [scrollProgress, setScrollProgress] = useState(0);

//     const heroRef = useRef<HTMLDivElement>(null);
//     const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
//     const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
//     const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

//     // ── Scroll handler ──────────────────────────────────────────────────────────
//     useEffect(() => {
//         const handleScroll = () => {
//             const scrolled = window.scrollY;
//             const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
//             setScrollProgress(totalHeight > 0 ? (scrolled / totalHeight) * 100 : 0);
//             setScrolled(scrolled > 60);
//             setShowScrollTop(scrolled > 400);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     // ── Exit Intent — mouse leaves top of viewport ──────────────────────────────
//     useEffect(() => {
//         const handleMouseLeave = (e: MouseEvent) => {
//             if (e.clientY <= 5 && !exitPopupShown) {
//                 setShowExitPopup(true);
//                 setExitPopupShown(true);
//             }
//         };
//         document.addEventListener("mouseleave", handleMouseLeave);
//         return () => document.removeEventListener("mouseleave", handleMouseLeave);
//     }, [exitPopupShown]);

//     // ── Social Proof Ticker ─────────────────────────────────────────────────────
//     useEffect(() => {
//         const show = () => {
//             const msg = SOCIAL_PROOF[Math.floor(Math.random() * SOCIAL_PROOF.length)];
//             setSocialProofText(msg);
//             setShowSocialProof(true);
//             setTimeout(() => setShowSocialProof(false), 4000);
//         };
//         // First one after 8 seconds
//         const first = setTimeout(show, 8000);
//         // Then every 20 seconds
//         const interval = setInterval(show, 20000);
//         return () => { clearTimeout(first); clearInterval(interval); };
//     }, []);

//     // ── Form submit ─────────────────────────────────────────────────────────────
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setFormError("");
//         if (!formData.name || !formData.phone || !formData.email) {
//             setFormError("Naam, phone aur email zaroori hai.");
//             return;
//         }
//         setSubmitting(true);
//         try {
//             const res = await fetch("/api/enquiries", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ ...formData, source: "startup-growth-landing-page" }),
//             });
//             const data = await res.json();
//             if (!res.ok || !data.success) throw new Error(data.error || "Something went wrong.");
//             setSubmitted(true);
//             setTimeout(() => setSubmitted(false), 6000);
//             setFormData({ name: "", phone: "", email: "", service: "", message: "" });
//         } catch (err: unknown) {
//             setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
//         } finally {
//             setSubmitting(false);
//         }
//     };

//     const fadeUp = {
//         initial: { opacity: 0, y: 32 },
//         whileInView: { opacity: 1, y: 0 },
//         viewport: { once: true },
//         transition: { duration: 0.65 },
//     };

//     return (
//         <div className="bg-white text-black overflow-x-hidden font-body">

//             {/* ══ SCROLL PROGRESS BAR ══════════════════════════════════════════════ */}
//             <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-gray-200">
//                 <div
//                     className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-100"
//                     style={{ width: `${scrollProgress}%` }}
//                 />
//             </div>

//             {/* ══ STICKY MINI HEADER ═══════════════════════════════════════════════ */}
//             <header className={`fixed top-0.5 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"}`}>
//                 <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
//                     {/* Logo */}
//                     <Link href="/" className="flex items-center gap-2 group">
//                         <div className="relative w-8 h-8">
//                             <Image src="/images/logo.png" alt="MarkTale" fill className="object-contain" />
//                         </div>
//                         <span className="text-white font-bold font-heading text-lg tracking-tight">MarkTale</span>
//                     </Link>

//                     {/* Right side — CTA + Home */}
//                     <div className="flex items-center gap-3">
//                         <a
//                             href="#contact"
//                             className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-full transition-all"
//                         >
//                             <Phone className="w-3 h-3" /> Free Strategy Call
//                         </a>
//                         {/* HOME BUTTON — sir ka requirement */}
//                         <Link
//                             href="/"
//                             className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 hover:bg-white hover:text-black text-xs font-semibold transition-all duration-200"
//                         >
//                             <Home className="w-3.5 h-3.5" />
//                             <span className="hidden sm:inline">Back to MarkTale</span>
//                             <span className="sm:hidden">Home</span>
//                         </Link>
//                     </div>
//                 </div>
//             </header>

//             {/* ══ FLOATING WHATSAPP BUTTON ═════════════════════════════════════════ */}
//             <motion.a
//                 href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20MarkTale%2C%20startup%20growth%20ke%20liye%20baat%20karni%20hai`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 2, type: "spring" }}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20bc5a] text-white font-bold rounded-full shadow-2xl shadow-green-500/40 transition-colors"
//             >
//                 <MessageCircle className="w-5 h-5" />
//                 <span className="text-sm hidden sm:inline">WhatsApp Us</span>
//             </motion.a>

//             {/* ══ SCROLL TO TOP BUTTON ═════════════════════════════════════════════ */}
//             <AnimatePresence>
//                 {showScrollTop && (
//                     <motion.button
//                         initial={{ opacity: 0, scale: 0 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0 }}
//                         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//                         className="fixed bottom-6 left-6 z-40 w-11 h-11 bg-black border border-white/20 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-900 transition-colors"
//                     >
//                         <ArrowUp className="w-4 h-4" />
//                     </motion.button>
//                 )}
//             </AnimatePresence>

//             {/* ══ SOCIAL PROOF NOTIFICATION ════════════════════════════════════════ */}
//             <AnimatePresence>
//                 {showSocialProof && (
//                     <motion.div
//                         initial={{ opacity: 0, x: -100 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: -100 }}
//                         transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                         className="fixed bottom-24 left-6 z-40 max-w-xs bg-white border-2 border-gray-100 rounded-2xl shadow-2xl p-4 flex items-start gap-3"
//                     >
//                         <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">MT</div>
//                         <div>
//                             <p className="text-black text-xs font-semibold leading-tight">{socialProofText}</p>
//                             <p className="text-gray-400 text-[10px] mt-1 flex items-center gap-1"><Clock className="w-2.5 h-2.5" /> Just now</p>
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             {/* ══ EXIT INTENT POPUP ════════════════════════════════════════════════ */}
//             <AnimatePresence>
//                 {showExitPopup && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
//                         onClick={() => setShowExitPopup(false)}
//                     >
//                         <motion.div
//                             initial={{ scale: 0.8, opacity: 0 }}
//                             animate={{ scale: 1, opacity: 1 }}
//                             exit={{ scale: 0.8, opacity: 0 }}
//                             transition={{ type: "spring", stiffness: 300, damping: 25 }}
//                             onClick={(e) => e.stopPropagation()}
//                             className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
//                         >
//                             {/* Close */}
//                             <button
//                                 onClick={() => setShowExitPopup(false)}
//                                 className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
//                             >
//                                 <X className="w-4 h-4 text-gray-600" />
//                             </button>

//                             {/* Content */}
//                             <div className="text-center mb-6">
//                                 <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
//                                     <Rocket className="w-8 h-8 text-blue-600" />
//                                 </div>
//                                 <h3 className="text-2xl font-bold font-heading text-black mb-2">Wait! Don't leave yet 👋</h3>
//                                 <p className="text-gray-500 text-sm leading-relaxed">
//                                     Get a <strong className="text-black">FREE 30-minute strategy call</strong> before you go. We'll audit your startup's digital presence — no obligation.
//                                 </p>
//                             </div>

//                             <div className="space-y-3">
//                                 <a
//                                     href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20MarkTale%2C%20I%20want%20the%20free%20strategy%20call`}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     onClick={() => setShowExitPopup(false)}
//                                     className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] hover:bg-[#20bc5a] text-white font-bold rounded-xl text-sm transition-all"
//                                 >
//                                     <MessageCircle className="w-4 h-4" /> Book on WhatsApp — It's Free
//                                 </a>
//                                 <a
//                                     href="#contact"
//                                     onClick={() => setShowExitPopup(false)}
//                                     className="flex items-center justify-center gap-2 w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all"
//                                 >
//                                     <Phone className="w-4 h-4" /> Fill the Form Instead
//                                 </a>
//                                 <button
//                                     onClick={() => setShowExitPopup(false)}
//                                     className="w-full py-2 text-gray-400 text-xs hover:text-gray-600 transition-colors"
//                                 >
//                                     No thanks, I'll figure it out myself
//                                 </button>
//                             </div>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             {/* ══════════════════════════════════════════════════════════════════════
//           HERO  —  DARK / BLACK
//       ══════════════════════════════════════════════════════════════════════ */}
//             <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-black">
//                 <motion.div style={{ y: heroY }} className="absolute inset-0 pointer-events-none">
//                     <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-blue-950/30" />
//                     <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
//                     <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
//                     <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-cyan-600/8 rounded-full blur-[100px]" />
//                 </motion.div>

//                 {[
//                     { x: "10%", y: "20%", s: 12, d: 0 }, { x: "85%", y: "15%", s: 8, d: 0.5 },
//                     { x: "70%", y: "70%", s: 16, d: 1 }, { x: "20%", y: "75%", s: 8, d: 1.5 },
//                     { x: "50%", y: "10%", s: 12, d: 0.8 },
//                 ].map((o, i) => (
//                     <motion.div key={i} className="absolute rounded-full bg-blue-400/25"
//                         style={{ left: o.x, top: o.y, width: o.s, height: o.s }}
//                         animate={{ y: [-12, 12, -12], opacity: [0.2, 0.7, 0.2] }}
//                         transition={{ duration: 4 + i * 0.6, repeat: Infinity, delay: o.d }}
//                     />
//                 ))}

//                 <motion.div style={{ opacity: heroOpacity }} className="relative z-10 w-full">
//                     <div className="container mx-auto px-6 max-w-7xl pt-32 pb-20">
//                         <div className="max-w-4xl mx-auto text-center">
//                             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
//                                 className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
//                             >
//                                 <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
//                                 <span className="text-sm text-white/70 font-medium tracking-wide">STARTUP GROWTH PROGRAM</span>
//                                 <Sparkles className="w-3.5 h-3.5 text-blue-400" />
//                             </motion.div>

//                             <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
//                                 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading leading-[1.05] tracking-tight mb-8 text-white"
//                             >
//                                 Turn Your Startup
//                                 <span className="block mt-2">
//                                     Into A{" "}
//                                     <span className="relative inline-block">
//                                         <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">Brand</span>
//                                         <motion.div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
//                                             initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.9, duration: 0.6 }} />
//                                     </span>{" "}People
//                                 </span>
//                                 <span className="block mt-2 text-white/90">Remember</span>
//                             </motion.h1>

//                             <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
//                                 className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"
//                             >
//                                 From branding and websites to content, SEO, paid ads, and growth systems — we help startups launch, grow, and scale with confidence.
//                             </motion.p>

//                             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }}
//                                 className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
//                             >
//                                 <motion.a href="#contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
//                                     className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-100 transition-all shadow-2xl shadow-white/10"
//                                 >
//                                     <Phone className="w-4 h-4" /> Book Free Strategy Call
//                                 </motion.a>
//                                 <motion.a href="#audit" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
//                                     className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full text-sm hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm"
//                                 >
//                                     <Target className="w-4 h-4" /> Get Free Growth Audit
//                                 </motion.a>
//                             </motion.div>

//                             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
//                                 className="flex flex-wrap justify-center gap-3"
//                             >
//                                 {TRUST_ITEMS.map((item, i) => (
//                                     <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
//                                         <CheckCircle className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" /> {item}
//                                     </div>
//                                 ))}
//                             </motion.div>

//                             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.6 }}
//                                 className="grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-white/10 max-w-2xl mx-auto"
//                             >
//                                 {[{ val: 150, suffix: "+", label: "Brands Built" }, { val: 7, suffix: "+", label: "Years Experience" }, { val: 98, suffix: "%", label: "Client Retention" }].map((s, i) => (
//                                     <div key={i} className="text-center">
//                                         <div className="text-3xl md:text-4xl font-bold font-heading text-white mb-1"><Counter to={s.val} suffix={s.suffix} /></div>
//                                         <p className="text-xs text-white/40 uppercase tracking-wider">{s.label}</p>
//                                     </div>
//                                 ))}
//                             </motion.div>
//                         </div>
//                     </div>
//                 </motion.div>

//                 <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
//                     <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
//                         <div className="w-0.5 h-2 bg-white/40 rounded-full" />
//                     </div>
//                 </motion.div>
//             </section>

//             {/* ══ PROBLEM ══════════════════════════════════════════════════════════ */}
//             <section className="py-28 bg-white relative overflow-hidden">
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <motion.div {...fadeUp} className="text-center mb-16">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-200 bg-red-50 mb-6">
//                             <span className="text-red-600 text-xs font-bold uppercase tracking-widest">The Problem</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-black leading-tight">
//                             Why Most Startups
//                             <span className="block text-gray-300 mt-2">Struggle To Grow</span>
//                         </h2>
//                         <p className="text-gray-500 mt-4 max-w-xl mx-auto">These are the 8 growth killers we see in almost every startup we talk to.</p>
//                     </motion.div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                         {PROBLEMS.map((p, i) => {
//                             const Icon = p.icon;
//                             return (
//                                 <motion.div key={i}
//                                     initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }}
//                                     whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
//                                     className="group p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-red-200 transition-all duration-300 shadow-sm"
//                                 >
//                                     <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
//                                         <Icon className="w-4 h-4 text-red-500" />
//                                     </div>
//                                     <h3 className="font-bold text-black text-sm mb-2 font-heading">{p.title}</h3>
//                                     <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>

//                     <motion.div {...fadeUp} className="mt-16 relative rounded-3xl overflow-hidden border-2 border-blue-100 bg-gradient-to-r from-blue-50 via-white to-cyan-50 p-10 text-center">
//                         <Sparkles className="w-8 h-8 text-blue-600 mx-auto mb-4" />
//                         <h3 className="text-2xl md:text-3xl font-bold font-heading text-black mb-3">MarkTale is the answer to all of this.</h3>
//                         <p className="text-gray-500 text-base max-w-xl mx-auto">One growth partner. Every function covered. Built specifically for startups who want to move fast and grow sustainably.</p>
//                         <motion.a href="#contact" whileHover={{ scale: 1.04 }}
//                             className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-full text-sm hover:bg-blue-700 transition-all shadow-md"
//                         >
//                             Talk To Us <ArrowRight className="w-4 h-4" />
//                         </motion.a>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* ══ SERVICES ═════════════════════════════════════════════════════════ */}
//             <section className="py-28 bg-gray-50 relative" id="services">
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <motion.div {...fadeUp} className="text-center mb-16">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 mb-6">
//                             <span className="text-blue-700 text-xs font-bold uppercase tracking-widest">What We Build</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-black leading-tight">
//                             Everything Your Startup
//                             <span className="block text-blue-600 mt-2">Needs To Grow</span>
//                         </h2>
//                     </motion.div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                         {SERVICES.map((s, i) => {
//                             const Icon = s.icon;
//                             const isBlue = s.accent === "blue";
//                             return (
//                                 <motion.div key={i}
//                                     initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
//                                     whileHover={{ y: -8, boxShadow: isBlue ? "0 20px 50px rgba(59,130,246,0.2)" : "0 20px 40px rgba(0,0,0,0.08)" }}
//                                     className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 ${isBlue ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-200 hover:border-blue-200"}`}
//                                 >
//                                     <div className="flex items-start justify-between mb-5">
//                                         <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${isBlue ? "bg-white/20" : "bg-blue-50"}`}>
//                                             <Icon className={`w-5 h-5 ${isBlue ? "text-white" : "text-blue-600"}`} />
//                                         </div>
//                                         <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${isBlue ? "bg-white/20 text-white" : "bg-blue-50 text-blue-700 border border-blue-200"}`}>{s.tag}</span>
//                                     </div>
//                                     <h3 className={`font-bold text-sm mb-2 font-heading leading-snug ${isBlue ? "text-white" : "text-black"}`}>{s.title}</h3>
//                                     <p className={`text-xs leading-relaxed ${isBlue ? "text-blue-100" : "text-gray-500"}`}>{s.desc}</p>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* ══ BRAND WALL ═══════════════════════════════════════════════════════ */}
//             <section className="py-20 bg-black border-y border-white/10">
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <motion.div {...fadeUp} className="text-center mb-12">
//                         <p className="text-white/30 text-xs uppercase tracking-[0.3em] mb-3">Trusted By Growing Brands</p>
//                         <h2 className="text-2xl md:text-3xl font-bold font-heading text-white">Brands We Have Built</h2>
//                     </motion.div>
//                     <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-9 gap-3">
//                         {BRANDS.map((b, i) => (
//                             <motion.div key={i}
//                                 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
//                                 whileHover={{ scale: 1.08 }}
//                                 className="group relative aspect-square rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/50 flex items-center justify-center p-3 cursor-pointer overflow-hidden transition-all duration-300"
//                             >
//                                 <Link href={`/portfolio/${b.id}`}>
//                                     <Image src={b.image} alt={b.name} fill className="object-contain p-3 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100" />
//                                     <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
//                                         <div>
//                                             <p className="text-white text-[9px] font-bold leading-tight">{b.name}</p>
//                                             <p className="text-blue-200 text-[8px]">{b.growth} growth</p>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ══ CASE STUDIES ═════════════════════════════════════════════════════ */}
//             <section className="py-28 bg-white" id="brands">
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <motion.div {...fadeUp} className="text-center mb-16">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 mb-6">
//                             <span className="text-gray-600 text-xs font-bold uppercase tracking-widest">Case Studies</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-black leading-tight">
//                             Real Brands.
//                             <span className="block text-gray-300 mt-2">Real Growth Stories.</span>
//                         </h2>
//                     </motion.div>

//                     <div className="space-y-6">
//                         {CASE_STUDIES.map((cs, i) => {
//                             const isDark = i % 2 === 0;
//                             return (
//                                 <motion.div key={i}
//                                     initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }}
//                                     className={`group relative rounded-3xl border-2 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl ${isDark ? "bg-black border-black" : "bg-white border-gray-200 hover:border-blue-200"}`}
//                                 >
//                                     <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
//                                         <div className="flex flex-col gap-5">
//                                             <div className={`relative w-16 h-16 rounded-2xl overflow-hidden border ${isDark ? "bg-white/10 border-white/20" : "bg-gray-50 border-gray-200"}`}>
//                                                 <Image src={cs.image} alt={cs.name} fill className="object-contain p-2" />
//                                             </div>
//                                             <div>
//                                                 <p className={`text-xs uppercase tracking-widest mb-1 ${isDark ? "text-white/40" : "text-gray-400"}`}>{cs.industry}</p>
//                                                 <h3 className={`text-2xl font-bold font-heading mb-2 ${isDark ? "text-white" : "text-black"}`}>{cs.name}</h3>
//                                                 <p className={`text-sm italic ${isDark ? "text-white/50" : "text-gray-500"}`}>&ldquo;{cs.tagline}&rdquo;</p>
//                                             </div>
//                                             <Link href={`/portfolio/${cs.id}`}
//                                                 className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"}`}
//                                             >
//                                                 View Full Case Study <ArrowUpRight className="w-4 h-4" />
//                                             </Link>
//                                         </div>

//                                         <div className="space-y-5">
//                                             <div>
//                                                 <p className={`text-xs uppercase tracking-widest mb-2 ${isDark ? "text-white/30" : "text-gray-400"}`}>The Challenge</p>
//                                                 <p className={`text-sm leading-relaxed ${isDark ? "text-white/70" : "text-gray-600"}`}>{cs.challenge}</p>
//                                             </div>
//                                             <div>
//                                                 <p className={`text-xs uppercase tracking-widest mb-2 ${isDark ? "text-white/30" : "text-gray-400"}`}>What We Did</p>
//                                                 <div className="flex flex-wrap gap-1.5">
//                                                     {cs.work.map((w, j) => (
//                                                         <span key={j} className={`text-xs px-3 py-1 rounded-full border ${isDark ? "border-white/15 bg-white/5 text-white/60" : "border-gray-200 bg-gray-50 text-gray-600"}`}>{w}</span>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div className="space-y-3">
//                                             <div className="grid grid-cols-3 gap-3">
//                                                 {cs.stats.map((stat, j) => (
//                                                     <div key={j} className={`text-center p-4 rounded-2xl ${isDark ? "bg-white/8 border border-white/10" : "bg-blue-50 border border-blue-100"}`}>
//                                                         <div className={`text-xl font-bold font-heading mb-1 ${isDark ? "text-white" : "text-black"}`}>{stat.value}</div>
//                                                         <div className={`text-xs ${isDark ? "text-white/40" : "text-gray-500"}`}>{stat.label}</div>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                             {cs.quote && (
//                                                 <div className={`p-4 rounded-2xl ${isDark ? "bg-white/5 border border-white/10" : "bg-gray-50 border border-gray-200"}`}>
//                                                     <p className={`text-xs italic mb-2 ${isDark ? "text-white/50" : "text-gray-500"}`}>&ldquo;{cs.quote}&rdquo;</p>
//                                                     <p className={`text-xs font-semibold ${isDark ? "text-white/30" : "text-gray-400"}`}>— {cs.quoteAuthor}</p>
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>

//                     <motion.div {...fadeUp} className="text-center mt-10">
//                         <Link href="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-300 rounded-full text-sm font-semibold transition-all">
//                             View All Projects <ArrowRight className="w-4 h-4" />
//                         </Link>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* ══ TIMELINE ═════════════════════════════════════════════════════════ */}
//             <section className="py-28 bg-gray-50 relative overflow-hidden">
//                 <div className="absolute inset-0 pointer-events-none">
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[150px]" />
//                 </div>
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <motion.div {...fadeUp} className="text-center mb-16">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
//                             <span className="text-gray-600 text-xs font-bold uppercase tracking-widest">Our Process</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-black">
//                             How We Build
//                             <span className="block text-blue-600 mt-2">Growth Stories</span>
//                         </h2>
//                     </motion.div>

//                     <div className="relative">
//                         <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent hidden sm:block" />
//                         <div className="space-y-8">
//                             {TIMELINE.map((t, i) => (
//                                 <motion.div key={i}
//                                     initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
//                                     className={`relative flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
//                                 >
//                                     <div className="flex-1 p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
//                                         <div className="flex items-center gap-4 mb-3">
//                                             <span className="text-4xl font-bold font-heading text-blue-100">{t.step}</span>
//                                             <h3 className="text-lg font-bold font-heading text-black">{t.title}</h3>
//                                         </div>
//                                         <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
//                                     </div>
//                                     <div className="hidden md:flex w-4 h-4 rounded-full bg-blue-600 border-2 border-blue-300 flex-shrink-0 shadow-lg shadow-blue-600/30" />
//                                     <div className="flex-1 hidden md:block" />
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ══ IMPACT METRICS ═══════════════════════════════════════════════════ */}
//             <section className="py-28 bg-white">
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <motion.div {...fadeUp} className="text-center mb-16">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 mb-6">
//                             <span className="text-gray-600 text-xs font-bold uppercase tracking-widest">Results & Impact</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl font-bold font-heading text-black">
//                             Focused On Outcomes,
//                             <span className="block text-gray-300 mt-2">Not Just Deliverables</span>
//                         </h2>
//                     </motion.div>

//                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//                         {[
//                             { val: 150, suffix: "+", label: "Brands Built", icon: Briefcase },
//                             { val: 98, suffix: "%", label: "Client Retention", icon: Heart },
//                             { val: 7, suffix: "+", label: "Years Experience", icon: Award },
//                             { val: 200, suffix: "%", label: "Avg Growth", icon: TrendingUp },
//                             { val: 50, suffix: "k+", label: "Leads Generated", icon: Target },
//                             { val: 4, suffix: ".9★", label: "Client Rating", icon: Star },
//                         ].map((m, i) => {
//                             const Icon = m.icon;
//                             return (
//                                 <motion.div key={i}
//                                     initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
//                                     whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(59,130,246,0.12)" }}
//                                     className="group text-center p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-blue-200 transition-all cursor-default shadow-sm"
//                                 >
//                                     <Icon className="w-5 h-5 text-blue-600 mx-auto mb-3 opacity-60 group-hover:opacity-100 transition-opacity" />
//                                     <div className="text-3xl font-bold font-heading text-black mb-1"><Counter to={m.val} suffix={m.suffix} /></div>
//                                     <p className="text-gray-400 text-xs">{m.label}</p>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* ══ COMPARISON ═══════════════════════════════════════════════════════ */}
//             <section className="py-28 bg-black relative overflow-hidden">
//                 <div className="absolute inset-0 pointer-events-none">
//                     <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[150px]" />
//                 </div>
//                 <div className="container mx-auto px-6 max-w-5xl relative z-10">
//                     <motion.div {...fadeUp} className="text-center mb-16">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
//                             <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Why MarkTale</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
//                             More Than
//                             <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">An Agency</span>
//                         </h2>
//                     </motion.div>

//                     <div className="grid grid-cols-2 gap-4 mb-4 px-4">
//                         <div className="text-center text-xs uppercase tracking-[0.2em] text-white/20 font-semibold pb-3 border-b border-white/10">Most Agencies</div>
//                         <div className="text-center text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold pb-3 border-b border-blue-500/40">MarkTale</div>
//                     </div>
//                     <div className="space-y-3">
//                         {COMPARISONS.map((c, i) => (
//                             <motion.div key={i}
//                                 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
//                                 className="grid grid-cols-2 gap-4"
//                             >
//                                 <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
//                                     <X className="w-4 h-4 text-red-500/60 flex-shrink-0" />
//                                     <span className="text-white/30 text-sm">{c.agency}</span>
//                                 </div>
//                                 <div className="p-4 rounded-2xl bg-blue-600 border border-blue-500 flex items-center gap-3">
//                                     <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
//                                     <span className="text-white text-sm font-medium">{c.marktale}</span>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ══ TESTIMONIALS ═════════════════════════════════════════════════════ */}
//             <section className="py-28 bg-gray-50">
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <motion.div {...fadeUp} className="text-center mb-16">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
//                             <span className="text-gray-600 text-xs font-bold uppercase tracking-widest">Client Love</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl font-bold font-heading text-black">
//                             What Founders
//                             <span className="block text-gray-300 mt-2">Say About Us</span>
//                         </h2>
//                         <div className="flex items-center justify-center gap-2 mt-6">
//                             {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
//                             <span className="text-gray-400 text-sm ml-2">4.9 · 150+ Founders</span>
//                         </div>
//                     </motion.div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//                         {TESTIMONIALS.map((t, i) => (
//                             <motion.div key={i}
//                                 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }}
//                                 whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
//                                 className="p-7 rounded-3xl bg-white border-2 border-gray-200 hover:border-blue-200 transition-all duration-300 shadow-sm"
//                             >
//                                 <div className="flex gap-0.5 mb-5">
//                                     {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
//                                 </div>
//                                 <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-center gap-3">
//                                         <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{t.initials}</div>
//                                         <div>
//                                             <p className="text-black font-semibold text-sm">{t.name}</p>
//                                             <p className="text-gray-400 text-xs">{t.role}</p>
//                                         </div>
//                                     </div>
//                                     <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">{t.achievement}</span>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ══ FAQ ══════════════════════════════════════════════════════════════ */}
//             <section className="py-28 bg-white">
//                 <div className="container mx-auto px-6 max-w-3xl">
//                     <motion.div {...fadeUp} className="text-center mb-14">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 mb-6">
//                             <span className="text-gray-600 text-xs font-bold uppercase tracking-widest">FAQ</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl font-bold font-heading text-black">
//                             Common
//                             <span className="block text-gray-300 mt-2">Questions</span>
//                         </h2>
//                     </motion.div>

//                     <div className="space-y-2">
//                         {FAQS.map((faq, i) => (
//                             <motion.div key={i}
//                                 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
//                                 className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${activeFaq === i ? "border-blue-300 bg-blue-50" : "border-gray-200 bg-white hover:border-gray-300"}`}
//                             >
//                                 <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
//                                     <span className="font-semibold text-black text-sm leading-snug font-heading">{faq.q}</span>
//                                     <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${activeFaq === i ? "bg-blue-600 border-blue-600" : "border-gray-300"}`}>
//                                         {activeFaq === i ? <ChevronUp className="w-3 h-3 text-white" /> : <ChevronDown className="w-3 h-3 text-gray-400" />}
//                                     </div>
//                                 </button>
//                                 <AnimatePresence>
//                                     {activeFaq === i && (
//                                         <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
//                                             <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-blue-100 pt-4">{faq.a}</p>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ══ CONTACT ══════════════════════════════════════════════════════════ */}
//             <section className="py-28 bg-gray-50" id="contact">
//                 <div className="container mx-auto px-6 max-w-7xl">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
//                         <motion.div {...fadeUp}>
//                             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 mb-8">
//                                 <span className="text-blue-700 text-xs font-bold uppercase tracking-widest">Let&apos;s Talk</span>
//                             </div>
//                             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6 text-black">
//                                 Your Startup
//                                 <span className="block text-blue-600 mt-2">Deserves More</span>
//                                 <span className="block text-black mt-2">Than Just Marketing</span>
//                             </h2>
//                             <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-md">
//                                 Whether you&apos;re validating an idea, launching a product, or scaling an existing business — MarkTale helps you build a brand customers trust and remember.
//                             </p>

//                             <div className="space-y-4 mb-10">
//                                 {[
//                                     { icon: Phone, label: "Call / WhatsApp", value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE_RAW}` },
//                                     { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
//                                     { icon: Globe, label: "Website", value: "marktaleworld.com", href: "https://marktaleworld.com" },
//                                 ].map((c, i) => {
//                                     const Icon = c.icon;
//                                     return (
//                                         <a key={i} href={c.href} className="flex items-center gap-4 group">
//                                             <div className="w-10 h-10 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all shadow-sm">
//                                                 <Icon className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
//                                             </div>
//                                             <div>
//                                                 <p className="text-gray-400 text-xs uppercase tracking-wider">{c.label}</p>
//                                                 <p className="text-black text-sm font-medium group-hover:text-blue-600 transition-colors">{c.value}</p>
//                                             </div>
//                                         </a>
//                                     );
//                                 })}
//                             </div>

//                             <motion.a
//                                 href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20MarkTale%2C%20I%20want%20a%20free%20startup%20growth%20strategy%20call`}
//                                 target="_blank" rel="noopener noreferrer"
//                                 whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
//                                 className="inline-flex items-center gap-3 px-7 py-4 bg-[#25D366] hover:bg-[#20bc5a] text-white font-bold rounded-full shadow-lg shadow-green-500/20 transition-all"
//                             >
//                                 <MessageCircle className="w-5 h-5" /> Chat On WhatsApp
//                             </motion.a>
//                         </motion.div>

//                         <motion.div {...fadeUp} id="audit">
//                             <div className="rounded-3xl border-2 border-gray-200 bg-white shadow-xl p-8">
//                                 <h3 className="text-xl font-bold font-heading text-black mb-2">Book Free Strategy Call</h3>
//                                 <p className="text-gray-400 text-sm mb-7">30-minute session. We&apos;ll audit your digital presence and give you a clear growth roadmap — completely free.</p>

//                                 <AnimatePresence mode="wait">
//                                     {submitted ? (
//                                         <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-14">
//                                             <div className="w-16 h-16 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
//                                                 <CheckCircle className="w-8 h-8 text-green-500" />
//                                             </div>
//                                             <h4 className="text-xl font-bold text-black mb-2 font-heading">Message Sent!</h4>
//                                             <p className="text-gray-400 text-sm">Our team will reach out within 24 hours.</p>
//                                         </motion.div>
//                                     ) : (
//                                         <motion.div key="form" className="space-y-4">
//                                             {formError && <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">{formError}</div>}
//                                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                                 {[
//                                                     { label: "Your Name *", key: "name", placeholder: "Full name", type: "text" },
//                                                     { label: "Phone / WhatsApp *", key: "phone", placeholder: "+91 98765 43210", type: "tel" },
//                                                 ].map((f) => (
//                                                     <div key={f.key}>
//                                                         <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-semibold">{f.label}</label>
//                                                         <input type={f.type} placeholder={f.placeholder} value={formData[f.key as keyof typeof formData]}
//                                                             onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
//                                                             className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm text-black placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
//                                                         />
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                             <div>
//                                                 <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-semibold">Email *</label>
//                                                 <input type="email" placeholder="your@email.com" value={formData.email}
//                                                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                                                     className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm text-black placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
//                                                 />
//                                             </div>
//                                             <div>
//                                                 <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-semibold">Service Needed</label>
//                                                 <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}
//                                                     className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm text-black focus:outline-none focus:border-blue-400 transition-all appearance-none"
//                                                 >
//                                                     <option value="">Select a service</option>
//                                                     {["Website Development", "Brand Identity", "Social Media Growth", "SEO", "Performance Marketing", "Content & Storytelling", "AI Automation", "Lead Generation", "Full Startup Package", "Not sure — needs discussion"].map((o) => (
//                                                         <option key={o} value={o}>{o}</option>
//                                                     ))}
//                                                 </select>
//                                             </div>
//                                             <div>
//                                                 <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-semibold">Tell Us About Your Startup</label>
//                                                 <textarea rows={3} placeholder="What's your business? What specific challenge are you facing?"
//                                                     value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                                                     className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm text-black placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all resize-none"
//                                                 />
//                                             </div>
//                                             <motion.button onClick={handleSubmit} disabled={submitting}
//                                                 whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
//                                                 className="w-full flex items-center justify-center gap-2.5 py-4 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-all disabled:opacity-60 shadow-lg shadow-blue-600/20"
//                                             >
//                                                 <Rocket className="w-4 h-4" />
//                                                 {submitting ? "Sending..." : "Book Free Strategy Call"}
//                                             </motion.button>
//                                             <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
//                                                 <Shield className="w-3 h-3" /> No spam · Free · Response within 24 hours
//                                             </p>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </div>
//             </section>

//             {/* ══ FINAL CTA ════════════════════════════════════════════════════════ */}
//             <section className="py-28 bg-black relative overflow-hidden">
//                 <div className="absolute inset-0 pointer-events-none">
//                     <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/8 rounded-full blur-[120px]" />
//                 </div>
//                 <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
//                     <motion.div {...fadeUp}>
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
//                             <Sparkles className="w-3.5 h-3.5 text-blue-400" />
//                             <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Start Today</span>
//                         </div>
//                         <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-[1.05] mb-6">
//                             Your Startup
//                             <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent mt-2">Deserves More</span>
//                             <span className="block text-white/80 mt-2">Than Just Marketing</span>
//                         </h2>
//                         <p className="text-white/40 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
//                             Whether you&apos;re validating an idea, launching a product, or scaling — MarkTale helps you build a brand people trust and remember.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <motion.a href="#contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
//                                 className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-100 transition-all shadow-2xl shadow-white/10"
//                             >
//                                 <Phone className="w-4 h-4" /> Book Free Strategy Call
//                             </motion.a>
//                             <motion.a
//                                 href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20MarkTale%2C%20startup%20growth%20ke%20liye%20baat%20karni%20hai`}
//                                 target="_blank" rel="noopener noreferrer"
//                                 whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
//                                 className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] text-white font-bold rounded-full text-sm hover:bg-[#20bc5a] transition-all shadow-lg"
//                             >
//                                 <MessageCircle className="w-4 h-4" /> Chat On WhatsApp
//                             </motion.a>
//                         </div>

//                         {/* Back to main site */}
//                         <div className="mt-12 pt-8 border-t border-white/10">
//                             <Link href="/" className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-sm transition-colors">
//                                 <Home className="w-4 h-4" /> Back to MarkTale World
//                             </Link>
//                         </div>
//                     </motion.div>
//                 </div>
//             </section>
//         </div>
//     );
// }



"use client";

// app/startup-growth-lp/page.tsx
// STANDALONE landing page — NO Navbar / Footer
// Features: Home button, Exit Intent Popup, Scroll Progress, Scroll-to-Top

import React, { useState, useEffect, useRef } from "react";
import {
    motion,
    AnimatePresence,
    useInView,
    useScroll,
    useTransform,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Rocket, Target, TrendingUp, ArrowRight, Globe, Users, Star,
    Sparkles, CheckCircle, Briefcase, Award, Heart, X, Phone, Mail,
    MessageCircle, Code, Palette, BarChart2, Share2, Search, Video,
    Bot, Megaphone, ChevronDown, ChevronUp, Shield, ArrowUpRight,
    Layers, Home, ArrowUp,
} from "lucide-react";

// ─── ENV ──────────────────────────────────────────────────────────────────────
// ─── ENV ─────────────────────────────────────────────────────
const CONTACT_EMAIL =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "marktaleworld@gmail.com";

const CONTACT_PHONE =
    process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+91-8587870707";

const CONTACT_PHONE_RAW =
    process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW ?? "918587870707";

const WHATSAPP_NUMBER =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "918587870707";

const WHATSAPP_MESSAGE =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
    "Hi MarkTale, I want to know more about startup growth services.";

// ─── Animated Counter ─────────────────────────────────────────────────────────
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const timer = setInterval(() => {
            start += to / 80;
            if (start >= to) { setCount(to); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [inView, to]);
    return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const TRUST_ITEMS = [
    "Startup Focused", "End-to-End Growth Support",
    "Brand + Technology + Marketing", "Long-Term Growth Partner",
];

const PROBLEMS = [
    { title: "No Professional Website", desc: "First impressions matter. Without a solid web presence, you lose credibility before the conversation even starts.", icon: Globe },
    { title: "Weak Branding", desc: "If your brand doesn't stand out, you're competing on price alone — a race to the bottom you can't win.", icon: Palette },
    { title: "Low Visibility", desc: "Great products go unnoticed without the right SEO, content, and distribution strategy in place.", icon: Search },
    { title: "Poor Lead Generation", desc: "Random social posts don't build pipelines. You need systems that generate qualified leads consistently.", icon: Target },
    { title: "Inconsistent Content", desc: "Posting once in a while won't build trust. Brands that win show up consistently with real value.", icon: Video },
    { title: "No Marketing Strategy", desc: "Tactics without strategy is noise. Most startups try everything and see results from nothing.", icon: Layers },
    { title: "Limited Resources", desc: "You can't hire 6 specialists. You need one partner who brings the entire growth stack.", icon: Users },
    { title: "Expensive In-House Teams", desc: "A full marketing team costs ₹5–15L/month. A growth partner delivers more at a fraction of that cost.", icon: Briefcase },
];

const SERVICES = [
    { icon: Palette, title: "Brand Identity", desc: "Build a memorable brand that customers trust — logo, colors, voice, and positioning that sets you apart.", tag: "Foundation", accent: "blue" },
    { icon: Code, title: "Website Development", desc: "Fast, scalable, conversion-focused websites. Built on Next.js — the same stack powering MarkTale itself.", tag: "Essential", accent: "white" },
    { icon: Share2, title: "Social Media Growth", desc: "Build awareness, community, and loyalty across Instagram, LinkedIn, YouTube, and beyond.", tag: "Visibility", accent: "blue" },
    { icon: Search, title: "SEO", desc: "Rank higher on Google, generate consistent organic traffic, and reduce your dependence on paid ads.", tag: "Long-term", accent: "white" },
    { icon: BarChart2, title: "Performance Marketing", desc: "ROI-focused campaigns on Meta and Google. Every rupee tracked, every campaign optimised for returns.", tag: "High Impact", accent: "blue" },
    { icon: Video, title: "Content & Storytelling", desc: "Create authority through articles, reels, case studies, and videos that attract and convert your audience.", tag: "Authority", accent: "white" },
    { icon: Bot, title: "AI Automation", desc: "Automate repetitive workflows and scale efficiently with smart AI-powered systems built for your business.", tag: "Future-Ready", accent: "blue" },
    { icon: Megaphone, title: "Lead Generation", desc: "Build predictable, scalable pipelines — funnels, CRM setup, retargeting, and complete nurture flows.", tag: "Revenue", accent: "white" },
];

const BRANDS = [
    { id: "mentorleap", name: "MentorLeap", image: "/Feature_logos/mentorleep.png", growth: "400%" },
    { id: "delhi059", name: "Delhi059", image: "/delhi059-logo.jpg", growth: "500%" },
    { id: "local-ride", name: "Local Ride", image: "/Feature_logos/localride.jpg", growth: "300%" },
    { id: "bg-foods", name: "BG Foods", image: "/Feature_logos/bgfoods.jpeg", growth: "1000%" },
    { id: "dee-cee-accessories", name: "Dee Cee Accessories", image: "/Feature_logos/deecee.jpg", growth: "900%" },
    { id: "cabtale", name: "CabTale", image: "/Feature_logos/cabtale.jpg", growth: "800%" },
    { id: "last-mile-care", name: "Last Mile Care", image: "/Feature_logos/lastmilecare.jpeg", growth: "200%" },
    { id: "promac-advisory", name: "Promac Advisory", image: "/Feature_logos/promac.png", growth: "350%" },
    { id: "biryani-bar", name: "Biryani Bar", image: "/Feature_logos/biryanibar.jpg", growth: "450%" },
];

const CASE_STUDIES = [
    {
        id: "delhi059", name: "Delhi059", industry: "Restaurant · Canada", image: "/delhi059-logo.jpg",
        tagline: "Canada's culinary icon — built without a rupee in ad spend",
        challenge: "New restaurant in a saturated Canadian market. Zero reviews, zero digital presence, zero ad budget.",
        work: ["Local SEO", "Google Business", "UGC Strategy", "Community Marketing", "Photography"],
        stats: [{ value: "650+", label: "Google Reviews" }, { value: "4.7★", label: "Avg Rating" }, { value: "#1", label: "Local Map Rank" }],
        quote: "MarkTale didn't just market our restaurant — they made us the go-to place for the entire Indian community.", quoteAuthor: "Owner, Delhi059 Canada",
    },
    {
        id: "local-ride", name: "Local Ride", industry: "Transportation · Canada", image: "/Feature_logos/localride.jpg",
        tagline: "100,000+ rides. Zero commission for drivers.",
        challenge: "Building a two-sided rideshare marketplace from scratch against Uber and Lyft, with limited launch capital.",
        work: ["Product Strategy", "App Development", "Brand Identity", "Driver Acquisition", "City Launch Campaigns"],
        stats: [{ value: "100k+", label: "Rides Completed" }, { value: "2,000+", label: "Active Drivers" }, { value: "3", label: "Cities Launched" }],
        quote: null, quoteAuthor: null,
    },
    {
        id: "bg-foods", name: "BG Foods", industry: "E-commerce · Canada/USA", image: "/Feature_logos/bgfoods.jpeg",
        tagline: "50,000+ orders. Built entirely from scratch.",
        challenge: "From home-kitchen idea to multi-country operation with no digital infrastructure, no supply chain, no audience.",
        work: ["Brand Identity", "Shopify Store", "Amazon Listings", "Influencer Marketing", "Email Growth"],
        stats: [{ value: "50k+", label: "Orders Fulfilled" }, { value: "40+", label: "Retail Stores" }, { value: "1000%", label: "Revenue Growth" }],
        quote: "From zero to 50,000 orders. MarkTale built everything — brand, store, listings, marketing. Genuinely a full-stack growth team.", quoteAuthor: "CEO, BG Foods",
    },
];

const TIMELINE = [
    { step: "01", title: "Discovery", desc: "Deep dive into your business, audience, and competitive landscape. We learn your world before building in it." },
    { step: "02", title: "Strategy", desc: "A clear growth roadmap with measurable KPIs — no guesswork, no vague deliverables. Just a focused plan." },
    { step: "03", title: "Brand Building", desc: "Visual identity, tone of voice, and positioning that makes you unmistakable in your market segment." },
    { step: "04", title: "Digital Presence", desc: "Website, social media, SEO setup — all channels built to convert visitors into customers, not just exist." },
    { step: "05", title: "Marketing & Growth", desc: "Content, ads, lead generation, and community — consistent execution that compounds results over time." },
    { step: "06", title: "Scale & Optimise", desc: "Data-driven iteration, automation, and expansion into new channels as your business grows." },
];

const COMPARISONS = [
    { agency: "Sells services, not outcomes", marktale: "Builds complete growth systems" },
    { agency: "Focuses on deliverables only", marktale: "Focuses on real business outcomes" },
    { agency: "Works project to project", marktale: "Acts as your long-term growth partner" },
    { agency: "One-size-fits-all packages", marktale: "Custom strategy for each startup" },
    { agency: "Reports vanity metrics", marktale: "Reports revenue impact and ROI" },
];

const FAQS = [
    { q: "How do you work with startups?", a: "We start with a free strategy call to understand your business, stage, and goals. Then we build a custom roadmap — no generic packages. We embed ourselves as your growth team, not just a vendor you call once a month." },
    { q: "What industries do you work with?", a: "We've built brands across EdTech, Restaurant, Transportation, E-commerce, Real Estate, NGOs, Food & FMCG, and more. If you're building something that needs to grow, we've likely done something similar before." },
    { q: "Do you offer branding and website development together?", a: "Absolutely — in fact, that's our recommended starting point. Brand identity and website go hand in hand. We deliver both with a single unified strategy so everything looks and feels consistent." },
    { q: "Can you manage our marketing completely?", a: "Yes. Our Growth and Scale plans are designed to be your complete marketing function — from strategy to execution to reporting. No need to hire in-house for individual roles." },
    { q: "How do we get started?", a: "Book a free 30-minute strategy call. We'll audit your current digital presence, identify your biggest growth levers, and give you a clear next step — whether you work with us or not." },
];

const TESTIMONIALS = [
    { name: "Owner, Delhi059 Canada", role: "Restaurant · Canada", initials: "D0", achievement: "650+ Reviews", quote: "MarkTale didn't just market our restaurant — they made us the go-to place for the entire Indian community in our city. 650+ reviews with zero ad spend." },
    { name: "Founder, MentorLeap", role: "EdTech · India", initials: "ML", achievement: "400% Growth", quote: "They rebuilt our entire brand narrative and built an SEO engine that reduced our paid CAC by 60%. Our growth went from stagnant to 400% YoY — incredible results." },
    { name: "CEO, BG Foods", role: "E-commerce · Canada", initials: "BG", achievement: "50k+ Orders", quote: "From zero to 50,000 orders. MarkTale built everything — brand, store, listings, marketing. They are genuinely a full-stack growth team that delivers." },
];

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function StartupGrowthLandingPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [formError, setFormError] = useState("");

    // UI states
    const [scrolled, setScrolled] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [showExitPopup, setShowExitPopup] = useState(false);
    const [exitPopupShown, setExitPopupShown] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // ── Scroll handler ──────────────────────────────────────────────────────────
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(totalHeight > 0 ? (scrolled / totalHeight) * 100 : 0);
            setScrolled(scrolled > 60);
            setShowScrollTop(scrolled > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ── Exit Intent — mouse leaves top of viewport ──────────────────────────────
    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 5 && !exitPopupShown) {
                setShowExitPopup(true);
                setExitPopupShown(true);
            }
        };
        document.addEventListener("mouseleave", handleMouseLeave);
        return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }, [exitPopupShown]);

    // ── Form submit ─────────────────────────────────────────────────────────────
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormError("");
        if (!formData.name || !formData.phone || !formData.email) {
            setFormError("Name, phone and email are required.");
            return;
        }
        setSubmitting(true);
        try {
            const res = await fetch("/api/enquiries", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, source: "startup-growth-landing-page" }),
            });
            const data = await res.json();
            if (!res.ok || !data.success) throw new Error(data.error || "Something went wrong.");
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 6000);
            setFormData({ name: "", phone: "", email: "", service: "", message: "" });
        } catch (err: unknown) {
            setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const fadeUp = {
        initial: { opacity: 0, y: 32 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.65 },
    };

    return (
        <div className="bg-white text-black overflow-x-hidden font-body">

            {/* ══ SCROLL PROGRESS BAR ══════════════════════════════════════════════ */}
            <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-gray-200">
                <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-100"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* ══ STICKY MINI HEADER ═══════════════════════════════════════════════ */}
            <header className={`fixed top-0.5 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"}`}>
                <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-50 h-8">
                            {/* <Image src="/images/logo.png" alt="MarkTale" fill className="object-contain" /> */}
                            <Image src="/images/image.png" alt="MarkTale" fill className="object-contain" />
                        </div>
                        <span className="text-white font-bold font-heading text-lg tracking-tight"></span>
                    </Link>

                    {/* Right side — CTA + Home */}
                    <div className="flex items-center gap-3">
                        <a
                            href="#contact"
                            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-full transition-all"
                        >
                            <Phone className="w-3 h-3" /> Free Strategy Call
                        </a>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 hover:bg-white hover:text-black text-xs font-semibold transition-all duration-200"
                        >
                            <Home className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Back to MarkTale</span>
                            <span className="sm:hidden">Home</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* ══ SCROLL TO TOP BUTTON ═════════════════════════════════════════════ */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="fixed bottom-21 left-6 z-40 w-11 h-11 bg-black border border-white/20 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-900 transition-colors"
                    >
                        <ArrowUp className="w-4 h-4" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* ══ EXIT INTENT POPUP ════════════════════════════════════════════════ */}
            {/* <AnimatePresence>
                {showExitPopup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setShowExitPopup(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
                        >
                            <button
                                onClick={() => setShowExitPopup(false)}
                                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                            >
                                <X className="w-4 h-4 text-gray-600" />
                            </button>

                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Rocket className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-black mb-2">Wait! Don't leave yet 👋</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Get a <strong className="text-black">FREE 30-minute strategy call</strong> before you go. We'll audit your startup's digital presence — no obligation.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <a
                                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20MarkTale%2C%20I%20want%20the%20free%20strategy%20call`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setShowExitPopup(false)}
                                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] hover:bg-[#20bc5a] text-white font-bold rounded-xl text-sm transition-all"
                                >
                                    <MessageCircle className="w-4 h-4" /> Book on WhatsApp — It's Free
                                </a>
                                <a
                                    href="#contact"
                                    onClick={() => setShowExitPopup(false)}
                                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all"
                                >
                                    <Phone className="w-4 h-4" /> Fill the Form Instead
                                </a>
                                <button
                                    onClick={() => setShowExitPopup(false)}
                                    className="w-full py-2 text-gray-400 text-xs hover:text-gray-600 transition-colors"
                                >
                                    No thanks, I'll figure it out myself
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence> */}

            {/* ══════════════════════════════════════════════════════════════════════
          HERO  —  DARK / BLACK
      ══════════════════════════════════════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-black">
                <motion.div style={{ y: heroY }} className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-blue-950/30" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
                    <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-cyan-600/8 rounded-full blur-[100px]" />
                </motion.div>

                {[
                    { x: "10%", y: "20%", s: 12, d: 0 }, { x: "85%", y: "15%", s: 8, d: 0.5 },
                    { x: "70%", y: "70%", s: 16, d: 1 }, { x: "20%", y: "75%", s: 8, d: 1.5 },
                    { x: "50%", y: "10%", s: 12, d: 0.8 },
                ].map((o, i) => (
                    <motion.div key={i} className="absolute rounded-full bg-blue-400/25"
                        style={{ left: o.x, top: o.y, width: o.s, height: o.s }}
                        animate={{ y: [-12, 12, -12], opacity: [0.2, 0.7, 0.2] }}
                        transition={{ duration: 4 + i * 0.6, repeat: Infinity, delay: o.d }}
                    />
                ))}

                <motion.div style={{ opacity: heroOpacity }} className="relative z-10 w-full">
                    <div className="container mx-auto px-6 max-w-7xl pt-18 pb-20">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
                            >
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                                <span className="text-sm text-white/70 font-medium tracking-wide">STARTUP GROWTH PROGRAM</span>
                                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                            </motion.div>

                            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading leading-[1.05] tracking-tight mb-8 text-white"
                            >
                                Turn Your Startup
                                <span className="block mt-2">
                                    Into A{" "}
                                    <span className="relative inline-block">
                                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">Brand</span>
                                        <motion.div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
                                            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.9, duration: 0.6 }} />
                                    </span>{" "}People
                                </span>
                                <span className="block mt-2 text-white/90">Remember</span>
                            </motion.h1>

                            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"
                            >
                                From branding and websites to content, SEO, paid ads, and growth systems — we help startups launch, grow, and scale with confidence.
                            </motion.p>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
                            >
                                <motion.a href="#contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-100 transition-all shadow-2xl shadow-white/10"
                                >
                                    <Phone className="w-4 h-4" /> Book Free Strategy Call
                                </motion.a>
                                <motion.a href="#audit" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full text-sm hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm"
                                >
                                    <Target className="w-4 h-4" /> Get Free Growth Audit
                                </motion.a>
                            </motion.div>

                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
                                className="flex flex-wrap justify-center gap-3"
                            >
                                {TRUST_ITEMS.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
                                        <CheckCircle className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" /> {item}
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.6 }}
                                className="grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-white/10 max-w-2xl mx-auto"
                            >
                                {[{ val: 150, suffix: "+", label: "Brands Built" }, { val: 7, suffix: "+", label: "Years Experience" }, { val: 98, suffix: "%", label: "Client Retention" }].map((s, i) => (
                                    <div key={i} className="text-center">
                                        <div className="text-3xl md:text-4xl font-bold font-heading text-white mb-1"><Counter to={s.val} suffix={s.suffix} /></div>
                                        <p className="text-xs text-white/40 uppercase tracking-wider">{s.label}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
                        <div className="w-0.5 h-2 bg-white/40 rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* ══ PROBLEM ══════════════════════════════════════════════════════════ */}
            <section className="py-28 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-200 bg-red-50 mb-6">
                            <span className="text-red-600 text-xs font-bold uppercase tracking-widest">The Problem</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-black leading-tight">
                            Why Most Startups
                            <span className="block text-gray-300 mt-2">Struggle To Grow</span>
                        </h2>
                        <p className="text-gray-500 mt-4 max-w-xl mx-auto">These are the 8 growth killers we see in almost every startup we talk to.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {PROBLEMS.map((p, i) => {
                            const Icon = p.icon;
                            return (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }}
                                    whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                                    className="group p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-red-200 transition-all duration-300 shadow-sm"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                                        <Icon className="w-4 h-4 text-red-500" />
                                    </div>
                                    <h3 className="font-bold text-black text-sm mb-2 font-heading">{p.title}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div {...fadeUp} className="mt-16 relative rounded-3xl overflow-hidden border-2 border-blue-100 bg-gradient-to-r from-blue-50 via-white to-cyan-50 p-10 text-center">
                        <Sparkles className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-black mb-3">MarkTale is the answer to all of this.</h3>
                        <p className="text-gray-500 text-base max-w-xl mx-auto">One growth partner. Every function covered. Built specifically for startups who want to move fast and grow sustainably.</p>
                        <motion.a href="#contact" whileHover={{ scale: 1.04 }}
                            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-full text-sm hover:bg-blue-700 transition-all shadow-md"
                        >
                            Talk To Us <ArrowRight className="w-4 h-4" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* ══ SERVICES ═════════════════════════════════════════════════════════ */}
            <section className="py-28 bg-gray-50 relative" id="services">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 mb-6">
                            <span className="text-blue-700 text-xs font-bold uppercase tracking-widest">What We Build</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-black leading-tight">
                            Everything Your Startup
                            <span className="block text-blue-600 mt-2">Needs To Grow</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {SERVICES.map((s, i) => {
                            const Icon = s.icon;
                            const isBlue = s.accent === "blue";
                            return (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
                                    whileHover={{ y: -8, boxShadow: isBlue ? "0 20px 50px rgba(59,130,246,0.2)" : "0 20px 40px rgba(0,0,0,0.08)" }}
                                    className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 ${isBlue ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-200 hover:border-blue-200"}`}
                                >
                                    <div className="flex items-start justify-between mb-5">
                                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${isBlue ? "bg-white/20" : "bg-blue-50"}`}>
                                            <Icon className={`w-5 h-5 ${isBlue ? "text-white" : "text-blue-600"}`} />
                                        </div>
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${isBlue ? "bg-white/20 text-white" : "bg-blue-50 text-blue-700 border border-blue-200"}`}>{s.tag}</span>
                                    </div>
                                    <h3 className={`font-bold text-sm mb-2 font-heading leading-snug ${isBlue ? "text-white" : "text-black"}`}>{s.title}</h3>
                                    <p className={`text-xs leading-relaxed ${isBlue ? "text-blue-100" : "text-gray-500"}`}>{s.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ══ BRAND WALL ═══════════════════════════════════════════════════════ */}
            <section className="py-20 bg-black border-y border-white/10">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div {...fadeUp} className="text-center mb-12">
                        <p className="text-white/30 text-xs uppercase tracking-[0.3em] mb-3">Trusted By Growing Brands</p>
                        <h2 className="text-2xl md:text-3xl font-bold font-heading text-white">Brands We Have Built</h2>
                    </motion.div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-9 gap-3">
                        {BRANDS.map((b, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.08 }}
                                className="group relative aspect-square rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/50 flex items-center justify-center p-3 cursor-pointer overflow-hidden transition-all duration-300"
                            >
                                <Link href={`/portfolio/${b.id}`}>
                                    <Image src={b.image} alt={b.name} fill className="object-contain p-3 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100" />
                                    <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                                        <div>
                                            <p className="text-white text-[9px] font-bold leading-tight">{b.name}</p>
                                            <p className="text-blue-200 text-[8px]">{b.growth} growth</p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ CASE STUDIES ═════════════════════════════════════════════════════ */}
            <section className="py-28 bg-white" id="brands">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 mb-6">
                            <span className="text-gray-600 text-xs font-bold uppercase tracking-widest">Case Studies</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-black leading-tight">
                            Real Brands.
                            <span className="block text-gray-300 mt-2">Real Growth Stories.</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {CASE_STUDIES.map((cs, i) => {
                            const isDark = i % 2 === 0;
                            return (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }}
                                    className={`group relative rounded-3xl border-2 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl ${isDark ? "bg-black border-black" : "bg-white border-gray-200 hover:border-blue-200"}`}
                                >
                                    <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                                        <div className="flex flex-col gap-5">
                                            <div className={`relative w-16 h-16 rounded-2xl overflow-hidden border ${isDark ? "bg-white/10 border-white/20" : "bg-gray-50 border-gray-200"}`}>
                                                <Image src={cs.image} alt={cs.name} fill className="object-contain p-2" />
                                            </div>
                                            <div>
                                                <p className={`text-xs uppercase tracking-widest mb-1 ${isDark ? "text-white/40" : "text-gray-400"}`}>{cs.industry}</p>
                                                <h3 className={`text-2xl font-bold font-heading mb-2 ${isDark ? "text-white" : "text-black"}`}>{cs.name}</h3>
                                                <p className={`text-sm italic ${isDark ? "text-white/50" : "text-gray-500"}`}>&ldquo;{cs.tagline}&rdquo;</p>
                                            </div>
                                            <Link href={`/portfolio/${cs.id}`}
                                                className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"}`}
                                            >
                                                View Full Case Study <ArrowUpRight className="w-4 h-4" />
                                            </Link>
                                        </div>

                                        <div className="space-y-5">
                                            <div>
                                                <p className={`text-xs uppercase tracking-widest mb-2 ${isDark ? "text-white/30" : "text-gray-400"}`}>The Challenge</p>
                                                <p className={`text-sm leading-relaxed ${isDark ? "text-white/70" : "text-gray-600"}`}>{cs.challenge}</p>
                                            </div>
                                            <div>
                                                <p className={`text-xs uppercase tracking-widest mb-2 ${isDark ? "text-white/30" : "text-gray-400"}`}>What We Did</p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {cs.work.map((w, j) => (
                                                        <span key={j} className={`text-xs px-3 py-1 rounded-full border ${isDark ? "border-white/15 bg-white/5 text-white/60" : "border-gray-200 bg-gray-50 text-gray-600"}`}>{w}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-3">
                                                {cs.stats.map((stat, j) => (
                                                    <div key={j} className={`text-center p-4 rounded-2xl ${isDark ? "bg-white/8 border border-white/10" : "bg-blue-50 border border-blue-100"}`}>
                                                        <div className={`text-xl font-bold font-heading mb-1 ${isDark ? "text-white" : "text-black"}`}>{stat.value}</div>
                                                        <div className={`text-xs ${isDark ? "text-white/40" : "text-gray-500"}`}>{stat.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                            {cs.quote && (
                                                <div className={`p-4 rounded-2xl ${isDark ? "bg-white/5 border border-white/10" : "bg-gray-50 border border-gray-200"}`}>
                                                    <p className={`text-xs italic mb-2 ${isDark ? "text-white/50" : "text-gray-500"}`}>&ldquo;{cs.quote}&rdquo;</p>
                                                    <p className={`text-xs font-semibold ${isDark ? "text-white/30" : "text-gray-400"}`}>— {cs.quoteAuthor}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div {...fadeUp} className="text-center mt-10">
                        <Link href="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-300 rounded-full text-sm font-semibold transition-all">
                            View All Projects <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ══ TIMELINE — BLACK BG ══════════════════════════════════════════════ */}
            <section className="py-28 bg-black relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/8 rounded-full blur-[150px]" />
                </div>
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
                            <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Our Process</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white">
                            How We Build
                            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">Growth Stories</span>
                        </h2>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent hidden sm:block" />
                        <div className="space-y-8">
                            {TIMELINE.map((t, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                                    className={`relative flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                                >
                                    <div className="flex-1 p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-blue-500/30 hover:bg-white/[0.07] transition-all">
                                        <div className="flex items-center gap-4 mb-3">
                                            <span className="text-4xl font-bold font-heading text-blue-500/30">{t.step}</span>
                                            <h3 className="text-lg font-bold font-heading text-white">{t.title}</h3>
                                        </div>
                                        <p className="text-white/50 text-sm leading-relaxed">{t.desc}</p>
                                    </div>
                                    <div className="hidden md:flex w-4 h-4 rounded-full bg-blue-500 border-2 border-blue-300 flex-shrink-0 shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ IMPACT METRICS ═══════════════════════════════════════════════════ */}
            <section className="py-28 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 mb-6">
                            <span className="text-gray-600 text-xs font-bold uppercase tracking-widest">Results & Impact</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-black">
                            Focused On Outcomes,
                            <span className="block text-gray-300 mt-2">Not Just Deliverables</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { val: 150, suffix: "+", label: "Brands Built", icon: Briefcase },
                            { val: 98, suffix: "%", label: "Client Retention", icon: Heart },
                            { val: 7, suffix: "+", label: "Years Experience", icon: Award },
                            { val: 200, suffix: "%", label: "Avg Growth", icon: TrendingUp },
                            { val: 50, suffix: "k+", label: "Leads Generated", icon: Target },
                            { val: 4, suffix: ".9★", label: "Client Rating", icon: Star },
                        ].map((m, i) => {
                            const Icon = m.icon;
                            return (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(59,130,246,0.12)" }}
                                    className="group text-center p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-blue-200 transition-all cursor-default shadow-sm"
                                >
                                    <Icon className="w-5 h-5 text-blue-600 mx-auto mb-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                                    <div className="text-3xl font-bold font-heading text-black mb-1"><Counter to={m.val} suffix={m.suffix} /></div>
                                    <p className="text-gray-400 text-xs">{m.label}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ══ COMPARISON ═══════════════════════════════════════════════════════ */}
            <section className="py-28 bg-black relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[150px]" />
                </div>
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
                            <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Why MarkTale</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
                            More Than
                            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">An Agency</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4 mb-4 px-4">
                        <div className="text-center text-xs uppercase tracking-[0.2em] text-white/20 font-semibold pb-3 border-b border-white/10">Most Agencies</div>
                        <div className="text-center text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold pb-3 border-b border-blue-500/40">MarkTale</div>
                    </div>
                    <div className="space-y-3">
                        {COMPARISONS.map((c, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                className="grid grid-cols-2 gap-4"
                            >
                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                                    <X className="w-4 h-4 text-red-500/60 flex-shrink-0" />
                                    <span className="text-white/30 text-sm">{c.agency}</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-blue-600 border border-blue-500 flex items-center gap-3">
                                    <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                                    <span className="text-white text-sm font-medium">{c.marktale}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ TESTIMONIALS ═════════════════════════════════════════════════════ */}
            <section className="py-28 bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
                            <span className="text-gray-600 text-xs font-bold uppercase tracking-widest">Client Love</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-black">
                            What Founders
                            <span className="block text-gray-300 mt-2">Say About Us</span>
                        </h2>
                        <div className="flex items-center justify-center gap-2 mt-6">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                            <span className="text-gray-400 text-sm ml-2">4.9 · 150+ Founders</span>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {TESTIMONIALS.map((t, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }}
                                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                                className="p-7 rounded-3xl bg-white border-2 border-gray-200 hover:border-blue-200 transition-all duration-300 shadow-sm"
                            >
                                <div className="flex gap-0.5 mb-5">
                                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{t.initials}</div>
                                        <div>
                                            <p className="text-black font-semibold text-sm">{t.name}</p>
                                            <p className="text-gray-400 text-xs">{t.role}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">{t.achievement}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ FAQ ══════════════════════════════════════════════════════════════ */}
            <section className="py-28 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <motion.div {...fadeUp} className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 mb-6">
                            <span className="text-gray-600 text-xs font-bold uppercase tracking-widest">FAQ</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-black">
                            Common
                            <span className="block text-gray-300 mt-2">Questions</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-2">
                        {FAQS.map((faq, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${activeFaq === i ? "border-blue-300 bg-blue-50" : "border-gray-200 bg-white hover:border-gray-300"}`}
                            >
                                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                                    <span className="font-semibold text-black text-sm leading-snug font-heading">{faq.q}</span>
                                    <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${activeFaq === i ? "bg-blue-600 border-blue-600" : "border-gray-300"}`}>
                                        {activeFaq === i ? <ChevronUp className="w-3 h-3 text-white" /> : <ChevronDown className="w-3 h-3 text-gray-400" />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {activeFaq === i && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                                            <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-blue-100 pt-4">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ CONTACT ══════════════════════════════════════════════════════════ */}
            <section className="py-28 bg-gray-50" id="contact">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                        <motion.div {...fadeUp}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 mb-8">
                                <span className="text-blue-700 text-xs font-bold uppercase tracking-widest">Let&apos;s Talk</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6 text-black">
                                Your Startup
                                <span className="block text-blue-600 mt-2">Deserves More</span>
                                <span className="block text-black mt-2">Than Just Marketing</span>
                            </h2>
                            <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-md">
                                Whether you&apos;re validating an idea, launching a product, or scaling an existing business — MarkTale helps you build a brand customers trust and remember.
                            </p>

                            <div className="space-y-4 mb-10">
                                {[
                                    { icon: Phone, label: "Call / WhatsApp", value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE_RAW}` },
                                    { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                                    { icon: Globe, label: "Website", value: "marktaleworld.com", href: "https://marktaleworld.com" },
                                ].map((c, i) => {
                                    const Icon = c.icon;
                                    return (
                                        <a key={i} href={c.href} className="flex items-center gap-4 group">
                                            <div className="w-10 h-10 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all shadow-sm">
                                                <Icon className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-xs uppercase tracking-wider">{c.label}</p>
                                                <p className="text-black text-sm font-medium group-hover:text-blue-600 transition-colors">{c.value}</p>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>

                            <motion.a
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                                target="_blank" rel="noopener noreferrer"
                                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-3 px-7 py-4 bg-[#25D366] hover:bg-[#20bc5a] text-white font-bold rounded-full shadow-lg shadow-green-500/20 transition-all"
                            >
                                <MessageCircle className="w-5 h-5" /> Chat On WhatsApp
                            </motion.a>
                        </motion.div>

                        <motion.div {...fadeUp} id="audit">
                            <div className="rounded-3xl border-2 border-gray-200 bg-white shadow-xl p-8">
                                <h3 className="text-xl font-bold font-heading text-black mb-2">Book Free Strategy Call</h3>
                                <p className="text-gray-400 text-sm mb-7">30-minute session. We&apos;ll audit your digital presence and give you a clear growth roadmap — completely free.</p>

                                <AnimatePresence mode="wait">
                                    {submitted ? (
                                        <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-14">
                                            <div className="w-16 h-16 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <CheckCircle className="w-8 h-8 text-green-500" />
                                            </div>
                                            <h4 className="text-xl font-bold text-black mb-2 font-heading">Message Sent!</h4>
                                            <p className="text-gray-400 text-sm">Our team will reach out within 24 hours.</p>
                                        </motion.div>
                                    ) : (
                                        <motion.div key="form" className="space-y-4">
                                            {formError && <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">{formError}</div>}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {[
                                                    { label: "Your Name *", key: "name", placeholder: "Full name", type: "text" },
                                                    { label: "Phone / WhatsApp *", key: "phone", placeholder: "+91 98765 43210", type: "tel" },
                                                ].map((f) => (
                                                    <div key={f.key}>
                                                        <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-semibold">{f.label}</label>
                                                        <input type={f.type} placeholder={f.placeholder} value={formData[f.key as keyof typeof formData]}
                                                            onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                                                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm text-black placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                            <div>
                                                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-semibold">Email *</label>
                                                <input type="email" placeholder="your@email.com" value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm text-black placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-semibold">Service Needed</label>
                                                <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm text-black focus:outline-none focus:border-blue-400 transition-all appearance-none"
                                                >
                                                    <option value="">Select a service</option>
                                                    {["Website Development", "Brand Identity", "Social Media Growth", "SEO", "Performance Marketing", "Content & Storytelling", "AI Automation", "Lead Generation", "Full Startup Package", "Not sure — needs discussion"].map((o) => (
                                                        <option key={o} value={o}>{o}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-semibold">Tell Us About Your Startup</label>
                                                <textarea rows={3} placeholder="What's your business? What specific challenge are you facing?"
                                                    value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm text-black placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all resize-none"
                                                />
                                            </div>
                                            <motion.button onClick={handleSubmit} disabled={submitting}
                                                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                                className="w-full flex items-center justify-center gap-2.5 py-4 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-all disabled:opacity-60 shadow-lg shadow-blue-600/20"
                                            >
                                                <Rocket className="w-4 h-4" />
                                                {submitting ? "Sending..." : "Book Free Strategy Call"}
                                            </motion.button>
                                            <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
                                                <Shield className="w-3 h-3" /> No spam · Free · Response within 24 hours
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══ FINAL CTA ════════════════════════════════════════════════════════ */}
            <section className="py-28 bg-black relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/8 rounded-full blur-[120px]" />
                </div>
                <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                    <motion.div {...fadeUp}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
                            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                            <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Start Today</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-[1.05] mb-6">
                            Your Startup
                            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent mt-2">Deserves More</span>
                            <span className="block text-white/80 mt-2">Than Just Marketing</span>
                        </h2>
                        <p className="text-white/40 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
                            Whether you&apos;re validating an idea, launching a product, or scaling — MarkTale helps you build a brand people trust and remember.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a href="#contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-100 transition-all shadow-2xl shadow-white/10"
                            >
                                <Phone className="w-4 h-4" /> Book Free Strategy Call
                            </motion.a>
                            <motion.a
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noopener noreferrer"
                                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] text-white font-bold rounded-full text-sm hover:bg-[#20bc5a] transition-all shadow-lg"
                            >
                                <MessageCircle className="w-4 h-4" /> Chat On WhatsApp
                            </motion.a>
                        </div>

                        {/* Back to main site */}
                        <div className="mt-12 pt-8 border-t border-white/10">
                            <Link href="/" className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-sm transition-colors">
                                <Home className="w-4 h-4" /> Back to MarkTale World
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}