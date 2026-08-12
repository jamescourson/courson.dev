import EmbedPDF from '../../components/embedPDF/embedPDF';

import './Resume.scss';


const Resume = () => (
  <main id="page-resume">
    <hgroup>
      <h1>Resume</h1>

      <em id="resume-downloads">
        <b>
          Downloads:&nbsp;
          <a href="/resume/james-courson.pdf" download>.pdf</a>,&nbsp;
          <a href="/resume/james-courson.docx" download>.docx</a>&nbsp;
        </b> <br />
      </em>
      <hr className='hr-partial' />

      <EmbedPDF url="resume/james-courson.pdf" />
    </hgroup>
  </main>
);

export default Resume;

