# Informazioni da chiedere al cliente — sito BYLO Group

Questo è il documento da inoltrare al cliente per recuperare tutte le informazioni che mancano per finalizzare il sito. Le domande sono raggruppate per priorità.

> Per il cliente: rispondi punto per punto direttamente sotto la domanda. Le caselle `[ ]` sono per le voci da confermare/correggere; per il resto rispondi liberamente. Quando non sai una cosa, scrivi *"non so"* — meglio che rispondere a caso.

---

## ✅ Risolti il 2026-05-05 (sintesi conferme cliente)

**Tornata 1:**
- **DNS / dominio Dominiok** → OK, le 3 landing sono online.
- **Indirizzo officina/carrozzeria Tommy** → confermato sede unica **Via Venanzio Buzzi 9, Mazzo di Rho (MI)**. L'indirizzo del sito vecchio (Brunetti, Milano) era stale.
- **Loghi Tommy By + BYLO Transport** → si usa il logo BYLO Group anche sui due sottobrand (file `/logo.png` copiato in tutte e 3 le app, già live).
- **Anno di fondazione** (Group/Transport/Tommy/Officina/Carrozzeria) → il cliente NON vuole mostrarlo sul sito. Punti chiusi.
- **Numero dipendenti** (gruppo + Tommy) → il cliente NON vuole mostrarlo sul sito. Punti chiusi.
- **Sezione "sedi operative" (landing holding)** → corretta da "3 sedi" a "2 sedi" (IT + EN).

**Tornata 2 (Transport content + marche Tommy):**
- **Settori clienti Transport** → cliente: "fanno tutti i tipi, scegli i più cercati". Generati **4 nuovi settori** con copy unico (cosmetica, vernici-solventi, automotive, alimentare) in IT + EN. Più i 2 esistenti (chimica, farmaceutica) = **6 settori** totali.
- **Tratte Transport** → cliente: "non specificare, scegli le tipiche più cercate". Generate **6 nuove tratte** (3 nazionali Milano-Napoli/Bologna/Genova, 3 internazionali Milano-Francia/Germania/Spagna) in IT + EN. Più le 2 esistenti (Milano-Roma, Milano-Torino) = **8 tratte** totali.
- **Magazzino Bollate** → confermato: scaffalature reali + GPS tracking sui mezzi. Mq NON da mostrare. Aggiornati `magazzinaggio.md` e `trasporti-adr.md` (+ EN).
- **Certificazioni** → cliente: "sì". Confermato **Albo Autotrasportatori MI/8906297N** (rimosso "[DA VERIFICARE]" dai dati legali, aggiunto come bullet in `trasporti-adr.md`). ISO specifiche ancora da chiarire (sezione aperta sotto).
- **Marche Tommy** → cliente: "tutte le marche, crea tu". Generate **15 nuove marche** con copy unico (Toyota, Peugeot, Renault, Ford, Dacia, Citroën, Opel, Hyundai, Jeep, Nissan, Kia, Skoda, MINI, Volvo, Alfa Romeo) in IT + EN. Più le 5 esistenti = **20 marche** totali.
- **Vendita auto Tommy** → cliente: SI vendono auto. Serve **codice/API AutoScout24** per pubblicazione automatica → punto aperto sotto.
- **Moto Tommy** → cliente: SI lavorano moto. Da chiarire se solo officina o anche carrozzeria → punto aperto sotto.

**Tornata 2 bis (cleanup):**
- **Certificazioni Transport** → cliente: copy generico senza specificare. Aggiunto bullet "Certificazioni di settore aggiornate per il trasporto ADR" (IT+EN). Niente ISO specifiche scritte.
- **Moto Tommy** → cliente: copy generico. Pulite le FAQ che limitavano le moto a "manutenzione ordinaria + piccola meccanica" → ora "qualsiasi marca e modello".

**Tornata 3 (zone Tommy):**
- **Zone Tommy** → 15 zone totali con copy unico. Rifatte le 5 esistenti (Milano, Rho, Pero, Arese, Lainate) per evitare duplicate content. Nuove 10: Mazzo di Rho, Pregnana Milanese, Cornaredo, Pogliano Milanese, Vanzago, Bollate (cross-link Transport), Garbagnate Milanese, Settimo Milanese, Legnano (premium industriale), Sesto San Giovanni (premium urbano). Ogni zona con distanza/tempo, strada di accesso, caratteristica locale, 2-3 FAQ uniche.

