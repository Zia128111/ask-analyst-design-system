import type { ReactNode } from 'react';
import { useState } from 'react';
import {
  Accordion,
  ActionIcon,
  Alert,
  Autocomplete,
  Blockquote,
  Breadcrumbs,
  Chip,
  Code,
  Kbd,
  Anchor,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  Loader,
  MultiSelect,
  NativeSelect,
  NumberInput,
  PasswordInput,
  NavLink,
  Pagination,
  Popover,
  Progress,
  Radio,
  SegmentedControl,
  Skeleton,
  Slider,
  Stepper,
  Timeline,
  Textarea,
  Group,
  Paper,
  Select,
  Stack,
  Switch,
  Tabs,
  Text,
  TextInput,
  ThemeIcon,
  Title,
  Tooltip,
} from '@mantine/core';

import { DatePicker, DatePickerInput } from '@mantine/dates';
import { notifications } from '@mantine/notifications';

import { tokens } from './theme';
import { Icons } from './lib/icons';
import { AskChart } from './components/AskChart';
import { ColorSchemeToggle } from './components/ColorSchemeToggle';
import { DirectionToggle } from './components/DirectionToggle';
import { AppHeader } from './components/AppHeader';
import { PageHeading } from './components/PageHeading';
import { MarketTable, type Quote } from './components/MarketTable';
import { formatMarketCap, formatPercent, formatVolume } from './lib/format';

/* Local helpers so this page documents tokens rather than hard-coding values. */
function Section({ title, note, children }: { title: string; note?: string; children: ReactNode }) {
  return (
    <Paper p="xl">
      {/* order={2}: the page h1 is the PageHeading, so sections are h2.
          Skipping a level breaks the document outline screen readers use. */}
      <Title order={2}>{title}</Title>
      {note ? (
        <Text size="sm" c="var(--ask-text-tertiary)" mt={4} mb="lg">
          {note}
        </Text>
      ) : (
        <div style={{ height: 16 }} />
      )}
      {children}
    </Paper>
  );
}

function Swatch({ name, value }: { name: string; value: string }) {
  return (
    <Stack gap={4} w={104}>
      <div
        style={{
          height: 48,
          background: value,
          borderRadius: tokens.radius.md,
          border: '1px solid var(--ask-border-subtle)',
        }}
      />
      <Text size="xs" fw={700} style={{ lineHeight: 1.3 }}>
        {name}
      </Text>
      <Text size="xs" c="var(--ask-text-tertiary)">
        {value}
      </Text>
    </Stack>
  );
}

const TYPE_ROWS: Array<[string, string, number]> = [
  ['4xl / display', tokens.fontSize['4xl'], 700],
  ['3xl / h1', tokens.fontSize['3xl'], 700],
  ['2xl / h2', tokens.fontSize['2xl'], 700],
  ['xl / h3', tokens.fontSize.xl, 600],
  ['lg / h4', tokens.fontSize.lg, 600],
  ['md', tokens.fontSize.md, 400],
  ['sm / body', tokens.fontSize.sm, 400],
  ['xs / table', tokens.fontSize.xs, 400],
  ['2xs / label', tokens.fontSize['2xs'], 700],
];

/* Real figures taken from the live site, so the formatters are exercised
   against production-shaped data rather than tidy round numbers. */
/* One intraday series + a sector comparison, using real-shaped values. */
const INTRADAY = Array.from({ length: 24 }, (_, i) => ({
  time: `${9 + Math.floor(i / 4)}:${String((i % 4) * 15).padStart(2, '0')}`,
  KSE100: 174400 + Math.round(Math.sin(i / 3) * 420 + i * 34),
}));

const SECTORS = [
  { sector: 'Banks', weight: 24.1 },
  { sector: 'E&P', weight: 18.6 },
  { sector: 'Fertiliser', weight: 12.3 },
  { sector: 'Cement', weight: 9.8 },
  { sector: 'Power', weight: 7.4 },
];

/* The full set of index series, in fixed order. Passed to AskChart so each
   keeps its own colour even when some are filtered out — Google Charts'
   `colors` array is positional and would otherwise repaint the survivors. */
const INDEX_SERIES = ['KSE100', 'ALLSHR', 'KSE30', 'KMI30'] as const;

