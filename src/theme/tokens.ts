/* ============================================================================
 * ASK ANALYST DESIGN SYSTEM — v2.0 TOKENS
 * ============================================================================
 * Single source of truth. Nothing below is decorative: every value is either
 * on the 4px grid, on the modular type scale, or carries a verified contrast
 * ratio in its comment.
 *
 * WHY v2.0 EXISTS — v1.0 was measured off a Figma file rather than designed,
 * so it carried export artefacts as if they were decisions (radius 1.231px,
 * padding 14.775px, borders of 0.2px / 0.25px / 0.8px, font-size 10.32px,
 * line-height 123.94%). Sub-pixel borders do not render, near-duplicate steps
 * (20 vs 21px, 12 vs 13px) cannot be told apart, and its accessibility table
 * was wrong on all five documented pairs. See DESIGN-SYSTEM-v2.md.
 * ========================================================================= */

/* ---------------------------------------------------------------------------
 * 1. COLOR PRIMITIVES
 * Ramps are 10-step, light -> dark. Contrast ratios in comments are measured
 * against #ffffff unless stated, and are enforced by scripts/verify-tokens.mjs.
 * ------------------------------------------------------------------------ */

export const blue = [
  '#f0f7ff', //  0  brand tint — surface fills            1.08
  '#e0efff', //  1                                        1.17
  '#b8dcff', //  2                                        1.43
  '#8ac6ff', //  3                                        1.81
  '#5cb0ff', //  4                                        2.31
  '#349bff', //  5                                        2.89
  '#1485ff', //  6  BRAND — fills, borders, large text    3.60  (fails AA text)
  '#0a6fdb', //  7  TEXT/LINK blue — smallest AA-safe     4.87  PASS
  '#0759b0', //  8  hover/pressed for text blue           6.85  PASS
  '#044386', //  9  AAA-grade blue                        9.76  PASS AAA
] as const;

export const neutral = [
  '#f8fafc', //  0  page background
  '#f1f5f9', //  1  subtle fill / hover
  '#e8edf3', //  2  divider, decorative border
  '#cbd5e1', //  3  decorative border, disabled fill
  '#94a3b8', //  4  disabled text ON FILLS only           2.80  (not AA on white)
  '#64748b', //  5  UI borders — clears 3:1 non-text      4.76  PASS
  '#475569', //  6  tertiary text                         7.44  PASS
  '#334155', //  7  secondary text                       10.35  PASS AAA
  '#1e293b', //  8
  '#0f172a', //  9
] as const;

/** Ink — primary text. Kept from v1.0; measured 19.80:1, not the claimed 17.2. */
export const ink = '#0a0a0a';

export const green = [
  '#f0fdf4', '#dcfce7', '#bbf7d0', '#86efac', '#4ade80',
  '#22c55e', '#16a34a',
  '#15803d', // 7 — text / positive                       5.02  PASS
  '#166534', '#14532d',
] as const;

export const red = [
  '#fef2f2', '#fee2e2', '#fecaca', '#fca5a5', '#f87171',
  '#ef4444', '#dc2626',
  '#b91c1c', // 7 — text / negative                       6.47  PASS
  '#991b1b', '#7f1d1d',
] as const;

export const amber = [
  '#fffbeb', '#ffedbf', '#fde68a', '#fcd34d', '#fbbf24',
  '#f59e0b', '#b45309',
  '#8c6500', // 7 — text / warning                        5.28  PASS
  '#78350f', '#6b2d0a',
] as const;

/* ---------------------------------------------------------------------------
 * 2. SEMANTIC COLOR
 * Components reference THESE, never a ramp index and never a raw hex.
 * ------------------------------------------------------------------------ */

