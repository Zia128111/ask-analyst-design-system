/* ============================================================================
 * NUMBER & MARKET FORMATTING — Ask Analyst Design System v2.0
 * ============================================================================
 * Scale convention: MILLIONS AND BILLIONS (not lakh / crore). Confirmed
 * 2026-09-04. Every abbreviated figure in the product uses K / M / B / T.
 *
 * These are the only sanctioned number formatters. Rendering a figure with
 * `toFixed`, `toLocaleString` or string concatenation anywhere else is how a
 * product ends up showing "98318666", "9.83 crore" and "98.32M" on one screen.
 * ========================================================================= */

/** How a negative value is drawn. Accounting parentheses are the default
 *  because the product already uses them in its index header — "(0.25)%". */
export type SignStyle = 'parens' | 'minus';

/** Decimal precision per data type. Centralised so a price is 2dp everywhere. */
export const PRECISION = {
  price: 2,
  index: 2,
  percent: 2,
  change: 2,
  ratio: 2,
  volume: 0,
  shares: 0,
  currency: 2,
} as const;

/** Rendered when a value is genuinely unavailable.
 *  NOT "#N/A" — that is a spreadsheet error leaking into the interface. */
export const NOT_AVAILABLE = '—';

const LOCALE = 'en-US';

const isBlank = (v: unknown): v is null | undefined =>
  v === null || v === undefined || (typeof v === 'number' && !Number.isFinite(v));

function applySign(body: string, negative: boolean, style: SignStyle): string {
  if (!negative) return body;
  return style === 'parens' ? `(${body})` : `-${body}`;
}

/** Grouped decimal: 175198.04 -> "175,198.04" */
export function formatNumber(
  value: number | null | undefined,
  opts: { decimals?: number; signStyle?: SignStyle } = {},
): string {
  if (isBlank(value)) return NOT_AVAILABLE;
  const { decimals = 2, signStyle = 'minus' } = opts;
  const body = new Intl.NumberFormat(LOCALE, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(Math.abs(value));
  return applySign(body, value < 0, signStyle);
}

const UNITS = [
  { limit: 1e12, suffix: 'T' },
  { limit: 1e9, suffix: 'B' },
  { limit: 1e6, suffix: 'M' },
  { limit: 1e3, suffix: 'K' },
] as const;

/**
 * Abbreviated scale — MILLIONS AND BILLIONS.
 *   98_318_666 -> "98.32M"      1_234_567_890 -> "1.23B"
 *
 * Below `threshold` the full grouped number is shown, because abbreviating
 * small figures ("1.23K") costs precision without saving space.
 */
export function formatCompact(
  value: number | null | undefined,
  opts: { decimals?: number; threshold?: number; signStyle?: SignStyle } = {},
): string {
  if (isBlank(value)) return NOT_AVAILABLE;
  const { decimals = 2, threshold = 1e6, signStyle = 'minus' } = opts;
  const abs = Math.abs(value);

  if (abs < threshold) {
    return applySign(
      new Intl.NumberFormat(LOCALE, { maximumFractionDigits: 0 }).format(abs),
      value < 0,
      signStyle,
    );
  }

  const unit = UNITS.find((u) => abs >= u.limit);
  if (!unit) return formatNumber(value, { decimals, signStyle });

  const scaled = abs / unit.limit;
  return applySign(
    `${new Intl.NumberFormat(LOCALE, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(scaled)}${unit.suffix}`,
    value < 0,
    signStyle,
  );
}

/** Percentage. Accounting parentheses by default: -0.25 -> "(0.25)%" */
export function formatPercent(
  value: number | null | undefined,
  opts: { decimals?: number; signStyle?: SignStyle; showPlus?: boolean } = {},
): string {
  if (isBlank(value)) return NOT_AVAILABLE;
  const { decimals = PRECISION.percent, signStyle = 'parens', showPlus = false } = opts;
  const digits = new Intl.NumberFormat(LOCALE, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(Math.abs(value));
  if (value > 0 && showPlus) return `+${digits}%`;
  // The unit sits OUTSIDE the accounting parentheses: "(0.25)%", not "(0.25%)".
  // This matches the convention already used in the product's index header.
  return `${applySign(digits, value < 0, signStyle)}%`;
}

/** Price / index level — always 2dp, always grouped. */
export const formatPrice = (v: number | null | undefined) =>
  formatNumber(v, { decimals: PRECISION.price });

/** Traded volume — whole shares, abbreviated past a million. */
export const formatVolume = (v: number | null | undefined) =>
  formatCompact(v, { decimals: PRECISION.price, threshold: 1e6 });

/** Market capitalisation — currency-marked and abbreviated. */
export const formatMarketCap = (v: number | null | undefined) =>
  isBlank(v) ? NOT_AVAILABLE : `Rs ${formatCompact(v, { decimals: 2, threshold: 1e6 })}`;

/** Absolute price change. Sign is carried by the direction glyph, so the
 *  number itself uses a plain minus rather than parentheses. */
export const formatChange = (v: number | null | undefined) =>
  formatNumber(v, { decimals: PRECISION.change, signStyle: 'minus' });

/** Direction of a movement. Drives BOTH colour and glyph — colour alone must
 *  never be the only signal (WCAG 1.4.1). */
export type Direction = 'up' | 'down' | 'flat';

export function direction(value: number | null | undefined): Direction {
  if (isBlank(value) || value === 0) return 'flat';
  return value > 0 ? 'up' : 'down';
}

/**
 * TEXT-ONLY direction marks, for contexts where an SVG cannot go: CSV export,
 * plain-text email, the Morning Briefing newsletter. The UI must use
 * `DIRECTION_ICON` from lib/icons instead — a typed triangle renders
 * differently per font and screen readers announce it as punctuation.
 */
export const DIRECTION_GLYPH: Record<Direction, string> = {
  up: '▲', // icon-ok: plain-text export only
  down: '▼', // icon-ok: plain-text export only
  flat: '–', // icon-ok: plain-text export only
};

/** Screen-reader wording. "▲ 0.96" alone reads as meaningless punctuation. */
export const DIRECTION_LABEL: Record<Direction, string> = {
  up: 'up',
  down: 'down',
  flat: 'unchanged',
};

export const DIRECTION_TOKEN: Record<Direction, string> = {
  up: 'var(--ask-positive-text)',
  down: 'var(--ask-negative-text)',
  flat: 'var(--ask-text-tertiary)',
};

/** Timestamps are always explicit about timezone — PSX trades in PKT. */
export function formatTime(d: Date | null | undefined, tz = 'Asia/Karachi'): string {
  if (!d) return NOT_AVAILABLE;
  return new Intl.DateTimeFormat(LOCALE, {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: tz,
    timeZoneName: 'short',
  }).format(d);
}

export function formatDate(d: Date | null | undefined, tz = 'Asia/Karachi'): string {
  if (!d) return NOT_AVAILABLE;
  return new Intl.DateTimeFormat(LOCALE, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: tz,
  }).format(d);
}
