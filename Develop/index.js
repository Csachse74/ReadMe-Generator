// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js')

const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input'
            , name: 'Name'
            , message: 'What is the name of your project?'
        }
        , {
            type: 'input'
            , name: 'Description'
            , message: 'What would you like in the description section?'
        }
        , {
            type: 'input'
            , name: 'Installation'
            , message: 'What are the installation instructions?'
            , default: 'npm i'
        }
        , {
            type: 'input'
            , name: 'Usage'
            , message: 'Any usage information needed?'
        }
        , {
            type: 'input'
            , name: 'Contribution'
            , message: 'What are your contribution guidelines?'
        }
        , {
            type: 'input'
            , name: 'Test'
            , message: 'Do you have any test instructions?'
            , default: 'npm run test'
        }
        , {
            type: 'list'
            , name: 'License'
            , message: 'What Licenses did you use?'
            , choices: ["MIT",  "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        }
    ]);
};

// TODO: Create a function to write README file

const writeToFile = (answers) => {
    return generateMarkdown(answers);
};

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('README.md', writeToFile(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.log(err));
};

// Function call to initialize app
init();
