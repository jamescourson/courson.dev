import RandomIcon from '../randomIcon/RandomIcon';

import './Footer.scss';


const Footer = () => {
  const versionNumber = import.meta.env.VITE_APP_VERSION;

  return (
    <>
      <hr id="hr-footer" />
      <footer>
        <span>&copy; James Courson 2026</span>
        <RandomIcon />
        <b>v{versionNumber}</b>
      </footer>
    </>
  );
}

export default Footer;

