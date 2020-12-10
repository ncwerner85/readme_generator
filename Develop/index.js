const fs = require("fs");
const inquirer = require("inquirer");
const path = ("path");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user

const questions = [
    {
        type: "checkbox",
        message: "Please choose the options you'd like in your reade file?",
        name: "choicesReadme",
        choices: ["## Intstallation", "## Usage", "## Credits", "## License"]
    }
];
// // function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// // function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log("Generating README...");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })
}

// // function call to initialize program
init();
