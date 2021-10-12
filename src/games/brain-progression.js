#!/usr/bin/env node
import getRandomNumber from '../common.js';
import newGame from '../index.js';

const getProgression = (firstItem, length, diff) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const item = firstItem + diff * i;
    progression.push(item);
  }
  return progression;
};

const description = 'What number is missing in the progression?';
const getQAndA = () => {
  const startItem = getRandomNumber(0, 50);
  const lengthOfProgression = getRandomNumber(5, 10);
  const hiddenItem = getRandomNumber(0, lengthOfProgression);
  const difference = getRandomNumber(0, 15);
  const progression = getProgression(startItem, lengthOfProgression, difference);
  const answer = progression[hiddenItem];
  progression[hiddenItem] = '..';
  const question = `${progression}`;
  return [question, String(answer)];
};

const brainProgression = () => newGame(description, getQAndA);

export default brainProgression;
