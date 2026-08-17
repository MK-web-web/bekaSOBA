"use client";

import { Container, Eyebrow, Button } from "@/components/ui";
import BogolanDivider from "@/components/BogolanDivider";
import WhatsAppButton from "@/components/WhatsAppButton";
import { serviceLines, uiStrings } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function Services() {
  const { lang } = useLanguage();
  const t = uiStrings.services;
  const b = uiStrings.buttons;

  return (
    <>
      <section className="pt-16 pb-16 md:pt-24">
        <Container>
          <Eyebrow>{t.eyebrow[lang]}</Eyebrow>
          <h1 className="font-display text-[36px] md:text-[48px] text-indigo max-w-[680px] leading-[1.1]">
            {t.title[lang]}
          </h1>
          <p className="mt-6 text-[17px] text-ink/75 max-w-[600px] leading-relaxed">
            {t.sub[lang]}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppButton source="services" />
            <Button href="/contact" variant="ghost">
              {b.startDiscovery[lang]}
            </Button>
          </div>
        </Container>
      </section>

      <BogolanDivider tone="clay" />

      <section className="py-20" aria-labelledby="services-list-title">
        <Container>
          <h2
            id="services-list-title"
            className="font-display text-[28px] text-indigo mb-10"
          >
            {lang === "fr" ? "Nos six pôles de service" : "Our six service lines"}
          </h2>
          <div className="grid gap-5">
            {serviceLines.map((s) => (
              <article
                key={s.slug}
                className="grid md:grid-cols-[80px_1fr_auto] gap-6 md:gap-10 items-start md:items-center border border-line p-8 hover:border-clay transition-colors group"
              >
                <span className="font-utility text-[13px] text-clay">
                  {s.code}
                </span>
                <div>
                  <h3 className="font-display text-[22px] text-indigo mb-2">
                    {s.name[lang]}
                  </h3>
                  <p className="text-[14.5px] text-ink/70 leading-relaxed max-w-[560px]">
                    {s.short[lang]} {s.who[lang]}
                  </p>
                </div>
                <a
                  href={`/services/${s.slug}`}
                  className="font-utility text-[13px] uppercase tracking-wide text-clay whitespace-nowrap group-hover:text-clay-deep"
                >
                  {b.learnMore[lang]}
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-12">
        <Container className="bg-indigo text-bone p-10 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-[24px] md:text-[28px] leading-tight max-w-[480px]">
              {t.ctaTitle[lang]}
            </h2>
            <p className="mt-3 text-[15px] text-bone/85 max-w-[480px] leading-relaxed">
              {t.ctaText[lang]}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <WhatsAppButton source="services" />
            <Button href="/contact" variant="primary">
              {b.startDiscovery[lang]}
            </Button>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-bone border border-line p-10">
          <h2 className="font-display text-[24px] text-indigo max-w-[420px]">
            {uiStrings.pricing.closing[lang]}
          </h2>
          <Button href="/pricing" variant="secondary" className="shrink-0">
            {b.seePricing[lang]}
          </Button>
        </Container>
      </section>
    </>
  );
}
