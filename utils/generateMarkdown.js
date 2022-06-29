const fs = require('fs')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (!license) {
    return ''
  }

  return `
  ${license} Badge Placeholder`
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

// Required Questions:
// Title
// Username
// Name
// Github Link
// Description
// Email address

// Optional Questions:
// Usage
// Test Coverage
// Installation Instructions
// Contributing
// License


// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description

  ${data.description}
  
  ## Table of Contents

  ${generateTOC()}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  Contributions to this code base were done by ${data.username} and ${data.contributors}

  ## Tests
  ${data.test}

  ## Questions

  To report issues, contact ${data.name} at ${data.email}

`;
}

module.exports = generateMarkdown;
