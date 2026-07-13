'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2, MapPin, Mail, Phone } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const SERVICE_CHIPS = [
  'Website Development',
  'App Development',
  'SEO',
  'Performance Marketing',
  'Branding and Design',
  'Lead Generation',
  'Social Media',
  'AI Automation',
];

const BUDGETS = ['Below 25K', '25K to 50K', '50K to 1L', '1L Plus'];
const TIMELINES = ['Urgent 1 Week', '1 Month', '2 to 3 Months', 'Just Exploring'];

// ── Env-driven contact details (with safe fallbacks so links never break) ───
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'aerovincetechnologies@gmail.com';
const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '+91-7489951514';
const CONTACT_PHONE_RAW = process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW ?? '917489951514';
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '917489951514';
const WHATSAPP_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
  'Hi Aerovince (Aerovince Private Limited), I want to discuss a project.';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', company: '', message: '',
  });
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const toggleChip = (chip: string) =>
    setSelectedChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          services: selectedChips.join(', '),
          budget,
          timeline,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || 'Something went wrong.');
      setSubmittedEmail(formData.email);
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', company: '', message: '' });
      setSelectedChips([]);
      setBudget('');
      setTimeline('');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  const inputClass = 'w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all';
  const labelClass = 'block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wider';

  return (
    <section id="contact-form" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 flex flex-col justify-start"
        >
          <span className="text-kestone-red font-bold tracking-widest uppercase text-xs mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-kestone-black mb-4 leading-tight">
            Start Your Growth Journey
          </h2>
          <p className="text-gray-500 leading-relaxed mb-10 font-body text-sm">
            Fill in the details. Our team will review your project and respond
            with a custom strategy within 24 hours guaranteed.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center shrink-0">
                <Mail size={20} className="text-gray-700" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Project Inquiry - Aerovince`}
                  className="text-sm font-semibold text-kestone-black hover:text-kestone-red transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center shrink-0">
                <Phone size={20} className="text-gray-700" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Call Us</p>
                <a
                  href={`tel:+${CONTACT_PHONE_RAW}`}
                  className="text-sm font-semibold text-kestone-black hover:text-kestone-red transition-colors"
                >
                  {CONTACT_PHONE}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-gray-700" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Visit Us</p>
                <p className="text-sm font-semibold text-kestone-black leading-relaxed">
                  Aerovince Private Limited, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-lg">🕐</span>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Work Hours</p>
                <p className="text-sm font-semibold text-kestone-black">Mon-Sat, 10AM-7PM IST</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white font-bold rounded-full hover:bg-green-600 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 bg-neutral-50 border border-gray-100 rounded-3xl p-7 md:p-10"
        >
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 gap-5 text-center"
            >
              <CheckCircle size={60} className="text-green-500" />
              <h3 className="text-2xl font-heading font-black text-kestone-black">Message Sent!</h3>
              <p className="text-gray-500 max-w-sm text-sm leading-relaxed font-body">
                Thanks for reaching out! We will reply to{' '}
                <span className="font-bold text-kestone-black">{submittedEmail}</span>{' '}
                within 24 hours. Check your inbox.
              </p>
              <p className="text-xs text-gray-400">
                Did not get it? Check spam or email us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-kestone-black font-semibold underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-2 px-7 py-3 bg-kestone-black text-white rounded-xl text-sm font-bold hover:bg-kestone-red transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input type="text" name="name" required value={formData.name}
                    onChange={handleChange} className={inputClass} placeholder="Rahul Sharma" />
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <input type="tel" name="phone" required value={formData.phone}
                    onChange={handleChange} className={inputClass} placeholder="+91 98765 00000" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Email</label>
                  <input type="email" name="email" required value={formData.email}
                    onChange={handleChange} className={inputClass} placeholder="rahul@company.com" />
                </div>
                <div>
                  <label className={labelClass}>Company or Brand</label>
                  <input type="text" name="company" value={formData.company}
                    onChange={handleChange} className={inputClass} placeholder="Your Brand Pvt Ltd" />
                </div>
              </div>

              <div>
                <label className={labelClass}>Services You Need</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {SERVICE_CHIPS.map((chip) => (
                    <button key={chip} type="button" onClick={() => toggleChip(chip)}
                      className={"px-4 py-2 rounded-full border text-xs font-bold transition-all " + (selectedChips.includes(chip) ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white text-gray-500 hover:border-gray-400')}>
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClass}>Monthly Budget</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {BUDGETS.map((b) => (
                    <button key={b} type="button" onClick={() => setBudget(b)}
                      className={"px-4 py-2 rounded-xl border text-xs font-bold transition-all " + (budget === b ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-200 bg-white text-gray-500 hover:border-gray-400')}>
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClass}>Project Timeline</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {TIMELINES.map((t) => (
                    <button key={t} type="button" onClick={() => setTimeline(t)}
                      className={"px-4 py-2 rounded-xl border text-xs font-bold transition-all " + (timeline === t ? 'border-cyan-500 bg-cyan-50 text-cyan-700' : 'border-gray-200 bg-white text-gray-500 hover:border-gray-400')}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClass}>Tell Us About Your Project</label>
                <textarea name="message" rows={4} required value={formData.message}
                  onChange={handleChange} className={inputClass}
                  placeholder="Describe your goals, challenges, and what you want to achieve..." />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  <AlertCircle size={18} className="shrink-0" /> {errorMsg}
                </div>
              )}

              <button type="submit" disabled={status === 'loading'}
                className="w-full py-4 rounded-xl font-black text-white text-base flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)' }}>
                {status === 'loading' ? (
                  <><Loader2 size={18} className="animate-spin" /> Sending...</>
                ) : (
                  <>Send Message - Get Free Audit <Send size={16} /></>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                Your information is 100% secure. No spam, ever.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}