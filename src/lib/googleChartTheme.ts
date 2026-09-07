import {
  chartCategorical,
  chartMark,
  chartSurface,
  fontSize,
  radius,
} from '../theme/tokens.ts';

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
 * Axis gutter.
 *
 * Google Charts takes LITERAL pixel padding — it has no logical properties —
 * so the space reserved for value-axis labels is a hand-placed number.
 *
 * It is reserved on the side the axis is actually DRAWN on, which is not the
 * same as the side the reading direction would put it. Google Charts always
 * draws a single vertical axis on the LEFT, whatever `dir` says; it moves only
 * when the series are bound to a second axis, which is what `mirrorValueAxis`
 * below does.
 *
 * v2.0 swapped this gutter for RTL on its own, without moving the axis. The
 * labels kept being drawn on the left, in the 16px edge gutter, and Google
 * silently truncated every one of them to a single ellipsis. Reserving space
 * where nothing is drawn is worse than not reserving it at all, because the
 * failure is invisible until someone reads the chart in Arabic.
 */
function chartArea({ gutter = 64, edge = 16 }: { gutter?: number; edge?: number } = {}) {
  return { left: gutter, right: edge, top: 16, bottom: 40, width: '100%', height: '100%' }; // rtl-ok: mirrored by mirrorValueAxis
}

const px = (v: string) => parseFloat(v);

/**
 * Base options shared by every chart type.
 *
 * `backgroundColor: 'transparent'` so the chart sits on our own surface rather
 * than punching a white rectangle through a dark page.
 *
 * `_dir` is kept in the signature for API stability, and because every chart
 * builder still takes it. Direction is no longer decided here: mirroring needs
 * the number of series, which is a property of the data, so it moved to
 * `mirrorValueAxis`.
 */
export function baseChartOptions(scheme: Scheme, _dir: Dir = 'ltr') {
  const s = chartSurface[scheme];

  return {
    backgroundColor: 'transparent',
    colors: [...chartCategorical],

    fontName: 'Lato',
    fontSize: px(fontSize['2xs']),

    chartArea: chartArea(),

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
    chartArea: { ...chartArea({ gutter: 8, edge: 8 }), top: 8, bottom: 8 },
  };
}

/**
 * MIRRORS THE VERTICAL VALUE AXIS for right-to-left.
 *
 * Google Charts renders its container with `dir="ltr"` internally and has no
 * option to put a lone vertical axis on the right. The one mechanism it does
 * have is a SECOND axis: bind every series to `targetAxisIndex: 1` and axis 1
 * is drawn on the right, while axis 0 — now carrying no series — is hidden.
 *
 * Axis 1 is a copy of the options' own `vAxis`, so whatever the chart type set
 * there (`viewWindowMode: 'pretty'` for a line, `minValue: 0` for a column)
 * survives the mirror. Rebuilding it from tokens instead would quietly give an
 * Arabic line chart a zero baseline, and a 0.7% index move would draw flat.
 *
 * Only for charts whose VALUE axis is vertical — line, area, column. A bar
 * chart's vertical axis is its CATEGORY axis, which Google will not move, and
 * a pie has no axes: both are left alone, with the gutter on the drawing side
 * so their labels stay readable.
 *
 * `seriesCount` is why this is a separate step rather than part of the option
 * builders: the number of series is a property of the DATA, which the builders
 * never see. `AskChart` applies it. A caller building options by hand must do
 * the same, or accept an axis on the left in Arabic — still legible, just not
 * mirrored.
 */
export function mirrorValueAxis<T extends { vAxis: object; chartArea: object }>(
  options: T,
  dir: Dir,
  seriesCount: number,
) {
  if (dir !== 'rtl' || seriesCount < 1) return options;

  const series: Record<number, { targetAxisIndex: number }> = {};
  for (let i = 0; i < seriesCount; i += 1) series[i] = { targetAxisIndex: 1 };

  return {
    ...options,
    series,
    vAxes: {
      // No series targets axis 0, so nothing but its furniture would draw.
      0: {
        textPosition: 'none' as const,
        gridlines: { color: 'transparent' },
        minorGridlines: { count: 0 },
        baselineColor: 'transparent',
      },
      1: { ...options.vAxis },
    },
    // Now — and only now — the wide gutter belongs on the right.
    chartArea: { ...options.chartArea, left: 16, right: 64 }, // rtl-ok: the axis really is on the right here
  };
}

/**
 * Merges caller options over themed options, ONE LEVEL DEEP.
 *
 * Google Charts groups most of its settings into nested objects — `hAxis`,
 * `vAxis`, `legend`, `tooltip`. A plain spread replaces those objects whole, so
 * a caller passing `{ hAxis: { showTextEvery: 7 } }` to set one property
 * silently discards the themed `textStyle`, `gridlines` and `baselineColor`
 * that were in there. The chart keeps working and the axis quietly reverts to
 * Google's default #222 — which is invisible in dark mode, and which nobody
 * notices until a screenshot.
 *
 * So a nested plain object is merged rather than replaced. Arrays are NOT:
 * `colors` and `gridlines.count` are whole values, and half-replacing a colour
 * array would be worse than replacing it.
 */
export function mergeChartOptions<T extends Record<string, unknown>>(
  base: T,
  extra?: Record<string, unknown>,
): T & Record<string, unknown> {
  if (!extra) return base;
  const out: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(extra)) {
    const current = out[key];
    out[key] =
      isPlainObject(current) && isPlainObject(value) ? { ...current, ...value } : value;
  }
  return out as T & Record<string, unknown>;
}

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

/** Radius token for the HTML tooltip, exported so CSS and JS cannot drift. */
export const CHART_TOOLTIP_RADIUS = radius.md;
