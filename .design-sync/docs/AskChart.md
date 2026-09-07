---
category: Data Display
---

# AskChart

The only sanctioned chart component. Wraps `react-google-charts` with the design
system palette, grid, tooltip and axis treatment already applied - hand-written
Google Charts options are how a product ends up with six different chart styles.

```tsx
<AskChart
  kind="Line"
  title="KSE-100 intraday"
  description="Line with a fitted y-axis - a zero baseline would flatten a 0.7% move"
  height={220}
  data={[['Time', 'KSE100'], ['9:00', 174420], ['9:15', 174610]]}
  seriesKeys={['KSE100', 'ALLSHR', 'KSE30', 'KMI30']}
/>
```

- `kind` is `Line | Area | Bar | Column | Pie | Donut`. Line and Area fit the
  y-axis to the data; Bar and Column keep a zero baseline because length encodes
  magnitude. Pie and Donut are for part-of-whole only, and sparingly - a bar chart
  is almost always easier to compare.
- `data` is the Google Charts `arrayToDataTable` shape: first row is the header,
  first column is the category axis.
- `title` is REQUIRED and is the accessible name of the chart. `description` is
  announced after it and also renders as the visible sub-line.
- `seriesKeys` pins colour to series identity. The Google Charts `colors` array is
  positional, so hiding a series would repaint every series after it. Pass the full
  set of series names - including ones currently filtered out - whenever the chart
  is filterable.
- `options` merges last, for the rare case the theme does not cover. Reach for it
  only after checking `lineChartOptions` / `barChartOptions` / `pieChartOptions`.
- Google Charts loads its runtime from gstatic.com and cannot be self-hosted, so
  the chart paints shortly after first render.
