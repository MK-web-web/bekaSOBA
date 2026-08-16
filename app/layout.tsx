import type { Metadata, Viewport } from "next";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/500-italic.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import Providers from "@/components/Providers";
import JsonLd from "@/components/JsonLd";
import { analytics, site } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: site.themeColor,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "bekaSOBA — Results-Oriented Consulting in Mali",
    template: "%s | bekaSOBA",
  },
  description:
    "bekaSOBA bridges U.S. professional standards with Malian realities — project management, construction advisory, education mentoring, professional English, leadership, and digital skills. Based in Bamako, Mali.",
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
    languages: {
      fr: "/",
      en: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    alternateLocale: [site.alternateLocale],
    url: site.url,
    siteName: site.name,
    title: "bekaSOBA — Results-Oriented Consulting in Mali",
    description:
      "Project management, construction advisory, education mentoring, professional English, leadership, and digital skills — Bamako, Mali.",
    images: [
      {
        url: site.logo,
        width: 1200,
        height: 630,
        alt: "bekaSOBA wordmark logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "bekaSOBA — Results-Oriented Consulting in Mali",
    description:
      "Bridging U.S. professional standards with Malian realities.",
    images: [site.logo],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(analytics.gscVerification
    ? {
        verification: {
          google: analytics.gscVerification,
        },
      }
    : {}),
  icons: {
    icon: site.logo,
    apple: site.logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <JsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
