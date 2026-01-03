import { useEffect, useState } from "react";

const ConditionalNote = ({ note }) => 
  note
    ? <small>({note})</small>
    : <></>;

const AboutCard = ({ data, color }) => {
  const { id, colorOverride, figure, unit, caption, note, interval } = data;
  // prefer scss background-color when id is set
  const determinedColor = colorOverride ? 'default' : color;

  const [intervalFigure, setIntervalFigure] = useState(figure);
  const setCardInterval = () =>
    interval && setInterval(() =>
      setIntervalFigure(intervalFigure + interval.step),
    interval.length);  

  useEffect(() => {
    let cardInterval;
    
    if (interval)
      cardInterval = setCardInterval();

    return () => {
      clearInterval(cardInterval);
    }
  });

  return (
    <article id={id || undefined} style={{ backgroundColor: determinedColor }}>
      <span>{intervalFigure} { unit && unit }</span>
      <em>{caption}</em>
      <ConditionalNote note={note} />
    </article>
  );
}

export default AboutCard;

