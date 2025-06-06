import fs from 'node:fs';
import path from 'node:path';
import chalk from 'chalk';
import inquirer from "inquirer";

import sidecar from "./imageMetadataGenerator.js";

function getNormalizedCoverPath(sourceImagePath) {
    if (sourceImagePath.includes('src/assets/images')) {
        return '@' + sourceImagePath.split('src/assets/').pop();
    } else if (sourceImagePath.includes('src/')) {
        return '@/' + sourceImagePath.split('src/').pop();
    } else if (sourceImagePath.includes('public/')) {
        return '/' + sourceImagePath.split('public/').pop();
    }

    return sourceImagePath;
}

export async function getImageContent() {
    const imageContent = {};
    const sourceImagePath = await sidecar.selectSourceImageFile();
    imageContent.imagePath = getNormalizedCoverPath(sourceImagePath);
    const metadataFilePath = sidecar.generateMetadataFilePath(sourceImagePath);

    const metadataExists = await sidecar.checkMetadataFileExists(metadataFilePath);

    if (metadataExists) {
        const sidecarContentString = fs.readFileSync(metadataFilePath, 'utf-8');
        const sidecarContents = JSON.parse(sidecarContentString);
        imageContent.imageAltText = sidecarContents.altText;
        imageContent.imageCreator = sidecarContents.creator;
        imageContent.imageCreatorLink = sidecarContents.creatorLink;
    } else {

        const { shouldCreateMetadaFile } = await inquirer.prompt({
            type: 'confirm',
            name: 'shouldCreateMetadaFile',
            message: 'No metadata file exists for this image, create one?',
            default: true,
        });

        if (shouldCreateMetadaFile) {
            const metadataValues = await inquirer.prompt(sidecar.createMetadataPrompts());
            const metadataContent = sidecar.createMetadataContent(metadataValues);

            sidecar.writeMetadataFile(metadataFilePath, metadataContent);
            console.log(chalk.green(`${path.basename(metadataFilePath)} was successfully created!`));

            const metadataJSON = JSON.parse(metadataContent);
            imageContent.imageAltText = metadataJSON.altText;
            imageContent.imageCreator = metadataJSON.creator;
            imageContent.imageCreatorLink = metadataJSON.creatorLink;
        } else {
            const { altText } = await inquirer.prompt({
                type: 'input',
                name: 'altText',
                message: 'Enter the alt text for the image',
                default: '',
            });
            imageContent.imageAltText = altText;
            const { creator } = await inquirer.prompt({
                type: 'input',
                name: 'creator',
                message: "Enter the image creator's name",
                default: '',
            });
            imageContent.imageCreator = creator;
            const { creatorLink } = await inquirer.prompt({
                type: 'input',
                name: 'creatorLink',
                message: "Enter the image creator's link",
                default: '',
            });
            imageContent.imageCreatorLink = creatorLink;
        }

    }
    return imageContent;
}
