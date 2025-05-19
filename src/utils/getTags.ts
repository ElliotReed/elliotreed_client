import type { CollectionEntry } from "astro:content";

export function getTags<T extends string>(
    collection: CollectionEntry<T>[],
    tagDataKey: string) {
    const tags = collection.flatMap(
        (entry) => entry.data[tagDataKey] ?? [],
    );
    return [...new Set(tags)];
}