









// Aerovince\next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Image optimization ─────────────────────────────────────────
  // Only whitelist hosts you actually pull images from. A wildcard
  // ("**") defeats the purpose of remotePatterns (it lets Next.js
  // proxy/optimize images from literally any domain), so it's been
  // removed below — add specific hostnames as you need them instead.
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Your own domain (in case you reference full URLs anywhere)
      {
        protocol: "https",
        hostname: "www.aerovince.com",
      },
      {
        protocol: "https",
        hostname: "aerovince.com",
      },

      // Stock/placeholder images
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },

      // Social proof / case-study screenshots pulled from client
      // socials — Instagram, Facebook, LinkedIn
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "www.instagram.com",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },

      // Firebase Storage (portfolio/blog images, uploads)
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
      // Google account profile photos (Firebase Auth Google sign-in)
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },

      // Cloudinary (if you use it for blog/media uploads)
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  // ── SEO / canonical-domain hygiene ─────────────────────────────
  // Search engines treat "aerovince.com" and "www.aerovince.com" as
  // two different sites unless you 301 one to the other. Your
  // layout.tsx metadataBase + canonical URL use the www version, so
  // redirect the apex domain there to consolidate ranking signals.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "aerovince.com" }],
        destination: "https://www.aerovince.com/:path*",
        permanent: true,
      },
    ];
  },

  // ── General hygiene ─────────────────────────────────────────────
  reactStrictMode: true,
  poweredByHeader: false, // don't advertise "X-Powered-By: Next.js"
  compress: true,

  // ── Basic security headers (cheap SEO/trust win: Search Console
  // and some ranking signals reward sites with sane security headers,
  // and browsers/customers trust them more) ─────────────────────────
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;