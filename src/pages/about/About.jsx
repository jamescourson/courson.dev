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
      <hgroup>
        <h2>Summary</h2>
        <hr className="hr-partial" />
      </hgroup>
      <p>
        I'm <b>26 years old</b> with <b>six years</b> of professional development experience. <br />
        My current role has me focusing on <b>React with react-admin</b> and <b>AWS CDK</b>. <br />
        <br />
        Outside of work, my hobbies include <b>woodworking, birdwatching, and cooking at home</b>. <br />
        I'm also interested in <b>furniture design, houseplants, and good coffee</b>.
      </p>
    </section>

    <section id="about-contact">
      <hgroup>
        <h2>Contact</h2>
        <hr className="hr-partial" />
        
        <em>
          You can connect with me on&nbsp;
          <Link to="https://github.com/jamescourson">GitHub</Link> or&nbsp;
          <Link to="https://linkedin.com/in/jamescourson">LinkedIn</Link>. <br />
        </em>

        <em>Or, get in touch via email: <b>james@courson.dev</b></em>
      </hgroup>      
    </section>

    <FunFacts />
  </main>
);

export default About;

