// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Download, Share2, ZoomIn, ExternalLink } from 'lucide-react';

// const posterCategories = ['All', 'Social Media', 'Print', 'Digital Ads', 'Branding', 'Events'];

// const posters = [
//     {
//         id: 1,
//         title: 'Delhi059 Grand Opening',
//         brand: 'Delhi059',
//         category: 'Social Media',
//         image: 'https://www.instagram.com/p/DBjCxUbuKge/media/?size=l',
//         description: 'Launch campaign that generated 10K+ impressions',
//         link: 'https://www.instagram.com/p/DBjCxUbuKge/'
//     },
//     {
//         id: 2,
//         title: 'Local Ride App Launch',
//         brand: 'Local Ride',
//         category: 'Digital Ads',
//         image: 'https://www.instagram.com/p/DSGIHDZgcQm/media/?size=l',
//         description: 'Zero commission driver campaign',
//         link: 'https://www.instagram.com/p/DSGIHDZgcQm/'
//     },
//     {
//         id: 3,
//         title: 'BG Foods Festive Special',
//         brand: 'BG Foods',
//         category: 'Social Media',
//         image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
//         description: 'Diwali campaign with 50K+ reach',
//         link: undefined
//     },
//     {
//         id: 4,
//         title: 'Promac Luxury Homes',
//         brand: 'Promac Advisory',
//         category: 'Print',
//         image: '/creatives/promaccreatives.png',
//         description: 'Premium real estate brochure design',
//         link: undefined
//     },
//     {
//         id: 5,
//         title: 'Astro Nexus Zodiac Series',
//         brand: 'Astro Nexus',
//         category: 'Branding',
//         image: 'https://www.instagram.com/p/DTSxqv6iNh5/media/?size=l',
//         description: 'Complete brand identity redesign',
//         link: 'https://www.instagram.com/p/DTSxqv6iNh5/'
//     },
//     {
//         id: 6,
//         title: 'Dee Cee Jewelry Collection',
//         brand: 'Dee Cee Accessories',
//         category: 'Social Media',
//         image: 'https://www.instagram.com/p/DHIHRiZSdrU/media/?size=l',
//         description: 'Product photography campaign',
//         link: 'https://www.instagram.com/p/DHIHRiZSdrU/'
//     },
//     {
//         id: 7,
//         title: 'Biryani Bar Menu Launch',
//         brand: 'Biryani Bar',
//         category: 'Print',
//         image: '/creatives/biryanibar.jpg',
//         description: 'Premium menu design and photography',
//         link: undefined
//     },
//     {
//         id: 8,
//         title: 'CabTale Safety Campaign',
//         brand: 'CabTale',
//         category: 'Digital Ads',
//         image: 'https://www.instagram.com/p/DOLPnqODw42/media/?size=l',
//         description: 'Safety-first messaging campaign',
//         link: 'https://www.instagram.com/p/DOLPnqODw42/'
//     },
//     {
//         id: 9,
//         title: 'BG Foundation Charity Drive',
//         brand: 'BG Foundation',
//         category: 'Events',
//         image: 'https://www.instagram.com/p/DRelzQxjF9d/media/?size=l',
//         description: 'Community outreach event branding',
//         link: 'https://www.instagram.com/p/DRelzQxjF9d/?img_index=1'
//     },
//     {
//         id: 10,
//         title: 'Read Abroad Study Guide',
//         brand: 'Read Abroad',
//         category: 'Branding',
//         image: 'https://www.instagram.com/p/DR1YULWEegw/media/?size=l',
//         description: 'Educational branding materials',
//         link: 'https://www.instagram.com/p/DR1YULWEegw/'
//     },
//     {
//         id: 11,
//         title: 'Writing Rodgers Workshop',
//         brand: 'Writing Rodgers',
//         category: 'Events',
//         image: '/creatives/writingrodgerscreative.jpg',
//         description: 'Creative writing workshop promotion',
//         link: undefined
//     },
//     {
//         id: 12,
//         title: 'TripTale Travel Stories',
//         brand: 'TripTale',
//         category: 'Social Media',
//         image: 'https://www.instagram.com/p/DOdLasDCRCO/media/?size=l',
//         description: 'Engaging travel content series',
//         link: 'https://www.instagram.com/p/DOdLasDCRCO/'
//     }
// ];

