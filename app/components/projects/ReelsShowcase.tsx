// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Play, Eye, Heart } from 'lucide-react';

// const reels = [
//     {
//         id: 1,
//         title: 'Delhi059 Behind the Scenes',
//         brand: 'Delhi059',
//         thumbnail: 'https://www.instagram.com/p/DQzEyrTDAXW/media/?size=l',
//         instagramUrl: 'https://www.instagram.com/p/DQzEyrTDAXW/',
//         views: '125K',
//         likes: '8.2K',
//         duration: '0:45',
//         description: 'A day in the life at Canada\'s favorite restaurant'
//     },
//     {
//         id: 2,
//         title: 'Local Ride Driver Stories',
//         brand: 'Local Ride',
//         thumbnail: 'https://www.instagram.com/p/DSG7FV_jVdI/media/?size=l',
//         instagramUrl: 'https://www.instagram.com/p/DSG7FV_jVdI/',
//         views: '89K',
//         likes: '5.4K',
//         duration: '0:32',
//         description: 'Real drivers, real stories, zero commission'
//     },
//     {
//         id: 4,
//         title: 'Dee Cee Jewelry Showcase',
//         brand: 'Dee Cee Accessories',
//         thumbnail: 'https://www.instagram.com/p/DIYuVCWz2aO/media/?size=l',
//         instagramUrl: 'https://www.instagram.com/p/DIYuVCWz2aO/',
//         views: '92K',
//         likes: '6.8K',
//         duration: '0:38',
//         description: 'Elegance meets affordability'
//     },
//     {
//         id: 5,
//         title: 'Biryani Bar Cooking Magic',
//         brand: 'Biryani Bar',
//         thumbnail: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80',
//         instagramUrl: undefined,
//         views: '178K',
//         likes: '14.2K',
//         duration: '0:52',
//         description: 'The secret to perfect biryani'
//     },
//     {
//         id: 6,
//         title: 'CabTale Safety First',
//         brand: 'CabTale',
//         thumbnail: 'https://www.instagram.com/p/DNH5BkfBSeQ/media/?size=l',
//         instagramUrl: 'https://www.instagram.com/p/DNH5BkfBSeQ/',
//         views: '45K',
//         likes: '3.2K',
//         duration: '0:30',
//         description: 'Your safety is our priority'
//     },
// ];

// const featuredReel = reels[0];

// export default function ReelsShowcase() {
//     return (
//         <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
//             <div className="container mx-auto px-6 max-w-7xl">
//                 {/* Section Header */}
//                 <motion.div
//                     className="text-center mb-16"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                 >
//                     <span className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-sm uppercase tracking-widest rounded-full mb-4">
//                         Video Content
//                     </span>
//                     <h2 className="text-4xl md:text-6xl font-heading font-bold text-kestone-black mb-6">
//                         Reels That Resonate
//                     </h2>
//                     <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
//                         Short-form content that captures attention, tells stories, and drives massive engagement
//                         across social platforms.
//                     </p>
//                 </motion.div>

//                 {/* Featured Reel */}
//                 <motion.div
//                     className="mb-16"
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                 >
//                     <div className="bg-gradient-to-br from-kestone-black to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
//                         <div className="grid md:grid-cols-2 gap-0">
//                             {/* Video Preview */}
//                             <div
//                                 className="relative aspect-[9/16] md:aspect-auto group cursor-pointer"
//                                 onClick={() => {
//                                     if (featuredReel.instagramUrl) {
//                                         window.open(featuredReel.instagramUrl, '_blank', 'noopener,noreferrer');
//                                     }
//                                 }}
//                             >
//                                 <Image
//                                     src={featuredReel.thumbnail}
//                                     alt={featuredReel.title}
//                                     fill
//                                     className="object-cover"
//                                 />
//                                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
//                                     <motion.div
//                                         className="w-20 h-20 bg-kestone-red rounded-full flex items-center justify-center"
//                                         whileHover={{ scale: 1.1 }}
//                                         whileTap={{ scale: 0.9 }}
//                                     >
//                                         <Play size={32} className="text-white ml-1" fill="white" />
//                                     </motion.div>
//                                 </div>
//                                 <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold uppercase rounded-full">
//                                     Featured
//                                 </div>
//                                 <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-sm font-bold rounded-full">
//                                     {featuredReel.duration}
//                                 </div>
//                             </div>

