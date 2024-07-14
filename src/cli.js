import readlineSync from 'readline-sync';

function greeting() {
const userName = readlineSync.question("May I have your name? ");
console.log("Hello, " + userName + "!");
};

export { greeting };
