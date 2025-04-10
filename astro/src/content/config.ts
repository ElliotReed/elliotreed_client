// src/content/config.ts
import { defineCollection, z } from "astro:content";

const articles = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        pubDate: z.date(),
        tags: z.array(z.string()),
    }),
});

export const collections = {
    articles,
};
