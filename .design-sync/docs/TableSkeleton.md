---
category: Data States
---

# TableSkeleton

The loading state for tabular data - a skeleton, never a spinner. It reserves the
space the real rows will occupy, so Cumulative Layout Shift stays at zero; a
centred spinner collapses the container and then jolts it open.

```tsx
<TableSkeleton rows={5} cols={5} />
```

- `rows` (default 5) and `cols` (default 5) should match the table it stands in
  for. Cell widths vary by column so it reads as content, not a progress bar.
- Announced once, politely, via `role="status"` plus `aria-busy`; the skeleton grid
  itself is `aria-hidden`.
- `MarketTable status="loading"` renders this for you. Use it directly only for
  tables that are not `MarketTable`.