// export default function BestPostersGallery() {
//     const [selectedCategory, setSelectedCategory] = useState('All');
//     const [lightboxImage, setLightboxImage] = useState<typeof posters[0] | null>(null);

//     const filteredPosters = selectedCategory === 'All'
//         ? posters
//         : posters.filter(poster => poster.category === selectedCategory);

//     return (
//         <section className="py-24 bg-white">
//             <div className="container mx-auto px-6 max-w-7xl">
//                 {/* Section Header */}
//                 <motion.div
//                     className="text-center mb-16"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                 >
//                     <span className="inline-block px-6 py-2 bg-kestone-red/10 text-kestone-red font-bold text-sm uppercase tracking-widest rounded-full mb-4">
//                         Creative Excellence
//                     </span>
//                     <h2 className="text-4xl md:text-6xl font-heading font-bold text-kestone-black mb-6">
//                         Our Best Posters
//                     </h2>
//                     <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
//                         A curated collection of our most impactful designs—each poster tells a story,
//                         drives engagement, and delivers results.
//                     </p>
//                 </motion.div>

//                 {/* Category Filters */}
//                 <motion.div
//                     className="flex flex-wrap justify-center gap-4 mb-12"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                 >
//                     {posterCategories.map((category) => (
//                         <button
//                             key={category}
//                             onClick={() => setSelectedCategory(category)}
//                             className={`px-6 py-3 rounded-full font-heading font-bold text-sm uppercase tracking-wide transition-all duration-300 ${selectedCategory === category
//                                 ? 'bg-kestone-red text-white shadow-lg scale-105'
//                                 : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                                 }`}
//                         >
//                             {category}
//                         </button>
//                     ))}
//                 </motion.div>

//                 {/* Posters Grid - Masonry Style */}
//                 <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
//                     <AnimatePresence mode="popLayout">
//                         {filteredPosters.map((poster, idx) => (
//                             <motion.div
//                                 key={poster.id}
//                                 layout
//                                 initial={{ opacity: 0, scale: 0.9 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 exit={{ opacity: 0, scale: 0.9 }}
//                                 transition={{ duration: 0.4, delay: idx * 0.05 }}
//                                 className="break-inside-avoid mb-6"
//                             >
//                                 <div
//                                     className="group relative overflow-hidden rounded-xl bg-gray-100 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
//                                     onClick={() => {
//                                         if (poster.link) {
//                                             window.open(poster.link, '_blank', 'noopener,noreferrer');
//                                         } else {
//                                             setLightboxImage(poster);
//                                         }
//                                     }}
//                                 >
//                                     <div className="relative aspect-[3/4]">
//                                         <Image
//                                             src={poster.image}
//                                             alt={poster.title}
//                                             fill
//                                             className="object-cover transition-transform duration-500 group-hover:scale-110"
//                                         />
//                                     </div>

//                                     {/* Overlay */}
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                         <div className="absolute inset-0 flex flex-col justify-end p-6">
//                                             <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                                                 <span className="inline-block px-3 py-1 bg-kestone-red text-white text-xs font-bold uppercase rounded-full mb-2">
//                                                     {poster.category}
//                                                 </span>
//                                                 <h3 className="text-white font-heading font-bold text-xl mb-2">
//                                                     {poster.title}
//                                                 </h3>
//                                                 <p className="text-gray-300 text-sm font-body mb-3">
//                                                     {poster.description}
//                                                 </p>
//                                                 <div className="flex items-center gap-2 text-white text-xs">
//                                                     {poster.link ? (
//                                                         <>
//                                                             <ExternalLink size={16} />
//                                                             <span>Click to view on Instagram</span>
//                                                         </>
//                                                     ) : (
//                                                         <>
//                                                             <ZoomIn size={16} />
//                                                             <span>Click to view full size</span>
//                                                         </>
//                                                     )}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Brand Badge */}
//                                     <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
//                                         <span className="text-kestone-black font-heading font-bold text-xs">
//                                             {poster.brand}
//                                         </span>
//                                     </div>

