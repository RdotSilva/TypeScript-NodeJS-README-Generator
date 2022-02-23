// TODO: Add npm package to read from command line

// TODO: Create a list of questions to pass into that package
// TODO: Should have validation for questions (some can be optional)

// TODO: Create a generateMarkdown util that will take in that list of questions and generate the markdown

// TODO: Add main function that runs when you run the file
// TODO: Pass that list of questions into npm package and get the answers
// TODO: Pass in the answers into generateMarkdown utility
// TODO: Get the returned markdown from generateMarkdown and write that to file (README.md)

const createMarkdown = require("../utils/createMarkdown");

const markdown = createMarkdown("Cool");

console.log(markdown);
