# Checklist call cliente BYLO — cose da chiudere

> Stato 2026-05-06: i 3 siti sono live e tecnicamente completi.
> Tutto ciò che resta è input/decisione del cliente.

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

### 3. Foto reali del cliente
- [ ] **Foto flotta Transport** — mezzi in viaggio, in magazzino, autisti. Oggi solo animazione SVG.
- [ ] **Foto sedi** — facciate esterne magazzino Bollate, officina e carrozzeria Mazzo di Rho.
- [ ] **Foto interno officina** — banchi, ponti, attrezzature.
- [ ] **Foto interno carrozzeria** — c'è già `carrozzeria-forno.jpg`, va bene così?
- **Cosa fare in call**: chiedere se può girare un fotografo o se ha già foto di buona qualità.

### 4. Revisione legale privacy + cookie policy
- **Stato attuale**: pagine native già scritte da noi su template Garante, con disclaimer "Bozza" in cima.
- **Cosa serve**:
  - [ ] Revisione testi da commercialista o avvocato del gruppo.
  - [ ] Email per richieste GDPR (oggi placeholder `privacy@bylogroup.it` — esiste? oppure `info@`?).
  - [ ] Conferma sede legale delle 3 entità (ipotizzata uguale a sede operativa).
  - [ ] DPO designato sì/no?
- **Domanda al cliente**: "Vi serve davvero un legale per validare oppure usiamo testi nativi nostri così come sono? Costo legale ~200-500€ vs gratis nativo. Iubenda esistente lo aggiorniamo o dismettiamo?"

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

### 10. Rinomina scheda Google Business "BYLO RACING Automotive" → "Tommy By"
- **Cosa**: la scheda GBP ha ancora il vecchio nome "BYLO RACING Automotive". Per coerenza col nuovo brand andrebbe rinominata "Tommy By".
- **Trade-off**:
  - ✅ Coerenza brand naming sito ↔ Maps ↔ documenti
  - ⚠️ Google "ricalibra" 24-48h → temporaneo lieve calo segnale Maps locale (poi torna)
- **Decisione**: lo facciamo subito? Aspettiamo a quando il sito è "stabilizzato"?

### 11. Mission/payoff in evidenza
- **Stato**: il payoff "Professionale, veloce e affidabile" è in `packages/ui/src/index.ts` ma NON visualizzato esplicitamente nelle pagine.
- **Domanda al cliente**: "Vuoi che lo mettiamo in evidenza (es. sotto il logo nell'header, o come slogan in landing)? Oppure resta solo come metadato interno?"

### 12. Iubenda esistente vs pagine native
- **Stato**: c'è una privacy policy Iubenda obsoleta (titolare "BYLO TRANSPORT & COMMERCE Srl") sul vecchio sito. Le nostre pagine native sono già pronte e gratuite.
- **Trade-off**:
  - **Pagine native** (gratis): aggiornamenti manuali, brand-coherent
  - **Iubenda** (~27€/anno × 3 domini = 81€/anno): aggiornamenti automatici per modifiche normative
- **Decisione**: quale strada?

---

## 📊 STATO INDICIZZAZIONE GOOGLE — informativo

Stato al 2026-05-06 (sitemap inviata 2 giorni fa):

- **152 URL totali** dichiarate al crawler (group 6 + transport 48 + tommy 98)
- **0 indicizzate finora** = normale, Google ci mette 7-30 giorni
- **Redirect 301 attivi**: tutti i 29 URL legacy WordPress reindirizzano correttamente ai nuovi URL (fix 2026-05-06).
- **Prossimo check**: tra 5-7 giorni su GSC → Indicizzazione → Pagine.

Comunicazione al cliente: *"Tra 1-2 settimane vedrai apparire le pagine nuove nei risultati di Google. Nel frattempo i vecchi URL WordPress che Google aveva indicizzato vengono automaticamente reindirizzati ai nuovi (niente perdita di posizionamento)."*

---

## 🎯 SUMMARY one-liner per il cliente

> *"Tecnicamente i 3 siti sono pronti e già live. Per chiudere al 100% mi servono da te: numero WhatsApp + accesso AutoScout + foto reali + revisione legale (o ok per le pagine native nostre) + 4-5 conferme dati operativi (orari, telefoni, classi ADR, email). Tempo Google per indicizzazione completa: 2-4 settimane."*
