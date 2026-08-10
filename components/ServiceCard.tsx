"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

type Bilingual = { fr: string; en: string };

export default function ServiceCard({
  code,
  name,
  short,
  slug,
}: {
  code: string;
  name: Bilingual;
  short: Bilingual;
  slug: string;
}) {
  const { lang } = useLanguage();
  return (
    <Link
      href={`/services/${slug}`}
      className="group relative block border border-line bg-paper p-7 hover:border-clay transition-colors"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="font-utility text-[12px] tracking-[0.14em] text-clay">
          {code} —
        </span>
        <span className="font-utility text-[12px] text-ink/40 group-hover:text-clay group-hover:translate-x-1 transition-all">
          →
        </span>
      </div>
      <h3 className="font-display text-[21px] text-indigo mb-3 leading-snug">
        {name[lang]}
      </h3>
      <p className="text-[14.5px] text-ink/70 leading-relaxed">{short[lang]}</p>
    </Link>
  );
}
