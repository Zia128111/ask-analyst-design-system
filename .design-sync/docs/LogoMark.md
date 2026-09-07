---
category: Brand
---

# LogoMark

The mark on its own - favicons, avatars, a collapsed nav rail, loading states.
Same props as `Logo`.

```tsx
<LogoMark height={32} title="Ask Analyst" />
```

- `height` in px; width follows the aspect ratio.
- `title` is the accessible name, or `null` when the name is already present as
  text beside it.
- Reach for the full `Logo` wherever there is room for the wordmark; the mark alone
  is for constrained space, not a style choice.
