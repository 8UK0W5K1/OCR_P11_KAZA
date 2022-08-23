import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Accueil</Link>
        </li>
        <li>
          <Link to='/about'>A propos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
