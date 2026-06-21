import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  return (seg in ui ? seg : defaultLang) as Lang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

// base с гарантированным trailing slash (Astro BASE_URL бывает без него → пути слипаются)
const BASE = import.meta.env.BASE_URL.replace(/\/?$/, '/');

// EN живёт на корне сайта, остальные языки — под /xx/.
export function localizedPath(lang: Lang, path = ''): string {
  return lang === defaultLang ? `${BASE}${path}` : `${BASE}${lang}/${path}`;
}

// путь к статике (картинки) с учётом base
export function asset(path: string): string {
  return BASE + path.replace(/^\//, '');
}
