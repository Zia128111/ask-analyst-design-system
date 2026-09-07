import { chartCategorical, chartDiverging, chartMark } from '../theme/tokens';

/* ============================================================================
 * CHART HELPERS — Ask Analyst Design System v2.0
 * ============================================================================
 * The rules that a chart library cannot enforce for you.
 * ========================================================================= */

/**
 * Assign categorical colours IN FIXED ORDER, keyed by the series NAME.
 *
 * Colour follows the entity, never its rank. If a user filters a series out,
 * the survivors must keep their colours — a chart that repaints on filter
 * destroys the reader's memory of which line is which. Deriving the index from
 * array position (the obvious implementation) does exactly that, so this keys
 * off a stable registry instead.
 *
 * A 9th series is never a generated hue: it folds into "Other", or the chart
 * becomes small multiples.
 */
export function createSeriesPalette(allSeriesNames: readonly string[]) {
  const order = new Map(allSeriesNames.map((name, i) => [name, i]));

  return {
    /** Stable colour for a series, regardless of what is currently visible. */
    colorFor(name: string): string {
      const i = order.get(name);
      if (i === undefined) return 'var(--ask-text-tertiary)';
      if (i >= chartCategorical.length) return 'var(--ask-text-tertiary)'; // "Other"
      return chartCategorical[i];
    },
    /** True once the palette is exhausted and remaining series must fold. */
    get overflows() {
      return allSeriesNames.length > chartCategorical.length;
    },
    max: chartCategorical.length,
  };
}

/**
 * Colour for a market movement.
 *
 * `mode` picks the diverging pair. `market` (red/green) is what traders
 * expect but measures ΔE 4.2 under deuteranopia — effectively identical for
 * ~8% of men — so it is ONLY legal alongside the direction glyph and label.
 * `accessible` (blue/orange) measures ΔE 30 and is the opt-in alternative.
 */
export type ColorMode = 'market' | 'accessible';

export function directionColor(
  changePct: number | null | undefined,
  mode: ColorMode = 'market',
): string {
  if (changePct === null || changePct === undefined || changePct === 0) {
    return 'var(--ask-text-tertiary)';
  }
  const pair = chartDiverging[mode];
  return changePct > 0 ? pair.positive[2] : pair.negative[2];
}

/** Mark geometry, so every chart draws with the same weights. */
export const markDefaults = {
  strokeWidth: chartMark.lineWidth,
  dotSize: chartMark.markerSize,
  fillOpacity: chartMark.areaOpacity,
  barRadius: chartMark.barRadius,
} as const;

/**
 * Guard for the dual-axis anti-pattern.
 *
 * Two y-scales on one chart is the single most common charting mistake: it
 * lets the author imply any correlation they like by choosing the scales.
 * Two measures of different magnitude become two charts, small multiples, or
 * series indexed to a common base.
 */
export function assertSingleAxis(seriesUnits: readonly string[]): void {
  const distinct = new Set(seriesUnits);
  if (distinct.size > 1) {
    throw new Error(
      `Dual-axis chart refused: series span ${distinct.size} units (${[...distinct].join(', ')}). ` +
        'Use small multiples, or index the series to a common base.',
    );
  }
}
