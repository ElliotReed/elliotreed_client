import type { CollectionEntry } from "astro:content";

export function sortByFrontmatterDataKey<T>(
    collection: CollectionEntry<T>[],
    dataKey: string,
    desc: boolean = false
): CollectionEntry<T>[] {
    return collection.sort((a, b) => {
        const aData = a.data[dataKey];
        const bData = b.data[dataKey];

        let result = 0;

        // Handle strings with locale-aware, case-insensitive comparison
        if (typeof aData === "string" && typeof bData === "string") {
            result = aData.localeCompare(bData, undefined, { sensitivity: "base" });
        } else if (aData < bData) {
            result = -1;
        } else if (aData > bData) {
            result = 1;
        }

        return desc ? -result : result;
    });
}
