import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { renderOgPng } from '@bylo/ui/seo/og.ts';

export async function getStaticPaths() {
  const zones = await getCollection('zones', ({ data }) => data.locale === 'it');
  return zones.map((zone) => ({
    params: { slug: zone.slug.split('/').pop() },
    props: { zone },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { zone } = props as any;
  const png = await renderOgPng({
    brand: 'tommy',
    eyebrow: `Zona servita · ${zone.data.province}`,
    title: `Officina a ${zone.data.name}`,
    subtitle: zone.data.intro,
    domain: 'tommy.bylogroup.it',
  });
  return new Response(png, {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
};
