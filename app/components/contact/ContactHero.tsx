'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactHero() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-black text-white pt-15 pb-20 px-6 overflow-hidden text-center">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[420px] h-[420px] rounded-full -top-28 -left-20"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], y: [0, 20, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute w-[380px] h-[380px] rounded-full -top-16 -right-16"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
          className="absolute w-[300px] h-[300px] rounded-full bottom-0 left-1/2 -translate-x-1/2"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 rounded-full px-5 py-1.5 mb-7 relative"
      >
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">
          AI-Powered Marketing Agency
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-heading font-black text-5xl md:text-7xl leading-[1.08] tracking-tight mb-5 relative"
      >
Let&apos;s Build Something
        <span style={{
          background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 50%, #06B6D4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Extraordinary
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-gray-400 text-lg max-w-xl mx-auto mb-9 leading-relaxed relative font-body"
      >
        Tell us about your project. Our growth experts will craft a custom
        AI-powered strategy to scale your brand — fast.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap gap-3 justify-center mb-10 relative"
      >
        {[
          { icon: '🚀', label: '24 Hrs Response' },
          { icon: '🌍', label: 'Global Clients' },
          { icon: '🤖', label: 'AI-Powered Solutions' },
        ].map((p) => (
          <span key={p.label} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300 font-medium">
            <span>{p.icon}</span> {p.label}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center relative"
      >
        <button
          onClick={scrollToForm}
          className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(59,130,246,0.35)]"
          style={{ background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)' }}
        >
          📅 Schedule Free Consultation
        </button>
      </motion.div>
    </section>
  );
}