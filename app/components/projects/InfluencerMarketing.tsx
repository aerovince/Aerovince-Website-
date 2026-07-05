// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { TrendingUp, Users, Heart, MessageCircle, Share2, DollarSign, Zap, Instagram, Youtube, Twitter } from 'lucide-react';

// const campaigns = [
//     {
//         id: 1,
//         brand: 'Delhi059',
//         influencer: '@foodie_canada',
//         platform: 'Instagram',
//         image: '/delhi059-logo.jpg',
//         followers: '250K',
//         engagement: '8.5%',
//         reach: '2.1M',
//         conversions: '450+',
//         roi: '12x',
//         description: 'Authentic food review that drove massive foot traffic',
//         metrics: {
//             likes: '45K',
//             comments: '2.3K',
//             shares: '1.8K',
//             saves: '12K'
//         }
//     },
//     {
//         id: 2,
//         brand: 'Dee Cee Accessories',
//         influencer: '@fashion_forward',
//         platform: 'Instagram',
//         image: '/Feature_logos/deecee.jpg',
//         followers: '180K',
//         engagement: '12.3%',
//         reach: '1.8M',
//         conversions: '320+',
//         roi: '15x',
//         description: 'Jewelry styling series that went viral',
//         metrics: {
//             likes: '38K',
//             comments: '1.9K',
//             shares: '2.1K',
//             saves: '15K'
//         }
//     },
//     {
//         id: 3,
//         brand: 'Astro Nexus',
//         influencer: '@cosmic_vibes',
//         platform: 'YouTube',
//         image: '/Feature_logos/astronexus.jpg',
//         followers: '420K',
//         engagement: '6.8%',
//         reach: '3.5M',
//         conversions: '890+',
//         roi: '18x',
//         description: 'Weekly horoscope series with massive engagement',
//         metrics: {
//             likes: '67K',
//             comments: '4.2K',
//             shares: '3.5K',
//             saves: '22K'
//         }
//     },
//     {
//         id: 4,
//         brand: 'Biryani Bar',
//         influencer: '@food_explorer',
//         platform: 'Instagram',
//         image: '/Feature_logos/biryanibar.jpg',
//         followers: '310K',
//         engagement: '9.2%',
//         reach: '2.8M',
//         conversions: '670+',
//         roi: '14x',
//         description: 'Authentic biryani launch that went viral',
//         metrics: {
//             likes: '52K',
//             comments: '3.1K',
//             shares: '2.9K',
//             saves: '18K'
//         }
//     }
// ];

// const stats = [
//     { icon: Users, number: '50+', label: 'Influencer Partnerships', color: 'text-pink-500' },
//     { icon: TrendingUp, number: '25M+', label: 'Total Reach', color: 'text-purple-500' },
//     { icon: DollarSign, number: '15x', label: 'Average ROI', color: 'text-green-500' },
//     { icon: Zap, number: '95%', label: 'Campaign Success Rate', color: 'text-yellow-500' }
// ];

// const platformIcons = {
//     Instagram: Instagram,
//     YouTube: Youtube,
//     Twitter: Twitter
// };

// export default function InfluencerMarketing() {
//     const [selectedCampaign, setSelectedCampaign] = useState(campaigns[0]);

//     return (
//         <section className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
//             {/* Animated Background */}
//             <div className="absolute inset-0 opacity-30">
//                 <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-300 rounded-full blur-3xl animate-pulse" />
//                 <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
//             </div>

//             <div className="container mx-auto px-6 max-w-7xl relative z-10">
//                 {/* Section Header */}
//                 <motion.div
//                     className="text-center mb-16"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                 >
//                     <motion.div
//                         className="inline-block mb-6"
//                         initial={{ scale: 0.8 }}
//                         whileInView={{ scale: 1 }}
//                         viewport={{ once: true }}
//                     >
//                         <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold text-sm uppercase tracking-widest rounded-full shadow-lg">
//                             <Zap size={16} />
//                             Influencer Marketing
//                         </span>
//                     </motion.div>
//                     <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
//                         <span className="text-kestone-black">Campaigns That</span><br />
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
//                             Break The Internet
//                         </span>
//                     </h2>
//                     <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body leading-relaxed">
//                         We don't just find influencers—we create <span className="font-bold text-purple-600">viral moments</span>,
//                         build <span className="font-bold text-pink-600">authentic partnerships</span>, and deliver
//                         <span className="font-bold text-blue-600"> measurable results</span> that transform brands.
//                     </p>
//                 </motion.div>

