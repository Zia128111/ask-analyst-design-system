# Ask Analyst Design System v2.0

Supersedes `ask-analyst-design-system-clean-V1.0.md`.

**Brand colour `#1485ff` is fixed and unchanged.** It remains the colour of every
fill, border, button, table rule, badge, icon and heading accent. The one
exception is documented in §2.4.

Implementation lives in `src/theme/tokens.ts` (source of truth), bound to Mantine
in `src/theme/index.ts`, with component rules in `src/theme/components/`.
Run `npm run verify` to check the system against itself — 117 assertions across
tokens, number formatting, chart palettes and RTL readiness.

---

## 1. Audit of v1.0

v1.0 was **measured off a Figma file rather than designed**. That single fact
explains almost every defect below: export artefacts were recorded as if they
were decisions.

### 1.1 Accessibility — the material findings

The v1.0 contrast table asserts WCAG AA compliance. **All five stated ratios are
wrong**, and two of them hide real failures:

| Pair | v1.0 claim | Measured | AA text (4.5:1) |
|---|---|---|---|
| `#0a0a0a` on white | 17.2:1 | **19.80:1** | pass |
| `#334155` on white | 8.9:1 | **10.35:1** | pass |
| `#1485ff` on white | 5.4:1 | **3.60:1** | **FAIL** |
| `#606060` on white | 6.8:1 | **6.29:1** | pass |
| `#15803d` on `#dcfce7` | 8.1:1 | **4.57:1** | pass (barely) |

Two further failures were undocumented:

- `#1485ff` on `#f0f7ff` = **3.34:1** — the Company badge, the flagship badge.
- `#979797` borders on white = **2.92:1** — fails even the 3:1 non-text
  threshold of WCAG 1.4.11, so form-control boundaries were non-compliant.

**v1.0 also defined no focus state whatsoever**, which is a High-severity
keyboard-accessibility failure on its own.

### 1.2 Values that were measurement noise, not design

`radius: 1.231px` · `padding: 14.775px × 6.156px` · `border: 0.2px` · `0.25px` ·
`0.8px` · `1.6px` · `font-size: 10.32px` · `line-height: 123.94%`

Browsers round `border-width` to whole **device** pixels, so every sub-pixel
border either vanished or silently became 1px. None of these rendered as written.

### 1.3 Structural problems

| Problem | Detail |
|---|---|
| Spacing not a grid | Declared "multiples of 8px" then listed 12px; ad-hoc gaps of 5, 9, 15, 18, 23, 25, 34px |
| Type scale arbitrary | 40/28/21/20/18/16/14/13/12/11 — 20-vs-21 and 12-vs-13 are indistinguishable |
| Below legibility floor | 10px table headers, 11px labels |
| Line height too tight | 14px text on 16px leading = 1.14; body needs 1.5 (WCAG 1.4.12) |
| Touch targets too small | Nav items at 6.156px vertical padding ≈ 23px tall, vs a 44px target |
| Fixed pixel layout | 1440 / 1260 / 1114 / 345px columns — a documented responsive anti-pattern |
| No dark mode | For a dashboard used all day |
| No motion tokens | No durations, no easings, no `prefers-reduced-motion` |
| No z-index scale | Stacking left to ad-hoc numbers |
| Unspecified components | Its own checklist left Form Input, Modal, Dropdown and Toast unticked |
| No tabular figures | Fatal for a financial product — prices do not align in a column |

---

## 2. Colour

### 2.1 Ramps

Ten steps, light → dark, verified monotonic.

| Ramp | Role |
|---|---|
| `blue` | brand + interactive |
| `neutral` | text, borders, surfaces |
| `green` / `red` / `amber` | positive / negative / warning |

### 2.2 The brand ramp

| Shade | Hex | On white | Use |
|---|---|---|---|
| 0 | `#f0f7ff` | 1.08 | surface tint, table header fill, hover |
| 6 | **`#1485ff`** | 3.60 | **BRAND** — fills, borders, buttons, rules, icons, large text |
| 7 | `#0a6fdb` | 4.87 | body-size link and accent **text** only |
| 8 | `#0759b0` | 6.85 | link hover / pressed |
| 9 | `#044386` | 9.76 | AAA contexts |

### 2.3 Semantic tokens

Components reference semantic names — never a ramp index, never a raw hex:

