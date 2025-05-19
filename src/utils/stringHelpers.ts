export function capitalize(str: string) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeAllWords(str: string) {
    if (!str) return '';
    return str
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export function titleCase(input: string): string {
    const smallWords = new Set([
        'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for',
        'in', 'nor', 'of', 'on', 'or', 'so', 'the', 'to', 'up', 'yet'
    ]);

    return input
        .toLowerCase()
        .split(' ')
        .map((word, index) => {
            if (index === 0 || !smallWords.has(word)) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
            return word;
        })
        .join(' ');
}

