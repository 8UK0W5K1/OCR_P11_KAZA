import React from 'react';
import { useState, useEffect } from 'react';
import Banner from '../../components/Banner';
import bannerHome from '../../assets/bannerHome.png';
import Gallery from '../../Gallery';
// import housingsData from '../../data/housingsData.json';
// console.log(housingsData);

/**
 * Création de la page d'accueil
 *
 * @param {Array} housingsData -
 * @return {JSX.Element}
 */

// initialisation des données json

const Home = () => {
  // const [Data, setData] = useState([]);

  const [accomodationData, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/8UK0W5K1/OCR_P11_KAZA/main/public/data/housings.json?token=GHSAT0AAAAAABWUPTTQUMB56GANJ5IV6BEOYY3HCEA`
        );
        const accomodationData = await response.json();
        setData(accomodationData);
        console.log(accomodationData);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  // const url = './housingsData.json';
  // fetch(url)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .then((results) => {
  //     console.log(results);
  //     console.log(results.body);
  //   });

  // useEffect(() => {
  //   async function fetchData() {
  //     fetch
  //     try {
  //       const response = await fetch(`./housingsData.json`);
  //       const housingsData = await response.json();
  //       console.log(housingsData);
  //       setData(housingsData);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchData();
  // }, []);

  return (
    <main>
      <Banner image={bannerHome} type='Home' />
      <Gallery />
    </main>
  );
};

export default Home;
