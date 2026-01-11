import { useEffect, useState } from 'react';

import { shuffleArray } from '../../util';

import { default as factCardsJson } from '../../data/factCards.json';
import { default as cardColorsJson } from '../../data/cardColors.json';

import FactCard from '../../components/factCard/FactCard';

import './About.scss';

const About = () => {
  const [factCards, setFactCards] = useState([]);
  const [cardColors, setCardColors] = useState([]);
  
  useEffect(() => {
    if (cardColors.length === 0)
      setCardColors(shuffleArray(cardColorsJson));

    if (factCards.length === 0)
      setFactCards(shuffleArray(factCardsJson));
  });

  return (
    <main id="page-about">
      <h1>About Me</h1>

      <section id="about-summary">
        <p>
          
        </p>
      </section>

      <section id="about-fun_facts">
        <hgroup>
          <h2>Fun Facts</h2>
          <small>
            <em>* not actually live</em>
          </small>
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
    </main>
  );
}

export default About;

