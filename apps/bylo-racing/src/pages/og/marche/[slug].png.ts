import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { renderOgPng } from '@bylo/ui/seo/og.ts';

export async function getStaticPaths() {
  const brands = await getCollection('brands', ({ data }) => data.locale === 'it');
  return brands.map((brand) => ({
    params: { slug: brand.slug.split('/').pop() },
    props: { brand },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { brand } = props as any;
  const png = await renderOgPng({
    brand: 'tommy',
    eyebrow: 'Marca servita',
    title: `Officina ${brand.data.name}`,
    subtitle: brand.data.intro,
    domain: 'tommy.bylogroup.it',
  });
  return new Response(png, {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
};
