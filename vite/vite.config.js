import path from 'path';
import {globSync} from 'glob';
import handlebars from 'vite-plugin-handlebars';

export default {
  root: path.join(__dirname, './'),
  build: {
    rollupOptions: {
      input: globSync(path.join(__dirname, 'customers' ,'**/*.html')),
    },
    emptyOutDir: true,
  },
  plugins: [
    handlebars({
      partialDirectory: path.resolve(__dirname, 'common', 'partials'),
    }),
  ],
}