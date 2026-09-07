/* Build dist/design-sync-styles.css — the single flat stylesheet design-sync ships.
 *
 * The DS is a Mantine binding: its own layer only overrides Mantine defaults,
 * so a stylesheet without @mantine/core/styles.css renders every component
 * unstyled. cfg.cssEntry is copied verbatim (never bundled), so @import of a
 * node_modules path would not resolve — concatenate instead, in the exact order
 * CLAUDE.md mandates: Mantine first, ours last.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const pkgDir = dirname(dirname(fileURLToPath(import.meta.url)));
const parts = [
  ['@mantine/core/styles.css', 'node_modules/@mantine/core/styles.css'],
  ['@mantine/dates/styles.css', 'node_modules/@mantine/dates/styles.css'],
  ['@mantine/notifications/styles.css', 'node_modules/@mantine/notifications/styles.css'],
  ['@akseer/ask-analyst-design-system/styles.css', 'dist/styles.css'],
];

// vite emits the self-hosted Lato faces as absolute `url(/fonts/...)` — the app
// serves them from its web root. design-sync resolves font urls relative to the
// stylesheet's own directory, so rewrite to `./fonts/...`: dist/fonts/ is exactly
// where the woff2s live, and the converter then copies them into the bundle.
const relFontUrls = (css) => css.split('url(/fonts/').join('url(./fonts/');

const out = parts
  .map(([label, rel]) => `/* ===== ${label} ===== */\n${relFontUrls(readFileSync(join(pkgDir, rel), 'utf8'))}`)
  .join('\n');

const dest = join(pkgDir, 'dist/design-sync-styles.css');
writeFileSync(dest, out);
console.error(`design-sync-styles.css: ${(out.length / 1024).toFixed(0)} KB from ${parts.length} sheets`);
