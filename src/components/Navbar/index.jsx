import React from 'react';
import { Link } from 'react-router-dom';
import kasaLogo from '../../assets/logo.png';
import About from '../../pages/About';
import './navbar.css';

/** Création navbar
 * @return {JSX.Element}
 */

const Navbar = () => {
  return (
    <header>
      <img className='navbar__logo' src={kasaLogo} alt='Logo Kasa' />
      <nav>
        <ul className='navbar__ul'>
          <Link to='/'>
            <li className='navbar__li'>Accueil</li>
          </Link>
          <Link to='/about' element={<About />}>
            <li className='navbar__li'>A propos</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