//                             {/* Info */}
//                             <div className="p-8 md:p-12 flex flex-col justify-center">
//                                 <span className="inline-block px-4 py-2 bg-kestone-red/20 text-kestone-red font-bold text-sm uppercase tracking-wide rounded-full mb-4 w-fit">
//                                     {featuredReel.brand}
//                                 </span>
//                                 <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
//                                     {featuredReel.title}
//                                 </h3>
//                                 <p className="text-gray-300 font-body text-lg mb-6">
//                                     {featuredReel.description}
//                                 </p>
//                                 <div className="flex items-center gap-6 text-white mb-8">
//                                     <div className="flex items-center gap-2">
//                                         <Eye size={20} className="text-kestone-red" />
//                                         <span className="font-bold">{featuredReel.views}</span>
//                                         <span className="text-gray-400 text-sm">views</span>
//                                     </div>
//                                     <div className="flex items-center gap-2">
//                                         <Heart size={20} className="text-kestone-red" />
//                                         <span className="font-bold">{featuredReel.likes}</span>
//                                         <span className="text-gray-400 text-sm">likes</span>
//                                     </div>
//                                 </div>
//                                 <button
//                                     onClick={() => {
//                                         if (featuredReel.instagramUrl) {
//                                             window.open(featuredReel.instagramUrl, '_blank', 'noopener,noreferrer');
//                                         }
//                                     }}
//                                     className="px-8 py-4 bg-kestone-red text-white font-heading font-bold rounded-full hover:bg-kestone-red/90 transition-colors w-fit"
//                                 >
//                                     Watch on Instagram
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>

//                 {/* Reels Grid */}
//                 {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"> */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//                     {reels.slice(1).map((reel, idx) => (
//                         <motion.div
//                             key={reel.id}
//                             className="group relative aspect-[9/16] rounded-xl overflow-hidden bg-gray-100 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
//                             initial={{ opacity: 0, scale: 0.9 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.4, delay: idx * 0.05 }}
//                             onClick={() => {
//                                 if (reel.instagramUrl) {
//                                     window.open(reel.instagramUrl, '_blank', 'noopener,noreferrer');
//                                 }
//                             }}
//                             whileHover={{ scale: 1.02 }}
//                         >
//                             <Image
//                                 src={reel.thumbnail}
//                                 alt={reel.title}
//                                 fill
//                                 className="object-cover transition-transform duration-500 group-hover:scale-110"
//                             />

//                             {/* Gradient Overlay */}
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
//                                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                                     <h4 className="text-white font-heading font-bold text-sm mb-1 line-clamp-2">
//                                         {reel.title}
//                                     </h4>
//                                     <p className="text-gray-300 text-xs mb-2">{reel.brand}</p>
//                                     <div className="flex items-center justify-between text-white text-xs">
//                                         <span className="flex items-center gap-1">
//                                             <Eye size={12} />
//                                             {reel.views}
//                                         </span>
//                                         <span>{reel.duration}</span>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Play Button Overlay */}
//                             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                 <div className="w-14 h-14 bg-kestone-red/90 rounded-full flex items-center justify-center">
//                                     <Play size={24} className="text-white ml-1" fill="white" />
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

















'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';

// ─── Types & Data ───────────────────────────────────────────────────────────

interface Reel {
    id: number;
    title: string;
    tag: string;
    videoUrl: string;
    poster: string;
}

// Cloudinary auto-generates a frame thumbnail when you swap the video
// extension for .jpg — used as the <video poster> so cards never show blank.
const toPoster = (url: string) => url.replace(/\.(mp4|mov)$/i, '.jpg');

const reels: Reel[] = [
    {
        id: 1,
        title: 'Behind the Lens',
        tag: 'Videography & Editing',
        videoUrl: 'https://res.cloudinary.com/ddsqnibd5/video/upload/v1783113043/IMG_1874_uoedl8.mp4',
        poster: toPoster('https://res.cloudinary.com/ddsqnibd5/video/upload/v1783113043/IMG_1874_uoedl8.mp4'),
    },
    {
        id: 2,
        title: 'On-Site Shoot Day',
        tag: 'Production',
        videoUrl: 'https://res.cloudinary.com/ddsqnibd5/video/upload/v1783111857/IMG_3280_j2hajf.mov',
        poster: toPoster('https://res.cloudinary.com/ddsqnibd5/video/upload/v1783111857/IMG_3280_j2hajf.mov'),
    },
    {
        id: 3,
        title: 'Cinematic Cut',
        tag: 'Post-Production',
        videoUrl: 'https://res.cloudinary.com/ddsqnibd5/video/upload/v1783112437/IMG_2093_wvsmng.mp4',
        poster: toPoster('https://res.cloudinary.com/ddsqnibd5/video/upload/v1783112437/IMG_2093_wvsmng.mp4'),
    },
    {
        id: 4,
        title: 'Story in Motion',
        tag: 'Creative Direction',
        videoUrl: 'https://res.cloudinary.com/ddsqnibd5/video/upload/v1783107260/IMG_3884_l6ne0a.mov',
        poster: toPoster('https://res.cloudinary.com/ddsqnibd5/video/upload/v1783107260/IMG_3884_l6ne0a.mov'),
    },
    {
        id: 5,
        title: 'Final Frame',
        tag: 'Videography & Editing',
        videoUrl: 'https://res.cloudinary.com/ddsqnibd5/video/upload/v1783109145/IMG_0364_sqrcg5.mp4',
        poster: toPoster('https://res.cloudinary.com/ddsqnibd5/video/upload/v1783109145/IMG_0364_sqrcg5.mp4'),
    },
];

