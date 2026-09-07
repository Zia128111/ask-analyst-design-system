import { MarketTable, type Quote } from '@akseer/ask-analyst-design-system';

/* Real PSX tickers and figures, ported from the design system's own App.tsx
   demo page. HBL is deliberately all-null so the em-dash missing-data
   treatment is visible, and LSEFSL carries a live tick. */
const QUOTES: Quote[] = [
  { symbol: 'CNERGY', price: 13.92, change: -0.54, changePct: -3.7, volume: 149299436 },
  { symbol: 'LSEFSL', price: 3.66, change: 0.96, changePct: 35.6, volume: 8241226, tick: 'up' },
  { symbol: 'ASTM', price: 118.31, change: -13.15, changePct: -10.0, volume: 80096 },
  { symbol: 'OGDC', price: 241.5, change: 0, changePct: 0, volume: 2410000 },
  { symbol: 'HBL', price: null, change: null, changePct: null, volume: null },
];

export const TopActive = () => (
  <MarketTable rows={QUOTES} caption="Top active stocks" stickyHeader />
);

export const Delayed = () => (
  <MarketTable rows={QUOTES.slice(0, 3)} caption="Top active stocks" stale />
);

export const Loading = () => <MarketTable rows={[]} status="loading" caption="Top active stocks" />;

export const Empty = () => <MarketTable rows={[]} status="empty" caption="Screener results" />;

export const Failed = () => (
  <MarketTable rows={[]} status="error" caption="Top active stocks" onRetry={() => {}} />
);
