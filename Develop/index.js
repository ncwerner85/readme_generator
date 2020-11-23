const inquirer = require("inquirer");
const fs = require("fs");
// array of questions for user
// const questions = [

// ];
inquirer.prompt([
    // {
    //     type: "confirm",
    //     message: "Would you like to make a readme file?",
    //     name: "makeFile",
    // },
    {
        type: "checkbox",
        message: "Please choose the options you'd like in your reade file?",
        name: "choicesReadme",
        choices: ["## Intstallation", "## Usage", "## Credits", "## License"]
    }
]).then(function(responce) {
    console.log(responce);
    const choicesReadme = JSON.stringify(responce)

    fs.writeFile("./README.md", choicesReadme, function(err) {
        if (err) throw err;
        console.log("Success!");
    })
})
// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
