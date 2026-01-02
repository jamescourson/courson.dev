import RandomIcon from '../randomIcon/RandomIcon';

import './Footer.scss';


const Footer = () => {
  const versionNumber = import.meta.env.VITE_APP_VERSION;
  const lastUpdated = new Date().toLocaleString();

  return (
    <>
      <hr id="hr-footer" />
      <footer>
        <em>Last Updated: {lastUpdated}</em>
        <div>
          <span>&copy; James Courson 2026</span>
          <RandomIcon />
          <b>v{versionNumber}</b>
        </div>
      </footer>
    </>
  );
}

export default Footer;

