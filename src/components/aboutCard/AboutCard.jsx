import { useEffect, useState } from "react";
import { getRandomNumber } from "../../util";


// val is int (`5`) -> returns 5
// val is array (`[1, 5]`) -> returns random int between 1 and 5
const randomIfArray = val =>
  Array.isArray(val)
    ? getRandomNumber(val[0], val[1])
    : val;

const AboutCard = ({ data, color }) => {
  const { id = undefined, figure, unit, caption, note, interval, colorOverride } = data;
  // `colorOverride` flag allows setting color manually via css/js
  const determinedColor = colorOverride ? 'default' : color;

  // initialize figure to given value `x`, or random int within range `[x, y]`
  const [figureString, setFigureString] = useState(randomIfArray(figure));

  const iterateFigure = () =>
    setFigureString(previous => previous + 1);

  // sets card interval - 
  const setCardInterval = () =>
    interval && setInterval(() => {
      // if step is greater than 1, apply a "gradual" effect via 
      // multiple +1 iterations with randomized intervals
      if (Array.isArray(interval.step) || interval.step > 1) {
        // account for random step count if specified
        let stepCount = randomIfArray(interval.step);

        // setTimeout() runs async, so
        // track timeout lengths with `elapsed`
        let elapsed = 0;

        // set n timeouts, where n = `interval.step`
        for (let i = 0; i < stepCount; i++) {
          let randomTimeout = getRandomNumber(80, 640);
          elapsed += randomTimeout;
          
          setTimeout(iterateFigure, elapsed);
        }
      }
      // if `step.interval` is 1, just iterate
      else iterateFigure();
    },
    // set timeout `x`, or random timeout in range `[x,y]`
    randomIfArray(interval.timeout));

  useEffect(() => {
    let cardInterval;
    
    // init interval
    if (interval && !cardInterval)
      cardInterval = setCardInterval();

    return () => {
      clearInterval(cardInterval);
    }
  });

  return (
    <article id={id} style={{ backgroundColor: determinedColor }}>
      <span>{figureString} { unit && unit }</span>
      <em>{caption}</em>
      { note &&
        <small>({note})</small>
      }
    </article>
  );
}

export default AboutCard;

