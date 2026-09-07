import { ErrorState } from '@akseer/ask-analyst-design-system';

export const Retryable = () => (
  <ErrorState
    description="The market feed did not respond. Your connection may be offline."
    onRetry={() => {}}
  />
);

export const NamedFailure = () => (
  <ErrorState
    title="Could not load the KSE-100 chart"
    description="The pricing service returned an error. Intraday data may be briefly unavailable."
    onRetry={() => {}}
  />
);

export const WithoutRetry = () => (
  <ErrorState
    title="Research report unavailable"
    description="This report is restricted to institutional subscribers."
  />
);
