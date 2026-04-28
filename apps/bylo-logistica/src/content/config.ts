import { defineCollection, z } from 'astro:content';

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
  type: 'content',
  schema: z.object({
    locale: localeSchema,
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
  type: 'content',
  schema: z.object({
    locale: localeSchema,
    seo: seoSchema,
    title: z.string(),
    intro: z.string(),
    faq: z.array(faqItem).default([]),
    relatedServices: z.array(z.string()).default([]),
    publishedAt: z.coerce.date().optional(),
  }),
});

const routes = defineCollection({
  type: 'content',
  schema: z.object({
    locale: localeSchema,
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
  type: 'content',
  schema: z.object({
    locale: localeSchema,
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
  type: 'content',
  schema: z.object({
    locale: localeSchema,
    title: z.string(),
    items: z.array(faqItem),
  }),
});

export const collections = { services, sectors, routes, blog, faqs };
