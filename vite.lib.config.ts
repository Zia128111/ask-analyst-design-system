import { createHash } from 'node:crypto';
import { relative, resolve, sep } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

/* ============================================================================
 * LIBRARY BUILD — produces dist/index.js, dist/styles.css, dist/fonts/*
 * ============================================================================
 * Separate from vite.config.ts, which still builds the living documentation
 * app. That app is not dead weight: three real bugs survived precisely
 * because a component was not rendered there.
 * ========================================================================= */

const root = import.meta.dirname;

export default defineConfig({
  plugins: [react()],

  /* The docs app's public/ holds a favicon, an icon sprite and a copy of the
     fonts. None of it belongs in the package. The fonts now live in
     src/theme/fonts/ so they go through the asset pipeline and get URLs that
     resolve relative to the stylesheet — as published, `/fonts/lato-*.woff2`
     was an absolute path that 404s in any consuming app, silently falling
     back off Lato and defeating the reason for self-hosting it. */
  publicDir: false,

  css: {
    modules: {
      /* Vite derives the default hash from the file path, which differs
         between Windows (\) and Linux (/). That made a Windows-built dist/
         differ from a CI rebuild in 56 places and broke the staleness gate.
         Normalising to a POSIX path makes the output byte-identical wherever
         it is built. */
      generateScopedName(name: string, filename: string) {
        const rel = relative(root, filename).split(sep).join('/');
        const hash = createHash('sha256').update(rel).digest('hex').slice(0, 6);
        return `_${name}_${hash}`;
      },
    },
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    /* Library builds inline assets by default, which turned styles.css
       into a 2 MB base64 blob. Emit the fonts as real files instead. */
    assetsInlineLimit: 0,
    // One stylesheet, not one per component — consumers make a single import.
    cssCodeSplit: false,
    lib: {
      entry: resolve(root, 'src/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      /* Anything the consuming app also owns must NOT be bundled. Two copies
         of React means broken hooks; two copies of Mantine means the theme
         context the components read is not the one the provider supplies. */
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react-dom/client',
        '@mantine/core',
        '@mantine/hooks',
        '@mantine/dates',
        '@mantine/notifications',
        '@tabler/icons-react',
        'react-google-charts',
        'dayjs',
      ],
      output: {
        assetFileNames: (asset: { name?: string; names?: string[] }) => {
          const name = asset.names?.[0] ?? asset.name ?? '';
          /* A single flat stylesheet, but fonts keep their own names — a
             blanket 'styles.css' here would emit every font AS styles.css. */
          if (name.endsWith('.css')) return 'styles.css';
          return 'fonts/[name][extname]';
        },
        /* Mantine components are client components. Without this directive a
           Next.js app-router consumer gets a server-render error on import. */
        banner: "'use client';",
      },
    },
  },
});
