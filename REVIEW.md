# REVIEW.md — cose da verificare prima di andare online

Questo file lista tutti i punti dei contenuti che sono **placeholder, deduzione o ipotesi non verificata**. Vanno controllati con il cliente prima del go-live. Aggiornato man mano che si va avanti con la Fase 2 (content + GAIO).

> Convenzione: `[ ]` = da verificare, `[x]` = verificato e corretto.
> Quando un punto è risolto, sposta in "Verificati" in fondo o cancella la riga.

---

## 1. Dati anagrafici / aziendali

- [x] **Anno di fondazione** — DECISIONE CLIENTE 2026-05-05: NON da mostrare sul sito. Punto chiuso, non più richiesto.
- [x] **Dipendenti totali gruppo** — DECISIONE CLIENTE 2026-05-05: NON da mostrare sul sito. Punto chiuso, non più richiesto.
- [ ] **Iscrizione Albo Autotrasportatori MI/8906297N** — era nella memoria precedente, NON dichiarato sul sito ufficiale `bylogroup.it`. Confermare se valido e attivo (`packages/ui/src/index.ts` → `LEGAL_TRANSPORT.albo`).
- [ ] **Email "info@bylogroup.it" e "press@bylogroup.it"** — placeholder, utente non sa se esistono. Oggi `packages/ui/src/index.ts` li tiene come `emailPlaceholder`/`pressPlaceholder`. Le pagine non li mostrano (uso le 3 email reali: `operativo.t@`, `officina@`, `carrozzeria@`).

## 2. BYLO Transport — content

- [x] **Magazzino Bollate**: confermato 2026-05-05 come **magazzino con scaffalature** (no mq dichiarati per scelta cliente). Aggiornato `services/{it,en}/magazzinaggio.md` + `warehousing.md`.
- [ ] **Numero mezzi** — utente ha detto "circa 10 bilici + qualche mezzo piccolo". Usato in `bylo-group/index.astro` ("10+ Mezzi della flotta ADR") e nei servizi. Verificare numero esatto (resta come stima).
- [x] **GPS / tracking sui mezzi** — confermato 2026-05-05. Aggiunto come bullet in `services/it/trasporti-adr.md` (e EN `adr-transport.md`) + `magazzinaggio.md` (e EN `warehousing.md`).
- [ ] **WMS / software gestionale** — non chiesto in tornata 2. Lasciato non dichiarato.
- [x] **Tratte tipiche internazionali** — DECISIONE CLIENTE 2026-05-05: non specificare nulla, generare le tipiche più cercate. Generate **Milano-Francia, Milano-Germania, Milano-Spagna** in IT + EN con vincoli tunnel reali (Frejus, Brennero, Gottardo, Ventimiglia).
- [x] **Settori clienti reali** — DECISIONE CLIENTE 2026-05-05: non specificare, generare quelli più cercati. Aggiunti **cosmetica, vernici-solventi, automotive, alimentare** in IT + EN con copy unico (no duplicate content). Mantenuti chimica + farmaceutica.
- [x] **Tratte ipotizzate**: DECISIONE CLIENTE 2026-05-05: il cliente conferma Milano-Roma e Milano-Torino come "ok come SEO", chiede di generare altre tipiche. Aggiunte **Milano-Napoli, Milano-Bologna, Milano-Genova** in IT + EN.
- [x] **Distanza Milano-Torino** — RISOLTA 2026-06-29 (PR seo/pr4-item-cliente): incoerenza tra testo ("125 km") e frontmatter (`distanceKm: 140`). La distanza stradale A4 Milano-Torino è ~140 km → allineati seo.description, intro e corpo a 140 km (IT `milano-torino.md` + EN `milan-turin.md`).
- [x] **Certificazioni** — DECISIONE CLIENTE 2026-05-05: copy generico, niente ISO specifiche. Aggiunto bullet "Certificazioni di settore aggiornate per il trasporto ADR" in `trasporti-adr.md` (IT+EN). Confermato Albo Autotrasportatori MI/8906297N (rimosso `[DA VERIFICARE]` da `LEGAL_TRANSPORT.albo`).
- [ ] **Onboarding tempi/processo logistica integrata** — in `services/it/logistica-integrata.md` ho usato un processo generico (4 step). Verificare se corrisponde al modo reale di operare.
- [ ] **FAQ chimica/farmaceutica** — i 6 Q&A nei file settori sono contenuto SEO-plausibile ma generico. Da rileggere con il cliente per verificare che le risposte rispettino come l'azienda descrive davvero i propri servizi.
- [ ] **Orari Transport** — usato `Lun–Ven 9:00–12:00 / 14:00–18:00` in `packages/ui/src/index.ts` e nello schema.org `LocalBusiness` di Bollate (Layout). Memoria precedente, NON dichiarato sul sito ufficiale. Verificare se sono gli orari reali della sede di Bollate.
- [x] **Orari Tommy** (officina + carrozzeria): `Lun–Ven 8:30–12:30 / 14:00–18:00` — confermati dal sito ufficiale `bylogroup.it/automotive`, usati in schema.org.

