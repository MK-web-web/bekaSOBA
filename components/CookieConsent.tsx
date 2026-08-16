"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { uiStrings } from "@/lib/content";
import { analytics } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

const CONSENT_KEY = "bekasoba-analytics-consent";

export default function CookieConsent() {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!analytics.gaId) return;
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (!stored) setVisible(true);
  }, []);

  if (!visible || !analytics.gaId) return null;

  function accept() {
    window.localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  }

  return (
    <div className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-[420px] z-50 border border-line bg-paper shadow-lg p-5">
      <p className="text-[13.5px] text-ink/75 leading-relaxed">
        {lang === "fr"
          ? "Ce site utilise Google Analytics pour comprendre comment il est utilisé. En continuant, vous acceptez notre "
          : "This site uses Google Analytics to understand how it is used. By continuing, you accept our "}
        <Link href="/privacy" className="text-clay hover:underline">
          {uiStrings.contact.privacyLink[lang]}
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={accept}
        className="mt-4 bg-clay text-bone px-4 py-2 text-[13px] font-medium hover:bg-clay-deep transition-colors"
      >
        {lang === "fr" ? "Accepter" : "Accept"}
      </button>
    </div>
  );
}
