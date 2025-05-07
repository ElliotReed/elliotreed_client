import { defineCollection, z, } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
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

const composition = defineCollection({
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

const guitar = defineCollection({
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

const notation = defineCollection({
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

const recording = defineCollection({
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

export const collections = {
    projects,
    composition,
    guitar,
    notation,
    recording,
    singing,
};
