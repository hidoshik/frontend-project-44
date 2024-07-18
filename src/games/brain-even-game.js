import {
  getRandomNumber,
  generateGame,
} from '../index.js';

function getQuestionCorrectAnswer() {
  const question = getRandomNumber();
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
}

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export default function playBrainEven() {
  generateGame(rules, getQuestionCorrectAnswer);
}
