# Ask Analyst Design System

The design system for Ask Analyst — tokens, themed components, and the automated
checks that keep them honest.

Built on [Mantine 9](https://mantine.dev) + React 19 + Vite. Full specification
in **[DESIGN-SYSTEM-v2.md](./DESIGN-SYSTEM-v2.md)**.

---

## Use it in a project

```bash
npm i github:Zia128111/ask-analyst-design-system
```

```tsx
import { DirectionProvider, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { theme, cssVariablesResolver } from '@akseer/ask-analyst-design-system';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '@akseer/ask-analyst-design-system/styles.css'; // MUST come after Mantine

<DirectionProvider>
  <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver} defaultColorScheme="light">
    <Notifications position="bottom-right" limit={3} />
    {children}
  </MantineProvider>
</DirectionProvider>
```

Then import what you need — `tokens`, `Icons`, the formatters, and the
components (`MarketTable`, `AskChart`, `PageHeading`, `AppHeader`, `Logo`,
`EmptyState`…):

```tsx
import { Icons, formatPrice, MarketTable } from '@akseer/ask-analyst-design-system';
```

React, Mantine and `react-dom` are **peer** dependencies, so the consuming app
owns exactly one copy of each. Self-hosted Lato ships inside the package.

**Drop [CLAUDE.md](./CLAUDE.md) into any project that uses this** — it is the
rule set Claude Code reads so the constraints are applied without being
restated each session.

## Develop the design system itself

```bash
npm install
npm run dev       # living documentation at http://localhost:5173
npm run verify    # all six static suites
npm run build:lib # produce dist/
```

**`dist/` is committed on purpose.** Installing from GitHub with a `prepare`
script forces every consumer to download the full devDependency tree and run a
build before npm can extract anything — minutes per project, every time. With
the build committed, an install is a clone and a copy.

The cost is that `dist/` must be rebuilt and committed with any `src/` change:

```bash
npm run build:lib && git add dist && git commit
```

The dev server serves a **living documentation page** showing every token and
component. A component that isn't rendered there is effectively untested — three
real bugs survived exactly that way before the page covered everything.

---

## What's in here

| | |
|---|---|
| `src/theme/tokens.ts` | **Single source of truth.** Colour, type, space, radius, border, elevation, motion, z-index, breakpoints, control sizing, icons, charts |
| `src/theme/index.ts` | Maps tokens onto Mantine. Any number here not imported from `tokens.ts` is a bug |
| `src/theme/components/` | 25 CSS modules, one per component, each citing the spec section it implements |
| `src/lib/format.ts` | The only sanctioned number formatters (millions/billions, accounting parentheses) |
| `src/lib/icons.tsx` | Curated Tabler set. Import icons from here, never from `@tabler/icons-react` |
| `src/components/` | Logo, page header, market table, data states, charts |
| `scripts/` | The verification suites |

---

## Verification

**160 static assertions across six suites**, plus axe. Every rule encodes a
mistake that v1.0 actually shipped — this is a regression net, not a style
opinion.

```bash
npm run verify          # all six
npm run verify:tokens   # 85 — contrast both schemes, 4px grid, whole-pixel borders, type scale, touch floors
npm run verify:format   # 16 — millions/billions, accounting parentheses, precision
npm run verify:charts   # 18 — colour-blind separation, reserved hues, the diverging honesty flag
npm run verify:rtl      #      physical properties that will not mirror in Arabic
npm run verify:icons    #      emoji-as-icons, and Tabler imports bypassing lib/icons
npm run verify:email    # 41 — flattened tokens still match source, no var()/rem
npm run verify:a11y     #      axe-core (needs a running dev server)
npm run coverage        #      themed vs unthemed Mantine components
npm run audit:slots     #      Mantine classNames slots that silently do nothing
```

### The one known accessibility deviation

`text-on-brand` is **white on `#1485ff` = 3.60:1**. That passes AA for large
text and UI (3:1) but is below AA for small text (4.5:1). It is a deliberate
brand decision, recorded rather than hidden: `verify:tokens` measures it and
prints the shortfall on every run.

**axe reports exactly this, in 3 nodes. Any other violation is a regression.**

---

## Rules that are enforced, not remembered

- **Never hard-code a hex, size or spacing value in a component.** Use a token.
- **Import icons from `src/lib/icons.tsx`**, never from `@tabler/icons-react`.
- **Never an emoji as an icon.**
- **Logical properties only** (`padding-inline`, not `padding-left`) — an
  Arabic build exists.
- **Numbers go through `lib/format.ts`.** Never `toFixed` or string concatenation.
- **Colour is never the only signal.** Up/down pairs colour with a glyph and a
  visually hidden word.

CI fails on each of these.

---

## Gotchas worth knowing before you change anything

- **Mantine writes many CSS variables as INLINE styles** (`--button-bg`,
  `--nl-color`, `--chip-color`). A CSS module rule can never beat them — use the
  `vars` resolver. This has bitten four separate components.
- **A wrong `classNames` slot name fails silently.** No error, no warning, the
  style just never applies. `npm run audit:slots` catches it.
- **Mantine dims some parts with `opacity`**, which blends whatever colour you
  set. If something looks washed out, check for opacity before changing the token.
- **Charts run on `react-google-charts`**, which loads from `gstatic.com` at
  runtime, cannot be self-hosted, and forces `dir="ltr"` inside its own
  container. See §8bis of the spec.

---

## Status

Complete: tokens, 60 components with zero gaps, charts, icons, brand assets,
RTL, print, email, density, page compositions.

**Figma:** the system is ported to the Ask Analyst design file — 142 variables
across 3 collections, 17 component sets / 68 variants, and all 28 sanctioned
icons as live instances of the Tabler Icons Community library. Two filled carets
are local backfills because that library version doesn't ship them; see
§8quinquies.

Not yet done — see §12 of the spec: the package is not distributable
(`private: true`, no `exports`), locale is hardcoded to `en-US`, there are no
component or visual-regression tests, Code Connect needs a Figma Organization
plan, and `Alert` tones carry no icon in either code or Figma.
