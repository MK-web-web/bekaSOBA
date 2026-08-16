"use client";

import { Container, Eyebrow } from "@/components/ui";
import BogolanDivider from "@/components/BogolanDivider";
import { uiStrings } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function Privacy() {
  const { lang } = useLanguage();
  const t = uiStrings.privacy;

  return (
    <>
      <section className="pt-16 pb-20 md:pt-24">
        <Container>
          <Eyebrow>{t.eyebrow[lang]}</Eyebrow>
          <h1 className="font-display text-[32px] sm:text-[36px] md:text-[44px] text-indigo max-w-[720px] leading-[1.1]">
            {t.title[lang]}
          </h1>
          <p className="mt-4 font-utility text-[12px] text-ink/50 uppercase tracking-wide">
            {t.updated[lang]}
          </p>
          <p className="mt-8 text-[16px] text-ink/75 max-w-[640px] leading-relaxed">
            {t.intro[lang]}
          </p>
        </Container>
      </section>

      <BogolanDivider tone="clay" />

      <section className="py-20 bg-bone">
        <Container>
          <div className="max-w-[640px] space-y-12">
            {t.sections.map((section) => (
              <div key={section.title.en}>
                <h2 className="font-display text-[22px] text-indigo mb-3">
                  {section.title[lang]}
                </h2>
                <p className="text-[15px] text-ink/70 leading-relaxed">
                  {section.body[lang]}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
