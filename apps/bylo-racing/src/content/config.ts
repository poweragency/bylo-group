import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localeSchema = z.enum(['it', 'en']);

const seoSchema = z.object({
  title: z.string(),
  description: z.string(),
  ogImage: z.string().optional(),
  noindex: z.boolean().default(false),
});

const faqItem = z.object({
  q: z.string(),
  a: z.string(),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object({
    locale: localeSchema,
    slug: z.string(),
    seo: seoSchema,
    category: z.enum(['officina', 'carrozzeria', 'revisione', 'gommista', 'altro']),
    title: z.string(),
    intro: z.string(),
    bullets: z.array(z.string()).default([]),
    faq: z.array(faqItem).default([]),
    relatedServices: z.array(z.string()).default([]),
    relatedBrands: z.array(z.string()).default([]),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
});

const brands = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/brands' }),
  schema: z.object({
    locale: localeSchema,
    slug: z.string(),
    seo: seoSchema,
    name: z.string(),
    intro: z.string(),
    services: z.array(z.string()).default([]),
    faq: z.array(faqItem).default([]),
    publishedAt: z.coerce.date().optional(),
  }),
});

const zones = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/zones' }),
  schema: z.object({
    locale: localeSchema,
    slug: z.string(),
    seo: seoSchema,
    name: z.string(),
    province: z.string(),
    intro: z.string(),
    geo: z
      .object({
        latitude: z.number(),
        longitude: z.number(),
      })
      .optional(),
    faq: z.array(faqItem).default([]),
    publishedAt: z.coerce.date().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    locale: localeSchema,
    slug: z.string(),
    seo: seoSchema,
    title: z.string(),
    excerpt: z.string(),
    cover: z.string().optional(),
    author: z.string().default('Tommy Racing'),
    tags: z.array(z.string()).default([]),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/faqs' }),
  schema: z.object({
    locale: localeSchema,
    slug: z.string(),
    title: z.string(),
    items: z.array(faqItem),
  }),
});

export const collections = { services, brands, zones, blog, faqs };
