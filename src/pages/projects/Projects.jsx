import './Projects.scss';

const Projects = () => (
  <main id="page-projects">
    <section>
      <h1>Websites</h1>
      <hr className='hr-partial' />

      <article>
        <a href="https://james.guide" id="jg-logo">
          <img src="public/jamesguide.png" alt="James' Guide" />
        </a>

        <p>
          A repository for high-quality internet resources. <br />
          <small>
            <em>
              Currently focused on <b>woodworking</b> and <b>hand tools</b>. <br />
              Future plans include:
              <ul>
                <li><b>design</b> and <b>development</b> sections</li>
                <li>a <b>project gallery</b> with interactive features</li>
                <li><b>design</b>, <b>build</b>, and <b>restoration</b> logs</li>
              </ul>
            </em>
          </small>
        </p>
      </article>
    </section>

    <section>
      <h1>Games</h1>
      <hr className='hr-partial' />
    </section>
  </main>
);

export default Projects;

