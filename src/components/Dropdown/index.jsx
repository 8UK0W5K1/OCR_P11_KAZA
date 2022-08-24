import React from 'react';
import { useState } from 'react';
import './dropdown.css';
import arrowOpen from '../../assets/arrowOpen.png';
import arrowClosed from '../../assets/arrowClosed.png';

/** Création du Dropdown
 * @param {string} title - Titre dropdown
 * @param {string} content - Contenu dropdown
 * @param {string} page - Home OU About
 * @return {JSX.Element}
 */

const Dropdown = ({ title, content }) => {
  const [isClosed, setIsClosed] = useState(true);

  return isClosed ? (
    <div className='dropdownAbout__closed'>
      <button
        className='dropdownAbout__button'
        onClick={() => setIsClosed(false)}
      >
        <p>{title}</p>
        <img src={arrowOpen} alt='Ouvrir' />
      </button>
    </div>
  ) : (
    <div className='dropdownAbout__opened'>
      <button
        className='dropdownAbout__button'
        onClick={() => setIsClosed(true)}
      >
        <p>{title}</p>
        <img src={arrowClosed} alt='fermer' />
      </button>

      <div className='dropdown__content'>
        <p className='dropdownAbout__textContent'>{content}</p>
      </div>
    </div>
  );
};
export default Dropdown;
