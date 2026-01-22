import { useEffect, useState } from 'react';
import { Link } from 'react-router';

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
      <hgroup>
        <h1>About Me</h1>
        <em>If you're looking for a more professional summary of my career, check out <Link to="/resume">my resume</Link>!</em>
      </hgroup>


      <section id="about-summary">
        <h2>Summary</h2>
        <p>
          I'm <b>26 years old</b> with <b>six years</b> of professional development experience. <br />
          My current role focuses on <b>React with react-admin</b> and <b>AWS CDK</b>. <br />
          <br />
          Outside of work, my hobbies include <b>woodworking, piano/keyboard, and birdwatching</b>. <br />
        </p>
      </section>

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
    </main>
  );
}

export default About;

