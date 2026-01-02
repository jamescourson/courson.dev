import './Resume.scss';

const Resume = () => (
  <main id="page-resume">
    <hgroup>
      <h1>Resume</h1>
      <em id="resume-downloads">
        One-page downloads:&nbsp;
        <a href="#">.pdf</a>,&nbsp;
        <a href="#">.docx</a>
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
          <li>6 years of experience with <b>complex UI design</b> and front-end tooling</li>
          <li>Extensive knowledge of <b>HTML, CSS, and JavaScript</b></li>
          <li>Proficiency with <b>AWS core services</b> and cloud-based development</li>
          <li>A strong focus on <b>clean, maintainable code and markup</b></li>
        </ul>
      </section>

      <section id="resume-experience">
        <h2>Experience</h2>

        <div id="roles-list">
          <div id="current-role">
            <h3>Current Role</h3>

            <article id="role-infobate">
              <img src="infobate.png" alt="InfoBATE" /><br />
              <span><b>Developer</b> at InfoBATE</span><br />
              <em>September 2020 - present</em><br />
              <span>Pittsburgh, PA, USA (remote)</span><br />
              <code>🛠 AWS, React-admin, PostgREST</code>
            </article>
          </div>

          <div id="past-roles">
            <h3>Past Role</h3>
            <div>
              <article id="role-cgi">
                <img src="cgi.svg" alt="CGI" /><br />
                <span><b>Consultant</b> at CGI</span><br />
                <em>June 2019 - August 2020</em><br />
                <span>Pittsburgh, PA, USA</span><br />
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
            <img src="te-logo.png" alt="Tech Elevator" /><br />
            <span><b>.NET Curriculum</b> at Tech Elevator</span><br />
            <em>December 2018 - April 2019</em><br />
            <span>Pittsburgh, PA, USA</span><br />
            <code>🛠 C#.NET, Azure, Vue.js</code>
          </article>

          <article id="education-psu">
            <img src="psu-logo.png" alt="Penn State University" /><br />
            <span><b>Computer Science</b> at Penn State</span><br />
            <em>September 2017 - December 2019</em><br />
            <span>Erie, PA, USA</span><br />
            <code>🛠 C++, Python, JavaScript</code>
          </article>
        </div>
      </section>
    </div>
    
    <small>
      <a href="https://github.com/jamescourson/courson.dev/code/src/components/Resume.jsx">View source</a>
    </small>
  </main>
);

export default Resume;

