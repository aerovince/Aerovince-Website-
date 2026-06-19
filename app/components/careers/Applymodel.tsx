"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Loader2 } from "lucide-react";

interface ApplyModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
}

export default function ApplyModal({ isOpen, onClose, jobTitle }: ApplyModalProps) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        portfolioUrl: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("submitting");
        setErrorMsg("");

        try {
            const res = await fetch("/api/applications", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, role: jobTitle }),
            });
            const data = await res.json();

            if (!data.success) {
                throw new Error(data.error || "Something went wrong");
            }

            setStatus("success");
            setForm({ name: "", email: "", phone: "", portfolioUrl: "", message: "" });
        } catch (err) {
            setStatus("error");
            setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
        }
    }

    function handleClose() {
        setStatus("idle");
        setErrorMsg("");
        onClose();
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={handleClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="bg-black px-6 py-5 flex items-center justify-between">
                            <div>
                                <p className="text-xs text-blue-400 font-semibold uppercase tracking-wide mb-1">
                                    Apply for
                                </p>
                                <h3 className="text-white text-lg font-bold leading-tight">{jobTitle}</h3>
                            </div>
                            <button
                                onClick={handleClose}
                                aria-label="Close"
                                className="text-white/70 hover:text-white transition-colors"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6">
                            {status === "success" ? (
                                <div className="flex flex-col items-center text-center py-6">
                                    <CheckCircle2 className="text-blue-600 mb-4" size={48} />
                                    <h4 className="text-xl font-bold text-black mb-2">Application Sent!</h4>
                                    <p className="text-gray-500 text-sm mb-6">
                                        Thanks for applying. Our team will review your profile and reach out within 24 hours.
                                    </p>
                                    <button
                                        onClick={handleClose}
                                        className="px-6 py-2.5 bg-black text-white font-semibold rounded-full hover:bg-blue-600 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            Full Name *
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Jane Doe"
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                                Email *
                                            </label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="jane@email.com"
                                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                                Phone *
                                            </label>
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="+91 98765 43210"
                                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            Portfolio / LinkedIn / Resume Link
                                        </label>
                                        <input
                                            type="url"
                                            name="portfolioUrl"
                                            value={form.portfolioUrl}
                                            onChange={handleChange}
                                            placeholder="https://..."
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            rows={3}
                                            placeholder="Tell us why you're a great fit..."
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm resize-none"
                                        />
                                    </div>

                                    {status === "error" && (
                                        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                                            {errorMsg}
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {status === "submitting" ? (
                                            <>
                                                <Loader2 size={18} className="animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                Submit Application
                                                <Send size={16} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}