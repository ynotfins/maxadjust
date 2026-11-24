# Drift ledger

## 2026-10-18-readme-hosting

- class: governed-doc-drift
- status: proposed (not applied)
- file: `README.md` (repo root)
- authority: Tier 2 `operator_locked` — universal fallback. No `contracts/authority-lock.yaml` and no `AGENTS.md`. Repo-root `README.md` is operator-locked and was not edited.
- date: 2026-10-18
- memory: NOT_AVAILABLE (`agentcore_memory-propose_fact` returned `device_assertion_required`)

### Why

Two hosting sentences disagree with the 2026-10-18 operator decision and with the verified production host. Optional Supabase/mailto sentences match `src` and are out of scope.

### Current vs corrected

Section: Authority table, row "Hosting today" (`README.md:11`).

- current: `Vercel (migrating to local)`
- proposed: `Vercel only. Production https://maxadjust.com is this repository's Vercel project. A later move off Vercel is not prepared in this repo.`

Section: `## Deploy note` (`README.md:43-45`).

- current: `Vercel project `maxadjust` currently serves staging (`maxadjust-khaki.vercel.app`). Production `maxadjust.com` still points at the older Alpha deployment on a different Vercel account — cut over after local/RGDS validation.`
- proposed: `Production https://maxadjust.com is hosted on Vercel from this repository. It does not point at an older Alpha deployment. A later move off Vercel is allowed but is not prepared in this repo.`

The staging URL `maxadjust-khaki.vercel.app` was not re-verified in this pass. It is omitted from the proposed Deploy note so it is not restated as a current fact.

Unchanged (verified still accurate, do not edit in this proposal):

- `README.md:34-41` optional `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`, with `mailto:` fallback. Matches `src/lib/supabase.ts:7-9` and `src/app/(home)/_alpha/ContactSection.tsx:32-45`.
- `README.md:22` "live Alpha sections" describes home-page composition under `src/app/(home)/_alpha/`, not the production host.

### Source evidence

- Operator decision 2026-10-18: keep https://maxadjust.com on Vercel. A future local move is allowed later and is not prepared in this repo. Do not document ports, tunnel snippets, or local folders as if they exist.
- Verified host: public site https://maxadjust.com is Vercel only (`Server: Vercel`). It is not running on this PC. There is no `I:\LocalApps\MaxAdjust` and no MaxAdjust Windows service.
- Repo: `D:\github\maxadjust`, branch `main`, HEAD `faca38779c095a04a7fc326eb82e2b933c0a6f51` (`git rev-parse HEAD`).
- Contact backend: `src/lib/supabase.ts` uses only `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`. No local Postgres and no AgentCore PostgreSQL in this app.

### Requires

authority_maintainer + AUTH id + rollback + validators + independent review. Do not auto-apply.

### Superseded (2026-11-21)

