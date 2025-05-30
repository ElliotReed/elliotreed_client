#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from 'node:url';
import inquirer from "inquirer";
import chalk from "chalk";
import nodeFileDialog from "node-file-dialog";

import { capitalize, getCurrentDateString } from "./utils/functions.js";

import { help } from "./help.js";
import content from "./content.js";
import sidecar from "./imageMetadataGenerator.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function handleAddImageMetadata() {
    try {
        console.log(
            chalk.bgGreen.black.bold(' 📂  Select the Source File '),
            chalk.greenBright('(e.g. /assets/image.jpg)')
        );
        const sourceImagePath = await sidecar.selectSourceImageFile();
        const metadataFilePath = sidecar.generateMetadataFilePath(sourceImagePath);

        const metadataExists = await sidecar.checkMetadataFileExists(metadataFilePath);
        if (metadataExists) {
            console.log(chalk.red(`Metadata file already exists at: ${metadataFilePath}`));
            const answer = await inquirer.prompt(sidecar.createOverwritePrompt());
            if (!answer.overwrite) {
                console.log(chalk.yellow('Operation cancelled.'));
                return;
            }
        }

        console.log('');

        const metadataValues = await inquirer.prompt(sidecar.createMetadataPrompts());
        const metadataContent = sidecar.createMetadataContent(metadataValues);

        sidecar.writeMetadataFile(metadataFilePath, metadataContent);
        console.log(chalk.green(`${path.basename(metadataFilePath)} was successfully created!`));

    } catch (error) {
        console.error(chalk.red('❌ Error creating metadata file:'), error.message);
    }
}


function noteTemplate(answer) {
    const { title, categories } = answer;

    const noteContent =
        `---
    layout: note
    date: ${getCurrentDateString()}
    title: "${capitalize(title)}"
    categories: ["${categories.toLowerCase()}"]
    ---
    
    - toc
    {:toc}
    `
    return noteContent;
}

(async function () {
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What do you want to do?',
            choices: [
                content.ADD_CONTENT_FILE_TEXT,
                sidecar.ADD_IMAGE_METADATA_TEXT,
                'Exit',
            ],
        },
    ]);

    if (action === content.ADD_CONTENT_FILE_TEXT) {
        let verified = false;
        do {
            const { collection } = await inquirer.prompt(content.selectCollectionPrompt());
            const { category } = await inquirer.prompt(content.selectCategoryPrompt(collection));
            const { tags } = await inquirer.prompt(content.selectTagsPrompt(collection));
            const { fileExtension } = await inquirer.prompt(content.selectFileExtensionPrompt());
            const questions = content.inputValuesPrompt(collection);
            const answers = await inquirer.prompt(questions);
            answers.category = category;
            answers.tags = tags;
            console.log('Collection: ', chalk.cyan(collection));

            console.log('---');
            Object.entries(answers)
                .sort(([aKey], [bKey]) => aKey.localeCompare(bKey))
                .forEach(([key, value]) => {
                    console.log(`${key}: ${chalk.cyan(value)}`);
                });
            console.log('---');

            const confirm = await inquirer.prompt([{
                type: 'confirm',
                name: 'verify',
                message: 'Are you sure you want to create this file?',
                default: true,
            }]);

            verified = confirm.verify;
            if (verified) {
                content.createContentFile(collection, category, answers, fileExtension);
            }
        } while (!verified)

    } else if (action === sidecar.ADD_IMAGE_METADATA_TEXT) {
        handleAddImageMetadata();
    }

    else {
        console.log('Bye!');
    }







    const args = process.argv.slice(2);

    if (args.includes('-h') || args.includes('--help')) {
        console.log(help());
    }

    if (args.includes('-n') || args.includes('--note')) {
        const answer = await inquirer.prompt([{
            type: 'input',
            message: 'What is the note title?',
            suffix: " (will be auto capitalized)",
            name: 'title',
        }, {
            type: "input",
            message: "What is/are the categories?",
            suffix: " (used in url, use one)",
            name: "categories",
        }])

        const filename = answer.title.toLowerCase().split(' ').join('-') + '.md';
        const filepath = path.join(NOTES_DIRECTORY, filename);

        if (fs.existsSync(filepath)) {
            console.log(chalk.red(`File at ${filepath} already exists.`));
            return
        }

        fs.writeFile(filepath, noteTemplate(answer), 'utf-8', (err) => {
            if (err) {
                console.log('err: ', err);
            }
            console.log(chalk.green(`${filename} was successfully created!`));
        });
    }
})();