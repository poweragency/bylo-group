# WORK.md — coordinamento lavoro parallelo

> Convenzione interna BYLO. Su questo monorepo lavorano **due persone in parallelo** sullo stesso drive di rete (Z:). Senza un meccanismo di lock, l'unica forma di coordinamento è dichiarare qui sopra cosa si sta toccando.
>
> **Regola unica:** prima di iniziare a editare file, aggiorna la sezione "Aree attive" con il tuo nome, le cartelle/file che intendi toccare, e la data inizio. Quando finisci, sposta in "Storico" o cancella la riga.

## Aree attive

<!-- Esempio formato:
- **@nome** — `apps/bylo-logistica/src/components/sections/` (in lavorazione, dal 2026-04-27 15:00)
-->

- **@claude** — refactor SEO **Fase 3 (schema.org pesante)**, dal 2026-04-28 sera. Branch `feat/seo-fase-3-schemaorg`. Tocca:
  - `apps/bylo-logistica/src/layouts/Layout.astro` (aggiunta LocalBusiness JSON-LD per Bollate)
  - `apps/bylo-racing/src/layouts/Layout.astro` (aggiunta 2 LocalBusiness — AutoRepair Milano + AutoBodyShop Mazzo di Rho)
  - `apps/bylo-logistica/src/pages/servizi/[slug].astro` + EN (Service JSON-LD per ogni servizio)
  - `apps/bylo-racing/src/pages/servizi/[slug].astro` + EN (Service JSON-LD)
  - Eventuale aggiornamento `REVIEW.md` per orari da verificare.

- **@claude** — Fase 2 (committata e pushata, branch `feat/seo-fase-2-content`, commit `1040a7f`): content + dynamic pages + llms.txt. 66 pagine totali.
- **@claude** — Fase 1 (committata e pushata, branch `feat/seo-fase-1-i18n-apps`): i18n + naming refresh + group landing arricchita + fix logo.

## Aree riservate Claude (refactor SEO in corso)

Quando Claude lavora alla pipeline di refactor SEO concordata, scrive **solo dentro queste cartelle**:

- `apps/bylo-group/` _(da creare, terza app holding)_
- `packages/ui/src/seo/` _(da creare, componenti SEO condivisi: FAQ, Breadcrumb, SchemaOrg, Hreflang, InternalLinkBlock)_
- `apps/*/src/content/` _(content collections per pagine SEO)_
- `WORK.md` (questo file)

Tutto il resto è **off-limits per Claude** finché non viene esplicitamente autorizzato dal proprietario del file/cartella o coordinato in `WORK.md`.

## Storico

_(vuoto)_

---

## Setup di sicurezza già attivo

- **Git**: repo locale inizializzato in `z:/SAAS/BYLO/BYLO/.git/`. Branch corrente: `main`. Nessun remote ancora configurato — quando si apre il GitHub aziendale, si aggiunge il remote.
- **Path sicuro**: aggiunto in `git config --global safe.directory` (necessario perché Z: è UNC mappato).
- **Polling watcher**: gli `astro.config.mjs` di logistica e racing usano `vite.server.watch.usePolling: true` (workaround `fs.watch` su drive di rete).

## Comandi rapidi

```bash
# Dev server (porte distinte per girare in parallelo)
cd apps/bylo-logistica && node ../../node_modules/astro/astro.js dev --port 4321 --host
cd apps/bylo-racing    && node ../../node_modules/astro/astro.js dev --port 4322 --host

# Stato git
git -C z:/SAAS/BYLO/BYLO status

# Vedi cosa è cambiato di recente (utile prima di toccare file altrui)
git -C z:/SAAS/BYLO/BYLO log --oneline -20
```
