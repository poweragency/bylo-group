import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { renderOgPng } from '@bylo/ui/seo/og.ts';

export async function getStaticPaths() {
  const sectors = await getCollection('sectors', ({ data }) => data.locale === 'en');
  return sectors.map((sector) => ({
    params: { slug: sector.slug.split('/').pop() },
    props: { sector },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { sector } = props as any;
  const png = await renderOgPng({
    brand: 'transport',
    eyebrow: 'Sector',
    title: sector.data.title,
    subtitle: sector.data.intro,
    domain: 'transport.bylogroup.it',
  });
  return new Response(png, {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
};
