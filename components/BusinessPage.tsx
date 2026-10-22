"use client";

import Link from "next/link";
import { Container, Eyebrow, Button } from "@/components/ui";
import BogolanDivider from "@/components/BogolanDivider";
import WhatsAppButton from "@/components/WhatsAppButton";
import { businessPage, launchPriceLabels } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function BusinessPage() {
  const { lang } = useLanguage();
  const content = businessPage;

  return (
    <>
      <section className="pt-16 pb-16 md:pt-24">
        <Container>
          <Eyebrow>{content.eyebrow[lang]}</Eyebrow>
          <h1 className="font-display text-[30px] sm:text-[36px] md:text-[48px] text-indigo max-w-[760px] leading-[1.1] text-balance">
            {content.title[lang]}
          </h1>
          <p className="mt-6 text-[16px] sm:text-[17px] text-ink/75 max-w-[680px] leading-relaxed">
            {content.sub[lang]}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppButton source="services" label={content.buttons.whatsapp[lang]} />
            <Button href="/contact" variant="secondary">
              {content.buttons.discovery[lang]}
            </Button>
          </div>
        </Container>
      </section>

      <BogolanDivider tone="clay" />

      <section className="py-20 bg-bone">
        <Container>
          <Eyebrow>{content.offersEyebrow[lang]}</Eyebrow>
          <p className="mb-5 text-[14px] text-ink/65">
            {launchPriceLabels.validUntil[lang]}
          </p>
          <div className="overflow-x-auto border border-line">
            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-paper">
                <tr className="border-b border-line font-utility text-[11px] uppercase tracking-wide text-ink/60">
                  <th scope="col" className="px-4 py-3">{content.offerLabel[lang]}</th>
                  <th scope="col" className="px-4 py-3">{content.includedLabel[lang]}</th>
                  <th scope="col" className="px-4 py-3">{content.priceLabel[lang]}</th>
                </tr>
              </thead>
              <tbody>
                {content.offers.map((offer) => (
                  <tr key={offer.title.en} className="border-b border-line/70 last:border-0">
                    <th scope="row" className="px-4 py-4 align-top font-display text-[16px] text-indigo">
                      {offer.title[lang]}
                    </th>
                    <td className="px-4 py-4 align-top text-[14px] text-ink/75 leading-relaxed">
                      {offer.detail[lang]}
                    </td>
                    <td className="px-4 py-4 align-top whitespace-nowrap">
                      {offer.regular ? (
                        <span className="inline-flex items-baseline gap-2">
                          <span className="text-[13px] text-ink/50 line-through">
                            {offer.regular[lang]}
                          </span>
                          <span className="text-[14px] font-bold text-green-700">
                            {offer.price[lang]}
                          </span>
                        </span>
                      ) : (
                        <span className="text-[14px] text-ink/75">{offer.price[lang]}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Eyebrow>{content.organizations.title[lang]}</Eyebrow>
          <ul className="grid sm:grid-cols-2 gap-4 mt-6">
            {content.organizations.services.map((service) => (
              <li key={service.href} className="border-t border-line pt-4">
                <Link
                  href={service.href}
                  className="text-[15px] text-indigo hover:text-clay transition-colors"
                >
                  {service.title[lang]} →
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

    </>
  );
}
