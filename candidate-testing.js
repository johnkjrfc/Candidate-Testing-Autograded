const input = require('readline-sync');




// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ''
//console.log(candidateName);

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    console.log(questions[i]);

    let answer = input.question("What is your answer?");

    candidateAnswers.push(answer);

  } 
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  // if (candidateAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
  //   console.log ("That is correct.");
  // }else {
  //   console.log("Sorry, that is incorrect.");
  // }
  for (let i = 0; i < candidateAnswers.length; i++) {
    console.log(`You answered, ${candidateAnswers[i]}.\nThe correct answer is ${correctAnswers[i]}` )
  }
  let trueCount = 0          //defining varible which will store no. answers that match correctAnswers
  for (let i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers.toLowercase(i) === correctAnswers.toLowercase(i)) {
      count++;
    } else {
      
    }

  }
  
  let grade = trueCount/candidateAnswers.length;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hello ${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// runProgram();
// console.log(questions) //
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