const formatDuration = (secs: number) => {
    if (!isFinite(secs)) return '';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
};

// ─── Reel Card ──────────────────────────────────────────────────────────────

function ReelCard({
    reel,
    index,
    spotlight,
    onOpen,
}: {
    reel: Reel;
    index: number;
    spotlight?: boolean;
    onOpen: () => void;
}) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [duration, setDuration] = useState('');
    const [hasError, setHasError] = useState(false);

    // Auto-run: play while the card is in view, pause when it scrolls off.
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            },
            { threshold: 0.4 }
        );
        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    return (
        <motion.div
            className={`group relative rounded-2xl overflow-hidden bg-gray-900 cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300 ${
                spotlight ? 'aspect-[4/5] sm:col-span-2 sm:row-span-2' : 'aspect-[9/16]'
            }`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            onClick={onOpen}
        >
            {!hasError ? (
                <video
                    ref={videoRef}
                    src={reel.videoUrl}
                    poster={reel.poster}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onLoadedMetadata={(e) => setDuration(formatDuration(e.currentTarget.duration))}
                    onError={() => setHasError(true)}
                />
            ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white/40 text-xs">
                    Preview unavailable
                </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                REEL
            </div>

            {duration && (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold">
                    {duration}
                </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className={`text-white font-heading font-bold leading-snug mb-1 ${spotlight ? 'text-lg' : 'text-sm'}`}>
                    {reel.title}
                </p>
                <p className="text-white/60 text-[11px] font-body">{reel.tag}</p>
            </div>

            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                <motion.div
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300"
                >
                    <Play size={18} className="text-white ml-0.5" fill="white" />
                </motion.div>
            </div>
        </motion.div>
    );
}

// ─── Full-screen Reel Viewer ────────────────────────────────────────────────

function ReelModal({
    activeIndex,
    onClose,
    onNavigate,
}: {
    activeIndex: number;
    onClose: () => void;
    onNavigate: (dir: 1 | -1) => void;
}) {
    const reel = reels[activeIndex];
    const videoRef = useRef<HTMLVideoElement>(null);
    const [muted, setMuted] = useState(false);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNavigate(1);
            if (e.key === 'ArrowLeft') onNavigate(-1);
        };
        window.addEventListener('keydown', handler);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handler);
            document.body.style.overflow = '';
        };
    }, [onClose, onNavigate]);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.currentTime = 0;
            video.play().catch(() => {});
        }
    }, [activeIndex]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
        >
            <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
                <X size={20} />
            </button>

            <button
                onClick={(e) => { e.stopPropagation(); onNavigate(-1); }}
                aria-label="Previous reel"
                className="hidden sm:flex absolute left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 items-center justify-center text-white transition-colors z-10"
            >
                <ChevronLeft size={22} />
            </button>
            <button
                onClick={(e) => { e.stopPropagation(); onNavigate(1); }}
                aria-label="Next reel"
                className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 items-center justify-center text-white transition-colors z-10"
            >
                <ChevronRight size={22} />
            </button>

            <motion.div
                key={reel.id}
                className="relative w-full max-w-[420px] aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-2xl"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
            >
                <video
                    ref={videoRef}
                    src={reel.videoUrl}
                    poster={reel.poster}
                    muted={muted}
                    loop
                    playsInline
                    autoPlay
                    controls
                    className="w-full h-full object-cover"
                />

                <button
                    onClick={() => setMuted((m) => !m)}
                    aria-label={muted ? 'Unmute' : 'Mute'}
                    className="absolute bottom-20 right-4 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white"
                >
                    {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>

                <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent pointer-events-none">
                    <p className="text-white font-heading font-bold text-sm">{reel.title}</p>
                    <p className="text-white/60 text-xs font-body">{reel.tag}</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ─── Section ────────────────────────────────────────────────────────────────

export default function ReelsShowcase() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleNavigate = useCallback((dir: 1 | -1) => {
        setActiveIndex((prev) => (prev === null ? prev : (prev + dir + reels.length) % reels.length));
    }, []);

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-sm uppercase tracking-widest rounded-full mb-4">
                        Video Content
                    </span>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-kestone-black mb-6">
                        Reels That Resonate
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                        A look at our recent videography and editing work — shot, cut, and delivered in-house.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(0,1fr)]">
                    {reels.map((reel, i) => (
                        <ReelCard
                            key={reel.id}
                            reel={reel}
                            index={i}
                            spotlight={i === 0}
                            onOpen={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {activeIndex !== null && (
                    <ReelModal
                        activeIndex={activeIndex}
                        onClose={() => setActiveIndex(null)}
                        onNavigate={handleNavigate}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}