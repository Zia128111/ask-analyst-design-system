import { useState } from 'react';
import { Burger, Drawer, Group, Stack } from '@mantine/core';

import { Logo } from './Logo';

import classes from '../theme/components/Layout.module.css';

/* ============================================================================
 * APP HEADER + NAVIGATION — Ask Analyst Design System v2.0
 * ============================================================================
 * Implements v1.0 §Component Specifications › Header and Navigation Bar.
 *
 * The landmark structure matters as much as the visuals: <header>, <nav> and
 * the skip link are what let a keyboard or screen-reader user move around a
 * nine-item navigation without tabbing through it on every page.
 * ========================================================================= */

export interface NavItem {
  label: string;
  href: string;
}

/** The nine top-level sections of the product. */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Market', href: '#market' },
  { label: 'Companies', href: '#companies' },
  { label: 'Data Bank', href: '#data-bank' },
  { label: 'Sector Fundamentals', href: '#sectors' },
  { label: 'Economy', href: '#economy' },
  { label: 'Media', href: '#media' },
  { label: 'Features', href: '#features' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Research Report', href: '#research' },
];

/**
 * How wide the header's inner row runs.
 *
 * The header MUST agree with the page beneath it, or the logo and the first
 * heading sit on two different inline-start edges — which is why this is a
 * prop and not something a consumer overrides with its own CSS.
 *
 *   content  the reading measure, 1280px — the default, and right for most pages
 *   wide     1600px — data-dense boards where columns are worth more than measure
 *   full     no cap — edge to edge, for a page that really is the whole screen
 */
export type HeaderWidth = 'content' | 'wide' | 'full';

export interface AppHeaderProps {
  items?: NavItem[];
  activeHref?: string;
  /** Id of the <main> element the skip link jumps to. */
  mainId?: string;
  brand?: React.ReactNode;
  actions?: React.ReactNode;
  /** Defaults to 'content', so existing pages are unaffected. */
  width?: HeaderWidth;
}

export function AppHeader({
  items = NAV_ITEMS,
  activeHref,
  mainId = 'main',
  brand,
  actions,
  width = 'content',
}: AppHeaderProps) {
  const [opened, setOpened] = useState(false);

  const link = (item: NavItem, onClick?: () => void) => (
    <a
      key={item.href}
      href={item.href}
      className={classes.navItem}
      /* aria-current is the source of truth for "you are here" — the CSS hangs
         off it, so the visual state and the announced state cannot diverge. */
      aria-current={item.href === activeHref ? 'page' : undefined}
      onClick={onClick}
    >
      {item.label}
    </a>
  );

  return (
    <>
      {/* First focusable element on the page. v1.0 had none, so reaching
          content meant tabbing through all nine nav items, every page. */}
      <a href={`#${mainId}`} className={classes.skipLink}>
        Skip to content
      </a>

      <header className={classes.header}>
        <div className={classes.headerInner} data-width={width}>
          <Group gap="sm" wrap="nowrap">
            {/* The logo is the site name, so it carries the accessible name
                rather than being decorative. */}
            {brand ?? <Logo height={28} title="Ask Analyst" />}
          </Group>

          {/* A real <nav> landmark with an accessible name, so screen-reader
              users can jump straight to it. */}
          <nav aria-label="Primary" className={classes.nav}>
            {items.map((i) => link(i))}
          </nav>

          <Group gap="sm" wrap="nowrap">
            {actions}
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              className={classes.burger}
              aria-label={opened ? 'Close navigation' : 'Open navigation'}
              aria-expanded={opened}
              size="sm"
            />
          </Group>
        </div>
      </header>

      {/* Nine items cannot fit on a phone, so below lg they move into a drawer
          rather than wrapping into a three-line header or scrolling sideways. */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Navigation"
        size="xs"
        position="right"
      >
        <nav aria-label="Primary mobile">
          <Stack gap="xs">{items.map((i) => link(i, () => setOpened(false)))}</Stack>
        </nav>
      </Drawer>
    </>
  );
}
