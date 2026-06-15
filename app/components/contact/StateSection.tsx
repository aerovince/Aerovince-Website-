'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { num: '30+', label: 'Brands Successfully Built' },
  { num: '10+', label: 'Years of Experience' },
  { num: '500K+', label: 'Lives Impacted' },
  { num: '24 Hrs', label: 'Guaranteed Response' },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 px-6 text-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F2460 0%, #1E1060 50%, #0A1628 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(139,92,246,0.12) 0%, transparent 60%)' }} />

      <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 relative">
        Our Track Record
      </motion.p>

      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ delay: 0.08 }}
        className="font-heading font-black text-3xl text-white mb-12 relative">
        Numbers That Speak for Themselves
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto relative">
        {stats.map((s, i) => (
          <motion.div key={s.label}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-white/5 border border-white/[0.08] rounded-2xl py-8 px-4">
            <p className="text-4xl font-black mb-2"
              style={{ background: 'linear-gradient(90deg,#60A5FA,#A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {s.num}
            </p>
            <p className="text-sm text-white/55 font-medium leading-snug">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}