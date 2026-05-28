# Checklist call cliente BYLO — cose da chiudere

> Stato 2026-05-07: i 3 siti sono live e tecnicamente completi. Indicizzazione Google in corso.
> Tutto ciò che resta è input/decisione del cliente + setup GBP.

---

## 🔴 BLOCCANTI — senza questi alcune funzioni non operano

### 1. Numero WhatsApp Business
- **Cosa serve**: numero da settare nel bottone "Scrivici su WhatsApp" su Tommy By + BYLO Transport.
- **Stato attuale**: il bottone usa il telefono officina come placeholder.
- **Domanda al cliente**: "Mi dai il numero WhatsApp Business per Tommy e per Transport (puoi essere lo stesso o due diversi)? Deve essere abilitato come WhatsApp Business, non un cellulare normale."

### 2. AutoScout24 — credenziali / API key
- **Cosa serve**: accesso all'account AutoScout24 esistente "Bylo Racing Srl" per pubblicare automaticamente il listino auto sul sito Tommy.
- **Stato attuale**: sezione `/auto/` di Tommy ha 6 auto demo (placeholder), non il listino reale.
- **Domanda al cliente**: "Chi gestisce oggi l'account AutoScout24 di Bylo Racing Srl (Vincenzo? Maurizio? il cliente?). Possiamo avere accesso o farci girare API key/feed XML?"

---

## 🟠 IMPORTANTI — completano la qualità del sito

### 3. Foto reali del cliente — DECISIONE 2026-05-28: cliente NON fornisce foto per il sito

Il cliente ha deciso di **non fornire foto reali per il sito**. Si resta con le illustrazioni SVG / icone / mappe attuali, che vanno bene così. Punto chiuso — non riproporre.

- [~] **Foto flotta Transport** — il cliente non la fornisce → resta l'animazione SVG del camion nell'hero (oggi con scritta "BYLO GROUP"). OK così.
- [~] **Foto sedi** (facciate Bollate + Mazzo di Rho) — non fornite → restano le mappe Google nelle sezioni "Dove siamo". OK così.
- [~] **Foto interno officina** — non fornita → resta la griglia a icone della sezione Officina Tommy. OK così.
- [x] **Foto interno carrozzeria** ✅ FATTO 2026-05-28 — cliente ha fornito foto reale della cabina (verniciatura/tintometro/preparazione), sostituita su tommy.bylogroup.it.
- [x] **🆕 Foto NUOVE per scheda Google Business Tommy** ✅ FATTO 2026-05-28 — sostituite le foto con vecchia insegna "Bylo Racing" sulla scheda Maps.

### 4. Revisione legale privacy + cookie policy

**Stato attuale**: pagine native scritte da noi su template Garante Privacy. In cima compare il disclaimer "Bozza – in attesa di revisione legale". Cookie banner + consent flow GDPR funzionano correttamente.

**Cosa succede se lasciamo così**:
- Funzionalmente: niente di rotto.
- Legalmente: zona grigia. I contenuti sono conformi (template Garante), ma il banner "Bozza" suggerisce a Garante/visitatore "non validata". In caso di audit o reclamo, BYLO è il titolare e si prende la responsabilità anche col banner.
- Reputazionalmente: banner "Bozza" sopra le pagine non è bellissimo per B2B.

**No, non possiamo copiare Iubenda esistente**:
1. ToS Iubenda: il testo è "rented" via abbonamento, non "owned". Copiarlo viola i ToS se l'abbonamento non è attivo.
2. È obsoleto: titolare dichiarato "BYLO TRANSPORT & COMMERCE Srl" (entità che non esiste più, oggi 3 srl distinte) e copre solo `bylogroup.it`, non i sottodomini.
3. Aggiornamenti: copiandolo perdi il vantaggio principale Iubenda (update automatici per nuove norme).

**Opzioni reali**:

| Opzione | Costo | Rischio | Tempo |
|---------|-------|---------|-------|
| **A** — lasciamo "Bozza" finché cliente trova legale | 0€ | medio | indef |
| **B** — togliamo "Bozza" senza validare, BYLO firma in proprio | 0€ | alto | subito |
| **C** — validazione veloce dal commercialista/avvocato del gruppo (1-2h lettura) | ~150-300€ | basso | 1-2 sett |
| **D** — rinnoviamo Iubenda + lo aggiorniamo per 3 entità + 3 sottodomini | ~80€/anno | basso | 1 sett |

**Mia raccomandazione**: opzione **C**. Validazione veloce del commercialista del gruppo (la maggior parte delle PMI italiane fa così, costo basso, copertura piena, manteniamo le pagine native brand-coherent).

