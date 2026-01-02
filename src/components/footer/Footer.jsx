import { useEffect, useState } from 'react';
import RandomIcon from '../randomIcon/RandomIcon';

import './Footer.scss';


const defaultVersion = 'v0.0.0';

const Footer = () => {
  const [version, setVersion] = useState(defaultVersion);
  const lastUpdated = new Date().toLocaleString();

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
        <em>Last Updated: {lastUpdated}</em>
        <div>
          <span>&copy; James Courson 2026</span>
          <RandomIcon />
          <b>{version}</b>
        </div>
      </footer>
    </>
  );
}

export default Footer;

