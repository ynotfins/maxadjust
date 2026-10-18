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
