

// // app/components/contact/Contactpagecontent.tsx
// 'use client';

// import React, { useState, useRef } from 'react';
// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
// import {
//   Send, CheckCircle, MapPin, Mail, Phone,
//   Plus, Minus, ArrowRight, Sparkles, Zap, TrendingUp,
//   Globe, Video, Home, Megaphone, Instagram, Code2,
//   BarChart3, Star, ChevronRight, MessageCircle, Clock,
//   RefreshCw, Building2, ShoppingBag, Mic2, Camera,
//   Palette, Bot, Search, Film, Smartphone,
// } from 'lucide-react';

// // ── Env ───────────────────────────────────────────────────────────────────────
// const CONTACT_EMAIL     = process.env.NEXT_PUBLIC_CONTACT_EMAIL     ?? 'hello@aerovince.com';
// const CONTACT_PHONE     = process.env.NEXT_PUBLIC_CONTACT_PHONE     ?? '+91-74899-51514';
// const CONTACT_PHONE_RAW = process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW ?? '917489951514';
// const WHATSAPP_NUMBER   = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER   ?? '917489951514';
// const WHATSAPP_MESSAGE  = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE  ?? 'Hi! I want to grow my brand with Aerovince.';

// // ── All service categories — comprehensive ────────────────────────────────────
// const SERVICE_CATEGORIES = [
//   {
//     icon: <Video size={18} />,
//     label: 'Video Production',
//     color: '#7c3aed',
//     bg: 'rgba(124,58,237,.08)',
//     border: 'rgba(124,58,237,.2)',
//     services: [
//       'Brand Film / Corporate Video',
//       'Product Video Shoot',
//       'Reels & Short-form Content',
//       'YouTube Video Production',
//       'Testimonial / Client Review Video',
//       'Event Coverage & Highlights',
//       'Animated Explainer Video',
//       'Drone Aerial Videography',
//       'Documentary Style Video',
//       'Interview & Podcast Recording',
//     ],
//   },
//   {
//     icon: <Home size={18} />,
//     label: 'Real Estate Marketing',
//     color: '#0ea5e9',
//     bg: 'rgba(14,165,233,.08)',
//     border: 'rgba(14,165,233,.2)',
//     services: [
//       'Property Video Promotion',
//       'Real Estate Aerial / Drone Shoots',
//       'Virtual Tour Setup (360°)',
//       'Real Estate SEO',
//       'Property Listing Ad Campaigns',
//       'Lead Generation for Builders',
//       'Google Maps Optimization for Projects',
//       'Real Estate Social Media Management',
//       'Builder Branding & Identity',
//       'Landing Pages for Projects',
//     ],
//   },
//   {
//     icon: <Code2 size={18} />,
//     label: 'Website & Tech',
//     color: '#06b6d4',
//     bg: 'rgba(6,182,212,.08)',
//     border: 'rgba(6,182,212,.2)',
//     services: [
//       'Business / Corporate Website',
//       'Landing Page Development',
//       'E-commerce Store (Shopify / Custom)',
//       'Web App Development',
//       'CMS & Blog Setup (WordPress / Next.js)',
//       'Website Speed & SEO Optimization',
//       'Website Redesign',
//       'Portfolio / Personal Brand Site',
//       'Booking & Appointment System',
//       'API Integration & Backend',
//     ],
//   },
//   {
//     icon: <Smartphone size={18} />,
//     label: 'App Development',
//     color: '#8b5cf6',
//     bg: 'rgba(139,92,246,.08)',
//     border: 'rgba(139,92,246,.2)',
//     services: [
//       'Android App Development',
//       'iOS App Development',
//       'Cross-platform App (React Native / Flutter)',
//       'App UI/UX Design',
//       'App Store Optimization (ASO)',
//       'App Maintenance & Updates',
//       'MVP for Startups',
//       'SaaS Product Development',
//     ],
//   },
//   {
//     icon: <Megaphone size={18} />,
//     label: 'Performance Marketing',
//     color: '#f59e0b',
//     bg: 'rgba(245,158,11,.08)',
//     border: 'rgba(245,158,11,.2)',
//     services: [
//       'Google Search Ads',
//       'Google Display Ads',
//       'Meta Ads (Facebook & Instagram)',
//       'YouTube Ads',
//       'LinkedIn Ads (B2B)',
//       'Retargeting Campaigns',
//       'Lead Gen Funnels',
//       'E-commerce Ads (Low Budget)',
//       'Performance Max Campaigns',
//       'WhatsApp Broadcast Ads',
//     ],
//   },
//   {
//     icon: <Instagram size={18} />,
//     label: 'Social Media',
//     color: '#ec4899',
//     bg: 'rgba(236,72,153,.08)',
//     border: 'rgba(236,72,153,.2)',
//     services: [
//       'Social Media Management',
//       'Content Creation & Monthly Calendar',
//       'Instagram Growth Strategy',
//       'LinkedIn B2B Marketing',
//       'YouTube Channel Management',
//       'Facebook Page Management',
//       'Twitter / X Marketing',
//       'Influencer Collaboration',
//       'Community Building & Engagement',
//       'Meme & Viral Content Strategy',
//     ],
//   },
//   {
//     icon: <BarChart3 size={18} />,
//     label: 'SEO & Growth',
//     color: '#10b981',
//     bg: 'rgba(16,185,129,.08)',
//     border: 'rgba(16,185,129,.2)',
//     services: [
//       'Technical SEO Audit',
//       'Local SEO & Google My Business',
//       'E-commerce SEO',
//       'YouTube SEO',
//       'Content Marketing & Blogging',
//       'Link Building',
//       'Keyword Research & Strategy',
//       'Competitor Analysis',
//       'SEO Monthly Retainer',
//       'International / Multilingual SEO',
//     ],
//   },
//   {
//     icon: <Palette size={18} />,
//     label: 'Branding & Design',
//     color: '#f97316',
//     bg: 'rgba(249,115,22,.08)',
//     border: 'rgba(249,115,22,.2)',
//     services: [
//       'Logo & Brand Identity Design',
//       'Brand Strategy & Positioning',
//       'Packaging Design',
//       'Pitch Deck / Investor Deck Design',
//       'Social Media Templates & Kit',
//       'UI/UX Design',
//       'Menu / Brochure / Catalogue Design',
//       'Billboard & Print Design',
//       'Brand Guideline Document',
//       'Business Card & Stationery',
//     ],
//   },
//   {
//     icon: <Bot size={18} />,
//     label: 'AI & Automation',
//     color: '#06b6d4',
//     bg: 'rgba(6,182,212,.08)',
//     border: 'rgba(6,182,212,.2)',
//     services: [
//       'AI Chatbot Setup (Website / WhatsApp)',
//       'Marketing Automation Workflows',
//       'CRM Setup & Integration (HubSpot / Zoho)',
//       'Email Automation Flows',
//       'AI Content Pipeline',
//       'WhatsApp Business Automation',
//       'Lead Scoring & Nurturing',
//       'AI-powered Ad Optimization',
//       'Automated Reporting Dashboard',
//       'Zapier / Make.com Integrations',
//     ],
//   },
//   {
//     icon: <ShoppingBag size={18} />,
//     label: 'E-commerce Growth',
//     color: '#d97706',
//     bg: 'rgba(217,119,6,.08)',
//     border: 'rgba(217,119,6,.2)',
//     services: [
//       'Amazon / Flipkart Account Management',
//       'Meesho / Myntra Onboarding',
//       'D2C Brand Setup & Strategy',
//       'Product Photography Editing',
//       'Marketplace SEO & Listing Optimization',
//       'Flash Sale & Campaign Strategy',
//       'E-commerce Ads (Low Budget Start)',
//       'Cart Abandonment Campaigns',
//       'Customer Review Generation',
//       'Dropshipping Setup',
//     ],
//   },
//   {
//     icon: <Camera size={18} />,
//     label: 'Photography',
//     color: '#be185d',
//     bg: 'rgba(190,24,93,.08)',
//     border: 'rgba(190,24,93,.2)',
//     services: [
//       'Product Photography',
//       'Corporate / Team Photography',
//       'Food & Restaurant Photography',
//       'Real Estate Interior Photography',
//       'Event Photography',
//       'Fashion / Portfolio Photography',
//       'E-commerce Product Shoot',
//       'Social Media Content Shoot',
//     ],
//   },
//   {
//     icon: <Mic2 size={18} />,
//     label: 'Content & PR',
//     color: '#0284c7',
//     bg: 'rgba(2,132,199,.08)',
//     border: 'rgba(2,132,199,.2)',
//     services: [
//       'Content Writing & Copywriting',
//       'Press Release & PR Outreach',
//       'Podcast Setup & Production',
//       'Guest Posting & Backlinks',
//       'Case Study & White Paper Writing',
//       'Newsletter Strategy',
//       'Email Marketing Campaigns',
//       'Webinar Setup & Promotion',
//     ],
//   },
// ];

// const ALL_SERVICE_CHIPS = SERVICE_CATEGORIES.flatMap(c => c.services);

