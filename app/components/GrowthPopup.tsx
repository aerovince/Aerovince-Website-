"use client";

// components/GrowthPopup.tsx
// Simple popup that appears after 8s (or on exit intent) and redirects to /grow

import { useEffect, useState, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

const LS_KEY = "marktale_growth_popup_seen";

export default function GrowthPopup() {
  const [show, setShow] = useState(false);
  const hasShownRef = useRef(false);

  const trigger = useCallback(() => {
    if (hasShownRef.current || localStorage.getItem(LS_KEY)) return;
    hasShownRef.current = true;
    localStorage.setItem(LS_KEY, "true");
    setShow(true);
  }, []);

  // Timed — 8 seconds
  useEffect(() => {
    const t = setTimeout(trigger, 8_000);
    return () => clearTimeout(t);
  }, [trigger]);

  // Exit intent — mouse leaves top of viewport
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, [trigger]);

  const close = useCallback(() => setShow(false), []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="growth-popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[300] flex items-end sm:items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 relative"
          >
            {/* Close */}
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-3.5 right-3.5 w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Icon */}
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>

            {/* Copy */}
            <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600 mb-1">
              Marktale World
            </p>
            <h3 className="text-xl font-black text-gray-900 mb-2 leading-snug">
              Want to grow your brand?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              We&apos;ve scaled 30+ brands across India, Canada, and the USA —
              social media, apps, websites, and performance marketing under one
              roof.
            </p>

            {/* CTA */}
            <Link
              href="/grow"
              onClick={close}
              className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors mb-2.5"
            >
              See how we can help <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={close}
              className="w-full text-xs text-gray-400 hover:text-gray-500 py-1"
            >
              Maybe later
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}