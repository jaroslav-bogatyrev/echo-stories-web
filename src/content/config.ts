import { defineCollection, z } from 'astro:content';
import { glob } from "astro/loaders";

const projectsCollection = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/index.mdx",
  }),
  schema: () => z.object({
    title: z.object({
      en: z.string(),
      cz: z.string().optional(),
    }),
    logline: z.object({
      en: z.string(),
      cz: z.string().optional(),
    }).optional(),
    year: z.number(),
    duration: z.string().optional(),
    category: z.array(z.enum(['short', 'feature', 'documentary', 'experimental', 'animation', 'Drama', 'Folk Horror'])),
    status: z.enum(['in development', 'in postproduction', 'released']),
    image: z.string(),
    credits: z.array(z.object({
      role: z.string(),
      name: z.string(),
    })),
    video: z.object({
      provider: z.enum(['youtube', 'vimeo', 'direct']),
      id: z.string().optional(),
      url: z.string().optional(),
      aspect: z.enum(['16:9', '4:3', '21:9', '1:1']).optional(),
    }).optional(),
    stills: z.array(z.object({
      src: z.string(),
      alt: z.string(),
    })).optional(),
    tags: z.array(z.string()).optional(),
    support: z.array(z.string()).optional(),
    pitching: z.array(z.object({
      name: z.string(),
      year: z.number().optional(),
      award: z.string().optional(),
    })).optional(),
    festivals: z.array(z.object({
      name: z.string(),
      year: z.number().optional(),
      award: z.string().optional(),
    })).optional(),
    synopsis: z.object({
      en: z.string().optional(),
      cz: z.string().optional(),
    }).optional(),
    links: z.object({
      instagram: z.string().optional(),
      facebook: z.string().optional(),
      website: z.string().optional(),
      websiteText: z.string().optional(),
    }).optional(),
    order: z.number().optional(),
    locked: z.boolean().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
