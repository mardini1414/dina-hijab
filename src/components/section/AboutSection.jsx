import React from 'react';
import AboutImage from '../../assets/img/bg/about.webp';

const AboutSection = () => {
  return (
    <section className="container mx-auto px-4 mt-8 bg-[url('/src/assets/img/bg/sprinkle.svg')] bg-no-repeat bg-cover">
      <div className="flex justify-center flex-col md:flex-row">
        <div className="relative max-w-[400px] md:mr-10">
          <div className="absolute left-0 w-full h-full bg-light/20"></div>
          <img src={AboutImage} alt="about" className="rounded" />
        </div>
        <div className="max-w-[400px] mt-10">
          <h2 className="font-italiano text-slate-900 text-5xl mb-6">Tentang kami</h2>
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
