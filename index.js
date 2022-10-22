var readlineSync = require('readline-sync');
var userName = readlineSync.question("What's your name?\n");
console.log("Welcome " + userName + " Are you a Galaxy Geek? ");
var score = 0;
var questions = [{
  question: "Which color of star is hottest?\n ",
  answer: "blue"
},
{
  question: "What is the name given to the event that formed the Universe?\n ",
  answer: "big bang"
},
{
  question: "What is our home galaxy called?\n ",
  answer: "milky way"
},
{
  question: "What is the biggest type of star? \n",
  answer: "supergiant"
},
{
  question: "First image of black hole named as?\n",
  answer: "m87"
}
];
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("Right");
    score = score + 1;
  }
  else {
    console.log("Wrong");
    console.log("the right answer is: ", answer);
  }
  console.log("Current score: " + score);
  console.log("-----------------");
}

function playGame() {
  var userWillPlay = readlineSync.question("Do you want to play Now?(y/n) ");
  if (userWillPlay === "y") {
    for (var i = 0; i < questions.length; i = i + 1) {
      var currentQuestion = questions[i];
      play(currentQuestion.question, currentQuestion.answer);

    }
    console.log("YAY ! you Scored: ", score);
    if (score >= 2) {
      console.log("Passed Level 1,Hi GalaxyGeek.");
    }
  }
  else {
    console.log("Get back after some time.");
  }

}
playGame();

