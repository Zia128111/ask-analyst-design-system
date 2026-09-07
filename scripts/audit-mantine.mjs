/**
 * Mantine integration audit (static half).
 *
 * The failure mode this catches: a `classNames` key that does not match a real
 * Mantine Styles API slot is SILENTLY IGNORED — no error, no warning, the rule
 * simply never applies. Across ~20 CSS modules that is very easy to get wrong
 * and impossible to see by reading.
 *
 * This half lists every class our modules define and every slot we map them
 * to. The browser half then checks which actually reached the DOM.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/theme/components';

/* classes each module declares */
const modules = {};
for (const f of readdirSync(DIR).filter((f) => f.endsWith('.module.css'))) {
  const css = readFileSync(join(DIR, f), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
  const classes = new Set([...css.matchAll(/(^|[\s,>+~])\.([a-zA-Z][\w-]*)/g)].map((m) => m[2]));
  modules[f] = [...classes].sort();
}

/* slots each component is mapped to in the theme */
const idx = readFileSync(join(DIR, 'index.ts'), 'utf8');
const explicit = [...idx.matchAll(/(\w+):\s*\1\.extend\(\{[\s\S]*?classNames:\s*\{([^}]*)\}/g)].map(
  ([, comp, body]) => ({
    comp,
    slots: [...body.matchAll(/(\w+):/g)].map((m) => m[1]),
  }),
);
const spread = [...idx.matchAll(/(\w+):\s*\1\.extend\((\w+)\)/g)].map(([, comp, ref]) => ({ comp, ref }));

console.log('=== CSS modules: classes declared ===');
for (const [f, cs] of Object.entries(modules)) console.log(`  ${f.padEnd(30)} ${cs.join(', ')}`);

console.log('\n=== Components mapped with an explicit slot map ===');
for (const e of explicit) console.log(`  ${e.comp.padEnd(20)} -> ${e.slots.join(', ')}`);

console.log('\n=== Components mapped via a shared contract ===');
for (const e of spread) console.log(`  ${e.comp.padEnd(20)} -> ${e.ref}`);

const total = Object.values(modules).reduce((n, c) => n + c.length, 0);
console.log(`\n${Object.keys(modules).length} modules, ${total} classes declared`);