// const ENQUIRY_TYPES = [
//   { icon: <TrendingUp size={14} />,    label: 'Grow My Brand',    color: '#7c3aed' },
//   { icon: <Globe size={14} />,         label: 'Build a Website',  color: '#06b6d4' },
//   { icon: <Video size={14} />,         label: 'Video Production', color: '#ec4899' },
//   { icon: <Megaphone size={14} />,     label: 'Run Ads',          color: '#f59e0b' },
//   { icon: <Film size={14} />,          label: 'Real Estate',      color: '#0ea5e9' },
//   { icon: <ShoppingBag size={14} />,   label: 'E-commerce',       color: '#d97706' },
//   { icon: <Smartphone size={14} />,    label: 'Mobile App',       color: '#8b5cf6' },
//   { icon: <Bot size={14} />,           label: 'AI Automation',    color: '#10b981' },
//   { icon: <MessageCircle size={14} />, label: 'General Query',    color: '#64748b' },
//   { icon: <Star size={14} />,          label: 'Partnership',      color: '#f97316' },
//   { icon: <Building2 size={14} />,     label: 'Startup Package',  color: '#be185d' },
//   { icon: <Search size={14} />,        label: 'SEO / Content',    color: '#059669' },
// ];

// const BUDGETS = [
//   '₹5K – ₹10K / month',
//   '₹10K – ₹25K / month',
//   '₹25K – ₹50K / month',
//   '₹50K – ₹1L / month',
//   '₹1L+ / month',
//   'One-time Project',
//   'Let Aerovince suggest',
// ];

// const STATS = [
//   { num: '150+',  label: 'Projects Delivered' },
//   { num: '98%',   label: 'Client Satisfaction' },
//   { num: '₹12M+', label: 'Revenue Generated' },
//   { num: '40+',   label: 'Brands Scaled' },
// ];

// const FAQS = [
//   {
//     q: 'Do you work with low budgets like ₹5K–₹10K/month?',
//     a: 'Absolutely. We have performance-focused packages starting from ₹5,000/month — from social media content to basic Google Ads. Every business deserves quality marketing, not just big enterprises.',
//   },
//   {
//     q: 'How fast can you start on my project?',
//     a: 'We kick off within 5–7 business days after a brief alignment call. Strategy, creative, and execution all happen fast — we move at the speed of your ambition.',
//   },
//   {
//     q: 'Do you do both creative and performance work in-house?',
//     a: 'Yes. We\'re a full-stack growth agency — brand films, social content, Google Ads, SEO, web dev, and AI automation are all done in-house so messaging stays consistent.',
//   },
//   {
//     q: 'What industries do you specialize in?',
//     a: 'Real estate, ed-tech, D2C brands, SaaS, local businesses, restaurants, startups, and professionals across India, UAE, and the US. If you want to grow, we speak your language.',
//   },
//   {
//     q: 'Is there a long-term contract?',
//     a: 'No lock-in contracts. We work on monthly retainers and project-based models. Our results keep clients around — not fine print.',
//   },
//   {
//     q: 'Do you offer video production for small businesses?',
//     a: 'Yes — from a single product reel to a full brand documentary. We have packages for every scale. Drone shoots, studio shoots, and on-location are all available.',
//   },
// ];

// type Status = 'idle' | 'success' | 'error';

// // ── Hooks ─────────────────────────────────────────────────────────────────────
// function useParallax(ref: React.RefObject<HTMLElement | null>, range = 40) {
//   const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
//   return useTransform(scrollYProgress, [0, 1], [-range, range]);
// }

// // ── Background ────────────────────────────────────────────────────────────────
// function HeroBackground() {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
//       <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-white to-white" />
//       <motion.div
//         className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-violet-200/30 via-blue-200/20 to-transparent blur-3xl will-change-transform"
//         animate={{ scale: [1, 1.06, 1] }}
//         transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
//       />
//       <motion.div
//         className="absolute -bottom-16 -left-16 w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-cyan-200/25 via-blue-100/20 to-transparent blur-3xl will-change-transform"
//         animate={{ scale: [1, 1.08, 1] }}
//         transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
//       />
//       <div
//         className="absolute inset-0 opacity-[0.025]"
//         style={{
//           backgroundImage: `linear-gradient(#3b82f6 1px,transparent 1px),linear-gradient(90deg,#3b82f6 1px,transparent 1px)`,
//           backgroundSize: '48px 48px',
//         }}
//       />
//     </div>
//   );
// }

// // ── Hero ──────────────────────────────────────────────────────────────────────
// function ContactHero() {
//   const ref = useRef<HTMLElement>(null);
//   const y   = useParallax(ref, 30);
//   const scrollToForm = () => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });

//   return (
//     <section ref={ref} className="relative overflow-hidden pt-32 pb-24 px-6">
//       <HeroBackground />
//       <motion.div style={{ y }} className="relative z-10 max-w-4xl mx-auto text-center">
//         <motion.span
//           initial={{ opacity: 0, scale: 0.85 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest border mb-8"
//           style={{ background: 'rgba(124,58,237,.08)', borderColor: 'rgba(124,58,237,.25)', color: '#7c3aed' }}
//         >
//           <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
//           Free Strategy — No Obligation
//         </motion.span>

//         <motion.h1
//           initial={{ opacity: 0, y: 28 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//           className="text-5xl sm:text-6xl md:text-[76px] font-extrabold text-gray-900 leading-[1.06] tracking-tight mb-6"
//         >
//           Let&apos;s Build Something
//           <span className="block mt-1" style={{
//             background: 'linear-gradient(135deg,#7c3aed,#3b82f6,#06b6d4)',
//             WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
//           }}>
//             That Drives Results
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.22, duration: 0.6 }}
//           className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
//         >
//           From a ₹5K budget to a full-scale marketing engine — we build growth systems
//           that punch above their weight. Tell us what you need.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="flex flex-wrap gap-3 justify-center mb-10"
//         >
//           {[
//             { icon: '⚡', label: '24 hr Response' },
//             { icon: '🌏', label: 'India & Global' },
//             { icon: '💰', label: 'Budgets from ₹5K' },
//             { icon: '🤖', label: 'AI-Powered' },
//             { icon: '📈', label: 'ROI Focused' },
//             { icon: '🎥', label: 'In-house Studio' },
//           ].map(p => (
//             <span key={p.label} className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 font-semibold shadow-sm">
//               <span>{p.icon}</span>{p.label}
//             </span>
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.38 }}
//           className="flex flex-col sm:flex-row gap-3 justify-center"
//         >
//           <motion.button
//             onClick={scrollToForm}
//             whileHover={{ scale: 1.03, y: -2 }}
//             whileTap={{ scale: 0.97 }}
//             className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white text-sm font-bold shadow-lg group"
//             style={{ background: 'linear-gradient(135deg,#7c3aed,#3b82f6)' }}
//           >
//             <span className="relative z-10 flex items-center gap-2">
//               Start Free Consultation <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
//             </span>
//             <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </motion.button>

//           <motion.a
//             href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
//             target="_blank" rel="noopener noreferrer"
//             whileHover={{ scale: 1.02, y: -1 }}
//             whileTap={{ scale: 0.97 }}
//             className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-gray-700 text-sm font-bold border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all"
//           >
//             <span className="text-base">💬</span> Chat on WhatsApp
//           </motion.a>
//         </motion.div>

//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
//           className="flex items-center justify-center gap-3 mt-10">
//           <div className="flex -space-x-2">
//             {['bg-violet-400','bg-blue-400','bg-cyan-400','bg-pink-400'].map((c,i) => (
//               <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-[10px] font-black`}>
//                 {String.fromCharCode(65+i)}
//               </div>
//             ))}
//           </div>
//           <div>
//             <div className="flex gap-0.5">{[...Array(5)].map((_,i) => <Star key={i} size={12} className="fill-amber-400 text-amber-400" />)}</div>
//             <p className="text-xs text-gray-500 mt-0.5"><span className="font-semibold text-gray-800">4.9/5</span> from 150+ clients</p>
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

// // ── Stats ─────────────────────────────────────────────────────────────────────
// function StatsBar() {
//   return (
//     <section className="relative z-10 py-6 border-y border-gray-100 bg-white/80 backdrop-blur-sm">
//       <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-gray-100">
//         {STATS.map((s, i) => (
//           <motion.div key={s.label}
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.08 }}
//             className="flex flex-col items-center text-center px-4"
//           >
//             <span className="text-2xl sm:text-3xl font-extrabold text-gray-900"
//               style={{ background: 'linear-gradient(135deg,#7c3aed,#06b6d4)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
//               {s.num}
//             </span>
//             <span className="text-xs text-gray-500 font-medium mt-0.5">{s.label}</span>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// // ── Services Showcase ─────────────────────────────────────────────────────────
// function ServicesShowcase() {
//   const [expanded, setExpanded] = useState<number | null>(null);

