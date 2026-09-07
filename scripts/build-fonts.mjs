/**
 * Ship the Lato faces as real files, not base64.
 *
 * THE PROBLEM: with `build.lib` set, Vite ignores `assetsInlineLimit` and
 * ALWAYS inlines referenced assets. Routing the eight WOFF2 faces through the
 * CSS pipeline turned dist/styles.css into a 2 MB base64 blob that blocks
 * first paint.
 *
 * THE FIX: keep @font-face out of the bundled stylesheet entirely, copy the
 * faces verbatim, and re-attach them with a plain CSS @import. The browser
 * resolves that relative to dist/styles.css at runtime, and a consuming
 * bundler resolves it the same way — neither needs our build config.
 *
 * Run automatically as part of `npm run build:lib`.
 */
import { copyFileSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SRC_FONTS = 'src/theme/fonts';
const OUT = 'dist';

mkdirSync(join(OUT, 'fonts'), { recursive: true });

const faces = readdirSync(SRC_FONTS).filter((f) => f.endsWith('.woff2'));
if (faces.length === 0) throw new Error(`no .woff2 files in ${SRC_FONTS}`);
for (const f of faces) copyFileSync(join(SRC_FONTS, f), join(OUT, 'fonts', f));

// fonts.css already points at ./fonts/*.woff2, which is correct relative to
// dist/fonts.css once copied.
copyFileSync('src/theme/fonts.css', join(OUT, 'fonts.css'));

const stylesPath = join(OUT, 'styles.css');
const css = readFileSync(stylesPath, 'utf8');
const importLine = "@import './fonts.css';\n";
if (!css.startsWith(importLine)) {
  // @import must be the first rule in the file to be valid CSS.
  writeFileSync(stylesPath, importLine + css);
}

const kb = (readFileSync(stylesPath, 'utf8').length / 1024).toFixed(1);
console.log(`fonts: ${faces.length} faces copied, styles.css ${kb} kB`);
