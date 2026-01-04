import { useEffect, useState } from "react";
import { getRandomNumber } from "../../util";


const randomIfArray = val =>
  Array.isArray(val)
    ? getRandomNumber(val[0], val[1])
    : val;

const AboutCard = ({ data, color }) => {
  const { id, figure, unit, caption, note, interval, colorOverride } = data;
  const determinedColor = colorOverride ? 'default' : color;

  const [figureString, setFigureString] = useState(randomIfArray(figure));

  const iterateFigure = () =>
    setFigureString(previous => previous + 1);

  const setCardInterval = () =>
    interval && setInterval(() => {
      if (Array.isArray(interval.step) || interval.step > 1) {
        // account for random step count if specified
        let stepCount = randomIfArray(interval.step);

        // sequential random-length timeouts
        let elapsed = 0;

        for (let i = 0; i < stepCount; i++) {
          let randomTimeout = getRandomNumber(80, 640);
          elapsed += randomTimeout;
          
          setTimeout(iterateFigure, elapsed);
        }
      }
      else iterateFigure();
    },
    randomIfArray(interval.timeout));

  useEffect(() => {
    let cardInterval;
    
    if (interval && !cardInterval)
      cardInterval = setCardInterval();

    return () => {
      clearInterval(cardInterval);
    }
  });

  return (
    <article id={id || undefined} style={{ backgroundColor: determinedColor }}>
      <span>{figureString} { unit && unit }</span>
      <em>{caption}</em>
      { note &&
        <small>({note})</small>
      }
    </article>
  );
}

export default AboutCard;

