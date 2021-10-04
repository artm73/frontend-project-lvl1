#!/usr/bin/games/env node
/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

// eslint-disable-next-line consistent-return
export const newGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getNumber = () => Math.floor(Math.random() * 3737);
  for (let i = 1; i <= 3; i += 1) {
    const number = getNumber();
    console.log(`'Question: ${number}'`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (number % 2 === 0) {
      if (userAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
        return `Let's try again, ${userName}!`;
      }
    }
    console.log(`Congratulations, ${userName}!`);
    return false;
  }
};
