// 'use client';

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X } from 'lucide-react';

// export default function WhatsAppMascot() {
//     const [isVisible, setIsVisible] = useState(false);
//     const [isDismissed, setIsDismissed] = useState(false);

//     useEffect(() => {
//         // Show mascot after 3 seconds
//         const timer = setTimeout(() => {
//             if (!isDismissed) {
//                 setIsVisible(true);
//             }
//         }, 3000);

//         return () => clearTimeout(timer);
//     }, [isDismissed]);

//     const handleDismiss = () => {
//         setIsVisible(false);
//         setIsDismissed(true);
//     };

//     const handleClick = () => {
//         window.open('https://wa.me/918587870707?text=Hi! I need help with my marketing needs.', '_blank');
//     };

//     return (
//         <AnimatePresence>
//             {isVisible && !isDismissed && (
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0, x: 100 }}
//                     animate={{ opacity: 1, scale: 1, x: 0 }}
//                     exit={{ opacity: 0, scale: 0, x: 100 }}
//                     transition={{ type: 'spring', stiffness: 260, damping: 20 }}
//                     className="fixed bottom-32 right-6 z-40 cursor-pointer"
//                     onClick={handleClick}
//                 >
//                     {/* Speech Bubble */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.3 }}
//                         className="absolute bottom-full right-0 mb-4 bg-white rounded-lg shadow-xl p-4 max-w-[200px] group-hover:shadow-2xl transition-shadow"
//                     >
//                         <button
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleDismiss();
//                             }}
//                             className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
//                         >
//                             <X className="w-3 h-3 text-gray-600" />
//                         </button>
//                         <p className="text-sm font-medium text-kestone-black">
//                             👋 Need help? Click here to chat with us!
//                         </p>
//                         {/* Speech bubble arrow */}
//                         <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45" />
//                     </motion.div>

//                     {/* Mascot Character */}
//                     <motion.div
//                         animate={{
//                             y: [0, -10, 0],
//                         }}
//                         transition={{
//                             duration: 2,
//                             repeat: Infinity,
//                             ease: 'easeInOut'
//                         }}
//                         className="relative"
//                     >
//                         <motion.img
//                             src="/mascot.png"
//                             alt="Help Mascot"
//                             className="w-32 h-32 object-contain drop-shadow-2xl"
//                             animate={{
//                                 rotate: [-5, 5, -5],
//                             }}
//                             transition={{
//                                 duration: 3,
//                                 repeat: Infinity,
//                                 ease: 'easeInOut'
//                             }}
//                         />

//                         {/* Glow effect */}
//                         <motion.div
//                             className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-30"
//                             animate={{
//                                 scale: [1, 1.2, 1],
//                                 opacity: [0.3, 0.5, 0.3],
//                             }}
//                             transition={{
//                                 duration: 2,
//                                 repeat: Infinity,
//                                 ease: 'easeInOut'
//                             }}
//                         />
//                     </motion.div>

//                     {/* Sparkle effects */}
//                     <motion.div
//                         className="absolute top-0 right-0 text-2xl"
//                         animate={{
//                             scale: [0, 1, 0],
//                             rotate: [0, 180, 360],
//                         }}
//                         transition={{
//                             duration: 2,
//                             repeat: Infinity,
//                             ease: 'easeInOut',
//                             delay: 0.5
//                         }}
//                     >
//                         ✨
//                     </motion.div>
//                     <motion.div
//                         className="absolute bottom-0 left-0 text-xl"
//                         animate={{
//                             scale: [0, 1, 0],
//                             rotate: [0, -180, -360],
//                         }}
//                         transition={{
//                             duration: 2,
//                             repeat: Infinity,
//                             ease: 'easeInOut',
//                             delay: 1
//                         }}
//                     >
//                         ⭐
//                     </motion.div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }



'use client';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle, ChevronDown, Sparkles } from 'lucide-react';

interface Message {
    id: string;                              // ✅ was number
    text: string;
    sender: 'user' | 'bot';
    time: string;
    type?: 'text' | 'cards' | 'contact';
    cards?: ServiceCard[];
    contactInfo?: ContactInfo;
}

interface ServiceCard {
    icon: string;
    title: string;
    desc: string;
    color: string;
    bg: string;
}

interface ContactInfo {
    email: string;
    phone: string;
    hours: string;
}

