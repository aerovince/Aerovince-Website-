'use client';

import React from 'react';
import { motion } from 'framer-motion';
// import { ExternalLink } from 'lucide-react';

export default function MeetingCard() {
  return (
    <section className="bg-neutral-50 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-kestone-red text-xs font-bold uppercase tracking-widest mb-2">
          Free Strategy Call
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="font-heading font-black text-3xl text-kestone-black mb-2">
          Prefer to Talk First?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="text-gray-400 text-sm mb-8">
          Skip the form — book a 30-minute call directly with our growth strategists.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.18 }} whileHover={{ y: -2 }}
          className="bg-white border border-gray-100 rounded-2xl p-7 flex flex-col sm:flex-row gap-6 items-start shadow-sm hover:shadow-md transition-shadow">

          <div className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center text-2xl"
            style={{ background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)' }}>
            📅
          </div>

          <div className="flex-1">
            <h3 className="font-heading font-black text-lg text-kestone-black mb-2">
              Book a Free Strategy Call
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4 font-body">
               We&apos;ll audit your current marketing setup and show you exactly what&apos;s holding
  your growth back — no fluff, no sales pitch. Just a real, actionable plan.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {['30 Minutes', 'Google Meet', '100% Free', 'No Obligation'].map((tag) => (
                <span key={tag} className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1 text-xs font-bold text-gray-500">
                  {tag}
                </span>
              ))}
            </div>
         <div          className="inline-flex items-center gap-2 px-6 py-3 bg-kestone-black text-white rounded-xl text-sm font-bold hover:bg-kestone-red transition-colors">Book on Calendly
</div>    
            {/* <a href="https://calendly.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-kestone-black text-white rounded-xl text-sm font-bold hover:bg-kestone-red transition-colors">
              <ExternalLink size={15} />
               Book on Calendly
            </a> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}