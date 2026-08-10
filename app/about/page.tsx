"use client";

import { Container, Eyebrow, Button } from "@/components/ui";
import BogolanDivider from "@/components/BogolanDivider";
import { credentials, approach, uiStrings, networkLinks } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { lang } = useLanguage();
  const t = uiStrings.about;
  const b = uiStrings.buttons;

  return (
    <>
      <section className="pt-16 pb-20 md:pt-24">
        <Container>
          <Eyebrow>{t.eyebrow[lang]}</Eyebrow>
          <h1 className="font-display text-[32px] sm:text-[36px] md:text-[48px] text-indigo max-w-[720px] leading-[1.1]">
            {uiStrings.footer.tagline[lang]}
          </h1>
        </Container>
      </section>

      <BogolanDivider tone="clay" />

      <section className="py-20 bg-bone">
        <Container>
          <div className="grid md:grid-cols-2 gap-14">
            <div>
              <Eyebrow>{t.positioningEyebrow[lang]}</Eyebrow>
              <h2 className="font-display text-[24px] sm:text-[26px] text-indigo mb-4">
                {t.positioningTitle[lang]}
              </h2>
              <p className="text-[15px] text-ink/70 leading-relaxed">
                {t.positioningText[lang]}
              </p>
            </div>
            <div>
              <Eyebrow>{t.shortEyebrow[lang]}</Eyebrow>
              <h2 className="font-display text-[24px] sm:text-[26px] text-indigo mb-4">
                {t.shortTitle[lang]}
              </h2>
              <p className="text-[15px] text-ink/70 leading-relaxed">
                {t.shortText[lang]}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="max-w-[560px] mb-14">
            <Eyebrow>{t.approachEyebrow[lang]}</Eyebrow>
            <h2 className="font-display text-[28px] sm:text-[32px] text-indigo">
              {t.approachTitle[lang]}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {approach.map((a, i) => (
              <div key={a.title.en} className="flex gap-5">
                <span className="font-utility text-[13px] text-clay pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[19px] text-indigo mb-1.5">
                    {a.title[lang]}
                  </h3>
                  <p className="text-[14.5px] text-ink/70 leading-relaxed">
                    {a.detail[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <BogolanDivider tone="clay" />

      <section className="py-24 bg-indigo text-bone">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16">
            <div>
              <Eyebrow>{t.credEyebrow[lang]}</Eyebrow>
              <h2 className="font-display text-[26px] sm:text-[30px] leading-tight">
                {t.credTitle[lang]}
              </h2>
              <p className="mt-5 text-[14.5px] text-bone/75 leading-relaxed max-w-[420px]">
                {t.credText[lang]}
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {credentials.map((c) => (
                <li
                  key={c.en}
                  className="flex items-start gap-3 text-[14.5px] border-t border-bone/20 pt-4"
                >
                  <span className="text-clay">—</span>
                  {c[lang]}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-[24px] sm:text-[26px] text-indigo max-w-[440px]">
              {t.closingTitle[lang]}
            </h2>
            <p className="mt-3 text-[15px] text-ink/70 max-w-[460px]">
              {t.closingText[lang]}
            </p>
          </div>
          <Button href="/contact" variant="secondary" className="shrink-0">
            {b.startNow[lang]}
          </Button>
        </Container>
      </section>

      <BogolanDivider tone="clay" />

      <section className="py-24 bg-bone" id="network">
        <Container>
          <div className="max-w-[640px] mb-12">
            <Eyebrow>{t.networkEyebrow[lang]}</Eyebrow>
            <h2 className="font-display text-[26px] sm:text-[28px] text-indigo mb-4">
              {t.networkTitle[lang]}
            </h2>
            <p className="text-[14.5px] text-ink/70 leading-relaxed">
              {t.networkText[lang]}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {networkLinks.map((org) => (
              <a
                key={org.url}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col border border-line bg-paper p-6 hover:border-clay transition-colors min-h-[180px]"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="font-utility text-[10px] uppercase tracking-wide text-clay border border-clay/30 px-2 py-0.5">
                    {org.kind === "sister"
                      ? t.sisterOrgLabel[lang]
                      : t.founderProfileLabel[lang]}
                  </span>
                  <span className="font-utility text-[12px] text-ink/40 group-hover:text-clay transition-colors shrink-0">
                    ↗
                  </span>
                </div>
                <h3 className="font-display text-[18px] text-indigo mb-2 leading-snug">
                  {org.name}
                </h3>
                <p className="text-[13.5px] text-ink/65 leading-relaxed flex-1">
                  {org.description[lang]}
                </p>
                <span className="mt-4 font-utility text-[11px] text-ink/45 group-hover:text-clay transition-colors">
                  {org.displayUrl}
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24" id="collaboration">
        <Container>
          <div className="max-w-[640px]">
            <Eyebrow>{t.collaborationEyebrow[lang]}</Eyebrow>
            <h2 className="font-display text-[26px] sm:text-[28px] text-indigo mb-4">
              {t.collaborationTitle[lang]}
            </h2>
            <p className="text-[14.5px] text-ink/70 leading-relaxed mb-8">
              {t.collaborationText[lang]}
            </p>
            <Button href="/contact" variant="ghost">
              {b.startDiscovery[lang]}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
