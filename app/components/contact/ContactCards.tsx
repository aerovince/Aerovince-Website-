'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@marktaleworld.com';

const cards = [
  {
    icon: '✉️',
    label: 'Email',
    value: CONTACT_EMAIL,
    color: 'rgba(139,92,246,0.15)',
    textColor: '#A78BFA',
    delay: 0,
    href: 'mailto:' + CONTACT_EMAIL + '?subject=Project Inquiry - MarkTale World',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'New Delhi, India',
    color: 'rgba(6,182,212,0.15)',
    textColor: '#22D3EE',
    delay: 0.08,
    href: 'https://maps.google.com/?q=Dwarka+Sector+14+New+Delhi',
  },
  {
    icon: '⚡',
    label: 'Response Time',
    value: 'Within 24 Hours',
    color: 'rgba(251,191,36,0.15)',
    textColor: '#FCD34D',
    delay: 0.16,
    href: null,
  },
  {
    icon: '🕐',
    label: 'Work Hours',
    value: 'Mon-Sat, 10AM-7PM IST',
    color: 'rgba(16,185,129,0.15)',
    textColor: '#34D399',
    delay: 0.24,
    href: null,
  },
];

export default function ContactCards() {
  return (
    <section className="bg-black pb-16 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card) => {
        return card.href ? (
  <motion.a
    key={card.label}
    href={card.href}
    target={card.href.startsWith('http') ? '_blank' : undefined}
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: card.delay }}
    whileHover={{ y: -4 }}
    className="block bg-[#0A0A0A] border border-white/[0.07] rounded-2xl p-4 text-center cursor-pointer transition-shadow hover:shadow-[0_16px_40px_rgba(59,130,246,0.1)] no-underline"
  >
    <div className="w-12 h-12 rounded-[13px] flex items-center justify-center text-xl mx-auto mb-3"
      style={{ background: card.color, color: card.textColor }}>
      {card.icon}
    </div>
    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">{card.label}</p>
    <p className="text-xs font-semibold text-slate-300 leading-snug break-words">{card.value}</p>
  </motion.a>
) : (
  <motion.div
    key={card.label}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: card.delay }}
    whileHover={{ y: -4 }}
    className="block bg-[#0A0A0A] border border-white/[0.07] rounded-2xl p-6 text-center transition-shadow hover:shadow-[0_16px_40px_rgba(59,130,246,0.1)]"
  >
    <div className="w-12 h-12 rounded-[13px] flex items-center justify-center text-xl mx-auto mb-3"
      style={{ background: card.color, color: card.textColor }}>
      {card.icon}
    </div>
    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">{card.label}</p>
    <p className="text-xs font-semibold text-slate-300 leading-snug break-words">{card.value}</p>
  </motion.div>
);
        })}
      </div>
    </section>
  );
}