"use client";

import Link from "next/link";
import { Container, Eyebrow, Button } from "@/components/ui";
import BogolanDivider from "@/components/BogolanDivider";
import ServiceCard from "@/components/ServiceCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  serviceLines,
  clientTypes,
  approach,
  credentials,
  uiStrings,
  networkLinks,
} from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function HomePage() {
  const { lang } = useLanguage();
  const t = uiStrings;

  return (
    <>
      <section className="relative overflow-hidden bg-paper pt-16 pb-20 md:pt-24 md:pb-28">
        <Container>
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
            <div>
              <Eyebrow>{t.home.eyebrow[lang]}</Eyebrow>
              <h1 className="font-display text-[30px] sm:text-[40px] md:text-[56px] text-indigo leading-[1.05] max-w-[560px] text-balance">
                {t.home.heroTitle[lang]}
              </h1>
              <p className="mt-6 text-[16px] sm:text-[17px] text-ink/75 max-w-[480px] leading-relaxed">
                {t.home.heroSub[lang]}
              </p>
              <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
                <WhatsAppButton source="home" />
                <Button href="/contact" variant="secondary">
                  {t.buttons.startDiscovery[lang]}
                </Button>
                <Button href="/services" variant="ghost">
                  {t.buttons.viewServices[lang]}
                </Button>
              </div>
              <p className="mt-8 font-utility text-[12px] text-ink/50 tracking-wide">
                {t.home.credLine[lang]}
              </p>
            </div>

            <div className="relative bg-indigo text-bone p-8 md:p-10">
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--color-bone) 1px, transparent 1px), linear-gradient(90deg, var(--color-bone) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div className="relative">
                <div className="font-utility text-[11px] tracking-[0.16em] text-clay uppercase mb-1">
                  {t.home.blueprintTag[lang]}
                </div>
                <div className="font-display text-[20px] mb-8">
                  {t.home.blueprintTitle[lang]}
                </div>
                <ul className="space-y-5">
                  {serviceLines.map((s) => (
                    <li
                      key={s.slug}
                      className="flex items-baseline gap-4 pb-5 border-b border-bone/15 last:border-0 last:pb-0"
                    >
                      <span className="font-utility text-[13px] text-clay w-7 shrink-0">
                        {s.code}
                      </span>
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-[14.5px] leading-snug hover:text-clay transition-colors"
                      >
                        {s.name[lang]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <BogolanDivider tone="clay" />

      <section className="py-24 bg-bone">
        <Container>
          <div className="max-w-[560px] mb-14">
            <Eyebrow>{t.home.whoEyebrow[lang]}</Eyebrow>
            <h2 className="font-display text-[32px] text-indigo">
              {t.home.whoTitle[lang]}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-line">
            {clientTypes.map((c) => (
              <div key={c.title.en} className="bg-bone p-8">
                <h3 className="font-display text-[19px] text-indigo mb-2">
                  {c.title[lang]}
                </h3>
                <p className="text-[14.5px] text-ink/70 leading-relaxed">
                  {c.detail[lang]}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-[560px]">
              <Eyebrow>{t.home.deliverEyebrow[lang]}</Eyebrow>
              <h2 className="font-display text-[32px] text-indigo">
                {t.home.deliverTitle[lang]}
              </h2>
            </div>
            <Link
              href="/services"
              className="font-utility text-[13px] uppercase tracking-wide text-clay hover:text-clay-deep"
            >
              {t.buttons.seeFullMenu[lang]}
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceLines.map((s) => (
              <ServiceCard key={s.slug} {...s} />
            ))}
          </div>
        </Container>
      </section>

      <BogolanDivider tone="clay" />

      <section className="py-24 bg-bone">
        <Container>
          <div className="max-w-[560px] mb-14">
            <Eyebrow>{t.home.approachEyebrow[lang]}</Eyebrow>
            <h2 className="font-display text-[32px] text-indigo">
              {t.home.approachTitle[lang]}
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

      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
            <div>
              <Eyebrow>{t.home.whyEyebrow[lang]}</Eyebrow>
              <h2 className="font-display text-[32px] text-indigo leading-tight">
                {t.home.whyTitle[lang]}
              </h2>
              <p className="mt-5 text-[15px] text-ink/70 leading-relaxed max-w-[440px]">
                {t.home.whyText[lang]}
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {credentials.map((c) => (
                <li
                  key={c.en}
                  className="flex items-start gap-3 text-[14.5px] text-ink/80 border-t border-line pt-4"
                >
                  <span className="text-clay">—</span>
                  {c[lang]}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <BogolanDivider tone="clay" />

      <section className="py-24 bg-bone">
        <Container>
          <div className="max-w-[640px] mb-12">
            <Eyebrow>{t.home.networkEyebrow[lang]}</Eyebrow>
            <h2 className="font-display text-[28px] sm:text-[32px] text-indigo mb-4">
              {t.home.networkTitle[lang]}
            </h2>
            <p className="text-[15px] text-ink/70 leading-relaxed">
              {t.home.networkText[lang]}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {networkLinks
              .filter((org) => org.kind === "sister")
              .map((org) => (
                <a
                  key={org.url}
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-line bg-paper p-6 hover:border-clay transition-colors"
                >
                  <div className="font-utility text-[10px] uppercase tracking-wide text-clay border border-clay/30 px-2 py-0.5 inline-block mb-4">
                    {t.about.sisterOrgLabel[lang]}
                  </div>
                  <h3 className="font-display text-[18px] text-indigo mb-2">
                    {org.name}
                  </h3>
                  <p className="text-[14px] text-ink/65 leading-relaxed">
                    {org.description[lang]}
                  </p>
                  <span className="mt-4 inline-block font-utility text-[11px] text-ink/45 group-hover:text-clay transition-colors">
                    {org.displayUrl} ↗
                  </span>
                </a>
              ))}
          </div>
          <Link
            href="/about#network"
            className="font-utility text-[13px] uppercase tracking-wide text-clay hover:text-clay-deep"
          >
            {t.home.networkLink[lang]}
          </Link>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="bg-clay text-bone p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-[28px] md:text-[32px] leading-tight max-w-[440px]">
                {t.home.ctaTitle[lang]}
              </h2>
              <p className="mt-3 text-bone/85 text-[15px] max-w-[420px]">
                {t.home.ctaText[lang]}
              </p>
            </div>
            <Button href="/contact" variant="primary" className="shrink-0">
              {t.buttons.startNow[lang]}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
