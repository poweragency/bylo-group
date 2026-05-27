import { createI18nRoutes } from '@bylo/ui/seo/index.ts';

// Mappa IT↔EN delle URL di BYLO Transport. Tenere allineata ai file in
// src/content (routes, sectors, services) e alle pagine statiche.
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
        'logistica-integrata': 'integrated-logistics',
        magazzinaggio: 'warehousing',
        'trasporti-adr': 'adr-transport',
      },
    },
    {
      segment: { it: 'settori', en: 'sectors' },
      slugs: {
        alimentare: 'food',
        'automotive-industriale': 'automotive',
        chimica: 'chemicals',
        cosmetica: 'cosmetics',
        farmaceutica: 'pharmaceutical',
        'vernici-solventi': 'paints-solvents',
      },
    },
    {
      segment: { it: 'tratte', en: 'routes' },
      slugs: {
        'milano-bologna': 'milan-bologna',
        'milano-francia': 'milan-france',
        'milano-genova': 'milan-genoa',
        'milano-germania': 'milan-germany',
        'milano-napoli': 'milan-naples',
        'milano-roma': 'milan-rome',
        'milano-spagna': 'milan-spain',
        'milano-torino': 'milan-turin',
      },
    },
  ],
});
