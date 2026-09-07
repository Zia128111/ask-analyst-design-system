/**
 * Chart palette verification.
 *
 * The categorical palette was designed with the dataviz validator; this file
 * re-implements the measurable checks in-repo so they run in CI and cannot
 * silently regress when someone "just adds one more series colour".
 *
 * Colour-vision simulation uses the Machado et al. (2009) severity-1.0
 * matrices, applied in LINEAR sRGB. Separation is OKLab ΔE ×100.
 *
 * Run: npm run verify:charts
 */
import {
  chartCategorical,
  chartSequential,
  chartDiverging,
  chartSurface,
  green,
  red,
} from '../src/theme/tokens.ts';
import { lineChartOptions, mirrorValueAxis } from '../src/lib/googleChartTheme.ts';

/* ---------- colour maths ---------- */
const hex2rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const toLinear = (c) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
const lin = (h) => hex2rgb(h).map(toLinear);

const mul = (m, v) => [
  m[0][0] * v[0] + m[0][1] * v[1] + m[0][2] * v[2],
  m[1][0] * v[0] + m[1][1] * v[1] + m[1][2] * v[2],
  m[2][0] * v[0] + m[2][1] * v[1] + m[2][2] * v[2],
];

const DEUTAN = [
  [0.367322, 0.860646, -0.227968],
  [0.280085, 0.672501, 0.047413],
  [-0.01182, 0.04294, 0.968881],
];
const PROTAN = [
  [0.152286, 1.052583, -0.204868],
  [0.114503, 0.786281, 0.099216],
  [-0.003882, -0.048116, 1.051998],
];

/** Linear sRGB -> OKLab (Björn Ottosson). */
function oklab([r, g, b]) {
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ];
}

const deltaE = (a, b) =>
  Math.hypot(...oklab(a).map((v, i) => v - oklab(b)[i])) * 100;

const simulate = (hexColor, matrix) => mul(matrix, lin(hexColor));

