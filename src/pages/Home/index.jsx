import React from 'react';
import Banner from '../../components/Banner';
import bannerHome from '../../assets/bannerHome.png';
/**
 * Création de la page d'accueil
 *
 * @param {Array} housingsData -
 * @return {JSX.Element}
 */

//

const Home = ({ housingsData }) => {
  return (
    <main>
      <Banner image={bannerHome} type='Home' />
      <h1>Homepage!</h1>
    </main>
  );
};

export default Home;
