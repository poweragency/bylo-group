# REVIEW.md — cose da verificare prima di andare online

Questo file lista tutti i punti dei contenuti che sono **placeholder, deduzione o ipotesi non verificata**. Vanno controllati con il cliente prima del go-live. Aggiornato man mano che si va avanti con la Fase 2 (content + GAIO).

> Convenzione: `[ ]` = da verificare, `[x]` = verificato e corretto.
> Quando un punto è risolto, sposta in "Verificati" in fondo o cancella la riga.

---

## 1. Dati anagrafici / aziendali

- [ ] **Anno di fondazione** — di nessuna delle 3 aziende è dichiarato. Andrebbe aggiunto in `bylo-group/src/pages/index.astro` (sezione "Chi siamo") e nei content `services/*.md`.
- [ ] **Dipendenti totali gruppo** — sconosciuti. Oggi nei "Numeri" landing group non li mostriamo.
- [ ] **Iscrizione Albo Autotrasportatori MI/8906297N** — era nella memoria precedente, NON dichiarato sul sito ufficiale `bylogroup.it`. Confermare se valido e attivo (`packages/ui/src/index.ts` → `LEGAL_TRANSPORT.albo`).
- [ ] **Email "info@bylogroup.it" e "press@bylogroup.it"** — placeholder, utente non sa se esistono. Oggi `packages/ui/src/index.ts` li tiene come `emailPlaceholder`/`pressPlaceholder`. Le pagine non li mostrano (uso le 3 email reali: `operativo.t@`, `officina@`, `carrozzeria@`).

## 2. BYLO Transport — content

- [ ] **Magazzino Bollate**: dimensione reale in mq sconosciuta. Nei contenuti (es. `services/it/magazzinaggio.md`) non menziono cifre, solo "magazzino" generico.
- [ ] **Numero mezzi** — utente ha detto "circa 10 bilici + qualche mezzo piccolo". Usato in `bylo-group/index.astro` ("10+ Mezzi della flotta ADR") e nei servizi. Verificare numero esatto.
- [ ] **GPS / tracking sui mezzi** — nei content non l'ho mai dichiarato. Se esiste, aggiungere come bullet. Se non esiste, ok.
- [ ] **WMS / software gestionale** — nei content non l'ho dichiarato. Se esiste, aggiungere.
- [ ] **Tratte tipiche internazionali** — utente non sa. Nei content scrivo "tratte nazionali e internazionali" generico. Se ci sono destinazioni ricorrenti (Francia, Germania, Spagna, Est Europa) andrebbero menzionate per SEO.
- [ ] **Settori clienti reali** — sito non ne dichiara, utente ha detto "valli a vedere sul sito" ma il sito non dice settori specifici. Per ora ho scritto **CHIMICA** e **FARMACEUTICA** come settori ipotizzati (file `content/sectors/it/{chimica,farmaceutica}.md` + EN). Sono settori naturali per ADR, ma da verificare se sono i settori effettivamente serviti o se invece il cliente lavora in altri (alimentare, automotive industriale, edilizia, cosmetica).
- [ ] **Tratte ipotizzate**: ho scritto **Milano-Roma** e **Milano-Torino** (`content/routes/it/{milano-roma,milano-torino}.md` + EN). Sono plausibili ma non confermate dal cliente. Verificare se sono fra le tratte ricorrenti, e quali altre andrebbero aggiunte.
- [ ] **ISO certificazioni** (9001, 14001, 45001) — non dichiarate sul sito, utente non sa. Lasciate fuori dai content.
- [ ] **Onboarding tempi/processo logistica integrata** — in `services/it/logistica-integrata.md` ho usato un processo generico (4 step). Verificare se corrisponde al modo reale di operare.
- [ ] **FAQ chimica/farmaceutica** — i 6 Q&A nei file settori sono contenuto SEO-plausibile ma generico. Da rileggere con il cliente per verificare che le risposte rispettino come l'azienda descrive davvero i propri servizi.
- [ ] **Orari Transport** — usato `Lun–Ven 9:00–12:00 / 14:00–18:00` in `packages/ui/src/index.ts` e nello schema.org `LocalBusiness` di Bollate (Layout). Memoria precedente, NON dichiarato sul sito ufficiale. Verificare se sono gli orari reali della sede di Bollate.
- [x] **Orari Tommy** (officina + carrozzeria): `Lun–Ven 8:30–12:30 / 14:00–18:00` — confermati dal sito ufficiale `bylogroup.it/automotive`, usati in schema.org.

