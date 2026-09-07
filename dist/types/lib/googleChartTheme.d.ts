export type Scheme = 'light' | 'dark';
export type Dir = 'ltr' | 'rtl';
/**
 * Base options shared by every chart type.
 *
 * `backgroundColor: 'transparent'` so the chart sits on our own surface rather
 * than punching a white rectangle through a dark page.
 */
export declare function baseChartOptions(scheme: Scheme, dir?: Dir): {
    backgroundColor: string;
    colors: ("#1485ff" | "#ea580c" | "#0d9488" | "#9333ea" | "#a16207" | "#0891b2" | "#db2777" | "#4d7c0f")[];
    fontName: string;
    fontSize: number;
    chartArea: {
        top: number;
        bottom: number;
        width: string;
        height: string;
        left: number;
        right: number;
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
        top: number;
        bottom: number;
        width: string;
        height: string;
        left: number;
        right: number;
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
        top: number;
        bottom: number;
        width: string;
        height: string;
        left: number;
        right: number;
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
        top: number;
        bottom: number;
        width: string;
        height: string;
        left: number;
        right: number;
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
        width: string;
        height: string;
        left: number;
        right: number;
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
/** Radius token for the HTML tooltip, exported so CSS and JS cannot drift. */
export declare const CHART_TOOLTIP_RADIUS: "8px";
//# sourceMappingURL=googleChartTheme.d.ts.map