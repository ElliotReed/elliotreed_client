import { defineCollection, z, } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        publishedDate: z.date(),
        tags: z.array(z.string()),
    }),
});

const singing = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        author: z.string().optional(),
        category: z.string(),
        description: z.string(),
        publishedDate: z.date(),
        tags: z.array(z.string()),
        title: z.string(),
        cover: image().optional(),
        coverCredit: z.string().optional(),
    }),
});

const flyers = defineCollection({
    loader: glob({ pattern: "**/*.html", base: "./src/content/flyers" }),
});

export const collections = {
    articles,
    singing,
    flyers,
};
