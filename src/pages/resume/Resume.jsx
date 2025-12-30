import './Resume.scss';

const Resume = () => (
  <main id="page-resume">
    <h1>Resume</h1>
    <em id="resume-downloads">
      One-page versions 🠚&nbsp;
      <a href="#">.pdf</a>,&nbsp;
      <a href="#">.docx</a>
    </em>
    <hr className='hr-partial' />

    <section>
      <h2>Professional Experience</h2>

      <article id="current-role">
        <h3>Current Role</h3>
        <img src="public/infobate.png" alt="InfoBATE" /><br />
        <span><b>Developer</b> at InfoBATE</span>
        <em>&nbsp;(September 2020 - present)</em>

        <p>
          Supported development across the stack for a client-facing reporting application. <br />
          <code>AWS, React-admin, PostgREST</code>
        </p>
      </article>

      <article id="past-companies">
        <h3>Past Companies</h3>
        <div>
          <img src="public/cgi.svg" alt="CGI" />
          <img src="public/michaels.svg" alt="Michaels" />
          <img src="public/party-city.png" alt="Party City" />
        </div>
      </article>
    </section>

    <section>
      <h2>Skills</h2>

      <article>
        <ul>
          <li>Familiarity with <b>AWS and cloud development</b></li>
          <li>Expertise in <b>HTML, CSS, and JavaScript</b></li>
          <li><b>Adaptable</b> to new technologies & processes</li>
          <li><b>Collaborative</b> within a team environment</li>
        </ul>
      </article>
    </section>
  </main>
);

export default Resume;

