// Seleziona N "fratelli" da una lista, in modo deterministico e ciclico a
// partire dalla pagina corrente. Serve per l'interlinking SEO: ogni pagina
// foglia (tratta/settore/marca/zona) linka altri fratelli, così Google trova
// piu' link interni in entrata verso ogni pagina e riduce il "Rilevata ma non
// indicizzata". La rotazione ciclica garantisce che l'equity sia distribuita
// (non puntano tutte alle stesse 3 pagine) e che si formi un anello di link.
export function pickSiblings<T>(
  all: T[],
  currentSlug: string,
  count: number,
  getSlug: (item: T) => string,
): T[] {
  const idx = all.findIndex((item) => getSlug(item) === currentSlug);
  if (idx === -1) return all.slice(0, count);
  const out: T[] = [];
  for (let i = 1; i <= count && i < all.length; i++) {
    out.push(all[(idx + i) % all.length]);
  }
  return out;
}