//                 {/* Stats Grid */}
//                 <motion.div
//                     // className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
//                     className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20"
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                 >
//                     {stats.map((stat, idx) => (
//                         <motion.div
//                             key={idx}
//                             className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: idx * 0.1 }}
//                             whileHover={{ scale: 1.05 }}
//                         >
//                             <div className={`inline-flex items-center justify-center w-14 h-14 ${stat.color} bg-opacity-10 rounded-full mb-3`}>
//                                 <stat.icon className={stat.color} size={28} />
//                             </div>
//                             <div className="text-3xl md:text-4xl font-heading font-bold text-kestone-black mb-2">
//                                 {stat.number}
//                             </div>
//                             <div className="text-sm text-gray-600 font-body">
//                                 {stat.label}
//                             </div>
//                         </motion.div>
//                     ))}
//                 </motion.div>

//                 {/* Campaign Showcase */}
//                 <div className="grid lg:grid-cols-2 gap-12 mb-16">
//                     {/* Campaign Selector */}
//                     <div className="space-y-4">
//                         <h3 className="text-2xl font-heading font-bold text-kestone-black mb-6">
//                             Featured Campaigns
//                         </h3>
//                         {campaigns.map((campaign, idx) => (
//                             <motion.div
//                                 key={campaign.id}
//                                 className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${selectedCampaign.id === campaign.id
//                                     ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-xl scale-105'
//                                     : 'bg-white/80 backdrop-blur-sm hover:bg-white shadow-md hover:shadow-lg'
//                                     }`}
//                                 onClick={() => setSelectedCampaign(campaign)}
//                                 initial={{ opacity: 0, x: -20 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: idx * 0.1 }}
//                                 whileHover={{ x: 10 }}
//                             >
//                                 <div className="flex items-center gap-4">
//                                     <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
//                                         <Image
//                                             src={campaign.image}
//                                             alt={campaign.brand}
//                                             fill
//                                             className="object-cover"
//                                         />
//                                     </div>
//                                     <div className="flex-1">
//                                         <div className="flex items-center gap-2 mb-1">
//                                             <h4 className={`font-heading font-bold ${selectedCampaign.id === campaign.id ? 'text-white' : 'text-kestone-black'}`}>
//                                                 {campaign.brand}
//                                             </h4>
//                                             {React.createElement(platformIcons[campaign.platform as keyof typeof platformIcons], {
//                                                 size: 16,
//                                                 className: selectedCampaign.id === campaign.id ? 'text-white' : 'text-pink-500'
//                                             })}
//                                         </div>
//                                         <p className={`text-sm font-body ${selectedCampaign.id === campaign.id ? 'text-white/90' : 'text-gray-600'}`}>
//                                             {campaign.influencer}
//                                         </p>
//                                     </div>
//                                     <div className="text-right">
//                                         <div className={`text-2xl font-heading font-bold ${selectedCampaign.id === campaign.id ? 'text-white' : 'text-purple-600'}`}>
//                                             {campaign.roi}
//                                         </div>
//                                         <div className={`text-xs ${selectedCampaign.id === campaign.id ? 'text-white/80' : 'text-gray-500'}`}>
//                                             ROI
//                                         </div>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>

//                     {/* Campaign Details */}
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={selectedCampaign.id}
//                             className="bg-white rounded-3xl overflow-hidden shadow-2xl"
//                             initial={{ opacity: 0, scale: 0.9 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             exit={{ opacity: 0, scale: 0.9 }}
//                             transition={{ duration: 0.3 }}
//                         >
//                             {/* Image */}
//                             <div className="relative aspect-square">
//                                 <Image
//                                     src={selectedCampaign.image}
//                                     alt={selectedCampaign.brand}
//                                     fill
//                                     className="object-cover"
//                                 />
//                                 <div className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-sm rounded-full shadow-lg">
//                                     {selectedCampaign.platform}
//                                 </div>
//                             </div>

