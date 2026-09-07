/**
 * Mantine slot-coverage audit (browser half).
 *
 * THE FAILURE THIS CATCHES: a `classNames` key that is not a real Mantine
 * Styles API slot is SILENTLY IGNORED — no error, no warning, the rule simply
 * never applies. Across ~25 CSS modules that is impossible to spot by reading.
 *
 * Paste the snippet this prints into the browser console on the docs page (or
 * run it through any DOM-capable harness). It reports, for every class our
 * modules declare, whether that class actually reached the DOM.
 *
 * Anything reported ABSENT is one of two things — and the difference matters:
 *   1. a wrong slot name (a real bug), or
 *   2. a slot that the docs page never exercises (add it to the docs).
 *
 * Run: npm run audit:slots
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/theme/components';
const declared = {};
for (const f of readdirSync(DIR).filter((n) => n.endsWith('.module.css'))) {
  const css = readFileSync(join(DIR, f), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
  for (const m of css.matchAll(/(^|[\s,>+~])\.([a-zA-Z][\w-]*)/g)) {
    (declared[m[2]] ??= []).push(f.replace('.module.css', ''));
  }
}
const names = Object.keys(declared).sort();

console.log(`${names.length} classes declared across ${readdirSync(DIR).filter((n) => n.endsWith('.module.css')).length} modules.\n`);
console.log('Paste this into the docs-page console (hover a chart and open a dropdown first):\n');
console.log(`(() => {
  const want = ${JSON.stringify(names)};
  const seen = new Set();
  document.querySelectorAll('body *').forEach(e => {
    const c = e.getAttribute('class');
    if (c && typeof c === 'string') c.split(/\s+/).forEach(x => {
      const m = x.match(/^_([a-zA-Z][\w-]*)_[a-z0-9]+_\d+$/);
      if (m) seen.add(m[1]);
    });
  });
  const absent = want.filter(w => !seen.has(w));
  console.log(\`\${want.length - absent.length}/\${want.length} module classes reached the DOM\`);
  if (absent.length) console.warn('ABSENT (wrong slot name, or not exercised):', absent);
  return { present: want.length - absent.length, total: want.length, absent };
})()`);
