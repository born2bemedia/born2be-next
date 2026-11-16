# born2be.media — Next.js

The born2be.media website, migrated from WordPress (theme `born2be-media`) to Next.js 16. Design, URLs and SEO tags are kept 1:1. Hosted on Vercel.

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in SMTP settings to test the forms
npm run dev                  # http://localhost:3000
```

`npm run build && npm run start` runs the production build.

## Checks

`npm run check` = lint + type check + production build. GitHub Actions (`.github/workflows/ci.yml`) runs the same on every push and pull request, without any secrets: if it is green, Vercel can build the site too.

The build does not need the mail variables. Without them the site works and only the forms cannot send; the server then logs a `[forms] Emails from the site forms will NOT be sent: …` warning at start (visible in Vercel → Logs).

## Structure

| Path | What |
|---|---|
| `src/app/(default-header)/…` | Pages with the white-logo header (home, contacts, markets, SEO/SMM/SMO/SERM, policies) |
| `src/app/(alt-header)/…` | Pages with the black-logo header (agency, career, cases, faq, journal) and journal posts (`[slug]`) |
| `src/components/pages/*Page.tsx` | Page markup, converted 1:1 from the WordPress theme (same HTML classes) |
| `src/components/layout/markup/` | Header (two variants), footer and the popups |
| `src/components/layout/ThemeScripts.tsx` | Theme behaviour: menu, popups, accordions, scroll animations, sliders (Swiper), Matter.js on /cases |
| `src/components/forms/` | The four forms (former Contact Form 7), same markup/classes |
| `src/app/api/forms/route.ts` | Form handler: validation, honeypot, sends email via SMTP |
| `src/content/journal/*.md` | Journal posts (frontmatter + HTML/Markdown body). Add a file = add a post |
| `src/content/seo.json` | Titles/descriptions/OG per URL (migrated from Yoast) |
| `src/styles/theme/` | Original theme SCSS, loaded globally in the same order as on WordPress |
| `public/wp-content/uploads/` | Images, at the same paths as on WordPress (old image URLs keep working). Rendered with `next/image` (WebP, lazy loading); the blurred `ellipse-*.png` backgrounds are `unoptimized` because WebP makes them bigger |
| `src/styles/_sliders.scss` | Swiper base styles, slide widths, CSS marquees ("Apply the power of four S", SERM/Cases logo strip) |

## Adding a journal post

Create `src/content/journal/<url-slug>.md`:

```md
---
title: "Post title"
date: "2026-01-31T10:00:00"
image: "/wp-content/uploads/2026/01/cover.png"
imageWidth: 1752   # real size of the image file
imageHeight: 977
---

Text in **Markdown** or HTML.
```

Then add its SEO entry to `src/content/seo.json` under `"/<url-slug>/"`. The journal listing page (`JournalPage.tsx`) is static markup, so add the card there too.

## Forms

All forms post to `/api/forms/` and send an email to `ADMIN_EMAIL` (contact@born2be.media) from `MAIL_FROM`, through SMTP with a Google App Password or through Gmail OAuth (see `.env.example`).

Note: the WordPress site used Gmail OAuth via WP Mail SMTP, but that connection has been failing since 2025-04-23 ("Account has been deleted"), so it cannot be reused.
Vercel limits a request to 4.5 MB, so the CV upload on /career is capped at 4 MB.

## Deploy (Vercel)

1. Push the repo to GitHub, import it in Vercel (framework: Next.js, no extra settings).
2. Add the environment variables from `.env.example` (for the forms: `ADMIN_EMAIL`, `MAIL_FROM`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`).
3. Point the domain to Vercel when the site is checked.
