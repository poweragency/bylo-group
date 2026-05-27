import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = process.env.BYLO_GROUP_SITE_URL ?? 'https://www.bylogroup.it';

export default defineConfig({
  site: SITE,
  legacy: {
    collections: true,
  },
  build: {
    inlineStylesheets: 'always',
  },
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'it',
        locales: {
          it: 'it-IT',
          en: 'en-US',
        },
      },
      // Escludi le pagine noindex (ringraziamento) dalla sitemap: una pagina
      // noindex in sitemap genera il warning "Esclusa per noindex" in GSC.
      filter: (page) => !/\/(grazie|thanks)\/?$/.test(page),
      // lastmod = data di build: segnale di freschezza/priorita' per Google,
      // leva principale contro "Rilevata ma non indicizzata".
      serialize: (item) => {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: true,
        interval: 300,
      },
    },
  },
});