//   return (
//     <section className="py-20 px-6 bg-white">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-14"
//         >
//           <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest border mb-5"
//             style={{ background:'rgba(124,58,237,.06)', borderColor:'rgba(124,58,237,.2)', color:'#7c3aed' }}>
//             <Sparkles size={11} /> Everything Under One Roof
//           </span>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
//             What We Can Do <span style={{ background:'linear-gradient(135deg,#7c3aed,#06b6d4)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>For You</span>
//           </h2>
//           <p className="text-gray-500 text-lg max-w-xl mx-auto">
//             12 specializations. 100+ services. Every budget. Tap any category to explore.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//           {SERVICE_CATEGORIES.map((cat, i) => (
//             <motion.div key={cat.label}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.05 }}
//               onClick={() => setExpanded(expanded === i ? null : i)}
//               className="cursor-pointer rounded-2xl border p-5 transition-all duration-300 select-none"
//               style={{
//                 background: expanded === i ? cat.bg : '#fff',
//                 borderColor: expanded === i ? cat.border : '#f1f5f9',
//                 boxShadow: expanded === i ? `0 8px 32px ${cat.bg}` : '0 1px 4px rgba(0,0,0,.04)',
//               }}
//             >
//               <div className="flex items-start justify-between mb-3">
//                 <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: cat.bg, color: cat.color }}>
//                   {cat.icon}
//                 </div>
//                 <motion.div animate={{ rotate: expanded === i ? 45 : 0 }} transition={{ duration: 0.2 }}>
//                   <Plus size={16} style={{ color: cat.color }} />
//                 </motion.div>
//               </div>
//               <h3 className="font-black text-sm text-gray-900 mb-1">{cat.label}</h3>
//               <p className="text-[11px] text-gray-400 mb-3">{cat.services.length} services</p>

//               <AnimatePresence>
//                 {expanded === i && (
//                   <motion.ul
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.25 }}
//                     className="space-y-1.5 overflow-hidden"
//                   >
//                     {cat.services.map(s => (
//                       <li key={s} className="flex items-center gap-2 text-[12px] font-medium" style={{ color: cat.color }}>
//                         <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: cat.color }} />
//                         {s}
//                       </li>
//                     ))}
//                   </motion.ul>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ── Contact Form ──────────────────────────────────────────────────────────────
// function ContactForm() {
//   const [step, setStep]                         = useState(1);
//   const [enquiryType, setEnquiryType]           = useState('');
//   const [selectedServices, setSelectedServices] = useState<string[]>([]);
//   const [budget, setBudget]                     = useState('');
//   const [formData, setFormData]                 = useState({ name:'', phone:'', email:'', company:'', message:'' });
//   const [status, setStatus]                     = useState<Status>('idle');
//   const [submittedName, setSubmittedName]       = useState('');
//   const [submittedEmail, setSubmittedEmail]     = useState('');
//   const [serviceSearch, setServiceSearch]       = useState('');

//   const toggleService = (s: string) =>
//     setSelectedServices(p => p.includes(s) ? p.filter(x => x !== s) : [...p, s]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
//     setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

//   // ── Instant success, background API call ──────────────────────────────────
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmittedName(formData.name);
//     setSubmittedEmail(formData.email);
//     setStatus('success'); // immediately show success — no loading shown

//     // Fire-and-forget in background
//     fetch('/api/contact', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         ...formData,
//         enquiryType,
//         services: selectedServices.join(', '),
//         budget,
//       }),
//     }).catch(err => console.error('[contact] bg error:', err));
//   };

//   const resetForm = () => {
//     setStatus('idle');
//     setStep(1);
//     setEnquiryType('');
//     setSelectedServices([]);
//     setBudget('');
//     setServiceSearch('');
//     setFormData({ name:'', phone:'', email:'', company:'', message:'' });
//   };

//   const filteredChips = serviceSearch.trim()
//     ? ALL_SERVICE_CHIPS.filter(s => s.toLowerCase().includes(serviceSearch.toLowerCase()))
//     : ALL_SERVICE_CHIPS;

//   const inputBase = `
//     w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder:text-gray-400
//     focus:outline-none transition-all duration-200
//     bg-white border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100
//   `;

//   return (
//     <section id="contact-form" className="py-20 px-6" style={{ background: 'linear-gradient(180deg,#f8fafc,#fff)' }}>
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-14"
//         >
//           <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest border mb-5"
//             style={{ background:'rgba(59,130,246,.06)', borderColor:'rgba(59,130,246,.2)', color:'#3b82f6' }}>
//             <Zap size={11} /> Takes Only 2 Minutes
//           </span>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
//             Tell Us About <span style={{ background:'linear-gradient(135deg,#3b82f6,#06b6d4)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Your Project</span>
//           </h2>
//           <p className="text-gray-500 max-w-lg mx-auto">
//             Our team reviews every submission personally and responds with a custom plan within 24 hours.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

//           {/* ── Left info panel ── */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="lg:col-span-4 flex flex-col gap-5"
//           >
//             {[
//               { icon: <Mail size={18}/>,  label:'Email us',    value: CONTACT_EMAIL,  href:`mailto:${CONTACT_EMAIL}`,  color:'#7c3aed', bg:'rgba(124,58,237,.07)' },
//               { icon: <Phone size={18}/>, label:'Call us',     value: CONTACT_PHONE,  href:`tel:+${CONTACT_PHONE_RAW}`, color:'#3b82f6', bg:'rgba(59,130,246,.07)' },
//               { icon: <MapPin size={18}/>,label:'Head Office', value:'Scheme No. 78, Vijay Nagar, Indore M.P.', href:null, color:'#06b6d4', bg:'rgba(6,182,212,.07)' },
//               { icon: <Clock size={18}/>, label:'Work Hours',  value:'Mon – Sat, 10 AM – 7 PM IST', href:null, color:'#10b981', bg:'rgba(16,185,129,.07)' },
//             ].map((item, i) => (
//               <motion.div key={item.label}
//                 initial={{ opacity:0, y:16 }}
//                 whileInView={{ opacity:1, y:0 }}
//                 viewport={{ once:true }}
//                 transition={{ delay: i*0.07 }}
//                 whileHover={{ y:-3 }}
//               >
//                 {item.href ? (
//                   <a href={item.href} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all block no-underline">
//                     <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background:item.bg, color:item.color }}>{item.icon}</div>
//                     <div>
//                       <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</p>
//                       <p className="text-sm font-semibold text-gray-800 break-all">{item.value}</p>
//                     </div>
//                   </a>
//                 ) : (
//                   <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
//                     <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background:item.bg, color:item.color }}>{item.icon}</div>
//                     <div>
//                       <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</p>
//                       <p className="text-sm font-semibold text-gray-800">{item.value}</p>
//                     </div>
//                   </div>
//                 )}
//               </motion.div>
//             ))}

//             <motion.a
//               href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
//               target="_blank" rel="noopener noreferrer"
//               whileHover={{ scale:1.02, y:-2 }} whileTap={{ scale:0.97 }}
//               className="flex items-center justify-center gap-2.5 py-4 rounded-2xl text-white text-sm font-black shadow-lg transition-all"
//               style={{ background:'linear-gradient(135deg,#25D366,#128C7E)', boxShadow:'0 8px 24px rgba(37,211,102,.25)' }}
//             >
//               <span className="text-lg">💬</span> Chat Instantly on WhatsApp
//             </motion.a>

//             <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
//               <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Branch Offices</p>
//               <div className="space-y-2.5">
//                 {['BB Ganj, Muzaffarpur, Bihar','Seawoods, Navi Mumbai, Maharashtra'].map(loc => (
//                   <div key={loc} className="flex items-start gap-2">
//                     <MapPin size={12} className="text-gray-400 mt-0.5 flex-shrink-0" />
//                     <span className="text-xs text-gray-600 font-medium">{loc}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="rounded-2xl overflow-hidden border border-gray-100 h-44 shadow-sm">
//               <iframe width="100%" height="100%" frameBorder={0} scrolling="no"
//                 src="https://maps.google.com/maps?q=Vijay+Nagar+Indore+MP&t=&z=14&ie=UTF8&iwloc=&output=embed"
//                 title="Aerovince Location" />
//             </div>
//           </motion.div>

//           {/* ── Right form panel ── */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="lg:col-span-8"
//           >
//             <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

//               {/* Progress bar */}
//               {status !== 'success' && (
//                 <div className="px-8 pt-7 pb-5 border-b border-gray-50">
//                   <div className="flex items-center justify-between mb-3">
//                     {['What do you need?', 'Pick services', 'Your details'].map((label, i) => (
//                       <div key={label} className="flex items-center gap-2">
//                         <div
//                           className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black transition-all duration-300"
//                           style={{
//                             background: step > i+1 ? 'linear-gradient(135deg,#7c3aed,#06b6d4)'
//                               : step === i+1 ? 'linear-gradient(135deg,#7c3aed,#3b82f6)'
//                               : '#f1f5f9',
//                             color: step >= i+1 ? '#fff' : '#94a3b8',
//                           }}
//                         >
//                           {step > i+1 ? '✓' : i+1}
//                         </div>
//                         <span className={`text-xs font-bold hidden sm:block ${step === i+1 ? 'text-gray-800' : 'text-gray-400'}`}>
//                           {label}
//                         </span>
//                         {i < 2 && <ChevronRight size={14} className="text-gray-300 mx-1" />}
//                       </div>
//                     ))}
//                   </div>
//                   <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
//                     <motion.div
//                       animate={{ width: `${((step-1)/2)*100}%` }}
//                       transition={{ duration: 0.4, ease: 'easeOut' }}
//                       className="h-full rounded-full"
//                       style={{ background: 'linear-gradient(90deg,#7c3aed,#06b6d4)' }}
//                     />
//                   </div>
//                 </div>
//               )}

//               <div className="p-7 md:p-9">
//                 <AnimatePresence mode="wait">

