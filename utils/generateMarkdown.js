const fs = require('fs')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (license == 'MIT') {
    return ` MIT`
  } else if (license === 'ISC') {
    return `ISC`
  } else if (license === 'Apache 2.0') {
    return `Apache 2.0`
  } else if (license === 'GPL 3.0') {
    return `GPL 3.0`
  } else if (license === 'ISC') {
    return `ISC`
  } else {
    return ''
  }
}


// Check to see if the Testing Se

generateTOC = () => {
  return `
  The TOC will be added here
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if (!license) {
    return ''
  }

  return `
  [${license}](https://www.google.com)
  `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (!license) {
    return ''
  }

  return `
  This project is covered by the ${renderLicenseLink(license)} license.
  `
}


// Generates the markdown for the readme file
const generateMarkdown = data => {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description

  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)

  ${generateTOC()}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions

  To report issues, contact ${data.name} at ${data.email}

  ## License
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
