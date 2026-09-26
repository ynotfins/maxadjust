# MaxAdjust.com (canonical)

Canonical Next.js site for **maxadjust.com**.

## Authority

| Layer | Source |
| --- | --- |
| Visual system | [R3lentless-Grind Design System (RGDS)](https://github.com/R3lentless-Grind/r3lentless-grind-design-system) — theme `primary-light` |
| Brand colors | Live maxadjust.com / logo: primary `#2563EB`, secondary `#EF4444`, accent `#F97316` |
| Hosting today | Vercel (migrating to local) |
| Related archives (do not develop further) | `Alpha_Page_Max_Adjust`, `MAX-ADJUST-WHM` |

## Stack

- Next.js 15 App Router
- `@r3lentless/rgds-web` (vendored `vendor/r3lentless-rgds-web-1.1.1.tgz` until the MaxAdjust brand patch is published to npm)
- HeroUI + Tailwind (legacy helpers; new UI should prefer RGDS primitives)

## Pages

- `/` — marketing home (live Alpha sections + RGDS Light theme)
- Service routes under `/(services)/*` (water, fire, mold, storm, commercial, construction, cleaning)
- `/blogs`, `/blog/[slug]`, `/compare/[slug]`, `/contact`
- `/privacy`, `/terms`, `/disclaimer`

## Local

```bash
npm install --legacy-peer-deps
npm run dev
```

Optional form backend:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Without Supabase, the home contact form falls back to `mailto:`.

## Deploy note

Vercel project `maxadjust` currently serves staging (`maxadjust-khaki.vercel.app`). Production `maxadjust.com` still points at the older Alpha deployment on a different Vercel account — cut over after local/RGDS validation.
