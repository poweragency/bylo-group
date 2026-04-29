# PROSSIMI-PASSI.md — cosa resta lato nostro

Aggiornato 2026-04-29.

## ✅ Fatto fino a oggi (5 fasi tecniche)

| Fase | Branch | Stato |
|---|---|---|
| 0 — Foundation | `feat/seo-fase-0-foundation` | merged |
| 1 — i18n + naming refresh | `feat/seo-fase-1-i18n-apps` | pushato, PR aperta |
| 2 — Content + GAIO + dynamic pages + llms.txt | `feat/seo-fase-2-content` | pushato, PR aperta |
| 3 — Schema.org pesante (LocalBusiness ×3, Service) | `feat/seo-fase-3-schemaorg` | pushato, PR aperta |
| 4 — Deploy Vercel (3 progetti, URL `*.vercel.app`) | `feat/seo-fase-4-deploy-prep` | pushato, PR aperta |
| 5 — Polish (schema completo, OG default, 404 brand) | `feat/seo-fase-5-polish` | pushato, PR aperta — **redeploy Vercel KO** |

**URL preview attivi** (dal deploy di Fase 4 — quindi senza polish):
- https://bylo-group.vercel.app
- https://bylo-transport.vercel.app
- https://bylo-tommy.vercel.app

## ⚠️ Problema attuale

**Deploy CLI Vercel della Fase 5 polish** restituisce `Unexpected error` con messaggio vuoto. Probabili cause:

1. **Transient lato Vercel platform** — succede, basta riprovare dopo qualche ora
2. **Problema upload da drive Z di rete** — la zip caricata potrebbe corrompersi su SMB
3. **Limite Vercel Hobby plan** — verificare quote upload

**Cose da provare** (in ordine):
1. Riprovare i 3 deploy fra qualche ora con `npm run deploy:group/transport/tommy`
2. Se persiste: collegare i progetti Vercel a GitHub via UI (vercel.com → progetto → Settings → Git → Connect Git Repository → poweragency/bylo-group + Root Directory `apps/bylo-group` ecc.). Vercel deploya automaticamente al push, niente CLI inline
3. In alternativa: mergiare tutte le PR su `main` e impostare `main` come Production Branch dei progetti Vercel

Il **codice della Fase 5 è committato e pushato** su `origin/feat/seo-fase-5-polish` — nessun lavoro perso.

## 🔒 Aspettano il cliente

Dettaglio in `INFO-DA-CLIENTE.md`. Riassunto:

- **DNS Dominiok** — credenziali pannello per aggiungere `transport.bylogroup.it`, `tommy.bylogroup.it`, cutover apex `bylogroup.it`
- **Account Google ufficiale azienda** — per Search Console + Analytics
- **GA4** — property ID (esistente o nuova)
- **GSC** — verifica proprietà + export query/URL del sito vecchio
- **Conferme content placeholder** — settori, marche, zone, anno fondazione, dipendenti (vedi REVIEW.md)
- **Asset reali** — loghi Tommy By + BYLO Transport, foto flotta/sedi
- **Conferme indirizzi e email** — Officina (Brunetti Milano vs Curiel Rho), email attive, orari Transport

## 🛠️ Cose tecniche autonome ancora da fare

1. **Lighthouse audit** sui 3 URL — performance/SEO/accessibility/best practices score. 15 min check + eventuali fix
2. **OG image dinamiche per pagina** (con titolo della pagina renderizzato) — oggi 1 OG default per app, non per singola pagina. ~1h con Vercel OG Image Function
3. **Web3Forms access key** (quando cliente fornisce la key) — 5 min: setto `PUBLIC_WEB3FORMS_KEY` env var su Vercel per le 2 app + redeploy. Form già implementato e funzionante a livello UI/UX, manca solo la key.
4. **WhatsApp button** (quando cliente fornisce il numero) — 15 min
5. **A11y audit** approfondito — keyboard nav, screen reader, contrast. 30 min
6. **Content review umano** — leggere ogni pagina cercando frasi che "suonano da AI". 1-2h
7. **Conversione SVG OG → PNG** — alcuni social non supportano SVG. Solo se serve

## 📦 Pulizia operativa post-progetto

1. **Mergiare le 5 PR aperte** su `main`. Mia preferenza: squash merge sequenziale per mantenere storia "fase per fase"
2. **Cleanup branch** dopo merge
3. **Reset `WORK.md`** — togliere "@claude attivo Fase 5"
4. **Rimuovere file orfani** (quando arrivano gli asset):
   - `apps/bylo-logistica/public/logo.png` (vecchio "BYL Transports & Commerce")
   - `logob.png` in root del repo
5. **`INFO-DA-CLIENTE.pdf`** — committato come reference, eventualmente rimuovibile e rigenerabile on-demand
6. **Migrazione Vercel ownership** al cliente quando si va live

## ⏭️ Next session

1. Tentare di nuovo `npm run deploy:group` — se Vercel ha risolto, va in 2 minuti
2. Se ancora KO, fare Git integration via UI Vercel
3. Verificare URL aggiornati
4. Procedere coi tecnici rimasti o aspettare cliente
