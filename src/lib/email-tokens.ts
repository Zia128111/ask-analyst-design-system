import {
  blue,
  green,
  ink,
  neutral,
  red,
  amber,
  semanticLight,
} from '../theme/tokens.ts';

/* ============================================================================
 * EMAIL TOKENS — Ask Analyst Design System v2.0
 * ============================================================================
 * The Morning Briefing newsletter cannot use the design system directly:
 *
 *   - CSS custom properties are unsupported in Outlook (Word rendering engine)
 *     and stripped by several webmail clients, so `var(--ask-*)` resolves to
 *     nothing and text renders black-on-black.
 *   - Self-hosted Lato will not load; @font-face is blocked or ignored in most
 *     clients, so the stack must degrade to a real system font.
 *   - External stylesheets are stripped: styles must be INLINE on each element.
 *   - `rem` is unreliable; email works in `px`.
 *   - Flexbox and grid are unsupported in Outlook: layout is <table>-based.
 *   - `prefers-color-scheme` is inconsistently honoured, so email is
 *     light-only. Never rely on a dark variant.
 *   - Logical properties (`text-align: start`, `padding-inline`) are NOT
 *     supported, so email is the one place physical left/right is correct.
 *     Those lines carry an `rtl-ok` marker for the RTL audit. An Arabic
 *     newsletter needs a mirrored template, not a mirrored stylesheet.
 *
 * These are therefore FLATTENED literals derived from the same source of
 * truth, so the newsletter cannot drift from the product.
 * ========================================================================= */

/** Web-safe stack. Lato is named first in case a client does have it. */
export const EMAIL_FONT_STACK =
  "Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif";

/**
 * Resolved hex values — no `var()`, no ramp indexes. Derived at build time
 * from the same tokens the product uses.
 */
export const emailColor = {
  brand: blue[6], //              #1485ff — fills and rules
  brandTint: blue[0], //          #f0f7ff — table header fill
  link: blue[7], //               #0a6fdb — 4.87:1, NOT the brand blue
  textPrimary: ink, //            19.80:1
  textSecondary: neutral[7], //   10.35:1
  textTertiary: neutral[6], //     7.44:1
  border: neutral[2],
  surface: '#ffffff',
  positive: green[7],
  negative: red[7],
  warning: amber[7],
  /* Label on a brand fill is ink, not white — white is 3.60:1 there. */
  onBrand: semanticLight['text-on-brand'],
} as const;

/** Whole pixels only. Email clients round or drop fractional units. */
export const emailSize = {
  bodyText: 16,
  smallText: 14,
  label: 12,
  h1: 28, //  smaller than the product's 36px: email is read in a narrow column
  h2: 22,
  h3: 18,
  lineHeightBody: 24, // px, not unitless — Outlook needs an absolute value
  lineHeightTight: 22,
  cellPaddingY: 8,
  cellPaddingX: 12,
  contentWidth: 600, // the email standard; wider is clipped in many clients
} as const;

/**
 * Ready-to-inline style strings. Templating engines can drop these straight
 * into a `style="..."` attribute.
 */
export const emailStyle = {
  body: `margin:0;padding:0;background-color:${emailColor.surface};font-family:${EMAIL_FONT_STACK};font-size:${emailSize.bodyText}px;line-height:${emailSize.lineHeightBody}px;color:${emailColor.textPrimary};`,
  container: `width:100%;max-width:${emailSize.contentWidth}px;margin:0 auto;`,
  h1: `margin:0 0 16px;font-family:${EMAIL_FONT_STACK};font-size:${emailSize.h1}px;line-height:34px;font-weight:700;color:${emailColor.textPrimary};`,
  h2: `margin:24px 0 8px;font-family:${EMAIL_FONT_STACK};font-size:${emailSize.h2}px;line-height:28px;font-weight:700;color:${emailColor.textPrimary};`,
  paragraph: `margin:0 0 16px;font-size:${emailSize.bodyText}px;line-height:${emailSize.lineHeightBody}px;color:${emailColor.textSecondary};`,
  link: `color:${emailColor.link};text-decoration:underline;`,
  tableHeaderCell: `padding:${emailSize.cellPaddingY}px ${emailSize.cellPaddingX}px;background-color:${emailColor.brandTint};border-bottom:2px solid ${emailColor.brand};font-size:${emailSize.label}px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:${emailColor.textSecondary};text-align:left;`, // rtl-ok: email clients do not support logical properties
  tableCell: `padding:${emailSize.cellPaddingY}px ${emailSize.cellPaddingX}px;border-bottom:1px solid ${emailColor.brand};font-size:${emailSize.smallText}px;color:${emailColor.textPrimary};`,
  tableCellNumeric: `padding:${emailSize.cellPaddingY}px ${emailSize.cellPaddingX}px;border-bottom:1px solid ${emailColor.brand};font-size:${emailSize.smallText}px;color:${emailColor.textPrimary};text-align:right;`, // rtl-ok: email clients do not support logical properties
  positive: `color:${emailColor.positive};font-weight:700;`,
  negative: `color:${emailColor.negative};font-weight:700;`,
  button: `display:inline-block;padding:12px 20px;background-color:${emailColor.brand};border-radius:8px;color:${emailColor.onBrand};font-size:14px;font-weight:700;text-decoration:none;`,
  meta: `font-size:${emailSize.label}px;color:${emailColor.textTertiary};`,
} as const;

/**
 * Direction marks for email use the TEXT glyphs from lib/format, not SVG
 * icons: inline SVG is stripped by Outlook and Gmail. Pair them with the word,
 * exactly as the product does — colour alone must not carry the meaning.
 */
export const EMAIL_DIRECTION = {
  up: { glyph: '▲', word: 'up', color: emailColor.positive }, // icon-ok: email
  down: { glyph: '▼', word: 'down', color: emailColor.negative }, // icon-ok: email
  flat: { glyph: '–', word: 'unchanged', color: emailColor.textTertiary }, // icon-ok: email
} as const;
