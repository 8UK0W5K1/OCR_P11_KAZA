import React from 'react';
import Banner from '../../components/Banner';
import bannerAbout from '../../assets/bannerAbout.png';
import './about.css';

/** Création de la page About
 * @return {JSX.Element}
 */

const About = () => {
  const aboutSectionTexts = [
    {
      title: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    },
    {
      title: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: 'Responsabilité ',
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <main>
      <Banner image={bannerAbout} type='About' />
      <section className='aboutSection'>
        <ul>
          {aboutSectionTexts.map(({ title, content }) => (
            <li key={`${title}`}>
              {title} {content}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default About;
