import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { renderOgPng } from '@bylo/ui/seo/og.ts';

export async function getStaticPaths() {
  const routes = await getCollection('routes', ({ data }) => data.locale === 'it');
  return routes.map((route) => ({
    params: { slug: route.slug.split('/').pop() },
    props: { route },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { route } = props as any;
  const png = await renderOgPng({
    brand: 'transport',
    eyebrow: 'Tratta',
    title: `${route.data.origin} → ${route.data.destination}`,
    subtitle: route.data.intro,
    domain: 'transport.bylogroup.it',
  });
  return new Response(png, {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
};
