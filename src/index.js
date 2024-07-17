import readlineSync from "readline-sync";

export function getName() {
	const userName = readlineSync.question("May I have your name? ");
	console.log(`Hello, ${userName}!`);
	return userName;
}

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

export function askQuestion(question) {
	console.log(`Question: ${question}`);
	const answer = readlineSync.question("Your answer: ");
	return answer;
}

export function isCorrectAnswer(userAnswer, correctAnswer) {
	return correctAnswer === userAnswer;
}

export function replyToUser(userAnswer, correctAnswer) {
	if (isCorrectAnswer(userAnswer, correctAnswer)) {
    console.log("Correct!");
	} else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
	}
}