//                   {/* ── SUCCESS STATE ── */}
//                   {status === 'success' && (
//                     <motion.div
//                       key="success"
//                       initial={{ opacity:0, scale:0.92, y:16 }}
//                       animate={{ opacity:1, scale:1, y:0 }}
//                       transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
//                       className="flex flex-col items-center text-center py-10 gap-5"
//                     >
//                       {/* Animated checkmark */}
//                       <motion.div
//                         initial={{ scale:0, rotate:-30 }}
//                         animate={{ scale:1, rotate:0 }}
//                         transition={{ type:'spring', stiffness:260, damping:18, delay:0.1 }}
//                         className="w-24 h-24 rounded-full flex items-center justify-center shadow-xl"
//                         style={{ background:'linear-gradient(135deg,#7c3aed,#3b82f6,#06b6d4)', boxShadow:'0 16px 48px rgba(124,58,237,.35)' }}
//                       >
//                         <CheckCircle size={44} className="text-white" />
//                       </motion.div>

//                       {/* Confetti dots */}
//                       <div className="absolute pointer-events-none">
//                         {['#7c3aed','#3b82f6','#06b6d4','#10b981','#f59e0b','#ec4899'].map((c,i) => (
//                           <motion.div
//                             key={i}
//                             className="absolute w-2 h-2 rounded-full"
//                             style={{ background: c, left: `${(i - 2.5) * 30}px` }}
//                             initial={{ y: 0, opacity: 1 }}
//                             animate={{ y: -60 - i*10, opacity: 0, x: (i % 2 === 0 ? 1 : -1) * 20 }}
//                             transition={{ duration: 0.8, delay: 0.2 + i * 0.07 }}
//                           />
//                         ))}
//                       </div>

//                       <div>
//                         <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
//                           You're All Set, {submittedName.split(' ')[0]}! 🎉
//                         </h3>
//                         <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
//                           Your enquiry is received. We'll reply to{' '}
//                           <span className="font-bold text-gray-800">{submittedEmail}</span>{' '}
//                           within <strong>24 hours</strong> with a tailored growth plan.
//                         </p>
//                       </div>

//                       {/* What's next mini timeline */}
//                       <div className="w-full max-w-md bg-gray-50 rounded-2xl p-5 border border-gray-100 text-left">
//                         <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">What happens next</p>
//                         {[
//                           { icon:'📋', title:'We review your enquiry', time:'Now' },
//                           { icon:'📊', title:'We build your growth plan', time:'Within 4 hours' },
//                           { icon:'📞', title:'We reach out to you', time:'Within 24 hours' },
//                           { icon:'🚀', title:'We start growing together', time:'Week 1' },
//                         ].map((step, i) => (
//                           <div key={i} className="flex items-center gap-3 mb-3 last:mb-0">
//                             <motion.div
//                               initial={{ scale: 0 }}
//                               animate={{ scale: 1 }}
//                               transition={{ delay: 0.4 + i * 0.12, type: 'spring', stiffness: 300 }}
//                               className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0 bg-white border border-gray-200 shadow-sm"
//                             >
//                               {step.icon}
//                             </motion.div>
//                             <div className="flex-1 min-w-0">
//                               <p className="text-xs font-bold text-gray-800">{step.title}</p>
//                             </div>
//                             <span className="text-[10px] text-violet-600 font-bold bg-violet-50 border border-violet-100 px-2 py-0.5 rounded-full whitespace-nowrap">{step.time}</span>
//                           </div>
//                         ))}
//                       </div>

//                       {/* Action buttons */}
//                       <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
//                         <motion.a
//                           href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
//                           target="_blank" rel="noopener noreferrer"
//                           whileHover={{ scale:1.03, y:-1 }} whileTap={{ scale:0.97 }}
//                           className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-white text-sm font-bold"
//                           style={{ background:'linear-gradient(135deg,#25D366,#128C7E)', boxShadow:'0 6px 20px rgba(37,211,102,.25)' }}
//                         >
//                           <span>💬</span> WhatsApp Us
//                         </motion.a>
//                         <motion.button
//                           onClick={resetForm}
//                           whileHover={{ scale:1.02, y:-1 }} whileTap={{ scale:0.97 }}
//                           className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold border border-gray-200 text-gray-600 hover:border-violet-300 hover:text-violet-600 transition-all group"
//                         >
//                           <RefreshCw size={14} className="group-hover:rotate-180 transition-transform duration-500" />
//                           Another Enquiry
//                         </motion.button>
//                       </div>

//                       <p className="text-xs text-gray-400 text-center">
//                         Want faster help? Call us directly:{' '}
//                         <a href={`tel:+${CONTACT_PHONE_RAW}`} className="text-violet-600 font-bold">{CONTACT_PHONE}</a>
//                       </p>
//                     </motion.div>
//                   )}

//                   {/* ── STEP 1 — Enquiry type ── */}
//                   {status !== 'success' && step === 1 && (
//                     <motion.div key="step1" initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-20 }} transition={{ duration:0.25 }}>
//                       <h3 className="text-xl font-extrabold text-gray-900 mb-1">What are you looking for?</h3>
//                       <p className="text-sm text-gray-400 mb-6">Pick the option that best describes your goal. You can mix things later.</p>
//                       <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
//                         {ENQUIRY_TYPES.map(et => (
//                           <motion.button
//                             key={et.label}
//                             onClick={() => { setEnquiryType(et.label); setStep(2); }}
//                             whileHover={{ y:-3, scale:1.02 }}
//                             whileTap={{ scale:0.97 }}
//                             className="flex flex-col items-center gap-2.5 p-4 rounded-2xl border text-sm font-bold transition-all"
//                             style={{
//                               background: enquiryType === et.label ? `${et.color}12` : '#fafafa',
//                               borderColor: enquiryType === et.label ? et.color : '#e2e8f0',
//                               color: et.color,
//                               boxShadow: enquiryType === et.label ? `0 4px 16px rgba(0,0,0,.08)` : 'none',
//                             }}
//                           >
//                             <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background:`rgba(0,0,0,.04)` }}>{et.icon}</span>
//                             <span className="text-gray-800 text-xs font-black text-center leading-tight">{et.label}</span>
//                           </motion.button>
//                         ))}
//                       </div>
//                       <p className="text-center text-xs text-gray-400">Not sure? Pick <strong className="text-gray-600">General Query</strong> and tell us in your message.</p>
//                     </motion.div>
//                   )}

//                   {/* ── STEP 2 — Services ── */}
//                   {status !== 'success' && step === 2 && (
//                     <motion.div key="step2" initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-20 }} transition={{ duration:0.25 }}>
//                       <h3 className="text-xl font-extrabold text-gray-900 mb-1">Which services interest you?</h3>
//                       <p className="text-sm text-gray-400 mb-4">Pick as many as you like across any category. Search to filter.</p>

//                       {/* Search */}
//                       <div className="relative mb-4">
//                         <input
//                           type="text"
//                           value={serviceSearch}
//                           onChange={e => setServiceSearch(e.target.value)}
//                           placeholder="Search services... e.g. 'video', 'ads', 'SEO'"
//                           className="w-full px-4 py-2.5 pl-10 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
//                         />
//                         <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                         </svg>
//                         {serviceSearch && (
//                           <button onClick={() => setServiceSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
//                             <X size={14} />
//                           </button>
//                         )}
//                       </div>

//                       {/* Selected count */}
//                       {selectedServices.length > 0 && (
//                         <div className="flex items-center justify-between mb-3">
//                           <span className="text-xs font-bold text-violet-600 bg-violet-50 border border-violet-100 px-3 py-1 rounded-full">
//                             ✓ {selectedServices.length} selected
//                           </span>
//                           <button onClick={() => setSelectedServices([])} className="text-xs text-gray-400 hover:text-red-500 transition-colors font-medium">
//                             Clear all
//                           </button>
//                         </div>
//                       )}

//                       <div className="flex flex-wrap gap-2 mb-5 max-h-72 overflow-y-auto pr-1 custom-scroll">
//                         {filteredChips.length === 0 ? (
//                           <p className="text-sm text-gray-400 py-4 w-full text-center">No services match "{serviceSearch}"</p>
//                         ) : filteredChips.map(chip => {
//                           const cat = SERVICE_CATEGORIES.find(c => c.services.includes(chip))!;
//                           const active = selectedServices.includes(chip);
//                           return (
//                             <button key={chip} type="button"
//                               onClick={() => toggleService(chip)}
//                               className="px-3.5 py-1.5 rounded-full border text-xs font-bold transition-all duration-150"
//                               style={{
//                                 background: active ? cat.bg : '#fff',
//                                 borderColor: active ? cat.color : '#e2e8f0',
//                                 color: active ? cat.color : '#6b7280',
//                                 boxShadow: active ? `0 2px 8px ${cat.bg}` : 'none',
//                               }}
//                             >
//                               {active && <span className="mr-1">✓</span>}
//                               {chip}
//                             </button>
//                           );
//                         })}
//                       </div>

