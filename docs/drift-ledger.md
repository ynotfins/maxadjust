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
- status: applied 2026-11-24 in `98b11f3` (operator `UNLOCK README.md`, `UNLOCK AGENTS.md`, `UNLOCK NFA_ALIGNMENT.md`)
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

### Applied

Operator issued the unlock explicitly on 2026-11-24 (`UNLOCK README.md`, `UNLOCK AGENTS.md`, `UNLOCK NFA_ALIGNMENT.md`), scoped to this entry's proposed wording only. The three files were edited verbatim against verified source on branch `docs/unlock-workers-hosting` (commit `98b11f3`); no other section of those files changed. docs-guardian re-ran after the edit.

DNS and live-host facts re-confirmed by the caller before applying: apex `maxadjust.com` and `www` are proxied CNAMEs to `maxadjust.ynotfins.workers.dev`; `curl -sI https://maxadjust.com` returns 200 from `server: cloudflare`; `www` returns 308 to the apex. The Vercel project was deleted by the operator on 2026-11-24 (Vercel API now returns 404 for `prj_S7Lu3kbcvjTDCLek3wpPrB8fxbvX`).

## 2026-11-24-readme-lead-intake-server-side

- class: governed-doc-drift
- status: proposed (not applied)
- file: `README.md` (repo root)
- authority: Tier 2 `operator_locked` — universal fallback (no `contracts/authority-lock.yaml`). The prior unlock (`docs/unlock-workers-hosting`) was consumed and closed; README.md is locked again.
- date: 2026-11-24
- memory: NOT_AVAILABLE (gateway not queried this pass — same unresolved state as the 2026-10-18 entry; not blocking, ledger is primary record)

### Why

Commit `c4c60d1` (PR #10, merged `bc8e3600`) moved lead intake from a client-side Supabase insert to a server route, `POST /api/leads`. `README.md:36-43` still describes the old shape: it names only `NEXT_PUBLIC_SUPABASE_URL`/`NEXT_PUBLIC_SUPABASE_ANON_KEY` as the env vars and says the forms "insert into a Supabase `public.leads` table" directly. That is no longer true — the browser never touches Supabase now — and the paragraph omits three material facts: the `/api/leads` route, the honeypot/timing/rate-limit filters, and that the Supabase credentials are now Worker secrets named `SUPABASE_URL`/`SUPABASE_ANON_KEY` (with the `NEXT_PUBLIC_*` names kept only as a server-side fallback, not for browser use).

### Proposed

**`README.md`** — form-backend paragraph (`README.md:36-43`), replace the env block and sentence:

- current:
  ```
  Optional form backend:

  ```
  NEXT_PUBLIC_SUPABASE_URL=
  NEXT_PUBLIC_SUPABASE_ANON_KEY=
  ```

  Home (`/`) and `/contact` both insert into a Supabase `public.leads` table (insert-only via RLS for anon). Without Supabase env vars configured, the home contact form falls back to `mailto:`.
  ```
- proposed:
  ```
  Optional form backend:

  ```
  SUPABASE_URL=
  SUPABASE_ANON_KEY=
  ```

  Home (`/`) and `/contact` both POST to `POST /api/leads`, a server route that validates the payload, drops submissions caught by an honeypot field or a sub-2-second fill time, applies a per-IP rate limit (`LEAD_RATE_LIMITER` Workers binding, approximate by design — not a hard cap), then inserts into Supabase `public.leads` (insert-only via RLS for anon) using server-only credentials. The browser never holds a Supabase key. Without Supabase configured, `/api/leads` returns 503 and both forms fall back to `mailto:`.
  ```

### Source evidence

- `src/app/api/leads/route.ts:1-114` (new in `c4c60d1`) — honeypot (`company` field), `MIN_FILL_MS = 2000`, `LIMITS` field caps, `LEAD_RATE_LIMITER.limit()`, `getSupabase().from("leads").insert(...)`, 503 on `not_configured`, 429 on rate limit, 422 on invalid payload.
- `src/lib/supabase.ts:6-16` — `getSupabase()` now reads `process.env.SUPABASE_URL ?? NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_ANON_KEY ?? NEXT_PUBLIC_SUPABASE_ANON_KEY`; doc comment states it is server-only since the intake moved to `/api/leads`.
- `src/app/(home)/_alpha/ContactSection.tsx` and `src/app/contact/page.tsx` (diffed in `c4c60d1`) — both now `fetch("/api/leads", ...)` with `company` honeypot + `elapsedMs`, keep `mailto:` fallback on non-OK response; neither imports `supabase-js` any longer.
- `wrangler.jsonc` — added `ratelimits: [{ name: "LEAD_RATE_LIMITER", namespace_id: "1001", simple: { limit: 5, period: 60 } }]`.
- Caller-verified this session (not independently re-verified by docs-guardian): production 200s on `/`, `/contact`, `/health`, `/blogs`; honeypot/sub-2s submissions return `{ok:true}` with no row; bad email → 422; valid submission → row written; an 8-request burst did not trip the rate limit (consistent with Cloudflare's own "approximate" documentation for this binding type, so the proposed wording avoids claiming a hard cap); built client assets contain zero occurrences of the Supabase URL or anon key.

### Unproven / do not let docs assert as fact

- Whether the per-IP rate limit reliably blocks at 5 req/60s under real abuse — Cloudflare documents this binding as approximate, and the caller's 8-request burst did not trip it. The proposed wording says "approximate by design — not a hard cap" rather than describing it as an enforced ceiling.
- Honeypot and timing-gate effectiveness against a scripted (non-browser) bot that simply waits 2s and leaves `company` blank — not tested this session. No doc claims the filters are bot-proof; none should.
- No Turnstile/CAPTCHA exists in this flow — true by its absence from the diff, not asserted as a design choice in any doc; no action needed since nothing documents its presence.

### Requires

authority_maintainer + AUTH id + rollback + validators + independent review. Do not auto-apply.

### Applied

Not applied. Awaiting operator `UNLOCK README.md` or equivalent governed-doc process.
