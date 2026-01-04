import { useEffect, useState } from 'react';

import { getRandomNumber, shuffleArray } from '../../util';

import { default as aboutCardsJson } from '../../data/aboutCards.json';
import { default as cardColorsJson } from '../../data/cardColors.json';

import './Home.scss';
import AboutCard from '../../components/aboutCard/AboutCard';


const Home = () => {
  const [aboutCards, setAboutCards] = useState([]);
  const [cardColors, setCardColors] = useState([]);
  
  useEffect(() => {
    if (cardColors.length === 0)
      setCardColors(shuffleArray(cardColorsJson));

    if (aboutCards.length === 0)
      setAboutCards(shuffleArray(aboutCardsJson));
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
        <h2>A Bit About Me</h2>

        <div>
          {aboutCards.map((item, i) => (
            <AboutCard
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

