'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Manifesto() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full flex items-center justify-center bg-kestone-black text-white overflow-hidden px-6 pt-44"
        >
            {/* Background Grid */}
            <div
                className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage:
                        'radial-gradient(#333 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <motion.div
                className="relative z-10 max-w-6xl mx-auto text-center"
                style={{ y, opacity }}
            >
                {/* Heading */}
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-heading font-black leading-tight tracking-tighter mb-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    Aero
                    <span className="text-kestone-red">vince</span>
                    <br />
                    <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold block mt-6">
                        Elevating Brands. Accelerating Growth.
                    </span>
                </motion.h1>

                {/* Sub Heading */}
                <motion.div
                    className="overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-400">
                        Helping Businesses{' '}
                        <span className="text-white">Scale Online</span>
                    </h2>
                </motion.div>

                {/* Description */}
                <motion.div
                    className="mt-12 text-lg md:text-xl text-gray-400 max-w-4xl mx-auto font-body leading-relaxed space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <p>
                        Aerovince is a premium digital marketing and branding
                        agency dedicated to helping startups, local businesses,
                        and enterprises grow through high-performance websites,
                        SEO, social media marketing, paid advertising, branding,
                        and data-driven digital strategies.
                    </p>

                    <p className="text-white font-medium">
                        We don't believe in vanity metrics. Every strategy,
                        campaign, and website we build is focused on generating
                        qualified leads, increasing conversions, strengthening
                        your brand, and delivering measurable business growth.
                        By combining creativity, technology, and performance
                        marketing, we help businesses build a powerful online
                        presence that drives long-term success.
                    </p>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    <div className="h-24 w-1 bg-kestone-red mx-auto animate-bounce rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}