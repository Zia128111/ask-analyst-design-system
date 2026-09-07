export type ChartKind = 'Line' | 'Area' | 'Bar' | 'Column' | 'Pie' | 'Donut';
export interface AskChartProps {
    kind: ChartKind;
    /** First row is the header. Google Charts' arrayToDataTable shape. */
    data: (string | number | null)[][];
    /** Required: the accessible name of the chart. */
    title: string;
    /** Optional longer explanation, announced after the title. */
    description?: string;
    height?: number;
    /**
     * Stable series names, in the order they appear as data columns (excluding
     * the first, which is the category axis).
     *
     * Google Charts' `colors` array is POSITIONAL: colour N goes to series N.
     * That means hiding a series shifts every colour after it, which breaks the
     * rule that colour follows the entity, never its rank. Passing the full set
     * of names here — including ones currently filtered out — pins each series
     * to its own colour so the survivors never repaint.
     */
    seriesKeys?: readonly string[];
    /** Extra Google Charts options, merged last. Use sparingly. */
    options?: Record<string, unknown>;
}
export declare function AskChart({ kind, data, title, description, height, seriesKeys, options, }: AskChartProps): import("react").JSX.Element;
//# sourceMappingURL=AskChart.d.ts.map