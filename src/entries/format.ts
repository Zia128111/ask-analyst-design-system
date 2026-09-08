/* ============================================================================
 * SERVER-SAFE ENTRY — number and date formatting
 * ============================================================================
 * Pure functions with no React and no browser API, so they run anywhere. See
 * entries/tokens.ts for why they need an entry of their own.
 *
 *   import { formatPrice } from '@akseer/ask-analyst-design-system/format';
 *
 * The direction ICON lives in the main entry instead — it is a React
 * component, so it is legitimately client-side. DIRECTION_LABEL and
 * DIRECTION_TOKEN are plain values and are exported here.
 * ========================================================================= */

export {
  PRECISION,
  NOT_AVAILABLE,
  formatNumber,
  formatCompact,
  formatPercent,
  formatPrice,
  formatVolume,
  formatMarketCap,
  formatChange,
  formatTime,
  formatDate,
  direction,
  DIRECTION_GLYPH,
  DIRECTION_LABEL,
  DIRECTION_TOKEN,
} from '../lib/format';
export type { SignStyle, Direction } from '../lib/format';
