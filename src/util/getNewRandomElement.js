// returns a random element of the given array, avoiding repeats
const getNewRandomElement = (arr = [], currentElement = undefined) => {
  let randomElement;

  if (currentElement) {
    do {
      randomElement = arr[Math.floor(Math.random() * arr.length)];
    } while (randomElement === currentElement);
  }
  else {
    randomElement = arr[Math.floor(Math.random() * arr.length)];
  }

  return randomElement;
}

export default getNewRandomElement;