**Domande al cliente**:
- "BYLO ha già un commercialista o avvocato di riferimento? Può leggere le 2 pagine (privacy + cookie) in mezz'ora e confermare o segnare correzioni?"
- Se sì: opzione C (consigliata).
- Se no e vuole spendere zero: opzione B con consapevolezza del rischio.

**Dati che servono comunque** (qualunque opzione):
- [ ] Email per richieste GDPR — oggi placeholder `privacy@bylogroup.it`. Esiste o usiamo `info@`?
- [ ] Conferma sede legale delle 3 entità (ipotizzata uguale a sede operativa).
- [ ] DPO designato sì/no? (probabilmente no, BYLO < 250 dipendenti)

### 5. Email business BYLO (per ownership)
- **Stato attuale**: tutti gli asset Google (GSC, GA4, GBP) sono sotto `operativo.poweragency@gmail.com` (account agenzia, in fiduciario).
- **Cosa serve**: la mail business reale di BYLO (oggi nascosta da Google come "Proprietario Principale" sulla scheda GBP).
- **Domanda al cliente**: "Qual è l'email Google business ufficiale di BYLO Group? Quella di chi gestisce la scheda Google del gruppo. Quando ce la dai trasferiamo ownership di GSC/GA4/GBP a quell'account."

---

## 🟡 CONFERME DATI — da verificare insieme

Sono dati già scritti sul sito (in content + schema.org), basati su sito vecchio + memoria. Vanno solo confermati, niente da scrivere ex novo.

### 6. Operatività BYLO Transport
- [ ] **Numero mezzi flotta**: "circa 10 bilici + qualche mezzo piccolo" — confermi?
- [ ] **Magazzino Bollate**: scaffalature reali + GPS sui mezzi. Mq NON da mostrare. ✅ confermato 5 maggio
- [ ] **3 telefoni** sede Bollate (`02 7862 0860 / 0861 / 0862`): tutti attivi e usabili? Mostriamo tutti e 3 sul sito o solo uno principale?
- [ ] **Orari** Transport: usato `Lun–Ven 9:00–12:00 / 14:00–18:00` (da memoria precedente, non sul sito vecchio). Sono giusti? Diversi?
- [ ] **Classi ADR servite**: `2, 3, 4.1, 4.2, 5.1, 5.2, 6.1, 8, 9` (dal sito ufficiale). Tutte ancora servite? Aggiunte/tolte?
- [ ] **Albo Autotrasportatori MI/8906297N**: ancora valido e attivo?
- [ ] **Operatività internazionale**: "nazionale + internazionale" è giusto. Quali paesi prevalentemente? (Francia/Germania/Spagna/Est Europa/Svizzera)

### 7. Operatività Tommy By
- [ ] **Orari**: `Lun–Ven 8:30–12:30 / 14:00–18:00`. ✅ confermato dal sito ufficiale
- [ ] **Servizi attivi**: revisioni fino a 35 q., tagliandi multimarca con garanzia, riparazioni mec/elettr, pneumatici, igienizzazione, auto sostitutive, carrozzeria con verniciatura a forno ad acqua. Tutti ancora attivi?
- [ ] **Moto**: confermato sì lavorate moto auto + carrozzeria moto. ✅
- [ ] **Convenzioni assicurative**: confermato NESSUNA. ✅
- [ ] **Vendita auto**: confermato sì, in attesa AutoScout. ✅

### 8. Email aziendali
- [ ] `operativo.t@bylogroup.it` — operativo Transport
- [ ] `amministrazione.t@bylogroup.it` — amministrazione Transport
- [ ] `officina@bylogroup.it` — officina Tommy
- [ ] `carrozzeria@bylogroup.it` — carrozzeria Tommy
- [ ] `info@bylogroup.it` — esiste o no? Oggi placeholder
- [ ] `press@bylogroup.it` — esiste o no? Oggi placeholder

### 9. Centralino "gruppo"
- **Stato**: usiamo `+39 02 7862 0860` (centralino Transport) marcandolo come "Centralino gruppo".
- **Domanda al cliente**: "Risponde davvero a richieste non logistiche? Oppure preferisci che usiamo un altro numero o togliamo il riferimento gruppo?"

---

## 🟢 DECISIONI BRANDING — da concordare

### 10. Scheda Google Business automotive — rename ESEGUITO dal cliente (2026-05-28)

**Stato verificato 2026-05-28** (screenshot dashboard GBP "gestito da te"):