//                             {/* Details */}
//                             <div className="p-8">
//                                 <h3 className="text-3xl font-heading font-bold text-kestone-black mb-3">
//                                     {selectedCampaign.brand}
//                                 </h3>
//                                 <p className="text-gray-600 font-body text-lg mb-6">
//                                     {selectedCampaign.description}
//                                 </p>

//                                 {/* Metrics Grid */}
//                                 {/* <div className="grid grid-cols-2 gap-4 mb-6"> */}
//                                 <div className="grid grid-cols-2 gap-3 mb-6">
//                                     <div className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl">
//                                         <div className="text-2xl font-heading font-bold text-pink-600 mb-1">
//                                             {selectedCampaign.reach}
//                                         </div>
//                                         <div className="text-sm text-gray-600 font-body">Total Reach</div>
//                                     </div>
//                                     <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
//                                         <div className="text-2xl font-heading font-bold text-purple-600 mb-1">
//                                             {selectedCampaign.engagement}
//                                         </div>
//                                         <div className="text-sm text-gray-600 font-body">Engagement Rate</div>
//                                     </div>
//                                     <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
//                                         <div className="text-2xl font-heading font-bold text-blue-600 mb-1">
//                                             {selectedCampaign.conversions}
//                                         </div>
//                                         <div className="text-sm text-gray-600 font-body">Conversions</div>
//                                     </div>
//                                     <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
//                                         <div className="text-2xl font-heading font-bold text-green-600 mb-1">
//                                             {selectedCampaign.roi}
//                                         </div>
//                                         <div className="text-sm text-gray-600 font-body">Return on Investment</div>
//                                     </div>
//                                 </div>

//                                 {/* Social Metrics */}
//                                 <div className="flex items-center justify-around p-6 bg-gray-50 rounded-xl">
//                                     <div className="text-center">
//                                         <Heart className="text-pink-500 mx-auto mb-2" size={24} />
//                                         <div className="font-heading font-bold text-kestone-black">
//                                             {selectedCampaign.metrics.likes}
//                                         </div>
//                                         <div className="text-xs text-gray-500">Likes</div>
//                                     </div>
//                                     <div className="text-center">
//                                         <MessageCircle className="text-blue-500 mx-auto mb-2" size={24} />
//                                         <div className="font-heading font-bold text-kestone-black">
//                                             {selectedCampaign.metrics.comments}
//                                         </div>
//                                         <div className="text-xs text-gray-500">Comments</div>
//                                     </div>
//                                     <div className="text-center">
//                                         <Share2 className="text-purple-500 mx-auto mb-2" size={24} />
//                                         <div className="font-heading font-bold text-kestone-black">
//                                             {selectedCampaign.metrics.shares}
//                                         </div>
//                                         <div className="text-xs text-gray-500">Shares</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>

//                 {/* CTA Section */}
//                 <motion.div
//                     className="text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl p-12 shadow-2xl"
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                 >
//                     <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
//                         Ready to Go Viral?
//                     </h3>
//                     <p className="text-xl text-white/90 font-body mb-8 max-w-2xl mx-auto">
//                         Let's create influencer campaigns that don't just get views—they get results.
//                     </p>
//                     <Link href="/contact">
//                         <motion.button
//                             className="px-10 py-5 bg-white text-purple-600 font-heading font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             Start Your Campaign
//                         </motion.button>
//                     </Link>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }

// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { TrendingUp, Users, Heart, MessageCircle, Share2, DollarSign, Zap, Instagram, Youtube, Twitter } from 'lucide-react';

