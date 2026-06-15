// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Plus } from 'lucide-react';

// const faqs = [
//     {
//         q: "How fast can you onboard a new client?",
//         a: "We move at the speed of your business. Typically, we can complete discovery and kick off execution within 5-7 business days."
//     },
//     {
//         q: "Do you work with pre-seed startups?",
//         a: "Yes. In fact, we specialize in them. Our 'MaaS for Startups' package is designed specifically to give early-stage founders a full marketing stack without the C-suite costs."
//     },
//     {
//         q: "What is your pricing model?",
//         a: "We offer both retainer-based models (MaaS) and project-based pricing. We believe in transparency, so there are no hidden fees or surprise billings."
//     },
//     {
//         q: "Can you handle international projects?",
//         a: "Absolutely. We are already building global brands in Canada, USA, and India. Our team is accustomed to working across time zones and cultural nuances."
//     }
// ];

// export default function FAQSection() {
//     return (
//         <section className="py-24 bg-neutral-50">
//             <div className="container mx-auto px-6 max-w-4xl">
//                 <div className="text-center mb-16">
//                     <span className="text-kestone-red font-bold tracking-widest uppercase text-sm mb-4 block">Common Questions</span>
//                     <h2 className="text-4xl font-heading font-bold text-kestone-black">What to Expect</h2>
//                 </div>

//                 <div className="space-y-6">
//                     {faqs.map((item, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, scale: 0.95 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: index * 0.1 }}
//                             className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 group hover:border-kestone-black transition-colors"
//                         >
//                             <h3 className="text-xl font-bold mb-4 flex items-center justify-between cursor-pointer">
//                                 {item.q}
//                                 <Plus size={20} className="text-gray-400 group-hover:text-kestone-red transition-colors" />
//                             </h3>
//                             <p className="text-gray-600 leading-relaxed">
//                                 {item.a}
//                             </p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How quickly do you respond to inquiries?',
    a: 'We respond to all contact form submissions within 24 hours on business days. For urgent requirements, WhatsApp us directly — our team is available 9 AM to 9 PM IST, Monday to Saturday.',
  },
  {
    q: 'How fast can you onboard a new client?',
    a: 'We move at the speed of your business. Typically, we complete discovery and kick off execution within 5–7 business days.',
  },
  {
    q: 'Do you work with pre-seed startups?',
    a: "Yes — in fact, we specialize in them. Our 'MaaS for Startups' package gives early-stage founders a full marketing stack without the C-suite costs.",
  },
  {
    q: 'What is your pricing model?',
    a: 'We offer retainer-based models (MaaS) and project-based pricing. No hidden fees, no surprise billings. Engagements typically start from ₹25,000/month.',
  },
  {
    q: 'Can you handle international projects?',
    a: 'Absolutely. We serve clients across India, UAE, USA, UK, and Southeast Asia. Our team is fully remote-friendly with regular video call updates across time zones.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 px-6 border-t border-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-kestone-red font-bold tracking-widest uppercase text-xs mb-3 block">
          Common Questions
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="font-heading font-black text-3xl text-kestone-black mb-10">
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className={`border rounded-2xl overflow-hidden transition-colors ${
                openIndex === i ? 'border-kestone-black' : 'border-gray-100'
              }`}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-neutral-50 transition-colors">
                <span className="font-heading font-bold text-base text-kestone-black pr-4">
                  {faq.q}
                </span>
                <span className="shrink-0 w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400">
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}>
                    <p className="px-6 pb-6 text-gray-500 text-sm leading-relaxed font-body">
                      {faq.a}
                    </p>
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