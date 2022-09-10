import React from 'react';
import Banner from '../../components/Banner';
import bannerHome from '../../assets/bannerHome.png';
import Gallery from '../../components/Gallery';

/**
 * Création de la page d'accueil
 *
 * @param {Array} housingsData -
 * @return {JSX.Element}
 */

// initialisation des données json

const Home = ({ accomodationData }) => {
  return (
    <main>
      <Banner image={bannerHome} type='Home' />
      <Gallery accomodationData={accomodationData} />
    </main>
  );
};

export default Home;
