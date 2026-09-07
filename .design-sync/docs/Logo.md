---
category: Brand
---

# Logo

The full Ask Analyst lockup - mark plus wordmark. Inline SVG, so it inherits
`currentColor` and stays crisp at any size.

```tsx
<Logo height={28} title="Ask Analyst" />
```

- `height` is in px and the width scales with the aspect ratio; never set width
  directly. 28px is the header size.
- `title` is the accessible name. Pass `null` when the logo sits beside a text
  version of the same name, so screen readers do not announce it twice.
- `AppHeader` renders this by default - pass its `brand` prop only to replace it.
- Use `LogoMark` where the wordmark will not fit.
