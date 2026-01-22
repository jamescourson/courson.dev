import './Resume.scss';


const Resume = () => (
  <main id="page-resume">
    <hgroup>
      <h1>Resume</h1>

      <p>
        <em>A condensed overview of my professional history.</em> <br />
        <small>
          Note: For readability, responsibility summaries for
          each role have been omitted from this version.
        </small>
      </p>

      <em id="resume-downloads">
        <b>
          Detailed, one-page downloads 🠚&nbsp;
          <a href="#">.pdf</a>,&nbsp;
          <a href="#">.docx</a>&nbsp;
        </b> <br />
      </em>
      <hr className='hr-partial' />
    </hgroup>

    <div id="resume-paper">
      <section id="resume-header">
        <b>James Courson</b><br />
        <em>A capable software developer</em>
        <hr className='hr-partial' />
      </section>

      <section id="resume-strengths">
        <h2>Technical Strengths</h2>
      
        <ul>
          <li>6 years of experience with <b>complex UI design</b>, primarily in <b>React</b></li>
          <li>Proficiency with <b>AWS CDK and core services</b> for <b>IaC development</b></li>
          <li>Extensive hands-on knowledge of <b>HTML, CSS, and JavaScript</b></li>
          <li>A strong focus on <b>clean, maintainable code and markup</b></li>
        </ul>
      </section>

      <section id="resume-experience">
        <h2>Experience</h2>

        <div id="roles-list">
          <div id="current-role">
            <h3>Current Role</h3>

            <article id="role-infobate">
              <img src="infobate.png" alt="InfoBate" />
              <span><b>Developer</b> at InfoBate</span>
              <em>September 2020 - present</em>
              <span>Pittsburgh, PA (remote)</span>
              <code>🛠 AWS, React-admin, PostgREST</code>
            </article>
          </div>

          <div id="past-roles">
            <h3>Past Role</h3>
            <div>
              <article id="role-cgi">
                <img src="cgi.svg" alt="CGI" />
                <span><b>Consultant</b> at CGI</span>
                <em>June 2019 - August 2020</em>
                <span>Pittsburgh, PA (on-site)</span>
                <code>🛠 Java 8, Maven, Angular</code>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="resume-education">
        <h2>Education</h2>
        <p>
          I obtained a technical diploma from <b>Tech Elevator</b> in April of 2019.
        </p>

        <div>
          <article id="education-te">
            <img src="te-logo.png" alt="Tech Elevator" />
            <span><b>.NET Curriculum</b> at Tech Elevator</span>
            <em>December 2018 - April 2019</em>
            <span>Pittsburgh, PA</span>
            <code>🛠 C#.NET, Azure, Vue.js</code>
          </article>

          <article id="education-psu">
            <img src="psu-logo.png" alt="Penn State University" />
            <span><b>Computer Science</b> at Penn State</span>
            <em>September 2017 - December 2019</em>
            <span>Erie, PA</span>
            <code>🛠 C++, Python, JavaScript</code>
          </article>
        </div>
      </section>
    </div>
  </main>
);

export default Resume;

