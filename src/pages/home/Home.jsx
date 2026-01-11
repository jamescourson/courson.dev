import { Link } from 'react-router';

import './Home.scss';


const Home = () => {
  return (
    <main id="page-home">
      <hgroup>
        <h1>Hello!</h1>
        <p>
          I'm James, a developer based in <b>Pittsburgh, PA.</b> <br />
          I build and maintain practical, responsive web applications.
        </p>
      </hgroup>

      <section id="home-portal">
        <h2>While you're here:</h2>
        <ul>
          <li>Learn a bit <Link to="/about">about me</Link></li>
          <li>Check out my <Link to="/projects">personal projects & collaborations</Link></li>
          <li>
            Looking for a developer like me to join your team? <br />
              🠚&nbsp;<Link to="/resume">Check out my resume!</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Home;

