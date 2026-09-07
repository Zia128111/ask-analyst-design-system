export declare const blue: readonly ["#f0f7ff", "#e0efff", "#b8dcff", "#8ac6ff", "#5cb0ff", "#349bff", "#1485ff", "#0a6fdb", "#0759b0", "#044386"];
export declare const neutral: readonly ["#f8fafc", "#f1f5f9", "#e8edf3", "#cbd5e1", "#94a3b8", "#64748b", "#475569", "#334155", "#1e293b", "#0f172a"];
/** Ink — primary text. Kept from v1.0; measured 19.80:1, not the claimed 17.2. */
export declare const ink = "#0a0a0a";
export declare const green: readonly ["#f0fdf4", "#dcfce7", "#bbf7d0", "#86efac", "#4ade80", "#22c55e", "#16a34a", "#15803d", "#166534", "#14532d"];
export declare const red: readonly ["#fef2f2", "#fee2e2", "#fecaca", "#fca5a5", "#f87171", "#ef4444", "#dc2626", "#b91c1c", "#991b1b", "#7f1d1d"];
export declare const amber: readonly ["#fffbeb", "#ffedbf", "#fde68a", "#fcd34d", "#fbbf24", "#f59e0b", "#b45309", "#8c6500", "#78350f", "#6b2d0a"];
export declare const semanticLight: {
    readonly 'text-primary': "#0a0a0a";
    readonly 'text-secondary': "#334155";
    readonly 'text-tertiary': "#475569";
    readonly 'text-disabled': "#94a3b8";
    readonly 'text-link': "#0a6fdb";
    readonly 'text-link-hover': "#0759b0";
    readonly 'text-inverse': "#ffffff";
    readonly 'text-on-brand': "#ffffff";
    readonly 'bg-page': "#ffffff";
    readonly 'bg-surface': "#ffffff";
    readonly 'bg-subtle': "#f8fafc";
    readonly 'bg-muted': "#f1f5f9";
    readonly 'bg-brand-subtle': "#f0f7ff";
    readonly 'bg-brand': "#1485ff";
    readonly 'bg-hover': "#f0f7ff";
    readonly 'bg-selected': "#e0efff";
    readonly 'border-subtle': "#e8edf3";
    readonly 'border-default': "#cbd5e1";
    readonly 'border-strong': "#64748b";
    readonly 'border-brand': "#1485ff";
    readonly 'border-focus': "#0a6fdb";
    readonly 'positive-text': "#15803d";
    readonly 'positive-bg': "#dcfce7";
    readonly 'positive-border': "#16a34a";
    readonly 'negative-text': "#b91c1c";
    readonly 'negative-bg': "#fee2e2";
    readonly 'negative-border': "#dc2626";
    readonly 'warning-text': "#8c6500";
    readonly 'warning-bg': "#ffedbf";
    readonly 'warning-border': "#b45309";
    readonly 'neutral-text': "#475569";
    readonly 'neutral-bg': "#f1f5f9";
    readonly 'neutral-border': "#cbd5e1";
    readonly 'logo-wordmark': "#1F2630";
};
export declare const semanticDark: {
    readonly 'text-primary': "#f8fafc";
    readonly 'text-secondary': "#cbd5e1";
    readonly 'text-tertiary': "#94a3b8";
    readonly 'text-disabled': "#475569";
    readonly 'text-link': "#5cb0ff";
    readonly 'text-link-hover': "#8ac6ff";
    readonly 'text-inverse': "#0a0a0a";
    readonly 'text-on-brand': "#ffffff";
    readonly 'bg-page': "#0b1220";
    readonly 'bg-surface': "#111a2b";
    readonly 'bg-subtle': "#0f172a";
    readonly 'bg-muted': "#1e293b";
    readonly 'bg-brand-subtle': "#0e2744";
    readonly 'bg-brand': "#1485ff";
    readonly 'bg-hover': "#16233a";
    readonly 'bg-selected': "#1b2b47";
    readonly 'border-subtle': "#1e293b";
    readonly 'border-default': "#334155";
    readonly 'border-strong': "#64748b";
    readonly 'border-brand': "#349bff";
    readonly 'border-focus': "#5cb0ff";
    readonly 'positive-text': "#4ade80";
    readonly 'positive-bg': "#052e16";
    readonly 'positive-border': "#166534";
    readonly 'negative-text': "#f87171";
    readonly 'negative-bg': "#450a0a";
    readonly 'negative-border': "#991b1b";
    readonly 'warning-text': "#fbbf24";
    readonly 'warning-bg': "#3d2b04";
    readonly 'warning-border': "#78350f";
    readonly 'neutral-text': "#94a3b8";
    readonly 'neutral-bg': "#1e293b";
    readonly 'neutral-border': "#334155";
    readonly 'logo-wordmark': "#ffffff";
};
export declare const fontSize: {
    readonly '2xs': "12px";
    readonly xs: "14px";
    readonly sm: "16px";
    readonly md: "18px";
    readonly lg: "20px";
    readonly xl: "24px";
    readonly '2xl': "30px";
    readonly '3xl': "36px";
    readonly '4xl': "48px";
};
/** Unitless so they scale with font-size. 1.5 body per WCAG 1.4.12. */
export declare const lineHeight: {
    readonly tight: "1.1";
    readonly snug: "1.25";
    readonly normal: "1.4";
    readonly relaxed: "1.5";
};
export declare const fontWeight: {
    readonly regular: 400;
    readonly medium: 500;
    readonly semibold: 600;
    readonly bold: 700;
};
export declare const letterSpacing: {
    readonly tighter: "-0.02em";
    readonly tight: "-0.01em";
    readonly normal: "0";
    readonly wide: "0.04em";
};
/**
 * Tabular figures. Non-negotiable for any column of numbers: proportional
 * digits make prices and percentages fail to align down a column.
 */