const QUOTES: Quote[] = [
  { symbol: 'CNERGY', price: 13.92, change: -0.54, changePct: -3.7, volume: 149299436 },
  { symbol: 'LSEFSL', price: 3.66, change: 0.96, changePct: 35.6, volume: 8241226, tick: 'up' },
  { symbol: 'ASTM', price: 118.31, change: -13.15, changePct: -10.0, volume: 80096 },
  { symbol: 'OGDC', price: 241.5, change: 0, changePct: 0, volume: 2410000 },
  { symbol: 'HBL', price: null, change: null, changePct: null, volume: null },
];

export default function App() {
  const [period, setPeriod] = useState('1D');
  const [page, setPage] = useState(1);
  const [density, setDensity] = useState('default');

  return (
    <>
      <AppHeader
        activeHref="#market"
        actions={
          <Group gap="sm" visibleFrom="sm">
            <DirectionToggle />
            <ColorSchemeToggle />
          </Group>
        }
      />

      {/* The landmark the skip link targets. tabIndex={-1} so focus can land
          here programmatically without making it a tab stop. */}
      <Container py="xl" component="main" id="main" tabIndex={-1}>
      <Stack gap="xl">
        <PageHeading
          title="Ask Analyst"
          meta={[
            'Design System v2.0',
            <>
              {/* A colour chip beside readable text — NOT the hex rendered in
                  its own colour, which is 3.6:1 and the exact failure this
                  system documents. axe caught it on our own docs page. */}
              <span
                style={{
                  display: 'inline-block',
                  width: 10,
                  height: 10,
                  borderRadius: 2,
                  background: 'var(--ask-bg-brand)',
                  marginInlineEnd: 6,
                  verticalAlign: 'baseline',
                }}
                aria-hidden="true"
              />
              Brand #1485ff
            </>,
            'Updated 4 Sep 2026',
          ]}
        />

        {/* ---------------------------------------------------- colour */}
        <Section
          title="Semantic colour"
          note="Components reference semantic tokens, never a ramp index or a raw hex. Every pair is contrast-verified by npm run verify:tokens."
        >
          <Group gap="md">
            <Swatch name="brand" value={tokens.blue[6]} />
            <Swatch name="brand subtle" value={tokens.blue[0]} />
            <Swatch name="link text" value={tokens.blue[7]} />
            <Swatch name="text primary" value={tokens.ink} />
            <Swatch name="text secondary" value={tokens.neutral[7]} />
            <Swatch name="border strong" value={tokens.neutral[5]} />
            <Swatch name="positive" value={tokens.green[7]} />
            <Swatch name="negative" value={tokens.red[7]} />
            <Swatch name="warning" value={tokens.amber[7]} />
          </Group>
          <Text size="sm" mt="lg" c="var(--ask-text-secondary)">
            Brand <b>#1485ff</b> is 3.60:1 on white, so it drives fills, borders, buttons, table
            rules and headings — everywhere it is legible. Body-size links use <b>#0a6fdb</b>{' '}
            (4.87:1) to clear WCAG AA for text. <Anchor href="#0">This is a link.</Anchor>
          </Text>
        </Section>

        {/* ------------------------------------------------------- type */}
        <Section
          title="Type scale"
          note="Modular scale with a 12px floor. v1.0's 20-vs-21px and 12-vs-13px steps were indistinguishable and have been merged."
        >
          <Stack gap="sm">
            {TYPE_ROWS.map(([label, size, weight]) => (
              <Group key={label} gap="xl" wrap="nowrap" align="baseline">
                <Text size="xs" c="var(--ask-text-tertiary)" w={110} data-numeric>
                  {label}
                </Text>
                <Text style={{ fontSize: size, fontWeight: weight, lineHeight: 1.25 }}>
                  KSE-100 moved 268.36
                </Text>
              </Group>
            ))}
          </Stack>
        </Section>

        {/* ------------------------------------------------------ space */}
        <Section
          title="Spacing — strict 4px grid"
          note="v1.0's ad-hoc 5, 9, 15, 18, 23, 25 and 34px gaps are gone."
        >
          <Group gap="md" align="flex-end">
            {Object.entries(tokens.space)
              .filter(([k]) => k !== '0')
              .map(([k, v]) => (
                <Stack key={k} gap={4} align="center">
                  <div
                    style={{ width: v, height: v, background: 'var(--ask-bg-brand)', borderRadius: 2 }}
                  />
                  <Text size="xs" c="var(--ask-text-tertiary)" data-numeric>
                    {v}
                  </Text>
                </Stack>
              ))}
          </Group>
        </Section>

        {/* ------------------------------------------------- components */}
        <Section
          title="Buttons"
          note="Height comes from the control scale (28 / 32 / 40 / 48px). Tab to any control to see the focus ring."
        >
          <Group>
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
            <Button variant="filled">Filled</Button>
            <Button variant="subtle">Subtle</Button>
            <Button disabled>Disabled</Button>
          </Group>
        </Section>

        <Section title="Badges" note="Five tones, each verified against its own fill.">
          <Group>
            <Badge variant="company">Company</Badge>
            <Badge variant="report">Report</Badge>
            <Badge variant="success">Support</Badge>
            <Badge variant="negative">Resistance</Badge>
            <Badge variant="neutral">Neutral</Badge>
          </Group>
        </Section>

        <Section
          title="Form controls"
          note="Entirely unspecified in v1.0. Visible labels always, 3:1 borders (WCAG 1.4.11), 16px type so iOS does not zoom on focus, and errors beside the field rather than only in a summary."
        >
          <Group align="flex-start" gap="xl" wrap="wrap">
            <Stack gap="lg" w={300}>
              <Text size="xs" fw={700} c="var(--ask-text-tertiary)">
                TEXT ENTRY
              </Text>
              <TextInput label="Company" placeholder="Search ticker" description="Try OGDC or HBL" />
              <NumberInput label="Target price" placeholder="0.00" decimalScale={2} prefix="Rs " />
              <PasswordInput label="Password" placeholder="Your password" />
              <Textarea label="Note" placeholder="Add a note" autosize minRows={2} />
            </Stack>

            <Stack gap="lg" w={300}>
              <Text size="xs" fw={700} c="var(--ask-text-tertiary)">
                CHOICE
              </Text>
              <Select
                label="Exchange"
                placeholder="Pick one"
                data={['PSX', 'Tadawul', 'DFM', 'ADX']}
                description="Open it — the dropdown panel is themed too"
              />
              <MultiSelect
                label="Watchlist sectors"
                placeholder="Pick several"
                data={['Banks', 'Cement', 'E&P', 'Fertiliser', 'Power', 'Textile']}
                defaultValue={['Banks', 'E&P']}
                clearable
              />
              <NativeSelect
                label="Period"
                data={['1D', '1M', '3M', '1Y']}
                description="Native control for dense or mobile use"
              />
              <Select
                label="Index"
                placeholder="Grouped options"
                description="Searchable — type nonsense to see the empty state"
                searchable
                data={[
                  { group: 'Pakistan', items: ['KSE-100', 'KSE-30', 'KMI-30'] },
                  { group: 'Gulf', items: ['TASI', 'DFMGI'] },
                ]}
              />
            </Stack>

            <Stack gap="lg" w={280}>
              <Text size="xs" fw={700} c="var(--ask-text-tertiary)">
                TOGGLES
              </Text>
              <Checkbox label="Email me the morning briefing" defaultChecked />
              <Checkbox label="Include intraday alerts" />
              <Radio.Group label="Default view" defaultValue="market">
                <Stack gap="xs" mt="xs">
                  <Radio value="market" label="Market" />
                  <Radio value="watchlist" label="Watchlist" />
                </Stack>
              </Radio.Group>
              <Switch label="Live prices" defaultChecked />
            </Stack>

            <Stack gap="lg" w={300}>
              <Text size="xs" fw={700} c="var(--ask-text-tertiary)">
                STATES
              </Text>
              <TextInput label="Required" placeholder="you@example.com" required />
              <TextInput
                label="Error"
                defaultValue="not-an-email"
                error="Enter a valid email address"
              />
              <TextInput label="Disabled" placeholder="Unavailable" disabled />
              <Select label="Disabled select" placeholder="Unavailable" data={['A']} disabled />
              {/* Empty data source — a real state. Mantine renders nothing at
                  all by default, which reads as "broken" rather than "no
                  results"; nothingFoundMessage is a theme default. */}
              <Select label="No results" placeholder="Open me" data={[]} searchable />
              <Group>
                <Tooltip label="Reachable by keyboard, not hover-only">
                  <Button variant="subtle">Hover or focus me</Button>
                </Tooltip>
              </Group>
            </Stack>
          </Group>
        </Section>

        <Section
          title="Timeframe switch, actions & navigation"
          note="SegmentedControl is the 1D/1M/1Y switch on every chart. v1.0 spec'd these nav items at ~23px tall with 0.2px borders and a 1.231px radius; sizing now comes from the control scale, and coarse pointers get 44px."
        >
          <Stack gap="xl">
            <SegmentedControl
              value={period}
              onChange={setPeriod}
              data={['1D', '1M', '3M', '6M', '1Y', '3Y', '5Y']}
            />

            <Group gap="sm">
              {/* Tabler SVGs, never emoji. The icon is aria-hidden, so the
                  button’s aria-label is its only accessible name. */}
              <ActionIcon aria-label="Add to watchlist">
                <Icons.star size="md" />
              </ActionIcon>
              <ActionIcon aria-label="Sort ascending">
                <Icons.sortAsc size="md" />
              </ActionIcon>
              <ActionIcon variant="default" aria-label="Download CSV">
                <Icons.download size="md" />
              </ActionIcon>
              <ActionIcon variant="default" aria-label="Refresh" disabled>
                <Icons.refresh size="md" />
              </ActionIcon>
              <Loader size="sm" />
            </Group>

            <Group gap="xs">
              <NavLink label="Market" active w="auto" variant="filled" />
              <NavLink label="Companies" w="auto" />
              <NavLink label="Data Bank" w="auto" />
              <NavLink label="Economy" w="auto" />
            </Group>

            <Divider label="Pagination" labelPosition="left" />
            <Pagination total={8} value={page} onChange={setPage} />
          </Stack>
        </Section>

        <Section
          title="Icons — Tabler"
          note="Tabler Icons (MIT), the set Mantine itself is designed against. v1.0 specified eight icon sizes but named no set, which is how a product ends up mixing emoji, typed arrows and three SVG families."
        >
          <Stack gap="xl">
            <Group gap="xl">
              {(
                [
                  ['search', Icons.search],
                  ['filter', Icons.filter],
                  ['sort', Icons.sort],
                  ['download', Icons.download],
                  ['refresh', Icons.refresh],
                  ['star', Icons.star],
                  ['chart', Icons.chart],
                  ['report', Icons.report],
                  ['calendar', Icons.calendar],
                  ['alerts', Icons.alerts],
                ] as const
              ).map(([name, Ico]) => (
                <Stack key={name} gap={4} align="center" w={64}>
                  <Ico size="lg" />
                  <Text size="xs" c="var(--ask-text-tertiary)">
                    {name}
                  </Text>
                </Stack>
              ))}
            </Group>

            <Group gap="md" align="center">
              <ThemeIcon size="lg" variant="light">
                <Icons.chart size="md" />
              </ThemeIcon>
              <ThemeIcon size="lg">
                <Icons.report size="md" />
              </ThemeIcon>
              <ThemeIcon size="lg" color="positive" variant="light">
                <Icons.check size="md" />
              </ThemeIcon>
              <Text size="sm" c="var(--ask-text-tertiary)">
                ThemeIcon — a tinted tile behind an icon
              </Text>
            </Group>

            <Group gap="xl" align="center">
              {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((sz) => (
                <Stack key={sz} gap={4} align="center" w={72}>
                  <Icons.chart size={sz} />
                  <Text size="xs" c="var(--ask-text-tertiary)" data-numeric>
                    {sz} · {tokens.iconSize[sz]}px
                  </Text>
                </Stack>
              ))}
            </Group>

            <Text size="sm" c="var(--ask-text-secondary)">
              Stroke <b>1.5</b> by default — Tabler ships at 2, which is heavy beside Lato — and
              1.75 below 16px so strokes survive on low-DPI screens. Decorative icons are{' '}
              <Code>aria-hidden</Code> automatically; an icon that <i>is</i> the control needs an
              aria-label. Never an emoji: they render differently per platform, cannot be
              recoloured, and screen readers announce their Unicode name.
            </Text>
          </Stack>
        </Section>

        <Section
          title="Alerts"
          note="Four tones matching the badge palette. Tone is carried by wording and an icon, never by colour alone — and error alerts render with role='alert' so they are announced."
        >
          <Stack gap="sm">
            <Alert variant="info" title="Market opens at 9:30 AM PKT">
              Pre-open quotes are indicative until the session begins.
            </Alert>
            <Alert variant="success" title="Watchlist saved">
              Six sectors are now tracked on your dashboard.
            </Alert>
            <Alert variant="warning" title="Delayed data">
              Prices are delayed by 15 minutes for unsubscribed users.
            </Alert>
            <Alert variant="error" role="alert" title="Feed unavailable">
              The market feed did not respond. Retrying automatically.
            </Alert>
          </Stack>
        </Section>

        <Section title="Skeleton" note="Calm placeholder that reserves the real layout, so nothing shifts when data lands.">
          <Stack gap="sm" maw={420}>
            <Skeleton height={14} width="40%" />
            <Skeleton height={14} />
            <Skeleton height={14} width="75%" />
          </Stack>
        </Section>

        <Section title="Tabs & avatars">
          <Stack gap="lg">
            <Tabs defaultValue="market">
              <Tabs.List>
                <Tabs.Tab value="market">Market</Tabs.Tab>
                <Tabs.Tab value="companies">Companies</Tabs.Tab>
                <Tabs.Tab value="economy">Economy</Tabs.Tab>
              </Tabs.List>
            </Tabs>
            <Group align="center" gap="lg">
              <Avatar size={32}>A</Avatar>
              <Avatar size={32}>OG</Avatar>
              <Avatar size={48}>HBL</Avatar>
              <Text size="sm" c="var(--ask-text-tertiary)">
                Rounded squares at the 8px radius token · initials floored at 12px
              </Text>
            </Group>
          </Stack>
        </Section>

        <Section
          title="Market table — responsive strategy"
          note="Scrolls the table not the page, pins the ticker column, fades in an edge shadow when there is more to see, and drops low-priority columns below 640px / 420px. Narrow the window to watch Volume then Change disappear."
        >
          <MarketTable rows={QUOTES} caption="Top active stocks" stickyHeader />
          <Text size="sm" mt="lg" c="var(--ask-text-secondary)">
            Volume {formatVolume(98318666)} · Market cap {formatMarketCap(4870000000)} · Index{' '}
            {formatPercent(-0.25)} — millions and billions, accounting parentheses, and{' '}
            <b>—</b> for unavailable values rather than <b>#N/A</b>.
          </Text>
        </Section>

        <Section
          title="Density modes"
          note="An analyst scanning 200 rows wants more per screen; a report reader wants room. Only padding and control height change — type size never shrinks below the 12px floor, which is how density modes become an accessibility failure."
        >
          <Stack gap="lg">
            <SegmentedControl
              value={density}
              onChange={setDensity}
              data={[
                { value: 'compact', label: 'Compact' },
                { value: 'default', label: 'Default' },
                { value: 'comfortable', label: 'Comfortable' },
              ]}
            />
            <div data-density={density === 'default' ? undefined : density}>
              <MarketTable rows={QUOTES.slice(0, 3)} caption={`Density: ${density}`} />
            </div>
          </Stack>
        </Section>

        <Section
          title="Data lifecycle states"
          note="Unspecified in v1.0, and a live dashboard is in one of these constantly. Each reserves the space the real content will occupy, so nothing shifts when data arrives."
        >
          <Stack gap="xl">
            <div>
              <Text size="xs" fw={700} c="var(--ask-text-tertiary)" mb="sm">
                LOADING — skeleton, not a spinner (zero layout shift)
              </Text>
              <MarketTable rows={[]} status="loading" caption="Loading" />
            </div>
            <div>
              <Text size="xs" fw={700} c="var(--ask-text-tertiary)" mb="sm">
                EMPTY — says why, and what to do next
              </Text>
              <MarketTable rows={[]} status="empty" caption="Empty" />
            </div>
            <div>
              <Text size="xs" fw={700} c="var(--ask-text-tertiary)" mb="sm">
                ERROR — assertive, and never a dead end
              </Text>
              <MarketTable rows={[]} status="error" caption="Error" onRetry={() => {}} />
            </div>
            <div>
              <Text size="xs" fw={700} c="var(--ask-text-tertiary)" mb="sm">
                STALE — dimmed AND labelled, never opacity alone
              </Text>
              <MarketTable rows={QUOTES.slice(0, 2)} caption="Top active stocks" stale />
            </div>
          </Stack>
        </Section>

        <Section
          title="Charts"
          note="Palette computed, not chosen: validated for lightness band, chroma floor, colour-blind separation and contrast — on both surfaces. Grid and axes are recessive; axis text wears text tokens, never a series colour."
        >
          <Stack gap="xl">
            <AskChart
              kind="Line"
              title="KSE-100 intraday"
              description="Line with a fitted y-axis — a zero baseline would flatten a 0.7% move"
              height={220}
              data={[['Time', 'KSE100'], ...INTRADAY.map((d) => [d.time, d.KSE100])]}
              seriesKeys={INDEX_SERIES}
            />

            <AskChart
              kind="Column"
              title="Sector weights"
              description="Bars DO keep a zero baseline: length encodes magnitude"
              height={220}
              data={[['Sector', 'Weight %'], ...SECTORS.map((d) => [d.sector, d.weight])]}
            />

            <AskChart
              kind="Donut"
              title="Portfolio split"
              description="Used sparingly — a bar chart is almost always easier to compare"
              height={220}
              data={[['Sector', 'Weight %'], ...SECTORS.map((d) => [d.sector, d.weight])]}
            />

            <div>
              <Text size="xs" fw={700} c="var(--ask-text-tertiary)" mb="sm">
                CATEGORICAL PALETTE — fixed order, never cycled; green and red
                are withheld because they mean up and down
              </Text>
              <Group gap="xs">
                {tokens.chartCategorical.map((c, i) => (
                  <Stack key={c} gap={2} align="center" w={72}>
                    <div style={{ height: 32, width: '100%', background: c, borderRadius: 4 }} />
                    <Text size="xs" c="var(--ask-text-tertiary)">
                      {i + 1} · {c}
                    </Text>
                  </Stack>
                ))}
              </Group>
            </div>

            <Alert variant="warning" title="Red/green is not colour-blind safe">
              The market pair measures ΔE 4.2 under deuteranopia — near-identical for roughly 8% of
              men. It ships only alongside a direction icon and a text label. An opt-in blue/orange
              pair measures ΔE 30 and is available as <code>colorMode="accessible"</code>.
            </Alert>
          </Stack>
        </Section>

        <Section title="Toasts" note="Listed but never specified in v1.0's own component checklist.">
          <Group>
            <Button
              onClick={() =>
                notifications.show({
                  title: 'Watchlist saved',
                  message: 'Six sectors are now tracked on your dashboard.',
                  color: 'positive',
                })
              }
            >
              Show toast
            </Button>
            <Button
              onClick={() =>
                notifications.show({
                  title: 'Feed unavailable',
                  message: 'The market feed did not respond. Retrying automatically.',
                  color: 'negative',
                })
              }
            >
              Show error toast
            </Button>
          </Group>
        </Section>

        <Section
          title="Search, dates & filters"
          note="Ticker search, the chart date range, and screener controls. Autocomplete and TagsInput take the full select contract — input styling AND the dropdown panel."
        >
          <Group align="flex-start" gap="xl" wrap="wrap">
            <Stack gap="lg" w={300}>
              <Autocomplete
                label="Ticker search"
                placeholder="Start typing…"
                data={['OGDC', 'HBL', 'CNERGY', 'LSEFSL', 'ASTM', 'MEBL']}
              />
              <DatePickerInput
                type="range"
                label="Date range"
                placeholder="Pick a range"
                description="Day cells are sized from the control scale"
              />
              {/* Inline calendar: documents the day/weekday/header slots without
                  needing the dropdown opened, and lets the audit see them. */}
              <DatePicker type="range" />
            </Stack>

            <Stack gap="lg" w={300}>
              <div>
                <Text size="xs" fw={700} c="var(--ask-text-tertiary)" mb="sm">
                  FILTER CHIPS
                </Text>
                <Chip.Group multiple defaultValue={['banks']}>
                  <Group gap="xs">
                    <Chip value="banks">Banks</Chip>
                    <Chip value="ep">E&P</Chip>
                    <Chip value="cement">Cement</Chip>
                  </Group>
                </Chip.Group>
              </div>
              <div>
                <Text size="xs" fw={700} c="var(--ask-text-tertiary)" mb="sm">
                  P/E RANGE
                </Text>
                {/* role="slider" needs a name — axe: aria-input-field-name. */}
              <Slider
                defaultValue={40}
                marks={[
                  { value: 0, label: '0' },
                  { value: 50, label: '50' },
                  { value: 100, label: '100' },
                ]}
                labelAlwaysOn
                label={(v) => `P/E ${v}`}
                thumbLabel="Maximum P/E ratio"
              />
              </div>
              <div>
                <Text size="xs" fw={700} c="var(--ask-text-tertiary)" mb="xs">
                  PORTFOLIO ALLOCATION
                </Text>
                {/* Never colour alone: the numeric label carries the value. */}
                {/* role="progressbar" needs a name — axe: aria-progressbar-name. */}
                <Progress value={68} aria-label="Portfolio allocation: 68 percent" />
                <Text size="xs" c="var(--ask-text-tertiary)" mt={4} data-numeric>
                  68% allocated
                </Text>
              </div>
            </Stack>

            <Stack gap="lg" w={280}>
              <Popover width={240} position="bottom-start">
                <Popover.Target>
                  <Button variant="subtle">Open popover</Button>
                </Popover.Target>
                <Popover.Dropdown>
                  Floating surfaces share one material — dropdown, popover and drawer.
                </Popover.Dropdown>
              </Popover>
              <Group gap="xs">
                <Text size="xs" c="var(--ask-text-tertiary)">
                  Shortcut
                </Text>
                <Kbd>Ctrl</Kbd>
                <Kbd>K</Kbd>
              </Group>
              <Text size="sm">
                Inline ticker <Code>OGDC</Code> in running text.
              </Text>
            </Stack>
          </Group>
        </Section>

        <Section title="Disclosure & wayfinding">
          <Group align="flex-start" gap="xl" wrap="wrap">
            <Stack gap="lg" w={320}>
              <Breadcrumbs>
                <Anchor href="#0">Market</Anchor>
                <Anchor href="#0">Companies</Anchor>
                <Text size="xs" c="var(--ask-text-tertiary)">
                  OGDC
                </Text>
              </Breadcrumbs>
              <Accordion defaultValue="valuation">
                <Accordion.Item value="valuation">
                  <Accordion.Control>Valuation</Accordion.Control>
                  <Accordion.Panel>P/E, P/B and dividend yield versus the sector.</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="financials">
                  <Accordion.Control>Financials</Accordion.Control>
                  <Accordion.Panel>Five-year income statement and balance sheet.</Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Stack>

            <Stack gap="lg" w={320}>
              <Timeline active={1} bulletSize={20} lineWidth={2}>
                <Timeline.Item title="Board meeting">
                  <Text size="xs" c="var(--ask-text-tertiary)">
                    28 Aug 2026
                  </Text>
                </Timeline.Item>
                <Timeline.Item title="Dividend announced">
                  <Text size="xs" c="var(--ask-text-tertiary)">
                    2 Sep 2026
                  </Text>
                </Timeline.Item>
                <Timeline.Item title="Ex-dividend date">
                  <Text size="xs" c="var(--ask-text-tertiary)">
                    18 Sep 2026
                  </Text>
                </Timeline.Item>
              </Timeline>
            </Stack>

            <Stack gap="lg" w={320}>
              <Stepper active={1} size="sm">
                <Stepper.Step label="Account" description="Details" />
                <Stepper.Step label="Watchlist" description="Pick sectors" />
                <Stepper.Step label="Done" description="Confirm" />
              </Stepper>
              <Blockquote cite="— Research desk">
                Banking sector earnings are expected to normalise as policy rates ease.
              </Blockquote>
            </Stack>
          </Group>
        </Section>

        <Section title="Surfaces" note="Radius 12px, brand border, 24px interior padding.">
          <Card maw={320}>
            <Text fw={700} size="lg">
              Card
            </Text>
            <Text size="sm" c="var(--ask-text-secondary)" mt="sm">
              Elevation is deliberately flat — a data dashboard should not float.
            </Text>
          </Card>
        </Section>
      </Stack>
      </Container>
    </>
  );
}
