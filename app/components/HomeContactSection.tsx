"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { services } from "@/lib/servicesData";

export default function HomeContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Marketing as a Service (MaaS)",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Service Interest:* ${formData.service}
*Message:* ${formData.message || "No message provided"}
        `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "918527664228";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: Phone, text: "+91 85276 64228", href: "tel:+918527664228" },
    {
      icon: Mail,
      text: "hello@marktale.com",
      href: "mailto:hello@marktale.com",
    },
    { icon: MapPin, text: "Dwarka, New Delhi", href: "#" },
  ];

  return (
    <section className="relative py-28 bg-white overflow-hidden" id="contact">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">
            Ready to{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 blur-2xl opacity-30" />
              <span className="relative bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Start Your Project?
              </span>
            </span>
          </h2>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Whether you need a full digital transformation or a specific
            marketing campaign, our team is ready to help you scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1 space-y-4"
          >
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.href}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <info.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{info.text}</span>
              </motion.a>
            ))}

            {/* Trust Badge */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-black">
                  Response within 24 hours
                </span>
              </div>
              <p className="text-xs text-gray-500">
                We typically respond within a few hours
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name and Phone - Side by Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 text-base ${
                        focusedField === "name"
                          ? "border-blue-600 bg-white"
                          : "border-gray-100 hover:border-gray-200"
                      }`}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 text-base ${
                        focusedField === "phone"
                          ? "border-blue-600 bg-white"
                          : "border-gray-100 hover:border-gray-200"
                      }`}
                      placeholder="+91..."
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 text-base ${
                      focusedField === "email"
                        ? "border-blue-600 bg-white"
                        : "border-gray-100 hover:border-gray-200"
                    }`}
                    placeholder="john@company.com"
                  />
                </div>

                {/* Service Interest */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-blue-600 transition-colors text-gray-700 text-base cursor-pointer"
                  >
                    <option>Marketing as a Service (MaaS)</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option>Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 resize-none ${
                      focusedField === "message"
                        ? "border-blue-600 bg-white"
                        : "border-gray-100 hover:border-gray-200"
                    }`}
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-600/25 transition-all duration-300 flex items-center justify-center text-lg gap-2 group"
                >
                  Send Message
                  <Send
                    size={18}
                    className="group-hover:transition-transform"
                  />
                </motion.button>

                <p className="text-xs text-center text-gray-400 mt-4">
                  By submitting, you agree to our privacy policy. We'll never
                  share your details.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