## 3. Tommy By — content

- [x] **Anno fondazione officina + carrozzeria** — DECISIONE CLIENTE 2026-05-05: NON da mostrare sul sito.
- [x] **Numero dipendenti** tra le due sedi — DECISIONE CLIENTE 2026-05-05: NON da mostrare sul sito.
- [x] **Indirizzo officina/carrozzeria** — CONFERMATO 2026-05-05: sede unica a **Via Venanzio Buzzi 9, Mazzo di Rho (MI)** (già a posto in `packages/ui/src/index.ts` → CONTACTS_RACING).
- [x] **Marche servite** — DECISIONE CLIENTE 2026-05-05: tutte le marche, generate in autonomia. Generate **15 marche aggiuntive** (Toyota, Peugeot, Renault, Ford, Dacia, Citroën, Opel, Hyundai, Jeep, Nissan, Kia, Skoda, MINI, Volvo, Alfa Romeo) in IT + EN con copy unico (no duplicate content). Totale marche disponibili: **20** (5 originali + 15 nuove).
- [x] **Zone clientela** (per SEO local) — DECISIONE TORNATA 3 2026-05-05: 15 zone totali con copy unico. Le 5 esistenti (Milano, Rho, Pero, Arese, Lainate) sono state **rifatte** per evitare duplicate content (avevano bullet/FAQ identici). Nuove (10): Mazzo di Rho, Pregnana Milanese, Cornaredo, Pogliano Milanese, Vanzago, Bollate, Garbagnate Milanese, Settimo Milanese, Legnano, Sesto San Giovanni. Ognuna con distanza/tempo precisi, strada specifica di accesso, caratteristica locale reale (es. Centro Commerciale Il Centro Arese, Fiera Milano Pero, Ospedale Civile Garbagnate, distretto manifatturiero Legnano, ex-Falck Sesto, ecc.) e 2-3 FAQ uniche.
- [x] **Convenzioni assicurative** — utente ha detto NESSUNA. Non scritte nei content.
- [ ] **Vendita auto**: CONFERMATO 2026-05-05 dal cliente che SI fa vendita auto. Serve **codice AutoScout24 / API key** per pubblicazione automatica del listino dal sito AutoScout al sito Tommy. Task tecnico da implementare: integrazione AutoScout24 → `apps/bylo-racing/src/pages/auto/`. Aspettare credenziali cliente prima di sviluppare.
  - **DECISIONE SEO 2026-06-29 (PR seo/pr1-fix-tecnici):** finché il listino è demo (6 auto placeholder + foto stock), tutta la sezione `/auto/` è **`noindex`** ed esclusa dalla sitemap (sia IT che EN). Rimuovere il `noindex` dai 3 file (`auto/index.astro`, `auto/[slug].astro`, `en/auto/index.astro`) e dal filtro sitemap in `astro.config.mjs` quando va online il listino reale.
- [ ] **Coordinate geo officina/carrozzeria** — aggiunte `geo` (lat 45.5247, lng 9.0089) allo schema LocalBusiness in `bylo-racing/Layout.astro`: **approssimate sul civico** di Via Venanzio Buzzi 9. Affinare con le coordinate esatte dal Google Business Profile quando si trasferisce l'ownership al cliente.
- [x] **Moto** — DECISIONE CLIENTE 2026-05-05: copy generico, no specificare se officina o carrozzeria. Pulita la FAQ in `officina-multimarche.md` (IT+EN) che limitava le moto a "manutenzione ordinaria, controllo elettronico, pneumatici e piccola meccanica" → ora è semplicemente "qualsiasi marca e modello".
- [ ] **FAQ marche** — le FAQ delle marche generate in tornata 2 (15 nuove) usano testo SEO-plausibile basato su problemi noti pubblici dei modelli (es. PureTech 1.2 timing belt, EcoBoost 1.0, MultiAir Giulietta). Vanno bene per SEO, ma da rileggere col cliente per verificare che il messaggio sia corretto rispetto alla loro esperienza in officina.
- [x] **Indirizzo officina** — CONFERMATO 2026-05-05 dal cliente: sede unica a **Mazzo di Rho** (Via Venanzio Buzzi 9). L'indirizzo "Via Brunetti 14 Milano" del sito ufficiale era stale: il cliente ha unificato officina + carrozzeria nello stesso indirizzo.

## 4. BYLO Group (holding) — content