//                                     {/* Instagram Badge */}
//                                     {poster.link && (
//                                         <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center gap-1">
//                                             <ExternalLink size={12} />
//                                             <span className="text-xs font-bold">Instagram</span>
//                                         </div>
//                                     )}
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </AnimatePresence>
//                 </div>

//                 {/* Lightbox Modal */}
//                 <AnimatePresence>
//                     {lightboxImage && (
//                         <motion.div
//                             className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             onClick={() => setLightboxImage(null)}
//                         >
//                             <motion.div
//                                 className="relative max-w-5xl w-full"
//                                 initial={{ scale: 0.8, opacity: 0 }}
//                                 animate={{ scale: 1, opacity: 1 }}
//                                 exit={{ scale: 0.8, opacity: 0 }}
//                                 onClick={(e) => e.stopPropagation()}
//                             >
//                                 {/* Close Button */}
//                                 <button
//                                     onClick={() => setLightboxImage(null)}
//                                     className="absolute -top-12 right-0 p-2 text-white hover:text-kestone-red transition-colors"
//                                 >
//                                     <X size={32} />
//                                 </button>

//                                 {/* Image */}
//                                 <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
//                                     <Image
//                                         src={lightboxImage.image}
//                                         alt={lightboxImage.title}
//                                         fill
//                                         className="object-contain"
//                                     />
//                                 </div>

//                                 {/* Info */}
//                                 <div className="mt-6 text-center">
//                                     <h3 className="text-2xl font-heading font-bold text-white mb-2">
//                                         {lightboxImage.title}
//                                     </h3>
//                                     <p className="text-gray-400 font-body mb-4">
//                                         {lightboxImage.description}
//                                     </p>
//                                     <div className="flex justify-center gap-4">
//                                         {lightboxImage.link ? (
//                                             <Link href={lightboxImage.link} target="_blank" rel="noopener noreferrer">
//                                                 <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 transition-opacity">
//                                                     <ExternalLink size={18} />
//                                                     View on Instagram
//                                                 </button>
//                                             </Link>
//                                         ) : (
//                                             <>
//                                                 <button className="flex items-center gap-2 px-6 py-3 bg-kestone-red text-white rounded-full hover:bg-kestone-red/90 transition-colors">
//                                                     <Download size={18} />
//                                                     Download
//                                                 </button>
//                                                 <button className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
//                                                     <Share2 size={18} />
//                                                     Share
//                                                 </button>
//                                             </>
//                                         )}
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </div>
//         </section>
//     );
// }



















'use client';

