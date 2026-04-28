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
  type: 'content',
  schema: z.object({
    locale: localeSchema,
    seo: seoSchema,
    name: z.string(),
    intro: z.string(),
    services: z.array(z.string()).default([]),
    faq: z.array(faqItem).default([]),
    publishedAt: z.coerce.date().optional(),
  }),
});

const zones = defineCollection({
  type: 'content',
  schema: z.object({
    locale: localeSchema,
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
  type: 'content',
  schema: z.object({
    locale: localeSchema,
    seo: seoSchema,
    title: z.string(),
    excerpt: z.string(),
    cover: z.string().optional(),
    author: z.string().default('Tommy By'),
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

export const collections = { services, brands, zones, blog, faqs };
