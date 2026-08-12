import { PDFViewer } from '~/components/PDFViewer/PDFViewer';

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

      <PDFViewer config={{
        src: "/resume/james-courson.pdf",
        theme: { preference: 'light' }
      }} />
    </hgroup>
  </main>
);

export default Resume;

