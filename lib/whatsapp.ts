import { contact } from "@/lib/content";

export type LeadSource =
  | "home"
  | "services"
  | "service-detail"
  | "contact"
  | "float"
  | "pricing";

const defaultMessages = {
  fr: "Bonjour bekaSOBA, je souhaite en savoir plus sur vos services.",
  en: "Hello bekaSOBA, I'd like to learn more about your services.",
};

export function getWhatsAppDigits() {
  return contact.whatsappPlaceholder.replace(/[^0-9]/g, "");
}

export function buildWhatsAppUrl(options?: {
  lang?: "fr" | "en";
  serviceName?: string;
  source?: LeadSource;
}) {
  const lang = options?.lang ?? "fr";
  const source = options?.source ?? "float";
  let message = defaultMessages[lang];

  if (options?.serviceName) {
    message =
      lang === "fr"
        ? `Bonjour bekaSOBA, je suis intéressé(e) par : ${options.serviceName}.`
        : `Hello bekaSOBA, I'm interested in: ${options.serviceName}.`;
  }

  message += lang === "fr" ? ` (via ${source})` : ` (via ${source})`;

  return `https://wa.me/${getWhatsAppDigits()}?text=${encodeURIComponent(message)}`;
}

export function trackLeadClick(source: LeadSource, label?: string) {
  if (typeof window === "undefined") return;

  const gtag = (
    window as Window & {
      gtag?: (...args: unknown[]) => void;
    }
  ).gtag;

  gtag?.("event", "generate_lead", {
    event_category: "lead",
    event_label: label ?? source,
    lead_source: source,
  });
}
