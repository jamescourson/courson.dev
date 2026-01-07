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
          I'm James, a developer based in <b>Pittsburgh, PA.</b> <br />
          I build and maintain practical web applications.
        </p>
      </hgroup>

      <section id="home-about">
        <h2>Fun Facts</h2>

        <div>
          {factCards.map((item, i) => (
            <FactCard
              data={item}
              color={cardColors[i]}
              key={i}
            />
          ))}
        </div>

        <small id="footnote">
          <em>* not really live</em>
        </small>
      </section>
    </main>
  );
}

export default Home;

