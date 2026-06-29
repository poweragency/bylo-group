import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { LEGAL_TRANSPORT, CONTACTS } from '@bylo/ui/index.ts';

// llms.txt generato dalle content collection: sempre completo e in sync col
// contenuto reale (no drift). Sostituisce il vecchio public/llms.txt statico,
// che elencava solo una parte di servizi/settori/tratte.
export const prerender = true;

const ORIGIN = 'https://transport.bylogroup.it';

// Solo entry IT (la llms.txt e' in italiano), ordinate per slug per output
// deterministico tra una build e l'altra.
const itOnly = (a: { data: { locale: string }; slug: string }, b: { slug: string }) =>
  a.slug.localeCompare(b.slug);

function slugOf(slug: string): string {
  return slug.split('/').pop() ?? slug;
}

function trunc(s: string, n = 160): string {
  const clean = s.replace(/\s+/g, ' ').trim();
  return clean.length > n ? clean.slice(0, n).replace(/\s+\S*$/, '') + '…' : clean;
}

export const GET: APIRoute = async () => {
  const services = (await getCollection('services', ({ data }) => data.locale === 'it')).sort(itOnly);
  const sectors = (await getCollection('sectors', ({ data }) => data.locale === 'it')).sort(itOnly);
  const routes = (await getCollection('routes', ({ data }) => data.locale === 'it')).sort(itOnly);

  const out: string[] = [];
  out.push('# BYLO Transport', '');
  out.push(
    '> Azienda italiana di trasporti ADR (merci pericolose) e logistica integrata. Operatività nazionale e internazionale dalla sede di Ospiate di Bollate (MI). Classi ADR servite: 2, 3, 4.1, 4.2, 5.1, 5.2, 6.1, 8, 9. Parte del gruppo BYLO Group.',
    '',
  );

  out.push('## Servizi', '');
  for (const s of services) {
    out.push(`- [${s.data.title}](${ORIGIN}/servizi/${slugOf(s.slug)}/): ${trunc(s.data.seo.description)}`);
  }
  out.push('');

  out.push('## Settori serviti', '');
  for (const s of sectors) {
    out.push(`- [${s.data.title}](${ORIGIN}/settori/${slugOf(s.slug)}/): ${trunc(s.data.seo.description)}`);
  }
  out.push('');

  out.push('## Tratte tipiche', '');
  for (const r of routes) {
    const meta = [
      r.data.distanceKm ? `~${r.data.distanceKm} km` : null,
      r.data.transitTimeHours ? `~${r.data.transitTimeHours} h di guida` : null,
    ]
      .filter(Boolean)
      .join(', ');
    out.push(`- [${r.data.origin}–${r.data.destination}](${ORIGIN}/tratte/${slugOf(r.slug)}/)${meta ? `: ${meta}` : ''}`);
  }
  out.push('');

  out.push('## Identità legale e contatti', '');
  out.push(`- ${LEGAL_TRANSPORT.name} · P.IVA ${LEGAL_TRANSPORT.vat}`);
  out.push(`- Sede operativa: ${CONTACTS.hq.address}`);
  out.push(`- Email operativo: ${CONTACTS.hq.email}`);
  out.push(`- Email amministrazione: ${CONTACTS.hq.emailAdmin}`);
  out.push(`- Telefono: ${CONTACTS.hq.phone} / ${CONTACTS.hq.phoneAlt} / ${CONTACTS.hq.phoneAlt2}`);

  return new Response(out.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
