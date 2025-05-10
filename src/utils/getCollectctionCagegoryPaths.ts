import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export async function getCollectionCategoryPaths(collectionName: string) {
    const allPosts: CollectionEntry<typeof collectionName>[] =
        await getCollection(collectionName);

    const categorySet = new Set(
        allPosts.map((entry) => entry.slug.split("/")[0]),
    );

    return Array.from(categorySet).map((category) => ({
        params: { category },
    }));
}