// const campaigns = [
//     {
//         id: 1,
//         brand: 'Delhi059',
//         influencer: '@foodie_canada',
//         platform: 'Instagram',
//         image: '/delhi059-logo.jpg',
//         followers: '250K',
//         engagement: '8.5%',
//         reach: '2.1M',
//         conversions: '450+',
//         roi: '12x',
//         description: 'Authentic food review that drove massive foot traffic',
//         metrics: {
//             likes: '45K',
//             comments: '2.3K',
//             shares: '1.8K',
//             saves: '12K'
//         }
//     },
//     {
//         id: 2,
//         brand: 'Dee Cee Accessories',
//         influencer: '@fashion_forward',
//         platform: 'Instagram',
//         image: '/Feature_logos/deecee.jpg',
//         followers: '180K',
//         engagement: '12.3%',
//         reach: '1.8M',
//         conversions: '320+',
//         roi: '15x',
//         description: 'Jewelry styling series that went viral',
//         metrics: {
//             likes: '38K',
//             comments: '1.9K',
//             shares: '2.1K',
//             saves: '15K'
//         }
//     },
//     {
//         id: 3,
//         brand: 'Astro Nexus',
//         influencer: '@cosmic_vibes',
//         platform: 'YouTube',
//         image: '/Feature_logos/astronexus.jpg',
//         followers: '420K',
//         engagement: '6.8%',
//         reach: '3.5M',
//         conversions: '890+',
//         roi: '18x',
//         description: 'Weekly horoscope series with massive engagement',
//         metrics: {
//             likes: '67K',
//             comments: '4.2K',
//             shares: '3.5K',
//             saves: '22K'
//         }
//     },
//     {
//         id: 4,
//         brand: 'Biryani Bar',
//         influencer: '@food_explorer',
//         platform: 'Instagram',
//         image: '/Feature_logos/biryanibar.jpg',
//         followers: '310K',
//         engagement: '9.2%',
//         reach: '2.8M',
//         conversions: '670+',
//         roi: '14x',
//         description: 'Authentic biryani launch that went viral',
//         metrics: {
//             likes: '52K',
//             comments: '3.1K',
//             shares: '2.9K',
//             saves: '18K'
//         }
//     }
// ];

// const stats = [
//     { icon: Users, number: '50+', label: 'Influencer Partnerships', color: 'text-pink-500' },
//     { icon: TrendingUp, number: '25M+', label: 'Total Reach', color: 'text-purple-500' },
//     { icon: DollarSign, number: '15x', label: 'Average ROI', color: 'text-green-500' },
//     { icon: Zap, number: '95%', label: 'Campaign Success Rate', color: 'text-yellow-500' }
// ];

// const platformIcons = {
//     Instagram: Instagram,
//     YouTube: Youtube,
//     Twitter: Twitter
// };

// export default function InfluencerMarketing() {
//     const [selectedCampaign, setSelectedCampaign] = useState(campaigns[0]);

//     return (
//         <section className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
//             {/* Animated Background */}
//             <div className="absolute inset-0 opacity-30">
//                 <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-300 rounded-full blur-3xl animate-pulse" />
//                 <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
//             </div>

//             <div className="container mx-auto px-6 max-w-7xl relative z-10">
//                 {/* Section Header */}
//                 <motion.div
//                     className="text-center mb-16"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                 >
//                     <motion.div
//                         className="inline-block mb-6"
//                         initial={{ scale: 0.8 }}
//                         whileInView={{ scale: 1 }}
//                         viewport={{ once: true }}
//                     >
//                         <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold text-sm uppercase tracking-widest rounded-full shadow-lg">
//                             <Zap size={16} />
//                             Influencer Marketing
//                         </span>
//                     </motion.div>
//                     <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
//                         <span className="text-kestone-black">Campaigns That</span><br />
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
//                             Break The Internet
//                         </span>
//                     </h2>
//                     <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body leading-relaxed">
//                         We don&apos;t just find influencers—we create <span className="font-bold text-purple-600">viral moments</span>,
//                         build <span className="font-bold text-pink-600">authentic partnerships</span>, and deliver
//                         <span className="font-bold text-blue-600"> measurable results</span> that transform brands.
//                     </p>
//                 </motion.div>

//                 {/* Stats Grid */}
//                 <motion.div
//                     className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                 >
//                     {stats.map((stat, idx) => (
//                         <motion.div
//                             key={idx}
//                             className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: idx * 0.1 }}
//                             whileHover={{ scale: 1.05 }}
//                         >
//                             <div className={`inline-flex items-center justify-center w-14 h-14 ${stat.color} bg-opacity-10 rounded-full mb-3`}>
//                                 <stat.icon className={stat.color} size={28} />
//                             </div>
//                             <div className="text-3xl md:text-4xl font-heading font-bold text-kestone-black mb-2">
//                                 {stat.number}
//                             </div>
//                             <div className="text-sm text-gray-600 font-body">
//                                 {stat.label}
//                             </div>
//                         </motion.div>
//                     ))}
//                 </motion.div>