/* WCAG contrast */
const relLum = (h) => {
  const [r, g, b] = lin(h);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a, b) => {
  const [hi, lo] = [relLum(a), relLum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
const r1 = (n) => Math.round(n * 10) / 10;

const results = [];
const check = (name, ok, detail) => results.push({ name, ok, detail });

/* ---------- 1. categorical: adjacent pairs must survive CVD ---------- */
const CVD_TARGET = 8; // ΔE floor; below this needs mandatory secondary encoding
for (let i = 1; i < chartCategorical.length; i++) {
  const a = chartCategorical[i - 1];
  const b = chartCategorical[i];
  const d = Math.min(
    deltaE(simulate(a, DEUTAN), simulate(b, DEUTAN)),
    deltaE(simulate(a, PROTAN), simulate(b, PROTAN)),
  );
  check(`categorical ${i}↔${i + 1} (${a}/${b}) CVD ΔE ≥ ${CVD_TARGET}`, d >= CVD_TARGET, `ΔE ${r1(d)}`);
}

/* ---------- 2. categorical must not borrow the reserved status hues ------- */
const reserved = new Set([...green, ...red].map((c) => c.toLowerCase()));
const borrowed = chartCategorical.filter((c) => reserved.has(c.toLowerCase()));
check(
  'categorical avoids reserved green/red (market direction)',
  borrowed.length === 0,
  borrowed.join(', ') || 'none borrowed',
);

check('categorical hues are unique', new Set(chartCategorical).size === chartCategorical.length, '');

/* ---------- 3. every categorical step clears 3:1 on BOTH surfaces --------- */
for (const [mode, s] of Object.entries(chartSurface)) {
  const bad = chartCategorical.filter((c) => contrast(c, s.surface) < 3);
  check(`categorical ≥3:1 on ${mode} surface`, bad.length === 0, bad.join(', ') || 'all pass');
}

/* ---------- 4. sequential ramp is monotone and its light end is visible --- */
const seqL = chartSequential.map(relLum);
let monotone = true;
for (let i = 1; i < seqL.length; i++) if (seqL[i] >= seqL[i - 1]) monotone = false;
check('sequential ramp is monotone light→dark', monotone, chartSequential.join(' → '));
check(
  'sequential light end ≥2:1 on surface',
  contrast(chartSequential[0], chartSurface.light.surface) >= 2,
  `${r1(contrast(chartSequential[0], chartSurface.light.surface))}:1`,
);

/* ---------- 5. the diverging honesty check ------------------------------- */
/* The market pair is red/green because traders expect it — but it is NOT
   CVD-safe, and the system must keep saying so out loud. These assertions
   fail if someone flips the flag without changing the colours. */
const m = chartDiverging.market;
const mDelta = deltaE(
  simulate(m.negative[2], DEUTAN),
  simulate(m.positive[2], DEUTAN),
);
check(
  'market diverging is correctly FLAGGED not CVD-safe',
  m.cvdSafe === false && mDelta < CVD_TARGET,
  `ΔE ${r1(mDelta)} deutan — glyph + label are mandatory`,
);

const acc = chartDiverging.accessible;
const aDelta = deltaE(
  simulate(acc.negative[2], DEUTAN),
  simulate(acc.positive[2], DEUTAN),
);
check(
  'accessible diverging genuinely clears CVD',
  acc.cvdSafe === true && aDelta >= 15,
  `ΔE ${r1(aDelta)} deutan`,
);
check(
  'accessible alternative beats the market pair',
  aDelta > mDelta * 2,
  `${r1(aDelta)} vs ${r1(mDelta)}`,
);

/* diverging midpoint must be neutral grey, never a hue */
for (const [name, d] of Object.entries(chartDiverging)) {
  const [r, g, b] = hex2rgb(d.neutral);
  const spread = Math.max(r, g, b) - Math.min(r, g, b);
  check(`${name} midpoint is neutral (not a hue)`, spread < 0.06, `${d.neutral} spread ${r1(spread * 100)}%`);
}

/* ---------------------------------------------------------------------------
 * RTL VALUE AXIS
 *
 * v2.0 swapped the chart-area gutter for Arabic without moving the axis, so
 * Google drew the labels on the left in a 16px slot and truncated every one of
 * them to an ellipsis. These checks pin the three properties that stop that
 * happening again: the gutter defaults to the drawing side, mirroring actually
 * rebinds the series, and the mirrored axis inherits the chart type's own
 * vAxis settings rather than a rebuilt copy.
 * ------------------------------------------------------------------------ */

const ltr = lineChartOptions('light', 'ltr');
check(
  'LTR reserves the wide gutter where the axis is drawn',
  ltr.chartArea.left === 64 && ltr.chartArea.right === 16,
  `left ${ltr.chartArea.left} / right ${ltr.chartArea.right}`,
);

const unmirrored = lineChartOptions('light', 'rtl');
check(
  'RTL options alone never starve the axis gutter',
  unmirrored.chartArea.left === 64,
  `left ${unmirrored.chartArea.left} — labels are drawn here whatever dir says`,
);

const mirrored = mirrorValueAxis(lineChartOptions('light', 'rtl'), 'rtl', 2);
check(
  'mirroring binds EVERY series to the right-hand axis',
  mirrored.series && Object.keys(mirrored.series).length === 2 &&
    Object.values(mirrored.series).every((v) => v.targetAxisIndex === 1),
  JSON.stringify(mirrored.series),
);
check(
  'mirroring moves the gutter to the right',
  mirrored.chartArea.right === 64 && mirrored.chartArea.left === 16,
  `left ${mirrored.chartArea.left} / right ${mirrored.chartArea.right}`,
);
check(
  'mirrored axis inherits the chart type vAxis settings',
  mirrored.vAxes[1].viewWindowMode === 'pretty',
  'a rebuilt axis would zero-baseline an Arabic line chart',
);
check(
  'the unused axis is hidden, not left to draw furniture',
  mirrored.vAxes[0].textPosition === 'none',
  String(mirrored.vAxes[0].textPosition),
);
check(
  'LTR is left untouched by the mirror',
  mirrorValueAxis(ltr, 'ltr', 2) === ltr,
  'same object — no work done',
);

/* ---------- report ---------- */
const failed = results.filter((r) => !r.ok);
for (const r of results) if (!r.ok) console.log(`FAIL  ${r.name}\n        ${r.detail}`);
console.log(
  `\n${results.length - failed.length}/${results.length} chart checks passed` +
    (failed.length ? `  —  ${failed.length} FAILED` : '  —  all clear'),
);
if (!failed.length) {
  console.log(`  market red/green ΔE ${r1(mDelta)} (deutan) → glyph + label mandatory`);
  console.log(`  accessible blue/orange ΔE ${r1(aDelta)} (deutan) → opt-in CVD mode`);
}
process.exit(failed.length ? 1 : 0);