`text-primary` `text-secondary` `text-tertiary` `text-disabled` `text-link`
`text-link-hover` `text-inverse` · `bg-page` `bg-surface` `bg-subtle` `bg-muted`
`bg-brand` `bg-brand-subtle` `bg-hover` `bg-selected` · `border-subtle`
`border-default` `border-strong` `border-brand` `border-focus` ·
`positive-*` `negative-*` `warning-*` `neutral-*` (text / bg / border each)

Every one is defined in both light and dark. `verify-tokens.mjs` asserts the two
sets expose identical keys, so dark mode cannot silently drift.

### 2.4 The one place `#1485ff` is not used

`#1485ff` measures **3.60:1** on white. WCAG AA requires **4.5:1** for text below
24px (or below 18.7px bold). So:

- **Kept `#1485ff`:** all fills, borders, buttons, table rules, badges, icons,
  chart series, focus emphasis, and any text at 24px+.
- **`#0a6fdb` instead:** body-size links and accent text only (4.87:1).

**Labels ON a `#1485ff` fill are WHITE** — `text-on-brand`, applied to the
filled Button, the active Pagination control, the SegmentedControl indicator
and the Slider value bubble.

**Selected states use the light tint instead**, with the blue as text: the
active nav item, the Company badge and the filter chips all pair
`bg-brand-subtle` with `text-link` (4.51:1). The brand `#1485ff` would be
3.34:1 as text on that tint, which is why `text-link` exists.

This is a **recorded, accepted deviation** (brand decision, 2026-09-07):

| | Ratio | AA small text (4.5:1) | AA large text / UI (3:1) |
|---|---|---|---|
| white on `#1485ff` | **3.60:1** | fails | passes |
| ink on `#1485ff` | 5.50:1 | passes | passes |

The trade-off is deliberately **not hidden**. `verify-tokens.mjs` still measures
it, asserts the 3:1 threshold it does meet, and prints the shortfall on every
run, so it cannot quietly disappear from the codebase.

Mitigation where it matters most: raise brand-filled labels to 18.7px bold or
24px regular, at which point 3.60:1 *is* AA-compliant. Reverting is one token:
set `text-on-brand` back to `ink`.

At body size these two blues are near-indistinguishable side by side; the brand
reads identically while the text becomes legible to low-vision users.

**To override:** set `'text-link'` and `'text-link-hover'` back to `blue[6]` in
`src/theme/tokens.ts` — one line. `verify-tokens.mjs` will then fail with the
exact ratio, which is the intended behaviour: the trade-off stays visible rather
than silently regressing.

### 2.5 Colour is never the only signal

Up/down, positive/negative and error states always pair colour with a glyph or
text (`▲` / `▼`, an icon, or a label). Required by WCAG 1.4.1 and essential for
the ~8% of men with colour-vision deficiency reading a red/green market table.

---

## 3. Typography

Lato, **self-hosted**. Google Fonts serves only 100/300/400/700/900 and silently
drops the 500 and 600 the system needs; the full upstream family is vendored via
`lato-font`. `font-synthesis: none` so a missing cut fails loudly.

### 3.1 Scale — 12px floor, no near-duplicate steps

| Token | Size | Use |
|---|---|---|
| `2xs` | 12px | labels, table headers, badges — **floor**, never body |
| `xs` | 14px | dense table body, meta |
| `sm` | 16px | **body default** — 16px stops iOS zooming form fields |
| `md` | 18px | lead paragraphs |
| `lg` | 20px | h4 |
| `xl` | 24px | h3 |
| `2xl` | 30px | h2 |
| `3xl` | 36px | h1 |
| `4xl` | 48px | display |

Adjacent steps must differ by ≥2px **and** ≥8% — enforced by the verifier.

### 3.2 Line height

`tight` 1.1 (display) · `snug` 1.25 (headings) · `normal` 1.4 (dense data) ·
`relaxed` 1.5 (body — the WCAG 1.4.12 floor)

### 3.3 Weight

400 regular · 500 medium · 600 semibold · 700 bold — all real cuts.

### 3.4 Tabular figures — mandatory

`font-variant-numeric: tabular-nums` on every `td`, `th` and `[data-numeric]`.
Proportional digits stop prices and percentages aligning down a column, which is
the single most important typographic requirement in a market product.

---

## 4. Space, shape, elevation

