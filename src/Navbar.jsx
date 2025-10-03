import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a></li>
        <li><Link to="form" smooth={true} duration={500}>Order</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;