import type { ReactNode } from 'react';
import { Alert, Button, Center, Skeleton, Stack, Table, Text } from '@mantine/core';

/* ============================================================================
 * DATA LIFECYCLE STATES — Ask Analyst Design System v2.0
 * ============================================================================
 * A live dashboard is almost never in the "happy" state cleanly: it is loading,
 * empty, errored, or showing figures that have gone stale. v1.0 specified none
 * of these, so each screen invented its own — which is how "#N/A" ends up
 * rendered as if it were data.
 *
 * Contract for every state:
 *   - it RESERVES the space the real content will occupy (no layout shift)
 *   - it is announced to assistive tech at the right politeness level
 *   - it never relies on colour alone
 * ========================================================================= */

export type DataStatus = 'loading' | 'ready' | 'empty' | 'error';

/* ---------------------------------------------------------------------------
 * LOADING — skeleton, not a spinner.
 * A skeleton that matches the real layout keeps Cumulative Layout Shift at 0;
 * a centred spinner collapses the container and then jolts it open.
 * ------------------------------------------------------------------------ */

export function TableSkeleton({ rows = 5, cols = 5 }: { rows?: number; cols?: number }) {
  return (
    // aria-busy + role=status: announced once, politely, not per row.
    <div role="status" aria-busy="true" aria-live="polite">
      <Text
        // Visually hidden, but the only thing a screen reader needs here.
        style={{
          position: 'absolute',
          width: 1,
          height: 1,
          overflow: 'hidden',
          clip: 'rect(0 0 0 0)',
          whiteSpace: 'nowrap',
        }}
      >
        Loading market data
      </Text>
      <Table aria-hidden="true">
        <Table.Tbody>
          {Array.from({ length: rows }).map((_, r) => (
            <Table.Tr key={r}>
              {Array.from({ length: cols }).map((__, c) => (
                <Table.Td key={c}>
                  {/* Widths vary so it reads as content, not a progress bar. */}
                  <Skeleton height={14} radius="xs" width={c === 0 ? '60%' : '80%'} />
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * EMPTY — says why it is empty and what to do next.
 * "No data" on its own leaves the user unsure whether the product is broken.
 * ------------------------------------------------------------------------ */

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <Center py="xl" role="status">
      <Stack align="center" gap="sm" maw={360}>
        <Text fw={600}>{title}</Text>
        {description && (
          <Text size="sm" c="var(--ask-text-tertiary)" ta="center">
            {description}
          </Text>
        )}
        {action}
      </Stack>
    </Center>
  );
}

/* ---------------------------------------------------------------------------
 * ERROR — assertive, recoverable, and never a dead end.
 * ------------------------------------------------------------------------ */

export function ErrorState({
  title = 'Could not load data',
  description,
  onRetry,
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
}) {
  return (
    // role=alert is assertive: an error interrupts, unlike loading/empty.
    // variant="error" is the system tone; the hand-rolled border styles this
    // used to carry are now part of Alert itself.
    <Alert role="alert" variant="error" title={title}>
      <Stack gap="sm" align="flex-start">
        {description && <Text size="sm">{description}</Text>}
        {onRetry && (
          <Button size="sm" onClick={onRetry}>
            Try again
          </Button>
        )}
      </Stack>
    </Alert>
  );
}

/* ---------------------------------------------------------------------------
 * STALE / DELAYED — the most easily forgotten state, and the riskiest one.
 * A market product showing old prices as if they were live is a correctness
 * problem, not a cosmetic one. Dimming is paired with an explicit label so the
 * signal is not carried by opacity alone.
 * ------------------------------------------------------------------------ */

export function StaleNotice({ asOf, delayedMinutes }: { asOf: string; delayedMinutes?: number }) {
  return (
    <Text size="xs" c="var(--ask-text-tertiary)" role="status">
      {delayedMinutes ? `Delayed by ${delayedMinutes} minutes · ` : ''}
      As of {asOf}
    </Text>
  );
}
