import React from 'react';
import { useParallax } from 'react-scroll-parallax';

const OfferSection = () => {
  const paralax = useParallax({
    speed: -10,
  });
  return (
    <section>
      <div className="h-[40px] sm:h-[60px] md:h-[80px] bg-secondary"></div>
      <div className="overflow-hidden h-[380px] sm:h-[600px]">
        <div
          ref={paralax.ref}
          className="bg-[url('/src/assets/img/bg/bg-offer.webp')] bg-no-repeat bg-cover bg-center h-[460px] sm:h-[680px] relative"
        >
          <div className="absolute left-0 w-full h-full bg-light/20"></div>
          <div className="container mx-auto px-4 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <h2 className="text-slate-900 font-italiano text-4xl w-full md:text-6xl">
              Dapatkan penawaran menarik
            </h2>
            <h2 className="text-slate-900 font-italiano text-5xl w-full md:text-8xl lg:translate-x-[30%] translate-x-[10%]">
              hanya dari Dina Hijab
            </h2>
          </div>
        </div>
      </div>
      <div className="h-[40px] sm:h-[60px] md:h-[80px] bg-secondary"></div>
    </section>
  );
};

export default OfferSection;
