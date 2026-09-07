import type { ComponentType } from 'react';
import {
  IconAlertTriangle,
  IconArrowsSort,
  IconBell,
  IconCalendar,
  IconCaretDownFilled,
  IconCaretUpFilled,
  IconChartLine,
  IconCheck,
  IconChevronDown,
  IconChevronRight,
  IconDownload,
  IconExternalLink,
  IconEye,
  IconFileText,
  IconFilter,
  IconInfoCircle,
  IconMinus,
  IconMoon,
  IconRefresh,
  IconSearch,
  IconSortAscending,
  IconSortDescending,
  IconStar,
  IconStarFilled,
  IconSun,
  IconTextDirectionLtr,
  IconTextDirectionRtl,
  IconX,
} from '@tabler/icons-react';

import { iconSize, iconStroke } from '../theme/tokens';

/* ============================================================================
 * ICONS — Ask Analyst Design System v2.0
 * ============================================================================
 * Set: Tabler Icons (MIT), the set Mantine is designed against.
 *
 * v1.0 specified eight icon SIZES but named no icon set, which is how a
 * product ends up mixing emoji, arrows typed as text, and SVGs from three
 * different families. Import icons from HERE, not from @tabler/icons-react
 * directly, so the curated set stays visible and the props stay consistent.
 * ========================================================================= */

export type IconSizeToken = keyof typeof iconSize;

export interface IconProps {
  size?: IconSizeToken;
  /**
   * Accessible label. Omit ONLY when the icon sits beside real text, in which
   * case it is marked aria-hidden automatically.
   */
  label?: string;
  color?: string;
  className?: string;
}

/**
 * Wraps a Tabler icon so the two accessibility rules are structural rather
 * than remembered:
 *   - no label  -> aria-hidden, focusable={false} (decorative)
 *   - a label   -> role="img" with an accessible name
 */
export function makeIcon(Glyph: ComponentType<Record<string, unknown>>, displayName: string) {
  function Icon({ size = 'sm', label, color, className }: IconProps) {
    const px = iconSize[size];
    return (
      <Glyph
        size={px}
        stroke={px <= iconSize.xs ? iconStroke.small : iconStroke.default}
        color={color ?? 'currentColor'}
        className={className}
        aria-hidden={label ? undefined : true}
        focusable={false}
        role={label ? 'img' : undefined}
        aria-label={label}
      />
    );
  }
  Icon.displayName = displayName;
  return Icon;
}

/* --- The curated set actually used in the product ------------------------ */

export const Icons = {
  // market direction — replaces the ▲ / ▼ text glyphs
  up: makeIcon(IconCaretUpFilled as never, 'IconUp'),
  down: makeIcon(IconCaretDownFilled as never, 'IconDown'),
  flat: makeIcon(IconMinus as never, 'IconFlat'),

  // actions
  search: makeIcon(IconSearch as never, 'IconSearch'),
  filter: makeIcon(IconFilter as never, 'IconFilter'),
  sort: makeIcon(IconArrowsSort as never, 'IconSort'),
  sortAsc: makeIcon(IconSortAscending as never, 'IconSortAsc'),
  sortDesc: makeIcon(IconSortDescending as never, 'IconSortDesc'),
  download: makeIcon(IconDownload as never, 'IconDownload'),
  refresh: makeIcon(IconRefresh as never, 'IconRefresh'),
  close: makeIcon(IconX as never, 'IconClose'),
  check: makeIcon(IconCheck as never, 'IconCheck'),
  externalLink: makeIcon(IconExternalLink as never, 'IconExternalLink'),

  // watchlist
  star: makeIcon(IconStar as never, 'IconStar'),
  starFilled: makeIcon(IconStarFilled as never, 'IconStarFilled'),

  // navigation
  chevronDown: makeIcon(IconChevronDown as never, 'IconChevronDown'),
  chevronRight: makeIcon(IconChevronRight as never, 'IconChevronRight'),

  // status — each ships with a label, never colour alone
  info: makeIcon(IconInfoCircle as never, 'IconInfo'),
  warning: makeIcon(IconAlertTriangle as never, 'IconWarning'),

  // appearance
  sun: makeIcon(IconSun as never, 'IconSun'),
  moon: makeIcon(IconMoon as never, 'IconMoon'),
  directionLtr: makeIcon(IconTextDirectionLtr as never, 'IconDirectionLtr'),
  directionRtl: makeIcon(IconTextDirectionRtl as never, 'IconDirectionRtl'),

  // domain
  chart: makeIcon(IconChartLine as never, 'IconChart'),
  report: makeIcon(IconFileText as never, 'IconReport'),
  calendar: makeIcon(IconCalendar as never, 'IconCalendar'),
  watch: makeIcon(IconEye as never, 'IconWatch'),
  alerts: makeIcon(IconBell as never, 'IconAlerts'),
} as const;

/** Direction icon for a market movement, matching lib/format's Direction. */
export const DIRECTION_ICON = {
  up: Icons.up,
  down: Icons.down,
  flat: Icons.flat,
} as const;
