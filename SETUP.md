# Denmisew Ka Gneta — Website

Multi-page Next.js site: Home, About, Services (overview + 4 detail pages),
Pricing, Contact.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before launch — 3 things to fill in

1. **Contact form** — `components/ContactForm.tsx`, line with
   `action="https://formspree.io/f/YOUR_FORM_ID"`. Create a free form at
   formspree.io and swap in your real form ID.
2. **Email / WhatsApp / location** — `lib/content.ts`, the `contact` object
   at the bottom of the file.
3. **Real photos** (optional but recommended) — currently the site is
   text/pattern only, no stock or placeholder photography. Add a founder
   photo and any project photos under `public/` and reference them in
   `app/about/page.tsx` or `app/page.tsx` when ready.

## Deploy (free) — GitHub + Vercel auto-sync

This is the workflow that keeps your **Desktop folder**, **GitHub**, and **live Vercel URL** in sync:

```
Edit files locally → git push → GitHub → Vercel redeploys automatically
```

### One-time setup

1. **Create a GitHub repo** (github.com → New repository)
   - Name suggestion: `denmisew-ka-gneta-website`
   - Public or private — either works with Vercel
   - Do **not** add a README if this folder already has code

2. **Connect this folder to GitHub** (run once in Terminal, from this folder):

```bash
git remote add origin https://github.com/YOUR_USERNAME/denmisew-ka-gneta-website.git
git push -u origin main
```

3. **Connect Vercel** (vercel.com → New Project → Import Git Repository)
   - Select the GitHub repo above
   - Vercel auto-detects Next.js — click **Deploy**
   - Optional: add a custom domain (e.g. `denmisewkagneta.com`) in project settings

### Every time you change the site

```bash
git add .
git commit -m "Describe your change"
git push
```

Vercel rebuilds in ~1–2 minutes. Your live URL updates automatically — no manual re-upload.

### Desktop folder stays the source of truth

- Work in: `Desktop/My code sources/denmisew-ka-gneta-website`
- Push to GitHub when you want changes to go live
- You do **not** need to edit on Vercel's dashboard — code changes always start here

## Deploy (free) — quick reference

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Vercel auto-detects Next.js — click Deploy. No config needed.
4. Optional: connect a custom domain in Vercel's project settings.

Every future edit: push to GitHub, Vercel redeploys automatically.

## Editing content

All firm copy (service descriptions, pricing text, credentials, client
types) lives in one file: `lib/content.ts`. Edit that file to update text
across the whole site without touching page layouts.

## Language

The site is fully bilingual (French default, English toggle). All copy
lives in `lib/content.ts` as `{ fr: "...", en: "..." }` pairs — edit both
languages there. The toggle state (`lib/i18n.tsx`) is remembered per
visitor via `localStorage`, so returning visitors keep their choice.

## Design system

- Colors, fonts: `app/globals.css`
- **Palette now comes directly from your logo**, extracted programmatically:
  jade green `#00A86B` and near-black. (Variable names `--color-clay` and
  `--color-indigo` were kept from an earlier pass to avoid touching every
  component — they now hold jade and near-black, not their old values.)
- The thin diamond-pattern dividers (`components/BogolanDivider.tsx`) are
  a nod to bogolan (Malian mudcloth) linework — the site's one signature
  visual element, used sparingly as section breaks, now rendered in jade.
- Typefaces: Fraunces (display/headlines), Work Sans (body), IBM Plex Mono
  (labels, numbers, eyebrows) — self-hosted via `@fontsource` so the build
  never depends on Google Fonts being reachable at build time.
- Logo: `public/logo.png` (original, black background) and
  `public/logo-transparent.png` (background removed, used in the nav and
  footer). If you get a proper vector/SVG export of the logo later, swap
  it in — it'll look sharper than the rasterized transparent version.
