const input = require('readline-sync');

let name = input.question("Please enter your name: ");
console.log("Hello, " + name + "! Let's start the quiz!")

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = name;
//console.log(candidateName);

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "What is the meaning of life and existence?" + "\n A. Love,\n B. There is no meaning. \n C. 42";
//ask user question first
console.log(question)
let correctAnswer = "C"
let candidateAnswer = input.question("What is your answer? ");
//playing with conditionals//

if (candidateAnswer === correctAnswer) {
  console.log ("That is correct");
}else {
  console.log("Wrong!");
}

//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 



  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};