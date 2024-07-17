import { getName, getRandomNumber, askQuestion, isCorrectAnswer, replyToUser } from '../index.js';

function getQuestionAndCorrectAnswer() {
    const operator = ['sum', 'subtract', 'multiply'];
    const randomOperator = operator[Math.floor(Math.random() * (operator.length))];
    const a = getRandomNumber(0, 100);
    const b = getRandomNumber(0, 100);
    switch (randomOperator) {
        case ('sum'):
            return [`${a} + ${b}`, String(a + b)];
        case ('subtract'):
            return [`${a} - ${b}`, String(a - b)];
        case ('multiply'):
            return [`${a} * ${b}`, String(a * b)];
        default:
            break;
    }
}

export function playBrainCalc() {
    console.log("Welcome to the Brain Games!");
    const userName = getName();
    console.log('What is the result of the expression?');
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