import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.enum(['ejecutado', 'en_ejecucion']),
    category: z.string(), // e.g. "01 — DISEÑO GENERAL Y CONSTRUCCIÓN"
    coverImage: z.string(), // Remote URL from unsplash
    aerialImage: z.string().optional(),
    galleryImage: z.string().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};
