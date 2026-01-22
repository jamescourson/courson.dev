import { useEffect, useState } from 'react';

import FactCard from './factCard/FactCard';
import { shuffleArray } from '~/util';

import { default as funFactsJson } from './data/funFacts.json';
import { default as cardColorsJson } from './data/cardColors.json';

import './FunFacts.scss';

const FunFacts = () => {
  const [factCards, setFactCards] = useState([]);
  const [cardColors, setCardColors] = useState([]);
  
  useEffect(() => {
    if (cardColors.length === 0)
      setCardColors(shuffleArray(cardColorsJson));

    if (factCards.length === 0)
      setFactCards(shuffleArray(funFactsJson));
  });

  return (
    <section id="about-fun_facts">
      <hgroup>
        <h2>Fun Facts</h2>
        <em>
          Some relevant to my career, others not at all. <br />
          That's what makes them fun!
        </em>
        <small>* not actually live.</small>
        <hr className="hr-partial" />
      </hgroup>

      <div>
        {factCards.map((item, i) => (
          <FactCard
            data={item}
            color={cardColors[i]}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}

export default FunFacts;

