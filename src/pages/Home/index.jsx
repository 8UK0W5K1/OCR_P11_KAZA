import React from 'react';
import { useState, useEffect } from 'react';
import Banner from '../../components/Banner';
import bannerHome from '../../assets/bannerHome.png';
import Gallery from '../../Gallery';
import { housingsData } from '../../data/housingsData.json';
console.log({ housingsData });

/**
 * Création de la page d'accueil
 *
 * @param {Array} housingsData -
 * @return {JSX.Element}
 */

// initialisation des données json

const Home = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`../../data/housingsData.json`);
        const housingsData = await response.json();
        console.log(housingsData);
        setData(housingsData);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <main>
      <Banner image={bannerHome} type='Home' />
      <Gallery />
    </main>
  );
};

export default Home;
