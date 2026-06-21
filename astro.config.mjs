// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Промо-сайт TypeRIGHTing. 7 языков отдельными URL (EN на корне, остальные /xx/).
// site/base правятся при деплое: свой домен → site='https://<домен>', base убрать;
// GitHub Pages в подпапке → base='/typerighting-site'.
export default defineConfig({
  // GitHub Pages (подпапка) до покупки домена. С доменом: site='https://<домен>', base убрать.
  site: 'https://donosov999-ai.github.io',
  base: '/typerighting-site',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'es', 'de', 'fr', 'it', 'pt'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
});
