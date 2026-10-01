---
title: design-tripwire-instrument
description: Light paper instrument-grade SaaS for Saudi compliance early-warning. Dense professional UI, teal brand moments only, semantic good/warn/danger statuses, Inter with tabular numerics. Built for operations managers and accountants who need watchful calm — not panic.
---

# Tripwire Instrument

You are designing in the **Tripwire Instrument** language. This is not a template to copy. It is a set of convictions, proportions, and taste lines that produce dense, professional, instrument-grade compliance interfaces. The output should feel unmistakably from the same language but never identical to a prior run.

## Core conviction

Tripwire Instrument is **light paper, absolute**. The aesthetic lives at the intersection of an **airport ops board** and a **calm financial desk** — dense, watchful, competent. Urgency without panic. Every detail is deliberate: hairline borders do the elevation work, teal is reserved for brand moments only, and status color is always semantic. “See the next problem early. Explain it. Point at the fix.”

Two things you must never do:

- **Do not reproduce the exact copy.** Company names, issue titles, and metrics in any reference are demo data. Invent your own that match the voice.
- **Do not reproduce the exact layout pixel-for-pixel.** Reorder panels, vary metric counts, swap which issue is primary. Never ship an identical clone of a prior build.

## Voice

The tone is calm, watchful, and competent. The writer speaks like a senior operations manager: plain sentences, concrete nouns, no superlatives.

**Rules:**

- State the risk, the window, and the next action in that order.
- Ban: “revolutionize”, “seamless”, “AI-powered”, “next-generation”, “unlock”, “supercharge”.
- One idea per sentence. Prefer “needs attention” over “urgent!!!”.
- Status language is fixed: **Action required** / **Needs attention** / **Healthy** / **Watch** / **At risk**.
- Decision-support footer always present. Never claim legal certainty.
- Approved vocabulary: obligation, exposure, deadline, evidence, review, quota, filing, renewal, band, source.

## Composition

**Not a recipe, but tendencies:**

- **Shell:** Fixed left sidebar (236px) + sticky topbar with company switcher, search, notifications, avatar.
- **Pages:** One `h1` + short status subline. Then instrument panels (cards) stacked in 1–2 columns.
- **Overview:** Health score + gauge first, then alert cards, then timeline + compliance areas.
- **Issue detail:** Breadcrumb → head card → What / Why / Checklist + Details / Assign / Affected / Reco.
- **Spacing:** 14–20px inside panels; 16px between cards; 26–32px page padding.
- **Data:** Tabular numerics. Micro-labels uppercase 11px with 0.08em tracking.

**Refuse:**

- Gradients, glassmorphism, 3D blobs, glow brains, robot imagery.
- Purple AI marketing palettes and neon accents.
- Walls of monospace uppercase as the primary UI voice.
- Saturated brand fills on large surfaces (teal is a mark, not a wash).
- Fake testimonials, invented logos, vanity stats.

## Color

Light paper only. No dark mode in the product chrome.

**Commitment level: warm paper instrument.** White cards on `#F5F5F2` canvas; ink navy text; teal `#0D6E66` only for brand/links/selected nav; statuses are green/amber/red.

```css
:root {
  --bg:#F5F5F2; --surface:#FFFFFF; --surface-2:#FAFAF7; --inset:#EFEFEA;
  --ink:#19222E; --ink-2:#3E4A57; --muted:#5D6874; --faint:#64707D;
  --border:#E5E7E2; --border-2:#D6D9D2;
  --brand:#0D6E66; --brand-ink:#0A5A53; --brand-soft:#E4F0EE; --brand-line:#BEDAD5;
  --good:#37734E; --good-ink:#2C5F40; --good-soft:#E9F2EA; --good-line:#C9DED0;
  --warn:#A05E03; --warn-ink:#7C470A; --warn-soft:#FAF1DF; --warn-line:#EBD8B0;
  --danger:#B0372E; --danger-ink:#962D25; --danger-soft:#FAEEEC; --danger-line:#EDD0CB;
  --radius:12px; --radius-s:8px;
  --shadow-1:0 1px 2px rgba(25,34,46,.05);
  --shadow-2:0 12px 28px -14px rgba(25,34,46,.22), 0 2px 6px -2px rgba(25,34,46,.08);
}
```

**Rules:**

- Brand teal appears only on: logo mark, active nav, focus rings, links, reco callout, today marker on timeline.
- Status never uses brand. Status always uses good/warn/danger.
- Primary buttons are ink (`#19222E`), not teal.
- Vary the brand hue slightly between builds within a muted institutional range (teal → deep cyan → forest). Never bright neon.

## Typography

One family: **Inter** (Google Fonts, 300–800). Optional mono only for rare debug HUDs — product UI is Inter-only.

