import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const requestName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${requestName}!`);
export default requestName;
