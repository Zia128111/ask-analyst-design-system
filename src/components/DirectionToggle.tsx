import { Group, SegmentedControl, useDirection } from '@mantine/core';

import { Icons } from '../lib/icons';
import classes from '../theme/components/ChromeToggle.module.css';

/* ============================================================================
 * TEXT DIRECTION TOGGLE — Ask Analyst Design System v2.0
 * ============================================================================
 * Same reasoning as ColorSchemeToggle: LTR and RTL are two peer choices, not
 * one feature switched on. A Switch labelled "RTL" also forces the reader to
 * work out what the OFF state means; a segmented control names both.
 *
 * The icons are NOT mirrored in RTL. Most icons should flip with the reading
 * direction, but these two depict the directions themselves — mirroring them
 * would make each option show the other one's meaning.
 *
 * NOTE FOR PRODUCTION: this is a developer/QA control. In the Ask Analyst
 * Saudi build the user-facing control is a LANGUAGE switcher (English /
 * العربية) which sets direction as a side effect — nobody picks "RTL", they
 * pick a language.
 * ========================================================================= */

export function DirectionToggle() {
  const { dir, setDirection } = useDirection();

  return (
    <SegmentedControl
      className={classes.root}
      value={dir}
      onChange={(v) => setDirection(v as 'ltr' | 'rtl')}
      aria-label="Text direction"
      data={[
        {
          value: 'ltr',
          label: (
            <Group gap={6} wrap="nowrap" justify="center">
              {/* Decorative — the visible "LTR" carries the meaning. */}
              <Icons.directionLtr size="xs" />
              <span>LTR</span>
            </Group>
          ),
        },
        {
          value: 'rtl',
          label: (
            <Group gap={6} wrap="nowrap" justify="center">
              <Icons.directionRtl size="xs" />
              <span>RTL</span>
            </Group>
          ),
        },
      ]}
    />
  );
}
