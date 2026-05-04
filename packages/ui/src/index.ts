export const GROUP = {
  name: 'BYLO Group',
  website: 'https://www.bylogroup.it',
  vat: '12651890969',
  payoff: 'Professionale, veloce e affidabile',
} as const;

// ---------- Holding legal entity (BYLO Group Srl) ----------
// PLACEHOLDER: ragione sociale, sede legale e capitale sociale stimati
// (la holding ha P.IVA 12651890969 estratta dal sito vecchio).
// DA CONFERMARE col cliente nel documento INFO-DA-CLIENTE.md.
export const LEGAL_GROUP = {
  name: 'BYLO Group Srl',
  vat: '12651890969',
  // Sede legale ipotizzata = sede operativa Transport (Bollate). Da confermare.
  legalAddress: 'Via Ghisalba 7, 20021 Ospiate di Bollate (MI)',
  pec: 'bylogroupsrl@legalmail.it',
  capital: null,
} as const;

// Email privacy/diritti interessato — placeholder ufficiale unico per il
// gruppo. Quando il cliente conferma quale casella usare per richieste GDPR
// (privacy@bylogroup.it consigliato), aggiornare qui.
export const PRIVACY_CONTACT = {
  email: 'privacy@bylogroup.it',
  // DPO non designato: BYLO Group ha < 250 dipendenti e nessun trattamento
  // su larga scala di dati sensibili → la nomina non è obbligatoria. Da
  // valutare con legale del cliente.
  dpo: null,
} as const;

// PLACEHOLDER: utente non ha confermato l'esistenza di info@/press@bylogroup.it.
// Da verificare con il cliente. Nel frattempo le UI dovrebbero usare gli indirizzi
// ufficiali (operativo.t@, officina@, carrozzeria@) finché non c'è una casella
// "info" reale. Il telefono group è il centralino Transport.
export const CONTACTS_GROUP = {
  emailPlaceholder: 'info@bylogroup.it',
  pressPlaceholder: 'press@bylogroup.it',
  phone: '+39 02 7862 0860',
} as const;

// ---------- Entità legali ----------

export const LEGAL_TRANSPORT = {
  name: 'BYLO TRANSPORT S.R.L.',
  vat: '13044730961',
  pec: 'bylotransportsrl@legalmail.it',
  ccia: 'Milano Monza Brianza MI-2701343',
  // Albo Autotrasportatori MI/8906297N era nella memoria precedente ma NON
  // dichiarato sul sito ufficiale: trattare come [DA VERIFICARE].
  albo: 'Albo Autotrasportatori MI/8906297N',
  capital: '€ 50.000,00 i.v.',
  // Sede legale ipotizzata = sede operativa. Da confermare.
  legalAddress: 'Via Ghisalba 7, 20021 Ospiate di Bollate (MI)',
} as const;

export const LEGAL_TOMMY = {
  name: 'TOMMY BY S.R.L.',
  vat: '14194470960',
  pec: 'tommybysrl@legalmail.it',
  // Sede legale ipotizzata = sede unica. Da confermare.
  legalAddress: 'Via Venanzio Buzzi 9, 20017 Mazzo di Rho (MI)',
  capital: null,
} as const;

// ---------- Brand 1: BYLO Transport ----------

export const BRAND = {
  name: 'BYLO Transport',
  parent: 'BYLO Group',
  legalName: LEGAL_TRANSPORT.name,
  domain: 'transport.bylogroup.it',
  vat: LEGAL_TRANSPORT.vat,
} as const;

export const CONTACTS = {
  hq: {
    label: 'Sede operativa & magazzino',
    address: 'Via Ghisalba 7, 20021 Ospiate di Bollate (MI)',
    phone: '+39 02 7862 0860',
    phoneAlt: '+39 02 7862 0861',
    phoneAlt2: '+39 02 7862 0862',
    // operativo.t@ è quello dichiarato sul sito ufficiale; amministrazione.t@
    // è probabilmente la casella admin (memoria, da verificare se attiva).
    email: 'operativo.t@bylogroup.it',
    emailAdmin: 'amministrazione.t@bylogroup.it',
    pec: LEGAL_TRANSPORT.pec,
    hours: 'Lun–Ven 9:00–12:00 / 14:00–18:00',
  },
} as const;

// ---------- Brand 2: Tommy By ----------

export const BRAND_RACING = {
  name: 'Tommy By',
  parent: 'BYLO Group',
  legalName: LEGAL_TOMMY.name,
  domain: 'tommy.bylogroup.it',
  vat: LEGAL_TOMMY.vat,
} as const;

// Sede unica: officina e carrozzeria coabitano allo stesso indirizzo
// (Mazzo di Rho). Restano due entry distinte perche' sono due linee
// di servizio con email e referente dedicati.
const TOMMY_ADDRESS = 'Via Venanzio Buzzi 9, 20017 Mazzo di Rho (MI)';
const TOMMY_CITY = 'Mazzo di Rho';
const TOMMY_PHONE = '+39 331 80 49 728';
const TOMMY_HOURS = 'Lun–Ven 8:30–12:30 / 14:00–18:00';

export const CONTACTS_RACING = {
  officina: {
    key: 'officina',
    label: 'Officina',
    address: TOMMY_ADDRESS,
    city: TOMMY_CITY,
    phone: TOMMY_PHONE,
    mobile: null,
    email: 'officina@bylogroup.it',
    referent: 'Federico',
    hours: TOMMY_HOURS,
  },
  carrozzeria: {
    key: 'carrozzeria',
    label: 'Carrozzeria & Verniciatura',
    address: TOMMY_ADDRESS,
    city: TOMMY_CITY,
    phone: TOMMY_PHONE,
    mobile: null,
    email: 'carrozzeria@bylogroup.it',
    referent: 'Tommaso',
    hours: TOMMY_HOURS,
  },
} as const;

export type Sede = (typeof CONTACTS_RACING)[keyof typeof CONTACTS_RACING];
