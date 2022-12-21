import React from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import HeroSection from './components/section/HeroSection';
import ProductSection from './components/section/ProductSection';

const App = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <HeroSection />
      <ProductSection />
    </>
  );
};

export default App;
