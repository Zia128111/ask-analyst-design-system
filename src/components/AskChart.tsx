import { useMemo } from 'react';
import { Skeleton, Text, useDirection, useMantineColorScheme } from '@mantine/core';
import { Chart, type GoogleChartWrapperChartType } from 'react-google-charts';

import {
  areaChartOptions,
  barChartOptions,
  baseChartOptions,
  lineChartOptions,
  mirrorValueAxis,
  pieChartOptions,
  type Dir,
  type Scheme,
} from '../lib/googleChartTheme';
import { createSeriesPalette } from '../lib/chart';

/* ============================================================================
 * ASK CHART — Ask Analyst Design System v2.0
 * ============================================================================
 * The single entry point for charts. Wraps react-google-charts so that:
 *
 *   - options are built from design tokens, per colour scheme
 *   - the chart is ACCESSIBLE, which Google Charts is not on its own
 *   - the loading state reserves space instead of collapsing
 *
 * ACCESSIBILITY — this is the part that matters.
 * Google Charts renders an SVG with effectively no semantics: no roles, no
 * labels, no way for a screen reader to read the values. Charts are therefore
 * marked `aria-hidden` and paired with a visually hidden DATA TABLE carrying
 * the same numbers. A screen-reader user gets the data; a sighted user gets
 * the picture. Neither is a second-class citizen.
 *
 * The `title` prop is required for the same reason — a chart with no
 * accessible name is unusable without sight.
 * ========================================================================= */

export type ChartKind = 'Line' | 'Area' | 'Bar' | 'Column' | 'Pie' | 'Donut';

export interface AskChartProps {
  kind: ChartKind;
  /** First row is the header. Google Charts' arrayToDataTable shape. */
  data: (string | number | null)[][];
  /** Required: the accessible name of the chart. */
  title: string;
  /** Optional longer explanation, announced after the title. */
  description?: string;
  height?: number;
  /**
   * Stable series names, in the order they appear as data columns (excluding
   * the first, which is the category axis).
   *
   * Google Charts' `colors` array is POSITIONAL: colour N goes to series N.
   * That means hiding a series shifts every colour after it, which breaks the
   * rule that colour follows the entity, never its rank. Passing the full set
   * of names here — including ones currently filtered out — pins each series
   * to its own colour so the survivors never repaint.
   */
  seriesKeys?: readonly string[];
  /** Extra Google Charts options, merged last. Use sparingly. */
  options?: Record<string, unknown>;
}

const GOOGLE_TYPE: Record<ChartKind, GoogleChartWrapperChartType> = {
  Line: 'LineChart',
  Area: 'AreaChart',
  Bar: 'BarChart',
  Column: 'ColumnChart',
  Pie: 'PieChart',
  Donut: 'PieChart',
};

/**
 * Chart kinds whose VALUE axis is the vertical one, and can therefore be
 * mirrored to the inline-end side in Arabic.
 *
 * 'Bar' is absent on purpose: its bars run horizontally, so its vertical axis
 * is the CATEGORY axis, which Google Charts will not move. 'Pie' has no axes.
 * Both keep the value-axis gutter on the side Google actually draws on, which
 * is what stops their labels from truncating.
 */
const VERTICAL_VALUE_AXIS: ReadonlySet<ChartKind> = new Set<ChartKind>([
  'Line',
  'Area',
  'Column',
]);

function optionsFor(kind: ChartKind, scheme: Scheme, dir: Dir) {
  switch (kind) {
    case 'Line':
      return lineChartOptions(scheme, dir);
    case 'Area':
      return areaChartOptions(scheme, dir);
    case 'Bar':
    case 'Column':
      return barChartOptions(scheme, dir);
    case 'Pie':
      return pieChartOptions(scheme, dir, false);
    case 'Donut':
      return pieChartOptions(scheme, dir, true);
    default:
      return baseChartOptions(scheme, dir);
  }
}

export function AskChart({
  kind,
  data,
  title,
  description,
  height = 240,
  seriesKeys,
  options,
}: AskChartProps) {
  const { colorScheme } = useMantineColorScheme();
  // Google Charts has no logical properties, so direction is an explicit input.
  const { dir } = useDirection();
  // Mantine's 'auto' resolves to a real scheme on the root element.
  const scheme: Scheme =
    colorScheme === 'dark'
      ? 'dark'
      : colorScheme === 'light'
        ? 'light'
        : (document.documentElement.getAttribute('data-mantine-color-scheme') as Scheme) ?? 'light';

  // The number of data columns after the category column. Mirroring binds each
  // of them to the right-hand axis, so it has to be counted from the data.
  const seriesCount = Math.max(0, (data[0]?.length ?? 1) - 1);

  // Rebuilt whenever the scheme flips — Google Charts cannot read CSS vars,
  // so dark mode is a re-render rather than a variable swap.
  const merged = useMemo(() => {
    const base = optionsFor(kind, scheme, dir as Dir);
    // Pin each series to its own colour rather than to its position.
    const colors = seriesKeys
      ? seriesKeys.map((name) => createSeriesPalette(seriesKeys).colorFor(name))
      : base.colors;
    const themed = VERTICAL_VALUE_AXIS.has(kind)
      ? mirrorValueAxis(base, dir as Dir, seriesCount)
      : base;
    return { ...themed, colors, ...(options ?? {}) };
  }, [kind, scheme, dir, seriesKeys, seriesCount, options]);

  const [header, ...rows] = data;

  return (
    <figure style={{ margin: 0 }}>
      <figcaption>
        <Text size="xs" fw={700} c="var(--ask-text-secondary)">
          {title}
        </Text>
        {description && (
          <Text size="xs" c="var(--ask-text-tertiary)">
            {description}
          </Text>
        )}
      </figcaption>

      {/* The picture. Hidden from assistive tech — the table below carries
          the same information in a form a screen reader can actually read. */}
      <div aria-hidden="true" className="ask-chart-frame">
        <Chart
          chartType={GOOGLE_TYPE[kind]}
          data={data}
          options={merged}
          width="100%"
          height={`${height}px`}
          // Reserves the exact final height, so nothing shifts on load.
          loader={<Skeleton height={height} radius="sm" />}
        />
      </div>

      {/* The same data, for screen readers. Not display:none — that would
          remove it from the accessibility tree and defeat the purpose. */}
      <table className="sr-only">
        <caption>{title}</caption>
        <thead>
          <tr>
            {header.map((h, i) => (
              <th key={i} scope="col">
                {String(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) =>
                c === 0 ? (
                  <th key={c} scope="row">
                    {String(cell)}
                  </th>
                ) : (
                  <td key={c}>{cell === null ? 'no data' : String(cell)}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
