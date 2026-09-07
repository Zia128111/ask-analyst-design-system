---
category: Controls
---

# ColorSchemeToggle

Light / dark switching, as a two-option segmented control rather than a `Switch`.
A switch implies one boolean feature being turned on; light and dark are peer
choices, and a segmented control shows both with the current one marked.

```tsx
<AppHeader actions={<Group gap="sm"><DirectionToggle /><ColorSchemeToggle /></Group>} />
```

- Takes no props. It reads and writes the Mantine colour scheme through
  `useMantineColorScheme`, so it must sit inside the app `MantineProvider`. The
  Mantine `auto` value is resolved so a segment is always marked.
- Each option carries an icon AND a text label - icon-only would leave the meaning
  to a sun/moon glyph and push the accessible name into an `aria-label`.
- Belongs in the `actions` slot of `AppHeader`. One per app.
