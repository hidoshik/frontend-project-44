import { getRandomNumber, generateGame } from '../index.js';

function getGcd(firstNumber, secondNumber) {
  const max = Math.max(firstNumber, secondNumber);
  const min = Math.min(firstNumber, secondNumber);

  // поиск НОД по алгоритму Евклида
  const gcd = min > 0 ? getGcd(min, max % min) : Math.abs(max);

  return gcd;
}

function getQuestionAndCorrectAnswer() {
  const a = getRandomNumber();
  const b = getRandomNumber();

  const question = `${a} ${b}`;
  const correctAnswer = String(getGcd(a, b));

  return [question, correctAnswer];
}

const rules = 'Find the greatest common divisor of given numbers.';

export default function playBrainGcd() {
  generateGame(rules, getQuestionAndCorrectAnswer);
}