export declare const numeric: {
    readonly tabular: "tabular-nums";
    readonly proportional: "proportional-nums";
};
export declare const space: {
    readonly 0: "0px";
    readonly 1: "4px";
    readonly 2: "8px";
    readonly 3: "12px";
    readonly 4: "16px";
    readonly 5: "20px";
    readonly 6: "24px";
    readonly 8: "32px";
    readonly 10: "40px";
    readonly 12: "48px";
    readonly 16: "64px";
    readonly 20: "80px";
    readonly 24: "96px";
};
export declare const radius: {
    readonly xs: "4px";
    readonly sm: "6px";
    readonly md: "8px";
    readonly lg: "12px";
    readonly xl: "16px";
    readonly full: "9999px";
};
export declare const borderWidth: {
    readonly none: "0";
    readonly thin: "1px";
    readonly thick: "2px";
};
export declare const shadow: {
    readonly none: "none";
    readonly xs: "0 1px 2px 0 rgba(15, 23, 42, 0.04)";
    readonly sm: "0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 6px 24px 0 rgba(15, 23, 42, 0.03)";
    readonly md: "0 4px 8px -2px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.04)";
    readonly lg: "0 12px 20px -4px rgba(15, 23, 42, 0.08), 0 4px 8px -4px rgba(15, 23, 42, 0.04)";
    readonly xl: "0 24px 32px -8px rgba(15, 23, 42, 0.12), 0 8px 12px -6px rgba(15, 23, 42, 0.06)";
};
export declare const controlHeight: {
    readonly xs: "28px";
    readonly sm: "32px";
    readonly md: "40px";
    readonly lg: "48px";
};
/** WCAG 2.5.5 (AAA) and iOS/Android HIG. */
export declare const minTouchTarget = "44px";
/** WCAG 2.5.8 (AA) — the absolute floor for any pointer target. */
export declare const minTargetAA = "24px";
export declare const duration: {
    readonly instant: "0ms";
    readonly fast: "120ms";
    readonly base: "200ms";
    readonly slow: "320ms";
};
export declare const easing: {
    readonly standard: "cubic-bezier(0.2, 0, 0, 1)";
    readonly decelerate: "cubic-bezier(0, 0, 0, 1)";
    readonly accelerate: "cubic-bezier(0.3, 0, 1, 1)";
};
export declare const zIndex: {
    readonly base: 0;
    readonly raised: 10;
    readonly sticky: 1100;
    readonly overlay: 1200;
    readonly modal: 1300;
    readonly popover: 1400;
    readonly toast: 1500;
    readonly tooltip: 1600;
};
export declare const breakpoint: {
    readonly sm: "640px";
    readonly md: "768px";
    readonly lg: "1024px";
    readonly xl: "1280px";
    readonly '2xl': "1536px";
};
export declare const container: {
    readonly sm: "640px";
    readonly md: "768px";
    readonly lg: "1024px";
    readonly xl: "1280px";
    readonly content: "1280px";
    readonly prose: "68ch";
};
/** Focus ring — one definition, consumed by every interactive component. */
export declare const focusRing: {
    readonly width: "2px";
    readonly offset: "2px";
};
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
export declare const chartCategorical: readonly ["#1485ff", "#ea580c", "#0d9488", "#9333ea", "#a16207", "#0891b2", "#db2777", "#4d7c0f"];
/** SEQUENTIAL — magnitude. One hue, light→dark, light end clears 2:1 on the
 *  surface (a lighter first step measured 1.76:1 and was rejected). */
