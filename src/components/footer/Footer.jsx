import { Link } from 'react-router';
import RandomIcon from '../randomIcon/RandomIcon';

import GithubIcon from '/public/github.svg?react';

import './Footer.scss';


const Footer = () => {
  const versionNumber = import.meta.env.VITE_APP_VERSION;

  return (
    <footer>
      <span>&copy; James Courson 2026</span>
      <RandomIcon />
      <b>v{versionNumber}</b>
    </footer>
  );
}

export default Footer;