export const semanticLight = {
  'text-primary': ink, //           19.80  AAA
  'text-secondary': neutral[7], //  10.35  AAA
  'text-tertiary': neutral[6], //    7.44  AAA
  'text-disabled': neutral[4], //    2.80  decorative / disabled only
  'text-link': blue[7], //           4.87  AA   <- NOT the brand blue
  'text-link-hover': blue[8], //     6.85  AA
  'text-inverse': '#ffffff',
  /*
   * Label sitting ON the #1485ff brand fill.
   *
   * WHITE, by explicit brand decision (2026-09-07). This is a KNOWN and
   * ACCEPTED deviation, not an oversight:
   *   white on #1485ff = 3.60:1
   *     - PASSES WCAG AA for large text (>=24px, or >=18.7px bold) and for
   *       non-text UI (1.4.11), both of which need 3:1
   *     - FAILS  WCAG AA for normal-size text, which needs 4.5:1
   * Ink would measure 5.50:1. The trade-off is recorded in verify-tokens.mjs
   * so it stays visible rather than being quietly forgotten.
   */
  'text-on-brand': '#ffffff', //     3.60 on #1485ff  — accepted deviation

  'bg-page': '#ffffff',
  'bg-surface': '#ffffff',
  'bg-subtle': neutral[0],
  'bg-muted': neutral[1],
  'bg-brand-subtle': blue[0],
  'bg-brand': blue[6],
  'bg-hover': blue[0],
  'bg-selected': blue[1],

  'border-subtle': neutral[2], //  dividers — decorative, no 3:1 duty
  'border-default': neutral[3], // decorative outlines
  'border-strong': neutral[5], //  4.76  clears 1.4.11 for form controls
  'border-brand': blue[6], //      3.60  clears 1.4.11 for non-text
  'border-focus': blue[7],

  'positive-text': green[7],
  'positive-bg': green[1],
  'positive-border': green[6],
  'negative-text': red[7],
  'negative-bg': red[1],
  'negative-border': red[6],
  'warning-text': amber[7],
  'warning-bg': amber[1],
  'warning-border': amber[6],
  'neutral-text': neutral[6],
  'neutral-bg': neutral[1],
  'neutral-border': neutral[3],

  /* Brand asset, NOT a UI colour. The supplied logo uses #1F2630 on light and
     white on dark. Left exactly as delivered — a logo is not recoloured to
     match the interface palette. */
  'logo-wordmark': '#1F2630',
} as const;

export const semanticDark = {
  'text-primary': '#f8fafc',
  'text-secondary': '#cbd5e1',
  'text-tertiary': '#94a3b8',
  'text-disabled': '#475569',
  'text-link': '#5cb0ff',
  'text-link-hover': '#8ac6ff',
  'text-inverse': ink,
  'text-on-brand': '#ffffff', //     brand fill is the same in both schemes

  'bg-page': '#0b1220',
  'bg-surface': '#111a2b',
  'bg-subtle': '#0f172a',
  'bg-muted': '#1e293b',
  'bg-brand-subtle': '#0e2744',
  'bg-brand': blue[6],
  'bg-hover': '#16233a',
  'bg-selected': '#1b2b47',

  'border-subtle': '#1e293b',
  'border-default': '#334155',
  'border-strong': '#64748b',
  'border-brand': blue[5],
  'border-focus': '#5cb0ff',

  'positive-text': '#4ade80',
  'positive-bg': '#052e16',
  'positive-border': '#166534',
  'negative-text': '#f87171',
  'negative-bg': '#450a0a',
  'negative-border': '#991b1b',
  'warning-text': '#fbbf24',
  'warning-bg': '#3d2b04',
  'warning-border': '#78350f',
  'neutral-text': '#94a3b8',
  'neutral-bg': '#1e293b',
  'neutral-border': '#334155',

  'logo-wordmark': '#ffffff',
} as const;

/* ---------------------------------------------------------------------------
 * 3. TYPOGRAPHY — modular scale, no near-duplicate steps.
 * v1.0 shipped 40/28/21/20/18/16/14/13/12/11: 20-vs-21 and 12-vs-13 are not
 * tellable apart, and 10px/11px sit under the 12px legibility floor.
 * ------------------------------------------------------------------------ */

export const fontSize = {
  '2xs': '12px', // FLOOR. Labels, table headers, badges. Never body copy.
  xs: '14px', //   dense table body, meta
  sm: '16px', //   BODY DEFAULT — 16px stops iOS zooming form fields
  md: '18px',
  lg: '20px',
  xl: '24px',
  '2xl': '30px',
  '3xl': '36px',
  '4xl': '48px',
} as const;

/** Unitless so they scale with font-size. 1.5 body per WCAG 1.4.12. */
export const lineHeight = {
  tight: '1.1', //   display
  snug: '1.25', //   headings
  normal: '1.4', //  dense data, table cells
  relaxed: '1.5', // body copy — the accessibility floor
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500, //   real cut — self-hosted; Google Fonts does not serve it
  semibold: 600, // real cut — self-hosted; Google Fonts does not serve it
  bold: 700,
} as const;

export const letterSpacing = {
  tighter: '-0.02em', // large display only
  tight: '-0.01em',
  normal: '0',
  wide: '0.04em', //    uppercase labels
} as const;

/**
 * Tabular figures. Non-negotiable for any column of numbers: proportional
 * digits make prices and percentages fail to align down a column.
 */
export const numeric = {
  tabular: 'tabular-nums',
  proportional: 'proportional-nums',
} as const;

/* ---------------------------------------------------------------------------
 * 4. SPACE — strict 4px grid.
 * v1.0's ad-hoc gaps (5, 9, 15, 18, 23, 25, 34px) are deliberately gone.
 * ------------------------------------------------------------------------ */

export const space = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
} as const;

