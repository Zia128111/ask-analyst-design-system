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
export declare function createSeriesPalette(allSeriesNames: readonly string[]): {
    /** Stable colour for a series, regardless of what is currently visible. */
    colorFor(name: string): string;
    /** True once the palette is exhausted and remaining series must fold. */
    readonly overflows: boolean;
    max: 8;
};
/**
 * Colour for a market movement.
 *
 * `mode` picks the diverging pair. `market` (red/green) is what traders
 * expect but measures ΔE 4.2 under deuteranopia — effectively identical for
 * ~8% of men — so it is ONLY legal alongside the direction glyph and label.
 * `accessible` (blue/orange) measures ΔE 30 and is the opt-in alternative.
 */
export type ColorMode = 'market' | 'accessible';
export declare function directionColor(changePct: number | null | undefined, mode?: ColorMode): string;
/** Mark geometry, so every chart draws with the same weights. */
export declare const markDefaults: {
    readonly strokeWidth: 2;
    readonly dotSize: 8;
    readonly fillOpacity: 0.12;
    readonly barRadius: 4;
};
/**
 * Guard for the dual-axis anti-pattern.
 *
 * Two y-scales on one chart is the single most common charting mistake: it
 * lets the author imply any correlation they like by choosing the scales.
 * Two measures of different magnitude become two charts, small multiples, or
 * series indexed to a common base.
 */
export declare function assertSingleAxis(seriesUnits: readonly string[]): void;
//# sourceMappingURL=chart.d.ts.map