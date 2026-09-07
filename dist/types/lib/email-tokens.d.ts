/** Web-safe stack. Lato is named first in case a client does have it. */
export declare const EMAIL_FONT_STACK = "Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif";
/**
 * Resolved hex values — no `var()`, no ramp indexes. Derived at build time
 * from the same tokens the product uses.
 */
export declare const emailColor: {
    readonly brand: "#1485ff";
    readonly brandTint: "#f0f7ff";
    readonly link: "#0a6fdb";
    readonly textPrimary: "#0a0a0a";
    readonly textSecondary: "#334155";
    readonly textTertiary: "#475569";
    readonly border: "#e8edf3";
    readonly surface: "#ffffff";
    readonly positive: "#15803d";
    readonly negative: "#b91c1c";
    readonly warning: "#8c6500";
    readonly onBrand: "#ffffff";
};
/** Whole pixels only. Email clients round or drop fractional units. */
export declare const emailSize: {
    readonly bodyText: 16;
    readonly smallText: 14;
    readonly label: 12;
    readonly h1: 28;
    readonly h2: 22;
    readonly h3: 18;
    readonly lineHeightBody: 24;
    readonly lineHeightTight: 22;
    readonly cellPaddingY: 8;
    readonly cellPaddingX: 12;
    readonly contentWidth: 600;
};
/**
 * Ready-to-inline style strings. Templating engines can drop these straight
 * into a `style="..."` attribute.
 */
export declare const emailStyle: {
    readonly body: "margin:0;padding:0;background-color:#ffffff;font-family:Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;line-height:24px;color:#0a0a0a;";
    readonly container: "width:100%;max-width:600px;margin:0 auto;";
    readonly h1: "margin:0 0 16px;font-family:Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:28px;line-height:34px;font-weight:700;color:#0a0a0a;";
    readonly h2: "margin:24px 0 8px;font-family:Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:22px;line-height:28px;font-weight:700;color:#0a0a0a;";
    readonly paragraph: "margin:0 0 16px;font-size:16px;line-height:24px;color:#334155;";
    readonly link: "color:#0a6fdb;text-decoration:underline;";
    readonly tableHeaderCell: "padding:8px 12px;background-color:#f0f7ff;border-bottom:2px solid #1485ff;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#334155;text-align:left;";
    readonly tableCell: "padding:8px 12px;border-bottom:1px solid #1485ff;font-size:14px;color:#0a0a0a;";
    readonly tableCellNumeric: "padding:8px 12px;border-bottom:1px solid #1485ff;font-size:14px;color:#0a0a0a;text-align:right;";
    readonly positive: "color:#15803d;font-weight:700;";
    readonly negative: "color:#b91c1c;font-weight:700;";
    readonly button: "display:inline-block;padding:12px 20px;background-color:#1485ff;border-radius:8px;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;";
    readonly meta: "font-size:12px;color:#475569;";
};
/**
 * Direction marks for email use the TEXT glyphs from lib/format, not SVG
 * icons: inline SVG is stripped by Outlook and Gmail. Pair them with the word,
 * exactly as the product does — colour alone must not carry the meaning.
 */
export declare const EMAIL_DIRECTION: {
    readonly up: {
        readonly glyph: "▲";
        readonly word: "up";
        readonly color: "#15803d";
    };
    readonly down: {
        readonly glyph: "▼";
        readonly word: "down";
        readonly color: "#b91c1c";
    };
    readonly flat: {
        readonly glyph: "–";
        readonly word: "unchanged";
        readonly color: "#475569";
    };
};
//# sourceMappingURL=email-tokens.d.ts.map