/* ---------------------------------------------------------------------------
 * 5. RADIUS — v1.0's 1.231px and its 14/15px duplication are gone.
 * ------------------------------------------------------------------------ */

export const radius = {
  xs: '4px',
  sm: '6px', //  badges, chips
  md: '8px', //  buttons, inputs
  lg: '12px', // cards, panels
  xl: '16px', // modals, large surfaces
  full: '9999px',
} as const;

/* ---------------------------------------------------------------------------
 * 6. BORDER WIDTH — whole pixels only.
 * Browsers round used border-width to whole device pixels, so v1.0's
 * 0.2 / 0.25 / 0.8 / 1.6px either vanished or silently rendered as 1px.
 * ------------------------------------------------------------------------ */

export const borderWidth = {
  none: '0',
  thin: '1px', //  default — dividers, outlines, row rules
  thick: '2px', // emphasis — table header rule, focus ring, active tab
} as const;

/* ---------------------------------------------------------------------------
 * 7. ELEVATION — flat by default; a dashboard should not float.
 * ------------------------------------------------------------------------ */

export const shadow = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(15, 23, 42, 0.04)',
  sm: '0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 6px 24px 0 rgba(15, 23, 42, 0.03)',
  md: '0 4px 8px -2px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.04)',
  lg: '0 12px 20px -4px rgba(15, 23, 42, 0.08), 0 4px 8px -4px rgba(15, 23, 42, 0.04)',
  xl: '0 24px 32px -8px rgba(15, 23, 42, 0.12), 0 8px 12px -6px rgba(15, 23, 42, 0.06)',
} as const;

/* ---------------------------------------------------------------------------
 * 8. CONTROL SIZING & TOUCH TARGETS
 * WCAG 2.5.8 (AA) floor is 24x24. WCAG 2.5.5 (AAA) and both mobile HIGs want
 * 44x44. Dense desktop rows may use xs/sm; anything reachable by touch is
 * lifted to 44px by a coarse-pointer media query in the component layer.
 * ------------------------------------------------------------------------ */

export const controlHeight = {
  xs: '28px', // dense table row actions — fine-pointer only
  sm: '32px',
  md: '40px', // DEFAULT
  lg: '48px',
} as const;

/** WCAG 2.5.5 (AAA) and iOS/Android HIG. */
export const minTouchTarget = '44px';
/** WCAG 2.5.8 (AA) — the absolute floor for any pointer target. */
export const minTargetAA = '24px';

/* ---------------------------------------------------------------------------
 * 9. MOTION — v1.0 had none. Every duration is paired with an easing.
 * ------------------------------------------------------------------------ */

export const duration = {
  instant: '0ms',
  fast: '120ms', // hover, focus — must feel immediate
  base: '200ms', // most transitions
  slow: '320ms', // overlays, expanding panels
} as const;

export const easing = {
  standard: 'cubic-bezier(0.2, 0, 0, 1)',
  decelerate: 'cubic-bezier(0, 0, 0, 1)', //   entering
  accelerate: 'cubic-bezier(0.3, 0, 1, 1)', // exiting — faster than entering
} as const;

/* ---------------------------------------------------------------------------
 * 10. Z-INDEX — a named ladder beats scattered magic numbers.
 * ------------------------------------------------------------------------ */

export const zIndex = {
  base: 0,
  raised: 10,
  sticky: 1100,
  overlay: 1200,
  modal: 1300,
  popover: 1400,
  toast: 1500,
  tooltip: 1600,
} as const;

/* ---------------------------------------------------------------------------
 * 11. BREAKPOINTS & LAYOUT
 * v1.0 hard-coded 1440/1260/1114/345px columns. Fixed pixel containers are a
 * documented responsive anti-pattern; these are max-widths, mobile-first.
 * ------------------------------------------------------------------------ */

export const breakpoint = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const container = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  content: '1280px', // main content max — was a fixed 1260px
  prose: '68ch', //     measure for long-form reading
} as const;

/** Focus ring — one definition, consumed by every interactive component. */
export const focusRing = {
  width: borderWidth.thick,
  offset: '2px',
} as const;

/* ---------------------------------------------------------------------------
 * 12. DATA VISUALISATION
 * Every value below was produced by the dataviz validator, not chosen by eye.
 * Re-run with scripts/verify-charts.mjs after any change.
 * ------------------------------------------------------------------------ */

/**
 * CATEGORICAL — assigned in FIXED ORDER, never cycled. Colour follows the
 * entity, not its rank: filtering a series must not repaint the survivors.
 * A 9th series folds into "Other" or becomes small multiples — it is never a
 * generated hue.
 *
 * Green and red are deliberately ABSENT: they are reserved for market
 * direction, and reusing them for "series 4" would make a neutral series read
 * as a gain or a loss.
 *
 * Validated on both surfaces (light #fcfcfb, dark #111a2b): lightness band,
 * chroma floor, adjacent CVD separation (worst ΔE 10.3 deutan), normal-vision
 * floor (worst ΔE 23.3), and ≥3:1 contrast. The SAME eight steps pass in both
 * modes — that was measured, not assumed.
 */
