import React from 'react';
import Card from '../Card/index';
import './gallery.css';

/** Création galerie page d'accueil
 * @param {array}  - Array logements
 * @return {JSX.Element}
 */

const Gallery = ({ accomodationData }) => {
  return (
    <div className='gallery'>
      {accomodationData.map((data) => (
        <Card
          key={`${data.id}`}
          id={data.id}
          title={data.title}
          cover={data.cover}
        />
      ))}
    </div>
  );
};

export default Gallery;
