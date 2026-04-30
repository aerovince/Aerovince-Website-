"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Rocket,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Shield,
  Star,
  Zap,
} from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Startup Building Plan",
    icon: Rocket,
    tagline: "Best for new startups & founders",
    price: "25,000",
    secondMonthPrice: "15,000",
    features: [
      "Website + Domain + Hosting",
      "Brand setup",
      "Social media setup & optimization",
      "Content (graphics, reels, articles)",
      "SEO basics",
      "Monthly report",
    ],
    cta: "Book Free Consultation",
    ctaLink: "/contact",
    highlighted: false,
  },
  {
    name: "Growth Plan",
    icon: TrendingUp,
    tagline: "For businesses ready to scale",
    price: "50,000",
    secondMonthPrice: "35,000",
    features: [
      "Includes everything in Startup Plan",
      "E-commerce product listing & optimization",
      "Paid ads setup",
      "Advanced growth strategy",
      "Funnel & retargeting",
    ],
    cta: "Get Started Now",
    ctaLink: "/contact",
    highlighted: true,
    badge: "MOST POPULAR",
  },
];

export default function PricingSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden" id="pricing">
      {/* Abstract Background Elements - Matching WorkGallery */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header - Matching WorkGallery style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide">
              SIMPLE, TRANSPARENT PRICING
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.15] tracking-tight">
            Choose your
            <span className="relative ml-4 inline-block">
              <span className="absolute -inset-1 bg-blue-600 blur-2xl opacity-20" />
              <span className="relative text-blue-600">growth path.</span>
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            No hidden fees. Start with what you need and scale as you grow. All
            plans include dedicated support.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
             

              <div
                className={`relative rounded-2xl overflow-hidden bg-white border shadow-sm hover:shadow-2xl transition-all duration-500 ${
                  plan.highlighted
                    ? "border-blue-200 shadow-xl"
                    : "border-gray-100"
                }`}
              >
                {/* Badge for Growth Plan */}
                {plan.badge && (
                  <div className="absolute top-3 right-8 z-20">
                    <div className="relative">
                      <div className="absolute inset-0  rounded-full blur-md opacity-75" />
                      <div className="relative bg-blue-500 text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {plan.badge}
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Header with Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-3 rounded-xl ${
                        plan.highlighted
                          ? "bg-blue-600 shadow-lg shadow-blue-600/25"
                          : "bg-blue-100"
                      }`}
                    >
                      <plan.icon
                        size={24}
                        className={
                          plan.highlighted ? "text-white" : "text-blue-600"
                        }
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {plan.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-black">
                        ₹{plan.price}
                      </span>
                      <span className="text-gray-500">/ 1st Month</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                      <span
                        className={`text-sm font-medium px-3 py-1 rounded-full ${
                          plan.highlighted
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        Then ₹{plan.secondMonthPrice}/month
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-lg flex items-center justify-center ${
                            plan.highlighted ? "bg-blue-600" : "bg-blue-100"
                          }`}
                        >
                          <Check
                            size={12}
                            className={
                              plan.highlighted ? "text-white" : "text-blue-600"
                            }
                            strokeWidth={3}
                          />
                        </div>
                        <span
                          className={`text-sm ${plan.highlighted ? "text-gray-700" : "text-gray-600"}`}
                        >
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href={plan.ctaLink}
                    className={`group/btn relative w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold transition-all duration-300 overflow-hidden ${
                      plan.highlighted
                        ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25"
                        : "bg-black text-white hover:bg-black/90 hover:shadow-xl"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight
                      size={18}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Link>

                  {/* Fine print */}
                  <p className="text-xs text-center text-gray-400 mt-4">
                    No long-term contracts • Cancel anytime
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner - Matching WorkGallery CTA style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="relative overflow-hidden rounded-3xl bg-black p-12 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20 mb-6">
                <Rocket className="w-4 h-4 text-blue-400" />
                <span className="text-white/90 text-sm font-medium">
                  Not sure which plan fits?
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's talk about your goals
              </h3>
              <p className="text-gray-300 max-w-xl mx-auto mb-8">
                Book a free consultation and we'll help you choose the right
                plan for your business.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 transition-all duration-300"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
