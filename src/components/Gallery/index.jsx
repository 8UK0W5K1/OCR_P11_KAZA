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
      {accomodationData.map(({ id, title, cover }) => (
        <Card key={`${id}`} id={id} title={title} cover={cover} />
      ))}
    </div>
  );
};

export default Gallery;
