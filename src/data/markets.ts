// Лендинги под рынки — целевые страницы с оффером и SEO под рынок.
// Контент на языке рынка (India→en, France→fr, Germany→de). /for/<slug>/.
import type { Lang } from '../i18n/ui';

export interface Feat { ic: string; t: string; d: string; }
export interface Market {
  slug: string; lang: Lang; flag: string; badge: string;
  pre: string; grad: string; post: string; sub: string; cta: string;
  feats: Feat[]; seoTitle: string; seoDesc: string;
}

export const MARKETS: Market[] = [
  {
    slug: 'india', lang: 'en', flag: '🇮🇳', badge: '🇮🇳 For SSC / CHSL aspirants · Free',
    pre: 'Pass your typing test — ', grad: 'with confidence', post: '',
    sub: 'A free speed trainer built for the SSC / CHSL typing exam: 35 WPM English, a real timed test and a certificate with your name. Works in the browser and offline.',
    cta: 'Start the speed test',
    feats: [
      { ic: '⏱️', t: 'Exam-style speed test', d: 'A 1, 5 or 10-minute timer, a Net WPM goal and honest Gross/Net + accuracy — just like the real SSC test.' },
      { ic: '📜', t: 'Certificate with your name', d: 'Finish a test and get a PNG certificate with your result — proof of your speed to keep or share.' },
      { ic: '🎯', t: 'AI fixes your weak keys', d: 'The app finds the letters you miss most from your errors and drills exactly those — faster progress.' },
      { ic: '🆓', t: 'Free & offline', d: 'No ads, no payment, works without internet on Windows, macOS and Linux.' },
    ],
    seoTitle: 'SSC / CHSL Typing Test Practice — Free Speed Trainer with Certificate | TypeRIGHTing',
    seoDesc: 'Free online typing speed trainer for the SSC CHSL / CGL typing exam: 35 WPM English practice, timed test, AI weak-key drills and a certificate with your name. Offline on Windows, macOS, Linux.',
  },
  {
    slug: 'france', lang: 'fr', flag: '🇫🇷', badge: '🇫🇷 Clavier AZERTY natif · Gratuit',
    pre: 'Apprends la frappe ', grad: 'à l’aveugle', post: ' en AZERTY',
    sub: 'Le seul entraîneur avec un vrai clavier AZERTY à l’écran et les lettres accentuées é è ç à ù. Cours depuis zéro, IA qui trouve tes touches faibles. Gratuit, hors ligne.',
    cta: 'Ouvrir l’entraîneur',
    feats: [
      { ic: '⌨️', t: 'Clavier AZERTY natif', d: 'La vraie disposition française à l’écran — pas un QWERTY déguisé comme chez les autres.' },
      { ic: 'é', t: 'Lettres accentuées', d: 'é è ç à ù dans les exercices, frappées nativement sur ton clavier français.' },
      { ic: '📚', t: 'Cours depuis zéro', d: 'De la rangée de repos aux phrases entières — une carte avec des étoiles pour la précision.' },
      { ic: '🆓', t: 'Gratuit & hors ligne', d: 'Sans publicité, sans paiement, fonctionne sans internet sur Windows, macOS et Linux.' },
    ],
    seoTitle: 'Apprendre à taper au clavier AZERTY — entraîneur de dactylographie gratuit | TypeRIGHTing',
    seoDesc: 'Entraîneur de frappe à l’aveugle avec clavier AZERTY natif et lettres accentuées é è ç. Cours depuis zéro, IA, test de vitesse. Gratuit et hors ligne sur Windows, macOS, Linux.',
  },
  {
    slug: 'germany', lang: 'de', flag: '🇩🇪', badge: '🇩🇪 Native QWERTZ-Tastatur · Kostenlos',
    pre: 'Zehnfingersystem lernen — ', grad: 'QWERTZ', post: '',
    sub: 'Der Schreibtrainer mit echter QWERTZ-Tastatur am Bildschirm und Umlauten ä ö ü ß. Kurs von Grund auf, KI für deine schwachen Tasten. Kostenlos, offline.',
    cta: 'Trainer öffnen',
    feats: [
      { ic: '⌨️', t: 'Native QWERTZ-Tastatur', d: 'Das echte deutsche Layout am Bildschirm — kein verkapptes QWERTY wie bei anderen.' },
      { ic: 'ü', t: 'Umlaute ä ö ü ß', d: 'In den Übungen enthalten und nativ auf deiner Tastatur getippt.' },
      { ic: '📚', t: 'Kurs von Grund auf', d: 'Von der Grundreihe bis zu ganzen Sätzen — eine Karte mit Sternen für Genauigkeit.' },
      { ic: '🆓', t: 'Kostenlos & offline', d: 'Keine Werbung, keine Zahlung, läuft ohne Internet unter Windows, macOS und Linux.' },
    ],
    seoTitle: 'Maschineschreiben lernen — QWERTZ-Schreibtrainer mit Umlauten, kostenlos | TypeRIGHTing',
    seoDesc: '10-Finger-Schreibtrainer mit nativer QWERTZ-Tastatur und Umlauten ä ö ü ß. Kurs von Grund auf, KI, Tempotest. Kostenlos und offline unter Windows, macOS, Linux.',
  },
];
