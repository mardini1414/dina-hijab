import React from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import OfferSection from './components/section/OfferSection';
import HeroSection from './components/section/HeroSection';
import ProductSection from './components/section/ProductSection';
import { ParallaxProvider } from 'react-scroll-parallax';
import AboutSection from './components/section/AboutSection';

const App = () => {
  return (
    <ParallaxProvider>
      <Banner />
      <Navbar />
      <HeroSection />
      <ProductSection />
      <OfferSection />
      <AboutSection />
    </ParallaxProvider>
  );
};

export default App;
