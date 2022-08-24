import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import About from '../pages/About';
import Error404 from '../pages/Error404/index';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error404 />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