| Dato GBP | Valore |
|---|---|
| Nome attuale | `ByloGroup - carrozzeria, officina, centro revisioni, vendita auto` ✅ rinominato dal cliente |
| Categoria | Meccanico e assistenza automobili a Rho |
| Indirizzo | Via Venanzio Buzzi, 9, 20017 Rho MI ✅ |
| Telefono | 02 3349 0890 |
| Recensioni Google | **4.2 ★ — 54 recensioni** 💎 PRESERVATE dopo il rename |
| Gestione | "Il profilo di questa attività è gestito da te" — account agenzia ha accesso ✅ |
| Foto attuali | Ancora presenti scatti con vecchia insegna "Bylo Racing" → cleanup foto §3 aperto |

**Cosa è andato bene**: il vecchio nome keyword-stuffed "Revisioni Auto, Moto e Camper - Bylo Racing" è stato sostituito, le 54 recensioni e il rating 4.2★ sono salvi, e l'account agenzia ora gestisce la scheda (prima non c'era accesso owner diretto).

**Decisione del cliente**: ha scelto `ByloGroup - carrozzeria, officina, centro revisioni, vendita auto`, NON "Tommy By" come avevamo raccomandato. Scelta del cliente, da rispettare.

**Due punti residui — DECISI 2026-05-28:**

1. **Keyword stuffing → si lascia così, rischio documentato.** Il tail `- carrozzeria, officina, centro revisioni, vendita auto` resta una violazione delle guidelines ("no keywords in business name") e il rischio sospensione persiste, ma il cliente vuole tenerlo. Non si tocca. Se Google segnala/sospende, si accorcia a solo `ByloGroup` in quel momento.
2. **Disallineamento brand sito ↔ GBP → si accetta.** Sito automotive resta "Tommy By" (`tommy.bylogroup.it`, TOMMY BY S.R.L.), GBP resta "ByloGroup - ...". Segnale local SEO leggermente più debole accettato come scelta del cliente. Niente allineamento in nessuna direzione.

**Azioni GBP — CHIUSE:**
- [x] **Foto sostituite** (2026-05-28) — rimosse le foto con vecchia insegna "Bylo Racing", caricati scatti attuali dall'account agenzia. ✅

**§10 completata.** Resta solo il long-term: insegna fisica nuova sull'edificio (§12), coerente col brand scelto dal cliente.

### 11. 🆕 Apertura scheda Google Business per BYLO Transport

**Stato attuale**: nessuna GBP separata visibile per BYLO Transport (sede Bollate, Via Ghisalba 7). Ne esiste solo una per Tommy/officina.

**Vale la pena aprirla?**
- ✅ **SÌ se il cliente cerca** "trasportatori ADR Milano nord", "logistica Bollate", "spedizioniere Lombardia" — Google Maps è canale di acquisto B2B nel settore trasporti
- ✅ Indirizzo Bollate è distinto da Mazzo di Rho → Google la accetta come scheda separata, niente conflitto duplicate
- ⚠️ Richiede verifica Google (cartolina ~10gg) e setup completo (orari, foto, descrizione, categoria "Servizio di trasporto merci")

**Categoria primaria suggerita**: "Servizio di trasporto merci"
**Categorie secondarie**: "Servizio di logistica", "Magazzinaggio"

**Domanda al cliente**:
- "Apriamo scheda Google Business separata per BYLO Transport (Bollate)? È un'attività che richiede ~1h di setup + 10gg di verifica via cartolina. Senza scheda non appare nel pannello mappa quando cercano trasporti in zona Milano nord."

### 12. Insegna fisica nuova "Tommy By" (long-term)

**Stato**: edificio Mazzo di Rho oggi senza insegna (vecchia "Bylo Racing" rimossa, nuova non installata).

**Impatto**:
- Sul GBP: senza insegna, il rename funziona ma Google ha un trust signal in meno. Long-term l'insegna è il segnale "ground truth" più forte.
- Per i clienti fisici: arrivano via GPS senza riferimento visivo all'arrivo.

**Decisione**: budget + tempistiche per nuova insegna. Non urgente (il GBP rename funziona senza), ma da pianificare.

### 13. Mission/payoff in evidenza
- **Stato**: il payoff "Professionale, veloce e affidabile" è in `packages/ui/src/index.ts` ma NON visualizzato esplicitamente nelle pagine.
- **Domanda al cliente**: "Vuoi che lo mettiamo in evidenza (es. sotto il logo nell'header, o come slogan in landing)? Oppure resta solo come metadato interno?"

