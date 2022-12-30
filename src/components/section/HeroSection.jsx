import React from 'react';
import scrollIntoView from '../../helper/scrollIntoView';
import ShopingIcon from '../icon/ShopingIcon';

const HeroSection = () => {
  return (
    <section
      className="h-[600px] bg-[url('/src/assets/img/bg/bg-hero.webp')] bg-no-repeat bg-cover bg-center relative overflow-hidden"
      id="home"
    >
      <div className="absolute bg-light/10 h-full z-10 w-full left-0 flex justify-center items-center px-4">
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="text-center max-w-full sm:max-w-[600px] bg-light/50 py-4 px-2 rounded shadow"
        >
          <h1 className="font-italiano text-slate-900 text-5xl">Dina Hijab</h1>
          <p className="my-3 leading-relaxed text-slate-900 text-shadow">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus incidunt
            aliquid maxime aliquam neque quas maiores fuga nobis vero! Adipisci!
          </p>
          <button
            className="bg-primary text-white px-4 py-2 rounded shadow"
            onClick={() => scrollIntoView('product')}
          >
            <ShopingIcon /> Mulai belanja
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
