---
category: Navigation
---

# AppHeader

The product's top bar: skip link, brand lockup, primary `<nav>`, an actions slot,
and a burger that moves the nav into a right-hand `Drawer` below `lg`. Use it once
per page - it renders the `<header>` and `<nav>` landmarks the rest of the page
depends on.

```tsx
<AppHeader
  activeHref="#market"
  actions={
    <Group gap="sm" visibleFrom="sm">
      <DirectionToggle />
      <ColorSchemeToggle />
    </Group>
  }
/>
```

- `items` defaults to `NAV_ITEMS`, the nine top-level sections of Ask Analyst
  (Market, Companies, Data Bank, Sector Fundamentals, Economy, Media, Features,
  Calculator, Research Report). Pass your own array of `{ label, href }` to override.
- `activeHref` must equal one of the items' `href`. It sets `aria-current="page"`,
  which is what the active styling hangs off - there is no separate `active` prop.
- `brand` replaces the default `<Logo height={28} title="Ask Analyst" />`.
- `mainId` (default `"main"`) is the id the skip link targets. The page must render
  a matching `<main id="main" tabIndex={-1}>` or the skip link goes nowhere.
- `actions` is where toggles, search and account controls go - keep it to two or
  three controls; the burger already sits after it.
