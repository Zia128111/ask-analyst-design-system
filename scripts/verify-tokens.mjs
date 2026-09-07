/**
 * Design system token verification.
 *
 * Every rule here encodes a mistake that v1.0 actually shipped, so this is a
 * regression net rather than a style opinion:
 *   - contrast ratios stated in the docs did not match reality (all 5 wrong)
 *   - sub-pixel borders that browsers silently round away
 *   - spacing values off the 4px grid
 *   - type steps too close together to tell apart, and below the 12px floor
 *
 * Run: npm run verify:tokens
 */
import {
  blue, neutral, green, red, amber, ink,
  semanticLight, semanticDark,
  fontSize, space, radius, borderWidth, controlHeight,
} from '../src/theme/tokens.ts';

/* ---------- contrast maths (WCAG 2.x relative luminance) ---------- */
const lin = (c) => {
  c /= 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
};
const L = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
};
const contrast = (a, b) => {
  const [hi, lo] = [L(a), L(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
const r2 = (n) => Math.round(n * 100) / 100;

const results = [];
const check = (name, ok, detail) => results.push({ name, ok, detail });

/* ---------- 1. semantic text must clear its contrast duty ---------- */
// [tokenKey, backgroundKey, minimum, why]
const TEXT_RULES = [
  ['text-primary', 'bg-surface', 4.5, 'body text'],
  ['text-secondary', 'bg-surface', 4.5, 'secondary text'],
  ['text-tertiary', 'bg-surface', 4.5, 'meta text'],
  ['text-link', 'bg-surface', 4.5, 'links — the v1.0 failure'],
  ['text-link', 'bg-brand-subtle', 4.5, 'links on brand tint'],
  ['text-link-hover', 'bg-surface', 4.5, 'link hover'],
  ['positive-text', 'positive-bg', 4.5, 'positive badge'],
  ['negative-text', 'negative-bg', 4.5, 'negative badge'],
  ['warning-text', 'warning-bg', 4.5, 'warning badge'],
  ['neutral-text', 'neutral-bg', 4.5, 'neutral badge'],
  ['positive-text', 'bg-surface', 4.5, 'positive text on white'],
  ['negative-text', 'bg-surface', 4.5, 'negative text on white'],
  ['text-secondary', 'bg-brand-subtle', 4.5, 'table header on header fill'],
];

for (const [fg, bg, min, why] of TEXT_RULES) {
  for (const [mode, pal] of [['light', semanticLight], ['dark', semanticDark]]) {
    const ratio = r2(contrast(pal[fg], pal[bg]));
    check(
      `contrast/${mode}: ${fg} on ${bg} >= ${min}`,
      ratio >= min,
      `${ratio}:1 (${pal[fg]} on ${pal[bg]}) — ${why}`,
    );
  }
}

/* ---------- 2. non-text contrast: WCAG 1.4.11 wants 3:1 ---------- */
const NONTEXT_RULES = [
  ['border-strong', 'bg-surface', 3, 'form control boundary'],
  ['border-brand', 'bg-surface', 3, 'brand outline / button border'],
  ['border-focus', 'bg-surface', 3, 'focus ring'],
];
for (const [fg, bg, min, why] of NONTEXT_RULES) {
  for (const [mode, pal] of [['light', semanticLight], ['dark', semanticDark]]) {
    const ratio = r2(contrast(pal[fg], pal[bg]));
    check(
      `non-text/${mode}: ${fg} on ${bg} >= ${min}`,
      ratio >= min,
      `${ratio}:1 — ${why}`,
    );
  }
}

/* ---------- 3. the brand blue must NOT be used as body text ---------- */
// This is the trap v1.0 fell into. Assert the failure explicitly so nobody
// "simplifies" text-link back to the brand blue later.
const brandOnWhite = r2(contrast(blue[6], '#ffffff'));
check(
  'guard: brand blue is knowingly below AA for text',
  brandOnWhite < 4.5,
  `${brandOnWhite}:1 — brand ${blue[6]} is fills/borders/large-text only`,
);
check(
  'guard: text-link is NOT the brand blue',
  semanticLight['text-link'] !== blue[6],
  `text-link=${semanticLight['text-link']}, brand=${blue[6]}`,
);

/* ---------- 3b. RECORDED DEVIATION: white label on the brand fill ----------
 * Brand decision (2026-09-07): text on #1485ff is white, not ink.
 *
 * This is deliberately NOT deleted from the suite. It is asserted at the 3:1
 * large-text / non-text threshold it does meet, and the shortfall against the
 * 4.5:1 small-text threshold is printed on every run — so the trade-off stays
 * visible instead of quietly disappearing from the codebase.
 */
const onBrand = r2(contrast(semanticLight['text-on-brand'], semanticLight['bg-brand']));
check(
  'on-brand label >= 3:1 (large text / non-text threshold)',
  onBrand >= 3,
  `${onBrand}:1`,
);
check(
  'deviation is declared: on-brand label is white, not ink',
  semanticLight['text-on-brand'].toLowerCase() === '#ffffff',
  `is ${semanticLight['text-on-brand']}`,
);

/* ---------- 4. every ramp is monotonically darkening ---------- */
for (const [name, ramp] of Object.entries({ blue, neutral, green, red, amber })) {
  let monotonic = true;
  for (let i = 1; i < ramp.length; i++) if (L(ramp[i]) >= L(ramp[i - 1])) monotonic = false;
  check(`ramp/${name}: monotonic light -> dark`, monotonic, `${ramp.length} steps`);
}

/* ---------- 5. spacing sits on the 4px grid ---------- */
for (const [k, v] of Object.entries(space)) {
  const px = parseFloat(v);
  check(`space/${k} = ${v} on 4px grid`, Number.isInteger(px) && px % 4 === 0, v);
}

/* ---------- 6. no sub-pixel borders or radii ---------- */
for (const [k, v] of Object.entries(borderWidth)) {
  const px = parseFloat(v);
  check(`border/${k} = ${v} is a whole pixel`, Number.isInteger(px), v);
}
for (const [k, v] of Object.entries(radius)) {
  const px = parseFloat(v);
  check(`radius/${k} = ${v} is a whole pixel`, Number.isInteger(px), v);
}

/* ---------- 7. type scale: 12px floor, and steps far enough apart ---------- */
const sizes = Object.entries(fontSize).map(([k, v]) => [k, parseFloat(v)]);
for (const [k, px] of sizes) {
  check(`type/${k} = ${px}px >= 12px floor`, px >= 12, `${px}px`);
}
const sorted = [...sizes].sort((a, b) => a[1] - b[1]);
for (let i = 1; i < sorted.length; i++) {
  const [ka, a] = sorted[i - 1];
  const [kb, b] = sorted[i];
  // Adjacent steps must differ by >= 2px AND >= 8%, or they read as identical.
  const ok = b - a >= 2 && (b - a) / a >= 0.08;
  check(`type: ${ka}(${a}) -> ${kb}(${b}) is a distinguishable step`, ok, `+${r2(b - a)}px / +${r2(((b - a) / a) * 100)}%`);
}

/* ---------- 8. control heights clear the WCAG 2.5.8 24px floor ---------- */
for (const [k, v] of Object.entries(controlHeight)) {
  check(`control/${k} = ${v} >= 24px (WCAG 2.5.8 AA)`, parseFloat(v) >= 24, v);
}

/* ---------- 9. light and dark expose exactly the same token set ---------- */
const lk = Object.keys(semanticLight).sort();
const dk = Object.keys(semanticDark).sort();
check(
  'semantic: light and dark define identical keys',
  JSON.stringify(lk) === JSON.stringify(dk),
  `light=${lk.length} dark=${dk.length}`,
);

/* ---------- report ---------- */
const failed = results.filter((r) => !r.ok);
for (const r of results) {
  if (!r.ok) console.log(`FAIL  ${r.name}\n        ${r.detail}`);
}
console.log(
  `\n${results.length - failed.length}/${results.length} token checks passed` +
    (failed.length ? `  —  ${failed.length} FAILED` : '  —  all clear'),
);
if (!failed.length) {
  console.log(`  ink ${ink} on white: ${r2(contrast(ink, '#ffffff'))}:1`);
  if (onBrand < 4.5) {
    console.log(
      `  NOTE  white on brand #1485ff is ${onBrand}:1 — passes AA for large text` +
        ` and UI (3:1), below AA for small text (4.5:1). Accepted brand decision;` +
        ` ink would be ${r2(contrast(ink, semanticLight['bg-brand']))}:1.`,
    );
  }
}
process.exit(failed.length ? 1 : 0);
