// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) { }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) { }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README

function renderLicenseBadge(l){
  if (l.license == 'MIT'){
    badge = `[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](https://img.shields.io/badge/license-MIT-blue)`,
      badgeLink = 'https://www.mit.edu/~amini/LICENSE.md'
  }
  else if (l.license == 'APACHE 2.0') {
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      badgeLink = 'https://www.apache.org/licenses/LICENSE-2.0'
  }
  else if (l.license == 'BSD 3') {
    badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
      badgeLink = 'https://opensource.org/licenses/BSD-3-Clause'
  }
  else if (l.license == 'GPL 3.0') {
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
      badgeLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  } else { badge = '', badgeLink = '' }
  return badge, badgeLink
}



function generateMarkdown(answers) {
  renderLicenseBadge(answers);
  
  return `# ${answers.project}
  ${badge}
  ## Description
  ${answers.description}
  
  
  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Contributors](#Credits)
  - [Features](#Features)
  - [Tests](#Tests)
  - [How to Contribute](#How To Contribute)
  - [License](#License)

  ## Installation
  
  
  ## Usage
  
  
  ## Credits
  
  ${answers.contributors}
  
  ## License
  
  
  ---
  
  
  ## Badges
  
  
  
  ## Features
  ${answers.features}
  
  ## How to Contribute
  ${answers.howToContribute}
  
  ## Tests
  ${answers.tests}
`;
}

module.exports = generateMarkdown;
