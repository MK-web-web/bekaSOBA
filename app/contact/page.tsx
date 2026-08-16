"use client";

import { Container, Eyebrow } from "@/components/ui";
import BogolanDivider from "@/components/BogolanDivider";
import ContactForm from "@/components/ContactForm";
import { contact, engagementSteps, uiStrings } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function Contact() {
  const { lang } = useLanguage();
  const t = uiStrings.contact;

  return (
    <>
      <section className="pt-16 pb-16 md:pt-24">
        <Container>
          <Eyebrow>{t.eyebrow[lang]}</Eyebrow>
          <h1 className="font-display text-[36px] md:text-[48px] text-indigo max-w-[600px] leading-[1.1]">
            {t.title[lang]}
          </h1>
          <p className="mt-6 text-[17px] text-ink/75 max-w-[560px] leading-relaxed">
            {t.sub[lang]}
          </p>
        </Container>
      </section>

      <BogolanDivider tone="clay" />

      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16">
            <div>
              <div className="space-y-8">
                <div>
                  <div className="font-utility text-[11px] uppercase tracking-wide text-clay mb-2">
                    {t.email[lang]}
                  </div>
                  <a
                    href={`mailto:${contact.emailPlaceholder}`}
                    className="text-[16px] text-indigo hover:text-clay transition-colors"
                  >
                    {contact.emailPlaceholder}
                  </a>
                </div>
                <div>
                  <div className="font-utility text-[11px] uppercase tracking-wide text-clay mb-2">
                    {t.whatsapp[lang]}
                  </div>
                  <a
                    href={`https://wa.me/${contact.whatsappPlaceholder.replace(/[^0-9]/g, "")}`}
                    className="text-[16px] text-indigo hover:text-clay transition-colors"
                  >
                    {contact.whatsappPlaceholder}
                  </a>
                </div>
                <div>
                  <div className="font-utility text-[11px] uppercase tracking-wide text-clay mb-2">
                    {t.location[lang]}
                  </div>
                  <span className="text-[16px] text-indigo">
                    {contact.location[lang]}
                  </span>
                </div>
              </div>

              <div className="mt-14 pt-8 border-t border-line">
                <div className="font-utility text-[11px] uppercase tracking-wide text-ink/50 mb-5">
                  {t.howItWorks[lang]}
                </div>
                <ol className="space-y-4">
                  {engagementSteps.map((s, i) => (
                    <li key={s.title.en} className="flex gap-4">
                      <span className="font-utility text-[13px] text-clay shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="text-[14.5px] font-medium text-indigo">
                          {s.title[lang]}
                        </div>
                        <div className="text-[13.5px] text-ink/60 mt-0.5">
                          {s.detail[lang]}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
