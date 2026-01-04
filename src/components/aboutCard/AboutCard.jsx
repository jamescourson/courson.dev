import { useEffect, useState } from "react";
import { getRandomNumber } from "../../util";


const AboutCard = ({ data, color }) => {
  const { id, figure, unit, caption, note, interval, colorOverride } = data;
  const determinedColor = colorOverride ? 'default' : color;

  const [figureString, setFigureString] = useState(() =>
    Array.isArray(figure)
      ? getRandomNumber(figure[0], figure[1])
      : figure);

  const iterateFigure = () =>
    setFigureString(previous => previous + 1);

  const setCardInterval = () =>
    interval && setInterval(() => {
      if (Array.isArray(interval.step) || interval.step > 1) {
        // account for random step count if specified
        let stepCount = Array.isArray(interval.step)
          ? getRandomNumber(interval.step[0], interval.step[1])
          : interval.step;

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
    Array.isArray(interval.timeout)
      ? getRandomNumber(interval.timeout[0], interval.timeout[1])
      : interval.timeout);

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

