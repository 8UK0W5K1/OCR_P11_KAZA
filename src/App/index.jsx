import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from '../pages/Home/index';
import About from '../pages/About';
import AccomodationPage from '../pages/AccomodationPage';
import Error404 from '../pages/Error404/index';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const App = () => {
  const [accomodationData, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/Cecilia-Giusti/P11---Kasa/gh-pages/data/data.json`
        );
        const accomodationData = await response.json();
        setData(accomodationData);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home accomodationData={accomodationData} />}
          />
          <Route
            path='/logement/:accomodationId'
            element={<AccomodationPage accomodationData={accomodationData} />}
          />
          <Route path='*' element={<Error404 />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
