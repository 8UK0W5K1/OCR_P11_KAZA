import React from 'react';
import './owner.css';

/** Création de la partie propriétaire du logement
 * @param {string} ownerName - Nom et prénom du proprio
 * @param {string} ownerAvatar - Url de la photo de profil du proprio
 * @return {JSX.Element}
 */

const Owner = ({ ownerName, ownerAvatar }) => {
  return (
    <section className='ownerSection'>
      <h3 className='ownerName'>{ownerName}</h3>
      <img
        className='ownerAvatar'
        src={ownerAvatar}
        alt={`profil de ${ownerName} `}
      />
    </section>
  );
};

export default Owner;
