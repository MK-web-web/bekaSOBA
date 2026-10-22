"use client";

import Link from "next/link";
import BekasobaLogo from "./BekasobaLogo";
import { Container } from "./ui";
import { serviceLines, contact, uiStrings } from "@/lib/content";
import { site } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";
import BogolanDivider from "./BogolanDivider";

export default function Footer() {
  const { lang } = useLanguage();
  const t = uiStrings;

  return (
    <footer className="bg-indigo-deep text-bone mt-20 md:mt-32">
      <BogolanDivider tone="bone" />
      <Container className="py-12 md:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr] gap-10 md:gap-12">
          <div>
            <BekasobaLogo
              className="h-9 w-auto max-w-[192px] mb-4"
              variant="light"
            />
            <p className="mt-3 text-bone/70 text-[14px] max-w-[320px] leading-relaxed">
              {t.footer.tagline[lang]}
            </p>
            <div className="mt-6 font-utility text-[12px] text-bone/50">
              {t.footer.addressLabel[lang]}
              {contact.location[lang]}
            </div>
            <p className="mt-2 font-utility text-[12px] text-bone/50 leading-relaxed">
              {uiStrings.contact.hours[lang]}
            </p>
          </div>

          <div>
            <div className="font-utility text-[11px] uppercase tracking-[0.14em] text-mint mb-4">
              {t.footer.servicesTitle[lang]}
            </div>
            <ul className="space-y-2.5 text-[14px]">
              {serviceLines.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-bone/80 hover:text-bone transition-colors"
                  >
                    {s.code} — {s.shortName[lang]}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/entreprises"
                  className="text-bone/80 hover:text-bone transition-colors"
                >
                  {t.nav.business[lang]}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-utility text-[11px] uppercase tracking-[0.14em] text-mint mb-4">
              {t.footer.firmTitle[lang]}
            </div>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <Link href="/about" className="text-bone/80 hover:text-bone transition-colors">{t.nav.about[lang]}</Link>
              </li>
              <li>
                <Link href="/pricing" className="text-bone/80 hover:text-bone transition-colors">{t.footer.pricingLink[lang]}</Link>
              </li>
              <li>
                <Link href="/contact" className="text-bone/80 hover:text-bone transition-colors">{t.nav.contact[lang]}</Link>
              </li>
              <li>
                <Link href="/about#network" className="text-bone/80 hover:text-bone transition-colors">
                  {t.home.networkEyebrow[lang]}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-bone/80 hover:text-bone transition-colors">
                  {t.contact.privacyLink[lang]}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-bone/15 flex flex-col md:flex-row justify-between gap-2 text-[12px] text-bone/50 font-utility pb-4 sm:pb-0">
          <span>&copy; {new Date().getFullYear()} {site.name}. {t.footer.rights[lang]}</span>
          <span>bekasoba.com · Bamako, Mali</span>
        </div>
        <p className="mt-4 text-[10px] text-bone/40 font-utility leading-relaxed">
          {t.footer.legalLine[lang]}
        </p>
      </Container>
    </footer>
  );
}
