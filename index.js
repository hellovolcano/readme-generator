// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require('fs')

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
            name: 'username',
            message: 'What is your Github username? (Required)',
            validate: usernameInput => {
                if (usernameInput) {
                    return true
                } else {
                    console.log("Please enter your Github username!")
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
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true
                } else {
                    console.log("Please enter your project title!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project. What was your motivation for building it? What problem does it solve? (Required)',
            validate: descInput => {
                if (descInput) {
                    return true
                } else {
                    console.log("Please enter a description!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'What is the link to your deployed application? If the application is not deployed, link to the github repository. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true
                } else {
                    console.log("Please enter a Github link!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Does your application require any dependencies to be installed? If so, list them here:',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide testing instructions for this app:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage instructions: ',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license is this application covered under?',
            choices: ['MIT','Apache 2.0', 'GPL 3.0','BSD 3-Clause','ISC','None']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide some guidelines for contributing to this project:'
        }
    ])
}

// Writes the markdown to a readme.MD file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            // if there's an error, reject the Promise and send the error to the .catch
            if (err) {
                reject(err)
                return
            } 
            // resolve if no error
            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    askQuestions()
        .then(readmeData => {
            console.log(readmeData)
            return generateMarkdown(readmeData)
    })
    .then(readmeMarkdown => {
        return writeToFile('./dist/README.md', readmeMarkdown)
    })
    .catch(err => {
        console.log(err)
    })
}
// Function call to initialize app
init();