- **Space:** strict 4px grid — 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96.
- **Radius:** 4 / 6 (badges) / 8 (buttons, inputs) / 12 (cards) / 16 (modals) / full.
- **Border:** `thin` 1px, `thick` 2px. **Whole pixels only.**
- **Elevation:** `none` → `xl`, deliberately flat. A data dashboard should not float.

---

## 5. Sizing and touch targets

| Control | Height |
|---|---|
| `xs` | 28px — dense row actions, fine pointer only |
| `sm` | 32px |
| `md` | **40px — default** |
| `lg` | 48px |

- WCAG 2.5.8 (AA) floor: **24×24px** — asserted by the verifier.
- WCAG 2.5.5 (AAA) and both mobile HIGs: **44×44px**, applied automatically
  under `@media (pointer: coarse)`.

---

## 6. Motion

`instant` 0ms · `fast` 120ms (hover, focus) · `base` 200ms · `slow` 320ms (overlays)

Easings: `standard`, `decelerate` (entering), `accelerate` (exiting — exits are
faster than entrances). `prefers-reduced-motion: reduce` is honoured globally in
one place in `index.css`.

---

## 7. Layering and layout

**z-index:** base 0 · raised 10 · sticky 1100 · overlay 1200 · modal 1300 ·
popover 1400 · toast 1500 · tooltip 1600.

**Breakpoints:** 640 / 768 / 1024 / 1280 / 1536px, mobile-first.

**Containers** are max-widths, not fixed widths. `prose` is `68ch` — measure is
set by the text, not by a pixel count.

---

## 8. Components

### 8.1 Button
Default variant is the v1.0 button: white fill, 1px `#1485ff` border, dark label.
Height from the control scale (was 13.5px padding producing a 47px off-grid
control). Radius 8px. Focus ring on `:focus-visible`.

### 8.2 Badge
Five tones — `company`, `report`, `success`, `negative`, `neutral`. 12px/700,
6px radius, 1px border, 4×8px padding, sentence case. Each verified against its
own fill.

### 8.3 Card / Paper
White surface, 1px **brand blue** border (deliberate, not a neutral outline),
12px radius, 24px padding, `sm` shadow.

### 8.4 Table
The densest surface in the product.

- Header fill `#f0f7ff`; header rule **2px**; row rules **1px**; both brand blue.
- **Horizontal rules only** — no outer frame, no column separators. All three
  Mantine defaults (`withTableBorder`, `withColumnBorders`, `withRowBorders`)
  are off; `withRowBorders` in particular puts a border on the `<tr>` that
  double-draws against the rule on the `<td>`.
- Header 12px uppercase, `0.04em` tracking. Body 14px/500.
- **Zebra striping removed.** v1.0 tinted alternate rows `#f7fdf9` (green) and
  `#fffafa` (red). In a market table where green and red carry real meaning, row
  parity must not borrow those colours. Row rules plus a hover highlight do the
  same scanning job honestly.
- Numeric columns right-aligned, tabular figures.
- Wide tables scroll in their own `.ask-scroll-x` container, never the page.

### 8.5 Form controls — new in v2.0
Unspecified in v1.0. `TextInput` `Textarea` `PasswordInput` `NumberInput`
`Select` `MultiSelect` `NativeSelect` `Checkbox` `Radio` `Switch`.

- Border `border-strong` (4.76:1) — clears WCAG 1.4.11, which v1.0's `#979797`
  at 2.92:1 did not.
- **Visible labels always.** Placeholder-as-label is an anti-pattern: the label
  disappears the moment the user types.
- 16px input text so iOS Safari does not zoom on focus.
- Errors render **beside the field**, never only in a summary at the top.

### 8.6 Controls — new in v2.0
`SegmentedControl` (the 1D/1M/1Y chart switch — v1.0 spec'd it at ~23px tall
with 0.2px borders and a 1.231px radius), `ActionIcon` (**always requires an
aria-label**), `Alert` (four tones matching the badge palette), `Pagination`,
`NavLink`, `Loader`, `Skeleton`, `Divider`.

NavLink's active state uses brand shade 8 (`#0759b0`) rather than v1.0's
`#1d4283`, which sat outside every ramp.

### 8.7 Overlays — new in v2.0
`Modal` (focus returned to trigger on close), `Tooltip` (keyboard- and
touch-reachable, not hover-only, per WCAG 1.4.13), `Menu`, `Tabs`.