- [x] **Storia / fondatori / famiglia** — DECISIONE CLIENTE 2026-05-05: niente date/numeri storici (anno fondazione, dipendenti, ecc.). La narrativa familiare "2 generazioni" resta nei copy ma senza dettagli specifici. Conteggio sedi corretto da 3 → 2 sia in IT che EN (officina+carrozzeria coabitano a Mazzo di Rho).
- [ ] **FAQ home group** — AGGIUNTE 2026-06-29 (PR seo/pr4-item-cliente): 6 Q&A in pagina su `bylogroup.it` (IT+EN) con FAQPage schema (leva GEO/AI). Risposte basate solo su fatti già pubblicati (servizi, sedi, classi ADR), nessun numero inventato, niente anno fondazione/dipendenti (esclusi per scelta cliente). **Da far rileggere al cliente** per conferma tono/accuratezza.
- [ ] **Mission / vision** — il sito attuale dice "professionale, veloce e affidabile" come payoff. Salvato in `packages/ui/src/index.ts` → `GROUP.payoff`. Non lo uso esplicitamente nelle pagine; valutare se metterlo in evidenza.
- [ ] **Centralino "gruppo"** — nelle pagine usiamo `+39 02 7862 0860` (centralino Transport) marcandolo come "Centralino gruppo / Group switchboard". Verificare se risponde davvero per richieste che non sono di logistica.

## 5. Indirizzi / contatti — già allineati al sito

- [x] Officina Tommy: **Via A. Brunetti 14, 20156 Milano** (memoria precedente diceva Via Curiel Rho — era SBAGLIATO, corretto in `packages/ui/src/index.ts`).
- [x] Carrozzeria: Via V. Buzzi 9, 20017 Mazzo di Rho (MI).
- [x] Logistica: Via Ghisalba 7, 20021 Ospiate di Bollate (MI).
- [x] Telefoni: Logistica `02 7862 0860 / 0861 / 0862` (3 numeri); Officina `02 334 90 890`; Carrozzeria `331 80 49 728`.
- [x] Email: `operativo.t@bylogroup.it` (logistica operativo), `officina@bylogroup.it`, `carrozzeria@bylogroup.it`.
- [x] P.IVA: BYLO Group `12651890969`, BYLO TRANSPORT `13044730961`, TOMMY BY `14194470960`.
- [x] Classi ADR: `2, 3, 4.1, 4.2, 5.1, 5.2, 6.1, 8, 9` (con sottoclassi precise).

## 6. Fase 0.5 (rimandata) — pre-flight Google Search Console

- [ ] Verificare proprietà GSC su `bylogroup.it` (utente non ha credenziali / accesso al dominio).
- [ ] Esportare query/URL già indicizzati prima del cutover.
- [ ] Verificare se esiste GA4 esistente.
- [ ] Costruire mappa redirect 301 dei 6 URL vecchi del monolitico → nuovi URL piramide.

## 7. Asset visivi mancanti

- [x] **Logo Tommy By** — DECISIONE CLIENTE 2026-05-05: si usa il logo BYLO Group anche su Tommy. Header/Footer di bylo-racing puntano a `/logo.png` (file copiato da bylo-group), niente fallback testuale.
- [x] **Logo BYLO Transport** — DECISIONE CLIENTE 2026-05-05: si usa il logo BYLO Group anche su Transport. Stesso pattern: `apps/bylo-logistica/public/logo.png` è il logo Group.
- [ ] **Foto mezzi** flotta Transport (per hero/landing) — oggi c'è solo l'animazione SVG di un camion.
- [ ] **Foto sedi** (officina, carrozzeria, magazzino) — oggi assenti.
- [ ] **Foto carrozzeria** già presente: `apps/bylo-racing/public/photos/carrozzeria-forno.{avif,webp,jpg}` (forno verniciatura). OK.

## 8. Deploy Vercel (Fase 4) — completato 2026-04-28

- [x] 3 progetti Vercel attivi su scope `poweragency`:
  - `bylo-group` → https://bylo-group.vercel.app
  - `bylo-transport` → https://bylo-transport.vercel.app
  - `bylo-tommy` → https://bylo-tommy.vercel.app
- [ ] **Trasferire ownership** dei 3 progetti al cliente quando si va in produzione (Vercel "Project Transfer", niente rebuild/downtime).
- [ ] **DNS custom**: aggiungere `transport.bylogroup.it`, `tommy.bylogroup.it`, `bylogroup.it` (apex) + `www.bylogroup.it` quando arrivano credenziali Dominiok del cliente. Comando CLI per ognuno: `vercel domains add <fqdn> <progetto>`.
- [ ] **Redirect 301** dei 6 URL vecchi (`/trasporti-nazionali-adr`, `/logistica`, `/automotive`, `/chi-siamo`, `/contatti`) → da inserire in `vercel-group.json` come `redirects` quando si fa cutover apex.
- [ ] **GA4**: aggiungere snippet di tracking nei Layout (script tag in head) quando il cliente conferma/crea property GA4. Property ID da configurare via env var Vercel.
- [ ] **GSC submit sitemap**: dopo il cutover DNS, submit dei 3 sitemap su `search.google.com/search-console`:
  - `https://www.bylogroup.it/sitemap-index.xml`
  - `https://transport.bylogroup.it/sitemap-index.xml`
  - `https://tommy.bylogroup.it/sitemap-index.xml`

---

## Verificati (history)

_(vuoto — riempire mano a mano)_
