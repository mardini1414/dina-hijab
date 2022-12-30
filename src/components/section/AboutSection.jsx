import React from 'react';
import AboutImage from '../../assets/img/bg/about.webp';

const AboutSection = () => {
  return (
    <section className="container mx-auto px-4 mt-20" id="about">
      <div className="flex justify-center flex-col md:flex-row text-center md:text-start overflow-hidden">
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="relative max-w-[400px] md:mr-10"
        >
          <div className="absolute left-0 w-full h-full bg-light/20"></div>
          <img src={AboutImage} alt="about" className="rounded" />
        </div>
        <div data-aos="fade-left" data-aos-delay="1000" className="max-w-[400px] mt-10">
          <h2 className="font-italiano text-slate-900 text-5xl mb-6 text-shadow">
            Tentang kami
          </h2>
          <div className="bg-light rounded">
            <p className="leading-relaxed text-primary/90 text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In tempore
              officiis, facilis quaerat ab nisi iste, quae nesciunt sint saepe sequi
              voluptate beatae ipsam fugit neque! Temporibus atque necessitatibus
              voluptate?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
