"use client";

import { Container, Eyebrow } from "@/components/ui";
import { launchPriceItems, launchPriceLabels } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function LaunchPriceTable({
  serviceCode,
}: {
  serviceCode?: string;
}) {
  const { lang } = useLanguage();
  const labels = launchPriceLabels;
  const items = launchPriceItems.filter(
    (item) => !serviceCode || item.code === serviceCode
  );

  return (
    <section className="py-20 bg-bone">
      <Container>
        <div className="mb-8">
          <Eyebrow>{labels.eyebrow[lang]}</Eyebrow>
          <h2 className="font-display text-[28px] sm:text-[32px] text-indigo">
            {labels.title[lang]}
          </h2>
          <p className="mt-3 text-[14px] text-ink/65">
            {labels.validUntil[lang]}
          </p>
        </div>
        <div className="overflow-x-auto border border-line">
          <table className="w-full min-w-[680px] text-left">
            <thead className="bg-paper">
              <tr className="border-b border-line font-utility text-[11px] uppercase tracking-wide text-ink/60">
                <th scope="col" className="px-4 py-3">{labels.code[lang]}</th>
                <th scope="col" className="px-4 py-3">{labels.service[lang]}</th>
                <th scope="col" className="px-4 py-3">{labels.regular[lang]}</th>
                <th scope="col" className="px-4 py-3">{labels.launch[lang]}</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={`${item.code}-${item.service.en}`} className="border-b border-line/70 last:border-0">
                  <th scope="row" className="px-4 py-3 font-utility text-[12px] text-clay">
                    {item.code}
                  </th>
                  <td className="px-4 py-3 text-[14px] text-ink/80">{item.service[lang]}</td>
                  <td className="px-4 py-3 text-[13px] text-ink/50 line-through">
                    {item.regular[lang]}
                  </td>
                  <td className="px-4 py-3 text-[14px] font-bold text-green-700">
                    {item.launch[lang]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
