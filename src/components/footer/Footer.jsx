import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import RandomIcon from './randomIcon/RandomIcon';

import './Footer.scss';


const defaultVersion = '0.0.0';
const defaultLastUpdated = 'N/A';

const Footer = () => {
  const [version, setVersion] = useState(defaultVersion);
  const [lastUpdated, setLastUpdated] = useState(defaultLastUpdated);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetch('version.txt')
      .then(res => res.text())
      .then(text => {
        // split version and date into array
        const versionAndDate = text.trim().split('\n');
        setVersion(versionAndDate[0]);
        setLastUpdated(versionAndDate[1]);
      })
      .catch(() => setVersion(defaultVersion))
  }, []);

  return (
    <footer>
      <hr id="hr-footer" />
      
      <div>
        <span>&copy; {currentYear} JMC</span>
        <RandomIcon />
        <b>v{version}</b>
      </div>

      <small>Last Updated: {lastUpdated}</small>

      <small>
        <Link to="https://github.com/jamescourson">GitHub</Link>,&nbsp;
        <Link to="https://linkedin.com/in/jamescourson">LinkedIn</Link>
      </small>
    </footer>
  );
}

export default Footer;

