# WORK.md — coordinamento lavoro parallelo

> Convenzione interna BYLO. Su questo monorepo lavorano **due persone in parallelo** sullo stesso drive di rete (Z:). Senza un meccanismo di lock, l'unica forma di coordinamento è dichiarare qui sopra cosa si sta toccando.
>
> **Regola unica:** prima di iniziare a editare file, aggiorna la sezione "Aree attive" con il tuo nome, le cartelle/file che intendi toccare, e la data inizio. Quando finisci, sposta in "Storico" o cancella la riga.

## Aree attive

<!-- Esempio formato:
- **@nome** — `apps/bylo-logistica/src/components/sections/` (in lavorazione, dal 2026-04-27 15:00)
-->

_(nessuna area attiva al momento — refactor SEO Fasi 0-5 chiuso e mergiato in `main` il 2026-04-29. 3 progetti deployati su Vercel: bylo-group, bylo-transport, bylo-tommy. Vedi `PROSSIMI-PASSI.md` per cosa resta in attesa del cliente.)_

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
