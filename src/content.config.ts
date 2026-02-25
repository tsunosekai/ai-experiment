import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const logs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/logs' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    theme: z.string().optional(),
    status: z.enum(['exploration', 'developing', 'promising', 'breakthrough']).optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    updated: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const ideas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ideas' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    status: z.enum(['raw', 'developing', 'testable', 'verified', 'discarded']).optional(),
  }),
});

export const collections = { logs, notes, ideas };
