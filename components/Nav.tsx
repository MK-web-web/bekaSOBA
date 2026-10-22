"use client";

import Link from "next/link";
import { useState } from "react";
import BekasobaLogo from "./BekasobaLogo";
import { Container } from "./ui";
import { serviceLines, uiStrings } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { lang, toggle } = useLanguage();
  const t = uiStrings.nav;

  const sisterLabel = uiStrings.home.networkEyebrow[lang];

  const primaryLinks = [
    { href: "/about", label: t.about[lang] },
    { href: "/pricing", label: t.pricing[lang] },
    { href: "/contact", label: t.contact[lang] },
  ];

  const sisterLink = {
    href: "/about#network",
    label: sisterLabel,
  };

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
      <Container className="flex items-center justify-between gap-3 min-h-[68px] py-2 lg:min-h-[76px] lg:py-0">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3 group"
          aria-label={`bekaSOBA — ${t.tagline[lang]}`}
        >
          <BekasobaLogo className="h-7 w-auto max-w-[140px] sm:h-8 sm:max-w-[168px] lg:h-9 lg:max-w-[192px]" />
        </Link>

        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6 font-body text-[14px] xl:text-[15px] min-w-0 shrink">
          <div
            className="relative shrink-0"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-ink hover:text-clay transition-colors whitespace-nowrap">
              {t.services[lang]}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[320px]">
                <div className="bg-paper border border-line shadow-lg p-2">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-[13px] font-utility uppercase tracking-wide text-clay hover:bg-bone-dim"
                  >
                    {t.allServices[lang]}
                  </Link>
                  {serviceLines.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block px-4 py-2.5 text-[14px] text-ink hover:bg-bone-dim border-t border-line/60"
                    >
                      {s.name[lang]}
                    </Link>
                  ))}
                  <Link
                    href="/entreprises"
                    className="block px-4 py-2.5 text-[14px] text-ink hover:bg-bone-dim border-t border-line/60"
                  >
                    {t.business[lang]}
                  </Link>
                </div>
              </div>
            )}
          </div>

          {primaryLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-ink hover:text-clay transition-colors whitespace-nowrap shrink-0"
            >
              {l.label}
            </Link>
          ))}

          <Link
            href={sisterLink.href}
            className="hidden xl:inline text-ink hover:text-clay transition-colors whitespace-nowrap shrink-0"
          >
            {sisterLink.label}
          </Link>

          <button
            onClick={toggle}
            className="font-utility text-[11px] xl:text-[12px] tracking-wide border border-line px-2.5 xl:px-3 py-1.5 hover:border-clay hover:text-clay transition-colors whitespace-nowrap shrink-0"
            aria-label="Switch language"
          >
            {lang === "fr" ? "FR / EN" : "EN / FR"}
          </button>

          <Link
            href="/contact"
            className="bg-indigo text-bone px-4 xl:px-5 py-2 xl:py-2.5 text-[13px] xl:text-[14px] font-medium hover:bg-indigo-deep transition-colors whitespace-nowrap shrink-0"
          >
            <span className="hidden xl:inline">{t.startConversation[lang]}</span>
            <span className="xl:hidden">{t.contact[lang]}</span>
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 lg:hidden shrink-0">
          <button
            onClick={toggle}
            className="font-utility text-[11px] border border-line px-2.5 py-1.5"
            aria-label="Switch language"
          >
            {lang === "fr" ? "FR" : "EN"}
          </button>
          <button
            className="flex flex-col gap-1.5 p-2 -mr-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block w-6 h-[1.5px] bg-ink transition-transform ${open ? "rotate-45 translate-y-[6.5px]" : ""}`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-ink transition-transform ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
            />
          </button>
        </div>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-line bg-paper max-h-[calc(100dvh-68px)] overflow-y-auto">
          <Container className="flex flex-col py-4 gap-1">
            <div className="font-utility text-[11px] uppercase tracking-wide text-ink/50 pt-2 pb-1">
              {t.services[lang]}
            </div>
            <Link
              href="/services"
              className="py-2 text-clay font-medium"
              onClick={closeMenu}
            >
              {t.allServices[lang]}
            </Link>
            {serviceLines.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="py-2 text-ink pl-3"
                onClick={closeMenu}
              >
                {s.name[lang]}
              </Link>
            ))}
            <Link
              href="/entreprises"
              className="py-2 text-ink pl-3"
              onClick={closeMenu}
            >
              {t.business[lang]}
            </Link>
            <div className="h-px bg-line my-2" />
            {primaryLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-2 text-ink"
                onClick={closeMenu}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={sisterLink.href}
              className="py-2 text-ink"
              onClick={closeMenu}
            >
              {sisterLink.label}
            </Link>
            <div className="h-px bg-line my-2" />
            <Link
              href="/contact"
              className="mt-1 bg-indigo text-bone px-5 py-3 text-[14px] font-medium text-center"
              onClick={closeMenu}
            >
              {t.startConversation[lang]}
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
