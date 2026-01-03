import shuffleArray from './shuffleArray';
import getNewRandomElement from "./getNewRandomElement";


export const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export {
  shuffleArray,
  getNewRandomElement
}