import React, { useState, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { X, ExternalLink, Sparkles, Layers, ArrowRight } from 'lucide-react';

// ─── Data ───────────────────────────────────────────────────────────────────
// NOTE: titles/brands/categories below are placeholders — I can't see the
// actual Instagram post content from the link alone. Swap these for the
// real details whenever you get a chance.

interface Poster {
    id: number;
    title: string;
    brand: string;
    category: string;
    image: string;
    link: string;
}

const RAW_LINKS = [
    'https://www.instagram.com/p/DZe1D09gEr_/?img_index=1',
    'https://www.instagram.com/p/DYl0c0Gge_1/',
    'https://www.instagram.com/p/DaP4s5xkQMR/?img_index=1',
    'https://www.instagram.com/p/DVxYNGCk19P/',
    'https://www.instagram.com/p/DSl92zoEgwL/?img_index=1',
    'https://www.instagram.com/p/CbKFLb_uP7Q/',
    'https://www.instagram.com/p/DZJyVFck26S/?img_index=1',
    'https://www.instagram.com/p/DaNkUZME3Au/',
    'https://www.instagram.com/p/DY6lqoqjOQm/?img_index=1',
];

const toMediaUrl = (link: string) => {
    const base = link.split('?')[0].replace(/\/$/, '');
    return `${base}/media/?size=l`;
};

const posters: Poster[] = [
    { id: 1, title: 'Campaign Spotlight', brand: 'Client Project', category: 'Branding', image: toMediaUrl(RAW_LINKS[0]), link: RAW_LINKS[0] },
    { id: 2, title: 'Social Feature Post', brand: 'Client Project', category: 'Social Media', image: toMediaUrl(RAW_LINKS[1]), link: RAW_LINKS[1] },
    { id: 3, title: 'Ad Creative Set', brand: 'Client Project', category: 'Digital Ads', image: toMediaUrl(RAW_LINKS[2]), link: RAW_LINKS[2] },
    { id: 4, title: 'Print Series', brand: 'Client Project', category: 'Print', image: toMediaUrl(RAW_LINKS[3]), link: RAW_LINKS[3] },
    { id: 5, title: 'Event Announcement', brand: 'Client Project', category: 'Events', image: toMediaUrl(RAW_LINKS[4]), link: RAW_LINKS[4] },
    { id: 6, title: 'Feed Highlight', brand: 'Client Project', category: 'Social Media', image: toMediaUrl(RAW_LINKS[5]), link: RAW_LINKS[5] },
    { id: 7, title: 'Identity Refresh', brand: 'Client Project', category: 'Branding', image: toMediaUrl(RAW_LINKS[6]), link: RAW_LINKS[6] },
    { id: 8, title: 'Performance Creative', brand: 'Client Project', category: 'Digital Ads', image: toMediaUrl(RAW_LINKS[7]), link: RAW_LINKS[7] },
    { id: 9, title: 'Story Series', brand: 'Client Project', category: 'Social Media', image: toMediaUrl(RAW_LINKS[8]), link: RAW_LINKS[8] },
];

const CATEGORIES = ['All', 'Social Media', 'Digital Ads', 'Branding', 'Print', 'Events'];

const CATEGORY_ACCENT: Record<string, string> = {
    'Social Media': 'from-pink-500 to-rose-400',
    'Digital Ads': 'from-amber-500 to-orange-400',
    Branding: 'from-violet-500 to-purple-400',
    Print: 'from-emerald-500 to-teal-400',
    Events: 'from-blue-500 to-cyan-400',
};

// ─── Category switcher (matches hero's ServiceSwitcher pattern) ────────────

function CategorySwitcher({
    active,
    onSelect,
}: {
    active: string;
    onSelect: (c: string) => void;
}) {
    return (
        <div className="flex items-center gap-2 overflow-x-auto sm:overflow-visible sm:flex-wrap sm:justify-center pb-1 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0">
            {CATEGORIES.map((cat) => {
                const isActive = cat === active;
                return (
                    <button
                        key={cat}
                        onClick={() => onSelect(cat)}
                        className="relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors shrink-0"
                        style={{ color: isActive ? 'white' : '#6b7280' }}
                    >
                        {isActive && (
                            <motion.span
                                layoutId="poster-cat-pill"
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 shadow-md shadow-blue-500/25"
                                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10">{cat}</span>
                    </button>
                );
            })}
        </div>
    );
}

// ─── 3D Tilt Poster Card ────────────────────────────────────────────────────

function PosterCard({
    poster,
    index,
    onOpen,
}: {
    poster: Poster;
    index: number;
    onOpen: () => void;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);
    const glowX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
    const glowY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const rect = ref.current?.getBoundingClientRect();
            if (!rect) return;
            mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
            mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
        },
        [mouseX, mouseY]
    );

    const handleMouseLeave = useCallback(() => {
        mouseX.set(0);
        mouseY.set(0);
    }, [mouseX, mouseY]);

    const accent = CATEGORY_ACCENT[poster.category] ?? 'from-blue-500 to-violet-500';

    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 1000 }}
            className="group"
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={onOpen}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[3/4] rounded-2xl cursor-pointer"
            >
                {/* Ambient glow shadow beneath the card — gives the 3D lift real weight */}
                <div
                    className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500`}
                    style={{ transform: 'translateZ(-40px)' }}
                />

                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100 border border-white/60 shadow-lg shadow-gray-900/10 group-hover:shadow-2xl group-hover:shadow-blue-500/10 transition-shadow duration-500">
                    <Image
                        src={poster.image}
                        alt={poster.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                        style={{ transform: 'translateZ(20px) scale(1.02)' }}
                    />

                    {/* Cursor-following light sweep */}
                    <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                            background: useTransform(
                                [glowX, glowY],
                                ([gx, gy]) => `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.35), transparent 60%)`
                            ),
                        }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category badge */}
                    <div
                        className={`absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 sm:px-3 py-1 rounded-full bg-gradient-to-r ${accent} text-white text-[10px] font-bold uppercase tracking-wide shadow-md`}
                        style={{ transform: 'translateZ(30px)' }}
                    >
                        {poster.category}
                    </div>

                    {/* Instagram badge */}
                    <div
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ transform: 'translateZ(30px)' }}
                    >
                        <ExternalLink size={12} className="text-gray-700" />
                    </div>

                    {/* Info panel — slides up on hover */}
                    <div
                        className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ transform: 'translateZ(30px)' }}
                    >
                        <p className="text-white/60 text-[10px] font-semibold uppercase tracking-widest mb-1">
                            {poster.brand}
                        </p>
                        <h3 className="text-white font-bold text-base sm:text-lg leading-snug mb-2">
                            {poster.title}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 text-white/80 text-xs font-medium">
                            View on Instagram
                            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                        </span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ─── Lightbox ────────────────────────────────────────────────────────────────

function PosterLightbox({ poster, onClose }: { poster: Poster; onClose: () => void }) {
    const accent = CATEGORY_ACCENT[poster.category] ?? 'from-blue-500 to-violet-500';

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/80 backdrop-blur-md p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
        >
            <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors z-10"
            >
                <X size={20} />
            </button>

            <motion.div
                initial={{ scale: 0.92, opacity: 0, y: 12 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.92, opacity: 0, y: 12 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl grid grid-cols-1 sm:grid-cols-[1fr_1.1fr] rounded-3xl overflow-hidden bg-white/95 backdrop-blur-xl border border-white/60 shadow-2xl"
            >
                <div className="relative aspect-[3/4] sm:aspect-auto sm:h-auto bg-gray-100">
                    <Image src={poster.image} alt={poster.title} fill className="object-cover" />
                </div>

                <div className="p-6 sm:p-10 flex flex-col justify-center">
                    <span className={`inline-flex items-center gap-1.5 w-fit px-3 py-1 rounded-full bg-gradient-to-r ${accent} text-white text-[11px] font-bold uppercase tracking-wide mb-4`}>
                        <Sparkles size={11} />
                        {poster.category}
                    </span>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                        {poster.brand}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-6">
                        {poster.title}
                    </h3>

                    <Link href={poster.link} target="_blank" rel="noopener noreferrer">
                        <motion.button
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.97 }}
                            className="relative inline-flex items-center gap-2 bg-gray-900 text-white font-semibold text-sm px-6 py-3.5 rounded-xl overflow-hidden group w-fit shadow-lg shadow-gray-900/20"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View on Instagram
                                <ExternalLink size={15} className="group-hover:translate-x-0.5 transition-transform" />
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>
                    </Link>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ─── Section ────────────────────────────────────────────────────────────────

export default function BestPostersGallery() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [lightboxPoster, setLightboxPoster] = useState<Poster | null>(null);

    const filtered = useMemo(
        () => (activeCategory === 'All' ? posters : posters.filter((p) => p.category === activeCategory)),
        [activeCategory]
    );

    return (
        <section className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
            {/* Ambient background blobs — matches hero */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-blue-200/25 via-violet-200/15 to-transparent blur-3xl" />
                <div className="absolute -bottom-32 -right-32 w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-cyan-200/20 via-blue-100/15 to-transparent blur-3xl" />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
                        <Layers size={12} />
                        Creative Portfolio
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.08] mb-5">
                        Posters That{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                            Perform
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        A curated collection of designs across social, print, and digital — each one built to
                        stop the scroll and drive results.
                    </p>
                </motion.div>

                {/* Category switcher */}
                <motion.div
                    className="mb-10 sm:mb-12"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <CategorySwitcher active={activeCategory} onSelect={setActiveCategory} />
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((poster, i) => (
                            <PosterCard
                                key={poster.id}
                                poster={poster}
                                index={i}
                                onOpen={() => setLightboxPoster(poster)}
                            />
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            <AnimatePresence>
                {lightboxPoster && (
                    <PosterLightbox poster={lightboxPoster} onClose={() => setLightboxPoster(null)} />
                )}
            </AnimatePresence>
        </section>
    );
}