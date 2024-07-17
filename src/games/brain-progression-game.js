import { greeting } from '../cli.js';
import { getRandomNumber, askQuestion, isCorrectAnswer, replyToUser } from '../index.js';

function getProgression(length = 10) {
    const firstNumber = getRandomNumber();
    const progression = [firstNumber];
    
    const difference = getRandomNumber(2, 10);

    for (let i = 1; i < length; i += 1) {
        progression[i] = progression[i - 1] + difference;
    }

    const missingNumberIndex = getRandomNumber(0, 9);
    const missingNumber = progression[missingNumberIndex];

    const progressionWithMissingNumber = progression.join(' ').replace(missingNumber, '..');

    return [progressionWithMissingNumber, String(missingNumber)];
}

export function playBrainProgression() {
    const userName = greeting();
    console.log('What number is missing in the progression?');

    for (let round = 0; round < 3; round += 1) {
        const [question, correctAnswer] = getProgression();

        const userAnswer = askQuestion(question);
        replyToUser(userAnswer, correctAnswer);

        if (!isCorrectAnswer(userAnswer, correctAnswer)) {
            console.log(`Let's try again, ${userName}!`);
    	    return;
        }
    }
    console.log(`Congratulations, ${userName}!`);
}