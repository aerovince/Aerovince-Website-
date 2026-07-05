

// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Send,
//   Sparkles,
//   CheckCircle,
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   MessageCircle,
//   Users,
//   Zap,
// } from "lucide-react";
// import { services } from "@/lib/servicesData";

// export default function HomeContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     service: "Marketing as a Service (MaaS)",
//     message: "",
//   });

//   const [focusedField, setFocusedField] = useState<string | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<
//     "idle" | "success" | "error"
//   >("idle");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus("idle");
//     setErrorMessage("");

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok || !data.success) {
//         throw new Error(data.error || "Something went wrong. Please try again.");
//       }

//       setSubmitStatus("success");
//       setFormData({
//         name: "",
//         phone: "",
//         email: "",
//         service: "Marketing as a Service (MaaS)",
//         message: "",
//       });
//     } catch (err: any) {
//       setSubmitStatus("error");
//       setErrorMessage(err.message || "Something went wrong. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const contactInfo = [
//     // {
//     //   icon: Phone,
//     //   text: "+91 85878 70707",
//     //   href: "tel:+9185878 70707",
//     //   color: "blue",
//     // },
//     {
//       icon: Mail,
//       // text: "hello@marktaleworld.com",
//       // href: "mailto:hello@marktaleworld.com",
//       text: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
// href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`,
//       color: "yellow",
//     },
//     { icon: MapPin, text: "Dwarka, New Delhi Bharat", href: "#", color: "black" },
//   ];

//   const trustStats = [
//     { value: "24/7", label: "Support", icon: Clock, color: "blue" },
//     { value: "30min", label: "Response Time", icon: Zap, color: "yellow" },
//     { value: "100%", label: "Satisfaction", icon: Users, color: "black" },
//   ];

//   return (
//     <section
//       className="relative py-24 lg:py-32 bg-white overflow-hidden"
//       id="contact"
//     >
//       {/* Background Effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/30 to-transparent" />
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-100/30 rounded-full blur-3xl" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50/50 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-6 max-w-6xl relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6"
//           >
//             <Sparkles className="w-4 h-4 text-blue-600" />
//             <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase">
//               GET IN TOUCH
//             </span>
//           </motion.div>

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-[1.2] tracking-tight">
//             Ready to{" "}
//             <span className="text-blue-600 block mt-2">
//               Start Your Project?
//             </span>
//           </h2>

//           <p className="text-gray-500 text-base max-w-2xl mx-auto">
//             Whether you need a full digital transformation or a specific
//             marketing campaign, our team is ready to help you scale.
//           </p>
//         </motion.div>

//         {/* Trust Stats Row */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.1, duration: 0.5 }}
//           className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
//         >
//           {trustStats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ y: -3 }}
//               className="text-center p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all"
//             >
//               <div
//                 className={`w-8 h-8 rounded-lg ${
//                   stat.color === "blue"
//                     ? "bg-blue-100"
//                     : stat.color === "yellow"
//                     ? "bg-yellow-100"
//                     : "bg-gray-100"
//                 } flex items-center justify-center mx-auto mb-2`}
//               >
//                 <stat.icon
//                   className={`w-4 h-4 ${
//                     stat.color === "blue"
//                       ? "text-blue-600"
//                       : stat.color === "yellow"
//                       ? "text-yellow-600"
//                       : "text-black"
//                   }`}
//                 />
//               </div>
//               <p className="text-lg font-bold text-black">{stat.value}</p>
//               <p className="text-[10px] text-gray-500">{stat.label}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Contact Info Cards */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="lg:col-span-1 space-y-4"
//           >
//             {contactInfo.map((info, idx) => (
//               <motion.a
//                 key={idx}
//                 href={info.href}
//                 whileHover={{ x: 5, scale: 1.02 }}
//                 className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group cursor-pointer ${
//                   info.color === "blue"
//                     ? "bg-blue-50 border-blue-200 hover:bg-blue-100"
//                     : info.color === "yellow"
//                     ? "bg-yellow-50 border-yellow-200 hover:bg-yellow-100"
//                     : "bg-gray-50 border-gray-200 hover:bg-gray-100"
//                 }`}
//               >
//                 <div
//                   className={`w-10 h-10 rounded-xl ${
//                     info.color === "blue"
//                       ? "bg-blue-600"
//                       : info.color === "yellow"
//                       ? "bg-yellow-500"
//                       : "bg-black"
//                   } flex items-center justify-center group-hover:scale-110 transition-transform`}
//                 >
//                   <info.icon className="w-4 h-4 text-white" />
//                 </div>
//                 <span
//                   className={`font-medium ${
//                     info.color === "blue"
//                       ? "text-blue-700"
//                       : info.color === "yellow"
//                       ? "text-yellow-700"
//                       : "text-gray-700"
//                   }`}
//                 >
//                   {info.text}
//                 </span>
//               </motion.a>
//             ))}

//             {/* Response Time Badge */}
//             <motion.div
//               whileHover={{ y: -3 }}
//               className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl text-center border border-gray-100"
//             >
//               <div className="flex items-center justify-center gap-2 mb-2">
//                 <CheckCircle className="w-4 h-4 text-green-500" />
//                 <span className="text-sm font-semibold text-black">
//                   Response within 24 hours
//                 </span>
//               </div>
//               <p className="text-xs text-gray-500">
//                 We typically respond within a few hours
//               </p>
//             </motion.div>

//             {/* Trust Indicator */}
//             <div className="flex items-center justify-center gap-2 pt-2">
//               <div className="flex -space-x-2">
//                 {["AJ", "KS", "VR"].map((letter, i) => (
//                   <div
//                     key={i}
//                     className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[8px] font-bold text-gray-700"
//                   >
//                     {letter}
//                   </div>
//                 ))}
//               </div>
//               <span className="text-[10px] text-gray-400">
//                 150+ happy clients
//               </span>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="lg:col-span-2"
//           >
//             <div className="bg-white rounded-2xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-8">
//               {/* Success State */}
//               {submitStatus === "success" ? (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="flex flex-col items-center justify-center py-16 text-center gap-4"
//                 >
//                   <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
//                     <CheckCircle className="w-8 h-8 text-green-600" />
//                   </div>
//                   <h3 className="text-xl font-bold text-black">
//                     Message Sent!
//                   </h3>
//                   <p className="text-gray-500 text-sm max-w-xs">
//                     Thanks for reaching out. We've saved your enquiry and sent
//                     you a confirmation email. Our team will get back to you
//                     within 24 hours.
//                   </p>
//                   <button
//                     onClick={() => setSubmitStatus("idle")}
//                     className="mt-2 text-blue-600 text-sm font-semibold underline underline-offset-2"
//                   >
//                     Send another message
//                   </button>
//                 </motion.div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   {/* Name and Phone - Side by Side */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                     <div>
//                       <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
//                         Full Name *
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         required
//                         value={formData.name}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField("name")}
//                         onBlur={() => setFocusedField(null)}
//                         className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 text-base ${
//                           focusedField === "name"
//                             ? "border-blue-600 bg-white shadow-sm"
//                             : "border-gray-200 hover:border-gray-300"
//                         }`}
//                         placeholder="John Doe"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
//                         Phone Number *
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         required
//                         value={formData.phone}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField("phone")}
//                         onBlur={() => setFocusedField(null)}
//                         className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 text-base ${
//                           focusedField === "phone"
//                             ? "border-blue-600 bg-white shadow-sm"
//                             : "border-gray-200 hover:border-gray-300"
//                         }`}
//                         placeholder="+91..."
//                       />
//                     </div>
//                   </div>

//                   {/* Email */}
//                   <div>
//                     <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField("email")}
//                       onBlur={() => setFocusedField(null)}
//                       className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 text-base ${
//                         focusedField === "email"
//                           ? "border-blue-600 bg-white shadow-sm"
//                           : "border-gray-200 hover:border-gray-300"
//                       }`}
//                       placeholder="john@company.com"
//                     />
//                   </div>

//                   {/* Service Interest */}
//                   <div>
//                     <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
//                       Service Interest
//                     </label>
//                     <select
//                       name="service"
//                       value={formData.service}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition-colors text-gray-700 text-base cursor-pointer hover:border-gray-300"
//                     >
//                       <option>Marketing as a Service (MaaS)</option>
//                       {services.map((service) => (
//                         <option key={service.id} value={service.title}>
//                           {service.title}
//                         </option>
//                       ))}
//                       <option>Other</option>
//                     </select>
//                   </div>

//                   {/* Message */}
//                   <div>
//                     <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
//                       Message
//                     </label>
//                     <textarea
//                       name="message"
//                       rows={4}
//                       value={formData.message}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField("message")}
//                       onBlur={() => setFocusedField(null)}
//                       className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 resize-none ${
//                         focusedField === "message"
//                           ? "border-blue-600 bg-white shadow-sm"
//                           : "border-gray-200 hover:border-gray-300"
//                       }`}
//                       placeholder="Tell us about your project..."
//                     />
//                   </div>

//                   {/* Error Message */}
//                   {submitStatus === "error" && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -8 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="flex items-start gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm"
//                     >
//                       <span className="font-semibold shrink-0">Error:</span>
//                       <span>{errorMessage}</span>
//                     </motion.div>
//                   )}

//                   {/* Submit Button */}
//                   <motion.button
//                     type="submit"
//                     disabled={isSubmitting}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     className={`w-full py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 ${
//                       isSubmitting ? "opacity-70 cursor-not-allowed" : ""
//                     }`}
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         Send Message
//                         <Send size={18} />
//                       </>
//                     )}
//                   </motion.button>

//                   <p className="text-xs text-center text-gray-400 mt-4">
//                     By submitting, you agree to our privacy policy. We'll never
//                     share your details.
//                   </p>
//                 </form>
//               )}
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom CTA Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="mt-16"
//         >
//           <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 md:p-8 text-center shadow-2xl">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

//             <div className="relative z-10">
//               <MessageCircle className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
//               <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
//                 Prefer WhatsApp? Chat with us directly
//               </h3>
//               <p className="text-blue-100 mb-4 text-sm">
//                 Click the button below to start a conversation
//               </p>
//               <motion.a
//                 // href="https://wa.me/918587870707"
//                 href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
//                 target="_blank"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-xl transition-all text-sm"
//               >
//                 Chat on WhatsApp
//                 <MessageCircle className="w-3.5 h-3.5" />
//               </motion.a>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
















// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Send,
//   Sparkles,
//   CheckCircle,
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   MessageCircle,
//   Users,
//   Zap,
// } from "lucide-react";
// import services from "@/lib/servicesData";
// export default function HomeContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     service: "Marketing as a Service (MaaS)",
//     message: "",
//   });

//   const [focusedField, setFocusedField] = useState<string | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<
//     "idle" | "success" | "error"
//   >("idle");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus("idle");
//     setErrorMessage("");

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok || !data.success) {
//         throw new Error(data.error || "Something went wrong. Please try again.");
//       }

//       setSubmitStatus("success");
//       setFormData({
//         name: "",
//         phone: "",
//         email: "",
//         service: "Marketing as a Service (MaaS)",
//         message: "",
//       });
//     } catch (err) {
//       const error = err as Error;
//       setSubmitStatus("error");
//       setErrorMessage(error.message || "Something went wrong. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const contactInfo = [
//     // {
//     //   icon: Phone,
//     //   text: "+91 85878 70707",
//     //   href: "tel:+9185878 70707",
//     //   color: "blue",
//     // },
//     {
//   icon: Phone,
//   text: process.env.NEXT_PUBLIC_CONTACT_PHONE!,
//   href: `tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW}`,
//   color: "blue",
// },

//     {
//       icon: Mail,
//       // text: "hello@marktaleworld.com",
//       // href: "mailto:hello@marktaleworld.com",
//       text: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
// href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`,
//       color: "yellow",
//     },
//     { icon: MapPin, text: "Sheme No 78 , Indore Madhya pradesh ", href: "#", color: "black" },
//   ];

//   const trustStats = [
//     { value: "24/7", label: "Support", icon: Clock, color: "blue" },
//     { value: "30min", label: "Response Time", icon: Zap, color: "yellow" },
//     { value: "100%", label: "Satisfaction", icon: Users, color: "black" },
//   ];

//   return (
//     <section
//       className="relative py-24 lg:py-32 bg-white overflow-hidden"
//       id="contact"
//     >
//       {/* Background Effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/30 to-transparent" />
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-100/30 rounded-full blur-3xl" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50/50 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-6 max-w-6xl relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6"
//           >
//             <Sparkles className="w-4 h-4 text-blue-600" />
//             <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase">
//               GET IN TOUCH
//             </span>
//           </motion.div>

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-[1.2] tracking-tight">
//             Ready to{" "}
//             <span className="text-blue-600 block mt-2">
//               Start Your Project?
//             </span>
//           </h2>

//           <p className="text-gray-500 text-base max-w-2xl mx-auto">
//             Whether you need a full digital transformation or a specific
//             marketing campaign, our team is ready to help you scale.
//           </p>
//         </motion.div>

//         {/* Trust Stats Row */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.1, duration: 0.5 }}
//           className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
//         >
//           {trustStats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ y: -3 }}
//               className="text-center p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all"
//             >
//               <div
//                 className={`w-8 h-8 rounded-lg ${
//                   stat.color === "blue"
//                     ? "bg-blue-100"
//                     : stat.color === "yellow"
//                     ? "bg-yellow-100"
//                     : "bg-gray-100"
//                 } flex items-center justify-center mx-auto mb-2`}
//               >
//                 <stat.icon
//                   className={`w-4 h-4 ${
//                     stat.color === "blue"
//                       ? "text-blue-600"
//                       : stat.color === "yellow"
//                       ? "text-yellow-600"
//                       : "text-black"
//                   }`}
//                 />
//               </div>
//               <p className="text-lg font-bold text-black">{stat.value}</p>
//               <p className="text-[10px] text-gray-500">{stat.label}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Contact Info Cards */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="lg:col-span-1 space-y-4"
//           >
//             {contactInfo.map((info, idx) => (
//               <motion.a
//                 key={idx}
//                 href={info.href}
//                 whileHover={{ x: 5, scale: 1.02 }}
//                 className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group cursor-pointer ${
//                   info.color === "blue"
//                     ? "bg-blue-50 border-blue-200 hover:bg-blue-100"
//                     : info.color === "yellow"
//                     ? "bg-yellow-50 border-yellow-200 hover:bg-yellow-100"
//                     : "bg-gray-50 border-gray-200 hover:bg-gray-100"
//                 }`}
//               >
//                 <div
//                   className={`w-10 h-10 rounded-xl ${
//                     info.color === "blue"
//                       ? "bg-blue-600"
//                       : info.color === "yellow"
//                       ? "bg-yellow-500"
//                       : "bg-black"
//                   } flex items-center justify-center group-hover:scale-110 transition-transform`}
//                 >
//                   <info.icon className="w-4 h-4 text-white" />
//                 </div>
//                 <span
//                   className={`font-medium ${
//                     info.color === "blue"
//                       ? "text-blue-700"
//                       : info.color === "yellow"
//                       ? "text-yellow-700"
//                       : "text-gray-700"
//                   }`}
//                 >
//                   {info.text}
//                 </span>
//               </motion.a>
//             ))}

//             {/* Response Time Badge */}
//             <motion.div
//               whileHover={{ y: -3 }}
//               className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl text-center border border-gray-100"
//             >
//               <div className="flex items-center justify-center gap-2 mb-2">
//                 <CheckCircle className="w-4 h-4 text-green-500" />
//                 <span className="text-sm font-semibold text-black">
//                   Response within 24 hours
//                 </span>
//               </div>
//               <p className="text-xs text-gray-500">
//                 We typically respond within a few hours
//               </p>
//             </motion.div>

//             {/* Trust Indicator */}
//             <div className="flex items-center justify-center gap-2 pt-2">
//               <div className="flex -space-x-2">
//                 {["AJ", "KS", "VR"].map((letter, i) => (
//                   <div
//                     key={i}
//                     className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[8px] font-bold text-gray-700"
//                   >
//                     {letter}
//                   </div>
//                 ))}
//               </div>
//               <span className="text-[10px] text-gray-400">
//                 150+ happy clients
//               </span>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="lg:col-span-2"
//           >
//             <div className="bg-white rounded-2xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-8">
//               {/* Success State */}
//               {submitStatus === "success" ? (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="flex flex-col items-center justify-center py-16 text-center gap-4"
//                 >
//                   <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
//                     <CheckCircle className="w-8 h-8 text-green-600" />
//                   </div>
//                   <h3 className="text-xl font-bold text-black">
//                     Message Sent!
//                   </h3>
//                   <p className="text-gray-500 text-sm max-w-xs">
//                     Thanks for reaching out. We&apos;ve saved your enquiry and sent
//                     you a confirmation email. Our team will get back to you
//                     within 24 hours.
//                   </p>
//                   <button
//                     onClick={() => setSubmitStatus("idle")}
//                     className="mt-2 text-blue-600 text-sm font-semibold underline underline-offset-2"
//                   >
//                     Send another message
//                   </button>
//                 </motion.div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   {/* Name and Phone - Side by Side */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                     <div>
//                       <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
//                         Full Name *
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         required
//                         value={formData.name}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField("name")}
//                         onBlur={() => setFocusedField(null)}
//                         className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 text-base ${
//                           focusedField === "name"
//                             ? "border-blue-600 bg-white shadow-sm"
//                             : "border-gray-200 hover:border-gray-300"
//                         }`}
//                         placeholder="John Doe"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
//                         Phone Number *
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         required
//                         value={formData.phone}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField("phone")}
//                         onBlur={() => setFocusedField(null)}
//                         className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 text-base ${
//                           focusedField === "phone"
//                             ? "border-blue-600 bg-white shadow-sm"
//                             : "border-gray-200 hover:border-gray-300"
//                         }`}
//                         placeholder="+91..."
//                       />
//                     </div>
//                   </div>

//                   {/* Email */}
//                   <div>
//                     <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField("email")}
//                       onBlur={() => setFocusedField(null)}
//                       className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 text-base ${
//                         focusedField === "email"
//                           ? "border-blue-600 bg-white shadow-sm"
//                           : "border-gray-200 hover:border-gray-300"
//                       }`}
//                       placeholder="john@company.com"
//                     />
//                   </div>

//                   {/* Service Interest */}
//                   <div>
//                     <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
//                       Service Interest
//                     </label>
//                     <select
//                       name="service"
//                       value={formData.service}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition-colors text-gray-700 text-base cursor-pointer hover:border-gray-300"
//                     >
//                       <option>Marketing as a Service (MaaS)</option>
//                       {services.map((service) => (
//                         <option key={service.id} value={service.title}>
//                           {service.title}
//                         </option>
//                       ))}
//                       <option>Other</option>
//                     </select>
//                   </div>

//                   {/* Message */}
//                   <div>
//                     <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
//                       Message
//                     </label>
//                     <textarea
//                       name="message"
//                       rows={4}
//                       value={formData.message}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField("message")}
//                       onBlur={() => setFocusedField(null)}
//                       className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 resize-none ${
//                         focusedField === "message"
//                           ? "border-blue-600 bg-white shadow-sm"
//                           : "border-gray-200 hover:border-gray-300"
//                       }`}
//                       placeholder="Tell us about your project..."
//                     />
//                   </div>

//                   {/* Error Message */}
//                   {submitStatus === "error" && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -8 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="flex items-start gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm"
//                     >
//                       <span className="font-semibold shrink-0">Error:</span>
//                       <span>{errorMessage}</span>
//                     </motion.div>
//                   )}

//                   {/* Submit Button */}
//                   <motion.button
//                     type="submit"
//                     disabled={isSubmitting}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     className={`w-full py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 ${
//                       isSubmitting ? "opacity-70 cursor-not-allowed" : ""
//                     }`}
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         Send Message
//                         <Send size={18} />
//                       </>
//                     )}
//                   </motion.button>

//                   <p className="text-xs text-center text-gray-400 mt-4">
//                     By submitting, you agree to our privacy policy. We&apos;ll never
//                     share your details.
//                   </p>
//                 </form>
//               )}
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom CTA Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="mt-16"
//         >
//           <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 md:p-8 text-center shadow-2xl">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

//             <div className="relative z-10">
//               <MessageCircle className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
//               <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
//                 Prefer WhatsApp? Chat with us directly
//               </h3>
//               <p className="text-blue-100 mb-4 text-sm">
//                 Click the button below to start a conversation
//               </p>
//               <motion.a
//                 href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
//                 target="_blank"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-xl transition-all text-sm"
//               >
//                 Chat on WhatsApp
//                 <MessageCircle className="w-3.5 h-3.5" />
//               </motion.a>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


















"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle,
  Send,
  Sparkles,
  Clock,
  Zap,
  Users,
} from "lucide-react";
import services from "@/lib/servicesData";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Call us",
    value: process.env.NEXT_PUBLIC_CONTACT_PHONE!,
    href: `tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW}`,
    accent: "blue",
  },
  {
    icon: Mail,
    label: "Email us",
    value: process.env.NEXT_PUBLIC_CONTACT_EMAIL!,
    href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`,
    accent: "violet",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "Scheme No 78, Indore, MP",
    href: "#",
    accent: "cyan",
  },
];

const TRUST_ITEMS = [
  { icon: Clock, stat: "24/7", label: "Support" },
  { icon: Zap, stat: "30 min", label: "Response" },
  { icon: Users, stat: "150+", label: "Happy Clients" },
];

// Accent gradient map
const ACCENT_MAP: Record<string, { dot: string; text: string; bg: string }> = {
  blue: {
    dot: "bg-blue-500",
    text: "text-blue-600",
    bg: "bg-blue-50",
  },
  violet: {
    dot: "bg-violet-500",
    text: "text-violet-600",
    bg: "bg-violet-50",
  },
  cyan: {
    dot: "bg-cyan-500",
    text: "text-cyan-600",
    bg: "bg-cyan-50",
  },
};

// ─── Background ───────────────────────────────────────────────────────────────

function ContactBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Subtle page gradient matching hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white" />

      {/* Floating orbs — same radii/positions as hero background, opposite corners */}
      <motion.div
        className="absolute -top-32 -left-32 w-[400px] sm:w-[560px] h-[400px] sm:h-[560px] rounded-full bg-gradient-to-br from-violet-100/40 via-blue-100/30 to-transparent blur-3xl will-change-transform"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] rounded-full bg-gradient-to-tl from-cyan-100/30 via-blue-50/20 to-transparent blur-3xl will-change-transform"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Dot grid — same as hero */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}

// ─── Section header ───────────────────────────────────────────────────────────

function SectionHeader({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="text-center mb-16 sm:mb-20"
    >
      {/* Eyebrow — same as hero */}
      <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        Let's Build Together
      </div>

      {/* Headline */}
      <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-gray-900 leading-[1.08] tracking-tight">
        Start your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
          growth story
        </span>
        <span className="block mt-1 text-gray-900">today.</span>
      </h2>

      <p className="mt-5 text-base sm:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
        Whether you need a campaign, a platform, or the whole engine —
        tell us where you want to go and we'll map the route.
      </p>
    </motion.div>
  );
}

// ─── Left panel: info + trust ─────────────────────────────────────────────────

function LeftPanel({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-8"
    >
      {/* Contact cards */}
      <div className="flex flex-col gap-3">
        {CONTACT_ITEMS.map((item, i) => {
          const ac = ACCENT_MAP[item.accent];
          return (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              {/* Icon bubble */}
              <div
                className={`w-11 h-11 rounded-xl ${ac.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon size={18} className={ac.text} />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-gray-800 truncate">{item.value}</p>
              </div>

              <ArrowRight
                size={14}
                className="ml-auto text-gray-300 group-hover:text-gray-500 group-hover:translate-x-1 transition-all duration-200 shrink-0"
              />
            </motion.a>
          );
        })}
      </div>

      {/* Divider with label */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200" />
        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">
          Why teams choose us
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200" />
      </div>

      {/* Trust stats — mini glass cards */}
      <div className="grid grid-cols-3 gap-3">
        {TRUST_ITEMS.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.5 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-1.5 p-3.5 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm text-center"
          >
            <item.icon size={16} className="text-blue-500" />
            <p className="text-base font-extrabold text-gray-900 tabular-nums leading-none">
              {item.stat}
            </p>
            <p className="text-[10px] text-gray-400 font-medium">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* WhatsApp banner */}
      <motion.a
        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="relative overflow-hidden flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg shadow-gray-900/20 group"
      >
        {/* Gradient hover overlay */}
        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        <div className="relative z-10 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
          <MessageCircle size={18} className="text-white" />
        </div>
        <div className="relative z-10 min-w-0">
          <p className="text-sm font-bold text-white">Prefer WhatsApp?</p>
          <p className="text-[11px] text-gray-400 group-hover:text-white/70 transition-colors">
            Start a conversation now
          </p>
        </div>
        <ArrowRight
          size={15}
          className="relative z-10 ml-auto text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 shrink-0"
        />
      </motion.a>
    </motion.div>
  );
}

