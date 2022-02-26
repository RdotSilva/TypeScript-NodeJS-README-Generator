// TODO: Add npm package to read from command line
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// TODO: Create a list of questions to pass into that package
// TODO: Should have validation for questions (some can be optional)
import { questions } from "./questions";

// TODO: Create a generateMarkdown util that will take in that list of questions and generate the markdown
import { createMarkdown } from "../utils/createMarkdown";

// TODO: Add main function that runs when you run the file
// TODO: Pass that list of questions into npm package and get the answers
// TODO: Pass in the answers into generateMarkdown utility
// TODO: Get the returned markdown from generateMarkdown and write that to file (README.md)

async function main() {
  try {
    const userResponses = await inquirer.prompt(questions);
    const markdown = createMarkdown(userResponses);
    const readmeOutputPath = path.join(__dirname, "../output/README.md");
    fs.writeFileSync(readmeOutputPath, markdown);
  } catch (error) {
    console.log(error);
    main();
  }
}

main();
