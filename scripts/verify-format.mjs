import * as f from '../src/lib/format.ts';
const rows = [
  ['volume 98,318,666',      f.formatVolume(98318666),      '98.32M'],
  ['volume 149,299,436',     f.formatVolume(149299436),     '149.30M'],
  ['volume 8,241,226',       f.formatVolume(8241226),       '8.24M'],
  ['volume 80,096 (<1M)',    f.formatVolume(80096),         '80,096'],
  ['compact 1.23 billion',   f.formatCompact(1234567890),   '1.23B'],
  ['compact 1.23 trillion',  f.formatCompact(1234567890123),'1.23T'],
  ['mktcap',                 f.formatMarketCap(4870000000), 'Rs 4.87B'],
  ['price 175198.04',        f.formatPrice(175198.04),      '175,198.04'],
  ['pct -0.25 (accounting)', f.formatPercent(-0.25),        '(0.25)%'],
  ['pct +35.6 showPlus',     f.formatPercent(35.6,{showPlus:true}), '+35.60%'],
  ['change -13.15',          f.formatChange(-13.15),        '-13.15'],
  ['null -> em dash',        f.formatPrice(null),           '—'],
  ['NaN -> em dash',         f.formatVolume(NaN),           '—'],
  ['undefined mktcap',       f.formatMarketCap(undefined),  '—'],
  ['direction of -3.7',      f.direction(-3.7),             'down'],
  ['direction of 0',         f.direction(0),                'flat'],
];
let bad=0;
for (const [label, got, want] of rows) {
  const ok = String(got) === want;
  if (!ok) bad++;
  console.log((ok?'PASS  ':'FAIL  ') + label.padEnd(26) + String(got).padEnd(14) + (ok?'':'want '+want));
}
console.log(`\n${rows.length-bad}/${rows.length} formatter checks passed`);
process.exit(bad?1:0);
