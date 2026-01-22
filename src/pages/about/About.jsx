import { Link } from 'react-router';

import FunFacts from './funFacts/FunFacts';

import './About.scss';


const About = () => (
  <main id="page-about">
    <hgroup>
      <h1>About Me</h1>
      <em>If you're looking for a more professional summary of my career, check out <Link to="/resume">my resume</Link>!</em>
    </hgroup>


    <section id="about-summary">
      <h2>Summary</h2>
      <p>
        I'm <b>26 years old</b> with <b>six years</b> of professional development experience. <br />
        My current role has me focusing on <b>React with react-admin</b> and <b>AWS CDK</b>. <br />
        <br />
        Outside of work, my hobbies include <b>woodworking, birdwatching, and cooking at home</b>. <br />
        I currently live in the <b>Pittsburgh, PA area</b>.
      </p>
    </section>

    <FunFacts />
  </main>
);

export default About;

