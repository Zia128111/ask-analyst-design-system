import type { ReactNode } from 'react';
import {
  AppHeader,
  ColorSchemeToggle,
  DirectionToggle,
  Group,
  NAV_ITEMS,
} from '@akseer/ask-analyst-design-system';

/* The skip link is absolutely positioned above the header (top: -control-lg)
   and only drops into view on focus. A positioned, clipping wrapper is what a
   real page gives it; without one it hangs off the top of the card. */
const Page = ({ children }: { children: ReactNode }) => (
  <div style={{ position: 'relative', overflow: 'hidden' }}>{children}</div>
);

export const Default = () => (
  <Page>
    <AppHeader
      activeHref="#market"
      actions={
        <Group gap="sm" visibleFrom="sm">
          <DirectionToggle />
          <ColorSchemeToggle />
        </Group>
      }
    />
  </Page>
);

export const NoActions = () => (
  <Page>
    <AppHeader activeHref="#research" />
  </Page>
);

export const CustomSections = () => (
  <Page>
    <AppHeader
      items={NAV_ITEMS.slice(0, 4)}
      activeHref="#companies"
      actions={<ColorSchemeToggle />}
    />
  </Page>
);
