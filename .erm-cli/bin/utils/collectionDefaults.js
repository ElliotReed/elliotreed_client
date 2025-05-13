import { capitalize, getCurrentDateString } from "./functions.js";

function getDefaultAuthor() {
    return 'Elliot Reed';
}

export const collectionDefaults = {
    projects: {
        author: getDefaultAuthor,
        category: 'project',
        cover: '',
        coverCredit: '',
        coverCreditLink: '',
        description: '',
        publishedDate: getCurrentDateString(),
        tags: '',
        title: 'Untitled Project',
    },
    composition: {
        author: getDefaultAuthor(),
        category: 'composition',
        cover: '',
        coverCredit: '',
        coverCreditLink: '',
        description: '',
        publishedDate: getCurrentDateString(),
        tags: '',
        title: 'Untitled Composition',
    },
    guitar: {
        author: getDefaultAuthor(),
        category: 'guitar',
        cover: '',
        coverCredit: '',
        coverCreditLink: '',
        description: '',
        publishedDate: getCurrentDateString(),
        tags: '',
        title: 'Untitled Guitar Piece',
    },
    notation: {
        author: getDefaultAuthor(),
        category: 'notation',
        cover: '',
        coverCredit: '',
        coverCreditLink: '',
        description: '',
        publishedDate: getCurrentDateString(),
        tags: '',
        title: 'Untitled Notation',
    },
    recording: {
        author: getDefaultAuthor(),
        category: 'recording',
        cover: '',
        coverCredit: '',
        coverCreditLink: '',
        description: '',
        publishedDate: getCurrentDateString(),
        tags: '',
        title: 'Untitled Recording',
    },
    singing: {
        author: getDefaultAuthor(),
        category: 'singing',
        cover: '',
        coverCredit: '',
        coverCreditLink: '',
        description: '',
        publishedDate: getCurrentDateString(),
        tags: '',
        title: 'Untitled Song',
    },
};