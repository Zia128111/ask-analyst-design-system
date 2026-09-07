---
category: Data Display
---

# MarketTable

The reference implementation of the ranked-quote table. Every ranked list in the
product - Top Active, Advancers, Decliners, screener results - should be this
component rather than a hand-rolled table.

```tsx
const rows: Quote[] = [
  { symbol: 'CNERGY', price: 13.92, change: -0.54, changePct: -3.7, volume: 149299436 },
  { symbol: 'LSEFSL', price: 3.66, change: 0.96, changePct: 35.6, volume: 8241226, tick: 'up' },
  { symbol: 'HBL', price: null, change: null, changePct: null, volume: null },
];

<MarketTable rows={rows} caption="Top active stocks" stickyHeader />
```

- Columns are fixed: Symbol, Price, Change, %, Volume. Every number goes through
  the design system formatters, so pass raw numbers - never pre-formatted strings.
  `null` renders as an em-dash (`NOT_AVAILABLE`), which is how missing data is
  shown throughout the product.
- `caption` is required and is the accessible name of the table. It renders above
  the table and gains a "Delayed" suffix when `stale` is set.
- `status` drives the whole lifecycle in one prop: `loading` renders
  `TableSkeleton`, `error` renders `ErrorState` (wire `onRetry`), `empty` - or an
  empty `rows` array - renders `EmptyState`. Do not branch on these yourself.
- `stale` dims the figures AND labels them; never signal staleness with opacity
  alone.
- Direction is encoded three ways at once: a colour token, an SVG caret, and a
  visually hidden word (up / down / unchanged). `tick: 'up' | 'down'` on a row
  triggers the transient price-flash for a live update.