//                       <div className="mb-6">
//                         <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Monthly Budget</p>
//                         <div className="flex flex-wrap gap-2">
//                           {BUDGETS.map(b => (
//                             <button key={b} type="button"
//                               onClick={() => setBudget(b)}
//                               className="px-4 py-2 rounded-xl border text-xs font-bold transition-all"
//                               style={{
//                                 background: budget === b ? 'rgba(124,58,237,.08)' : '#fafafa',
//                                 borderColor: budget === b ? '#7c3aed' : '#e2e8f0',
//                                 color: budget === b ? '#7c3aed' : '#6b7280',
//                               }}
//                             >
//                               {b}
//                             </button>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="flex gap-3">
//                         <button onClick={() => setStep(1)}
//                           className="px-5 py-3 rounded-xl text-sm font-bold border border-gray-200 text-gray-500 hover:border-gray-300 transition-all">
//                           ← Back
//                         </button>
//                         <motion.button
//                           onClick={() => setStep(3)}
//                           whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
//                           className="flex-1 py-3 rounded-xl text-sm font-black text-white transition-all"
//                           style={{ background:'linear-gradient(135deg,#7c3aed,#3b82f6)' }}
//                         >
//                           Continue → {selectedServices.length > 0 && `(${selectedServices.length} selected)`}
//                         </motion.button>
//                       </div>
//                     </motion.div>
//                   )}

//                   {/* ── STEP 3 — Details ── */}
//                   {status !== 'success' && step === 3 && (
//                     <motion.div key="step3" initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-20 }} transition={{ duration:0.25 }}>
//                       <h3 className="text-xl font-extrabold text-gray-900 mb-1">Almost there — tell us about yourself</h3>
//                       <p className="text-sm text-gray-400 mb-6">We use this to send a tailored proposal directly to you.</p>

//                       <form onSubmit={handleSubmit} className="space-y-4">
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                           <div>
//                             <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">Full Name *</label>
//                             <input type="text" name="name" required value={formData.name}
//                               onChange={handleChange} className={inputBase} placeholder="Rahul Sharma" />
//                           </div>
//                           <div>
//                             <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">Phone *</label>
//                             <input type="tel" name="phone" required value={formData.phone}
//                               onChange={handleChange} className={inputBase} placeholder="+91 98765 00000" />
//                           </div>
//                         </div>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                           <div>
//                             <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">Email *</label>
//                             <input type="email" name="email" required value={formData.email}
//                               onChange={handleChange} className={inputBase} placeholder="rahul@brand.com" />
//                           </div>
//                           <div>
//                             <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">Brand / Company</label>
//                             <input type="text" name="company" value={formData.company}
//                               onChange={handleChange} className={inputBase} placeholder="Your Brand Pvt Ltd" />
//                           </div>
//                         </div>
//                         <div>
//                           <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">Tell Us More</label>
//                           <textarea name="message" rows={4} value={formData.message}
//                             onChange={handleChange} className={inputBase}
//                             placeholder="Describe your goals, current challenges, or anything you'd like us to know..." />
//                         </div>

//                         {/* Summary */}
//                         {(selectedServices.length > 0 || budget) && (
//                           <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 space-y-2">
//                             {budget && (
//                               <div className="flex items-center gap-2">
//                                 <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Budget:</span>
//                                 <span className="text-xs font-bold text-violet-600 bg-violet-50 border border-violet-100 px-2 py-0.5 rounded-full">{budget}</span>
//                               </div>
//                             )}
//                             {selectedServices.length > 0 && (
//                               <>
//                                 <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Selected services</p>
//                                 <div className="flex flex-wrap gap-1.5">
//                                   {selectedServices.slice(0, 6).map(s => (
//                                     <span key={s} className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-violet-50 text-violet-600 border border-violet-100">{s}</span>
//                                   ))}
//                                   {selectedServices.length > 6 && (
//                                     <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-gray-100 text-gray-500">+{selectedServices.length - 6} more</span>
//                                   )}
//                                 </div>
//                               </>
//                             )}
//                           </div>
//                         )}

//                         <div className="flex gap-3 pt-1">
//                           <button type="button" onClick={() => setStep(2)}
//                             className="px-5 py-3 rounded-xl text-sm font-bold border border-gray-200 text-gray-500 hover:border-gray-300 transition-all">
//                             ← Back
//                           </button>
//                           <motion.button
//                             type="submit"
//                             whileHover={{ scale:1.02, y:-1 }}
//                             whileTap={{ scale:0.97 }}
//                             className="flex-1 py-3.5 rounded-xl text-sm font-black text-white flex items-center justify-center gap-2 group"
//                             style={{ background:'linear-gradient(135deg,#7c3aed,#3b82f6,#06b6d4)', boxShadow:'0 6px 24px rgba(124,58,237,.3)' }}
//                           >
//                             Get My Free Growth Plan <Send size={15} className="group-hover:translate-x-0.5 transition-transform" />
//                           </motion.button>
//                         </div>

//                         <p className="text-center text-[10px] text-gray-400 font-medium">
//                           🔒 100% confidential · No spam · Response in 24 hours
//                         </p>
//                       </form>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ── FAQ ───────────────────────────────────────────────────────────────────────
// function FAQSection() {
//   const [open, setOpen] = useState<number | null>(0);

//   return (
//     <section className="py-20 px-6 bg-white border-t border-gray-50">
//       <div className="max-w-3xl mx-auto">
//         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
//             Questions?{' '}
//             <span style={{ background:'linear-gradient(135deg,#7c3aed,#06b6d4)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
//               We&apos;ve Got Answers
//             </span>
//           </h2>
//           <p className="text-gray-500">Everything you need to know before reaching out.</p>
//         </motion.div>

//         <div className="space-y-3">
//           {FAQS.map((faq, i) => (
//             <motion.div key={i}
//               initial={{ opacity:0, y:12 }}
//               whileInView={{ opacity:1, y:0 }}
//               viewport={{ once:true }}
//               transition={{ delay: i*0.06 }}
//               className="rounded-2xl border overflow-hidden transition-colors duration-200"
//               style={{ borderColor: open === i ? 'rgba(124,58,237,.3)' : '#f1f5f9', background: open === i ? 'rgba(124,58,237,.02)' : '#fff' }}
//             >
//               <button
//                 onClick={() => setOpen(open === i ? null : i)}
//                 className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-colors"
//               >
//                 <span className="font-black text-sm sm:text-base text-gray-900 pr-4">{faq.q}</span>
//                 <span
//                   className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 border transition-colors"
//                   style={{ borderColor: open === i ? 'rgba(124,58,237,.3)' : '#e2e8f0', color: open === i ? '#7c3aed' : '#94a3b8' }}
//                 >
//                   {open === i ? <Minus size={15}/> : <Plus size={15}/>}
//                 </span>
//               </button>
//               <AnimatePresence initial={false}>
//                 {open === i && (
//                   <motion.div
//                     initial={{ height:0, opacity:0 }}
//                     animate={{ height:'auto', opacity:1 }}
//                     exit={{ height:0, opacity:0 }}
//                     transition={{ duration:0.28, ease:'easeInOut' }}
//                   >
//                     <p className="px-6 pb-6 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ── Final CTA ─────────────────────────────────────────────────────────────────
// function FinalCTA() {
//   return (
//     <section className="py-20 px-6 relative overflow-hidden"
//       style={{ background:'linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0c1a2e 100%)' }}>
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full" style={{ background:'radial-gradient(circle,rgba(124,58,237,.2),transparent 70%)' }} />
//         <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full" style={{ background:'radial-gradient(circle,rgba(6,182,212,.15),transparent 70%)' }} />
//         <div className="absolute inset-0 opacity-[0.03]"
//           style={{ backgroundImage:'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize:'40px 40px' }} />
//       </div>
//       <div className="relative z-10 max-w-3xl mx-auto text-center">
//         <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
//           <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest border mb-8"
//             style={{ background:'rgba(124,58,237,.15)', borderColor:'rgba(124,58,237,.3)', color:'#a78bfa' }}>
//             <TrendingUp size={11}/> No Commitment Required
//           </span>
//           <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
//             Still Thinking?<br />
//             <span style={{ background:'linear-gradient(135deg,#a78bfa,#67e8f9)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
//               Let&apos;s Just Talk First.
//             </span>
//           </h2>
//           <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
//             Book a free 30-minute strategy call. No pitch, no pressure — just honest advice on how to grow your brand.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3 justify-center">
//             <motion.button
//               onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior:'smooth' })}
//               whileHover={{ scale:1.03, y:-2 }} whileTap={{ scale:0.97 }}
//               className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white text-sm font-black"
//               style={{ background:'linear-gradient(135deg,#7c3aed,#06b6d4)', boxShadow:'0 8px 32px rgba(124,58,237,.35)' }}
//             >
//               Book Free Strategy Call <ArrowRight size={15}/>
//             </motion.button>
//             <motion.a
//               href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
//               target="_blank" rel="noopener noreferrer"
//               whileHover={{ scale:1.02, y:-1 }} whileTap={{ scale:0.97 }}
//               className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white text-sm font-bold border"
//               style={{ borderColor:'rgba(255,255,255,.15)', background:'rgba(255,255,255,.06)' }}
//             >
//               💬 WhatsApp Us
//             </motion.a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// // ── Missing import for X ──────────────────────────────────────────────────────
// import { X } from 'lucide-react';

// // ── Root export ───────────────────────────────────────────────────────────────
// export default function ContactPageContent() {
//   return (
//     <main>
//       <ContactHero />
//       <StatsBar />
//       <ServicesShowcase />
//       <ContactForm />
//       <FAQSection />
//       <FinalCTA />
//     </main>
//   );
// }
























