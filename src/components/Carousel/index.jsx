import React from 'react';
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import './carousel.css';

/** Création du carousel logement
 * @param {array} pictures - Tableau d'images à afficher dans le carroussel
 * @return {JSX.Element}
 */

const Carousel = ({ pictures }) => {
  const [pictureId, setPictureId] = useState(0);

  // console.log(typeof pictures);
  // console.log(pictures.length);

  if (pictures.length > 1) {
    return (
      <div className='carousel'>
        <button
          onClick={() =>
            pictureId === 0
              ? setPictureId(pictures.length - 1)
              : setPictureId(pictureId - 1)
          }
        >
          <img className='carousel__leftIcon' src={leftArrow} alt='previous' />
        </button>
        <img
          className='carousel__img'
          src={pictures[pictureId]}
          alt='logement'
        />
        <button
          onClick={() =>
            pictureId === pictures.length - 1
              ? setPictureId(0)
              : setPictureId(pictureId + 1)
          }
        >
          <p className='carousel__picturesNumber'>
            {pictureId + 1}/{pictures.length}
          </p>
          <img className='carousel__rightIcon' src={rightArrow} alt='next' />
        </button>
      </div>
    );
  } else {
    return (
      <div className='carousel'>
        <img
          className='carousel__img'
          src={pictures[pictureId]}
          alt='1 logement'
        />
        <p className='carousel__picturesNumber'>1/1</p>
      </div>
    );
  }
};

export default Carousel;
