import type { CollectionEntry } from "astro:content";

export function getEntryFilename<T>(entry: CollectionEntry<T>) {
    const slugArray = entry.slug.split("/");
    const filename = slugArray[slugArray.length - 1];
    return filename;
}

export function sortCollectionByDate<T>(collection: CollectionEntry<T>[]) {
    return collection.sort((a, b) => {
        function getDateToSortBy(note: CollectionEntry<"notes">) {
            return note.data.updatedDate
                ? note.data.updatedDate
                : note.data.publishedDate;
        }

        return (
            new Date(getDateToSortBy(b)).getTime() -
            new Date(getDateToSortBy(a)).getTime()
        );
    });
}

