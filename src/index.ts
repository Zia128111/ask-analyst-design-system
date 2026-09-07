/* ============================================================================
 * ASK ANALYST DESIGN SYSTEM — public API
 * ============================================================================
 * The full specification lives in DESIGN-SYSTEM-v2.md. The rules that matter
 * when consuming this package are in CLAUDE.md.
 *
 * Importing this module pulls in the stylesheet during the library build, so
 * dist/styles.css ships every CSS module plus the global layer. Consumers
 * still import that CSS explicitly — see src/styles.css for the order.
 * ========================================================================= */

import './styles.css';

/* -- Theme ---------------------------------------------------------------- */
export { theme, cssVariablesResolver, tokens } from './theme';

/* -- Formatting ------------------------------------------------------------
 * The ONLY sanctioned number formatters. Never toFixed, never string
 * concatenation — millions/billions, accounting parentheses, em-dash for
 * missing data. Enforced by `npm run verify:format`.                        */
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
} from './lib/format';
export type { SignStyle, Direction } from './lib/format';

/* -- Icons -----------------------------------------------------------------
 * Import icons from here, never from @tabler/icons-react directly.
 * `npm run verify:icons` fails the build otherwise.                          */
export { Icons, DIRECTION_ICON, makeIcon } from './lib/icons';
export type { IconProps, IconSizeToken } from './lib/icons';

/* -- Charts --------------------------------------------------------------- */
export {
  createSeriesPalette,
  directionColor,
  markDefaults,
  assertSingleAxis,
} from './lib/chart';
export type { ColorMode } from './lib/chart';

export {
  baseChartOptions,
  lineChartOptions,
  areaChartOptions,
  barChartOptions,
  pieChartOptions,
  CHART_TOOLTIP_RADIUS,
} from './lib/googleChartTheme';
export type { Scheme, Dir } from './lib/googleChartTheme';

/* -- Email -----------------------------------------------------------------
 * Flattened tokens for the Morning Briefing. No var(), no rem — email
 * clients support neither. `npm run verify:email` keeps them in step with
 * tokens.ts.                                                                */
export {
  EMAIL_FONT_STACK,
  emailColor,
  emailSize,
  emailStyle,
  EMAIL_DIRECTION,
} from './lib/email-tokens';

/* -- Components ----------------------------------------------------------- */
export { AppHeader, NAV_ITEMS } from './components/AppHeader';
export type { NavItem, AppHeaderProps } from './components/AppHeader';

export { AskChart } from './components/AskChart';
export type { ChartKind, AskChartProps } from './components/AskChart';

export { ColorSchemeToggle } from './components/ColorSchemeToggle';
export { DirectionToggle } from './components/DirectionToggle';

export { TableSkeleton, EmptyState, ErrorState, StaleNotice } from './components/DataState';
export type { DataStatus } from './components/DataState';

export { Logo, LogoMark } from './components/Logo';
export type { LogoProps } from './components/Logo';

export { MarketTable } from './components/MarketTable';
export type { Quote, MarketTableProps } from './components/MarketTable';

export { PageHeading } from './components/PageHeading';
export type { PageHeadingProps } from './components/PageHeading';
