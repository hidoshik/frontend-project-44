import { getRandomNumber, generateGame } from '../index.js';

function isPrimeNumber(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function getQuestionAndCorrectAnswer() {
  const question = getRandomNumber();
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
}

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default function playBrainPrime() {
  generateGame(rules, getQuestionAndCorrectAnswer);
}
