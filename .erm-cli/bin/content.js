import fs from "node:fs";
import path from "node:path";

import dialog from 'node-file-dialog';
import chalk from "chalk";

import { capitalize } from "./utils/functions.js";
import { collectionDefaults } from "./utils/collectionDefaults.js";
import { getNoteContentChoices, getProjectContentChoices } from "./utils/contentChoices.js";
import { getCurrentDateString } from "./utils/functions.js";

const ADD_CONTENT_FILE_TEXT = 'Add content file';

function getDefaultAuthor() {
    return 'Elliot Reed';
}

let noteChoices = null;
function setNoteChoicesIfNull() {
    if (!noteChoices) {
        noteChoices = getNoteContentChoices()
    }
}

let projectChoices = null;
function setProjectChoicesIfNull() {
    if (!projectChoices) {
        projectChoices = getProjectContentChoices()
    }
}

function getCollectionNames() {
    return Object.keys(collectionDefaults).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
    );
}

// Prompts
function projectValuesPrompt() {
    return [
        {
            type: 'input',
            name: 'title',
            message: 'Enter the projects title',
            default: ''
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the description',
            default: ''
        },
        {
            type: 'input',
            name: 'startDate',
            message: 'Enter the project start date',
            default: ''
        },
        {
            type: 'input',
            name: 'endDate',
            message: 'Enter the project end date',
            default: ''
        },
    ]
}

function noteValuesPrompt() {
    return [
        {
            type: 'input',
            name: 'title',
            message: 'Enter the note title',
            default: ''
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the note description',
            default: ''
        },
        {
            type: 'input',
            name: 'publishedDate',
            message: 'Enter the published date',
            default: getCurrentDateString(),
        },
        {
            type: 'input',
            name: 'author',
            message: 'Enter the note author',
            default: getDefaultAuthor(),
        },
    ]
}

function selectCollectionPrompt() {
    const collectionNames = getCollectionNames();
    return [
        {
            type: 'list',
            name: 'collectionName',
            message: 'Which collection do you want to add a file to?',
            choices: collectionNames,
        },
    ];
}

function selectCategoryPrompt() {
    setNoteChoicesIfNull();
    return [
        {
            type: 'list',
            name: 'category',
            message: 'Select the note category',
            choices: noteChoices.categories,
        }
    ];
}

function selectTagsPrompt() {
    setNoteChoicesIfNull();
    return [
        {
            type: 'checkbox',
            name: 'tags',
            message: 'Which tags do you want to add to the file?',
            choices: noteChoices.tags,
        },
    ];
}

function selectMusiciansPrompt() {
    setProjectChoicesIfNull();
    return [
        {
            type: 'checkbox',
            name: 'musicians',
            message: 'Which musicians do you want to add to the file?',
            choices: projectChoices.musicians,
        },
    ];
}

function selectStylesPrompt() {
    setProjectChoicesIfNull();
    return [
        {
            type: 'checkbox',
            name: 'styles',
            message: 'Which styles do you want to add to the file?',
            choices: projectChoices.styles,
        },
    ];
}

function selectFileExtensionPrompt() {
    return [
        {
            type: 'list',
            name: 'fileExtension',
            message: 'What type of file do you want to create?',
            choices: ['md', 'mdx'],
        },
    ];
}

// User input
async function selectDestinationDirectory() {
    try {
        const selectedDirs = await dialog({
            type: 'directory',
        });

        if (!selectedDirs || selectedDirs.length === 0) {
            throw new Error('No directory selected');
        }

        return selectedDirs[0]; // Return the selected directory path
    } catch (error) {
        throw error;
    }
}


async function createContentFile(collectionName, contentDirectory, fileExtension = 'md', frontmatter) {
    if (!path.normalize(contentDirectory).split(path.sep).includes(collectionName)) {
        console.log(chalk.red(`${contentDirectory} is invalid, must be in src/contents/${collectionName}.`));
        return;
    }
    const fileName = `${frontmatter.title.toLowerCase().replace(/\s+/g, '-')}.${fileExtension}`;
    const filePath = path.join(contentDirectory, fileName);

    let content = `---\n`;
    if (frontmatter.author) content += `author: "${capitalize(frontmatter.author)}"\n`;
    if (frontmatter.category) content += `category: "${frontmatter.category}"\n`;
    content += `cover: "${frontmatter.cover}"\n`;
    content += `coverAltText: "${frontmatter.coverAltText}"\n`;
    content += `coverCredit: "${frontmatter.coverCredit}"\n`;
    content += `coverCreditLink: "${frontmatter.coverCreditLink}"\n`;
    content += `description: "${frontmatter.description}"\n`;
    if (frontmatter.musicians) content += `musicians: [${frontmatter.musicians.map(musician => `"${musician}"`).join(', ')}]\n`;
    if (collectionName === 'notes') {
        content += `publishedDate: "${frontmatter.publishedDate}"\n`;
        content += `updatedDate: ""\n`;
    } else if (collectionName === 'projects') {
        content += `startDate: "${frontmatter.startDate}"\n`;
        content += `endDate: "${frontmatter.endDate}"\n`;
    }
    if (frontmatter.styles) content += `styles: [${frontmatter.styles.map(style => `"${style}"`).join(', ')}]\n`;
    if (frontmatter.tags) content += `tags: [${frontmatter.tags.map(tag => `"${tag}"`).join(', ')}]\n`;
    content += `title: "${capitalize(frontmatter.title)}"\n`;
    content += `---\n\n`;

    if (fs.existsSync(filePath)) {
        console.log(chalk.red(`File at ${filePath} already exists.`));
        return;
    }

    try {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(chalk.green(`${fileName} was successfully created!`));
    } catch (err) {
        console.error('Error writing file:', err);
    }
}

const content = {
    ADD_CONTENT_FILE_TEXT,
    getCollectionNames,
    selectCollectionPrompt,
    selectDestinationDirectory,
    createContentFile,
    selectCategoryPrompt,
    selectFileExtensionPrompt,
    selectTagsPrompt,
    selectMusiciansPrompt,
    selectStylesPrompt,
    projectValuesPrompt,
    noteValuesPrompt
};

export default content;



