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

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    locale: localeSchema,
    slug: z.string(),
    seo: seoSchema,
    eyebrow: z.string().optional(),
    title: z.string(),
    intro: z.string().optional(),
    faq: z.array(faqItem).default([]),
    related: z.array(z.string()).default([]),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
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
    author: z.string().default('BYLO Group'),
    tags: z.array(z.string()).default([]),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
  }),
});

export const collections = { pages, blog };