//                 {/* Campaign Showcase */}
//                 <div className="grid lg:grid-cols-2 gap-12 mb-16">
//                     {/* Campaign Selector */}
//                     <div className="space-y-4">
//                         <h3 className="text-2xl font-heading font-bold text-kestone-black mb-6">
//                             Featured Campaigns
//                         </h3>
//                         {campaigns.map((campaign, idx) => (
//                             <motion.div
//                                 key={campaign.id}
//                                 className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${selectedCampaign.id === campaign.id
//                                     ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-xl scale-105'
//                                     : 'bg-white/80 backdrop-blur-sm hover:bg-white shadow-md hover:shadow-lg'
//                                     }`}
//                                 onClick={() => setSelectedCampaign(campaign)}
//                                 initial={{ opacity: 0, x: -20 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: idx * 0.1 }}
//                                 whileHover={{ x: 10 }}
//                             >
//                                 <div className="flex items-center gap-4">
//                                     <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
//                                         <Image
//                                             src={campaign.image}
//                                             alt={campaign.brand}
//                                             fill
//                                             className="object-cover"
//                                         />
//                                     </div>
//                                     <div className="flex-1">
//                                         <div className="flex items-center gap-2 mb-1">
//                                             <h4 className={`font-heading font-bold ${selectedCampaign.id === campaign.id ? 'text-white' : 'text-kestone-black'}`}>
//                                                 {campaign.brand}
//                                             </h4>
//                                             {React.createElement(platformIcons[campaign.platform as keyof typeof platformIcons], {
//                                                 size: 16,
//                                                 className: selectedCampaign.id === campaign.id ? 'text-white' : 'text-pink-500'
//                                             })}
//                                         </div>
//                                         <p className={`text-sm font-body ${selectedCampaign.id === campaign.id ? 'text-white/90' : 'text-gray-600'}`}>
//                                             {campaign.influencer}
//                                         </p>
//                                     </div>
//                                     <div className="text-right">
//                                         <div className={`text-2xl font-heading font-bold ${selectedCampaign.id === campaign.id ? 'text-white' : 'text-purple-600'}`}>
//                                             {campaign.roi}
//                                         </div>
//                                         <div className={`text-xs ${selectedCampaign.id === campaign.id ? 'text-white/80' : 'text-gray-500'}`}>
//                                             ROI
//                                         </div>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>

//                     {/* Campaign Details */}
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={selectedCampaign.id}
//                             className="bg-white rounded-3xl overflow-hidden shadow-2xl"
//                             initial={{ opacity: 0, scale: 0.9 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             exit={{ opacity: 0, scale: 0.9 }}
//                             transition={{ duration: 0.3 }}
//                         >
//                             {/* Image */}
//                             <div className="relative aspect-square">
//                                 <Image
//                                     src={selectedCampaign.image}
//                                     alt={selectedCampaign.brand}
//                                     fill
//                                     className="object-cover"
//                                 />
//                                 <div className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-sm rounded-full shadow-lg">
//                                     {selectedCampaign.platform}
//                                 </div>
//                             </div>

//                             {/* Details */}
//                             <div className="p-8">
//                                 <h3 className="text-3xl font-heading font-bold text-kestone-black mb-3">
//                                     {selectedCampaign.brand}
//                                 </h3>
//                                 <p className="text-gray-600 font-body text-lg mb-6">
//                                     {selectedCampaign.description}
//                                 </p>

