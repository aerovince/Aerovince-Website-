
// marktaleworld_updated-\app\layout.tsx


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
  metadataBase: new URL("https://www.marktaleworld.com"),

  title: {
    default: "MarkTale | Turning Your Tale Into Sales",
    template: "%s | MarkTale",
  },

  description:
    "MarkTale is a full-service digital marketing agency helping startups and businesses grow through branding, website development, SEO, social media marketing, Google Ads, Meta Ads, AI automation, and lead generation.",

  keywords: [
    "MarkTale",
    "Digital Marketing Agency",
    "Website Development",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "Social Media Marketing",
    "Branding",
    "Lead Generation",
    "Performance Marketing",
    "AI Marketing",
  ],

  authors: [
    {
      name: "MarkTale",
      url: "https://www.marktaleworld.com",
    },
  ],

  creator: "MarkTale",
  publisher: "MarkTale",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "MarkTale | Turning Your Tale Into Sales",
    description:
      "Helping startups and brands grow through branding, websites, SEO, social media marketing, Google Ads, Meta Ads, AI automation, and lead generation.",
    url: "https://www.marktaleworld.com",
    siteName: "MarkTale",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MarkTale",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MarkTale | Turning Your Tale Into Sales",
    description:
      "Helping startups and brands grow through branding, websites, SEO, advertising and AI-powered marketing.",
    images: ["/images/og-image.jpg"],
  },

  verification: {
    google: "APNS6nHozhiQP3ShefFpxbHPSuvD0Nt-YMr-k2Wu9VE",
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