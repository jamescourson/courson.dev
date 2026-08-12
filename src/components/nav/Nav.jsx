import { NavLink } from "react-router";

import './Nav.scss';


const Nav = () => (
  <nav>
    <NavLink to="/">About</NavLink>
    <NavLink to="/resume">Resume</NavLink>
  </nav>
);

export default Nav;

