import { Link } from 'react-router';

import './Projects.scss';


const Projects = () => (
  <main id="page-projects">
    <section>
      <h1>Showcase</h1>
      <hr className='hr-partial' />

      <Link to="https://james.guide" target="_blank">
        <article id="project-jg">
          <div className='project-header'></div>
          
          <p>
            A repository for high-quality internet resources. <br />
            <small>
              <em>
                Currently focused on <b>woodworking</b> and <b>hand tools</b>. <br />
                <br />
                Future plans include <b>design</b> and <b>development</b> sections,
                a <b>project gallery</b>, and a <b>design/build/restoration log</b>.<br />
                Open source. Built on React and React Router.
              </em>
            </small>
          </p>
        </article>
      </Link>
    </section>

    <section>
      <h1>Upcoming</h1>
      <hr className='hr-partial' />

      <article>
        <div className="project-header">
          <h2>
            Birdwatch <br />
            <small><em>(placeholder title)</em></small>
          </h2>
        </div>

        <p>
          A game about birdwatching. <br />
          <small>
            <em>
              Explore procedurally-generated 2D environments, take pictures of cool birds, and complete your bird book. <br />
              <br />
              2D. Built on Godot. <br />
              Coming soon!
            </em>
          </small>
        </p>
      </article>
    </section>
  </main>
);

export default Projects;

