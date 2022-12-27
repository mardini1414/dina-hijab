import React from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import OfferSection from './components/section/OfferSection';
import HeroSection from './components/section/HeroSection';
import ProductSection from './components/section/ProductSection';
import { ParallaxProvider } from 'react-scroll-parallax';
import AboutSection from './components/section/AboutSection';
import TestimonySection from './components/section/TestimonySection';
import ContactSection from './components/section/ContactSection';
import FooterSection from './components/section/FooterSection';

const App = () => {
  return (
    <ParallaxProvider>
      <Banner />
      <Navbar />
      <HeroSection />
      <ProductSection />
      <OfferSection />
      <div className="bg-[url('/src/assets/img/bg/sprinkle.svg')] bg-no-repeat bg-cover">
        <AboutSection />
        <TestimonySection />
        <ContactSection />
      </div>
      <FooterSection />
    </ParallaxProvider>
  );
};

export default App;