## 3. Tommy By — content

- [ ] **Anno fondazione officina + carrozzeria** — sconosciuti.
- [ ] **Numero dipendenti** tra le due sedi — sconosciuto.
- [ ] **Marche servite** — sito dice "qualsiasi modello / multimarche". Ho scritto pagine dedicate per **5 marche placeholder ragionevoli**: BMW, Audi, Mercedes-Benz, FIAT, Volkswagen (`content/brands/it/*.md` + EN). Da chiedere al cliente quali sono effettivamente le top 5-10 marche servite. Le pagine sono "generiche" — descrivono che facciamo manutenzione su quella marca, ma non dicono niente di specifico che potrebbe essere falso.
- [ ] **Zone clientela** (per SEO local) — ho scritto pagine per **5 zone placeholder**: Milano, Rho, Pero, Arese, Lainate (`content/zones/it/*.md` + EN). Sono zone vicine alle due sedi (Milano + Mazzo di Rho) quindi sono ragionevoli, ma da concordare con utente la lista corretta — eventuali aggiunte: Pogliano, Cornaredo, Pregnana, Vanzago, Settimo Milanese, Garbagnate Milanese, Bollate, Novate, Cusano Milanino, Cinisello.
- [ ] **Convenzioni assicurative** — utente ha detto NESSUNA. Confermato: non scriviamo nei content.
- [ ] **Vendita auto**: il sito menziona "auto sostitutive" ma non parla di vendita auto in evidenza. La parte `apps/bylo-racing/src/pages/auto/` (catalogo placeholder) è da rivedere: confermare che vendono auto e se sì come funziona.
- [ ] **FAQ marche** — le 2 FAQ per marca usano testo SEO-plausibile (es. "posso mantenere la garanzia ufficiale?"). Verificare con il cliente che le risposte siano corrette.
- [ ] **Indirizzo officina** — su tutta la base contenuti uso `Via A. Brunetti 14, 20156 Milano` come dichiarato dal sito ufficiale. Se l'indirizzo è cambiato in seguito, va aggiornato in `packages/ui/src/index.ts` (CONTACTS_RACING.officina).

## 4. BYLO Group (holding) — content

- [ ] **Storia / fondatori / famiglia** — utente ha detto "2 generazioni, 1 famiglia". Usato in `bylo-group/index.astro`. Non c'è una vera narrativa storica. Andrebbe scritta una sezione "La storia" con date, persone, eventi.
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

- [ ] **Logo Tommy By** — oggi placeholder testuale stilizzato (Header/Footer racing). Quando arriva il logo reale, mettere in `apps/bylo-racing/public/logo.png` e aggiornare gli header/footer.
- [ ] **Logo BYLO Transport** — oggi placeholder testuale stilizzato. Stesso pattern, in `apps/bylo-logistica/public/logo.png`.
- [ ] **Foto mezzi** flotta Transport (per hero/landing) — oggi c'è solo l'animazione SVG di un camion.
- [ ] **Foto sedi** (officina, carrozzeria, magazzino) — oggi assenti.
- [ ] **Foto carrozzeria** già presente: `apps/bylo-racing/public/photos/carrozzeria-forno.{avif,webp,jpg}` (forno verniciatura). OK.

---

## Verificati (history)

_(vuoto — riempire mano a mano)_
