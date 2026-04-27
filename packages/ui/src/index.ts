export const GROUP = {
  name: 'BYLO Group',
  website: 'https://www.bylogroup.it',
} as const;

// ---------- Entità legali ----------

export const LEGAL_TRANSPORT = {
  name: 'BYLO TRANSPORT S.R.L.',
  vat: '13044730961',
  pec: 'bylotransportsrl@legalmail.it',
  ccia: 'Milano Monza Brianza MI-2701343',
  albo: 'Albo Autotrasportatori MI/8906297N',
  capital: '€ 50.000,00 i.v.',
} as const;

export const LEGAL_TOMMY = {
  name: 'TOMMY BY S.R.L.',
  vat: '14194470960',
  pec: 'tommybysrl@legalmail.it',
} as const;

// ---------- Brand 1: Logistica ----------

export const BRAND = {
  name: 'BYL Logistica',
  parent: 'BYLO Group',
  legalName: LEGAL_TRANSPORT.name,
  domain: 'logistica.bylogroup.it',
  vat: LEGAL_TRANSPORT.vat,
} as const;

export const CONTACTS = {
  hq: {
    label: 'Sede operativa & magazzino',
    address: 'Via Ghisalba 7, 20021 Ospiate di Bollate (MI)',
    phone: '+39 02 7862 0860',
    phoneAlt: '+39 02 7862 0861',
    email: 'amministrazione.t@bylogroup.it',
    pec: LEGAL_TRANSPORT.pec,
    hours: 'Lun–Ven 9:00–12:00 / 14:00–18:00',
  },
} as const;

// ---------- Brand 2: Tommy Racing (era "Bylo Racing") ----------

export const BRAND_RACING = {
  name: 'Tommy Racing',
  parent: 'BYLO Group',
  legalName: LEGAL_TOMMY.name,
  domain: 'tommy.bylogroup.it',
  vat: LEGAL_TOMMY.vat,
} as const;

export const CONTACTS_RACING = {
  officina: {
    key: 'officina',
    label: 'Sede legale & Officina',
    address: 'Via Eugenio Curiel 53, 20017 Rho (MI)',
    city: 'Rho',
    phone: '+39 02 334 90 890',
    mobile: '+39 347 38 61 577',
    email: 'tommy.by@bylogroup.it',
    hours: 'Lun–Ven 8:30–12:30 / 14:00–18:00',
  },
  carrozzeria: {
    key: 'carrozzeria',
    label: 'Carrozzeria & Verniciatura',
    address: 'Via Venanzio Buzzi 9, 20017 Rho (MI)',
    city: 'Rho',
    phone: '+39 331 80 49 728',
    mobile: null,
    email: 'carrozzeria@bylogroup.it',
    hours: 'Lun–Ven 8:30–12:30 / 14:00–18:00',
  },
} as const;

export type Sede = (typeof CONTACTS_RACING)[keyof typeof CONTACTS_RACING];
