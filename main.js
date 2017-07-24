//module variables
var ClozeCard = require('./ClozeCard');
var BasicCard = require('./BasicCard');
var inquirer = require('inquirer');

//initial prompt asking the user what kind of flash card the user would like to create
inquirer.prompt([
{
    type: "checkbox",
    name: "flashCardType",
    message: "What type of flash card would you like to create?",
    choices: ["Basic", "ClozeCard"]
},
]).then(function (answers) {
//variable which equals the card type the user selects
  var answer =answers.flashCardType[0];
  console.log(answer);
//Switch statement to handle what type of card the user wants to create
  switch (answer) {
    case "Basic":
      newBasicCard();
      break;
    case "ClozeCard":
      newClozeCard();
      break;
  }
});

//inquirer prompt to create basic card
function newBasicCard(){
  inquirer.prompt([
  {
      type: "input",
      name: "basicQuestion",
      message: "What question would you like to ask?",
    },
    {
      type: "input",
      name: "basicAnswer",
      message: "What is the answer?",
      },

  ]).then(function (basicResponse) {
  var basicQuestion = process.argv[2];
  var basicAnswer = process.argv[3];
  var myBasicCard = new BasicCard (basicResponse.basicQuestion,basicResponse.basicAnswer);
  myBasicCard.printInfo();
  })
};

//Based on the answer from the prompt it will create a new cloze card
function newClozeCard(){
  inquirer.prompt([
  {
      type: "input",
      name: "text",
      message: "What question would you like to ask?",
    },
    {
      type: "input",
      name: "cloze",
      message: "What is the answer?",
    },

  //create cloze card based on response
  ]).then(function (clozeResponse) {
  var text = process.argv[2];
  var cloze = process.argv[3];
  var myClozeCard = new ClozeCard (clozeResponse.text,clozeResponse.cloze);
  myClozeCard.printInfo();
  })
};
