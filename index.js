// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [];
// User inquirer to ask a series of questions
const askQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter your name!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the link to the github repository? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true
                } else {
                    console.log("Please enter a github link")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log("Please enter your email address")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'githubName',
            message: 'What is your Github username? (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true
                } else {
                    console.log("Please enter your Github username!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is the title of your project? (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true
                } else {
                    console.log("Please enter your project title!")
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Would you like to add installation instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'install',
            message: 'Provide Installation instructions:',
            when: ({ confirmInstall }) => confirmInstall
        },
        {
            type: 'confirm',
            name: 'confirmTest',
            message: 'Would you like to include a section about testing?',
            default: true
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide details about test coverage for this app:',
            when: ({ confirmTest }) => confirmTest
        },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to enter usage instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage instructions',
            when: ({ confirmUsage }) => confirmUsage
        },
        {
            type: 'input',
            name: 'license',
            message: 'Which license is this application covered under?'
        },


    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
