// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Enter your project title',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter your project description',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Enter the installation instructions',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Enter the usage information',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Enter the contribution guidelines',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Enter the test instructions',
    name: 'tests',
  },
  {
    type: 'checkbox',
    message: 'Choose your license',
    name: 'license',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    type: 'input',
    message: 'Enter your GitHub username',
    name: 'username',
  }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
   err ? console.error(err) : console.log('README file created in output folder')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((response) => writeToFile('./output/README.md', response))
}

// Function call to initialize app
init();
