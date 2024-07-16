#!/usr/bin/env node

import readlineSync from "readline-sync";

function getCorrectAnswer(question) {
  if (question % 2 === 0) {
    return 'yes';
  } else {
    return 'no';
  }
}

function getName() {
	const userName = readlineSync.question("May I have your name? ");
	console.log(`Hello, ${userName}!`);
	return userName;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function askQuestion(question) {
	console.log(`Question: ${question}`);
	const answer = readlineSync.question("Your answer: ");
	return answer;
}

function isCorrectAnswer(userAnswer, correctAnswer) {
	return correctAnswer === userAnswer;
}

function replyToUser(userAnswer, correctAnswer) {
	if (isCorrectAnswer(userAnswer, correctAnswer)) {
    console.log("Correct!");
	} else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
	}
}

function playBrainEven() {
  console.log("Welcome to the Brain Games!");
  const userName = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let round = 0; round < 3; round += 1) {
    const question = getRandomNumber();
    const correctAnswer = getCorrectAnswer(question);
    const userAnswer = askQuestion(question);
    replyToUser(userAnswer, correctAnswer);
    if (!isCorrectAnswer(userAnswer, correctAnswer)) {
      console.log(`Let's try again, ${userName}!`);
    	return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

playBrainEven();
