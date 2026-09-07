---
category: Data States
---

# EmptyState

The nothing-to-show state. It always says why it is empty and what to do next -
"No data" on its own leaves the user unsure whether the product is broken.

```tsx
<EmptyState
  title="No matching stocks"
  description="Try widening your filters, or clear the search to see the full list."
  action={<Button variant="light" onClick={reset}>Clear filters</Button>}
/>
```

- `title` is required and should name the thing that is missing, not the failure.
- `description` gives the recovery path in one sentence.
- `action` takes a button or link that performs that recovery. Omit it only when
  there is genuinely nothing the user can do.
- Centred, `role="status"`, capped at a 360px measure so the text stays readable.
