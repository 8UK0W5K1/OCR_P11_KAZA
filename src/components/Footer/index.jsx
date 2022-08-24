import React from 'react';
import footerLogo from '../../assets/footerLogo.png';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <img className='footer__logo' src={footerLogo} alt=' Logo Kasa' />
      <p className='footer__copyright'>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
