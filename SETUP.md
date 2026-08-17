# bekaSOBA — Website

Multi-page Next.js site for **bekaSOBA** (bekasoba.com): Home, About, Services
(overview + 5 detail pages), Pricing, Contact, and Privacy Policy.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before launch — checklist

1. **Environment variables** — copy `.env.example` to `.env.local` and fill in:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics 4 (e.g. `G-XXXXXXXXXX`)
   - `NEXT_PUBLIC_GSC_VERIFICATION` — Google Search Console HTML tag verification code
2. **Contact form** — create a form at [formspree.io](https://formspree.io) and update
   the endpoint in `components/ContactForm.tsx` (or set `NEXT_PUBLIC_FORMSPREE_ENDPOINT`).
3. **Email / WhatsApp** — `lib/content.ts`, the `contact` object at the bottom.
4. **Custom domain** — connect `bekasoba.com` in Vercel project settings (see below).

## Deploy — GitHub + Vercel auto-sync

This workflow keeps your **Desktop folder**, **GitHub**, and **live site** in sync:

```
Edit locally → git push → GitHub → Vercel redeploys → bekasoba.com updates
```

### One-time setup

1. **Create a GitHub repo** (github.com → New repository)
   - Suggested name: `bekasoba-website` or `denmisew-ka-gneta-website`
   - Do **not** add a README if this folder already has code

2. **Connect this folder to GitHub** (run once in Terminal):

```bash
cd "/Users/mahamadoukane/Desktop/My code sources/denmisew-ka-gneta-website"
git remote set-url origin https://github.com/MK-web-web/bekaSOBA.git
git push -u origin main
```

3. **Connect Vercel** (vercel.com → New Project → Import Git Repository)
   - Select the GitHub repo
   - Vercel auto-detects Next.js — click **Deploy**
   - Add environment variables from `.env.example` under **Settings → Environment Variables**
   - Add custom domain **bekasoba.com** under **Settings → Domains**
   - Also add **www.bekasoba.com** — the site redirects www → apex automatically

4. **Namecheap DNS** (fixes “DNS Change Recommended” in Vercel)
   - In Vercel → **Domains** → click **View DNS configuration** on each domain
   - Copy the **exact** A record and CNAME values shown (they may differ from defaults)
   - In Namecheap → **Advanced DNS** → remove parking-page records, then add:

   | Type | Host | Value |
   |------|------|-------|
   | A | `@` | *(from Vercel domain card — often `76.76.21.21`)* |
   | CNAME | `www` | *(from Vercel domain card — often `cname.vercel-dns.com`)* |

5. **Vercel domain redirect** (avoid redirect loops)
   - Set **`bekasoba.com`** as **Production** (not redirect to www)
   - Set **`www.bekasoba.com`** → **Redirect** to `bekasoba.com`
   - This matches the site’s canonical URL in `lib/site.ts`

6. **Google Search Console**
   - Add property `https://bekasoba.com`
   - Choose **HTML tag** verification
   - Copy the `content="..."` value into `NEXT_PUBLIC_GSC_VERIFICATION` in Vercel
   - Redeploy, then click **Verify** in Search Console
   - Submit sitemap: `https://bekasoba.com/sitemap.xml`

5. **Google Analytics**
   - Create a GA4 property for bekasoba.com
   - Copy the Measurement ID into `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel
   - Redeploy — analytics activates after visitors accept the cookie notice

### Every time you change the site

```bash
git add .
git commit -m "Describe your change"
git push
```

Vercel rebuilds in ~1–2 minutes. Your live URL updates automatically.

## Editing content

All firm copy lives in `lib/content.ts`. Site-wide SEO settings (domain, keywords,
analytics env vars) live in `lib/site.ts`.

## Language

Fully bilingual (French default, English toggle). Copy is `{ fr: "...", en: "..." }`
pairs in `lib/content.ts`. Language preference is stored in `localStorage`.

## Brand

- Wordmark: **bekaSOBA**
- Logo: `public/bekasoba-logo.png`
- Domain: **bekasoba.com**
- Theme color: jade green `#00A86B` (from logo)

## Sister organizations

Listed on the Home page and About page (`/about#network`) as **sister organizations**
(not commercial partners):

- Big Hope Mali English Club — bighopemali.com
- DJIGUI-BA-MALI — djiguibamali.org

The founder profile links to mahamadoukane.vercel.app.

## Service lines (5)

1. PM — Project Management
2. CA — Construction Advisory
3. ED — Education Mentoring (bekaSOBA model)
4. EN — Professional English & Leadership
5. DS — Digital Skills Development

## SEO — Google Search Console checklist

After DNS is live and the site loads at `https://www.bekasoba.com`:

1. **Verify ownership** — HTML tag + file at `/google8afabc4a923c5f49.html`
2. **Submit sitemap** — `https://www.bekasoba.com/sitemap.xml` (full URL, not `/sitemap.xml` alone)
3. **Request indexing** for key pages (URL Inspection → Request indexing):
   - `https://www.bekasoba.com/`
   - `https://www.bekasoba.com/services`
   - `https://www.bekasoba.com/contact`
   - `https://www.bekasoba.com/about`
   - Each service page under `/services/...`
4. **Monitor** — Pages → Indexing report; fix any “Couldn't fetch” by waiting for DNS/SSL, then re-request

Per-page SEO metadata lives in `lib/seo.ts`. WhatsApp lead clicks fire GA4 `generate_lead` events (after cookie consent).

## Backup

- **Primary:** GitHub `MK-web-web/bekaSOBA` — push after every change
- **Live:** Vercel auto-deploys from GitHub
- **Local:** Desktop folder + iCloud (extra safety, not a substitute for GitHub)
