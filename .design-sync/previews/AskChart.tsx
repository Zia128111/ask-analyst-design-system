import { AskChart } from '@akseer/ask-analyst-design-system';

/* Ported from the design system's own App.tsx demo page. */
const INTRADAY = Array.from({ length: 24 }, (_, i) => [
  `${9 + Math.floor(i / 4)}:${String((i % 4) * 15).padStart(2, '0')}`,
  174400 + Math.round(Math.sin(i / 3) * 420 + i * 34),
]);

const SECTORS: (string | number)[][] = [
  ['Banks', 24.1],
  ['E&P', 18.6],
  ['Fertiliser', 12.3],
  ['Cement', 9.8],
  ['Power', 7.4],
];

const INDEX_SERIES = ['KSE100', 'ALLSHR', 'KSE30', 'KMI30'];

export const LineIntraday = () => (
  <AskChart
    kind="Line"
    title="KSE-100 intraday"
    description="Line with a fitted y-axis — a zero baseline would flatten a 0.7% move"
    height={220}
    data={[['Time', 'KSE100'], ...INTRADAY]}
    seriesKeys={INDEX_SERIES}
  />
);

export const ColumnSectorWeights = () => (
  <AskChart
    kind="Column"
    title="Sector weights"
    description="Bars keep a zero baseline: length encodes magnitude"
    height={220}
    data={[['Sector', 'Weight %'], ...SECTORS]}
  />
);

export const DonutPortfolioSplit = () => (
  <AskChart
    kind="Donut"
    title="Portfolio split"
    description="Used sparingly — a bar chart is almost always easier to compare"
    height={220}
    data={[['Sector', 'Weight %'], ...SECTORS]}
  />
);

export const AreaTurnover = () => (
  <AskChart
    kind="Area"
    title="Turnover, last 24 sessions"
    description="Area suits a single accumulating series"
    height={220}
    data={[['Time', 'Turnover (m)'], ...INTRADAY.map(([t, v]) => [t, Math.round((v as number) / 340)])]}
  />
);
