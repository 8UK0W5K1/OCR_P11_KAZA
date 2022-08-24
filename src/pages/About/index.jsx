import React from 'react';
import Banner from '../../components/Banner';
import bannerAbout from '../../assets/bannerAbout.png';
import './about.css';

const About = () => {
  return (
    <main>
      <Banner image={bannerAbout} type='About' />
    </main>
  );
};

export default About;
