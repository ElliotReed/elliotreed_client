import fs from "node:fs";
import { help } from "./help.js";

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