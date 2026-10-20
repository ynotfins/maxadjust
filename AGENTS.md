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

## Documentation Integrity

Documentation reconciliation is a **completion invariant**. A task is not complete
while documentation drift introduced by that task remains unresolved.

After any material change invoke the **docs-guardian** sub-agent:
`Task(subagent_type=docs-guardian, run_in_background=false)`

docs-guardian is globally installed at `C:\Users\ynotf\.cursor\agents\docs-guardian.md`
and is the mandatory completion gate for this repository.

**Required declaration:** After running docs-guardian and receiving `Completion gate: CLEAR`,
you MUST end your final response with this exact line:

```
Docs: CLEAR
```

If docs-guardian cannot run, end with `Docs: NOT RUN — [explicit reason]`.
The stop hook validates this declaration. A response without it will trigger a re-fire.

**Automatic enforcement:** A Cursor hook (`.cursor/hooks.json`) watches for edits to
material files and injects a docs-guardian reminder at edit time and again at session end.
Do not dismiss these reminders without running docs-guardian. The hook cannot spawn the
sub-agent directly — you must invoke it via the Task tool when prompted.

Documentation must distinguish: **implemented/current** | **planned/proposed** |
**deprecated/historical**. Never document planned behavior as implemented, and
never leave implemented behavior undocumented where a documentation surface exists.