// app/components/contact/Contactpagecontent.tsx
'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Send, CheckCircle, MapPin, Mail, Phone,
  Plus, Minus, ArrowRight, Sparkles, Zap, TrendingUp,
  Video, Home, Megaphone, Instagram, Code2,
  BarChart3, Star, MessageCircle, Clock,
  RefreshCw, ShoppingBag, Mic2, Camera,
  Palette, Bot, Search, Smartphone, ChevronDown,
} from 'lucide-react';

// ── Env ───────────────────────────────────────────────────────────────────────
const CONTACT_EMAIL     = process.env.NEXT_PUBLIC_CONTACT_EMAIL     ?? 'hello@aerovince.com';
const CONTACT_PHONE     = process.env.NEXT_PUBLIC_CONTACT_PHONE     ?? '+91-74899-51514';
const CONTACT_PHONE_RAW = process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW ?? '917489951514';
const WHATSAPP_NUMBER   = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER   ?? '917489951514';
const WHATSAPP_MESSAGE  = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE  ?? 'Hi! I want to grow my brand with Aerovince.';

// ── All service categories ─────────────────────────────────────────────────────
const SERVICE_CATEGORIES = [
  {
    icon: <Video size={18} />,
    label: 'Video Production',
    color: '#7c3aed',
    bg: 'rgba(124,58,237,.08)',
    border: 'rgba(124,58,237,.2)',
    services: [
      'Brand Film / Corporate Video',
      'Product Video Shoot',
      'Reels & Short-form Content',
      'YouTube Video Production',
      'Testimonial / Client Review Video',
      'Event Coverage & Highlights',
      'Animated Explainer Video',
      'Drone Aerial Videography',
      'Documentary Style Video',
      'Interview & Podcast Recording',
    ],
  },
  {
    icon: <Home size={18} />,
    label: 'Real Estate Marketing',
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,.08)',
    border: 'rgba(14,165,233,.2)',
    services: [
      'Property Video Promotion',
      'Real Estate Aerial / Drone Shoots',
      'Virtual Tour Setup (360°)',
      'Real Estate SEO',
      'Property Listing Ad Campaigns',
      'Lead Generation for Builders',
      'Google Maps Optimization for Projects',
      'Real Estate Social Media Management',
      'Builder Branding & Identity',
      'Landing Pages for Projects',
    ],
  },
  {
    icon: <Code2 size={18} />,
    label: 'Website & Tech',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,.08)',
    border: 'rgba(6,182,212,.2)',
    services: [
      'Business / Corporate Website',
      'Landing Page Development',
      'E-commerce Store (Shopify / Custom)',
      'Web App Development',
      'CMS & Blog Setup (WordPress / Next.js)',
      'Website Speed & SEO Optimization',
      'Website Redesign',
      'Portfolio / Personal Brand Site',
      'Booking & Appointment System',
      'API Integration & Backend',
    ],
  },
  {
    icon: <Smartphone size={18} />,
    label: 'App Development',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,.08)',
    border: 'rgba(139,92,246,.2)',
    services: [
      'Android App Development',
      'iOS App Development',
      'Cross-platform App (React Native / Flutter)',
      'App UI/UX Design',
      'App Store Optimization (ASO)',
      'App Maintenance & Updates',
      'MVP for Startups',
      'SaaS Product Development',
    ],
  },
  {
    icon: <Megaphone size={18} />,
    label: 'Performance Marketing',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,.08)',
    border: 'rgba(245,158,11,.2)',
    services: [
      'Google Search Ads',
      'Google Display Ads',
      'Meta Ads (Facebook & Instagram)',
      'YouTube Ads',
      'LinkedIn Ads (B2B)',
      'Retargeting Campaigns',
      'Lead Gen Funnels',
      'E-commerce Ads (Low Budget)',
      'Performance Max Campaigns',
      'WhatsApp Broadcast Ads',
    ],
  },
  {
    icon: <Instagram size={18} />,
    label: 'Social Media',
    color: '#ec4899',
    bg: 'rgba(236,72,153,.08)',
    border: 'rgba(236,72,153,.2)',
    services: [
      'Social Media Management',
      'Content Creation & Monthly Calendar',
      'Instagram Growth Strategy',
      'LinkedIn B2B Marketing',
      'YouTube Channel Management',
      'Facebook Page Management',
      'Twitter / X Marketing',
      'Influencer Collaboration',
      'Community Building & Engagement',
      'Meme & Viral Content Strategy',
    ],
  },
  {
    icon: <BarChart3 size={18} />,
    label: 'SEO & Growth',
    color: '#10b981',
    bg: 'rgba(16,185,129,.08)',
    border: 'rgba(16,185,129,.2)',
    services: [
      'Technical SEO Audit',
      'Local SEO & Google My Business',
      'E-commerce SEO',
      'YouTube SEO',
      'Content Marketing & Blogging',
      'Link Building',
      'Keyword Research & Strategy',
      'Competitor Analysis',
      'SEO Monthly Retainer',
      'International / Multilingual SEO',
    ],
  },
  {
    icon: <Palette size={18} />,
    label: 'Branding & Design',
    color: '#f97316',
    bg: 'rgba(249,115,22,.08)',
    border: 'rgba(249,115,22,.2)',
    services: [
      'Logo & Brand Identity Design',
      'Brand Strategy & Positioning',
      'Packaging Design',
      'Pitch Deck / Investor Deck Design',
      'Social Media Templates & Kit',
      'UI/UX Design',
      'Menu / Brochure / Catalogue Design',
      'Billboard & Print Design',
      'Brand Guideline Document',
      'Business Card & Stationery',
    ],
  },
  {
    icon: <Bot size={18} />,
    label: 'AI & Automation',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,.08)',
    border: 'rgba(6,182,212,.2)',
    services: [
      'AI Chatbot Setup (Website / WhatsApp)',
      'Marketing Automation Workflows',
      'CRM Setup & Integration (HubSpot / Zoho)',
      'Email Automation Flows',
      'AI Content Pipeline',
      'WhatsApp Business Automation',
      'Lead Scoring & Nurturing',
      'AI-powered Ad Optimization',
      'Automated Reporting Dashboard',
      'Zapier / Make.com Integrations',
    ],
  },
  {
    icon: <ShoppingBag size={18} />,
    label: 'E-commerce Growth',
    color: '#d97706',
    bg: 'rgba(217,119,6,.08)',
    border: 'rgba(217,119,6,.2)',
    services: [
      'Amazon / Flipkart Account Management',
      'Meesho / Myntra Onboarding',
      'D2C Brand Setup & Strategy',
      'Product Photography Editing',
      'Marketplace SEO & Listing Optimization',
      'Flash Sale & Campaign Strategy',
      'E-commerce Ads (Low Budget Start)',
      'Cart Abandonment Campaigns',
      'Customer Review Generation',
      'Dropshipping Setup',
    ],
  },
  {
    icon: <Camera size={18} />,
    label: 'Photography',
    color: '#be185d',
    bg: 'rgba(190,24,93,.08)',
    border: 'rgba(190,24,93,.2)',
    services: [
      'Product Photography',
      'Corporate / Team Photography',
      'Food & Restaurant Photography',
      'Real Estate Interior Photography',
      'Event Photography',
      'Fashion / Portfolio Photography',
      'E-commerce Product Shoot',
      'Social Media Content Shoot',
    ],
  },
  {
    icon: <Mic2 size={18} />,
    label: 'Content & PR',
    color: '#0284c7',
    bg: 'rgba(2,132,199,.08)',
    border: 'rgba(2,132,199,.2)',
    services: [
      'Content Writing & Copywriting',
      'Press Release & PR Outreach',
      'Podcast Setup & Production',
      'Guest Posting & Backlinks',
      'Case Study & White Paper Writing',
      'Newsletter Strategy',
      'Email Marketing Campaigns',
      'Webinar Setup & Promotion',
    ],
  },
];

// ── Flat service list for dropdown ────────────────────────────────────────────
const SERVICE_OPTIONS = [
  ...SERVICE_CATEGORIES.map(c => c.label),
  'Something else — I\'ll explain below',
];

const BUDGETS = [
  'Affordable / Starter',
  'Small Business',
  'Growing Brand',
  'Enterprise Scale',
  'One-time Project',
  'Not sure yet',
];

const STATS = [
  { num: '150+',  label: 'Projects Delivered' },
  { num: '98%',   label: 'Client Satisfaction' },
  { num: '₹12M+', label: 'Revenue Generated' },
  { num: '40+',   label: 'Brands Scaled' },
];

const FAQS = [
  {
    q: 'Do you work with small budgets?',
    a: 'Absolutely. We have performance-focused packages for every size — from social media content to basic Google Ads. Every business deserves quality marketing, not just big enterprises.',
  },
  {
    q: 'How fast can you start on my project?',
    a: 'We kick off within 5–7 business days after a brief alignment call. Strategy, creative, and execution all happen fast — we move at the speed of your ambition.',
  },
  {
    q: 'Do you do both creative and performance work in-house?',
    a: 'Yes. We\'re a full-stack growth agency — brand films, social content, Google Ads, SEO, web dev, and AI automation are all done in-house so messaging stays consistent.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'Real estate, ed-tech, D2C brands, SaaS, local businesses, restaurants, startups, and professionals across India, UAE, and the US. If you want to grow, we speak your language.',
  },
  {
    q: 'Is there a long-term contract?',
    a: 'No lock-in contracts. We work on monthly retainers and project-based models. Our results keep clients around — not fine print.',
  },
  {
    q: 'Do you offer video production for small businesses?',
    a: 'Yes — from a single product reel to a full brand documentary. We have packages for every scale. Drone shoots, studio shoots, and on-location are all available.',
  },
];

