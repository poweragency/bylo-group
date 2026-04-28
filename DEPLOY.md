# DEPLOY.md — istruzioni di deploy su Vercel

## URL attuali (preview, non ancora collegati al dominio reale)

- **bylo-group** (holding): https://bylo-group.vercel.app
- **bylo-transport** (logistica): https://bylo-transport.vercel.app
- **bylo-tommy** (officina/carrozzeria): https://bylo-tommy.vercel.app

## Architettura deploy

3 progetti Vercel separati nello scope `poweragency`. Ognuno ha come sorgente l'**intera root del monorepo** (zippata e caricata via Vercel CLI inline) ma builda **solo la propria app** tramite uno script root specifico.

I file di configurazione stanno nella **root del monorepo**:

- `vercel-group.json` — config bylo-group
- `vercel-logistica.json` — config bylo-transport
- `vercel-racing.json` — config bylo-tommy

Ogni file dichiara `buildCommand: npm run build:<app>` e `outputDirectory: apps/bylo-<cartella>/dist`. Vercel sale dall'intero monorepo, fa `npm install` (workspaces inclusi), e builda solo l'app target.

## Come fare deploy

Da `z:/SAAS/BYLO/BYLO/` (root del monorepo):

```bash
# Deploy bylo-group
npm run deploy:group

# Deploy bylo-transport
npm run deploy:transport

# Deploy bylo-tommy
npm run deploy:tommy
```

Ogni script fa due cose:
1. `vercel link --project=<nome>` → collega la cartella corrente al progetto Vercel
2. `vercel deploy --prod --local-config=<file>.json` → deploy production

Tra un deploy e l'altro Vercel CLI sovrascrive `.vercel/` per puntare al progetto corrente. È normale.

## Prerequisiti

- Vercel CLI installata: `npm install -g vercel`
- Login attivo: `vercel login` (deve risolvere `vercel whoami` con scope `poweragency`)

## Quando arriverà il DNS reale

Per aggiungere i domini custom (esempio `transport.bylogroup.it`):

```bash
vercel link --project=bylo-transport --yes
vercel domains add transport.bylogroup.it bylo-transport
```

Vercel restituisce i record CNAME da aggiungere su Dominiok (o dovunque sia il DNS). Una volta propagati (max 48h, di solito < 2h), il dominio è online.

Stesso pattern per:
- `tommy.bylogroup.it` → progetto `bylo-tommy`
- `bylogroup.it` (apex) + `www.bylogroup.it` → progetto `bylo-group`

## Redirect 301 dei vecchi URL

Quando si farà cutover dell'apex `bylogroup.it` dal sito vecchio al nuovo (`bylo-group`), aggiungere i redirect nel `vercel-group.json`:

```json
"redirects": [
  { "source": "/trasporti-nazionali-adr", "destination": "/", "permanent": true },
  { "source": "/logistica", "destination": "/", "permanent": true },
  { "source": "/automotive", "destination": "https://tommy.bylogroup.it", "permanent": true },
  { "source": "/contatti", "destination": "/#contatti", "permanent": true },
  { "source": "/chi-siamo", "destination": "/#chi-siamo", "permanent": true }
]
```

(I 6 URL del monolitico vecchio sono mappati a posto pertinente nella nuova piramide. Da rivedere con dati GSC reali in Fase 0.5.)
