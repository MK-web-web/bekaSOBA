"use client";

import { Container, Eyebrow } from "@/components/ui";
import BogolanDivider from "@/components/BogolanDivider";
import ContactForm from "@/components/ContactForm";
import LeadRouting from "@/components/LeadRouting";
import LocationMap from "@/components/LocationMap";
import WhatsAppButton from "@/components/WhatsAppButton";
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
          <h1 className="font-display text-[30px] sm:text-[36px] md:text-[48px] text-indigo max-w-[600px] leading-[1.1] text-balance">
            {t.title[lang]}
          </h1>
          <p className="mt-6 text-[16px] sm:text-[17px] text-ink/75 max-w-[560px] leading-relaxed">
            {t.sub[lang]}
          </p>
          <div className="mt-8">
            <WhatsAppButton source="contact" />
          </div>
        </Container>
      </section>

      <LeadRouting />

      <section className="py-16 bg-bone">
        <Container>
          <h2 className="font-display text-[26px] text-indigo mb-2">
            {lang === "fr" ? "Nous trouver" : "Find us"}
          </h2>
          <p className="text-[15px] text-ink/70 max-w-[560px] leading-relaxed">
            {lang === "fr"
              ? "bekaSOBA est basé à Lafiabougou, Bamako — à proximité de la Place de la Cane."
              : "bekaSOBA is based in Lafiabougou, Bamako — near Place de la Cane."}
          </p>
          <LocationMap />
        </Container>
      </section>

      <BogolanDivider tone="clay" />

      <section className="py-20" id="contact-form" aria-labelledby="contact-form-title">
        <Container>
          <h2
            id="contact-form-title"
            className="font-display text-[26px] text-indigo mb-10"
          >
            {lang === "fr" ? "Envoyez-nous un message" : "Send us a message"}
          </h2>
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16">
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-utility text-[11px] uppercase tracking-wide text-clay mb-2">
                    {t.email[lang]}
                  </h3>
                  <a
                    href={`mailto:${contact.emailPlaceholder}`}
                    className="text-[16px] text-indigo hover:text-clay transition-colors"
                  >
                    {contact.emailPlaceholder}
                  </a>
                </div>
                <div>
                  <h3 className="font-utility text-[11px] uppercase tracking-wide text-clay mb-2">
                    {t.whatsapp[lang]}
                  </h3>
                  <WhatsAppButton source="contact" variant="inline" />
                </div>
                <div>
                  <h3 className="font-utility text-[11px] uppercase tracking-wide text-clay mb-2">
                    {t.location[lang]}
                  </h3>
                  <p className="text-[16px] text-indigo">
                    {contact.location[lang]}
                  </p>
                </div>
              </div>

              <div className="mt-14 pt-8 border-t border-line">
                <h3 className="font-utility text-[11px] uppercase tracking-wide text-ink/50 mb-5">
                  {t.howItWorks[lang]}
                </h3>
                <ol className="space-y-4">
                  {engagementSteps.map((s, i) => (
                    <li key={s.title.en} className="flex gap-4">
                      <span className="font-utility text-[13px] text-clay shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-[14.5px] font-medium text-indigo">
                          {s.title[lang]}
                        </p>
                        <p className="text-[13.5px] text-ink/60 mt-0.5">
                          {s.detail[lang]}
                        </p>
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
