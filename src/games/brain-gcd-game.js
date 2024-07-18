import {
  getRandomNumber,
  generateGame,
} from '../index.js';

function getGcd(max, min) {
  const gcd = min > 0 ? getGcd(min, max % min) : Math.abs(max);
  return gcd;
}

function getQuestionAndCorrectAnswer() {
  const a = getRandomNumber();
  const b = getRandomNumber();

  // поиск НОД по алгоритму Евклида

  const max = Math.max(a, b);
  const min = Math.min(a, b);

  const gcd = getGcd(max, min);

  return [`${a} ${b}`, String(gcd)];
}

const rules = 'Find the greatest common divisor of given numbers.';

export default function playBrainGcd() {
  generateGame(rules, getQuestionAndCorrectAnswer);
}
