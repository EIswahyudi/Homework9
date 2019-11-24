const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
// const generateHTML = require("./index");

var answers = []


// questions for the manager 
function promptManager() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is your id?"
    },
    {
      type: "input",
      name: "officeid",
      message: "What is your office id?"
    },

  ]).then(function (res) {
    const manager = res;
    console.log(answers);
    answers.push(manager);
    console.log(answers);

    buildteam()
  })
}

function promptengineer() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?"
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub?"
    },

  ]).then(function (res) {
    const engineer = res;
    console.log(answers);
    answers.push(engineer);
    console.log(answers);
    buildteam()
  })
}

function promptintern() {
  inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "What is your id?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?"
    },
    {
      type: "input",
      name: "school",
      message: "Where do you go to school?"
    },


  ]).then(function (res) {
    const intern = res;
    console.log(answers);
    answers.push(intern);
    console.log(answers);
    buildteam()
  })
}

function buildteam() {
  inquirer.prompt([
    {
      type: "list",
      message: "Do you want an engineer or intern?",
      name: "contact",
      choices: [
        "engineer",
        "intern",
        "finish"
      ]
    }
  ]).then(function (res) {
    console.log(res)
    if (res.contact === "engineer") {
      promptengineer
    }
    if (res.contact === "intern") {
      promptintern
    }
    else if (res.contact === "finish") {
    
     getHtmlTeam()

    }
  })
}
promptManager()

function generateHTML() {

return`<!DOCTYPE html>
      <html lang="en">
         <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
            <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
            <title>Document</title>
            <style>


    writeFileAsync("team.html", html);
    </body>
    </html>`
}
