import { validCategoryIds } from "@/data/category";
import { defineCollection, z, } from "astro:content";

const projectYearValidation = () => z.string()
    .regex(/^$|^[\d?]{4}\??$|^\?$/, {
        message: 'Must be empty, exactly 4 digits/question marks (e.g., "1999", "198?", "20??"), optionally followed by "?", or just "?"',
    })
    .optional();

const projects = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        cover: image().optional(),
        coverAltText: z.string().optional(),
        coverCredit: z.string().optional(),
        coverCreditLink: z.string().optional(),
        description: z.string(),
        musicians: z.array(z.string()),
        startDate: projectYearValidation(),
        endDate: projectYearValidation(),
        styles: z.array(z.string()),
        title: z.string(),
    }),
});

const notes = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        author: z.string().optional(),
        category: z.enum(validCategoryIds),
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
    notes,
    projects,
};
