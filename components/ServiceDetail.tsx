"use client";

import { Container, Eyebrow, Button } from "@/components/ui";
import BogolanDivider from "@/components/BogolanDivider";
import ServiceCard from "@/components/ServiceCard";
import { serviceLines, uiStrings } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

type Service = (typeof serviceLines)[number];

export default function ServiceDetail({ service }: { service: Service }) {
  const { lang } = useLanguage();
  const t = uiStrings;
  const others = serviceLines.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="pt-16 pb-16 md:pt-24">
        <Container>
          <Eyebrow>{service.code} — {t.services.eyebrow[lang]}</Eyebrow>
          <h1 className="font-display text-[32px] md:text-[44px] text-indigo max-w-[720px] leading-[1.12]">
            {service.name[lang]}
          </h1>
          <p className="mt-6 text-[17px] text-ink/75 max-w-[600px] leading-relaxed">
            {service.summary[lang]}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="secondary">
              {t.buttons.discussService[lang]}
            </Button>
            <Button href="/pricing" variant="ghost">
              {t.buttons.seePricing[lang]}
            </Button>
          </div>
        </Container>
      </section>

      <BogolanDivider tone="clay" />

      <section className="py-20 bg-bone">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
            <div>
              <Eyebrow>{t.services.whoFor[lang]}</Eyebrow>
              <h2 className="font-display text-[24px] text-indigo leading-snug">
                {service.who[lang]}
              </h2>
            </div>
            <div>
              <Eyebrow>{t.services.whatsIncluded[lang]}</Eyebrow>
              <ul className="space-y-3.5">
                {service.includes.map((item) => (
                  <li
                    key={item[lang]}
                    className="flex items-start gap-3 text-[14.5px] text-ink/80 leading-relaxed"
                  >
                    <span className="text-clay mt-0.5 shrink-0">—</span>
                    {item[lang]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="bg-indigo text-bone p-10 md:p-12">
            <div className="font-utility text-[11px] uppercase tracking-[0.16em] text-clay mb-3">
              {t.services.pricingApproach[lang]}
            </div>
            <p className="text-[16px] leading-relaxed max-w-[680px]">
              {service.pricing[lang]}
            </p>
          </div>
        </Container>
      </section>

      <BogolanDivider tone="clay" />

      <section className="py-20">
        <Container>
          <Eyebrow>{t.services.otherServices[lang]}</Eyebrow>
          <h2 className="font-display text-[26px] text-indigo mb-10">
            {t.services.exploreRest[lang]}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {others.map((s) => (
              <ServiceCard key={s.slug} {...s} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