const SERVICES_CARDS: ServiceCard[] = [
    { icon: '🔍', title: 'SEO', desc: 'Rank higher on Google & drive organic traffic', color: '#2563eb', bg: '#eff6ff' },
    { icon: '📱', title: 'Social Media', desc: 'Instagram, Facebook, LinkedIn management', color: '#7c3aed', bg: '#f5f3ff' },
    { icon: '✍️', title: 'Content Marketing', desc: 'Blogs, videos & creative storytelling', color: '#0891b2', bg: '#ecfeff' },
    { icon: '🎯', title: 'Paid Ads', desc: 'Google & Meta ads that convert', color: '#ea580c', bg: '#fff7ed' },
    { icon: '📧', title: 'Email Marketing', desc: 'Campaigns that nurture & retain customers', color: '#16a34a', bg: '#f0fdf4' },
    { icon: '📊', title: 'Analytics', desc: 'Data-driven insights & monthly reports', color: '#9333ea', bg: '#fdf4ff' },
];

const CONTACT_INFO: ContactInfo = {
    email: 'marktaleworld@gmail.com',
    phone: '+91-8587870707',
    hours: 'Mon–Sat, 10am – 7pm IST',
};

const BOT_RESPONSES: Record<string, { text: string; type?: 'text' | 'cards' | 'contact' }> = {
    hi: { text: "Hey there! 👋 Great to see you! How can Marky help you today?" },
    hello: { text: "Hey there! 👋 Great to see you! How can Marky help you today?" },
    help: { text: "Of course! You can ask me about our services, team, or how to get started. What's on your mind?" },
    services: { text: "Here's what we offer at Marktale — tap any card to know more 👇", type: 'cards' },
    seo: { text: "🔍 Our SEO team helps you rank on page 1 of Google using on-page optimisation, link building & technical audits. Results visible in 60–90 days!" },
    social: { text: "📱 We manage your Instagram, Facebook & LinkedIn — content creation, scheduling, engagement & growth strategies included!" },
    ads: { text: "🎯 We run high-ROI ad campaigns on Google & Meta. Our team handles creatives, targeting, A/B testing & budget management." },
    content: { text: "✍️ Our content team crafts blogs, reels scripts, email copy & more — everything optimised to attract and convert your audience." },
    email: { text: "📧 We build automated email sequences, newsletters & drip campaigns that keep your audience engaged and coming back." },
    analytics: { text: "📊 We track your brand's performance with monthly reports, heatmaps & actionable insights to keep growing!" },
    contact: { text: "Here's how to reach our team directly 📬", type: 'contact' },
    team: { text: "👥 Marktale was founded in 2020 and is built by a passionate team of marketers, designers & strategists based in India." },
    about: { text: "🚀 Marktale is a full-service digital marketing agency helping brands grow online with strategy, creativity & data. We've served 100+ clients across industries!" },
    started: { text: "Getting started is easy! 🎉 Just share your brand name and goals, and our team will put together a custom growth plan for you. Reach us at marktaleworld@gmail.com or call +91-8587870707!" },
    default: { text: "Thanks for reaching out! 😊 Feel free to ask about our services or drop us a message at marktaleworld@gmail.com — we'll get back to you soon!" },
};

function getTimeString() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function getBotReply(text: string): { text: string; type?: 'text' | 'cards' | 'contact' } {
    const lower = text.toLowerCase();
    for (const key of Object.keys(BOT_RESPONSES)) {
        if (lower.includes(key)) return BOT_RESPONSES[key];
    }
    return BOT_RESPONSES.default;
}

const QUICK_CHIPS = ['Services', 'Contact', 'About us', 'Get started'];

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 22 } },
};

