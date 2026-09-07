export type Scheme = 'light' | 'dark';
export type Dir = 'ltr' | 'rtl';
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
export declare function baseChartOptions(scheme: Scheme, _dir?: Dir): {
    backgroundColor: string;
    colors: ("#1485ff" | "#ea580c" | "#0d9488" | "#9333ea" | "#a16207" | "#0891b2" | "#db2777" | "#4d7c0f")[];
    fontName: string;
    fontSize: number;
    chartArea: {
        left: number;
        right: number;
        top: number;
        bottom: number;
        width: string;
        height: string;
    };
    hAxis: {
        textStyle: {
            color: "#94a3b8" | "#475569";
            fontName: string;
            fontSize: number;
        };
        gridlines: {
            color: string;
        };
        baselineColor: "#cbd5e1" | "#334155";
    };
    vAxis: {
        textStyle: {
            color: "#94a3b8" | "#475569";
            fontName: string;
            fontSize: number;
        };
        gridlines: {
            color: "#e8edf3" | "#1e293b";
            count: number;
        };
        minorGridlines: {
            count: number;
        };
        baselineColor: "#cbd5e1" | "#334155";
    };
    legend: {
        position: "top";
        alignment: "start";
        textStyle: {
            color: "#94a3b8" | "#475569";
            fontName: string;
            fontSize: number;
        };
    };
    /**
     * isHtml lets the tooltip be styled with real CSS instead of Google's
     * limited textStyle object — see .ask-gchart-tooltip in index.css. Without
     * it the tooltip is the one part of the chart that ignores the system.
     */
    tooltip: {
        isHtml: boolean;
        trigger: "focus";
    };
    animation: {
        duration: number;
    };
};
/**
 * LINE — for a level series (an index, a price).
 *
 * `viewWindowMode: 'pretty'` rather than a zero baseline: a zero-based axis
 * turns a 0.7% index move into a flat line. Zero baselines belong on BARS,
 * where length encodes magnitude.
 */
export declare function lineChartOptions(scheme: Scheme, dir?: Dir, opts?: {
    curve?: boolean;
}): {
    lineWidth: 2;
    pointSize: number;
    curveType: "function" | undefined;
    vAxis: {
        viewWindowMode: "pretty";
        textStyle: {
            color: "#94a3b8" | "#475569";
            fontName: string;
            fontSize: number;
        };
        gridlines: {
            color: "#e8edf3" | "#1e293b";
            count: number;
        };
        minorGridlines: {
            count: number;
        };
        baselineColor: "#cbd5e1" | "#334155";
    };
    legend: {
        position: "none";
        alignment: "start";
        textStyle: {
            color: "#94a3b8" | "#475569";
            fontName: string;
            fontSize: number;
        };
    };
    backgroundColor: string;
    colors: ("#1485ff" | "#ea580c" | "#0d9488" | "#9333ea" | "#a16207" | "#0891b2" | "#db2777" | "#4d7c0f")[];
    fontName: string;
    fontSize: number;
    chartArea: {
        left: number;
        right: number;
        top: number;
        bottom: number;
        width: string;
        height: string;
    };
    hAxis: {
        textStyle: {
            color: "#94a3b8" | "#475569";
            fontName: string;
            fontSize: number;
        };
        gridlines: {
            color: string;
        };
        baselineColor: "#cbd5e1" | "#334155";
    };
    /**
     * isHtml lets the tooltip be styled with real CSS instead of Google's
     * limited textStyle object — see .ask-gchart-tooltip in index.css. Without
     * it the tooltip is the one part of the chart that ignores the system.
     */
    tooltip: {
        isHtml: boolean;
        trigger: "focus";
    };
    animation: {
        duration: number;
    };
};
/** AREA — same axis rules as line, with a light fill. */
export declare function areaChartOptions(scheme: Scheme, dir?: Dir): {
    areaOpacity: 0.12;
    lineWidth: 2;
    pointSize: number;
    curveType: "function" | undefined;
    vAxis: {
        viewWindowMode: "pretty";
        textStyle: {
            color: "#94a3b8" | "#475569";
            fontName: string;
            fontSize: number;
        };
        gridlines: {
            color: "#e8edf3" | "#1e293b";
            count: number;
        };
        minorGridlines: {
            count: number;
        };
        baselineColor: "#cbd5e1" | "#334155";
    };
    legend: {
        position: "none";
        alignment: "start";
        textStyle: {
            color: "#94a3b8" | "#475569";
            fontName: string;
            fontSize: number;
        };
    };
    backgroundColor: string;
    colors: ("#1485ff" | "#ea580c" | "#0d9488" | "#9333ea" | "#a16207" | "#0891b2" | "#db2777" | "#4d7c0f")[];
    fontName: string;
    fontSize: number;
    chartArea: {
        left: number;
        right: number;
        top: number;
        bottom: number;
        width: string;
        height: string;
    };
    hAxis: {
        textStyle: {
            color: "#94a3b8" | "#475569";
            fontName: string;
            fontSize: number;
        };
        gridlines: {
            color: string;
        };
        baselineColor: "#cbd5e1" | "#334155";
    };
    /**
     * isHtml lets the tooltip be styled with real CSS instead of Google's
     * limited textStyle object — see .ask-gchart-tooltip in index.css. Without
     * it the tooltip is the one part of the chart that ignores the system.
     */
    tooltip: {
        isHtml: boolean;
        trigger: "focus";
    };
    animation: {
        duration: number;
    };
};
/**
 * BAR / COLUMN — length encodes magnitude, so the baseline IS zero here.
 * Truncating a bar axis misstates the ratio between bars.
 */
