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

        <hr className="hr-partial" />
      </hgroup>

      <section id="home-portal">
        <h2>While you're here:</h2>
        
        <ul>
          <li>Learn a bit <Link to="/about">about me</Link></li>
          <li>Take a look at my <Link to="/projects">personal projects & collaborations</Link></li>
        </ul>
      </section>

      <article id="portal-resume">
        <em>
          Looking for a competent frontend developer to join your team? <br />
        </em>
        <Link to="/resume" id="resume-link"><b>Check out my resume!</b></Link>
        <small>
          Quick downloads:
          &nbsp;<a href="#">.pdf</a>,
          &nbsp;<a href="#">.docx</a>
        </small>
      </article>

      <section id="home-todo">
        <hr className="hr-partial" />
        <h2>To do:</h2>
        <ul>
          <li>Dark theme + toggle button</li>
          <li>Add more fun facts to the <Link to="/about">about page</Link></li>
          <li>Visualize <Link to="/resume">resume</Link> from JSON</li>
        </ul>
      </section>
    </main>
  );
}

export default Home;

