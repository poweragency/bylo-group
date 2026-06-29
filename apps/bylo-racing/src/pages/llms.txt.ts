import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { LEGAL_TOMMY, CONTACTS_RACING } from '@bylo/ui/index.ts';

// llms.txt generato dalle content collection: sempre completo e in sync col
// contenuto reale (no drift). Sostituisce il vecchio public/llms.txt statico,
// che elencava solo 5/20 marche e 5/15 zone.
export const prerender = true;

const ORIGIN = 'https://tommy.bylogroup.it';

const byName = (a: { data: { name: string } }, b: { data: { name: string } }) =>
  a.data.name.localeCompare(b.data.name);

function slugOf(slug: string): string {
  return slug.split('/').pop() ?? slug;
}

function trunc(s: string, n = 150): string {
  const clean = s.replace(/\s+/g, ' ').trim();
  return clean.length > n ? clean.slice(0, n).replace(/\s+\S*$/, '') + '…' : clean;
}

export const GET: APIRoute = async () => {
  const services = (await getCollection('services', ({ data }) => data.locale === 'it')).sort((a, b) =>
    a.slug.localeCompare(b.slug),
  );
  const brands = (await getCollection('brands', ({ data }) => data.locale === 'it')).sort(byName);
  const zones = (await getCollection('zones', ({ data }) => data.locale === 'it')).sort(byName);

  const out: string[] = [];
  out.push('# Tommy By', '');
  out.push(
    '> Officina e carrozzeria multimarche italiana per auto e moto. Tagliandi, riparazioni meccaniche ed elettroniche, pneumatici, igienizzazione, auto sostitutive. Carrozzeria con verniciatura a forno ad acqua. Revisioni ministeriali fino a 35 quintali. Sede unica a Mazzo di Rho (MI), Via Venanzio Buzzi 9, alle porte di Milano. Parte del gruppo BYLO Group.',
    '',
  );

  out.push('## Servizi', '');
  for (const s of services) {
    out.push(`- [${s.data.title}](${ORIGIN}/servizi/${slugOf(s.slug)}/): ${trunc(s.data.seo.description)}`);
  }
  out.push('');

  out.push('## Marche servite', '');
  for (const b of brands) {
    out.push(`- [${b.data.name}](${ORIGIN}/marche/${slugOf(b.slug)}/)`);
  }
  out.push('', '> Lavoriamo comunque su qualsiasi marca di auto e moto, di qualunque modello.', '');

  out.push('## Zone servite', '');
  for (const z of zones) {
    out.push(`- [${z.data.name}](${ORIGIN}/zone/${slugOf(z.slug)}/)`);
  }
  out.push('');

  out.push('## Identità legale e contatti', '');
  out.push(`- ${LEGAL_TOMMY.name} · P.IVA ${LEGAL_TOMMY.vat}`);
  out.push(`- Sede: ${CONTACTS_RACING.officina.address} · ${CONTACTS_RACING.officina.phone}`);
  out.push(`- Officina (Ref. ${CONTACTS_RACING.officina.referent}): ${CONTACTS_RACING.officina.email}`);
  out.push(`- Carrozzeria (Ref. ${CONTACTS_RACING.carrozzeria.referent}): ${CONTACTS_RACING.carrozzeria.email}`);

  return new Response(out.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
