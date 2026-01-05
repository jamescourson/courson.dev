// Fisher-Yates shuffle
// https://javascript.info/task/shuffle
const shuffleArray = (array) => {
  // iterate through array backwards
  for (let i = array.length - 1; i > 0; i--) {
    // replace each item with a random one that comes before it
    let j = Math.floor(Math.random() * (i + 1));
    // one-liner swap: see "Examples > Swapping variables" at:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring#examples
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default shuffleArray;

