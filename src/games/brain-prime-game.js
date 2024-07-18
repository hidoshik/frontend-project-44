import { greeting } from '../cli.js';
import { getRandomNumber, askQuestion, isCorrectAnswer, replyToUser } from '../index.js';

function isPrimeNumber(num) {
    if (num < 2) {
        return 'no';
    } else {
        for (let i = num - 1; i > 1; i -= 1) {
            if (num % i === 0) {
                return 'no';
            } 
        }
    }
    return 'yes';
}

function getQuestionAndCorrectAnswer() {
    const question = getRandomNumber();
    const correctAnswer = isPrimeNumber(question);
    return [question, correctAnswer];
}

export function playBrainPrime() {
    const userName = greeting();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    for (let round = 0; round < 3; round += 1) {
        const [question, correctAnswer] = getQuestionAndCorrectAnswer();

        const userAnswer = askQuestion(question);
        replyToUser(userAnswer, correctAnswer);

        if (!isCorrectAnswer(userAnswer, correctAnswer)) {
            console.log(`Let's try again, ${userName}!`);
    	    return;
        }
    }
    console.log(`Congratulations, ${userName}!`);
}