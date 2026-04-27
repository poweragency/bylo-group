# WORK.md — coordinamento lavoro parallelo

> Convenzione interna BYLO. Su questo monorepo lavorano **due persone in parallelo** sullo stesso drive di rete (Z:). Senza un meccanismo di lock, l'unica forma di coordinamento è dichiarare qui sopra cosa si sta toccando.
>
> **Regola unica:** prima di iniziare a editare file, aggiorna la sezione "Aree attive" con il tuo nome, le cartelle/file che intendi toccare, e la data inizio. Quando finisci, sposta in "Storico" o cancella la riga.

## Aree attive

<!-- Esempio formato:
- **@nome** — `apps/bylo-logistica/src/components/sections/` (in lavorazione, dal 2026-04-27 15:00)
-->

_(nessuna area attiva al momento)_

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

- **Repo GitHub**: https://github.com/poweragency/bylo-group (private, branch `main`).
- **Locale**: `z:/SAAS/BYLO/BYLO/.git/`, tracking `origin/main`.
- **Path sicuro**: aggiunto in `git config --global safe.directory` (necessario perché Z: è UNC mappato).
- **Polling watcher**: gli `astro.config.mjs` di logistica e racing usano `vite.server.watch.usePolling: true` (workaround `fs.watch` su drive di rete).

## Convenzione branch (parallelismo via PR)

Da ora in avanti **non si committa direttamente su `main`**. Ogni modifica passa per un branch + PR:

```bash
# Prima di iniziare a lavorare:
git -C z:/SAAS/BYLO/BYLO checkout main
git -C z:/SAAS/BYLO/BYLO pull
git -C z:/SAAS/BYLO/BYLO checkout -b feat/<nome-feature>

# Dopo aver committato:
git -C z:/SAAS/BYLO/BYLO push -u origin feat/<nome-feature>
gh pr create --fill
```

Naming branch: `feat/...` (nuove feature), `fix/...` (bug fix), `chore/...` (build/config/refactor non funzionale), `docs/...`. Esempi reali per il refactor SEO in corso: `feat/seo-fase-0-foundation`, `feat/seo-fase-1-bylo-group`.

## Inviti collaboratori

Per dare accesso al socio: `gh api -X PUT repos/poweragency/bylo-group/collaborators/<github-username> -f permission=push` (o invito via web sull'URL del repo).

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
