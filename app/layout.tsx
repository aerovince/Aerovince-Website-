
// // Aerovince\app\layout.tsx

// import type { Metadata } from "next";
// import { Montserrat, Roboto } from "next/font/google";
// import "./globals.css";
// import GoogleAnalytics from "./components/GoogleAnalytics";

// const montserrat = Montserrat({
//   variable: "--font-montserrat",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
// });

// const roboto = Roboto({
//   variable: "--font-roboto",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "700"],
// });

// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.marktaleworld.com"),

//   title: {
//     default: "MarkTale | Turning Your Tale Into Sales",
//     template: "%s | MarkTale",
//   },

//   description:
//     "MarkTale is a full-service digital marketing agency helping startups and businesses grow through branding, website development, SEO, social media marketing, Google Ads, Meta Ads, AI automation, and lead generation.",

//   keywords: [
//     "MarkTale",
//     "Digital Marketing Agency",
//     "Website Development",
//     "SEO",
//     "Google Ads",
//     "Meta Ads",
//     "Social Media Marketing",
//     "Branding",
//     "Lead Generation",
//     "Performance Marketing",
//     "AI Marketing",
//   ],

//   authors: [
//     {
//       name: "MarkTale",
//       url: "https://www.marktaleworld.com",
//     },
//   ],

//   creator: "MarkTale",
//   publisher: "MarkTale",

//   icons: {
//     icon: [
//       { url: "/favicon.ico" },
//       { url: "/favicon.png", type: "image/png" },
//     ],
//     shortcut: "/favicon.ico",
//     apple: "/apple-touch-icon.png",
//   },

//   openGraph: {
//     title: "MarkTale | Turning Your Tale Into Sales",
//     description:
//       "Helping startups and brands grow through branding, websites, SEO, social media marketing, Google Ads, Meta Ads, AI automation, and lead generation.",
//     url: "https://www.marktaleworld.com",
//     siteName: "MarkTale",
//     locale: "en_US",
//     type: "website",
//     images: [
//       {
//         url: "/images/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "MarkTale",
//       },
//     ],
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "MarkTale | Turning Your Tale Into Sales",
//     description:
//       "Helping startups and brands grow through branding, websites, SEO, advertising and AI-powered marketing.",
//     images: ["/images/og-image.jpg"],
//   },

//   verification: {
//     google: "APNS6nHozhiQP3ShefFpxbHPSuvD0Nt-YMr-k2Wu9VE",
//   },
// };

// /**
//  * Root layout — sets up <html>, <body>, fonts, global styles, and
//  * site-wide providers (analytics, popups). Does NOT include Navbar or
//  * Footer — those live in app/(main)/layout.tsx so the admin routes stay
//  * free of them.
//  */
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${montserrat.variable} ${roboto.variable} antialiased font-body overflow-x-hidden flex flex-col min-h-screen`}
//       >
//         <GoogleAnalytics />
//         {children}
//       </body>
//     </html>
//   );
// }























// Aerovince\app\layout.tsx

import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aerovince.com"),

  title: {
    default:
      "Aerovince | Digital Marketing Agency for Websites, SEO & Social Media Growth",
    template: "%s | Aerovince",
  },

  description:
    "Aerovince is a Delhi-based digital marketing agency helping businesses grow with premium website development (free hosting & 1-year maintenance), Google SEO, social media & Reels marketing, WhatsApp & email marketing, Meta & Google Ads, and logo/brand design. We don't just do marketing — we build brands customers trust.",

  keywords: [
    "Aerovince",
    "Digital Marketing Agency",
    "Digital Marketing Agency in Delhi",
    "Website Development Company",
    "Website Development India",
    "Google SEO Services",
    "SEO Agency Delhi",
    "Social Media Marketing Agency",
    "Reels Marketing",
    "WhatsApp Marketing",
    "Bulk WhatsApp Marketing",
    "Facebook Marketing",
    "Email Marketing Agency",
    "Google Ads Agency",
    "Meta Ads Agency",
    "Performance Marketing",
    "Logo Design Company",
    "Brand Building Agency",
    "Grow Business Online",
    "Lead Generation Agency",
  ],

  authors: [
    {
      name: "Aerovince",
      url: "https://www.aerovince.com",
    },
  ],

  creator: "Aerovince",
  publisher: "Aerovince",

  category: "Digital Marketing",

  alternates: {
    canonical: "https://www.aerovince.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title:
      "Aerovince | Digital Marketing Agency for Websites, SEO & Social Media Growth",
    description:
      "Premium websites with free hosting & maintenance, Google SEO, social media & Reels marketing, WhatsApp/Email marketing, and Meta & Google Ads — Aerovince builds the brand that gets you customers.",
    url: "https://www.aerovince.com",
    siteName: "Aerovince",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aerovince — Digital Marketing Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aerovince | Digital Marketing Agency That Builds Brands You Can Trust",
    description:
      "Websites, SEO, social media, WhatsApp/Email marketing & ad campaigns — everything your business needs to grow online, in one agency.",
    images: ["/images/og-image.jpg"],
  },

  verification: {
    // Replace with your real Google Search Console verification code
    google: "REPLACE_WITH_YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  },
};

/**
 * Root layout — sets up <html>, <body>, fonts, global styles, and
 * site-wide providers (analytics, popups). Does NOT include Navbar or
 * Footer — those live in app/(main)/layout.tsx so the admin routes stay
 * free of them.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${roboto.variable} antialiased font-body overflow-x-hidden flex flex-col min-h-screen`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}