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
import { gscVerification, site } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: site.themeColor,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "bekaSOBA — Cabinet de conseil et de soutien à Bamako",
    template: "%s | bekaSOBA",
  },
  description:
    "bekaSOBA : cabinet de conseil et de soutien à Bamako. Gestion de projet et d'entreprise, construction de A à Z, établissements scolaires, anglais professionnel, leadership, informatique et numérique.",
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
    title: "bekaSOBA — Consulting and support in Bamako",
    description:
      "International standards, Malian realities.",
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
    title: "bekaSOBA — Consulting and support in Bamako",
    description: "International standards, Malian realities.",
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
  verification: {
    google: gscVerification,
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="google-site-verification"
          content={gscVerification}
        />
      </head>
      <body className="antialiased">
        <JsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
