import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

/* ============================================================================
 * LIBRARY BUILD — produces dist/index.js + dist/styles.css
 * ============================================================================
 * Separate from vite.config.ts, which still builds the living documentation
 * app. That app is not dead weight: three real bugs survived precisely
 * because a component was not rendered there.
 * ========================================================================= */

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    // One stylesheet, not one per component — consumers make a single import.
    cssCodeSplit: false,
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
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
        assetFileNames: 'styles.css',
        /* Mantine components are client components. Without this directive a
           Next.js app-router consumer gets a server-render error on import. */
        banner: "'use client';",
      },
    },
  },
});
