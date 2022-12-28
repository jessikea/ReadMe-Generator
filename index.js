// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "project",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a description of your project"
    },

    {
        type: "input",
        name: "contributors",
        message: "List any contributors to the project"
    },

    {
        type: "list",
        name: "license",
        message: "Select License",
        choices: ['MIT', 'APACHE 2.0', 'BSD 3', 'GPL 3.0', 'None']
    },
    {
        type: "input",
        name: "features",
        message: "Describe features of the project",

    },
    {
        type: "input",
        name: "tests",
        message: "Write tests for your application and provide examples on how to run them here. (Write N/A if this is not applicable) ",

    },
    {
        type: "input",
        name: "howToContribute",
        message: "Describe how other developers can contribute to your project in the future.",

    }
];

inquirer.prompt(questions)
    .then((answers) => {
        const readMe = generateMarkdown(answers);
        fs.writeFile(`${answers.project.split(' ').join('')}-README.md`, readMe, (err) =>
            err ? console.log(err) : console.log("Generating README file..."))
    })
