"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui";
import WhatsAppButton from "@/components/WhatsAppButton";
import { contact, uiStrings } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function LeadRouting() {
  const { lang } = useLanguage();
  const t = uiStrings.contact.leadRouting;
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle"
  );
  const copyTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (copyTimeout.current) clearTimeout(copyTimeout.current);
    },
    []
  );

  const copyEmail = async () => {
    if (!navigator.clipboard?.writeText) {
      setCopyStatus("error");
      return;
    }

    try {
      await navigator.clipboard.writeText(contact.emailPlaceholder);
      setCopyStatus("copied");
      if (copyTimeout.current) clearTimeout(copyTimeout.current);
      copyTimeout.current = setTimeout(() => setCopyStatus("idle"), 2000);
    } catch (error) {
      console.error("Could not copy the contact email address.", error);
      setCopyStatus("error");
    }
  };

  return (
    <section className="py-12 bg-bone border-y border-line" aria-labelledby="lead-routing-title">
      <Container>
        <h2
          id="lead-routing-title"
          className="font-display text-[26px] sm:text-[28px] text-indigo mb-3"
        >
          {t.title[lang]}
        </h2>
        <p className="text-[15px] text-ink/70 max-w-[640px] mb-10 leading-relaxed">
          {t.sub[lang]}
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          <article className="border border-line bg-paper p-6 flex flex-col">
            <h3 className="font-display text-[18px] text-indigo mb-2">
              {t.whatsappTitle[lang]}
            </h3>
            <p className="text-[14px] text-ink/70 leading-relaxed flex-1 mb-6">
              {t.whatsappText[lang]}
            </p>
            <WhatsAppButton source="contact" variant="card" />
          </article>

          <article className="border border-line bg-paper p-6 flex flex-col">
            <h3 className="font-display text-[18px] text-indigo mb-2">
              {t.emailTitle[lang]}
            </h3>
            <p className="text-[14px] text-ink/70 leading-relaxed flex-1 mb-6">
              {t.emailText[lang]}
            </p>
            <p className="text-[18px] sm:text-[20px] text-indigo mb-4 break-all">
              {contact.emailPlaceholder}
            </p>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center justify-center w-full border border-line px-5 py-3.5 text-[15px] font-medium text-ink hover:border-clay hover:text-clay transition-colors"
            >
              {copyStatus === "copied"
                ? lang === "fr"
                  ? "Adresse copiée"
                  : "Address copied"
                : lang === "fr"
                  ? "Copier l'adresse"
                  : "Copy address"}
            </button>
            <p className="mt-2 min-h-5 text-[12px] text-ink/60" aria-live="polite">
              {copyStatus === "error" &&
                (lang === "fr"
                  ? "Impossible de copier l'adresse."
                  : "Could not copy the address.")}
            </p>
            <a
              href={`mailto:${contact.emailPlaceholder}?subject=${encodeURIComponent(
                lang === "fr"
                  ? "Demande bekaSOBA — entretien découverte"
                  : "bekaSOBA inquiry — discovery call"
              )}`}
              className="mt-2 inline-block text-[12px] text-ink/65 underline underline-offset-4 hover:text-clay transition-colors"
            >
              {lang === "fr" ? "Ouvrir ma messagerie" : "Open my email app"}
            </a>
          </article>

          <article className="border border-line bg-paper p-6 flex flex-col">
            <h3 className="font-display text-[18px] text-indigo mb-2">
              {t.formTitle[lang]}
            </h3>
            <p className="text-[14px] text-ink/70 leading-relaxed flex-1 mb-6">
              {t.formText[lang]}
            </p>
            <Link
              href="#contact-form"
              className="inline-flex items-center justify-center w-full border border-line px-5 py-3.5 text-[15px] font-medium text-ink hover:border-clay hover:text-clay transition-colors"
            >
              {t.formCta[lang]}
            </Link>
          </article>
        </div>
      </Container>
    </section>
  );
}
