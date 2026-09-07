import { Group, SegmentedControl, useMantineColorScheme } from '@mantine/core';

import { Icons } from '../lib/icons';
import classes from '../theme/components/ChromeToggle.module.css';

/* ============================================================================
 * COLOUR SCHEME TOGGLE — Ask Analyst Design System v2.0
 * ============================================================================
 * A two-option segmented control rather than a Switch.
 *
 * A Switch is the wrong control here: it implies a single boolean feature
 * being turned ON or OFF ("Dark mode: on"). Light and dark are two peer
 * choices, and a segmented control shows BOTH options with the current one
 * marked — the user can see what they will get before committing.
 *
 * Each option carries an icon AND a text label. Icon-only would leave the
 * meaning to a sun/moon glyph, which is not universally read the same way,
 * and would make the accessible name depend on an aria-label instead of
 * visible text.
 * ========================================================================= */

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  // Mantine's 'auto' follows the OS; resolve it so a segment is always marked.
  const resolved =
    colorScheme === 'auto'
      ? (document.documentElement.getAttribute('data-mantine-color-scheme') ?? 'light')
      : colorScheme;

  return (
    <SegmentedControl
      className={classes.root}
      value={resolved}
      onChange={(v) => setColorScheme(v as 'light' | 'dark')}
      // The control is a radio group; this names the group itself.
      aria-label="Colour scheme"
      data={[
        {
          value: 'light',
          label: (
            <Group gap={6} wrap="nowrap" justify="center">
              {/* Decorative: the word "Light" beside it carries the meaning. */}
              <Icons.sun size="xs" />
              <span>Light</span>
            </Group>
          ),
        },
        {
          value: 'dark',
          label: (
            <Group gap={6} wrap="nowrap" justify="center">
              <Icons.moon size="xs" />
              <span>Dark</span>
            </Group>
          ),
        },
      ]}
    />
  );
}
