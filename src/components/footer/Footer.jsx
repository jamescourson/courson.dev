import { useEffect, useState } from 'react';
import RandomIcon from '../randomIcon/RandomIcon';

import './Footer.scss';


const defaultVersion = 'v0.0.0';

const Footer = () => {
  const [version, setVersion] = useState(defaultVersion);
  const lastUpdated = new Date().toLocaleDateString();

  useEffect(() => {
    fetch('version.txt')
      .then(res => res.text())
      .then(text => setVersion(text.trim()))
      .catch(() => setVersion(defaultVersion))
  }, []);

  return (
    <>
      <hr id="hr-footer" />
      <footer>
        <div>
          <span>&copy; 2026 JMC</span>
          <RandomIcon />
          <b>v{version}</b>
        </div>

        <small>Last Updated: {lastUpdated}</small>
      </footer>
    </>
  );
}

export default Footer;

