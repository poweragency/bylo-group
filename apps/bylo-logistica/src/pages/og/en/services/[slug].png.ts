import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { renderOgPng } from '@bylo/ui/seo/og.ts';

export async function getStaticPaths() {
  const services = await getCollection('services', ({ data }) => data.locale === 'en');
  return services.map((service) => ({
    params: { slug: service.slug.split('/').pop() },
    props: { service },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { service } = props as any;
  const png = await renderOgPng({
    brand: 'transport',
    eyebrow: 'Service',
    title: service.data.title,
    subtitle: service.data.intro,
    domain: 'transport.bylogroup.it',
  });
  return new Response(png, {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
};
