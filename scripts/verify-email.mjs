/**
 * Email token verification.
 *
 * The newsletter cannot use CSS variables (Outlook strips them) or self-hosted
 * fonts, so its tokens are flattened literals. That flattening is where a
 * design system silently drifts: someone tweaks a colour in tokens.ts and the
 * email keeps the old one for a year.
 *
 * These assertions bind the flattened values back to the source.
 *
 * Run: npm run verify:email
 */
import { blue, green, red, ink, neutral, semanticLight } from '../src/theme/tokens.ts';
import { emailColor, emailSize, emailStyle, EMAIL_FONT_STACK } from '../src/lib/email-tokens.ts';

const lin = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
const L = (h) => { const [r,g,b]=[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)); return 0.2126*lin(r)+0.7152*lin(g)+0.0722*lin(b); };
const contrast = (a,b) => { const [hi,lo]=[L(a),L(b)].sort((x,y)=>y-x); return (hi+0.05)/(lo+0.05); };
const r2 = (n) => Math.round(n*100)/100;

const R = [];
const chk = (n, ok, d) => R.push({ n, ok, d });

/* 1. flattened values must still equal the source tokens */
chk('email brand === blue[6]', emailColor.brand === blue[6], `${emailColor.brand} vs ${blue[6]}`);
chk('email link === blue[7] (not the brand)', emailColor.link === blue[7] && emailColor.link !== blue[6], emailColor.link);
chk('email textPrimary === ink', emailColor.textPrimary === ink, emailColor.textPrimary);
chk('email textSecondary === neutral[7]', emailColor.textSecondary === neutral[7], emailColor.textSecondary);
chk('email positive === green[7]', emailColor.positive === green[7], emailColor.positive);
chk('email negative === red[7]', emailColor.negative === red[7], emailColor.negative);
chk('email onBrand === text-on-brand', emailColor.onBrand === semanticLight['text-on-brand'], emailColor.onBrand);

/* 2. no CSS variables may survive into an inline style */
for (const [k, v] of Object.entries(emailStyle)) {
  chk(`style.${k} contains no var()`, !/var\(/.test(v), v.slice(0, 60));
}

/* 3. no rem/em units — email works in px */
for (const [k, v] of Object.entries(emailStyle)) {
  chk(`style.${k} uses px only`, !/\d(rem|em)\b/.test(v), v.slice(0, 60));
}

/* 4. contrast still holds in the flattened palette */
chk('email body text >= 4.5:1', contrast(emailColor.textPrimary, emailColor.surface) >= 4.5, `${r2(contrast(emailColor.textPrimary, emailColor.surface))}:1`);
chk('email link >= 4.5:1', contrast(emailColor.link, emailColor.surface) >= 4.5, `${r2(contrast(emailColor.link, emailColor.surface))}:1`);
chk('email header cell text >= 4.5:1', contrast(emailColor.textSecondary, emailColor.brandTint) >= 4.5, `${r2(contrast(emailColor.textSecondary, emailColor.brandTint))}:1`);
/* Same recorded deviation as the product: white on the brand fill is 3.60:1 —
   AA for large text and UI, below AA for small text. Asserted at 3:1. */
chk('email button label on brand >= 3:1 (recorded deviation)', contrast(emailColor.onBrand, emailColor.brand) >= 3, `${r2(contrast(emailColor.onBrand, emailColor.brand))}:1`);

/* 5. structural email rules */
chk('font stack degrades past Lato', /Arial|Helvetica|sans-serif/.test(EMAIL_FONT_STACK), EMAIL_FONT_STACK);
chk('content width is the 600px email standard', emailSize.contentWidth === 600, String(emailSize.contentWidth));
chk('body line-height is absolute px (Outlook)', Number.isInteger(emailSize.lineHeightBody), String(emailSize.lineHeightBody));
chk('body text >= 14px (mobile mail legibility)', emailSize.bodyText >= 14, `${emailSize.bodyText}px`);

const failed = R.filter((x) => !x.ok);
for (const x of failed) console.log(`FAIL  ${x.n}\n        ${x.d}`);
console.log(`\n${R.length - failed.length}/${R.length} email checks passed` + (failed.length ? `  —  ${failed.length} FAILED` : '  —  all clear'));
process.exit(failed.length ? 1 : 0);
