import React from 'react';
import './rating.css';
import fullStar from '../../assets/fullStar.svg';
import emptyStar from '../../assets/emptyStar.svg';

const Rating = ({ rating }) => {
  const star = <img src={fullStar} alt='étoile pleine' />;
  const noStar = <img src={emptyStar} alt='étoile vide' />;

  const starsArr = [];
  const maxRate = 5;
  for (let i = 0; i < maxRate; i++) {
    i < rating ? starsArr.push(star) : starsArr.push(noStar);
  }

  return (
    <ul className='rating'>
      {starsArr.map((star, index) => (
        <li key={index}>{star}</li>
      ))}
    </ul>
  );
};

export default Rating;
