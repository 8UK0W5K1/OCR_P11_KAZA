import React from 'react';
import './accomodationTitle.css';

const AccomodationTitle = ({ accomodationTitle, accomodationLocation }) => {
  return (
    <div>
      <h1 className='accomodationPage__title'>{accomodationTitle}</h1>
      <h2 className='accomodationPage__location'>{accomodationLocation}</h2>
    </div>
  );
};

export default AccomodationTitle;
