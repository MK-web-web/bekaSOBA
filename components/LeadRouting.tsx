"use client";

import Link from "next/link";
import { Container } from "@/components/ui";
import WhatsAppButton from "@/components/WhatsAppButton";
import { contact, uiStrings } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function LeadRouting() {
  const { lang } = useLanguage();
  const t = uiStrings.contact.leadRouting;

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
            <a
              href={`mailto:${contact.emailPlaceholder}?subject=${encodeURIComponent(
                lang === "fr"
                  ? "Demande bekaSOBA — entretien découverte"
                  : "bekaSOBA inquiry — discovery conversation"
              )}`}
              className="inline-flex items-center justify-center w-full border border-line px-5 py-3.5 text-[15px] font-medium text-ink hover:border-clay hover:text-clay transition-colors"
            >
              {t.emailCta[lang]}
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
