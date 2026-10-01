# Tripwire

Compliance early-warning for Saudi SMEs. The product promise is one line:

> Never miss a Saudi business obligation, and know exactly what to do next.

This repo is the interactive prototype of that promise. A working front end on seeded demo
data, built to test whether the thesis holds before anyone pays for a backend.

## The thesis

Saudi SME compliance is a memory problem disguised as a software problem. A company with 10 to
50 employees has obligations across at least four government systems (ZATCA, Qiwa, GOSI,
Baladiya) plus an internal document set. Nobody owns the whole list. The owner or operations
manager carries it in their head, and it fails the day they take leave.

Accounting and HR software already tracks its own obligations well. Wafeq, Daftra, Qoyod,
ZenHR and Jisr cover large parts of the surface, and their own published pricing sets a low
anchor at SAR 119/month for a VAT-registered starter plan. Another invoice screen, or another
payroll register, is not a business.

What is missing is the layer above them: one normalized view of the company's obligations,
ranked by how close the deadline is and how much damage a miss causes, each carrying the
reason it exists, the person who owns it, and the paperwork needed to close it.

Tripwire claims that layer. Not a government portal bot. Not an ERP. Decision support with a
workflow attached.

## What the research supports, and what it does not

The full assessment is in [`docs/research-memo.md`](docs/research-memo.md) with 15 cited
sources (ZATCA, HRSD, Monsha'at, SDAIA, vendor pricing pages). The parts that shaped this
prototype:

| Claim | Source | Status |
|---|---|---|
| Wave 25 e-invoicing integration hits taxpayers above SAR 187,500 revenue, due 1 Feb 2027 | ZATCA | Confirmed |
| Saudization raised to 70% in 12 procurement roles, applies at establishments with 3+ workers in those roles | HRSD | Confirmed |
| Wages are already digitally monitored: 1M+ establishments on Mudad, compliance above 85% | HRSD | Confirmed |
| 1.7M active commercial registrations | Monsha'at Q2 2025 SME Monitor | Confirmed, upper bound only |
| Public stable APIs exist for Qiwa, Mudad, GOSI, Balady, Muqeem | none found | Unconfirmed, gating diligence |

Two honest limits on those numbers. No establishment-level dataset by employee band was
found, so the memo's revenue tables are illustrative scenarios, not TAM, and this repo
claims no market size. The SME digital-readiness survey in the memo is vendor-sponsored and
directional.

## What the prototype covers

Seven screens, all wired to real interaction, all driven by one seeded company.

**Al Noor Trading Co.**, CR 1010447821, Riyadh, 32 employees (18 Saudi, 14 expatriate across
7 nationalities). Two more companies sit in the switcher for demonstration only; their data
is identical.

| Screen | What it proves |
|---|---|
| Overview | Health score, ranked alerts, 30-day timeline, seven compliance areas |
| Compliance | Area rollup with counts by severity, plus connected-source status |
| Issue detail | The core loop: what is happening, why it matters, what to do, who owns it, who is affected, then an action pack |
| Employees | Contract and document status per employee, Nitaqat composition against band requirement |
| Deadlines | Calendar grouped by week and month, each with an owner and a next action |
| Documents | Ten tracked documents with expiry, status and category filter |
| Regulations | Regulatory change translated into company impact, including "no action needed" |

Reports, Integrations, Settings, Help and Company profile are stubs on purpose. They are in
the product map and not in this prototype, and the stub screen says so rather than faking a
page.

### One issue end to end

The prototype's spine is a single realistic thread. Workforce composition is 56% Saudi
against a band requirement marked at 60%, review 23 days out. The detail screen shows the two
employees with open items (an Iqama expiring Oct 12, one unauthenticated contract), five
checklist tasks, a suggestion of three authenticated Saudi hires or two hires plus one role
reclassification, and the action pack button.

## Trust model

Compliance advice that is wrong costs a penalty, not a bad opinion. Three rules shaped the UI.

Risk carries its source. The regulations screen names the issuing body and date on every
change, and separates "this may affect you" from "no action needed".

The health score states in the UI that it is recomputed nightly from ZATCA, Qiwa, GOSI and the
document tracker, and that it is not an official government score.

Nothing files to a government portal unattended. No stable public API exists for most of the
relevant platforms, and scraping carries terms-of-use exposure. Action packs are drafted for
a human to approve and send.

Positioning stays at decision support. Legal and tax advice needs a qualified operating model
this prototype does not have, so the product states its limits instead of implying certainty.

## Design

Full spec in [`docs/DESIGN.md`](docs/DESIGN.md). In short: light paper instrument, the visual
language of an airport ops board. Warm paper canvas `#F5F5F2`, white cards, ink navy text,
hairline borders instead of shadows. Teal `#0D6E66` is reserved for brand and selected states.
Status color is always semantic: green, amber, red. Inter with tabular numerals so columns of
figures line up. Density is the point. This is an operations tool.

Refused on purpose: gradients, glassmorphism, glow effects, purple AI palettes, fake
testimonials, vanity metrics.

## Stack

React 19 with TypeScript, Vite 8, oxlint. No UI framework, no component library, no state
library. The design language is specific enough that a dependency would have fought it.

```
src/
  App.tsx              screen routing and shared UI state
  components/          Shell (nav, topbar, menus), primitives, rows
  pages/               one file per screen
  data/product.ts      all demo data, 610 lines
  types/product.ts     the domain model
  styles/tokens.css    the whole design system, 1,488 lines
```

About 3,700 lines of source in total, and roughly two fifths of it is the stylesheet.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # tsc -b && vite build, type checked
npm run lint       # oxlint
npm run preview
```

Node 20 or newer. Verified on Node 26.9.0 with npm 11.19.1.

## Real versus demo

Real: the interaction model, screen architecture, ranking logic shape, trust language, and the
full design system.

Demo: every number. Company names, employee records, scores, dates. There is no backend, no
persistence, no portal integration, no risk engine. The health score is hardcoded at 82. The
"recomputed nightly" wording describes intended behavior.

## Where it goes next

1. Replace `src/data/product.ts` with a real obligation model plus the scoring rules the memo
   describes, versioned with citations and effective dates.
2. Concierge MVP before software: secure document upload, structured forms, email ingestion,
   CSV exports, accountant-assisted updates. Prove value without depending on portal access
   that may never be granted.
3. Integrate only what has an official path, starting with ZATCA. Everything else stays
   user-guided or operator-assisted.
4. Predictive scoring only once enough company-specific history exists to justify it.

## Status

Prototype, September 2026. Demo data only. Not a compliance tool, and not to be used as one.