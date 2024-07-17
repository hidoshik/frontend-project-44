import { greeting } from '../cli.js';
import { getRandomNumber, askQuestion, isCorrectAnswer, replyToUser } from '../index.js';

function getGcd(max, min) {
    if (min > 0) {
        return getGcd(min, max % min);
    } else {
        return Math.abs(max);
    }
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

export function playBrainGcd() {
    const userName = greeting();
    console.log('Find the greatest common divisor of given numbers.');

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