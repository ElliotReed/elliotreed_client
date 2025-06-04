import { capitalize, getCurrentDateString } from "./functions.js";

function getDefaultAuthor() {
    return 'Elliot Reed';
}

export const collectionDefaults = {
    projects: {
        cover: '',
        coverAltText: '',
        coverCredit: '',
        coverCreditLink: '',
        description: '',
        musicians: ['Elliot Reed'],
        startDate: '',
        endDate: '',
        styles: [],
        title: '',
    },
    notes: {
        author: getDefaultAuthor(),
        category: '',
        cover: '',
        coverAltText: '',
        coverCredit: '',
        coverCreditLink: '',
        description: '',
        publishedDate: getCurrentDateString(),
        updatedDate: '',
        tags: [],
        title: '',
    },
};