// Cross-locale URL resolver.
//
// Le app BYLO hanno URL localizzate sia nel SEGMENTO (`/marche/` ↔ `/en/brands/`)
// sia nello SLUG (`/servizi/revisioni-ministeriali/` ↔ `/en/services/mandatory-inspections/`).
// Uno scambio "ingenuo" del prefisso (`/en` + path) genera URL inesistenti →
// hreflang rotti e selettore lingua che porta a 404 (Google poi indicizza i 404).
//
// Questo modulo costruisce, da una mappa esplicita IT↔EN, la URL controparte
// REALE di una pagina (o `null` quando non esiste, es. schede che vivono solo
// nella lingua di default). Usato sia dagli hreflang (Layout) sia dal selettore
// lingua (Header), così la logica resta in un solo posto.

export type Locale = 'it' | 'en';

export interface I18nSection {
  /** Segmento di URL per locale, es. { it: 'marche', en: 'brands' }. */
  segment: Record<Locale, string>;
  /**
   * Mappa slug-default → slug-altra-locale, per le sezioni con slug tradotti.
   * Le chiavi sono SEMPRE lo slug della locale di default (IT). Ometti quando
   * gli slug sono identici tra le lingue (es. marche).
   */
  slugs?: Record<string, string>;
  /**
   * Le pagine di dettaglio esistono solo nella locale di default (es. schede
   * auto): `alternateUrl(dettaglio, altraLocale)` restituisce `null`. L'indice
   * di sezione resta comunque bilingue.
   */
  defaultLocaleOnly?: boolean;
}

export interface I18nRoutesConfig {
  /** Locale servita senza prefisso di path (qui sempre 'it'). */
  defaultLocale: Locale;
  /** L'altra locale, servita sotto prefisso `/<locale>`. */
  otherLocale: Locale;
  /** Coppie di pagine statiche, una voce per locale: { it: '/grazie/', en: '/en/thanks/' }. */
  staticPairs: Record<Locale, string>[];
  sections: I18nSection[];
}

function normalize(path: string): string {
  if (!path) return '/';
  let p = path.startsWith('/') ? path : `/${path}`;
  if (!p.endsWith('/')) p += '/';
  return p;
}

export function createI18nRoutes(config: I18nRoutesConfig) {
  const { defaultLocale, otherLocale, staticPairs, sections } = config;
  const prefix = (loc: Locale) => (loc === defaultLocale ? '' : `/${loc}`);

  const localeOf = (path: string): Locale =>
    path === `/${otherLocale}` || path.startsWith(`/${otherLocale}/`)
      ? otherLocale
      : defaultLocale;

  function mapSlug(section: I18nSection, slug: string, from: Locale): string {
    if (!section.slugs) return slug;
    if (from === defaultLocale) return section.slugs[slug] ?? slug;
    // reverse lookup: altra-locale → default
    for (const [def, other] of Object.entries(section.slugs)) {
      if (other === slug) return def;
    }
    return slug;
  }

  /**
   * URL controparte (solo path) nella locale `target`, oppure `null` quando la
   * pagina non ha controparte in quella locale.
   */
  function alternateUrl(pathname: string, target: Locale): string | null {
    const path = normalize(pathname);
    const current = localeOf(path);
    if (current === target) return path; // hreflang self-reference

    for (const pair of staticPairs) {
      if (normalize(pair[current]) === path) return normalize(pair[target]);
    }

    const bare =
      current === defaultLocale
        ? path
        : normalize(path.replace(new RegExp(`^/${current}`), '') || '/');
    const parts = bare.split('/').filter(Boolean); // ['marche'] | ['marche','volvo']
    if (parts.length === 0) return `${prefix(target)}/`; // home

    const [seg, slug] = parts;
    const section = sections.find((s) => s.segment[current] === seg);
    if (!section) return null; // sezione sconosciuta → nessuna controparte sicura

    const targetSeg = section.segment[target];
    if (!slug) return `${prefix(target)}/${targetSeg}/`; // indice di sezione

    if (section.defaultLocaleOnly && target !== defaultLocale) return null;
    const targetSlug = mapSlug(section, slug, current);
    return `${prefix(target)}/${targetSeg}/${targetSlug}/`;
  }

  /**
   * href del selettore lingua: SEMPRE una URL valida. Se non c'è controparte
   * esatta, ripiega sull'indice di sezione e infine sulla home della locale.
   */
  function switchUrl(pathname: string, target: Locale): string {
    const exact = alternateUrl(pathname, target);
    if (exact) return exact;
    const path = normalize(pathname);
    const current = localeOf(path);
    const bare =
      current === defaultLocale
        ? path
        : normalize(path.replace(new RegExp(`^/${current}`), '') || '/');
    const seg = bare.split('/').filter(Boolean)[0];
    const section = seg
      ? sections.find((s) => s.segment[current] === seg)
      : undefined;
    return section ? `${prefix(target)}/${section.segment[target]}/` : `${prefix(target)}/`;
  }

  return { alternateUrl, switchUrl };
}
