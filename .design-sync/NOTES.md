# design-sync notes — @akseer/ask-analyst-design-system

Repo-specific gotchas for future syncs. Read this before re-running the driver.

## Build

- `buildCmd` is `npm run build:lib && node .design-sync/make-css.mjs`. The second
  half is not optional — see "Stylesheet" below.
- `dist/` is committed on purpose (the package installs straight from GitHub), so
  the converter entry `./dist/index.js` exists on a fresh clone. Rebuild anyway:
  a stale committed `dist/` silently ships old components.
- The converter runs with `--node-modules ./node_modules --entry ./dist/index.js`.
  `node_modules/@akseer/ask-analyst-design-system` does not exist in this repo
  (npm will not self-install), which is why `--entry` is required.

## Stylesheet — the one thing that will silently break

- This DS is a **Mantine binding**: its own layer only overrides Mantine defaults.
  Shipping `dist/styles.css` alone renders every component unstyled.
  `.design-sync/make-css.mjs` concatenates, in the order CLAUDE.md mandates,
  `@mantine/core` + `@mantine/dates` + `@mantine/notifications` stylesheets and
  then `dist/styles.css`, into `dist/design-sync-styles.css` (gitignored, ~330 KB),
  which is what `cfg.cssEntry` points at. `cssEntry` is copied verbatim — never
  bundled — so an `@import` of a `node_modules` path would not resolve; concatenation
  is the reason, not laziness.
- vite emits the self-hosted Lato faces as absolute `url(/fonts/…)`. design-sync
  resolves font urls relative to the stylesheet's own directory, so make-css.mjs
  rewrites them to `./fonts/…`. **Without that rewrite the woff2s are never copied
  and every `@font-face` is dropped from `_ds_bundle.css`** — the symptom is a
  silent fallback to system fonts, with no error. If a future build shows
  `dead @font-face block(s) dropped`, this rewrite is what regressed.

## Provider

- `cfg.provider` is `DirectionProvider > MantineProvider` with `theme` and
  `cssVariablesResolver` passed by `$ref`. Every `--ask-*` and `--mantine-*`
  variable is injected at runtime by `MantineProvider`; without the provider
  previews render as unstyled browser defaults.
- `@mantine/core`, `@mantine/dates` and `@mantine/notifications` are in
  `extraEntries`, so `window.AskAnalystDS` carries 555 exports — the 12 Ask Analyst
  components plus every Mantine primitive. This is deliberate: consumers of this DS
  build screens out of Mantine components wearing the Ask Analyst theme, so a bundle
  of 12 components with no layout primitives would be unusable to the design agent.

## Scoping decisions

- `componentSrcMap: {"Icons": null}` excludes `Icons` from the component list.
  `Icons` is a **record of icon components**, not a component: the extractor emits
  `Icons: React.ComponentType<IconsProps>`, which would teach the design agent to
  write `<Icons />`. The icon set is documented instead in `conventions.md`, which
  is inlined into the agent's system prompt — a stronger channel than a card.
  Re-check on any re-sync: if `Icons` starts appearing as a component, the exclusion
  was dropped.
- `guidelinesGlob` is `["CLAUDE.md", "DESIGN-SYSTEM-v2.md"]` — the repo keeps them
  at root, so the default `docs/**` patterns match nothing.
- `docsDir` is `.design-sync/docs`: 12 hand-written per-component docs whose
  frontmatter `category` also sets the card groups (Brand, Controls, Data Display,
  Data States, Navigation). They ARE the `.prompt.md` the design agent reads —
  edit them, not the generated output.

## Known render warns (triaged — not new)

- `[TOKENS_MISSING]` ~84 custom properties (`--mantine-*`, `--app-shell-*`,
  `--notifications-*`, component-scoped `--button-*` style vars). All are injected
  at runtime by `MantineProvider` or set inline by the component. Confirmed against
  rendered previews: every card is fully styled. Non-blocking, expected on every run.
