"use client";

import { useState } from "react";
import Link from "next/link";
import { contact, uiStrings } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function ContactForm() {
  const { lang } = useLanguage();
  const t = uiStrings.contact;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const formspreeEndpoint =
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
    "https://formspree.io/f/xbgrykay";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    const endpoint = form.action;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-clay bg-bone p-8">
        <p className="font-display text-[20px] text-indigo">
          {t.sentTitle[lang]}
        </p>
        <p className="mt-2 text-[14.5px] text-ink/70">{t.sentText[lang]}</p>
      </div>
    );
  }

  return (
    <form
      action={formspreeEndpoint}
      method="POST"
      onSubmit={handleSubmit}
      className="relative space-y-5"
    >
      {/* Formspree honeypot — hidden from users, catches naive bots */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <input type="hidden" name="_subject" value="bekaSOBA — nouveau message" />
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label={t.formName[lang]} name="name" required />
        <Field label={t.formEmail[lang]} name="email" type="email" required />
      </div>
      <Field label={t.formPhone[lang]} name="phone" />
      <div>
        <label className="block font-utility text-[11px] uppercase tracking-wide text-ink/70 mb-2">
          {t.formService[lang]}
        </label>
        <select
          name="service"
          className="w-full bg-paper border border-line px-4 py-3 text-[14.5px] focus:border-clay outline-none"
        >
          {contact.serviceOptions.map((service) => (
            <option key={service.en} value={service[lang]}>
              {service[lang]}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-utility text-[11px] uppercase tracking-wide text-ink/70 mb-2">
          {t.formMessage[lang]}
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full bg-paper border border-line px-4 py-3 text-[14.5px] focus:border-clay outline-none resize-none"
          placeholder={t.formMessagePlaceholder[lang]}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-clay text-bone px-6 py-3.5 text-[15px] font-medium hover:bg-clay-deep transition-colors disabled:opacity-60"
      >
        {status === "sending"
          ? uiStrings.buttons.sending[lang]
          : uiStrings.buttons.sendMessage[lang]}
      </button>
      {status === "error" && (
        <p className="text-[13.5px] text-clay-deep">{t.errorText[lang]}</p>
      )}
      <p className="text-[12.5px] text-ink/65 leading-relaxed">
        {t.formNote[lang]}{" "}
        <Link href="/privacy" className="text-clay hover:underline">
          {t.privacyLink[lang]}
        </Link>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block font-utility text-[11px] uppercase tracking-wide text-ink/70 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-paper border border-line px-4 py-3 text-[14.5px] focus:border-clay outline-none"
      />
    </div>
  );
}
