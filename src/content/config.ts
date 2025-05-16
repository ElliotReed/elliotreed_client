import { defineCollection, z, } from "astro:content";

const projects = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        cover: image().optional(),
        coverAltText: z.string().optional(),
        coverCredit: z.string().optional(),
        coverCreditLink: z.string().optional(),
        description: z.string(),
        musicians: z.array(z.string()),
        startDate: z.string()
            .regex(/^\d{4}\??$|^\?$/, {
                message: 'Must be a 4-digit year, optionally followed by "?", or just "?"',
            })
            .optional(),
        endDate: z.string()
            .regex(/^\d{4}\??$|^\?$/, {
                message: 'Must be a 4-digit year, optionally followed by "?", or just "?"',
            })
            .optional(),
        styles: z.array(z.string()),
        title: z.string(),
    }),
});

const composition = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        author: z.string().optional(),
        category: z.string(),
        cover: image().optional(),
        coverAltText: z.string().optional(),
        coverCredit: z.string().nullable().optional(),
        coverCreditLink: z.string().nullable().optional(),
        description: z.string(),
        publishedDate: z.date(),
        updatedDate: z.date().nullable().optional(),
        tags: z.array(z.string()),
        title: z.string(),
    }),
});

const guitar = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        author: z.string().optional(),
        category: z.string(),
        cover: image().optional(),
        coverAltText: z.string().optional(),
        coverCredit: z.string().optional(),
        coverCreditLink: z.string().optional(),
        description: z.string(),
        publishedDate: z.date(),
        updatedDate: z.date().nullable().optional(),
        tags: z.array(z.string()),
        title: z.string(),
    }),
});

const notation = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        author: z.string().optional(),
        category: z.string(),
        cover: image().optional(),
        coverAltText: z.string().optional(),
        coverCredit: z.string().optional(),
        coverCreditLink: z.string().optional(),
        description: z.string(),
        publishedDate: z.date(),
        updatedDate: z.date().nullable().optional(),
        tags: z.array(z.string()),
        title: z.string(),
    }),
});

const recording = defineCollection({
    type: "content",

    schema: ({ image }) => z.object({
        author: z.string().optional(),
        category: z.string(),
        cover: image().optional(),
        coverAltText: z.string().optional(),
        coverCredit: z.string().optional(),
        coverCreditLink: z.string().optional(),
        description: z.string(),
        publishedDate: z.date(),
        updatedDate: z.date().nullable().optional(),
        tags: z.array(z.string()),
        title: z.string(),
    }),
});

const singing = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        author: z.string().optional(),
        category: z.string(),
        cover: image().optional(),
        coverAltText: z.string().optional(),
        coverCredit: z.string().optional(),
        coverCreditLink: z.string().optional(),
        description: z.string(),
        publishedDate: z.date(),
        updatedDate: z.date().nullable().optional(),
        tags: z.array(z.string()),
        title: z.string(),
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
