import { readFileSync } from 'node:fs';
import * as core from '@mantine/core';

const src = readFileSync(new URL('../src/theme/components/index.ts', import.meta.url), 'utf8');
const body = src.slice(src.indexOf('export const components'));
const themed = new Set([...body.matchAll(/^\s{2}([A-Z]\w+):/gm)].map((m) => m[1]));

const isComponent = (v) =>
  typeof v === 'function' || (typeof v === 'object' && v !== null && '$$typeof' in v);
const all = Object.keys(core).filter((k) => /^[A-Z]/.test(k) && isComponent(core[k])).sort();

/* Components whose appearance our system defines, so they must be themed
   explicitly rather than inheriting tokens. */
const distinctive = new Set([
  'Accordion','ActionIcon','Alert','Autocomplete','Blockquote','Breadcrumbs','Burger','Chip',
  'Code','ColorInput','Divider','Drawer','Fieldset','FileInput','Indicator','JsonInput','Kbd',
  'Loader','NavLink','Notification','Overlay','Pagination','Popover','Progress','Rating',
  'RingProgress','SegmentedControl','Skeleton','Slider','Spoiler','Stepper','TagsInput',
  'ThemeIcon','Timeline','Tree',
]);

const themedList = all.filter((c) => themed.has(c));
const missing = all.filter((c) => !themed.has(c));
const gaps = missing.filter((c) => distinctive.has(c)).sort();
const inherit = missing.filter((c) => !distinctive.has(c));

console.log('@mantine/core component exports :', all.length);
console.log('explicitly themed by our system :', themedList.length);
console.log('  ' + themedList.join(', '));
console.log('\nGAPS — visually distinctive, NOT themed:', gaps.length);
console.log('  ' + gaps.join(', '));
console.log('\nInherit tokens automatically (layout/util):', inherit.length);
console.log('  ' + inherit.join(', '));