export declare function barChartOptions(scheme: Scheme, dir?: Dir): {
    bar: {
        groupWidth: string;
    };
    vAxis: {
        minValue: number;
        textStyle: {
            color: "#94a3b8" | "#475569";
            fontName: string;
            fontSize: number;
        };
        gridlines: {
            color: "#e8edf3" | "#1e293b";
            count: number;
        };
        minorGridlines: {
            count: number;
        };
        baselineColor: "#cbd5e1" | "#334155";
    };
    legend: {
        position: "none";
        alignment: "start";
        textStyle: {
            color: "#94a3b8" | "#475569";
            fontName: string;
            fontSize: number;
        };
    };
    backgroundColor: string;
    colors: ("#1485ff" | "#ea580c" | "#0d9488" | "#9333ea" | "#a16207" | "#0891b2" | "#db2777" | "#4d7c0f")[];
    fontName: string;
    fontSize: number;
    chartArea: {
        left: number;
        right: number;
        top: number;
        bottom: number;
        width: string;
        height: string;
    };
    hAxis: {
        textStyle: {
            color: "#94a3b8" | "#475569";
            fontName: string;
            fontSize: number;
        };
        gridlines: {
            color: string;
        };
        baselineColor: "#cbd5e1" | "#334155";
    };
    /**
     * isHtml lets the tooltip be styled with real CSS instead of Google's
     * limited textStyle object — see .ask-gchart-tooltip in index.css. Without
     * it the tooltip is the one part of the chart that ignores the system.
     */
    tooltip: {
        isHtml: boolean;
        trigger: "focus";
    };
    animation: {
        duration: number;
    };
};
/** PIE / DONUT — used sparingly; a bar is almost always easier to read. */
export declare function pieChartOptions(scheme: Scheme, dir?: Dir, donut?: boolean): {
    pieHole: number;
    pieSliceBorderColor: "#ffffff" | "#111a2b";
    pieSliceText: "none";
    legend: {
        position: "left" | "right";
        alignment: "start";
        textStyle: {
            color: "#94a3b8" | "#475569";
            fontName: string;
            fontSize: number;
        };
    };
    chartArea: {
        top: number;
        bottom: number;
        left: number;
        right: number;
        width: string;
        height: string;
    };
    backgroundColor: string;
    colors: ("#1485ff" | "#ea580c" | "#0d9488" | "#9333ea" | "#a16207" | "#0891b2" | "#db2777" | "#4d7c0f")[];
    fontName: string;
    fontSize: number;
    hAxis: {
        textStyle: {
            color: "#94a3b8" | "#475569";
            fontName: string;
            fontSize: number;
        };
        gridlines: {
            color: string;
        };
        baselineColor: "#cbd5e1" | "#334155";
    };
    vAxis: {
        textStyle: {
            color: "#94a3b8" | "#475569";
            fontName: string;
            fontSize: number;
        };
        gridlines: {
            color: "#e8edf3" | "#1e293b";
            count: number;
        };
        minorGridlines: {
            count: number;
        };
        baselineColor: "#cbd5e1" | "#334155";
    };
    /**
     * isHtml lets the tooltip be styled with real CSS instead of Google's
     * limited textStyle object — see .ask-gchart-tooltip in index.css. Without
     * it the tooltip is the one part of the chart that ignores the system.
     */
    tooltip: {
        isHtml: boolean;
        trigger: "focus";
    };
    animation: {
        duration: number;
    };
};
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
export declare function mirrorValueAxis<T extends {
    vAxis: object;
    chartArea: object;
}>(options: T, dir: Dir, seriesCount: number): T;
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
export declare function mergeChartOptions<T extends Record<string, unknown>>(base: T, extra?: Record<string, unknown>): T & Record<string, unknown>;
/** Radius token for the HTML tooltip, exported so CSS and JS cannot drift. */
export declare const CHART_TOOLTIP_RADIUS: "8px";
//# sourceMappingURL=googleChartTheme.d.ts.map