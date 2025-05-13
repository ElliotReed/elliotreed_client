import fs from "node:fs";
import path from "node:path";
import { capitalize } from "./utils/functions.js";
import { CONTENT_DIRECTORY } from "./utils/constants.js";
import { collectionDefaults } from "./utils/collectionDefaults.js";
import { collectionCategories, collectionTags } from "./contentChoices.js";

const ADD_CONTENT_FILE_TEXT = 'Add content file';

function getCollectionNames() {
    return Object.keys(collectionDefaults);
}

function selectCollectionPrompt() {
    const collectionNames = getCollectionNames();
    return [
        {
            type: 'list',
            name: 'collection',
            message: 'Which collection do you want to add a file to?',
            choices: collectionNames,
        },
    ];
}

function selectCategoryPrompt(collectionName) {
    return [
        {
            type: 'list',
            name: 'category',
            message: 'Which category do you want to add a file to?',
            choices: collectionCategories[collectionName],
        },
    ];
}

function selectTagsPrompt(collectionName) {
    return [
        {
            type: 'checkbox',
            name: 'tags',
            message: 'Which tags do you want to add to the file?',
            choices: collectionTags[collectionName],
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

const exludedKeys = ['category', 'tags'];

function isExcludedKey(key) {
    return exludedKeys.includes(key);
}

function collectionPromptInputFilter(keys) {
    return keys.filter(key => !isExcludedKey(key));
}

function inputValuesPrompt(collectionName) {
    const defaults = collectionDefaults[collectionName];

    const userInputs = collectionPromptInputFilter(Object.keys(defaults));

    return userInputs.map(key => {
        const defaultValue = defaults[key];
        return {
            type: 'input',
            name: key,
            message: `Enter ${key} (${defaultValue}):`,
            default: defaultValue,
        };
    });
}

async function createContentFile(collectionName, category, answers, fileExtension = 'md') {
    const collectionPath = path.join(CONTENT_DIRECTORY, collectionName);
    const collectionCategoryPath = path.join(collectionPath, category);
    const fileName = `${answers.title.toLowerCase().replace(/\s+/g, '-')}.${fileExtension}`;
    const filePath = path.join(collectionCategoryPath, fileName);

    let content = `---\n`;
    content += `title: "${capitalize(answers.title)}"\n`;
    content += `author: "${capitalize(answers.author)}"\n`;
    content += `publishedDate: "${answers.publishedDate}"\n`;
    content += `category: "${category}"\n`;
    content += `tags: [${answers.tags.map(tag => `"${tag}"`).join(', ')}]\n`;
    content += `description: "${answers.description}"\n`;
    content += `cover: "${answers.cover}"\n`;
    content += `coverCredit: "${answers.coverCredit}"\n`;
    content += `coverCreditLink: "${answers.coverCreditLink}"\n`;
    content += `---\n\n`;

    if (fs.existsSync(filePath)) {
        console.log(chalk.red(`File at ${filePath} already exists.`));
        return
    }

    fs.writeFileSync(filePath, content, 'utf-8', (err) => {
        if (err) {
            console.log('err: ', err);
        }
        console.log(chalk.green(`${filename} was successfully created!`));
    });
    // const content = `---`;
}

const content = {
    createContentFile,
    getCollectionNames,
    selectCollectionPrompt,
    selectCategoryPrompt,
    selectFileExtensionPrompt,
    selectTagsPrompt,
    inputValuesPrompt,
    ADD_CONTENT_FILE_TEXT,
};

export default content;



