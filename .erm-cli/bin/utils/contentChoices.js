// src/scripts/generateFilters.js
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RELATIVE_PATH_TO_CONTENT_DIRECTORY = '../../../src/content/';

function parseFrontmatter(content) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
    const match = content.match(frontmatterRegex);

    if (!match) return {};

    try {
        return yaml.load(match[1]) || {};
    } catch (error) {
        console.warn('Failed to parse YAML frontmatter:', error.message);
        return {};
    }
}

function processCollection(collectionPath, fields) {
    const dirExists = fs.existsSync(collectionPath);

    if (!dirExists) {
        return {};
    }

    const items = fs.readdirSync(collectionPath);

    // Check if items are directories or files
    const directories = [];
    const files = [];

    items.forEach(item => {
        const itemPath = path.join(collectionPath, item);
        const stat = fs.statSync(itemPath);
        if (stat.isDirectory()) {
            directories.push(item);
        } else {
            files.push(item);
        }
    });

    // First, check for markdown files in the root directory
    let mdFiles = files.filter(file =>
        file.endsWith('.md') || file.endsWith('.mdx')
    );

    // If no files in root, search subdirectories
    if (mdFiles.length === 0 && directories.length > 0) {

        directories.forEach(dir => {
            const subDirPath = path.join(collectionPath, dir);
            try {
                const subFiles = fs.readdirSync(subDirPath);

                const subMdFiles = subFiles.filter(file =>
                    file.endsWith('.md') || file.endsWith('.mdx')
                );

                if (subMdFiles.length > 0) {
                    // Add full paths to the files array
                    subMdFiles.forEach(file => {
                        mdFiles.push(path.join(dir, file));
                    });
                }
            } catch (error) {
                console.warn(`❌ Error reading subdirectory ${dir}:`, error.message);
            }
        });
    }

    if (mdFiles.length === 0) {
        console.log(`❌ EARLY EXIT: No markdown files found in: ${collectionPath}`);
        console.log(`❌ Returning empty object immediately`);
        return {};
    }

    const results = {};

    // Initialize sets for each field we're tracking
    fields.forEach(field => {
        results[field] = new Set();
    });

    for (const file of mdFiles) {
        const filePath = path.join(collectionPath, file);

        try {
            const content = fs.readFileSync(filePath, 'utf-8');
            const frontmatter = parseFrontmatter(content);

            // Extract values for each field
            fields.forEach(field => {
                const values = frontmatter[field];

                if (Array.isArray(values)) {
                    values.forEach(value => {
                        if (value && String(value).trim()) {
                            results[field].add(String(value).trim());
                        }
                    });
                } else if (values != null && String(values).trim()) {
                    results[field].add(String(values).trim());
                }
            });
        } catch (error) {
            console.warn(`❌ Failed to process file ${file}:`, error.message);
        }
    }

    // Convert sets to sorted arrays
    const processedResults = {};
    Object.entries(results).forEach(([key, set]) => {
        processedResults[key] = Array.from(set).sort((a, b) =>
            a.toLowerCase().localeCompare(b.toLowerCase())
        );
    });

    return processedResults;
}

export function getNoteContentChoices() {
    try {
        const contentDir = path.resolve(__dirname, RELATIVE_PATH_TO_CONTENT_DIRECTORY);
        const notesPath = path.join(contentDir, 'notes');

        const notesData = processCollection(notesPath, ['category', 'tags']);

        return {
            categories: notesData.category || [],
            tags: notesData.tags || []
        };
    } catch (error) {
        console.error('Error getting note content choices:', error);
        return {
            categories: [],
            tags: []
        };
    }
}

export function getProjectContentChoices() {
    try {
        const contentDir = path.resolve(__dirname, RELATIVE_PATH_TO_CONTENT_DIRECTORY);
        const projectsPath = path.join(contentDir, 'projects');

        const projectsData = processCollection(projectsPath, ['musicians', 'styles']);

        return {
            musicians: projectsData.musicians || [],
            styles: projectsData.styles || []
        };
    } catch (error) {
        console.error('Error getting project content choices:', error);
        return {
            musicians: [],
            styles: []
        };
    }
}