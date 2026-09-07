import {
  chartCategorical,
  chartMark,
  chartSurface,
  fontSize,
  radius,
} from '../theme/tokens';

/* ============================================================================
 * GOOGLE CHARTS THEME — Ask Analyst Design System v2.0
 * ============================================================================
 * Google Charts does NOT read CSS. Colours, fonts and gridlines are passed as
 * literal values in a JS options object, which has three consequences:
 *
 *   1. Our chart CSS module cannot style it. This file replaces it.
 *   2. Dark mode is not a CSS variable swap — the options must be REBUILT when
 *      the colour scheme changes, so every chart takes `scheme` as an input.
 *   3. Token values must be resolved to literals here rather than referenced
 *      as `var(--ask-*)`, which Google Charts would render as a broken colour.
 *
 * The palette itself is unchanged and still validated by verify-charts.mjs:
 * the categorical order, the reserved green/red, and the CVD separation all
 * carry over — only the delivery mechanism differs.
 *
 * NOTE ON LOADING: react-google-charts fetches
 * https://www.gstatic.com/charts/loader.js at runtime. Charts therefore
 * require network access to Google and a CSP that allows that origin.
 * ========================================================================= */

export type Scheme = 'light' | 'dark';
export type Dir = 'ltr' | 'rtl';

/**
 * Axis gutter, direction-aware.
 *
 * Google Charts takes LITERAL pixel padding — it has no logical properties —
 * so the space reserved for y-axis labels must be swapped by hand in Arabic,
 * where the axis sits on the right. Everything else in the system mirrors for
 * free; this is the one place that cannot.
 */
function chartArea(dir: Dir, gutter = 64, edge = 16) {
  const axisSide = dir === 'rtl' ? { left: edge, right: gutter } : { left: gutter, right: edge }; // rtl-ok: swapped explicitly
  return { ...axisSide, top: 16, bottom: 40, width: '100%', height: '100%' };
}

const px = (v: string) => parseFloat(v);

/**
 * Base options shared by every chart type.
 *
 * `backgroundColor: 'transparent'` so the chart sits on our own surface rather
 * than punching a white rectangle through a dark page.
 */
export function baseChartOptions(scheme: Scheme, dir: Dir = 'ltr') {
  const s = chartSurface[scheme];

  return {
    backgroundColor: 'transparent',
    colors: [...chartCategorical],

    fontName: 'Lato',
    fontSize: px(fontSize['2xs']),

    chartArea: chartArea(dir),

    hAxis: {
      textStyle: { color: s.axisLabel, fontName: 'Lato', fontSize: px(fontSize['2xs']) },
      gridlines: { color: 'transparent' },
      baselineColor: s.axis,
    },
    vAxis: {
      textStyle: { color: s.axisLabel, fontName: 'Lato', fontSize: px(fontSize['2xs']) },
      // Recessive grid — the data is the subject, the furniture is not.
      gridlines: { color: s.grid, count: 5 },
      minorGridlines: { count: 0 },
      baselineColor: s.axis,
    },

    legend: {
      position: 'top' as const,
      alignment: 'start' as const,
      textStyle: { color: s.axisLabel, fontName: 'Lato', fontSize: px(fontSize['2xs']) },
    },

    /**
     * isHtml lets the tooltip be styled with real CSS instead of Google's
     * limited textStyle object — see .ask-gchart-tooltip in index.css. Without
     * it the tooltip is the one part of the chart that ignores the system.
     */
    tooltip: { isHtml: true, trigger: 'focus' as const },

    // Motion is honoured globally via prefers-reduced-motion in index.css,
    // but Google animates in JS, so it is disabled outright rather than risk
    // an animation that ignores the OS setting.
    animation: { duration: 0 },
  };
}

/**
 * LINE — for a level series (an index, a price).
 *
 * `viewWindowMode: 'pretty'` rather than a zero baseline: a zero-based axis
 * turns a 0.7% index move into a flat line. Zero baselines belong on BARS,
 * where length encodes magnitude.
 */
export function lineChartOptions(scheme: Scheme, dir: Dir = 'ltr', opts: { curve?: boolean } = {}) {
  const base = baseChartOptions(scheme, dir);
  return {
    ...base,
    lineWidth: chartMark.lineWidth,
    pointSize: 0,
    curveType: opts.curve ? ('function' as const) : undefined,
    vAxis: { ...base.vAxis, viewWindowMode: 'pretty' as const },
    legend: { ...base.legend, position: 'none' as const }, // single series: the title names it
  };
}

/** AREA — same axis rules as line, with a light fill. */
export function areaChartOptions(scheme: Scheme, dir: Dir = 'ltr') {
  const base = lineChartOptions(scheme, dir);
  return { ...base, areaOpacity: chartMark.areaOpacity };
}

/**
 * BAR / COLUMN — length encodes magnitude, so the baseline IS zero here.
 * Truncating a bar axis misstates the ratio between bars.
 */
export function barChartOptions(scheme: Scheme, dir: Dir = 'ltr') {
  const base = baseChartOptions(scheme, dir);
  return {
    ...base,
    bar: { groupWidth: '62%' },
    vAxis: { ...base.vAxis, minValue: 0 },
    legend: { ...base.legend, position: 'none' as const },
  };
}

/** PIE / DONUT — used sparingly; a bar is almost always easier to read. */
export function pieChartOptions(scheme: Scheme, dir: Dir = 'ltr', donut = true) {
  const base = baseChartOptions(scheme, dir);
  return {
    ...base,
    pieHole: donut ? 0.6 : 0,
    pieSliceBorderColor: chartSurface[scheme].surface,
    pieSliceText: 'none' as const, // labels go in the legend, not on the slices
    legend: { ...base.legend, position: (dir === 'rtl' ? 'left' : 'right') as 'left' | 'right' },
    chartArea: { ...chartArea(dir, 8, 8), top: 8, bottom: 8 },
  };
}

/** Radius token for the HTML tooltip, exported so CSS and JS cannot drift. */
export const CHART_TOOLTIP_RADIUS = radius.md;
