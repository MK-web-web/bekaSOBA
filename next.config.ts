import type { NextConfig } from "next";

/**
 * Practical CSP for a static marketing site.
 * Allows GA (consent-gated), Formspree, and Google Maps embeds.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self' https://formspree.io",
  "img-src 'self' data: blob: https:",
  "font-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  // Next.js inline boot scripts + GA; avoid unsafe-eval in production CSP
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
  "connect-src 'self' https://formspree.io https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://region1.google-analytics.com",
  "frame-src https://maps.google.com https://www.google.com",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/project-management",
        destination: "/services/conseil",
        statusCode: 301,
      },
      {
        source: "/services/education-mentoring",
        destination: "/services/conseil",
        statusCode: 301,
      },
      {
        source: "/services/professional-english",
        destination: "/services/formation",
        statusCode: 301,
      },
      {
        source: "/services/leadership-development",
        destination: "/services/formation",
        statusCode: 301,
      },
      {
        source: "/services/digital-skills",
        destination: "/services/numerique",
        statusCode: 301,
      },
      {
        source: "/tarification",
        destination: "/pricing",
        statusCode: 301,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
