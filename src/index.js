import readlineSync from 'readline-sync';
import greeting from './cli.js';

const roundCount = 3;

export function getRandomNumber(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function askQuestion(question) {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
}

function replyToUser(userAnswer, correctAnswer) {
  if (correctAnswer === userAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
}

export function generateGame(rules, getQuestionAndCorrectAnswer) {
  const userName = greeting();
  console.log(rules);

  for (let round = 0; round < roundCount; round += 1) {
    const [question, correctAnswer] = getQuestionAndCorrectAnswer();

    const userAnswer = askQuestion(question);
    const isCorrectAnswer = replyToUser(userAnswer, correctAnswer);

    if (!isCorrectAnswer) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