This entry is **superseded**, not applied. maxadjust.com moved off Vercel (plan
cancelled, HTTP 402 `DEPLOYMENT_DISABLED`) to Cloudflare Workers via
`@opennextjs/cloudflare` on branch `goal/cf-workers-opennext` (PR #8). The
proposed Vercel wording above must not be applied. See
`2026-11-21-cloudflare-workers-cutover` below for the correct current text.

## 2026-11-21-cloudflare-workers-cutover

- class: governed-doc-drift
- status: proposed (not applied)
- files: `README.md` (repo root), `AGENTS.md` (repo root), `NFA_ALIGNMENT.md` (repo root)
- authority: Tier 2 `operator_locked` — universal fallback (no `contracts/authority-lock.yaml`). Root `README.md` and `AGENTS.md` are operator-locked per repo precedent (see superseded entry above). `NFA_ALIGNMENT.md` is named directly in `AGENTS.md`'s Authority chain (#2) alongside AGENTS.md and is treated with the same governed caution.
- date: 2026-11-21
- branch: `goal/cf-workers-opennext`, PR https://github.com/ynotfins/maxadjust/pull/8
- memory: NOT_AVAILABLE (gateway not queried this session; `agentcore_memory-propose_fact` previously returned `device_assertion_required` for this repo)

### Why

The branch cuts maxadjust.com over from Vercel to Cloudflare Workers
(`@opennextjs/cloudflare` 1.20.17 + `wrangler` 4.163.0). `README.md`'s hosting
table/Deploy note and `AGENTS.md`'s Write-rules sentence both still assert
Vercel as current production, which is now false. `NFA_ALIGNMENT.md` has no
hosting line at all and should gain one so NFA-side readers know this site has
no local/NFA runtime dependency.

### Current vs corrected

**`README.md`** — Authority table, row "Hosting today" (`README.md:11`):
- current: `Vercel (migrating to local)`
- proposed: `Cloudflare Workers (via @opennextjs/cloudflare + wrangler). No longer on Vercel.`

**`README.md`** — `## Local` section (`README.md:27-32`), add a line after the `npm run dev` block:
- proposed addition: "To run the Cloudflare Workers build locally: `npm run preview` (builds with `@opennextjs/cloudflare` and serves via `wrangler`). Use a port other than 8787 — that port is owned by the NFA worker on this machine."

**`README.md`** — form-backend paragraph (`README.md:34-41`):
- current: implies a generic Supabase form backend falling back to `mailto:` with no table named.
- proposed: "Home (`/`) and `/contact` both insert into a Supabase `public.leads` table (insert-only via RLS for anon). Without Supabase env vars configured, the home contact form falls back to `mailto:`." (Verified: `src/app/contact/page.tsx:36` and `src/app/(home)/_alpha/ContactSection.tsx:34` both call `.from("leads").insert(...)`.)

**`README.md`** — `## Deploy note` (`README.md:43-45`):
- current: `Vercel project `maxadjust` currently serves staging (`maxadjust-khaki.vercel.app`). Production `maxadjust.com` still points at the older Alpha deployment on a different Vercel account — cut over after local/RGDS validation.`
- proposed: `Production https://maxadjust.com is served from Cloudflare Workers (project name \`maxadjust\`, zone \`maxadjust.com\`, routes for apex and \`www\`). Deploy via \`npm run deploy\` (opennextjs-cloudflare build + wrangler deploy). Vercel is no longer used for this site.`

**`AGENTS.md`** — Write rules (`AGENTS.md:31`):
- current: `Production today is this repo on Vercel at https://maxadjust.com. A later move off Vercel is not prepared here.`
- proposed: `Production today is this repo on Cloudflare Workers (via @opennextjs/cloudflare + wrangler) at https://maxadjust.com. Vercel is no longer used.`

**`NFA_ALIGNMENT.md`** — new line under `## Consume` (no existing hosting line to replace):
- proposed addition: "Hosting: maxadjust.com runs on Cloudflare Workers from this repository's own `wrangler.jsonc`/`open-next.config.ts`. No local service, no NFA runtime dependency, no cloudflared tunnel."

### Source evidence

- `wrangler.jsonc:1-29` — name `maxadjust`, `nodejs_compat`, routes `maxadjust.com/*` and `www.maxadjust.com/*`, `workers_dev: true`.
- `package.json:12-15` — `preview`/`deploy`/`upload`/`cf-typegen` scripts using `opennextjs-cloudflare` and `wrangler`; `devDependencies` `@opennextjs/cloudflare: ^1.20.17`, `wrangler: ^4.163.0` (`package.json:72,85`).
- `open-next.config.ts`, `.gitignore:25-28` (`/.open-next/`, `/.wrangler/`, `.dev.vars*`) — Workers build artifacts.
- `src/app/contact/page.tsx:36` and `src/app/(home)/_alpha/ContactSection.tsx:34` — both `client.from("leads").insert({...})`.
- `src/lib/supabase.ts:6-12` — reads `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` only; no change to env var names.
- Operator statement this session: maxadjust.com's Vercel plan is cancelled (HTTP 402 `DEPLOYMENT_DISABLED`); live site now resolves 200 via Cloudflare; DNS apex/`www` CNAMEs point at `maxadjust.ynotfins.workers.dev` (MX/TXT/SPF/DKIM/DMARC unchanged). Not independently re-verified by docs-guardian this pass — relayed from the caller's session-verified facts; caller must re-confirm before applying.

### Requires

authority_maintainer + AUTH id + rollback + validators + independent review. Do not auto-apply.
