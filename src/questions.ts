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
    type: "input",
    message: "Installation",
    name: "description",
    default: "Project Installation",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Project Installation Required");
      }
      return true;
    },
  },
];
