"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Script from "next/script";
import { uiStrings } from "@/lib/content";
import { analytics } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

const CONSENT_KEY = "bekasoba-analytics-consent";

export default function CookieConsent() {
  const { lang } = useLanguage();
  const [consent, setConsent] = useState<"pending" | "granted" | "denied">(
    "pending"
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (stored === "granted") setConsent("granted");
    else if (stored === "denied") setConsent("denied");
    setMounted(true);
  }, []);

  function grant() {
    window.localStorage.setItem(CONSENT_KEY, "granted");
    setConsent("granted");
  }

  function deny() {
    window.localStorage.setItem(CONSENT_KEY, "denied");
    setConsent("denied");
  }

  const showBanner =
    mounted && analytics.gaId && consent === "pending";

  return (
    <>
      {consent === "granted" && analytics.gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${analytics.gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${analytics.gaId}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {showBanner && (
        <div
          role="dialog"
          aria-live="polite"
          className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-[440px] z-50 border border-line bg-paper shadow-lg p-5"
        >
          <p className="font-display text-[16px] text-indigo">
            {lang === "fr" ? "Cookies et confidentialité" : "Cookies & privacy"}
          </p>
          <p className="mt-2 text-[13.5px] text-ink/75 leading-relaxed">
            {lang === "fr"
              ? "Nous mémorisons votre langue et, si vous acceptez, utilisons Google Analytics pour comprendre l'utilisation du site. "
              : "We remember your language and, if you accept, use Google Analytics to understand site usage. "}
            <Link href="/privacy" className="text-clay hover:underline">
              {uiStrings.contact.privacyLink[lang]}
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={grant}
              className="bg-clay text-bone px-4 py-2 text-[13px] font-medium hover:bg-clay-deep transition-colors"
            >
              {lang === "fr" ? "Accepter" : "Accept"}
            </button>
            <button
              type="button"
              onClick={deny}
              className="border border-line px-4 py-2 text-[13px] text-ink hover:border-clay transition-colors"
            >
              {lang === "fr" ? "Refuser" : "Decline"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
