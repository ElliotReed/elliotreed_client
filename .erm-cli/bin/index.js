#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from 'node:url';
import inquirer from "inquirer";
import chalk from "chalk";
import nodeFileDialog from "node-file-dialog";

import { capitalize, getCurrentDateString } from "./utils/functions.js";


import content from "./content.js";
import sidecar from "./imageMetadataGenerator.js";
import { getImageContent } from "./getImageContent.js";

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

    return
}

async function handleAddContentFile() {
    const frontmatter = {};
    let contentDirectory;

    function logDirectoryPrompt(collectionName) {
        console.log(
            chalk.bgGreen.black.bold(' 📂  Select the Directory for the Content File '),
            chalk.greenBright(`(e.g. /content/${collectionName}/...)`)
        );
    }
    function logImagePrompt() {
        console.log(
            chalk.bgGreen.white.bold(' 🖼️  Select the image for the cover '),
            chalk.green(`(e.g. /src/assets/images/...)`)
        );
    }

    function displayFrontmatterResult(answers) {
        console.log('---');
        Object.entries(answers)
            .sort(([aKey], [bKey]) => aKey.localeCompare(bKey))
            .forEach(([key, value]) => {
                console.log(`${key}: ${chalk.cyan(value)}`);
            });
        console.log('---');
    }

    try {
        let verified = false;
        do {
            const { collectionName } = await inquirer.prompt(content.selectCollectionPrompt());

            if (collectionName === 'notes') {
                logDirectoryPrompt(collectionName);
                contentDirectory = await content.selectDestinationDirectory();
                const { category } = await inquirer.prompt(content.selectCategoryPrompt());
                const { tags } = await inquirer.prompt(content.selectTagsPrompt());
                logImagePrompt();
                const imageContent = await getImageContent();
                const noteValues = await inquirer.prompt(content.noteValuesPrompt());
                // Add these values to frontmatter 
                Object.assign(frontmatter, noteValues);
                frontmatter.category = category;
                frontmatter.tags = tags;
                frontmatter.cover = imageContent.imagePath;
                frontmatter.coverAltText = imageContent.imageAltText;
                frontmatter.coverCredit = imageContent.imageCreator;
                frontmatter.coverCreditLink = imageContent.imageCreatorLink;
                displayFrontmatterResult(frontmatter);
            } else if (collectionName === 'projects') {
                logDirectoryPrompt(collectionName);
                contentDirectory = await content.selectDestinationDirectory()
                const { musicians } = await inquirer.prompt(content.selectMusiciansPrompt());
                const { styles } = await inquirer.prompt(content.selectStylesPrompt());
                logImagePrompt();
                const imageContent = await getImageContent();
                const projectValues = await inquirer.prompt(content.projectValuesPrompt());
                // Add these values to frontmatter 
                Object.assign(frontmatter, projectValues);
                frontmatter.musicians = musicians;
                frontmatter.styles = styles;
                frontmatter.cover = imageContent.imagePath;
                frontmatter.coverAltText = imageContent.imageAltText;
                frontmatter.coverCredit = imageContent.imageCreator;
                frontmatter.coverCreditLink = imageContent.imageCreatorLink;
                displayFrontmatterResult(frontmatter);
            }

            const { fileExtension } = await inquirer.prompt(content.selectFileExtensionPrompt());

            const confirm = await inquirer.prompt([{
                type: 'confirm',
                name: 'verify',
                message: 'Are you sure you want to create this file?',
                default: true,
            }]);

            verified = confirm.verify;
            if (verified) {
                content.createContentFile(
                    collectionName,
                    contentDirectory,
                    fileExtension,
                    frontmatter
                );
            }
        } while (!verified)

    } catch (error) {
        console.error(chalk.red('❌ Error creating content file:'), error.message);
        return;
    }
    return;
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
        handleAddContentFile();

    } else if (action === sidecar.ADD_IMAGE_METADATA_TEXT) {
        handleAddImageMetadata();
    }

    else {
        console.log('Bye!');
    }
})();