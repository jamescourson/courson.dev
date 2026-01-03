import { NavLink } from "react-router";

import './Nav.scss';


const Nav = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/projects">Projects</NavLink>
    <NavLink to="/resume">Resume</NavLink>
  </nav>
);

export default Nav;

