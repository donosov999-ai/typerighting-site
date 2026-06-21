// Market-лендинги «лучшие тренажёры печати» — топ-10 конкурентов на рынок + честное
// сравнение с TypeRIGHTing. Контент на языке рынка (SEO под локальные запросы вроде
// «meilleur logiciel dactylographie», «mejor programa de mecanografía»). /best-typing-software/.
// Данные собраны агентами через web-research (см. память project_typerighting_site).
import compData from './competitors.json';
import type { Lang } from '../i18n/ui';

export interface Competitor { name: string; note: string; }
export interface CompetitorPage {
  lang: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  lead: string;
  intro: string;
  competitors: Competitor[];
  comparison: { h: string; body: string };
  verdict: string;
}

export const COMPETITORS = compData as Record<string, CompetitorPage>;
// Языки кроме en (en рендерится отдельным статичным роутом, как в /learn).
export const COMP_LANGS = Object.keys(COMPETITORS).filter((l) => l !== 'en') as Lang[];
export const HAS_COMP = (lang: string) => Boolean(COMPETITORS[lang]);
