# NFA alignment — maxadjust

This repository is an NFA-owned sister. It does not copy the nfa-platform
authority bundle.

**Index:** `D:\github\nfa-platform\docs\SISTER_ALIGNMENT.md`

## Consume

- Visual system: RGDS **policy pin** `v1.1.3` (`1859744`), theme `primary-light`. The site still vendors `vendor/r3lentless-rgds-web-1.1.1.tgz` until the MaxAdjust brand patch is published (see README). Do not treat 1.1.1 as a second pin, and do not bump the tarball in a docs-only change.
- Remaining Crisis Navigator / Guardian work: nfa-platform NP-119
- Hosting: maxadjust.com runs on Cloudflare Workers from this repository's own `wrangler.jsonc`/`open-next.config.ts`. No local service, no NFA runtime dependency, no cloudflared tunnel.

## Never own

- NFA Chaser / Supe / Back Office
- Billing, Stripe, seats, entitlements
- Phone ingest or county / FIPS routing
- RGDS token files (edit RGDS upstream only)
- A second Crisis Navigator