type Status = 'idle' | 'success';

// ── Hooks ─────────────────────────────────────────────────────────────────────
function useParallax(ref: React.RefObject<HTMLElement | null>, range = 40) {
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  return useTransform(scrollYProgress, [0, 1], [-range, range]);
}

// ── Background ────────────────────────────────────────────────────────────────
function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-white to-white" />
      <motion.div
        className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-violet-200/30 via-blue-200/20 to-transparent blur-3xl will-change-transform"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-16 -left-16 w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-cyan-200/25 via-blue-100/20 to-transparent blur-3xl will-change-transform"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#3b82f6 1px,transparent 1px),linear-gradient(90deg,#3b82f6 1px,transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function ContactHero() {
  const ref = useRef<HTMLElement>(null);
  const y   = useParallax(ref, 30);
  const scrollToForm = () => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section ref={ref} className="relative overflow-hidden pt-32 pb-24 px-6">
      <HeroBackground />
      <motion.div style={{ y }} className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest border mb-8"
          style={{ background: 'rgba(124,58,237,.08)', borderColor: 'rgba(124,58,237,.25)', color: '#7c3aed' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
          Free Strategy — No Obligation
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-[76px] font-extrabold text-gray-900 leading-[1.06] tracking-tight mb-6"
        >
          Let&apos;s Build Something
          <span className="block mt-1" style={{
            background: 'linear-gradient(135deg,#7c3aed,#3b82f6,#06b6d4)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            That Drives Results
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.6 }}
          className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From a starter budget to a full-scale marketing engine — we build growth systems
          that punch above their weight. Tell us what you need.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 justify-center mb-10"
        >
          {[
            { icon: '⚡', label: '1 Hour Response' },
            { icon: '🌏', label: 'India & Global' },
            { icon: '💰', label: 'Every Budget' },
            { icon: '🤖', label: 'AI-Powered' },
            { icon: '📈', label: 'ROI Focused' },
            { icon: '🎥', label: 'In-house Studio' },
          ].map(p => (
            <span key={p.label} className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 font-semibold shadow-sm">
              <span>{p.icon}</span>{p.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <motion.button
            onClick={scrollToForm}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white text-sm font-bold shadow-lg group"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#3b82f6)' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Free Consultation <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-gray-700 text-sm font-bold border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <span className="text-base">💬</span> Chat on WhatsApp
          </motion.a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-3 mt-10">
          <div className="flex -space-x-2">
            {['bg-violet-400','bg-blue-400','bg-cyan-400','bg-pink-400'].map((c,i) => (
              <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-[10px] font-black`}>
                {String.fromCharCode(65+i)}
              </div>
            ))}
          </div>
          <div>
            <div className="flex gap-0.5">{[...Array(5)].map((_,i) => <Star key={i} size={12} className="fill-amber-400 text-amber-400" />)}</div>
            <p className="text-xs text-gray-500 mt-0.5"><span className="font-semibold text-gray-800">4.9/5</span> from 150+ clients</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ── Stats ─────────────────────────────────────────────────────────────────────
function StatsBar() {
  return (
    <section className="relative z-10 py-6 border-y border-gray-100 bg-white/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-gray-100">
        {STATS.map((s, i) => (
          <motion.div key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex flex-col items-center text-center px-4"
          >
            <span className="text-2xl sm:text-3xl font-extrabold text-gray-900"
              style={{ background: 'linear-gradient(135deg,#7c3aed,#06b6d4)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
              {s.num}
            </span>
            <span className="text-xs text-gray-500 font-medium mt-0.5">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ── Services Showcase ─────────────────────────────────────────────────────────
function ServicesShowcase() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest border mb-5"
            style={{ background:'rgba(124,58,237,.06)', borderColor:'rgba(124,58,237,.2)', color:'#7c3aed' }}>
            <Sparkles size={11} /> Everything Under One Roof
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            What We Can Do <span style={{ background:'linear-gradient(135deg,#7c3aed,#06b6d4)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>For You</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            12 specializations. 100+ services. Every budget. Tap any category to explore.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICE_CATEGORIES.map((cat, i) => (
            <motion.div key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="cursor-pointer rounded-2xl border p-5 transition-all duration-300 select-none"
              style={{
                background: expanded === i ? cat.bg : '#fff',
                borderColor: expanded === i ? cat.border : '#f1f5f9',
                boxShadow: expanded === i ? `0 8px 32px ${cat.bg}` : '0 1px 4px rgba(0,0,0,.04)',
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: cat.bg, color: cat.color }}>
                  {cat.icon}
                </div>
                <motion.div animate={{ rotate: expanded === i ? 45 : 0 }} transition={{ duration: 0.2 }}>
                  <Plus size={16} style={{ color: cat.color }} />
                </motion.div>
              </div>
              <h3 className="font-black text-sm text-gray-900 mb-1">{cat.label}</h3>
              <p className="text-[11px] text-gray-400 mb-3">{cat.services.length} services</p>

              <AnimatePresence>
                {expanded === i && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-1.5 overflow-hidden"
                  >
                    {cat.services.map(s => (
                      <li key={s} className="flex items-center gap-2 text-[12px] font-medium" style={{ color: cat.color }}>
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: cat.color }} />
                        {s}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Select component ──────────────────────────────────────────────────────────
function SelectField({
  value, onChange, options, placeholder, required,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        className="w-full appearance-none px-4 py-3 pr-10 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all cursor-pointer"
        style={{ color: value ? '#111827' : '#9ca3af' }}
      >
        <option value="" disabled hidden>{placeholder}</option>
        {options.map(o => (
          <option key={o} value={o} style={{ color: '#111827' }}>{o}</option>
        ))}
      </select>
      <ChevronDown
        size={15}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      />
    </div>
  );
}

// ── Contact Form ──────────────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    budget: '',
    query: '',
  });
  const [status, setStatus]         = useState<Status>('idle');
  const [submittedName, setSubmittedName] = useState('');

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedName(form.name);
    setStatus('success');

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name:        form.name,
        phone:       form.phone,
        email:       form.email,
        company:     '',
        enquiryType: form.service,
        budget:      form.budget,
        services:    form.service,
        message:     form.query,
      }),
    }).catch(err => console.error('[contact] error:', err));
  };

  const reset = () => {
    setStatus('idle');
    setForm({ name: '', phone: '', email: '', service: '', budget: '', query: '' });
  };

  const inputCls = `
    w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm
    text-gray-900 placeholder:text-gray-400 focus:outline-none
    focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all
  `;

  const INFO_CARDS = [
    { icon: <Mail size={17} />,   label: 'Email',            value: CONTACT_EMAIL,            href: `mailto:${CONTACT_EMAIL}`,   color: '#7c3aed', bg: 'rgba(124,58,237,.08)' },
    { icon: <Phone size={17} />,  label: 'Call / WhatsApp',  value: CONTACT_PHONE,            href: `tel:+${CONTACT_PHONE_RAW}`, color: '#3b82f6', bg: 'rgba(59,130,246,.08)' },
    { icon: <MapPin size={17} />, label: 'Head Office',      value: 'Vijay Nagar, Indore, M.P.', href: null,                     color: '#06b6d4', bg: 'rgba(6,182,212,.08)' },
    { icon: <Clock size={17} />,  label: 'Hours',            value: 'Mon – Sat · 10 AM – 7 PM IST', href: null,                 color: '#10b981', bg: 'rgba(16,185,129,.08)' },
  ];

  return (
    <section
      id="contact-form"
      className="py-20 px-4 sm:px-6"
      style={{ background: 'linear-gradient(180deg,#f8fafc 0%,#ffffff 100%)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest border mb-5"
            style={{ background: 'rgba(59,130,246,.06)', borderColor: 'rgba(59,130,246,.2)', color: '#3b82f6' }}
          >
            <Zap size={11} /> We reply within 1 hour
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-3">
            Tell Us About{' '}
            <span style={{ background: 'linear-gradient(135deg,#3b82f6,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Your Project
            </span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Our team reviews every submission personally and gets back to you within 1 hour during working hours.
          </p>
        </motion.div>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── Left: contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            {INFO_CARDS.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -2 }}
              >
                {card.href ? (
                  <a
                    href={card.href}
                    className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all no-underline"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: card.bg, color: card.color }}>
                      {card.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">{card.label}</p>
                      <p className="text-sm font-semibold text-gray-800">{card.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: card.bg, color: card.color }}>
                      {card.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">{card.label}</p>
                      <p className="text-sm font-semibold text-gray-800">{card.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2.5 py-4 rounded-2xl text-white text-sm font-black shadow-lg"
              style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', boxShadow: '0 8px 24px rgba(37,211,102,.25)' }}
            >
              <MessageCircle size={17} /> Chat Instantly on WhatsApp
            </motion.a>

            {/* Branch offices */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Branch Offices</p>
              {['BB Ganj, Muzaffarpur, Bihar', 'Seawoods, Navi Mumbai, Maharashtra'].map(loc => (
                <div key={loc} className="flex items-start gap-2 mb-2 last:mb-0">
                  <MapPin size={11} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-gray-600 font-medium">{loc}</span>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 h-44 shadow-sm">
              <iframe
                width="100%" height="100%" frameBorder={0} scrolling="no"
                src="https://maps.google.com/maps?q=Vijay+Nagar+Indore+MP&t=&z=14&ie=UTF8&iwloc=&output=embed"
                title="Aerovince Location"
              />
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <AnimatePresence mode="wait">

                {/* ── Success state ── */}
                {status === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.94, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center py-14 px-8 gap-5"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg,#7c3aed,#3b82f6,#06b6d4)', boxShadow: '0 16px 48px rgba(124,58,237,.3)' }}
                    >
                      <CheckCircle size={38} className="text-white" />
                    </motion.div>

                    {/* Confetti dots */}
                    <div className="absolute pointer-events-none">
                      {['#7c3aed','#3b82f6','#06b6d4','#10b981','#f59e0b','#ec4899'].map((c,i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 rounded-full"
                          style={{ background: c, left: `${(i - 2.5) * 30}px` }}
                          initial={{ y: 0, opacity: 1 }}
                          animate={{ y: -60 - i*10, opacity: 0, x: (i % 2 === 0 ? 1 : -1) * 20 }}
                          transition={{ duration: 0.8, delay: 0.2 + i * 0.07 }}
                        />
                      ))}
                    </div>

                    <div>
                      <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                        We got it, {submittedName.split(' ')[0]}! 🎉
                      </h3>
                      <p className="text-gray-500 text-sm max-w-xs mx-auto leading-relaxed">
                        Our team will review your message and reach out within{' '}
                        <strong className="text-gray-800">1 hour</strong> during working hours.
                      </p>
                    </div>

                    {/* What's next */}
                    <div className="w-full max-w-sm bg-gray-50 rounded-2xl p-5 border border-gray-100 text-left">
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">What happens next</p>
                      {[
                        { icon: '📋', label: 'We review your query',      time: 'Now' },
                        { icon: '📞', label: 'Our team contacts you',     time: 'Within 1 hour' },
                        { icon: '🚀', label: 'We start building together', time: 'Same week' },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.12 }}
                          className="flex items-center gap-3 mb-3 last:mb-0"
                        >
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base bg-white border border-gray-200 shadow-sm flex-shrink-0">
                            {item.icon}
                          </div>
                          <p className="text-xs font-bold text-gray-800 flex-1">{item.label}</p>
                          <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                            style={{ background: 'rgba(124,58,237,.07)', color: '#7c3aed', border: '1px solid rgba(124,58,237,.15)' }}
                          >
                            {item.time}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                      <motion.a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                        target="_blank" rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                        className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-white text-sm font-bold"
                        style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)' }}
                      >
                        💬 WhatsApp Us
                      </motion.a>
                      <motion.button
                        onClick={reset}
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                        className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold border border-gray-200 text-gray-600 hover:border-violet-300 hover:text-violet-600 transition-all group"
                      >
                        <RefreshCw size={13} className="group-hover:rotate-180 transition-transform duration-500" />
                        Send Another
                      </motion.button>
                    </div>

                    <p className="text-xs text-gray-400">
                      Need faster help? Call us:{' '}
                      <a href={`tel:+${CONTACT_PHONE_RAW}`} className="text-violet-600 font-bold">{CONTACT_PHONE}</a>
                    </p>
                  </motion.div>
                )}

                {/* ── Form ── */}
                {status === 'idle' && (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Top banner */}
                    <div
                      className="px-8 py-4 border-b border-gray-50 flex items-center justify-between"
                      style={{ background: 'linear-gradient(90deg,rgba(124,58,237,.04),rgba(6,182,212,.03))' }}
                    >
                      <p className="text-sm font-black text-gray-700">Tell us what you need</p>
                      <span
                        className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{ background: 'rgba(124,58,237,.08)', color: '#7c3aed', border: '1px solid rgba(124,58,237,.18)' }}
                      >
                        ⚡ 1-hour reply
                      </span>
                    </div>

                    <form onSubmit={handleSubmit} className="p-7 md:p-9 space-y-5">

                      {/* Row 1: Name + Phone (both required) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">
                            Your Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={set('name')}
                            placeholder="Rahul Sharma"
                            className={inputCls}
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">
                            Mobile Number <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={form.phone}
                            onChange={set('phone')}
                            placeholder="+91 98765 00000"
                            className={inputCls}
                          />
                        </div>
                      </div>

                      {/* Row 2: Service dropdown (required) */}
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">
                          What are you looking for? <span className="text-red-400">*</span>
                        </label>
                        <SelectField
                          value={form.service}
                          onChange={v => setForm(p => ({ ...p, service: v }))}
                          options={SERVICE_OPTIONS}
                          placeholder="Pick a service…"
                          required
                        />
                      </div>

                      {/* Row 3: Query (required) */}
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">
                          Your Query / Message <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={form.query}
                          onChange={set('query')}
                          placeholder="Describe what you need — goals, challenges, or anything specific. Didn't find your service above? Mention it here."
                          className={inputCls}
                        />
                      </div>

                      {/* Divider */}
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-px bg-gray-100" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 whitespace-nowrap">Optional</span>
                        <div className="flex-1 h-px bg-gray-100" />
                      </div>

                      {/* Row 4: Email + Budget (optional) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={set('email')}
                            placeholder="rahul@brand.com"
                            className={inputCls}
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">
                            Budget Range
                          </label>
                          <SelectField
                            value={form.budget}
                            onChange={v => setForm(p => ({ ...p, budget: v }))}
                            options={BUDGETS}
                            placeholder="Select a range…"
                          />
                        </div>
                      </div>

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.015, y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full py-4 rounded-xl text-white text-sm font-black flex items-center justify-center gap-2 group"
                        style={{
                          background: 'linear-gradient(135deg,#7c3aed,#3b82f6,#06b6d4)',
                          boxShadow: '0 6px 24px rgba(124,58,237,.28)',
                        }}
                      >
                        Send My Enquiry
                        <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </motion.button>

                      <p className="text-center text-[10px] text-gray-400 font-medium">
                        🔒 100% confidential · No spam · We reply within 1 hour
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 px-6 bg-white border-t border-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Questions?{' '}
            <span style={{ background:'linear-gradient(135deg,#7c3aed,#06b6d4)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
              We&apos;ve Got Answers
            </span>
          </h2>
          <p className="text-gray-500">Everything you need to know before reaching out.</p>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:12 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay: i*0.06 }}
              className="rounded-2xl border overflow-hidden transition-colors duration-200"
              style={{ borderColor: open === i ? 'rgba(124,58,237,.3)' : '#f1f5f9', background: open === i ? 'rgba(124,58,237,.02)' : '#fff' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-colors"
              >
                <span className="font-black text-sm sm:text-base text-gray-900 pr-4">{faq.q}</span>
                <span
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 border transition-colors"
                  style={{ borderColor: open === i ? 'rgba(124,58,237,.3)' : '#e2e8f0', color: open === i ? '#7c3aed' : '#94a3b8' }}
                >
                  {open === i ? <Minus size={15}/> : <Plus size={15}/>}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height:0, opacity:0 }}
                    animate={{ height:'auto', opacity:1 }}
                    exit={{ height:0, opacity:0 }}
                    transition={{ duration:0.28, ease:'easeInOut' }}
                  >
                    <p className="px-6 pb-6 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Final CTA ─────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="py-20 px-6 relative overflow-hidden"
      style={{ background:'linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0c1a2e 100%)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full" style={{ background:'radial-gradient(circle,rgba(124,58,237,.2),transparent 70%)' }} />
        <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full" style={{ background:'radial-gradient(circle,rgba(6,182,212,.15),transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage:'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize:'40px 40px' }} />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest border mb-8"
            style={{ background:'rgba(124,58,237,.15)', borderColor:'rgba(124,58,237,.3)', color:'#a78bfa' }}>
            <TrendingUp size={11}/> No Commitment Required
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Still Thinking?<br />
            <span style={{ background:'linear-gradient(135deg,#a78bfa,#67e8f9)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
              Let&apos;s Just Talk First.
            </span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Book a free 30-minute strategy call. No pitch, no pressure — just honest advice on how to grow your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior:'smooth' })}
              whileHover={{ scale:1.03, y:-2 }} whileTap={{ scale:0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white text-sm font-black"
              style={{ background:'linear-gradient(135deg,#7c3aed,#06b6d4)', boxShadow:'0 8px 32px rgba(124,58,237,.35)' }}
            >
              Book Free Strategy Call <ArrowRight size={15}/>
            </motion.button>
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale:1.02, y:-1 }} whileTap={{ scale:0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white text-sm font-bold border"
              style={{ borderColor:'rgba(255,255,255,.15)', background:'rgba(255,255,255,.06)' }}
            >
              💬 WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Root export ───────────────────────────────────────────────────────────────
export default function ContactPageContent() {
  return (
    <main>
      <ContactHero />
      <StatsBar />
      <ServicesShowcase />
      <ContactForm />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}