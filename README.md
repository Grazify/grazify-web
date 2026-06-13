# 🌿 Grazify — B2B Grocery Supply

**The landing website for Grazify — a B2B grocery supply platform connecting local farms directly with food businesses.**

Grazify helps restaurants, cafés, canteens, cloud kitchens, and retail chains manage wholesale grocery procurement through reliable, traceable, farm-to-business delivery.

🌐 **Live site:** [grazify.farm](https://grazify.farm) · 📬 **Contact:** [grazify.farm@gmail.com](mailto:grazify.farm@gmail.com)

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white) ![License](https://img.shields.io/badge/License-MIT-1B8A4B)

---

## ✨ Highlights

- **Waitlist form with CRM** — serverless API route creates ClickUp tasks on every submission; includes graceful retry if the configured status name is invalid
- **IP-based rate limiting** — in-memory, no external dependencies, configurable via `.env.local`
- **Spam protection** — honeypot field (absolutely positioned off-screen, `tabIndex={-1}`, not `display:none` so bots still see it)
- **Crisp inline-SVG branding** — `BrandIcon` and `BrandWordmark` are React SVG components, never rasterised by `next/image`
- **Self-hosted Gilroy font** — loaded via `next/font/local`, zero FOUT, no external network request at runtime
- **Smooth animations** — CSS keyframes only: `float`, `reveal`, `flow`, `node-ping`, `slide-up` — no animation libraries
- **Fully accessible** — `prefers-reduced-motion` support, ARIA labels, semantic HTML, keyboard-navigable form

---

## 🛠 Tech stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router, serverless API routes) |
| Language | TypeScript (strict mode) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) + hand-rolled CSS keyframes in `globals.css` |
| Font | Gilroy via `next/font/local` (self-hosted OTF, preloaded) |
| CRM | [ClickUp](https://clickup.com) REST API v2 — task creation on waitlist submission |
| Hosting | [Vercel](https://vercel.com) |

---

## 🚀 Getting started

```bash
git clone https://github.com/Grazify/grazify-web.git
cd grazify-web
npm install
npm run dev    # → http://localhost:3000
```

Other commands:

```bash
npm run build  # production build — must pass before merging
npm run lint   # ESLint (next/core-web-vitals)
```

### Environment variables

Copy `.env.example` to `.env.local` and fill in your ClickUp credentials:

```
CLICKUP_API_TOKEN=pk_your_token_here
CLICKUP_LIST_ID=your_list_id_here

# Optional — leave empty to use the ClickUp list's default status
CLICKUP_DEFAULT_STATUS=

WAITLIST_RATE_LIMIT_MAX=5
WAITLIST_RATE_LIMIT_WINDOW_MS=60000
```

The website runs without ClickUp credentials for local development — form submissions will return a safe `502` error at the API layer only. No environment variables are required to preview the UI.

---

## 🗂 Project structure

```
app/
  api/waitlist/route.ts    serverless POST handler — validates, rate-limits, creates ClickUp task
  layout.tsx               root layout with Gilroy font, metadata, and theme colour
  globals.css              CSS variables, keyframes, component classes (.btn-primary, .reveal, …)
  icon.svg                 favicon (flat G-pin)
  fonts/                   self-hosted Gilroy-Light.otf + Gilroy-ExtraBold.otf

components/
  common/                  BrandIcon, BrandWordmark, Container, DottedPattern,
                           Logo, PlatformBadge, Reveal, SectionHeading
  layout/                  Header (glass pill navbar), Footer
  screens/                 AppScreenshot, SupplyFlowVisual
  sections/                HeroSection, SupplyChainSection, ProductSection,
                           QualitySection, PlatformSection, WaitlistSection,
                           WaitlistForm, FAQSection

lib/
  constants.ts             nav links, hero chips, supply steps, platform cards, FAQs
  rate-limit.ts            in-memory IP rate limiter (no external store)
  waitlist.ts              client-safe types + fetch helper (submitWaitlistLead)
  utils.ts                 cn() class merger

public/
  brand/                   icon.svg, wordmark.svg
  platforms/               google-play.svg, app-store.svg, windows.svg, apple.svg, linux.svg
  screens/                 transparent-background PNG app screenshots

scripts/
  process-screens.mjs      sharp script — flood-fill removes black backgrounds from raw screenshots
```

---

## 📐 Conventions

- **Copy lives in `lib/constants.ts`** — section components are presentational; to change text, edit the constants file.
- **SVG brand assets are inline React components** — `BrandIcon.tsx` and `BrandWordmark.tsx` render as `<svg>` elements to avoid rasterisation blur from `next/image`.
- **No secrets in frontend code** — all ClickUp credentials are server-only env vars, never prefixed with `NEXT_PUBLIC_`, and never logged.
- **Motion is centralised** — all keyframes and animation utility classes live in `app/globals.css`. Every animation respects `prefers-reduced-motion`.
- **Build must pass** — `npm run build` and `npm run lint` are the bar for every change.

---

## 🤝 Contributing

1. Fork the repository and create a branch from `master` (`feat/your-feature` or `fix/your-fix`)
2. Make your changes — keep them focused and follow the conventions above
3. Verify locally: `npm run build && npm run lint` must both pass
4. Open a pull request with a clear description of what changed and why — screenshots are appreciated for visual changes

Found a bug or have a suggestion? [Open an issue](https://github.com/Grazify/grazify-web/issues) — please include steps to reproduce and your browser/device for visual glitches.

---

## 📄 License

This project is open source under the [MIT License](LICENSE) — © 2026 Grazify.

The Grazify name, logo, wordmark, and app screenshots are trademarks of Grazify and are not covered by the code license.
