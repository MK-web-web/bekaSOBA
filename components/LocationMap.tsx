"use client";

import { contact } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function LocationMap() {
  const { lang } = useLanguage();
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&hl=${lang}&z=16&output=embed`;

  return (
    <div className="mt-10">
      <div className="border border-line overflow-hidden bg-paper">
        <iframe
          title={
            lang === "fr"
              ? "Carte — bekaSOBA, Lafiabougou, Bamako"
              : "Map — bekaSOBA, Lafiabougou, Bamako"
          }
          src={embedSrc}
          className="w-full h-[320px] md:h-[380px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <p className="mt-4 text-[14px] text-ink/65 leading-relaxed">
        {contact.location[lang]}{" "}
        <a
          href={contact.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-deep underline underline-offset-2"
        >
          {lang === "fr" ? "Ouvrir dans Google Maps →" : "Open in Google Maps →"}
        </a>
      </p>
    </div>
  );
}
