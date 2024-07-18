import {
  getRandomNumber,
  generateGame,
} from '../index.js';

function getQuestionAndCorrectAnswer() {
  const operator = ['sum', 'subtract', 'multiply'];
  const randomOperator = operator[Math.floor(Math.random() * operator.length)];

  const a = getRandomNumber();
  const b = getRandomNumber();

  let question;
  let correctAnswer;

  let result = [question, correctAnswer];

  switch (randomOperator) {
    case 'sum':
      result = [`${a} + ${b}`, String(a + b)];
      break;
    case 'subtract':
      result = [`${a} - ${b}`, String(a - b)];
      break;
    case 'multiply':
      result = [`${a} * ${b}`, String(a * b)];
      break;
    default:
      break;
  }
  return result;
}

const rules = 'What is the result of the expression?';

export default function playBrainCalc() {
  generateGame(rules, getQuestionAndCorrectAnswer);
}