//                                 {/* Metrics Grid */}
//                                 <div className="grid grid-cols-2 gap-4 mb-6">
//                                     <div className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl">
//                                         <div className="text-2xl font-heading font-bold text-pink-600 mb-1">
//                                             {selectedCampaign.reach}
//                                         </div>
//                                         <div className="text-sm text-gray-600 font-body">Total Reach</div>
//                                     </div>
//                                     <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
//                                         <div className="text-2xl font-heading font-bold text-purple-600 mb-1">
//                                             {selectedCampaign.engagement}
//                                         </div>
//                                         <div className="text-sm text-gray-600 font-body">Engagement Rate</div>
//                                     </div>
//                                     <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
//                                         <div className="text-2xl font-heading font-bold text-blue-600 mb-1">
//                                             {selectedCampaign.conversions}
//                                         </div>
//                                         <div className="text-sm text-gray-600 font-body">Conversions</div>
//                                     </div>
//                                     <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
//                                         <div className="text-2xl font-heading font-bold text-green-600 mb-1">
//                                             {selectedCampaign.roi}
//                                         </div>
//                                         <div className="text-sm text-gray-600 font-body">Return on Investment</div>
//                                     </div>
//                                 </div>

//                                 {/* Social Metrics */}
//                                 <div className="flex items-center justify-around p-6 bg-gray-50 rounded-xl">
//                                     <div className="text-center">
//                                         <Heart className="text-pink-500 mx-auto mb-2" size={24} />
//                                         <div className="font-heading font-bold text-kestone-black">
//                                             {selectedCampaign.metrics.likes}
//                                         </div>
//                                         <div className="text-xs text-gray-500">Likes</div>
//                                     </div>
//                                     <div className="text-center">
//                                         <MessageCircle className="text-blue-500 mx-auto mb-2" size={24} />
//                                         <div className="font-heading font-bold text-kestone-black">
//                                             {selectedCampaign.metrics.comments}
//                                         </div>
//                                         <div className="text-xs text-gray-500">Comments</div>
//                                     </div>
//                                     <div className="text-center">
//                                         <Share2 className="text-purple-500 mx-auto mb-2" size={24} />
//                                         <div className="font-heading font-bold text-kestone-black">
//                                             {selectedCampaign.metrics.shares}
//                                         </div>
//                                         <div className="text-xs text-gray-500">Shares</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>

//                 {/* CTA Section */}
//                 <motion.div
//                     className="text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl p-12 shadow-2xl"
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                 >
//                     <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
//                         Ready to Go Viral?
//                     </h3>
//                     <p className="text-xl text-white/90 font-body mb-8 max-w-2xl mx-auto">
//                         Let&apos;s create influencer campaigns that don&apos;t just get views—they get results.
//                     </p>
//                     <Link href="/contact">
//                         <motion.button
//                             className="px-10 py-5 bg-white text-purple-600 font-heading font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             Start Your Campaign
//                         </motion.button>
//                     </Link>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }

























'use client';

import React, { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
    useTransform,
} from 'framer-motion';
import {
    TrendingUp,
    Users,
    Heart,
    MessageCircle,
    Share2,
    Zap,
    Instagram,
    Youtube,
    ArrowRight,
    Sparkles,
} from 'lucide-react';

// ─── Data ───────────────────────────────────────────────────────────────────
// NOTE: These are illustrative campaign types, not tied to specific client
// results — swap in real case studies + verified metrics once you have them.

interface Campaign {
    id: number;
    label: string;
    niche: string;
    platform: 'Instagram' | 'YouTube';
    image: string;
    accent: string;
    reach: string;
    engagement: string;
    conversions: string;
    roi: string;
    description: string;
    metrics: { likes: string; comments: string; shares: string };
}

