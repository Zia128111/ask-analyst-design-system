# Changelog

All notable changes to the Ask Analyst Design System.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/);
versioning follows [Semantic Versioning](https://semver.org/).

## [1.1.0] — 2026-09-07

### Added
- Server-safe entry points for Next.js App Router:

      import { formatPrice } from '@akseer/ask-analyst-design-system/format';
      import { tokens }      from '@akseer/ask-analyst-design-system/tokens';

  The root entry carries a `use client` banner, because Mantine components
  are client components. That banner applied to the whole bundle, so tokens
  and formatters — plain data and pure functions — were fenced behind the
  client boundary. Calling one from a Server Component failed with
  *"Attempted to call formatPrice() from the server but formatPrice is on
  the client"*, which also ruled them out of `generateMetadata` and route
  handlers.

  Verified against Next.js 16.3.4 / React 19.2.8: a Server Component and a
  page title both render formatted values, and the client components still
  work unchanged.

## [1.0.1] — 2026-09-07

Ships the work merged in PR #1 plus the table and card corrections that
followed. `v1.0.0` predates all of it.

### Added
- `mergeChartOptions` and `mirrorValueAxis` exported from the chart helpers.
- A twelve-column layout grid; column priority is now container-based rather
  than viewport-based, so a narrow column drops fields whatever the window
  size.
- Eight section-mark icons in the curated Tabler set.
- `HeaderWidth` on `AppHeader`.
- Coverage grew with the code it guards: 88 token checks (from 85) and 29
  chart checks (from 18).

### Fixed
- The RTL chart axis, and a direction glyph that vanished in some states.
- Chart options were replaced wholesale rather than merged, so passing one
  override silently dropped the rest of the themed defaults. They now merge
  one level deep.
- Table edge shadows drew borders the spec forbids. Row rules are collapsed
  borders now, and the card shadow is gone.
- The card edge used the brand colour where it should be neutral.

## [1.0.0] — 2026-09-07

First consumable release. The system existed before this, but only as an app —
it could not be installed into another project.

### Added
- Installable package `@akseer/ask-analyst-design-system` with an `exports`
  map, type declarations and a single `styles.css`.
- `CLAUDE.md`, the enforced rule set, shipped with the package.
- Continuous integration: the six static suites, lint, Styles API slot audit,
  themed-component coverage, and a check that the committed `dist/` matches
  `src/`.
- `LICENSE` and `NOTICE` covering the redistributed Lato binaries (OFL-1.1)
  and the reproduced Tabler caret geometry (MIT).

### Changed
- React, `react-dom` and the four Mantine packages moved from `dependencies`
  to `peerDependencies`. As regular dependencies they gave the consuming app
  a second copy of React, which breaks hooks.
- `dist/` is committed and the `prepare` script removed. `prepare` forced
  every consumer to download the full devDependency tree and run a build
  before npm could extract anything — minutes per project, every time.
- The documentation app builds to `dist-docs/`. It shared `dist/` with the
  library and was overwriting the published bundle.
- `theme/components` exports an explicitly annotated `MantineThemeComponents`;
  its inferred type referenced Mantine internals and could not be named across
  a package boundary.

### Fixed
- Font URLs were absolute (`/fonts/lato-*.woff2`). They resolved only because
  the documentation app serves `public/` at the site root; in an installed
  package they 404'd, so Lato silently fell back and the whole reason for
  self-hosting it was defeated. Fonts now ship in `dist/fonts/` and are
  attached by a plain `@import` that resolves relative to the stylesheet.
- The library build is now reproducible across platforms. CSS module hashes
  derived from the file path differed between Windows and Linux, so a
  CI rebuild disagreed with the committed `dist/` in 56 places.
- The documentation app's `public/` (favicon, icon sprite, duplicate fonts) is
  no longer copied into the package.

### Removed
- `recharts`, unused since charts moved to `react-google-charts`.

### Known deviations
- `text-on-brand` is white on `#1485ff` = **3.60:1**. Passes AA for large text
  and non-text UI, fails it for small text. A recorded brand decision;
  `verify:tokens` prints the shortfall on every run and axe reports exactly
  this and nothing else.
- `Alert` distinguishes its four tones by colour and title text alone, with no
  icon, in both code and Figma.
