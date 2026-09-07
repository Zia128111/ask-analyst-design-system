---
category: Navigation
---

# PageHeading

The page title block: exactly one `<h1>`, an optional dot-separated meta row, and
a children slot for controls that belong with the title.

```tsx
<PageHeading
  title="Market"
  meta={['KSE-100', 'Equities', 'As of 3:30 PM PKT']}
>
  <StaleNotice asOf="3:30 PM PKT" delayedMinutes={15} />
</PageHeading>
```

- `meta` items are `ReactNode[]` and render dot-separated; the dots are decorative
  and `aria-hidden`. Typical items: ticker, sector, timestamp, author.
- `centered` is opt-in. The default is left-aligned because the product is
  scanning-heavy, so the eye returns to a consistent inline-start edge down the
  page. Reserve `centered` for report covers and marketing pages.
- One `PageHeading` per page. Later sections use `<Title order={2}>`, not a second
  `PageHeading`, so heading order stays a valid landmark tree.
