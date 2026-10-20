# AGENTS.md — maxadjust.com

## Mission

Canonical Next.js marketing site for **maxadjust.com**.

Writable repository: `D:\github\maxadjust`

## Product boundary

In scope: marketing pages, service routes, blog, compare, contact, legal.

Out of scope: NFA ops apps, billing, phone ingest, county / FIPS routing,
homeowner identity, or rewriting RGDS tokens.

## Authority

1. This file
2. `NFA_ALIGNMENT.md`
3. nfa-platform `docs/SISTER_ALIGNMENT.md`
4. nfa-platform `AGENTS.md` and `DESIGN_SYSTEM.md` when a change would affect NFA or Crisis UX
5. RGDS upstream docs for visual tokens — consume the pin; do not edit RGDS from this repo

Crisis Navigator / Guardian follow is nfa-platform NP-119. Reuse the NFA
homeowner portal UX contract. Do not invent a second navigator.

## Write rules

- Cursor and Devin may write. Other agents are read-only unless the operator opens this repo.
- Do not add `DECISIONS.md`, `STATE.md`, `DATABASE.md`, or payment/design copies from nfa-platform.
- Production today is this repo on Vercel at https://maxadjust.com. A later move off Vercel is not prepared here.
