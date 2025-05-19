import type { CollectionEntry } from "astro:content";

export function sortFrontmatterByDataKey<T>(
    collection: CollectionEntry<T>[],
    dataKey: string,
): CollectionEntry<T>[] {
    return collection.sort((a, b) => {
        const aData = a.data[dataKey];
        const bData = b.data[dataKey];

        if (aData < bData) return -1;
        if (aData > bData) return 1;
        return 0;
    });
}