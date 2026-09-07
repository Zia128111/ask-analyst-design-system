# Building with the Ask Analyst Design System

A Mantine 9 binding for Akseer Research's market products. Layout and primitives
come from Mantine (`Stack`, `Group`, `Card`, `Table`, `Button`, `Text`, `Title`,
`Badge`, `Alert`, `SegmentedControl`, `SimpleGrid`, … — all 555 exports, including
`@mantine/dates` and `@mantine/notifications`, are on the same global as the 12
Ask Analyst components). There is no utility-class vocabulary: style with Mantine
props and `var(--ask-*)` tokens.

## Wrap the tree — without this, nothing is styled

Every `--ask-*` and `--mantine-*` variable is injected at runtime by
`MantineProvider`. Outside it, components render as unstyled browser defaults.

```tsx
<DirectionProvider>
  <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver} defaultColorScheme="light">
    <Notifications position="bottom-right" limit={3} />
    {/* your screen */}
  </MantineProvider>
</DirectionProvider>
```

`DirectionProvider` is not optional: an Arabic (RTL) build exists, and
`DirectionToggle` drives it.

## The token vocabulary

Never hard-code a hex, size or spacing value — use a token. Brand blue is fixed
at `#1485ff`; do not "improve" it.

| Family | Real names |
| --- | --- |
| Text | `--ask-text-primary`, `-secondary`, `-tertiary`, `-disabled`, `-link`, `-link-hover`, `-inverse`, `-on-brand` |
| Surface | `--ask-bg-page`, `-surface`, `-subtle`, `-muted`, `-brand`, `-brand-subtle`, `-hover`, `-selected` |
| Border | `--ask-border-subtle`, `-default`, `-strong`, `-brand`, `-focus`; widths `--ask-border-thin` / `-thick` |
| Status | `--ask-positive-*`, `--ask-negative-*`, `--ask-warning-*`, `--ask-neutral-*` (each `-text`, `-bg`, `-border`) |
| Scale | `--ask-space-1`…`-6`, `--ask-radius-xs/sm/md/lg/full`, `--ask-control-xs/sm/md/lg`, `--ask-font-2xs/xs/sm/md`, `--ask-leading-normal/relaxed`, `--ask-z-raised/sticky/popover` |

Mantine's own scales are remapped onto these, so `gap="md"`, `p="lg"`,
`size="sm"` and `radius="md"` are already on-system — prefer them for layout and
reach for `var(--ask-*)` for colour and anything Mantine doesn't expose.

## Rules that are not style preferences

1. **All numbers go through the formatters** — `formatPrice`, `formatPercent`,
   `formatVolume`, `formatCompact`, `formatChange`, `formatMarketCap`,
   `formatTime`, `formatDate`. Never `toFixed`, never concatenation. Millions and
   billions, never lakh/crore. Missing data is `NOT_AVAILABLE` (`—`).
2. **Icons come from `Icons`**, never `@tabler/icons-react`: `up down flat search
   filter sort sortAsc sortDesc download refresh close check externalLink star
   starFilled chevronDown chevronRight info warning sun moon directionLtr
   directionRtl chart report calendar watch alerts`. Usage: `<Icons.search
   size="sm" label="Search" />` — omit `label` only when text sits beside it.
   Never an emoji or a typed glyph (`▲`, `✓`, `→`) as an icon.
3. **Colour is never the only signal.** Direction pairs a colour token with a
   glyph *and* a visually hidden word — `direction()`, `DIRECTION_TOKEN`,
   `DIRECTION_ICON`, `DIRECTION_LABEL` do this for you.
4. **Logical properties only** — `padding-inline`, not `padding-left`.
5. **Tabular figures in every numeric column**, so digits align.
6. **Charts are `AskChart`**, themed via `lineChartOptions` / `barChartOptions` /
   `pieChartOptions`. Never `@mantine/charts`, never hand-written options.

## Where the truth lives

- `styles.css` and its imports — the compiled Mantine + Ask Analyst layers.
- `guidelines/CLAUDE.md` — the hard rules with the mistake each one encodes.
- `guidelines/DESIGN-SYSTEM-v2.md` — the full specification.
- `components/<group>/<Name>/<Name>.prompt.md` — per-component usage and props.

## An idiomatic screen

```tsx
<Stack gap="xl" p="lg" style={{ background: 'var(--ask-bg-page)' }}>
  <PageHeading title="Market" meta={['KSE-100', 'Equities', 'As of 3:30 PM PKT']} />

  <Card withBorder radius="md" p="lg">
    <Group justify="space-between" align="baseline" mb="md">
      <Title order={2}>Top active stocks</Title>
      <StaleNotice asOf="3:30 PM PKT" delayedMinutes={15} />
    </Group>

    <MarketTable rows={quotes} caption="Top active stocks by volume" stickyHeader />
  </Card>
</Stack>
```
