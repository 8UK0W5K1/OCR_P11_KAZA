import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

/** Création d'une miniature pour la galerie
 * @param {string} id - id du bien
 * @param {string} title - Titre du bien
 * @param {string} cover - url de la photo de couverture du bien
 * @return {JSX.Element}
 */

const Card = (data) => {
  return (
    <Link to={`/logement/${data.id}`}>
      <article className='card'>
        <img className='card__img' src={data.cover} alt={data.title} />
        <h2 className='card__title'>{data.title}</h2>
      </article>
    </Link>
  );
};

export default Card;