### 8.8 Avatar
Rounded squares at the 8px radius token (v1.0's 9px was off-grid).

### 8.9 Link
`#0a6fdb`, **underlined by default** — colour alone must not distinguish a link
from its surrounding text.

---

## 8bis. Data visualisation

Every colour below was produced by the dataviz validator, not chosen by eye, and
is re-checked in CI by `npm run verify:charts` (18 assertions).

### Categorical — fixed order, never cycled

`#1485ff` `#ea580c` `#0d9488` `#9333ea` `#a16207` `#0891b2` `#db2777` `#4d7c0f`

Colour follows the **entity**, not its rank: `createSeriesPalette()` keys off the
series name, so filtering one out never repaints the survivors. A 9th series
folds into "Other" or becomes small multiples — never a generated hue.

**Green and red are deliberately absent.** They are reserved for market
direction; reusing them for "series 4" would make a neutral series read as a
gain or a loss.

Validated on **both** surfaces (light `#fcfcfb`, dark `#111a2b`): lightness band,
chroma floor, adjacent CVD separation (worst ΔE 10.3 deutan), normal-vision
floor (worst ΔE 23.3) and ≥3:1 contrast. The same eight steps pass in both modes
— measured, not assumed. A "lifted" dark variant was tried first and **failed**
the lightness band.

### Sequential — magnitude

`#5cb0ff` → `#1485ff` → `#0759b0` → `#044386`. One hue, monotone, light end
clears 2:1 on the surface. A lighter first step measured 1.76:1 and was rejected.

### Diverging — and the honest caveat

| Pair | Poles | ΔE under deuteranopia |
|---|---|---|
| `market` (default) | red ↔ green | **4.2 — NOT colour-blind safe** |
| `accessible` (opt-in) | orange ↔ blue | **30** |

Red/green is what traders expect, so it stays the default — but it is
effectively **one colour** to roughly 8% of men. It is therefore only ever legal
alongside the ▲/▼ glyph and a text label, which `MarketTable` enforces. The
verifier asserts the `cvdSafe: false` flag still matches the measured ΔE, so
nobody can quietly flip it.

Both midpoints are a neutral grey — never a hue at the middle, never a rainbow.

### Chart rules

- **One axis.** `assertSingleAxis()` throws on a dual-scale chart — the single
  most common charting mistake, because it lets the author imply any
  correlation by choosing the scales.
- **Zero baseline for bars, fitted domain for levels.** Length encodes magnitude
  on a bar, so truncating lies. An index chart forced to zero turns a 0.7% move
  into a flat line — and a *filled area* on a truncated axis is doubly wrong,
  since the area implies measurement from zero. Levels use a line with a fitted
  y-domain.
- **Axis text wears text tokens**, never a series colour. Grid and axes are
  recessive; the data is the subject.
- Marks: 2px lines, 8px markers, 4px bar radius, 2px surface gap between fills.
- Tabular figures on every axis and tooltip value.

---

## 8ter. Right-to-left (Arabic)

An *Ask Analyst – Saudi* product exists, so RTL is a real target rather than a
hypothetical. The system is RTL-ready and it is **enforced, not assumed**.

### Logical properties only

`npm run verify:rtl` walks every `.css`/`.ts`/`.tsx` file and fails the build on
any physical property that has a logical equivalent — `margin-left`,
`padding-right`, `border-left`, `text-align: left`, `left:`/`right:`, physical
border-radius corners. Comments are stripped first, so prose about "the right
column" does not trip it.

The audit found only **three** offenders across the whole system, because
everything is token-driven:

| Was | Now |
|---|---|
| `left: 0` on the pinned ticker column | `inset-inline-start: 0` |
| `text-align: left` on body cells | `text-align: start` |
| `text-align: right` on numeric cells | `text-align: end` |

Mirroring therefore needs **no second stylesheet** — `DirectionProvider` flips
`dir` and the layout follows.

### Numbers are LTR inside an RTL layout

This is the trap. A figure is left-to-right content even in Arabic, and the
bidi algorithm reorders the neutral characters around it. Before isolation,
`(3.70)%` rendered as `%(3.70)` — the accounting parenthesis and the unit
swapped sides.

Numeric cells are therefore `direction: ltr; unicode-bidi: isolate`. Isolation
also stops one cell's direction leaking into its neighbour. `end` then resolves
against that LTR context, giving the conventional right-alignment for a column
of numbers in either script.

### Verified

With `dir="rtl"`: the ticker column pins to the **right**, numeric columns
mirror, the Blockquote accent bar moves to the inline-start, percentages render
`(3.70)%`, negative signs hold position, and no horizontal overflow is
introduced.

---

## 8quater. Page compositions

Implements v1.0 §Component Specifications › Header, Navigation Bar, Title
Section, Meta Section — the four items that were page layouts rather than
component defaults.

v1.0 measured them off a Figma frame: a 1440px-wide header, `position: absolute`
for the nav bar, a 0.25px header rule, and nav items at ~23px tall with a
1.231px radius. A fixed-width header does not exist on a phone, absolute
positioning breaks the moment content reflows, and sub-pixel borders never
rendered. All four are rebuilt as flow layout on the token scale.

### Skip link — new

The first focusable element on the page. v1.0 had none, so reaching content by
keyboard meant tabbing through all nine nav items, on every page.

It reveals on **`:focus`**, not `:focus-visible` — a skip link must appear
whenever focused, including focus moved programmatically or restored after a
route change. Gating it on `:focus-visible` leaves it hidden in exactly those
cases.

### Landmarks

`<header>` · `<nav aria-label="Primary">` · `<main id="main" tabindex="-1">`,
with exactly one `<h1>` per page. `tabindex="-1"` lets the skip link move focus
into `main` without making it a tab stop.

### Navigation

Flow layout, not absolute. Items are 40px tall (44px on coarse pointers).
**Nine items cannot fit on a phone**, so below the `lg` breakpoint the nav moves
into a Drawer behind a Burger rather than wrapping into a three-line header.

Active state hangs off **`aria-current="page"`** — the CSS selector reads the
same attribute a screen reader does, so the visual state and the announced
state cannot drift apart.

### Title & meta

The page title is **left-aligned by default**. v1.0 centred it; for a
scanning-heavy data product the eye should return to a consistent inline-start
edge. `centered` remains available for report covers.

Meta items are dot-separated, and the dot is `aria-hidden` — without it a
screen reader announces "bullet" between every item.

---

## 8quinquies. Iconography

**Set: Tabler Icons** (`@tabler/icons-react`, MIT) — chosen because it is the
set Mantine itself is designed against, so sizing and optical weight already
agree with the components.

v1.0 specified eight icon sizes (12/14/16/18/20/24/30/124) but **named no set
and no stroke weight**, which is exactly how a product ends up mixing emoji,
typed arrows and three SVG families.

### Sizes and weight

| Token | px | Use |
|---|---|---|
| `xs` | 14 | inline with 12px label text |
| `sm` | 16 | **default** — body text, table cells |
| `md` | 20 | buttons, form adornments |
| `lg` | 24 | section headers, card actions |
| `xl` | 32 | feature tiles |
| `2xl` | 48 | empty states |

Stroke **1.5** by default — Tabler ships at 2, which is heavy beside Lato — and
**1.75 below 16px** so strokes survive on low-DPI screens.

### Rules, enforced by `npm run verify:icons`

1. **Never an emoji or a typed symbol.** They render differently per platform,
   cannot be recoloured with `currentColor`, and a screen reader announces the
   Unicode name ("black up-pointing triangle") rather than the meaning. The
   market ▲/▼ are now `IconCaretUpFilled` / `IconCaretDownFilled`.
2. **Import from `src/lib/icons.tsx`**, never from `@tabler/icons-react`
   directly, so the curated set and the aria defaults stay in force.
3. A decorative icon is `aria-hidden` **automatically** — the wrapper adds it
   when no `label` prop is passed, so it is structural rather than remembered.
4. An icon that *is* the control needs an `aria-label`.
5. An icon is never the only carrier of meaning: the market table pairs its
   direction icon with a visually hidden "up"/"down".

The one sanctioned exception is `DIRECTION_GLYPH` in `lib/format.ts` — text
triangles for CSV export and the plain-text newsletter, where an SVG cannot go.
Those lines carry an explicit `icon-ok` marker.

---

## 8sexies. Output targets beyond the screen

### Print — Research Reports and letterheads

`src/theme/print.css`. v1.0 had none, so a printed report carried the nav bar,
the dark theme's ink, and tables cut mid-row across pages.

- Forces the light palette; a dark page prints as grey mud and wastes toner.
- Hides controls (nav, switches, pagination, drawers, toasts) but keeps content.
- `thead { display: table-header-group }` so **column headers repeat on every
  page** a long table spans — without it the reader loses column meaning after
  page one.
- `break-inside: avoid` on cards, rows and figures; `break-after: avoid` on
  headings so one never lands as the last line of a page; `orphans`/`widows: 3`.
- Restores **real borders** on table cells: our rules are drawn with
  `box-shadow`, which does not print at all.
- Prints link destinations — `a[href^="http"]::after { content: " (" attr(href) ")" }`
  — but not for in-page anchors, which would be noise.

### Email — the Morning Briefing newsletter

`src/lib/email-tokens.ts`, verified by `npm run verify:email` (41 assertions).

Email cannot use the design system directly: **CSS custom properties are
unsupported in Outlook** and stripped by several webmail clients, so
`var(--ask-*)` resolves to nothing and text renders black-on-black. Self-hosted
Lato will not load, external stylesheets are stripped, `rem` is unreliable,
flexbox and grid are unsupported, and `prefers-color-scheme` is inconsistently
honoured — so email is light-only, px-based, table-based and inline-styled.

The tokens are therefore **flattened literals derived from the same source**,
and the verifier binds them back: it asserts `emailColor.brand === blue[6]`,
that no inline style contains `var()` or `rem`, and that every pair still clears
4.5:1 after flattening. A colour changed in `tokens.ts` and not in the email now
**fails the build** rather than drifting for a year.

Email is also the one place **physical `left`/`right` is correct** (logical
properties are unsupported), and those lines carry an `rtl-ok` marker. An Arabic
newsletter needs a mirrored template, not a mirrored stylesheet.

### Density modes

`src/theme/density.css`. Set `data-density="compact|comfortable"` on any
container. An analyst scanning 200 rows wants more per screen; a report reader
wants room.

| Mode | Cell padding | Control height |
|---|---|---|
| compact | 4px / 8px | 32px |
| default | 8px / 12px | 40px |
| comfortable | 12px / 16px | 48px |

**Only padding and control height change.** Type size never shrinks — dropping
text below the 12px floor to fit more rows is how a density mode becomes an
accessibility failure. On coarse pointers compact still yields 44px targets.

---

## 8septies. Brand assets

`src/components/Logo.tsx` exports `<Logo>` (full lockup) and `<LogoMark>`
(mark only, for favicons, avatars and collapsed nav). It is **generated from
the supplied SVGs**, so the path data is exact rather than retyped.

**Four files collapsed to one component.** The supplied Default and Dark icons
are identical apart from sub-pixel rounding; the two logos differ only in the
ten wordmark paths (`#1F2630` vs white). The wordmark therefore uses
`currentColor`, driven by the `logo-wordmark` token, so there is one asset to
maintain rather than four to keep in sync.

**The logo blues are NOT the interface blue** — and are deliberately left that
way. A logo is a fixed asset and must not be recoloured to match the UI:

| Where | Colour |
|---|---|
| Mark gradient | `#0EA4F1` → `#0077CA` |
| Mark bars | `#0086DB`, `#09A2F0` |
| Interface brand | `#1485ff` |

This does mean two blue families sit side by side in the header. That is a
brand decision to make deliberately, not a bug to fix silently.

The gradient id is generated per instance with `useId` — a hard-coded id
collides when two logos render on one page and the second loses its fill.

---

## 8octies. Appearance controls

The header's colour-scheme and text-direction controls are **segmented
controls, not switches**. A switch implies one feature turned on or off; light
and dark (and LTR and RTL) are two peer choices, and a segmented control shows
both with the current one marked.

Both share `ChromeToggle.module.css` and are deliberately **neutral** rather
than brand-blue: they sit beside the active nav item, and more blue there would
compete with the thing telling you where you are. Chrome controls recede; data
controls (the 1D/1M/1Y timeframe switch) keep the brand indicator.

Direction icons are **not** mirrored in RTL — they depict the directions
themselves, so mirroring would make each option show the other's meaning.

---

## 9. Accessibility contract

Every item below is machine-checked by `npm run verify:tokens`:

1. Body, secondary, tertiary and link text ≥ 4.5:1 in **both** schemes.
2. Every badge tone ≥ 4.5:1 against its own fill.
3. Form borders and focus rings ≥ 3:1 (WCAG 1.4.11).
4. Brand blue is asserted to be **below** AA for text, so nobody reintroduces it
   as a body-text colour by "simplifying".
5. Control heights ≥ 24px (WCAG 2.5.8).
6. Type steps ≥ 12px and mutually distinguishable.
7. Light and dark expose identical token keys.

**axe-core reports exactly ONE violation, in 3 nodes** — and it is the recorded
white-on-brand deviation from §2.4, not a defect: the filled Button label and
two SegmentedControl active labels, all white on `#1485ff` at 3.6:1. Everything
else passes (52 checks each) across wcag2a/2aa/21a/21aa/22aa/best-practice, in
light, dark AND rtl.

**Any OTHER axe violation is a regression.** That is the bar to hold. Run it
with `npm run verify:a11y` against a running dev server.

Reverting the deviation (set `text-on-brand` to `ink` in tokens.ts) takes axe
to zero.

The first axe run found five real violations, all since fixed: unnamed
Pagination edge buttons (critical), an unnamed Slider thumb and Progress bar, a
`DatePickerInput` placeholder below contrast, and a skipped heading level. A
sixth surfaced in dark mode only — Mantine dims the Blockquote cite with
opacity, blending it to 3.02:1.

Enforced in CSS rather than by review: a visible `:focus-visible` ring on every
control, 44px targets on coarse pointers, `prefers-reduced-motion`,
`scroll-padding-top` so a sticky header cannot obscure focus (WCAG 2.4.12).

---

## 9bis. Mantine integration audit

Mantine's Styles API has one dangerous property: **a `classNames` key that is
not a real slot is silently ignored.** No error, no warning — the rule simply
never applies. Across 25 CSS modules that is impossible to catch by reading.

`npm run audit:slots` emits a browser snippet that checks, for all **71**
classes the modules declare, whether each actually reached the DOM.
**Result: 71/71.** Nothing is dead code and no slot name is wrong.

Anything reported absent is one of two things, and the difference matters: a
wrong slot name (a bug), or a slot the docs page never exercises (add it to the
docs). Interaction-gated slots — drawer, dropdown, calendar, chart tooltip,
combobox empty — need the snippet run after opening them.

### Package alignment

All six `@mantine/*` packages are pinned to the same minor (9.6.0). A mismatch
between `core` and a sibling produces broken styling rather than an install
error, so this is worth checking on every upgrade.

### The recurring Mantine trap: opacity

Twice now, a part looked washed out despite carrying the right token, because
**Mantine dims it with `opacity`** — which blends whatever colour we set:

| Part | Token colour | Rendered | Ratio |
|---|---|---|---|
| Blockquote `cite` (dark) | `#94a3b8` | `#5e718a` | 3.02:1 |
| Calendar outside-day (dark) | `#94a3b8` | `#535f72` | 2.69:1 |

Both needed `opacity: 1`, not a different colour. **When a Mantine part looks
faded, check for opacity before changing the token** — changing the token
cannot fix it.

### Mantine defaults that fail accessibility

These are library defaults, not our code, and each was fixed at theme level so
it is fixed everywhere:

- `Pagination` first/prev/next/last — icon-only, **no accessible name**
- `DatePicker` calendar header arrows — icon-only, **no accessible name**
- `Slider` thumb — named from `thumbLabel`; an `aria-label` on the root does
  not reach it
- `Progress` — `role="progressbar"` with no name
- `Select`/`Autocomplete` — render an **empty dropdown** with no message, which
  reads as "broken" rather than "no results"
- `DatePickerInput` placeholder — below contrast

---

## 10. Governance

1. **Never hard-code a hex, size or spacing value in a component.** Add or use a
   token. Any raw value in `src/theme/index.ts` is a bug by definition.
2. **Run `npm run verify:tokens` in CI.** It exits non-zero on any violation.
3. **Changing a colour means re-running the verifier**, not eyeballing it — v1.0
   is what eyeballing produces.
4. Component rules live in `src/theme/components/*.module.css`, each citing the
   spec section it implements.

---

## 11. Coverage

Measured by `npm run coverage`, which parses the theme and compares it against
every `@mantine/core` export.

| | Count |
|---|---|
| `@mantine/core` component exports | 289 |
| Explicitly themed | **60** |
| Layout / internal primitives that inherit tokens automatically | 229 |
| **Distinctive components still unthemed** | **0** |

Plus four date components from `@mantine/dates`, which are not core exports.

`Box`, `Grid`, `Stack`, `Flex`, `Text`, `Title` and the other 223 layout
primitives need no work — they consume the token layer already.

### Packages

Installed and themed: `@mantine/core`, `@mantine/hooks`,
`@mantine/notifications`, `@mantine/dates`, `react-google-charts`,
`@tabler/icons-react`.

**Charts run on `react-google-charts`, not `@mantine/charts`** (swapped
2026-09-07). Three consequences are permanent and worth re-reading before any
chart work — see §8bis.

Not installed (no current product need): `@mantine/dropzone`,
`@mantine/carousel`, `@mantine/spotlight`, `@mantine/form`, `@mantine/modals`,
`@mantine/tiptap`, `@mantine/nprogress`, `@mantine/code-highlight`.

### Mantine UI blocks are a separate thing

Mantine UI's "Application UI" set (Navbars, Headers, Stats, Tables, ...) are
pre-built **compositions**, not primitives. They are assembled from the core
components this system themes, so they now inherit the full token layer — but
each is a page-level layout that still needs its own design pass.

---

## 12. Still open

The **system** is complete: tokens, 60 components with zero gaps, charts, icons,
brand assets, RTL, print, email, density, page compositions, and 160 automated
assertions. What is NOT complete is the **programme around it**. These are real
and verified as of 2026-09-07, not hypothetical.

### Blocking a second product

| Gap | Evidence |
|---|---|
| **Not distributable** | `version: 0.0.0`, `private: true`, no `exports`, no `main` |
| **Locale hardcoded** | `LOCALE = 'en-US'`, `tz = 'Asia/Karachi'` in `lib/format.ts` |

Ask Analyst Saudi cannot consume this. It is an application, not a package —
a second product would mean a divergent copy. Extracting it now is cheap;
after Saudi starts it is a migration.

### Blocking confidence in changes

| Gap | Evidence |
|---|---|
| **No component tests** | zero `.test.` / `.spec.` files |
| **No visual regression** | no Playwright / Chromatic / Percy / Vitest installed |

The 160 assertions cover tokens, formatters and palettes — **not component
behaviour**. Nothing catches "the drawer stopped trapping focus" or "this
button now looks wrong". Every visual defect found so far was caught by a
person looking at the screen.

### Blocking designer adoption

| Gap | Evidence |
|---|---|
| **No Figma parity** | tokens exist only in code |
| **No prop-level docs** | no `.storybook`, no `docs/` |

This is currently a front-end system, not a design system. Designers have no
synced source of truth, so handoff will drift within weeks. The Figma MCP with
Code Connect is available and unused.

### Process

`CHANGELOG.md`, `CONTRIBUTING.md` and ADRs are all absent. §10 is a set of
rules, not a process — there is no record of *why* decisions were made (the
white-on-brand call, the charting-library swap, the nav tint).

### Lower stakes

- **A designer review pass** — everything is verified against measurable rules;
  nobody has yet said "that feels right".
- **`npm run verify:a11y` in CI** — needs a running server, so a separate job.
- **Never met a real screen.** Systems break when they hit real layouts.
- **Performance budget** — 776 KB JS / 239 KB gzipped, inflated by the docs
  page importing everything, but undefined means unmanaged.
- **Mantine UI blocks** inherit the tokens but each needs its own design pass.
- **Packages not yet needed:** dropzone, carousel, spotlight, form, modals,
  tiptap, nprogress, code-highlight.

---

## 13. Commands

| Command | What it checks |
|---|---|
| `npm run verify` | all six static suites below |
| `npm run verify:tokens` | 85 — contrast in both schemes, 4px grid, whole-pixel borders, type scale, touch floors |
| `npm run verify:format` | 16 — millions/billions, accounting parentheses, precision, `—` for unavailable |
| `npm run verify:charts` | 18 — CVD separation, reserved hues, sequential monotonicity, the diverging honesty flag |
| `npm run verify:rtl` | physical properties that will not mirror in Arabic |
| `npm run verify:icons` | emoji-as-icons, and Tabler imports bypassing `lib/icons` |
| `npm run verify:email` | 41 — flattened tokens still match source, no `var()`/`rem`, contrast holds |
| `npm run verify:a11y` | axe-core against a running server |
| `npm run coverage` | themed vs unthemed Mantine components |

**Total: 160 static assertions, plus axe.**
