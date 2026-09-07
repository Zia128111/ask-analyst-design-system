import { Table } from '@mantine/core';

import classes from '../theme/components/DataTable.module.css';
import { DIRECTION_ICON } from '../lib/icons';
import {
  DIRECTION_LABEL,
  DIRECTION_TOKEN,
  direction,
  formatChange,
  formatPercent,
  formatPrice,
  formatVolume,
} from '../lib/format';
import { EmptyState, ErrorState, TableSkeleton, type DataStatus } from './DataState';

/* ============================================================================
 * MARKET TABLE — Ask Analyst Design System v2.0
 * ============================================================================
 * The reference implementation of the responsive data-table strategy. Every
 * ranked list in the product (Top Active, Advancers, Decliners, screeners)
 * should be this component rather than a hand-rolled <table>.
 * ========================================================================= */

export interface Quote {
  symbol: string;
  price: number | null;
  change: number | null;
  changePct: number | null;
  volume: number | null;
  /** Set transiently when a live tick arrives, to trigger the flash. */
  tick?: 'up' | 'down';
}

export interface MarketTableProps {
  rows: Quote[];
  status?: DataStatus;
  caption: string;
  stale?: boolean;
  stickyHeader?: boolean;
  onRetry?: () => void;
}

export function MarketTable({
  rows,
  status = 'ready',
  caption,
  stale = false,
  stickyHeader = false,
  onRetry,
}: MarketTableProps) {
  if (status === 'loading') return <TableSkeleton rows={5} cols={5} />;
  if (status === 'error') {
    return (
      <ErrorState
        description="The market feed did not respond. Your connection may be offline."
        onRetry={onRetry}
      />
    );
  }
  if (status === 'empty' || rows.length === 0) {
    return (
      <EmptyState
        title="No matching stocks"
        description="Try widening your filters, or clear the search to see the full list."
      />
    );
  }

  return (
    <div className={classes.scroller}>
      <Table
        className={[stickyHeader && classes.stickyHeader, stale && classes.stale]
          .filter(Boolean)
          .join(' ')}
      >
        {/* A caption is the accessible name of the table — not decoration.
            Visible here because it doubles as the section label. */}
        <Table.Caption
          style={{
            captionSide: 'top',
            textAlign: 'left',
            paddingBottom: 'var(--ask-space-2)',
            color: 'var(--ask-text-tertiary)',
            fontSize: 'var(--ask-font-2xs)',
          }}
        >
          {caption}
          {stale && ' · Delayed'}
        </Table.Caption>

        <Table.Thead>
          <Table.Tr>
            {/* scope="col" so a screen reader can announce the column a cell
                belongs to when navigating the grid. */}
            <Table.Th scope="col" data-priority="1">
              Symbol
            </Table.Th>
            <Table.Th scope="col" data-numeric data-priority="1">
              Price
            </Table.Th>
            <Table.Th scope="col" data-numeric data-priority="2">
              Change
            </Table.Th>
            <Table.Th scope="col" data-numeric data-priority="1">
              %
            </Table.Th>
            <Table.Th scope="col" data-numeric data-priority="3">
              Volume
            </Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {rows.map((r) => {
            const dir = direction(r.changePct);
            const tone = DIRECTION_TOKEN[dir];
            const DirIcon = DIRECTION_ICON[dir];
            return (
              <Table.Tr key={r.symbol}>
                {/* Row header: makes the ticker the accessible name of the row. */}
                <Table.Th scope="row" data-priority="1">
                  {r.symbol}
                </Table.Th>

                <Table.Td data-numeric data-priority="1" data-tick={r.tick}>
                  {formatPrice(r.price)}
                </Table.Td>

                {/* Change is priority 2 — it is dropped below 420px. It must
                    therefore NOT be the only place the direction is stated.
                    The number carries a plain minus, which is a signal in its
                    own right; the glyph and the hidden word live on the
                    percentage cell, which never drops. */}
                <Table.Td data-numeric data-priority="2" style={{ color: tone }}>
                  {formatChange(r.change)}
                </Table.Td>

                <Table.Td data-numeric data-priority="1" style={{ color: tone }}>
                  {/* SVG icon, not a ▲ text glyph: a typed arrow renders
                      differently per font and is announced as punctuation.
                      The icon is decorative (no label prop, so aria-hidden);
                      the visually hidden word carries the meaning.

                      This sits on the PRIORITY 1 column deliberately. v2.0 put
                      it on Change, so on a phone — where Change is dropped —
                      every row fell back to colour alone, which is precisely
                      what rule 7 exists to prevent. */}
                  <span
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}
                  >
                    <DirIcon size="xs" />
                    <span className="sr-only">{DIRECTION_LABEL[dir]} </span>
                    {formatPercent(r.changePct)}
                  </span>
                </Table.Td>

                <Table.Td data-numeric data-priority="3">
                  {formatVolume(r.volume)}
                </Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
    </div>
  );
}
