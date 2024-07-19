import {
  getRandomNumber,
  generateGame,
} from '../index.js';

function evaluateExpression(firstNumber, secondNumber, operator) {
  let result;

  switch (operator) {
    case '+':
      result = String(firstNumber + secondNumber);
      break;
    case '-':
      result = String(firstNumber - secondNumber);
      break;
    case '*':
      result = String(firstNumber * secondNumber);
      break;
    default:
      break;
  }
  return result;
}

function getQuestionAndCorrectAnswer() {
  const a = getRandomNumber();
  const b = getRandomNumber();

  const operator = ['+', '-', '*'];
  const randomOperator = operator[Math.floor(Math.random() * operator.length)];

  const question = `${a} ${randomOperator} ${b}`;
  const correctAnswer = evaluateExpression(a, b, randomOperator);

  return [question, correctAnswer];
}

const rules = 'What is the result of the expression?';

export default function playBrainCalc() {
  generateGame(rules, getQuestionAndCorrectAnswer);
}
