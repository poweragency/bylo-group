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
    eyebrow: z.string().optional(),
    title: z.string(),
    intro: z.string(),
    bullets: z.array(z.string()).default([]),
    faq: z.array(faqItem).default([]),
    relatedServices: z.array(z.string()).default([]),
    relatedSectors: z.array(z.string()).default([]),
    relatedRoutes: z.array(z.string()).default([]),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
});

const sectors = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/sectors' }),
  schema: z.object({
    locale: localeSchema,
    slug: z.string(),
    seo: seoSchema,
    title: z.string(),
    intro: z.string(),
    faq: z.array(faqItem).default([]),
    relatedServices: z.array(z.string()).default([]),
    publishedAt: z.coerce.date().optional(),
  }),
});

const routes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/routes' }),
  schema: z.object({
    locale: localeSchema,
    slug: z.string(),
    seo: seoSchema,
    origin: z.string(),
    destination: z.string(),
    distanceKm: z.number().optional(),
    transitTimeHours: z.number().optional(),
    intro: z.string(),
    faq: z.array(faqItem).default([]),
    relatedServices: z.array(z.string()).default([]),
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
    author: z.string().default('BYLO Transport'),
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

export const collections = { services, sectors, routes, blog, faqs };
