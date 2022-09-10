import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import AccomodationTitle from '../../components/AccomodationTitle';
import Tags from '../../components/Tags';
import Rating from '../../components/Rating';
import Owner from '../../components/Owner';
import Dropdown from '../../components/Dropdown';
import './accomodationPage.css';

/** Création d'une page d'un bien
 * @param {array} accomodationData - Tableau des logements
 * @return {JSX.Element}
 */

const AccomodationPage = ({ accomodationData }) => {
  const { accomodationId } = useParams(); //doit se nommer comme le :slug dans les routes du fichier App !
  const currentAccomodation = accomodationData.find(
    (product) => product.id === accomodationId
  );

  return window.screen.width > 600 ? (
    <main>
      <Carousel pictures={currentAccomodation.pictures} />
      <AccomodationTitle
        accomodationTitle={currentAccomodation.title}
        accomodationLocation={currentAccomodation.location}
      />

      <div className='tagsSection'>
        {currentAccomodation.tags.map((tags) => (
          <Tags key={`${tags}-${currentAccomodation.id}`} tag={tags} />
        ))}
      </div>

      <div className='ownerSection'>
        <Rating rating={currentAccomodation.rating} />
        <Owner
          ownerName={currentAccomodation.host.name}
          ownerAvatar={currentAccomodation.host.picture}
        />
      </div>

      <div className='dropdownSection'>
        <Dropdown
          type='Paragraphe'
          title='Description'
          content={currentAccomodation.description}
          page='Home'
        />
        <Dropdown
          type='Liste'
          title='Équipements'
          content={currentAccomodation.equipments}
          page='Home'
        />
      </div>
    </main>
  ) : (
    <main>
      <Carousel pictures={currentAccomodation.pictures} />
    </main>
  );
};

export default AccomodationPage;
