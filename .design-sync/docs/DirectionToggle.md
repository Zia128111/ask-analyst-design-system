---
category: Controls
---

# DirectionToggle

LTR / RTL switching for the Arabic build. Like `ColorSchemeToggle`, a two-option
segmented control with an icon plus a text label.

```tsx
<AppHeader actions={<Group gap="sm"><DirectionToggle /><ColorSchemeToggle /></Group>} />
```

- Takes no props. It drives the Mantine `DirectionProvider`, so the whole app must
  be wrapped in one (it is, in the standard provider chain - see README.md).
- Mirroring needs no second stylesheet: every component in this system uses logical
  properties (`padding-inline`, not `padding-left`), which is what makes a single
  toggle sufficient. The one sanctioned exception is the chart container, which
  Google Charts forces to `dir="ltr"`.
- Belongs in the `actions` slot of `AppHeader`. One per app.