### 14. Iubenda esistente vs pagine native
- **Stato**: c'è una privacy policy Iubenda obsoleta (titolare "BYLO TRANSPORT & COMMERCE Srl") sul vecchio sito. Le nostre pagine native sono già pronte e gratuite.
- **Trade-off**:
  - **Pagine native** (gratis): aggiornamenti manuali, brand-coherent
  - **Iubenda** (~27€/anno × 3 domini = 81€/anno): aggiornamenti automatici per modifiche normative
- **Decisione**: quale strada?

---

## 📊 STATO INDICIZZAZIONE GOOGLE — aggiornato 2026-05-07

Sitemap sottomessa il 2026-05-05, prima review GSC fatta il 2026-05-07.

| Sito | Indicizzate | Sitemap | Azione fatta oggi | Prossima |
|---|---|---|---|---|
| `bylogroup.it` (group) | **8 / 8** ✅ | 8 URL | Nessuna (tutto a posto) | Monitor passivo |
| `transport.bylogroup.it` | 0 / 48 | 48 URL | Richiesta indicizzazione su 8 URL prioritarie (servizi + tratte top + settori top) | Check tra 5-7gg |
| `tommy.bylogroup.it` | 0 / 95 | 95 URL | Richiesta indicizzazione su 6 URL prioritarie (home + 3 servizi + 2 zone). Restano 2 brand domani (audi, bmw) — limite quota giornaliero | Domani: 2 brand + eventualmente Lainate, Legnano. Check tra 5-7gg |

**Cose viste e già spiegate**:
- Pulizia residua URL legacy WordPress: 2 in 404 (`wp-admin/*`, `wp-content/uploads/*`) + 5 in noindex (era WP che metteva noindex automatico) → **comportamento atteso**, si autopuliscono in 4-6 settimane via crawl naturale di Google. Non richiedono azione.
- Redirect 301 da 29 URL legacy WordPress: tutti attivi e funzionanti.

**Per Transport e Tommy** (sottodomini nuovi senza storia su Google): 1-4 settimane per indicizzazione progressiva è normale. Google tratta i sottodomini come domini distinti, eredita poca trust dal root.

Comunicazione al cliente: *"Group è già completamente indicizzato (cercando 'bylogroup' su Google appaiono i sitelinks principali). Transport e Tommy stanno entrando progressivamente: in 2-4 settimane saranno completi. Stato monitorato attivamente, prossimo check tra 5-7 giorni."*

---

## 🎯 SUMMARY one-liner per il cliente

> *"Tecnicamente i 3 siti sono pronti e live, e Google sta già indicizzando (Group completo, Transport e Tommy in corso, completi in 2-4 settimane). Per chiudere al 100% mi servono da te: (a) numero WhatsApp, (b) accesso AutoScout, (c) foto reali (incluse quelle nuove per la scheda Google Tommy), (d) revisione legale (o ok pagine native), (e) accessi/conferma per fare cleanup scheda Google Tommy (rischio sospensione attivo per nome con keyword), (f) decisione su apertura scheda Google separata per Transport, (g) 4-5 conferme dati operativi (orari, telefoni, classi ADR, email)."*

---

## 🚦 PRIORITÀ OPERATIVE — ordine raccomandato

Da fare in questa sequenza per massimizzare valore + minimizzare rischio:

1. **🚨 GBP Tommy cleanup (§10)** — rinomina `Revisioni Auto, Moto e Camper - Bylo Racing` → `Tommy By` per evitare sospensione. Foto nuove prima, poi rename. Richiede coordinamento cliente per accesso admin.
2. **🟠 Foto reali (§3)** — qualsiasi cosa il cliente abbia, anche da telefono. Servono sia per il sito (sostituire SVG flotta animata) sia per il GBP Tommy nuovo.
3. **🟠 Email business BYLO (§5)** — sblocca trasferimento ownership di GSC/GA4/GBP da Power Agency al cliente.
4. **🟠 Privacy/Cookie revisione (§4)** — opzione C (commercialista cliente) consigliata. Sblocca rimozione disclaimer "Bozza".
5. **🟡 Conferme dati operativi (§6, 7, 8, 9)** — call di 30 min, copre tutto.
6. **🔴 WhatsApp + AutoScout (§1, 2)** — richieste già fatte, in attesa risposta.
7. **🆕 GBP Transport (§11)** — decidere se aprirla. Se sì, schedulare 1h di setup + 10gg verifica cartolina.
8. **🟢 Insegna fisica nuova (§12)** + payoff (§13) + Iubenda (§14) — decisioni a basso impatto immediato, da chiudere quando si ha tempo.
