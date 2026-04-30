'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone, Sparkles, ArrowRight, Send } from 'lucide-react';
import { services } from '@/lib/servicesData';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Facebook, href: "https://www.facebook.com/marktaleworld", label: "Facebook" },
        { icon: Twitter, href: "https://x.com/MarktaleAi", label: "Twitter" },
        { icon: Linkedin, href: "https://www.linkedin.com/company/marktaleworld/posts/?feedView=all", label: "LinkedIn" },
        { icon: Instagram, href: "https://www.instagram.com/marktaleworld/", label: "Instagram" }
    ];

    return (
      <footer
        className="relative bg-black text-white overflow-hidden"
        id="contact"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="relative block w-40 h-12 mb-6">
                <Image
                  src="/images/image.png"
                  alt="MarkTale"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 160px, 160px"
                />
              </Link>
              
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                MarkTale – Powered by AI
                <br />A Unit of MarkTale World Private Limited
              </p>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="w-9 h-9 bg-white/10 flex items-center justify-center rounded-full hover:bg-blue-600 transition-all duration-300 group"
                  >
                    <social.icon
                      size={16}
                      className="text-gray-400 group-hover:text-white transition-colors"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-white flex items-center gap-2">
                <Sparkles size={16} className="text-blue-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Events & Awards", href: "/awards" },
                  { name: "Projects", href: "/projects" },
                  { name: "Blogs", href: "/blogs" },
                  { name: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-1 group"
                    >
                      <ArrowRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-all"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-white flex items-center gap-2">
                <Sparkles size={16} className="text-blue-400" />
                Services
              </h4>
              <ul className="space-y-3">
                {services.slice(0, 7).map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="text-blue-400 hover:text-white transition-colors text-sm font-semibold inline-flex items-center gap-1 group"
                  >
                    View All Services
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info + Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-white flex items-center gap-2">
                <Sparkles size={16} className="text-blue-400" />
                Contact Us
              </h4>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3 group">
                  <MapPin
                    size={18}
                    className="text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-gray-400 text-sm">
                    Plot no. 141, Sec. 14, Dwarka, New Delhi – 110078
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Phone
                    size={18}
                    className="text-blue-400 group-hover:scale-110 transition-transform"
                  />
                  <a
                    href="tel:+918527664228"
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    +91-8527-664-228
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <Mail
                    size={18}
                    className="text-blue-400 group-hover:scale-110 transition-transform"
                  />
                  <a
                    href="mailto:info@marktaleworld.com"
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    info@marktaleworld.com
                  </a>
                </li>
              </ul>

              {/* Newsletter Signup */}
              <div className="mt-6">
                <p className="text-xs text-gray-500 mb-3">
                  Subscribe to our newsletter
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
                  />
                  <button className="px-3 py-2 bg-blue-600 rounded-r-lg hover:bg-blue-700 transition-colors">
                    <Send size={16} className="text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-gray-500 text-xs">
              © {currentYear} MarkTale World Private Limited. All Rights
              Reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors text-xs"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors text-xs"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors text-xs"
              >
                Cookie Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </footer>
    );
}