- `[EXPORT_COLLISION] @mantine/core exports 1 name the main package also exports:
  EmptyState`. The main package's `EmptyState` wins, which is the correct binding —
  authored previews import from `@akseer/ask-analyst-design-system`, so nothing
  resolves to Mantine's. Leave as is.

## Render check

- No playwright browser is installed on this machine, but Chrome is. Run validate
  and capture with
  `DS_CHROMIUM_PATH="/c/Program Files/Google/Chrome/Application/chrome.exe"`, and
  install playwright with `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1` — this avoids the
  ~200 MB chromium download entirely.
- `AskChart` renders through `react-google-charts`, which loads its runtime from
  `gstatic.com`. **The render check needs network access.** All four chart cells
  rendered cleanly, but on an offline machine expect `[RENDER]` on AskChart only.

## Preview decisions worth keeping

- `AppHeader` needs `viewport: "1280x200"` — the nav is `display: none` below
  1024px, so at the default 900px card the whole point of the component is invisible
  and only the burger shows. Its stories are also wrapped in a
  `position: relative; overflow: hidden` div so the skip link (absolutely positioned
  above the header) is clipped the way a real page clips it.
- `AskChart` uses `viewport: "900x320"`; both it and `AppHeader` are
  `cardMode: "column"` (flagged by `[GRID_OVERFLOW]`, override applied verbatim).
- A `Logo` story on a brand-blue surface was **removed**: the wordmark takes
  `--ask-logo-wordmark`, which is `#1F2630` in light scheme, so the logo was
  unreadable on `#1485ff`. Mantine scopes its dark variables to
  `:root[data-mantine-color-scheme="dark"]`, so a wrapper `div` cannot show the
  white-wordmark variant — do not re-attempt it that way. It was replaced with
  `InHeaderStrip`, which is the lockup's real placement.
- Preview border rules use `var(--ask-border-thick)`. `--ask-border-md` does not
  exist (the width scale is `none` / `thin` / `thick`) and an invalid length makes
  the whole shorthand a no-op — the border just silently vanishes.
- Preview composition data (PSX tickers, INTRADAY, SECTORS, INDEX_SERIES) is ported
  from the repo's own `src/App.tsx` demo page.

## Re-sync risks

- **`src/App.tsx` is the composition source.** The preview data was copied out of
  it, not referenced. If App.tsx's demo data changes, the previews will not follow;
  they will simply become less representative. Low severity, but worth a glance.
- **Mantine major bumps.** `extraEntries` pulls all of `@mantine/core` into the
  bundle, and the theme maps tokens onto Mantine's slots. A Mantine major will move
  slot names and CSS variables; re-run the full render check (do not trust carried
  grades) and re-validate `conventions.md`'s token table against the fresh build.
- **Network-fetched chart runtime.** AskChart's cells are only verified when the
  build machine can reach gstatic.com.
- **Fonts.** The Lato url rewrite in make-css.mjs is coupled to how vite emits
  `url(/fonts/…)`. A vite config change (e.g. setting `base`) would change that
  prefix and quietly break the rewrite. Check `ds-bundle/fonts/` contains eight
  `.woff2` files after every build — `fonts.css` alone means it broke.
- **Dark scheme is unverified.** Every preview renders in `defaultColorScheme:
  "light"`. The dark semantic tokens exist and are exercised by the product, but no
  card in this sync proves them.
- **This sync shipped commit `ce38ba1` (`Commit dist/ and drop the prepare script`),
  not the working tree.** During the first sync (7 Sep 2026) the branch
  `fix/rtl-chart-axis-and-direction-signal` had uncommitted work in flight —
  `AppHeader`'s `width` / `HeaderWidth`, `mirrorValueAxis`, and the `wide: '1600px'`
  container token. The user chose to ship the committed state. Those additions are
  therefore MISSING from the uploaded `.d.ts` contracts and will appear as changed
  components on the next sync; that is expected, not drift.
- **Check for a dirty working tree before building.** `git status --short` on
  `src/` first: the converter builds whatever `dist/` holds, so an unnoticed local
  edit ships silently into every design the agent builds.
