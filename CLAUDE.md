# Ask Analyst Design System — working rules

Read this before writing UI code in any project that consumes
`@akseer/ask-analyst-design-system`. Every rule here encodes a mistake that
actually shipped in v1.0 of the product. The full reasoning is in
`DESIGN-SYSTEM-v2.md`.

## Setup in a consuming project

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

Import order is not cosmetic. Our layer overrides Mantine defaults; load it
first and the overrides silently lose.

## Hard rules

1. **Never hard-code a hex, size, or spacing value.** Use a token from
   `tokens`, or a CSS variable (`var(--ask-*)`). No exceptions in components.
2. **`#1485ff` is fixed.** It is the brand. Do not "improve" it.
3. **Import icons from the package**, never from `@tabler/icons-react`:
   `import { Icons } from '@akseer/ask-analyst-design-system'`.
4. **Never an emoji or a typed symbol as an icon** (`▲`, `✓`, `→`). Screen
   readers announce the Unicode name, not the meaning.
5. **All numbers go through the formatters** — `formatPrice`, `formatVolume`,
   `formatPercent`, `formatCompact`. Never `toFixed`, never concatenation.
   Millions/billions, never lakh/crore. Missing data is `NOT_AVAILABLE` (`—`).
6. **Logical properties only** — `padding-inline`, not `padding-left`. An
   Arabic (RTL) build exists and must mirror without a second stylesheet.
7. **Colour is never the only signal.** Up/down pairs a colour token with a
   glyph *and* a visually hidden word. Red/green is ΔE 4.2 under deuteranopia
   — effectively identical to ~8% of men.
8. **Tabular figures for all numeric columns**, so digits align.

## Known, deliberate deviation

`text-on-brand` is **white on `#1485ff` = 3.60:1**. That passes AA for large
text and non-text UI (3:1) but fails AA for small text (4.5:1). It is a brand
decision, recorded rather than hidden. `verify:tokens` measures and prints it
on every run. axe reports exactly this and nothing else — **any other
violation is a regression**.

## Mantine traps that have each cost a debugging session

- **Mantine writes many CSS variables as inline styles** (`--button-bg`,
  `--nl-color`, `--chip-color`). A CSS module rule can never beat them — use
  the `vars` resolver. This has bitten four separate components.
- **A wrong `classNames` slot name fails silently.** No error, no warning, the
  style just never applies. `npm run audit:slots` catches it.
- **Mantine dims parts with `opacity`**, which blends whatever colour you set.
  If something looks washed out, check for opacity before changing the token.
- **`Combobox.extend()` does not reach `Select`.** Select needs the input and
  combobox classes merged explicitly.
- **Browsers round `border-width` to whole device pixels.** Fractional rules
  (1.6px) flatten to 1px. Use whole pixels, or an inset `box-shadow`.

## Charts

`react-google-charts`, not `@mantine/charts`. It loads from `gstatic.com` at
runtime, cannot be self-hosted, and forces `dir="ltr"` inside its own
container — the RTL fix is a physical-property override scoped to `[dir='rtl']`
and is the one sanctioned exception to rule 6. Use `lineChartOptions` etc.
rather than hand-writing options.

## Before saying a UI change is done

```bash
npm run verify        # 160 static assertions across six suites
npm run verify:a11y   # axe, needs the dev server running
```

`verify:icons` and `verify:rtl` are lint-like and worth running against
consuming application code too, not just this package.
