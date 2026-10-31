"use client";

import { uiStrings } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function ComingSoonBadge() {
  const { lang } = useLanguage();

  return (
    <span className="inline-flex shrink-0 border border-clay/30 px-2 py-0.5 font-utility text-[10px] uppercase tracking-wide text-clay">
      {uiStrings.badges.comingSoon[lang]}
    </span>
  );
}
