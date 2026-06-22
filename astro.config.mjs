// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Промо-сайт TypeRIGHTing. 7 языков отдельными URL (EN на корне, остальные /xx/).
// Свой домен typefree.pro на Contabo (рядом с psy-games.pro). Без base — сайт в корне домена.
// Если когда-то вернуть на GitHub Pages в подпапку — base='/typerighting-site' + site='https://donosov999-ai.github.io'.
export default defineConfig({
  site: 'https://typefree.pro',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'es', 'de', 'fr', 'it', 'pt'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
});
