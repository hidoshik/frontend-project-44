import { getRandomNumber, generateGame } from '../index.js';

function isEven(number) {
  return number % 2 === 0;
}

function getQuestionCorrectAnswer() {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
}

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export default function playBrainEven() {
  generateGame(rules, getQuestionCorrectAnswer);
}