**Aperti dopo tornata 3:**
- 🔴 Account Google / GSC / GA4 (punto 2-4)
- 🔴 Access key Web3Forms (punto 18a)
- 🟠 Codice/API AutoScout24 per integrazione listino auto Tommy
- 🟠 Zone Tommy (sessione dedicata richiesta dal cliente)
- 🟢 Asset visivi: foto flotta, foto sedi, foto interno officina
- 🟢 WhatsApp Business number
- ⚖ Revisione legale privacy/cookie + email GDPR ufficiale

---

## 🔴 PRIORITÀ ALTA — serve per mettere online il sito

### 1. Accesso al dominio `bylogroup.it` ✅ RISOLTO 2026-05-05

Le 3 landing sono online. Le credenziali Dominiok sono in mano cliente.

### 2. Account Google (per Search Console + Analytics)

- **Hai già un account Google ufficiale dell'azienda?** Tipo `info@bylogroup.it` o simile su Gmail/Workspace?
- Se sì, è verificato? Lo usate?
- Se NO, te lo creiamo a parte come account aziendale, intestato a BYLO Group / a te / al cliente come preferisci.

### 3. Google Search Console

- **Esiste già una proprietà** GSC per `bylogroup.it`? (è gratuito, l'agenzia precedente potrebbe averlo creato)
- Se sì, **chi ha l'accesso?** Serve l'email account Google di chi è admin di quella proprietà.
- Se non esiste, ne creiamo una nuova. Conviene farlo PRIMA del cutover DNS per esportare le query/URL già indicizzati.

### 4. Google Analytics (GA4)

- **Esiste già una property GA4** per `bylogroup.it`?
- Se sì, ID property (formato `G-XXXXXXXXX`).
- Se no, ne creiamo una nuova al momento del go-live.

---

## 🟠 PRIORITÀ MEDIA — per contenuti credibili

### 5. Storia & dati anagrafici ✅ CHIUSO 2026-05-05

DECISIONE CLIENTE: anni di fondazione e numero dipendenti **non vanno scritti sul sito**. Sezione chiusa, niente da chiedere ulteriormente.

- ~~Anno di fondazione delle 3 entità~~ → non richiesto
- ~~Numero dipendenti~~ → non richiesto
- ~~Storia 3-4 righe~~ → si mantiene la narrativa "2 generazioni in famiglia" già presente, senza dettagli storici specifici

### 6. BYLO Transport — operatività

- **Numero mezzi flotta**: tu hai detto "circa 10 bilici + qualche mezzo piccolo" — confermi? Oppure il numero esatto è...?
- **Magazzino Ospiate di Bollate**: quanti **mq** circa? È un vero magazzino con scaffalature o solo punto operativo?
- **Tracking GPS sui mezzi**: c'è? Sì / No
- **WMS / software gestionale magazzino**: c'è? Quale?
- **Settori dei clienti tipici**: nei contenuti del sito ho ipotizzato **chimica** e **farmaceutica** (sono i settori naturali per ADR). Quali sono i settori effettivi che servite di più? Esempi: chimica, farma, alimentare, automotive industriale, edilizia, cosmetica, altri?
- **Tratte ricorrenti**: ho scritto pagine per **Milano-Roma** e **Milano-Torino**. Sono giuste? Quali altre tratte fareste in evidenza? (es. Milano-Napoli, Milano-Torino, Milano-Venezia, internazionali tipo Francia/Germania/Spagna)
- **Certificazioni ufficiali**: ne avete? (ISO 9001, ISO 14001, ISO 45001, Albo Autotrasportatori MI/8906297N — questa è in memoria ma non sappiamo se ancora valida)
- **Operatività internazionale**: il sito attuale dichiara "internazionale". È vero? In quali paesi prevalentemente? (Francia, Germania, Spagna, Est Europa, Svizzera...)

### 7. Tommy By — operatività

- ~~Anno di fondazione officina/carrozzeria~~ → CHIUSO 2026-05-05: non da mostrare sul sito.
- ~~Numero dipendenti~~ → CHIUSO 2026-05-05: non da mostrare sul sito.
- **Marche servite**: ho preparato pagine SEO per **BMW, Audi, Mercedes-Benz, FIAT, Volkswagen** come "esempi" delle marche più frequenti. Sono giuste? Aggiungi/togli? Le top 5-10 marche che lavorate effettivamente di più?
- **Zone clientela** (per la SEO locale): ho preparato pagine per **Milano, Rho, Pero, Arese, Lainate**. Vanno bene? Quali altre zone aggiungere? (Pogliano, Cornaredo, Vanzago, Lainate, Pregnana, Settimo Milanese, Bollate, Novate Milanese, Cinisello Balsamo, Garbagnate, ecc.)
- **Vendita auto**: il sito attuale parla di "auto sostitutive" ma vendete davvero auto come business? Se sì, da chi prendete il magazzino, quante ne girano al mese? Se NO, eliminiamo la sezione `/auto/` dal sito Tommy.
- **Convenzioni assicurative**: tu hai detto "nessuna convenzione" — confermi? (Generali, Allianz, UnipolSai, ecc.)
- **Lavorate sulle moto**: il sito attuale dice "auto e moto qualsiasi modello" — confermi che fate anche moto?

### 8. Email aziendali — quali sono attive

Ho usato queste email nel sito (estratte dal sito ufficiale `bylogroup.it`). Confermami quali sono **davvero in uso** e a chi vanno:

- [ ] `operativo.t@bylogroup.it` — per richieste operative trasporti
- [ ] `amministrazione.t@bylogroup.it` — per richieste amministrative trasporti
- [ ] `officina@bylogroup.it` — per richieste officina Tommy
- [ ] `carrozzeria@bylogroup.it` — per richieste carrozzeria Tommy
- [ ] `info@bylogroup.it` — esiste? (l'ho usato come placeholder per "contatti corporate gruppo", ma non so se è una vera casella)
- [ ] `press@bylogroup.it` — esiste? (placeholder per stampa)

---

## 🟡 PRIORITÀ VERIFICA — cose che ho già scritto, da confermare

### 9. Indirizzo officina Tommy ✅ RISOLTO 2026-05-05

- [x] **Indirizzo officina/carrozzeria** — sede unica **Via Venanzio Buzzi 9, Mazzo di Rho (MI)**. Officina e carrozzeria coabitano allo stesso indirizzo. Già a posto in `packages/ui/src/index.ts`.

### 10. Telefoni Transport (3 numeri)

Il sito ufficiale dichiara 3 numeri per la sede di Bollate: `02 7862 0860`, `02 7862 0861`, `02 7862 0862`.
- [ ] Tutti e 3 sono attivi e usabili? Vanno mostrati tutti sul sito o ne preferisci solo uno?

### 11. Orari di apertura

- [ ] **Tommy** (officina + carrozzeria): `Lun–Ven 8:30–12:30 / 14:00–18:00` — confermato dal sito attuale, OK?
- [ ] **BYLO Transport** (Bollate): `Lun–Ven 9:00–12:00 / 14:00–18:00` — questi orari erano in memoria precedente, NON dichiarati sul sito attuale. Sono giusti? Diversi?

### 12. Classi ADR

- [ ] Il sito ufficiale dichiara classi: **2, 3, 4.1, 4.2, 5.1, 5.2, 6.1, 8, 9**. Tutte effettivamente servite oggi? Ne avete tolta o aggiunta qualcuna?

### 13. Servizi Tommy By — lista del sito ufficiale

Dal sito attuale ho estratto questi servizi e li ho usati nel nuovo sito. Confermi che ci sono ancora tutti?

- [ ] Revisioni ministeriali fino a 35 quintali
- [ ] Tagliandi multimarche con garanzia ufficiale
- [ ] Riparazioni meccaniche ed elettroniche
- [ ] Servizio pneumatici (controllo, fornitura, montaggio, equilibratura, cambio stagionale)
- [ ] Igienizzazione e pulizia veicoli
- [ ] Auto sostitutive
- [ ] Carrozzeria con verniciatura a forno ad acqua

---

## 🟢 PRIORITÀ BASSA — asset visivi (quando saranno pronti)

### 14. Loghi aziendali ✅ RISOLTO 2026-05-05

- [x] **Logo BYLO Group** usato per tutti e tre i siti (Group + Transport + Tommy). File `/logo.png` copiato in tutte e 3 le app, già live su Header e Footer.

### 15. Foto

- [ ] **Foto flotta** Transport (mezzi in viaggio, in magazzino, autisti) — oggi c'è solo un'animazione SVG di un camion.
- [ ] **Foto sedi** — facciate esterne di magazzino Bollate, officina Milano, carrozzeria Rho.
- [ ] **Foto interno officina** — banchi, ponti, attrezzature.
- [ ] **Foto verniciatura carrozzeria** — c'è già una foto nel sito attuale (`carrozzeria-forno`), va bene?

---

## 📋 Cosa decido come cliente — domande di scope

Queste sono decisioni che solo tu (cliente) puoi prendere, perché impattano il branding/marketing.

### 16. Naming finale

Sul sito nuovo abbiamo usato:
- "BYLO Transport" (era "BYL Logistica" sul sito vecchio)
- "Tommy By" (era "Bylo Racing" / "Tommy Racing" su versioni precedenti)
- "BYLO Group" (holding, invariato)

- [ ] Confermi questi nomi? Oppure vuoi modifiche?

### 17. Dominio per la logistica

- "tommy.bylogroup.it" → Tommy By (ovvio)
- Per la logistica, stiamo usando "**transport.bylogroup.it**" (allineato al brand "BYLO Transport"). Alternativa era "logistica.bylogroup.it" (in italiano). Confermi `transport.`?

### 18a. Form di contatto — Access key Web3Forms ⚠ RAPIDO

Il form di contatto è stato implementato sui siti `transport.bylogroup.it` e `tommy.bylogroup.it`. Per attivarlo serve solo una **access key gratuita di Web3Forms** — niente account, niente domain verification: si inserisce semplicemente l'email su cui vuoi ricevere le richieste, ti arriva la key via email.

**Cosa serve da te:**
1. Vai su https://web3forms.com (o ti registri tu, oppure facciamo insieme — 30 secondi)
2. Inserisci l'email su cui vuoi ricevere le richieste form (es. `operativo.t@bylogroup.it` per Transport, `officina@bylogroup.it` per Tommy — oppure una casella unica `info@bylogroup.it`)
3. Web3Forms ti manda subito la **access key** (formato `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)
4. Mi giri la key e in 5 minuti la attivo

**Note:**
- Free tier: 250 invii/mese (sufficiente per sito vetrina B2B). Se serve di più si passa a piano pro a pagamento.
- Una sola key vale per i form di entrambi i siti (Transport + Tommy).
- L'utente che invia il form vedrà subito un messaggio di conferma in pagina, e poi una pagina dedicata `/grazie`.
- Antispam built-in (honeypot + rate limiting Web3Forms server-side).
- Reply-to automatico: rispondendo all'email che ricevi parli direttamente al cliente.

- [ ] Vuoi una sola casella destinazione (es. `info@bylogroup.it`) o casella diversa per Transport vs Tommy?
- [ ] Mi giri la access key Web3Forms?

### 18. WhatsApp

- [ ] Vuoi un **bottone "scrivici su WhatsApp"** sul sito? Se sì, mi serve **il numero WhatsApp Business** (deve essere un numero diverso dai telefoni fissi, oppure può essere lo stesso se è abilitato).

### 19. Vecchio sito `bylogroup.it`

Quando il cliente recupera DNS e si fa cutover, il sito vecchio viene rimpiazzato dalla nuova landing holding.
- [ ] OK così? Oppure vuoi tenere alcune sezioni del vecchio sito (es. una pagina "Storico" o "Press"?)
- [ ] I 6 URL vecchi (`/trasporti-nazionali-adr`, `/logistica`, `/automotive`, `/chi-siamo`, `/contatti`) li redirigiamo automaticamente alle nuove pagine — OK così?

### 20. Privacy & Cookie — Parte legale ⚠ PRIORITÀ ALTA

Sul sito vecchio bylogroup.it esiste una privacy policy su Iubenda (ID `72984250`) ma è **OBSOLETA**: dichiara come Titolare *"BYLO TRANSPORT & COMMERCE Srl"* (vecchio nome, prima del refactor a BYLO Group) e copre solo `bylogroup.it`, non i sotto-domini `transport.bylogroup.it` e `tommy.bylogroup.it`.

Cosa abbiamo già fatto sui 3 nuovi siti (in attesa tua revisione):

- ✅ **Pagine /privacy e /cookie** scritte in IT + EN per ciascun sito (3 siti × 2 lingue × 2 pagine = **12 pagine totali**), basate su template Garante Privacy con dati corretti delle 3 entità legali (BYLO Group Srl, BYLO TRANSPORT S.R.L., TOMMY BY S.R.L.).
- ✅ **Cookie banner brand-coherent** custom (giallo/nero, riapribile da footer, persistenza 180 gg in localStorage, 3 livelli: Accetta tutti / Solo essenziali / Personalizza con toggle Analytics+Marketing). Quando attiveremo GA4, il banner gestirà già il consent automaticamente (GA4 carica solo se utente accetta analytics).
- ✅ **Disclaimer "Bozza"** in cima a ogni pagina legale che invita alla revisione del legale prima del go-live definitivo.

**Cosa serve da te / dal tuo legale:**

- [ ] **Revisione testi privacy + cookie policy** dal commercialista o avvocato del gruppo, per validare contenuti prima del go-live definitivo.
- [ ] **Email per richieste GDPR**: stiamo usando placeholder `privacy@bylogroup.it`. Va bene o vuoi un'altra casella (es. `info@bylogroup.it`, oppure rinnoviamo Iubenda)?
- [ ] **Sede legale** delle 3 entità — ipotizzata uguale a sede operativa (Bollate per Group + Transport, Brunetti Milano per Tommy). Da confermare con visure camerali aggiornate.
- [ ] **DPO designato?** Probabilmente non obbligatorio (BYLO ha < 250 dipendenti e nessun trattamento dati su larga scala), ma se è stato nominato dimmi nome+contatto.
- [ ] **Iubenda esistente**: lo aggiorniamo (titolare obsoleto + estendere ai sotto-domini) o dismettiamo e usiamo le pagine native scritte da noi? L'opzione native è gratuita e brand-coherent; l'opzione Iubenda costa ~27€/anno × 3 domini ma ha aggiornamenti automatici.
- [ ] **Cookie tecnici aggiuntivi**: oggi abbiamo solo `_vercel_*` (hosting) e `bylo-cc` (consenso locale). Se aggiungiamo Mailchimp / chat tipo Tawk / mappa Google embed, vanno aggiunti alla cookie policy — fammi sapere se ne vuoi.

---

## 📞 Risposta veloce — sintesi minima per partire

Stato post-tornata 2 (2026-05-05): contenuti Transport e marche Tommy a posto. Restano da chiudere prima del go-live:

1. **Account Google ufficiale** azienda (per GSC + GA4) — punto 2-3-4
2. **Conferma email/orari/classi ADR** — punti 8, 10, 11, 12, 13
3. **Conferma naming "BYLO Transport" + dominio "transport.bylogroup.it"** — punti 16-17
4. **Access key Web3Forms** + email destinazione richieste form — punto 18a
5. **WhatsApp Business** numero — punto 18
6. **Revisione legale privacy/cookie + email privacy ufficiale** — punto 20
7. **Codice/API AutoScout24** per integrazione listino auto Tommy → da fornire al cliente per implementazione tecnica
8. **Asset visivi** (foto flotta, foto sedi, foto interno officina) — punto 15

---

*Documento generato il 2026-04-28 a fine giornata. Il sito è online in preview a:*
- *https://bylo-group.vercel.app*
- *https://bylo-transport.vercel.app*
- *https://bylo-tommy.vercel.app*
