import { useEffect, useState } from 'react';
import RandomIcon from '../randomIcon/RandomIcon';

import './Footer.scss';


const defaultVersion = '0.0.0';

const Footer = () => {
  const [version, setVersion] = useState(defaultVersion);
  const lastUpdated = new Date().toLocaleDateString();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetch('version.txt')
      .then(res => res.text())
      .then(text => setVersion(text.trim()))
      .catch(() => setVersion(defaultVersion))
  }, []);

  return (
    <footer>
      <hr id="hr-footer" />
      
      <div>
        <span>&copy; 2026 JMC</span>
        <RandomIcon />
        <b>v{version}</b>
      </div>

      <small>Last Updated: {lastUpdated}</small>
    </footer>
  );
}

export default Footer;