// ─── Right panel: form ────────────────────────────────────────────────────────

function ContactForm({ inView }: { inView: boolean }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "Marketing as a Service (MaaS)",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setFormData({ name: "", phone: "", email: "", service: "Marketing as a Service (MaaS)", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage((err as Error).message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = (field: string) =>
    `w-full px-4 py-3 text-sm bg-gray-50/80 border rounded-xl transition-all duration-200 outline-none placeholder:text-gray-300 text-gray-800 ${
      focusedField === field
        ? "border-blue-400 bg-white shadow-[0_0_0_3px_rgba(59,130,246,0.08)]"
        : "border-gray-200 hover:border-gray-300"
    }`;

  return (
    <motion.div
      initial={{ opacity: 0, x: 28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {/* Glass card */}
      <div className="relative bg-white/85 backdrop-blur-md border border-white/60 rounded-3xl shadow-xl shadow-blue-500/8 overflow-hidden">

        {/* Subtle top gradient bar */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />

        <div className="p-7 sm:p-9">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center justify-center py-16 text-center gap-5"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                  <CheckCircle size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">You're in!</h3>
                  <p className="text-sm text-gray-500 max-w-xs">
                    We've received your enquiry and sent a confirmation. Expect to hear from us within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-blue-600 font-semibold hover:underline underline-offset-2 mt-1"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Form heading */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles size={14} className="text-blue-500" />
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                      Free Strategy Session
                    </p>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                    Tell us about your project
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    We'll get back to you within 24 hours.
                  </p>
                </div>

                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                      Full Name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={fieldClass("name")}
                      placeholder="Alex Johnson"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                      Phone <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className={fieldClass("phone")}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                    Email Address <span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className={fieldClass("email")}
                    placeholder="alex@company.com"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl hover:border-gray-300 focus:border-blue-400 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)] focus:bg-white transition-all duration-200 outline-none text-gray-700 cursor-pointer"
                  >
                    <option>Marketing as a Service (MaaS)</option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option>Other / Not sure yet</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                    Message
                    <span className="ml-1.5 text-gray-300 normal-case font-normal">(optional)</span>
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`${fieldClass("message")} resize-none`}
                    placeholder="Give us a quick overview of what you're working on…"
                  />
                </div>

                {/* Error */}
                <AnimatePresence>
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -8, height: 0 }}
                      className="flex items-start gap-2 px-4 py-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs"
                    >
                      <span className="font-bold shrink-0">Error:</span>
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative w-full py-4 rounded-xl font-semibold text-sm text-white overflow-hidden group shadow-lg shadow-blue-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {/* Resting gradient */}
                  <span className="absolute inset-0 bg-gray-900" />
                  {/* Hover gradient — same as hero CTA */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                      </>
                    )}
                  </span>
                </motion.button>

                <p className="text-[10px] text-center text-gray-400">
                  By submitting you agree to our privacy policy. We never share your details.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Floating response-time pill — mirrors the dashboard pills in the hero */}
      <motion.div
        initial={{ opacity: 0, y: 10, x: 12 }}
        animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
        transition={{ delay: 0.75, duration: 0.4 }}
        className="absolute -top-4 -right-3 sm:-right-5 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2 flex items-center gap-2"
      >
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shrink-0">
          <CheckCircle size={10} className="text-white" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-gray-800 whitespace-nowrap">Replies in &lt; 24 h</p>
          <p className="text-[9px] text-gray-400 whitespace-nowrap">Guaranteed</p>
        </div>
      </motion.div>

      {/* Bottom-left ambient dot */}
      <motion.div
        initial={{ opacity: 0, x: -12, y: 10 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ delay: 0.9, duration: 0.4 }}
        className="absolute -bottom-4 -left-3 sm:-left-5 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2 flex items-center gap-2"
      >
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center shrink-0">
          <Sparkles size={10} className="text-white" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-gray-800 whitespace-nowrap">Free Strategy Call</p>
          <p className="text-[9px] text-gray-400 whitespace-nowrap">No commitment</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function HomeContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-label="Contact section"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <ContactBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader inView={inView} />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          <LeftPanel inView={inView} />
          <ContactForm inView={inView} />
        </div>
      </div>
    </section>
  );
}