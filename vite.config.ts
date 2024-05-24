import {defineConfig} from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'adhese',
      formats: ['umd'],
      fileName: () => `Adhese.js`,
    }
  }
})