const campaigns: Campaign[] = [
    {
        id: 1,
        label: 'Food & Hospitality Launch',
        niche: 'Restaurant / QSR',
        platform: 'Instagram',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
        accent: 'from-rose-500 to-orange-400',
        reach: '2.1M',
        engagement: '8.5%',
        conversions: '450+',
        roi: '12x',
        description: 'Authentic food-review content designed to drive real foot traffic, not just impressions.',
        metrics: { likes: '45K', comments: '2.3K', shares: '1.8K' },
    },
    {
        id: 2,
        label: 'E-commerce Styling Series',
        niche: 'Fashion & Accessories',
        platform: 'Instagram',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
        accent: 'from-violet-500 to-purple-400',
        reach: '1.8M',
        engagement: '12.3%',
        conversions: '320+',
        roi: '15x',
        description: 'Product-styling content built for save-and-share behavior, not just likes.',
        metrics: { likes: '38K', comments: '1.9K', shares: '2.1K' },
    },
    {
        id: 3,
        label: 'Lifestyle Series',
        niche: 'Wellness & Lifestyle',
        platform: 'YouTube',
        image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&q=80',
        accent: 'from-blue-500 to-cyan-400',
        reach: '3.5M',
        engagement: '6.8%',
        conversions: '890+',
        roi: '18x',
        description: 'Recurring long-form series designed to build audience trust over a full funnel.',
        metrics: { likes: '67K', comments: '4.2K', shares: '3.5K' },
    },
    {
        id: 4,
        label: 'Product Launch Push',
        niche: 'Food & Beverage',
        platform: 'Instagram',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
        accent: 'from-emerald-500 to-teal-400',
        reach: '2.8M',
        engagement: '9.2%',
        conversions: '670+',
        roi: '14x',
        description: 'Launch-day amplification built around a single creator moment, timed for maximum reach.',
        metrics: { likes: '52K', comments: '3.1K', shares: '2.9K' },
    },
];

const stats = [
    { icon: Users, value: '50+', label: 'Creator Partnerships' },
    { icon: TrendingUp, value: '25M+', label: 'Total Reach' },
    { icon: Sparkles, value: '15x', label: 'Avg. Reported ROI' },
    { icon: Zap, value: '95%', label: 'Campaign Success Rate' },
];

const platformIcons = { Instagram, YouTube: Youtube };

// ─── Tilt card for campaign selector row ───────────────────────────────────

function CampaignRow({
    campaign,
    active,
    onSelect,
}: {
    campaign: Campaign;
    active: boolean;
    onSelect: () => void;
}) {
    const PlatformIcon = platformIcons[campaign.platform];

    return (
        <motion.button
            onClick={onSelect}
            whileHover={{ x: 4 }}
            className={`relative w-full text-left p-4 sm:p-5 rounded-2xl transition-colors duration-300 overflow-hidden ${
                active ? 'bg-gray-900' : 'bg-white border border-gray-100 hover:border-gray-200'
            }`}
        >
            {active && (
                <motion.div
                    layoutId="campaign-active-bg"
                    className={`absolute inset-0 bg-gradient-to-r ${campaign.accent} opacity-90`}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
            )}
            <div className="relative z-10 flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-white/30">
                    <Image src={campaign.image} alt={campaign.label} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                        <h4 className={`font-bold text-sm truncate ${active ? 'text-white' : 'text-gray-900'}`}>
                            {campaign.label}
                        </h4>
                        <PlatformIcon size={13} className={active ? 'text-white/80' : 'text-gray-400'} />
                    </div>
                    <p className={`text-xs truncate ${active ? 'text-white/70' : 'text-gray-500'}`}>
                        {campaign.niche}
                    </p>
                </div>
                <div className="text-right shrink-0">
                    <div className={`text-lg font-extrabold ${active ? 'text-white' : 'text-gray-900'}`}>
                        {campaign.roi}
                    </div>
                    <div className={`text-[10px] font-medium ${active ? 'text-white/70' : 'text-gray-400'}`}>
                        ROI
                    </div>
                </div>
            </div>
        </motion.button>
    );
}

// ─── Detail panel with 3D tilt image ────────────────────────────────────────

