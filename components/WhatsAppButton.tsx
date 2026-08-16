"use client";

import { buildWhatsAppUrl, trackLeadClick, type LeadSource } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/i18n";

export default function WhatsAppButton({
  source,
  serviceName,
  variant = "primary",
  className = "",
  label,
}: {
  source: LeadSource;
  serviceName?: string;
  variant?: "primary" | "inline" | "card";
  className?: string;
  label?: string;
}) {
  const { lang } = useLanguage();
  const href = buildWhatsAppUrl({ lang, serviceName, source });
  const text =
    label ??
    (lang === "fr" ? "Écrire sur WhatsApp" : "Message on WhatsApp");

  const styles = {
    primary:
      "inline-flex items-center gap-2 bg-clay text-bone px-6 py-3.5 text-[15px] font-medium hover:bg-clay-deep transition-colors",
    inline:
      "inline-flex items-center gap-2 text-clay hover:text-clay-deep text-[16px] font-medium transition-colors",
    card: "inline-flex items-center justify-center gap-2 w-full bg-clay text-bone px-5 py-3.5 text-[15px] font-medium hover:bg-clay-deep transition-colors",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles[variant]} ${className}`}
      onClick={() => trackLeadClick(source, serviceName)}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39c1.44.79 3.06 1.2 4.72 1.2h.02c5.46 0 9.9-4.45 9.9-9.91C21.94 6.45 17.5 2 12.04 2zm5.8 14.05c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.12-.42-.13-.95-.31-1.63-.6-2.87-1.24-4.74-4.13-4.88-4.32-.14-.19-1.17-1.56-1.17-2.97 0-1.41.74-2.11 1-2.4.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.15.31-.3.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.17.28.75 1.24 1.61 2.01 1.11.99 2.04 1.3 2.32 1.44.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.29.38-.24.63-.14.26.1 1.65.78 1.93.92.28.14.47.21.53.33.07.12.07.68-.17 1.35z"/>
      </svg>
      {text}
    </a>
  );
}
