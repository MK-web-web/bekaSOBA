"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n";
import Nav from "./Nav";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import CookieConsent from "./CookieConsent";
import CookieConsent from "./CookieConsent";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Nav />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
      <CookieConsent />
      <CookieConsent />
    </LanguageProvider>
  );
}
