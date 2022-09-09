import React from 'react';
// import Card from '../components/Card';

/** Création galerie page d'accueil
 * @param {array}  - Array logements
 * @return {JSX.Element}
 */

const Gallery = ({ accomodationData }) => {
  return (
    <div className='gallery'>
      {{ accomodationData }.map((data) => (
        <li key={data.id}>
          <img src={data.cover} alt='' /> - {data.title}
        </li>
      ))}
    </div>
  );
};

export default Gallery;