export default function ChatMascot() {
    const [mascotVisible, setMascotVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'init-1',                    // ✅ was: 1
            text: "👋 Hi! I'm Marky, your Marktale assistant. Ask me anything about our services, team or how to get in touch!",
            sender: 'bot',
            time: getTimeString(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isBotTyping, setIsBotTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const t = setTimeout(() => { if (!isDismissed) setMascotVisible(true); }, 3000);
        return () => clearTimeout(t);
    }, [isDismissed]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isBotTyping]);

    const handleDismiss = () => { setMascotVisible(false); setIsDismissed(true); };
    const handleMascotClick = () => { setChatOpen(true); setMascotVisible(false); };

    const sendText = (text: string) => {
        const trimmed = text.trim();
        if (!trimmed) return;

        // ✅ Fixed: crypto.randomUUID() instead of Date.now()
        const userMsg: Message = {
            id: crypto.randomUUID(),
            text: trimmed,
            sender: 'user',
            time: getTimeString(),
        };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsBotTyping(true);

        setTimeout(() => {
            const reply = getBotReply(trimmed);
            // ✅ Fixed: crypto.randomUUID() instead of Date.now() + 1
            const botMsg: Message = {
                id: crypto.randomUUID(),
                text: reply.text,
                sender: 'bot',
                time: getTimeString(),
                type: reply.type ?? 'text',
                cards: reply.type === 'cards' ? SERVICES_CARDS : undefined,
                contactInfo: reply.type === 'contact' ? CONTACT_INFO : undefined,
            };
            setMessages(prev => [...prev, botMsg]);
            setIsBotTyping(false);
        }, 1100);
    };

    const handleSend = () => sendText(inputValue);
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <>
            {/* ── Mascot bubble ── */}
            <AnimatePresence>
                {mascotVisible && !isDismissed && !chatOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0, x: 100 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0, x: 100 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="fixed bottom-44 right-6 z-40 cursor-pointer"
                        onClick={handleMascotClick}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="absolute bottom-full right-0 mb-4 bg-white rounded-lg shadow-xl p-4 max-w-[200px]"
                        >
                            <button
                                onClick={(e) => { e.stopPropagation(); handleDismiss(); }}
                                className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
                            >
                                <X className="w-3 h-3 text-gray-600" />
                            </button>
                            <p className="text-sm font-medium text-gray-800">
                                👋 Need help? Click here to chat with us!
                            </p>
                            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45 shadow" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative"
                        >
                            <motion.img
                                src="/mascot.png"
                                alt="Chat Mascot"
                                className="w-32 h-32 object-contain drop-shadow-2xl"
                                animate={{ rotate: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <motion.div
                                className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-30"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            />
                        </motion.div>

                        <motion.div
                            className="absolute top-0 right-0 text-2xl"
                            animate={{ scale: [0, 1, 0], rotate: [0, 180, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                        >✨</motion.div>
                        <motion.div
                            className="absolute bottom-0 left-0 text-xl"
                            animate={{ scale: [0, 1, 0], rotate: [0, -180, -360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        >⭐</motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Chat window ── */}
            <AnimatePresence>
                {chatOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.92 }}
                        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                        className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl shadow-2xl overflow-hidden flex flex-col bg-white"
                        style={{ height: '520px' }}
                    >
                        {/* ── Header ── */}
                        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 flex items-center gap-3 flex-shrink-0">
                            <div className="relative flex-shrink-0">
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-white/40"
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <img
                                    src="/mascot.png"
                                    alt="Marky"
                                    className="w-10 h-10 object-contain rounded-full bg-white/20 relative z-10"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-1.5">
                                    <p className="text-white font-semibold text-sm leading-tight">Marky</p>
                                    <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-green-400"
                                        animate={{ opacity: [1, 0.3, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    />
                                    <p className="text-blue-200 text-xs">Marktale Support · Online</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setChatOpen(false)}
                                className="text-white/70 hover:text-white transition-colors"
                            >
                                <ChevronDown className="w-5 h-5" />
                            </button>
                        </div>

                        {/* ── Messages ── */}
                        <div className="flex-1 overflow-y-auto bg-gray-50 px-3 py-3 space-y-3 min-h-0">
                            <AnimatePresence initial={false}>
                                {messages.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 14, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                                    >
                                        {/* User message */}
                                        {msg.sender === 'user' && (
                                            <div className="flex justify-end">
                                                <div className="max-w-[75%] px-3 py-2 rounded-2xl rounded-br-sm text-sm leading-snug shadow-sm bg-blue-600 text-white">
                                                    <p>{msg.text}</p>
                                                    <p className="text-[10px] mt-1 text-blue-200">{msg.time}</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Bot message */}
                                        {msg.sender === 'bot' && (
                                            <div className="flex justify-start gap-2">
                                                <img
                                                    src="/mascot.png"
                                                    alt="bot"
                                                    className="w-6 h-6 object-contain rounded-full self-end flex-shrink-0 bg-white border border-gray-200"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <div className="inline-block max-w-full px-3 py-2 rounded-2xl rounded-bl-sm text-sm leading-snug shadow-sm bg-white text-gray-800 border border-gray-100">
                                                        <p>{msg.text}</p>
                                                        <p className="text-[10px] mt-1 text-gray-400">{msg.time}</p>
                                                    </div>

                                                    {/* Service cards */}
                                                    {msg.type === 'cards' && msg.cards && (
                                                        <motion.div
                                                            variants={stagger}
                                                            initial="hidden"
                                                            animate="show"
                                                            className="mt-2 grid grid-cols-2 gap-2"
                                                        >
                                                            {msg.cards.map((card) => (
                                                                <motion.div
                                                                    key={card.title}
                                                                    variants={fadeUp}
                                                                    whileHover={{ scale: 1.03, y: -2 }}
                                                                    className="rounded-xl p-2.5 cursor-pointer transition-shadow hover:shadow-md"
                                                                    style={{ background: card.bg, border: `1px solid ${card.color}22` }}
                                                                    onClick={() => sendText(card.title)}
                                                                >
                                                                    <span className="text-xl">{card.icon}</span>
                                                                    <p className="text-xs font-semibold mt-1" style={{ color: card.color }}>{card.title}</p>
                                                                    <p className="text-[10px] text-gray-500 leading-tight mt-0.5">{card.desc}</p>
                                                                </motion.div>
                                                            ))}
                                                        </motion.div>
                                                    )}

                                                    {/* Contact info card */}
                                                    {msg.type === 'contact' && msg.contactInfo && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
                                                            className="mt-2 bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden"
                                                        >
                                                            {[
                                                                { icon: '📧', label: 'Email', value: msg.contactInfo.email, color: '#2563eb', href: `mailto:${msg.contactInfo.email}` },
                                                                { icon: '📞', label: 'Phone', value: msg.contactInfo.phone, color: '#16a34a', href: `tel:${msg.contactInfo.phone}` },
                                                                { icon: '🕐', label: 'Hours', value: msg.contactInfo.hours, color: '#ea580c', href: null },
                                                            ].map((item, i) => (
                                                                <motion.div
                                                                    key={item.label}
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: 0.15 * (i + 1) }}
                                                                    className={`flex items-center gap-2.5 px-3 py-2.5 ${i < 2 ? 'border-b border-gray-50' : ''}`}
                                                                >
                                                                    <span className="text-base flex-shrink-0">{item.icon}</span>
                                                                    <div className="flex-1 min-w-0">
                                                                        <p className="text-[10px] text-gray-400 leading-none">{item.label}</p>
                                                                        {item.href ? (
                                                                            <a
                                                                                href={item.href}
                                                                                className="text-xs font-medium mt-0.5 block truncate underline underline-offset-2"
                                                                                style={{ color: item.color }}
                                                                            >
                                                                                {item.value}
                                                                            </a>
                                                                        ) : (
                                                                            <p className="text-xs font-medium mt-0.5 truncate" style={{ color: item.color }}>{item.value}</p>
                                                                        )}
                                                                    </div>
                                                                </motion.div>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {/* Typing indicator */}
                            <AnimatePresence>
                                {isBotTyping && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        className="flex items-end gap-2"
                                    >
                                        <img
                                            src="/mascot.png"
                                            alt="bot"
                                            className="w-6 h-6 object-contain rounded-full flex-shrink-0 bg-white border border-gray-200"
                                        />
                                        <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex gap-1.5 items-center">
                                            {[0, 0.18, 0.36].map((delay, i) => (
                                                <motion.span
                                                    key={i}
                                                    className="w-2 h-2 bg-blue-400 rounded-full block"
                                                    animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
                                                    transition={{ duration: 0.65, repeat: Infinity, delay }}
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <div ref={messagesEndRef} />
                        </div>

                        {/* ── Quick reply chips ── */}
                        <div
                            className="bg-white px-3 pt-2 pb-1 flex gap-2 overflow-x-auto flex-shrink-0 border-t border-gray-100"
                            style={{ scrollbarWidth: 'none' }}
                        >
                            {QUICK_CHIPS.map((q, i) => (
                                <motion.button
                                    key={q}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.07 }}
                                    whileTap={{ scale: 0.93 }}
                                    onClick={() => sendText(q)}
                                    className="text-xs border border-blue-200 text-blue-600 rounded-full px-3 py-1 whitespace-nowrap hover:bg-blue-50 active:bg-blue-100 transition-colors flex-shrink-0 font-medium"
                                >
                                    {q}
                                </motion.button>
                            ))}
                        </div>

                        {/* ── Input row ── */}
                        <div className="bg-white px-3 py-2 flex items-center gap-2 flex-shrink-0 border-t border-gray-50">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type a message…"
                                className="flex-1 text-sm bg-gray-100 rounded-full px-4 py-2 outline-none text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 transition-all"
                            />
                            <motion.button
                                onClick={handleSend}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors flex-shrink-0 shadow-sm"
                            >
                                <Send className="w-4 h-4" />
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Minimised FAB ── */}
            <AnimatePresence>
                {!chatOpen && isDismissed && (
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setChatOpen(true)}
                        className="fixed bottom-6 right-24 z-40 bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 transition-colors"
                        aria-label="Open chat"
                    >
                        <MessageCircle className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
}