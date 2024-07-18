import {
  getRandomNumber,
  generateGame,
} from '../index.js';

function getProgression(length = 10) {
  const firstNumber = getRandomNumber();
  const progression = [firstNumber];

  const difference = getRandomNumber(2, 10);

  for (let i = 1; i < length; i += 1) {
    progression[i] = progression[i - 1] + difference;
  }

  return progression;
}

function getQuestionAndCorrectAnswer() {
  const progression = getProgression();

  const missingNumberIndex = getRandomNumber(0, 9);
  const missingNumber = progression[missingNumberIndex];

  const progressionWithMissingNumber = progression
    .join(' ')
    .replace(missingNumber, '..');

  return [progressionWithMissingNumber, String(missingNumber)];
}

const rules = 'What number is missing in the progression?';

export default function playBrainProgression() {
  generateGame(rules, getQuestionAndCorrectAnswer);
}
