import type { CollectionNames } from "@/types/collections";
import { getCollection, type CollectionEntry } from "astro:content";

export async function getArticleIfNotCategory(
    collectionName: CollectionNames,
    category: string,
) {
    let article = undefined;
    const allArticles = (await getCollection(
        collectionName,
    )) as CollectionEntry<CollectionNames>[];

    const trueCategories = new Set(
        allArticles.map((entry) => entry.data.category),
    );
    const isArticle = ![...trueCategories].includes(category);
    if (isArticle) {
        article = allArticles.find((article) => article.slug === category);
    }
    return article;
}