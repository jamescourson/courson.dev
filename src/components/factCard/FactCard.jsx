import { useEffect, useMemo, useState } from "react";
import { getRandomNumber } from "../../util";

import './FactCard.scss';


// val is int (`5`) -> returns 5
// val is array (`[1, 5]`) -> returns random int between 1 and 5
const randomIfArray = val =>
  Array.isArray(val)
    ? getRandomNumber(val[0], val[1])
    : val;

/*
  FactCard - a flex item that displays a figure, a caption, and an optional note.
    - Used in homepage "about me" section: src/pages/home/Home.jsx
    - Data is rendered from JSON at src/data/factCards.json
    - Supports specific or random step increases to `figure` at specific or random intervals
    - Color can be assigned manually (./FactCard.scss), defaults to random color from src/data/cardColors.json
    i.e. "Increases by 0-5 every 30-45 seconds"
*/
const FactCard = ({ data, color }) => {
  const {
    id = undefined, // optional, allows manual styling (also see `colorOverride`)
    figure, // required, the quantity of the statistic
    unit,  // optional, a unit associated with the figure (example: "fl oz")
    caption, // required, a summary of the figure (example: "number of facts on this page")
    note, // optional, a smaller sub-note of the caption
    interval, // optional, defines an interval at which to iterate the figure
    colorOverride // optional, determines if color will be set from props or by targeted css
  } = data;

  // `colorOverride` flag allows setting color manually via css/js
  const determinedColor = useMemo(() =>
    colorOverride ? 'default' : color,
  [colorOverride]);

  // styles to be injected into <article>
  const cardStyles = useMemo(() => ({
    backgroundColor: determinedColor
  }), [determinedColor]);

  // initialize figure to given value `x`, or random int within range `[x, y]`
  const [figureString, setFigureString] = useState(randomIfArray(figure));

  const iterateFigure = () =>
    setFigureString(previous => previous + 1);

  // sets card interval (if specified)
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
          let randomTimeout = getRandomNumber(60, 180);
          elapsed += randomTimeout;
          
          setTimeout(iterateFigure, elapsed);
        }
      }
      // if `step.interval` is 1, just iterate
      else iterateFigure();
    },
    // set timeout `x`, or random timeout in range `[x,y]`
    randomIfArray(interval.timeout));

  // interval handling
  useEffect(() => {
    let cardInterval;

    if (interval && !cardInterval)
      cardInterval = setCardInterval();

    return () => {
      clearInterval(cardInterval);
    }
  });

  return (
    <article id={id} className="fact-card" style={cardStyles}>
      <span>{figureString} { unit && unit }</span>
      <em>{caption}</em>
      { note &&
        <small>({note})</small>
      }
    </article>
  );
}

export default FactCard;

