import { Group, StaleNotice, Text } from '@akseer/ask-analyst-design-system';

/* The standard PSX delayed feed. */
export const Delayed = () => <StaleNotice asOf="3:30 PM PKT" delayedMinutes={15} />;

/* Point-in-time data: as-of, not lagged. */
export const AsOfOnly = () => <StaleNotice asOf="7 Sep 2026, 3:30 PM PKT" />;

/* Where it sits in the product: right-aligned against the section title it
   qualifies, so the reader meets the caveat with the figures, not after them. */
export const InSectionHeader = () => (
  <Group justify="space-between" align="baseline">
    <Text fw={600}>Top active stocks</Text>
    <StaleNotice asOf="3:30 PM PKT" delayedMinutes={15} />
  </Group>
);
