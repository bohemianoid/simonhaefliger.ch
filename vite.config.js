import {resolve} from 'node:path';
import {defineConfig} from 'vite';
import handlebars from 'vite-plugin-handlebars';

const additionalPages = ['readme', 'stack', 'bookmarks'];

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...additionalPages.map(page => resolve(__dirname, `${page}.html`)),
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
    }),
  ],
});
