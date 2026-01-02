import { Link } from 'react-router';

import './Projects.scss';


const Projects = () => (
  <main id="page-projects">
    <hgroup>
      <h1>Project Showcase</h1>
      <hr className='hr-partial' />
    </hgroup>

    <section id="projects-list">
      <div id="projects-featured">
        <h2>Featured</h2>

        <Link to="https://james.guide" target="_blank" className='project-link'>
          <article id="project-jg">
            <div className='project-header'></div>
            
            <div className='project-description'>
              <p>
                A repository for practical and high-quality internet resources.<br />
                <br />
                <em>Currently focused on <b>woodworking and hand tools</b>.</em>
              </p>

              <small>
                Future plans include:
                <ul>
                  <li>File downloads</li>
                  <li>Project gallery</li>
                  <li>Design/build/restoration blog</li>
                </ul>
              </small>

            </div>

            <code>🛠 React, React Router</code>
          </article>
        </Link>
      </div>

      <div id="projects-upcoming">
        <h2>Upcoming Projects</h2>

        <article id="project-bw">
          <div className="project-header">
            <h2>
              Birdwatch <small><em>(placeholder title)</em></small>
            </h2>
          </div>

          <div className="project-description">
            <p>
              A 2D sidescroller about birdwatching. <br />
              <br />
              Explore procedurally-generated 2D forests, take pictures of cool birds, and complete your coveted bird book. <br />
              <br />
              <em>In design/early development. Coming soon.</em>
            </p>
          </div>
          
          <code>🛠 Godot, GDScript</code>
        </article>
      </div>
    </section>
  </main>
);

export default Projects;

