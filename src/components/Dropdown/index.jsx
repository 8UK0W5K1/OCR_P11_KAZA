import React from 'react';
import { useState } from 'react';
import './dropdown.css';
import openArrow from '../../assets/openArrow.png';
import closedArrow from '../../assets/closedArrow.png';

/** Création du Dropdown
 * @param {string} title - title dropdown
 * @param {string} content - Contenu dropdown
 * @param {string} page - Home OU About
 * @return {JSX.Element}
 */

const Dropdown = ({ type, page, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return page === 'Home' ? (
    !isOpen ? (
      <div className='dropdown--close'>
        <button className='dropdown__button' onClick={() => setIsOpen(true)}>
          <p>{title}</p>
          <img src={openArrow} alt='Ouvrir' />
        </button>
      </div>
    ) : (
      <div className='dropdown'>
        <button className='dropdown__button' onClick={() => setIsOpen(false)}>
          <p>{title}</p>
          <img src={closedArrow} alt='Fermer' />
        </button>
        {type === 'Paragraphe' ? (
          <div className='dropdownContent'>
            <p className='dropdown__copy'>{content}</p>
          </div>
        ) : (
          <ul className='dropdown__list'>
            {content.map((element) => (
              <li key={`${element}-${element.id}`}>{element}</li>
            ))}
          </ul>
        )}
      </div>
    )
  ) : !isOpen ? (
    <div className='dropdown--close--fullDropdown'>
      <button
        className='dropdown__button--fullDropdown'
        onClick={() => setIsOpen(true)}
      >
        <p>{title}</p>
        <img src={openArrow} alt='Ouvrir' />
      </button>
    </div>
  ) : (
    <div className='dropdown--fullDropdown'>
      <button
        className='dropdown__button--fullDropdown'
        onClick={() => setIsOpen(false)}
      >
        <p>{title}</p>
        <img src={closedArrow} alt='Fermer' />
      </button>

      <div className='dropdownContent'>
        <p className='dropdownTextContent'>{content}</p>
      </div>
    </div>
  );
};
export default Dropdown;
