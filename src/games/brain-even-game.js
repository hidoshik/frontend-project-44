import { greeting } from '../cli.js';
import { getRandomNumber, askQuestion, isCorrectAnswer, replyToUser } from '../index.js';

function getCorrectAnswer(question) {
    if (question % 2 === 0) {
    return 'yes';
    } else {
    return 'no';
    }
}

export function playBrainEven() {
    const userName = greeting();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let round = 0; round < 3; round += 1) {
    const question = getRandomNumber();
    const correctAnswer = getCorrectAnswer(question);
    const userAnswer = askQuestion(question);
    replyToUser(userAnswer, correctAnswer);
    if (!isCorrectAnswer(userAnswer, correctAnswer)) {
        console.log(`Let's try again, ${userName}!`);
    	return;
    }
    }
    console.log(`Congratulations, ${userName}!`);
}

