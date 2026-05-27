import { createI18nRoutes } from '@bylo/ui/seo/index.ts';

// Mappa IT↔EN delle URL di Tommy By. Tenere allineata ai file in
// src/content (brands, zones, services) e alle pagine statiche.
export const i18nRoutes = createI18nRoutes({
  defaultLocale: 'it',
  otherLocale: 'en',
  staticPairs: [
    { it: '/', en: '/en/' },
    { it: '/cookie/', en: '/en/cookie/' },
    { it: '/privacy/', en: '/en/privacy/' },
    { it: '/grazie/', en: '/en/thanks/' },
  ],
  sections: [
    {
      segment: { it: 'servizi', en: 'services' },
      slugs: {
        'carrozzeria-e-verniciatura': 'body-shop-and-painting',
        'officina-multimarche': 'multibrand-workshop',
        'revisioni-ministeriali': 'mandatory-inspections',
      },
    },
    // marche↔brands: gli slug delle marche non si traducono → identici.
    { segment: { it: 'marche', en: 'brands' } },
    { segment: { it: 'zone', en: 'zones' }, slugs: { milano: 'milan' } },
    // schede auto: esistono solo in IT (l'indice /auto/ è bilingue).
    { segment: { it: 'auto', en: 'auto' }, defaultLocaleOnly: true },
  ],
});
