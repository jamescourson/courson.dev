import { NavLink } from 'react-router';
import Nav from '../nav/Nav';

import './Header.scss';


const Header = () => (
  <header>
    <NavLink to="/" id="name-link">
      <span>James Courson<small>.dev</small></span>
    </NavLink>

    <Nav />
  </header>
);

export default Header;

