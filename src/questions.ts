/**
 * These are the questions that will we will prompt in command line to create the README.md
 */
export const questions = [
  {
    type: "input",
    message: "Project Title",
    name: "title",
    default: "Project Title",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Project Title Required");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Project Description",
    name: "description",
    default: "Project Description",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Project Description Required");
      }
      return true;
    },
  },
  {
    type: "list",
    message: "Installation",
    name: "installation",
    choices: ["JavaScript", "Python", "Maven", "Gradle", "Other"],
  },
  {
    type: "confirm",
    message: "Include Screenshots",
    name: "screenshots",
    default: true,
  },
  {
    type: "checkbox",
    message: "Include License",
    name: "license",
    choices: ["MIT", "Other", "None"],
    default: ["None"],
  },
];
