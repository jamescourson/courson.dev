// returns a random element of the given array, avoiding repeats
const getNewRandomElement = (arr = [], currentElement = undefined) => {
  let randomElement;

  // if `currentElement` exists, pick a new one
  if (currentElement) {
    do {
      randomElement = arr[Math.floor(Math.random() * arr.length)];
      // repeat if same element was picked
    } while (randomElement === currentElement);
  }
  // if not, just pick one
  else {
    randomElement = arr[Math.floor(Math.random() * arr.length)];
  }

  return randomElement;
}

export default getNewRandomElement;

