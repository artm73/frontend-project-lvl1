#!/usr/bin/env node
import getRandomNumber from '../common.js';
import newGame from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getQAndA = () => {
  const number = getRandomNumber(3, 25);
  const question = `${number}`;
  const answer = isPrime(number);
  return [question, String(answer)];
};

const brainPrime = () => newGame(description, getQAndA);

export default brainPrime;
