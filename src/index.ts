const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const readmeOutputPath = path.join(__dirname, "../output/README.md");

import { questions } from "./questions";
import { createMarkdown } from "../utils/createMarkdown";

async function main() {
  try {
    const userResponses = await inquirer.prompt(questions);
    const markdown = createMarkdown(userResponses);
    fs.writeFileSync(readmeOutputPath, markdown);
  } catch (error) {
    console.log(error);
    main();
  }
}

main();
