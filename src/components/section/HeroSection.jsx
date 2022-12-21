import React from 'react';

const HeroSection = () => {
  return (
    <section className="h-[600px] bg-[url('/src/assets/img/bg/bg-hero.webp')] bg-no-repeat bg-cover bg-center relative">
      <div className="absolute bg-light/10 h-full z-10 w-full left-0 flex justify-center items-center">
        <div className="text-center max-w-[360px] md:max-w-[600px] bg-light/30 py-4 rounded shadow">
          <h1 className="font-italiano text-slate-900 text-5xl">Dina Hijab</h1>
          <p className="my-3 leading-relaxed text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus incidunt
            aliquid maxime aliquam neque quas maiores fuga nobis vero! Adipisci!
          </p>
          <button className="bg-primary text-white px-4 py-2 rounded shadow">
            Mulai belanja
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
