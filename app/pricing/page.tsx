"use client";

import { Container, Eyebrow, Button } from "@/components/ui";
import BogolanDivider from "@/components/BogolanDivider";
import { pricingModels, engagementSteps, serviceLines, uiStrings, launchPriceLabels } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import LaunchPriceTable from "@/components/LaunchPriceTable";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Pricing() {
  const { lang } = useLanguage();
  const t = uiStrings.pricing;
  const b = uiStrings.buttons;

  return (
    <>
      <section className="pt-16 pb-16 md:pt-24">
        <Container>
          <Eyebrow>{t.eyebrow[lang]}</Eyebrow>
          <h1 className="font-display text-[30px] sm:text-[36px] md:text-[48px] text-indigo max-w-[680px] leading-[1.1] text-balance">
            {t.title[lang]}
          </h1>
          <p className="mt-6 text-[16px] sm:text-[17px] text-ink/75 max-w-[600px] leading-relaxed">
            {t.sub[lang]}
          </p>
        </Container>
      </section>

      <BogolanDivider tone="clay" />

      <section className="py-20 bg-bone">
        <Container>
          <div className="grid md:grid-cols-3 gap-px bg-line">
            {pricingModels.map((m, i) => (
              <div key={m.name.en} className="bg-bone p-8 flex flex-col">
                <span className="font-utility text-[13px] text-clay mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-[20px] text-indigo mb-3 leading-snug">
                  {m.name[lang]}
                </h2>
                <p className="text-[14.5px] text-ink/70 leading-relaxed">
                  {m.detail[lang]}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <LaunchPriceTable />

      <section className="py-20">
        <Container>
          <div className="max-w-[680px]">
            <Eyebrow>{launchPriceLabels.title[lang]}</Eyebrow>
            <h2 className="font-display text-[28px] text-indigo mb-6">
              {launchPriceLabels.conditionsTitle[lang]}
            </h2>
            <ul className="space-y-4">
              {launchPriceLabels.conditions.map((condition) => (
                <li key={condition.en} className="flex items-start gap-3 text-[14.5px] text-ink/75 leading-relaxed">
                  <span className="text-clay mt-0.5">—</span>
                  {condition[lang]}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <WhatsAppButton source="pricing" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="max-w-[560px] mb-14">
            <Eyebrow>{t.byServiceEyebrow[lang]}</Eyebrow>
            <h2 className="font-display text-[30px] text-indigo">
              {t.byServiceTitle[lang]}
            </h2>
          </div>
          <div className="grid gap-5">
            {serviceLines.map((s) => (
              <div
                key={s.slug}
                className="grid md:grid-cols-[1fr_1.3fr] gap-6 border-t border-line pt-6"
              >
                <div>
                  <span className="font-utility text-[12px] text-clay">
                    {s.code}
                  </span>
                  <h3 className="font-display text-[18px] text-indigo mt-1">
                    {s.name[lang]}
                  </h3>
                </div>
                <p className="text-[14.5px] text-ink/70 leading-relaxed">
                  {s.pricing[lang]}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <BogolanDivider tone="clay" />

      <section className="py-24 bg-indigo text-bone">
        <Container>
          <div className="max-w-[560px] mb-14">
            <Eyebrow>{t.engageEyebrow[lang]}</Eyebrow>
            <h2 className="font-display text-[30px]">{t.engageTitle[lang]}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {engagementSteps.map((s, i) => (
              <div key={s.title.en} className="relative">
                <span className="font-utility text-[28px] text-clay">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[19px] mt-3 mb-2">
                  {s.title[lang]}
                </h3>
                <p className="text-[14.5px] text-bone/75 leading-relaxed">
                  {s.detail[lang]}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="font-display text-[26px] text-indigo max-w-[440px]">
            {t.closing[lang]}
          </h2>
          <Button href="/contact" variant="secondary" className="shrink-0">
            {b.startDiscovery[lang]}
          </Button>
        </Container>
      </section>
    </>
  );
}
