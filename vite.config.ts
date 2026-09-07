import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/* Builds the living documentation app (src/main.tsx -> index.html).
 * Output goes to dist-docs/ so it cannot clobber the library build in dist/,
 * which is what package.json `files` and `exports` publish. */
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist-docs',
  },
})
