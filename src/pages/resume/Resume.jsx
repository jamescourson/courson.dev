import './Resume.scss';

const Resume = () => (
  <main id="page-resume">
    <section>
      <h1>Resume</h1>
      <em id="resume-downloads">
        One-page downloads 🠚&nbsp;
        <a href="#">.pdf</a>,&nbsp;
        <a href="#">.docx</a>
      </em>
      <hr className='hr-partial' />
    </section>

    <section id="resume-introduction">
      <h2>James Courson</h2>
      <em>Software Designer/Developer</em><br />
      <b>⎈&nbsp;Pittsburgh, PA, USA</b><br />
      
      <h3>Skills</h3>
      <ul>
        <li>Expertise in <b>HTML, CSS, and JavaScript</b></li>
        <li>Familiarity with <b>AWS and cloud development</b></li>
        <li><b>Adaptable</b> to new technologies & processes</li>
        <li><b>Collaborative</b> within a team environment</li>
      </ul>
    </section>

    <section>
      <h2>Professional Experience</h2>

      <article id="current-role">
        <h3>Current Role</h3>

        <div>
          <img src="infobate.png" alt="InfoBATE" /><br />
          <span><b>Developer</b> at InfoBATE</span><br />
          <em>September 2020 - present</em>
          <br />
          <code>AWS, React-admin, PostgREST</code>
        </div>
      </article>

      <article id="past-roles">
        <h3>Past Role(s)</h3>
        <div>
          <article>
            <img src="cgi.svg" alt="CGI" /><br />
            <span><b>Consultant</b> at CGI</span><br />
            <em>June 2019 - August 2020</em><br />
            <code>Java, Maven, Angular</code>
          </article>
        </div>
      </article>
    </section>
  </main>
);

export default Resume;

