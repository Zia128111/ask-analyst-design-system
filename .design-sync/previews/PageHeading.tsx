import { PageHeading, StaleNotice, Text } from '@akseer/ask-analyst-design-system';

export const WithMeta = () => (
  <PageHeading title="Market" meta={['KSE-100', 'Equities', 'As of 3:30 PM PKT']} />
);

export const TitleOnly = () => <PageHeading title="Research Reports" />;

export const WithChildren = () => (
  <PageHeading title="Oil & Gas Development Company" meta={['OGDC', 'Exploration & Production']}>
    <StaleNotice asOf="3:30 PM PKT" delayedMinutes={15} />
  </PageHeading>
);

export const Centered = () => (
  <PageHeading
    title="Pakistan Equity Strategy 2027"
    meta={['Akseer Research', '18 December 2026']}
    centered
  >
    <Text size="sm" c="var(--ask-text-tertiary)" ta="center">
      Centring is opt-in, for report covers rather than product pages.
    </Text>
  </PageHeading>
);
