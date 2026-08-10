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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00a86b",
};

export const metadata: Metadata = {
  title: "Denmisew Ka Gneta — Cabinet de conseil axé sur les résultats",
  description:
    "Denmisew Ka Gneta allie les standards professionnels américains aux réalités maliennes : accompagnement scolaire, gestion de projet, conseil en construction, anglais professionnel et leadership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