function CampaignDetail({ campaign }: { campaign: Campaign }) {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { stiffness: 200, damping: 22, mass: 0.5 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const rect = ref.current?.getBoundingClientRect();
            if (!rect) return;
            mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
            mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
        },
        [mouseX, mouseY]
    );
    const handleMouseLeave = useCallback(() => {
        mouseX.set(0);
        mouseY.set(0);
    }, [mouseX, mouseY]);

    const PlatformIcon = platformIcons[campaign.platform];

    return (
        <motion.div
            key={campaign.id}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-xl shadow-gray-900/5"
        >
            <div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ perspective: 1000 }}
                className="relative aspect-[4/3]"
            >
                <motion.div
                    style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                    className="absolute inset-0"
                >
                    <Image
                        src={campaign.image}
                        alt={campaign.label}
                        fill
                        className="object-cover"
                        style={{ transform: 'translateZ(0px)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div
                        className={`absolute top-5 left-5 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r ${campaign.accent} text-white text-xs font-bold shadow-md`}
                        style={{ transform: 'translateZ(30px)' }}
                    >
                        <PlatformIcon size={13} />
                        {campaign.platform}
                    </div>
                </motion.div>
            </div>

            <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">{campaign.label}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{campaign.description}</p>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                    {[
                        { label: 'Total Reach', value: campaign.reach },
                        { label: 'Engagement Rate', value: campaign.engagement },
                        { label: 'Conversions', value: campaign.conversions },
                        { label: 'Reported ROI', value: campaign.roi },
                    ].map((m) => (
                        <div
                            key={m.label}
                            className={`p-4 rounded-xl bg-gradient-to-br ${campaign.accent} bg-opacity-5`}
                            style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                        >
                            <div className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-0.5">{m.value}</div>
                            <div className="text-xs text-gray-500 font-medium">{m.label}</div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-around p-5 bg-gray-50 rounded-2xl">
                    <div className="text-center">
                        <Heart size={18} className="text-rose-500 mx-auto mb-1.5" />
                        <div className="font-bold text-gray-900 text-sm">{campaign.metrics.likes}</div>
                        <div className="text-[10px] text-gray-400 font-medium">Likes</div>
                    </div>
                    <div className="text-center">
                        <MessageCircle size={18} className="text-blue-500 mx-auto mb-1.5" />
                        <div className="font-bold text-gray-900 text-sm">{campaign.metrics.comments}</div>
                        <div className="text-[10px] text-gray-400 font-medium">Comments</div>
                    </div>
                    <div className="text-center">
                        <Share2 size={18} className="text-violet-500 mx-auto mb-1.5" />
                        <div className="font-bold text-gray-900 text-sm">{campaign.metrics.shares}</div>
                        <div className="text-[10px] text-gray-400 font-medium">Shares</div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Section ────────────────────────────────────────────────────────────────

export default function InfluencerMarketing() {
    const [activeId, setActiveId] = useState(campaigns[0].id);
    const active = campaigns.find((c) => c.id === activeId)!;

    return (
        <section className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-blue-50/25 to-white overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-blue-200/25 via-violet-200/15 to-transparent blur-3xl" />
                <div className="absolute -bottom-32 -left-32 w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-cyan-200/20 via-blue-100/15 to-transparent blur-3xl" />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
                        <Zap size={12} />
                        Influencer Marketing
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.08] mb-5">
                        Campaigns That{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                            Actually Convert
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        We don't just book creators — we build partnerships around the platforms
                        and formats that move real business metrics.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mb-14 sm:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.4 }}
                            className="bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl p-5 sm:p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 mb-3">
                                <stat.icon size={18} className="text-white" />
                            </div>
                            <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">{stat.value}</div>
                            <div className="text-xs sm:text-sm text-gray-500 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Selector + Detail */}
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 mb-16 sm:mb-20">
                    <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Campaign Formats</h3>
                        {campaigns.map((c, i) => (
                            <motion.div
                                key={c.id}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.4 }}
                            >
                                <CampaignRow campaign={c} active={c.id === activeId} onSelect={() => setActiveId(c.id)} />
                            </motion.div>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <CampaignDetail campaign={active} />
                    </AnimatePresence>
                </div>

                {/* CTA */}
                <motion.div
                    className="relative text-center rounded-3xl p-10 sm:p-14 overflow-hidden"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-violet-600 to-purple-600" />
                    <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: `radial-gradient(circle at 20% 20%, white 0%, transparent 40%), radial-gradient(circle at 80% 80%, white 0%, transparent 40%)`,
                    }} />
                    <div className="relative z-10">
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5">
                            Ready to Build Yours?
                        </h3>
                        <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto mb-8">
                            Let's put together a creator strategy built around your funnel, not just follower counts.
                        </p>
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.03, y: -1 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-xl"
                            >
                                Start Your Campaign
                                <ArrowRight size={16} />
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}