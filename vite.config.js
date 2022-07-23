import {fileURLToPath} from 'node:url';
import {defineConfig} from 'vite';
import handlebars from 'vite-plugin-handlebars';

const additionalPages = ['readme', 'stack', 'bookmarks'];

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('index.html', import.meta.url)),
        ...additionalPages.map(page =>
          fileURLToPath(new URL(`${page}.html`, import.meta.url)),
        ),
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: fileURLToPath(new URL('partials', import.meta.url)),
    }),
  ],
});
