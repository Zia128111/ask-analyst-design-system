/** How a negative value is drawn. Accounting parentheses are the default
 *  because the product already uses them in its index header — "(0.25)%". */
export type SignStyle = 'parens' | 'minus';
/** Decimal precision per data type. Centralised so a price is 2dp everywhere. */
export declare const PRECISION: {
    readonly price: 2;
    readonly index: 2;
    readonly percent: 2;
    readonly change: 2;
    readonly ratio: 2;
    readonly volume: 0;
    readonly shares: 0;
    readonly currency: 2;
};
/** Rendered when a value is genuinely unavailable.
 *  NOT "#N/A" — that is a spreadsheet error leaking into the interface. */
export declare const NOT_AVAILABLE = "\u2014";
/** Grouped decimal: 175198.04 -> "175,198.04" */
export declare function formatNumber(value: number | null | undefined, opts?: {
    decimals?: number;
    signStyle?: SignStyle;
}): string;
/**
 * Abbreviated scale — MILLIONS AND BILLIONS.
 *   98_318_666 -> "98.32M"      1_234_567_890 -> "1.23B"
 *
 * Below `threshold` the full grouped number is shown, because abbreviating
 * small figures ("1.23K") costs precision without saving space.
 */
export declare function formatCompact(value: number | null | undefined, opts?: {
    decimals?: number;
    threshold?: number;
    signStyle?: SignStyle;
}): string;
/** Percentage. Accounting parentheses by default: -0.25 -> "(0.25)%" */
export declare function formatPercent(value: number | null | undefined, opts?: {
    decimals?: number;
    signStyle?: SignStyle;
    showPlus?: boolean;
}): string;
/** Price / index level — always 2dp, always grouped. */
export declare const formatPrice: (v: number | null | undefined) => string;
/** Traded volume — whole shares, abbreviated past a million. */
export declare const formatVolume: (v: number | null | undefined) => string;
/** Market capitalisation — currency-marked and abbreviated. */
export declare const formatMarketCap: (v: number | null | undefined) => string;
/** Absolute price change. Sign is carried by the direction glyph, so the
 *  number itself uses a plain minus rather than parentheses. */
export declare const formatChange: (v: number | null | undefined) => string;
/** Direction of a movement. Drives BOTH colour and glyph — colour alone must
 *  never be the only signal (WCAG 1.4.1). */
export type Direction = 'up' | 'down' | 'flat';
export declare function direction(value: number | null | undefined): Direction;
/**
 * TEXT-ONLY direction marks, for contexts where an SVG cannot go: CSV export,
 * plain-text email, the Morning Briefing newsletter. The UI must use
 * `DIRECTION_ICON` from lib/icons instead — a typed triangle renders
 * differently per font and screen readers announce it as punctuation.
 */
export declare const DIRECTION_GLYPH: Record<Direction, string>;
/** Screen-reader wording. "▲ 0.96" alone reads as meaningless punctuation. */
export declare const DIRECTION_LABEL: Record<Direction, string>;
export declare const DIRECTION_TOKEN: Record<Direction, string>;
/** Timestamps are always explicit about timezone — PSX trades in PKT. */
export declare function formatTime(d: Date | null | undefined, tz?: string): string;
export declare function formatDate(d: Date | null | undefined, tz?: string): string;
//# sourceMappingURL=format.d.ts.map