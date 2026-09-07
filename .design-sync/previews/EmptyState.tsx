import { Button, EmptyState } from '@akseer/ask-analyst-design-system';

export const WithRecovery = () => (
  <EmptyState
    title="No matching stocks"
    description="Try widening your filters, or clear the search to see the full list."
    action={<Button variant="light">Clear filters</Button>}
  />
);

export const TitleAndDescription = () => (
  <EmptyState
    title="Nothing on your watchlist yet"
    description="Star a ticker anywhere in the product and it will appear here."
  />
);

export const TitleOnly = () => <EmptyState title="No research published this week" />;
