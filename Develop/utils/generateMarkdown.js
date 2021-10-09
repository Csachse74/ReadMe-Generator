// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'APACHE 2.0':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPL 3.0':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'BSD 3':
      return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    case 'None':
      return;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[License: MIT](https://opensource.org/licenses/MIT)';
    case 'APACHE 2.0':
      return '[License: APACHE 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[License: GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3':
      return '[License: BSD 3](https://opensource.org/licenses/BSD-3-Clause)';
    case 'None':
      return;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const badge = renderLicenseBadge(answers.License) || '';
  const link = renderLicenseLink(answers.License) || '';
  
  
  return `
# ${answers.Name}    ${badge}

## Table of Contents
  
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Description
  
  ${answers.Description}
  
    
## Installation
  
  ${answers.Installation}
  
  
## Usage
  
  ${answers.Usage}
  
  
## License
  
  ${link}
  
## Contributing
  
  ${answers.Contribution}
  
  
## Tests
  
  ${answers.Test}
  
  
## Questions
  
  
`;
}

module.exports = generateMarkdown;
