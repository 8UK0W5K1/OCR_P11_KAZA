import React from 'react';
import './banner.css';

/** création Banniere avec une image en props
 * @param {string} type - Le type de page, Home OU About
 * @return {JSX.Element}
 */

const Banner = ({ image, type }) => {
  return type === 'Home' ? (
    <div className='banner__home'>
      <img className='bannerImg__home' src={image} alt='Montagnes' />
      <p className='bannerText__home'>Chez vous, partout et ailleurs</p>
    </div>
  ) : (
    <div className='banner__about'>
      <img className='bannerImg__about' src={image} alt='Montagnes' />
    </div>
  );
};

export default Banner;
