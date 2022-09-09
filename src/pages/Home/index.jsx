import React from 'react';
import { useState, useEffect } from 'react';
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

const Home = () => {
  const [accomodationData, setData] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/8UK0W5K1/OCR_P11_KAZA/main/src/data/housingsData.json`
        );
        const accomodationData = await response.json();
        setData(accomodationData);
        setIsLoading(false);
        console.log('###');
        console.log(accomodationData);
        console.log('###');
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <main>
      <Banner image={bannerHome} type='Home' />
      {isloading
        ? 'Loading...'
        : accomodationData.map((data) => (
            <li key={data.id}>
              <img src={data.cover} alt='' /> - {data.title}
            </li>
          ))}
      {/* <Gallery accomodationData={accomodationData} /> */}
    </main>
  );
};

export default Home;