export const chartCategorical = [
  '#1485ff', // 1  brand blue
  '#ea580c', // 2  orange
  '#0d9488', // 3  teal
  '#9333ea', // 4  violet
  '#a16207', // 5  bronze
  '#0891b2', // 6  cyan
  '#db2777', // 7  magenta
  '#4d7c0f', // 8  olive
] as const;

/** SEQUENTIAL — magnitude. One hue, light→dark, light end clears 2:1 on the
 *  surface (a lighter first step measured 1.76:1 and was rejected). */
export const chartSequential = ['#5cb0ff', '#1485ff', '#0759b0', '#044386'] as const;

/**
 * DIVERGING — polarity around a baseline. Two hues plus a NEUTRAL GREY
 * midpoint (never a hue at the middle, never a rainbow).
 *
 * `market` is the conventional red/green traders expect. It is NOT
 * colour-blind safe: the poles measure ΔE 4.2 under deuteranopia, effectively
 * identical for ~8% of men. It is therefore only ever legal alongside the
 * direction glyph and label (see DIRECTION_GLYPH in lib/format.ts).
 *
 * `accessible` is the opt-in alternative: blue/orange, ΔE 32.5 under
 * deuteranopia — the strongest pair tested. Offer it as a user preference.
 */
export const chartDiverging = {
  market: {
    negative: ['#f87171', '#dc2626', '#b91c1c'],
    neutral: '#e8edf3',
    positive: ['#22c55e', '#16a34a', '#15803d'],
    cvdSafe: false,
  },
  accessible: {
    negative: ['#fb923c', '#ea580c', '#c2410c'],
    neutral: '#e8edf3',
    positive: ['#5cb0ff', '#1485ff', '#0759b0'],
    cvdSafe: true,
  },
} as const;

/** Chart furniture. Grid and axes are recessive — the data is the subject. */
export const chartSurface = {
  light: {
    surface: '#ffffff',
    grid: '#e8edf3',
    axis: '#cbd5e1',
    axisLabel: '#475569',
    crosshair: '#64748b',
    tooltipBg: '#ffffff',
    tooltipBorder: '#cbd5e1',
  },
  dark: {
    surface: '#111a2b',
    grid: '#1e293b',
    axis: '#334155',
    axisLabel: '#94a3b8',
    crosshair: '#64748b',
    tooltipBg: '#1e293b',
    tooltipBorder: '#334155',
  },
} as const;

/** Mark geometry — thin marks, generous hit targets. */
export const chartMark = {
  lineWidth: 2,
  markerSize: 8,
  barRadius: 4,
  seriesGap: 2, // surface-coloured gap between adjacent/stacked fills
  areaOpacity: 0.12,
} as const;

/* ---------------------------------------------------------------------------
 * 13. ICONOGRAPHY
 * Set: Tabler Icons (@tabler/icons-react, MIT). Chosen because it is the set
 * Mantine itself is designed against, so sizing and optical weight already
 * agree with the components.
 *
 * v1.0 listed eight icon sizes (12/14/16/18/20/24/30/124) with no set named
 * and no stroke weight, which is why the product ended up mixing glyphs.
 * ------------------------------------------------------------------------ */

export const iconSize = {
  xs: 14, // inline with 12px label text
  sm: 16, // DEFAULT — inline with body, table cells
  md: 20, // buttons, form adornments
  lg: 24, // section headers, card actions
  xl: 32, // feature tiles
  '2xl': 48, // empty states
} as const;

/**
 * Stroke weight. Tabler ships at 2, which is heavy beside Lato at small sizes;
 * 1.5 matches the text colour weight. Below 16px, 1.75 keeps strokes from
 * disappearing on low-DPI screens.
 */
export const iconStroke = {
  default: 1.5,
  small: 1.75, // for iconSize.xs
} as const;

/**
 * ICON RULES
 * 1. Never an emoji. Emoji render differently per platform, cannot be
 *    recoloured, and are announced by screen readers as their CDLR name.
 * 2. A decorative icon beside a text label is `aria-hidden`.
 * 3. An icon that IS the control (an ActionIcon) needs an aria-label.
 * 4. An icon must never be the only carrier of meaning — pair it with text,
 *    or with a visually hidden label.
 */
export const ICON_RULES = {
  noEmoji: true,
  decorativeIsAriaHidden: true,
  iconOnlyNeedsLabel: true,
} as const;
