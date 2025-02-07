import { build } from "vite";
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { glob } from "glob";
import handlebars from 'vite-plugin-handlebars';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let toFilename = (fullPath) => path.basename(fullPath);

let env = process.env.env ? process.env.env : 'prod';
let base = env == "prod" ? '/tag' : '/tag/test';

let customers = process.env.customers
  ? process.env.customers.split(' ')
  : glob.sync(resolve(__dirname, `customers`, "*")).map(toFilename);

console.log(`Building for: ${customers}`);

customers.forEach(async (customer) => {

  let commonBuildConfig = {
    outDir: path.join('..', '..', 'dist', customer),
    emptyOutDir: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        passes: 3,
      }
    },
  };

  // build htmls
  let htmlFiles = glob.sync(resolve(__dirname, 'customers', customer, '*.html'));

  if (htmlFiles.length > 0) {
    await build({
      root: `customers/${customer}`,
      base: base,
      plugins: [
        handlebars({
          partialDirectory: resolve(__dirname, 'common', 'partials'),
        }),
      ],
      build: {
        ...commonBuildConfig,
        rollupOptions: {
          input: htmlFiles,
        },
      },
      define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }
    });
  }

  let libConfigs = glob.sync(resolve(__dirname, 'customers', customer, 'src', '*.ts'))
    .map(toFilename)
    .filter(fileName => !fileName.startsWith("_"))
    .map(fileName => ({
      entry: `src/${fileName}`,
      name: '[name].[ext]',
      formats: ['umd'],
      fileName: () => fileName.replace(".ts", ".js"),
    }));

  // build libs
  libConfigs.forEach(async (libConfig) => {
    await build({
      root: path.join('customers', customer),
      base: base,
      build: {
        ...commonBuildConfig,
        lib: libConfig
      },
      define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }
    });
  });
});
