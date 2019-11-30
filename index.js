const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateHTML = require("./lib/generateHTML");
const writeFileAsync = util.promisify(fs.writeFile);
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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
      promptengineer()
     
    }
    if (res.contact === "intern") {
      promptintern()
  
    }
    else if (res.contact === "finish") {
      answers.push(finish)
      buildteam()
 
     getHtmlTeam()
     return;

    }
  })
}
promptManager()

let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Team</title>
    <!-- Latest compiled and minified CSS & JS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://code.jquery.com/jquery.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="https://kit.fontawesome.com/4d07055d3e.js" crossorigin=“anonymous”></script>
    <style>
        .shadow {
            box-shadow: 5px 5px 5px grey;
        }
    </style>
</head>
<body>
    <div class="container-fluid p-0 mb-0">
        <div class="jumbotron jumbotron-fluid bg-danger text-light">
            <div class="container text-center">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center" id="cards">
`;


let close = `
      </div> 
      </div> 
    </body>
  </html>
            `;

function getHtmlTeam() {
  let card = ""
  for (let i = 0; i < teamArr.length; i++) {
    card = generateHTML(teamArr[i])
    html += card;
  }
  html += close;

  writeFileAsync("./output/index.html", html);

};

