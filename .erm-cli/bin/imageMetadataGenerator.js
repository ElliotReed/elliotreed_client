import fs from "node:fs";
import path from "node:path";

import dialog from "node-file-dialog";

const ADD_IMAGE_METADATA_TEXT = 'Add image metadata sidecar';

// Inquirer prompt configurations
function createOverwritePrompt() {
    return [{
        type: 'confirm',
        name: 'overwrite',
        message: 'Overwrite existing file?',
        default: false,
    }];
}

function createMetadataPrompts() {
    return [
        {
            type: 'input',
            name: 'source',
            message: 'Enter the source location (https://unsplash.com/the-image.jpg)',
            default: '',
        },
        {
            type: 'input',
            name: 'title',
            message: 'Enter the image title',
            default: '',
        },
        {
            type: 'input',
            name: 'altText',
            message: 'Enter the image alt text',
            default: '',
        },
        {
            type: 'input',
            name: 'creator',
            message: 'Enter the name of the creator',
            default: '',
        },
        {
            type: 'input',
            name: 'creatorLink',
            message: 'Enter the creator link (e.g. https://unsplash.com/@creator)',
            default: '',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Enter the license name (e.g Unslplash License)',
            default: '',
        },
        {
            type: 'input',
            name: 'licenseLink',
            message: 'Enter the license link (e.g https://unslplash.com/license)',
            default: '',
        },

    ]
}

// File operations
async function checkMetadataFileExists(metadataFilePath) {
    return fs.existsSync(metadataFilePath);
}

async function writeMetadataFile(metadataFilePath, jsonContent) {
    fs.writeFileSync(metadataFilePath, jsonContent, 'utf-8');
}

// Path generation
function generateMetadataFilePath(sourceImagePath) {
    const imageDirectory = path.dirname(sourceImagePath);
    const imageFilename = path.basename(sourceImagePath);
    const imageNameWithoutExt = path.parse(imageFilename).name;
    const metadataFilename = `${imageNameWithoutExt}.json`;

    return path.join(imageDirectory, metadataFilename);
}

// Content generation
function createMetadataContent(metadataValues) {
    const metadata = {
        altText: metadataValues.altText || '',
        creator: metadataValues.creator || '',
        creatorLink: metadataValues.creatorLink || '',
        license: metadataValues.license || '',
        licenseLink: metadataValues.licenseLink || '',
        source: metadataValues.source || '',
        title: metadataValues.title || '',
        // Add creation timestamp for tracking
        createdAt: new Date().toISOString(),
    };

    return JSON.stringify(metadata, null, 2);
}

// User input
async function selectSourceImageFile() {
    try {
        const selectedFiles = await dialog({
            type: 'open-file',
            extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'] // Restrict to image files
        });

        if (!selectedFiles || selectedFiles.length === 0) {
            throw new Error('No file selected');
        }

        return selectedFiles[0];
    } catch (error) {
        throw error;
    }
}

const imageMetadataGenerator = {
    checkMetadataFileExists,
    createMetadataPrompts,
    createOverwritePrompt,
    createMetadataContent,
    generateMetadataFilePath,
    ADD_IMAGE_METADATA_TEXT,
    selectSourceImageFile,
    writeMetadataFile,
}

export default imageMetadataGenerator;