import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    readTime: z.string().optional(),
    cover: z.string().optional()
  })
});

export const collections = { articles };
