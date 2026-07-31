// i18n helpers. English lives at /, French at /fr/. Each component keeps its
// strings in a sibling dict file under src/i18n/ exporting
// `{ en: {...}, fr: {...} }`; components read `Astro.props.locale` (default
// 'en') and index into their dict.

export type Locale = 'en' | 'fr';

export const LOCALES: readonly Locale[] = ['en', 'fr'] as const;

/** Locale of a pathname: /fr and /fr/* are French, everything else English. */
export function getLocale(pathname: string): Locale {
  return pathname === '/fr' || pathname.startsWith('/fr/') ? 'fr' : 'en';
}

/** Same page in the given locale: localizePath('/work/inventara/', 'fr') → '/fr/work/inventara/'. */
export function localizePath(path: string, locale: Locale): string {
  const bare = path.replace(/^\/fr(?=\/|$)/, '') || '/';
  if (locale === 'en') return bare;
  return bare === '/' ? '/fr/' : `/fr${bare}`;
}
