"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "./ui";
import { serviceLines, uiStrings } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { lang, toggle } = useLanguage();
  const t = uiStrings.nav;

  const navLinks = [
    { href: "/about", label: t.about[lang] },
    { href: "/pricing", label: t.pricing[lang] },
    { href: "/contact", label: t.contact[lang] },
  ];

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
      <Container className="flex items-center justify-between h-[76px]">
        <Link href="/" className="flex items-center gap-3 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-transparent.png"
            alt="Denmisew Ka Gneta"
            className="h-8 w-auto"
          />
          <span className="hidden sm:flex flex-col leading-none border-l border-line pl-3">
            <span className="font-display text-[15px] text-indigo">
              Denmisew Ka Gneta
            </span>
            <span className="font-utility text-[9px] tracking-[0.14em] uppercase text-ink/60 mt-1">
              {t.tagline[lang]}
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-body text-[15px]">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-ink hover:text-clay transition-colors">
              {t.services[lang]}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
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
                </div>
              </div>
            )}
          </div>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-ink hover:text-clay transition-colors"
            >
              {l.label}
            </Link>
          ))}

          <button
            onClick={toggle}
            className="font-utility text-[12px] tracking-wide border border-line px-3 py-1.5 hover:border-clay hover:text-clay transition-colors"
            aria-label="Switch language"
          >
            {lang === "fr" ? "FR / EN" : "EN / FR"}
          </button>

          <Link
            href="/contact"
            className="bg-indigo text-bone px-5 py-2.5 text-[14px] font-medium hover:bg-indigo-deep transition-colors"
          >
            {t.startConversation[lang]}
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggle}
            className="font-utility text-[11px] border border-line px-2.5 py-1.5"
          >
            {lang === "fr" ? "FR" : "EN"}
          </button>
          <button
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <span className={`block w-6 h-[1.5px] bg-ink transition-transform ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-ink transition-transform ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </Container>

      {open && (
        <div className="md:hidden border-t border-line bg-paper">
          <Container className="flex flex-col py-4 gap-1">
            <div className="font-utility text-[11px] uppercase tracking-wide text-ink/50 pt-2 pb-1">
              {t.services[lang]}
            </div>
            {serviceLines.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="py-2 text-ink"
                onClick={() => setOpen(false)}
              >
                {s.name[lang]}
              </Link>
            ))}
            <div className="h-px bg-line my-2" />
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-2 text-ink"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/about#network"
              className="py-2 text-ink"
              onClick={() => setOpen(false)}
            >
              {lang === "fr" ? "Organisations sœurs" : "Sister organizations"}
            </Link>
            <div className="h-px bg-line my-2" />
            <Link
              href="/contact"
              className="mt-1 bg-indigo text-bone px-5 py-3 text-[14px] font-medium text-center"
              onClick={() => setOpen(false)}
            >
              {t.startConversation[lang]}
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
