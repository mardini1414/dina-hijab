import React from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import OfferSection from './components/section/OfferSection';
import HeroSection from './components/section/HeroSection';
import ProductSection from './components/section/ProductSection';
import AboutSection from './components/section/AboutSection';
import TestimonySection from './components/section/TestimonySection';
import ContactSection from './components/section/ContactSection';
import FooterSection from './components/section/FooterSection';
import CategorySection from './components/section/CategorySection';
import 'swiper/css';

const App = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <HeroSection />
      <ProductSection />
      <CategorySection />
      <OfferSection />
      <div className="bg-[url('/src/assets/img/bg/sprinkle.svg')] bg-no-repeat bg-cover">
        <AboutSection />
        <TestimonySection />
        <ContactSection />
      </div>
      <FooterSection />
    </>
  );
};

export default App;
