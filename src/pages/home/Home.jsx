import { useEffect, useState } from 'react';

import { getRandomNumber, shuffleArray } from '../../util';

import { default as factCardsJson } from '../../data/factCards.json';
import { default as cardColorsJson } from '../../data/cardColors.json';

import './Home.scss';
import FactCard from '../../components/factCard/FactCard';


const Home = () => {
  const [factCards, setFactCards] = useState([]);
  const [cardColors, setCardColors] = useState([]);
  
  useEffect(() => {
    if (cardColors.length === 0)
      setCardColors(shuffleArray(cardColorsJson));

    if (factCards.length === 0)
      setFactCards(shuffleArray(factCardsJson));
  });

  return (
    <main id="page-home">
      <hgroup>
        <h1>Hello!</h1>
        <p>
          I'm James, a developer based in <b>Pittsburgh, PA.</b>
        </p>
      </hgroup>

      <section id="home-about">
        <h2>A Bit About Me <small>LIVE</small></h2>

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

export default Home;