export declare const chartSequential: readonly ["#5cb0ff", "#1485ff", "#0759b0", "#044386"];
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
export declare const chartDiverging: {
    readonly market: {
        readonly negative: readonly ["#f87171", "#dc2626", "#b91c1c"];
        readonly neutral: "#e8edf3";
        readonly positive: readonly ["#22c55e", "#16a34a", "#15803d"];
        readonly cvdSafe: false;
    };
    readonly accessible: {
        readonly negative: readonly ["#fb923c", "#ea580c", "#c2410c"];
        readonly neutral: "#e8edf3";
        readonly positive: readonly ["#5cb0ff", "#1485ff", "#0759b0"];
        readonly cvdSafe: true;
    };
};
/** Chart furniture. Grid and axes are recessive — the data is the subject. */
export declare const chartSurface: {
    readonly light: {
        readonly surface: "#ffffff";
        readonly grid: "#e8edf3";
        readonly axis: "#cbd5e1";
        readonly axisLabel: "#475569";
        readonly crosshair: "#64748b";
        readonly tooltipBg: "#ffffff";
        readonly tooltipBorder: "#cbd5e1";
    };
    readonly dark: {
        readonly surface: "#111a2b";
        readonly grid: "#1e293b";
        readonly axis: "#334155";
        readonly axisLabel: "#94a3b8";
        readonly crosshair: "#64748b";
        readonly tooltipBg: "#1e293b";
        readonly tooltipBorder: "#334155";
    };
};
/** Mark geometry — thin marks, generous hit targets. */
export declare const chartMark: {
    readonly lineWidth: 2;
    readonly markerSize: 8;
    readonly barRadius: 4;
    readonly seriesGap: 2;
    readonly areaOpacity: 0.12;
};
export declare const iconSize: {
    readonly xs: 14;
    readonly sm: 16;
    readonly md: 20;
    readonly lg: 24;
    readonly xl: 32;
    readonly '2xl': 48;
};
/**
 * Stroke weight. Tabler ships at 2, which is heavy beside Lato at small sizes;
 * 1.5 matches the text colour weight. Below 16px, 1.75 keeps strokes from
 * disappearing on low-DPI screens.
 */
export declare const iconStroke: {
    readonly default: 1.5;
    readonly small: 1.75;
};
/**
 * ICON RULES
 * 1. Never an emoji. Emoji render differently per platform, cannot be
 *    recoloured, and are announced by screen readers as their CDLR name.
 * 2. A decorative icon beside a text label is `aria-hidden`.
 * 3. An icon that IS the control (an ActionIcon) needs an aria-label.
 * 4. An icon must never be the only carrier of meaning — pair it with text,
 *    or with a visually hidden label.
 */
export declare const ICON_RULES: {
    readonly noEmoji: true;
    readonly decorativeIsAriaHidden: true;
    readonly iconOnlyNeedsLabel: true;
};
//# sourceMappingURL=tokens.d.ts.map