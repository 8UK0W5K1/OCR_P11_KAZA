import React from 'react';
import Banner from '../../components/Banner';
import bannerAbout from '../../assets/bannerAbout.png';
import './about.css';

/** Création de la page About
 * @return {JSX.Element}
 */

const About = () => {
  return (
    <main>
      <Banner image={bannerAbout} type='About' />
    </main>
  );
};

export default About;