| Element | Size | Weight | Tracking | Notes |
|---|---|---|---|---|
| h1 page | 25px | 640 | -0.021em | |
| health num | 34px | 660 | -0.025em | tabular-nums |
| panel h2 | 15px | 640 | -0.008em | |
| body | 14px | 400 | — | 1.55 line-height |
| micro-label | 11px | 640 | 0.08em | uppercase |
| pill | 11px | 620 | 0.02em | |

Use `font-feature-settings:"cv01","ss03"` and `font-variant-numeric:tabular-nums` on metrics.

**Vary between projects:** font sizes ±1px; health metric can be “score”, “open wires”, or “days clear” as long as the gauge grammar holds.

## Motion

Motion is snappy and utility-only. 0.15–0.26s ease. Page enter: 240ms fade+5px rise. Side panel: cubic-bezier(.32,.72,.28,1). No ambient decoration.

**Respect `prefers-reduced-motion: reduce` globally.**

## Interaction & navigation

### Focus & accessibility

- `:focus-visible`: 2px solid brand, 2px offset, 6px radius.
- Menus: `aria-expanded`, Escape to close, click-outside dismiss.
- Touch targets ≥ 44px on coarse pointers where possible; dense desktop rows may be 34–40px.

### Navigation

**Desktop:** Left sidebar with icon + label. Primary: Overview, Compliance, Employees, Deadlines, Documents, Regulations. Workspace group: Reports, Integrations, Settings. Footer: Help, Company profile, User card.

**Topbar:** Company switcher (menu of legal entities), search with ⌘K hint, notifications with unread dot, avatar.

**Vary nav labels** between projects: e.g. Overview→Status, Compliance→Obligations, Deadlines→Calendar.

## Layout sections (approved roster)

Use 5–8 of these. Never repeat the same type twice on one screen.

- **Health instrument** — score /100, delta pill, gauge with At risk / Watch / Healthy ticks, source disclaimer.
- **Alert cards** — sev-chip, kind label, title, one-line why, days pill, quiet action.
- **Timeline** — 30-day track with today mark, above/below event stems (desktop) and stacked list (mobile).
- **Area list** — icon, name, meta, status pill, chevron; filters by status chips.
- **Issue detail** — What’s happening / Why this matters / What you should do checklist + Details / Assign / Affected / Tripwire suggests.
- **Data tables** — employees, deadlines, documents with status pills and row actions.
- **Regulation feed** — expandable cards with facts, impact, and “what you need to do”.
- **Stub** — honest empty state for unbuilt areas.

## Architecture & performance guardrails

**Output shape:** React + TypeScript + Vite product app (or single-file prototype). CSS custom properties on `:root`. No Tailwind required.

**Project manifest (React app):**

```
src/
  styles/tokens.css     — prescriptive (copy this language’s tokens)
  components/Shell.tsx  — sidebar + topbar (author per build within rules)
  pages/*               — author per build
  data/seed.ts          — author per build (demo company + obligations)
```

**Rules:**

- Fonts via Google Fonts Inter, `display=swap`.
- Icons: inline SVG sprite or Lucide — no icon font binaries.
- No analytics. No trackers.
- Prefer one design-system file; ban ad-hoc hex outside tokens.

## HTML head & meta

- Title format: `Tripwire — Compliance early-warning for Saudi SMEs` (or brand + proposition).
- Description 120–155 chars, plain product English.
- `theme-color` matching `--bg` or `--brand`.
- Favicon: inline SVG mark (wave + node), no external request.

## Accessibility checklist

- Semantic landmarks: `aside`, `main`, `header`, `nav` with labels.
- Strict heading hierarchy.
- Buttons have `type`.
- `aria-label` on icon-only controls.
- Status never color-only — always pair with text.
- Reduced motion + contrast respected.

## LLM directives: vary vs. freeze

**Vary:**

- Company name, CR, headcount, issue titles, metrics, dates.
- Which three alerts lead Overview.
- Brand hue within institutional teal/cyan/forest.
- Panel order and count.

**Never vary:**

- Status vocabulary and semantic color mapping.
- Teal-for-brand-only rule.
- Primary button = ink, not accent.
- Inter single-family UI type system.
- Decision-support disclaimer.
- Gauge grammar (At risk / Watch / Healthy).
- No gradients / no AI-startup chrome.

## About (human)

- **Aesthetic:** Light paper instrument-grade compliance SaaS
- **Stack:** React · TS · Vite · CSS variables
- **Output:** Product app / prototype
- **Tokens:** ~24 CSS variables
- **Score:** Internal product language (V2)
- **Source of truth for product:** `reference/V2 Tripwire-Interactive Prototype.html`
