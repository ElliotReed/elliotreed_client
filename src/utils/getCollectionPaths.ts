import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export async function getCollectionPaths(collectionName: string) {
    const allArticles = await getCollection(collectionName);

    // Only consider posts whose slug contains a "/" (i.e. has category and a non-index slug part)
    const filteredArticles = allArticles.filter(
        (article: CollectionEntry<typeof collectionName>) => article.slug.includes("/"),
    );

    return filteredArticles.map((article: CollectionEntry<typeof collectionName>) => {
        const [category, slug] = article.slug.split("/");

        return {
            params: { category, slug },
            props: { article },
        };
    });
}