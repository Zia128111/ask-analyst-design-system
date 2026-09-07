---
category: Data States
---

# StaleNotice

The as-of / delayed label. The most easily forgotten state and the riskiest one: a
market product showing old prices as if they were live is a correctness problem,
not a cosmetic one.

```tsx
<StaleNotice asOf="3:30 PM PKT" delayedMinutes={15} />
```

- `asOf` is required - the timestamp the figures were true at, already formatted
  (use `formatTime` / `formatDate`).
- `delayedMinutes` prepends "Delayed by N minutes". Omit it for data that is simply
  as-of a point in time rather than lagged.
- Pair it with the dimming on `MarketTable stale`: the label carries the meaning,
  the dimming only reinforces it. Never signal staleness with opacity alone.
