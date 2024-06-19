import {defineConfig} from "vite";

export default defineConfig({
  build: {
    outDir: '/',
    minify: 'terser',
    terserOptions: {
      compress: {
        passes: 3,
      }
    },
    lib: {
      entry: 'src/main.ts',
      name: 'adhese',
      formats: ['umd'],
      fileName: () => `Adhese.js`,
    }
  }
})
