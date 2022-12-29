import React from 'react';
import TestimonyCard from '../card/TestimonyCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Image from '../../assets/img/avatar/person.webp';

const TestimonySection = () => {
  return (
    <section className="container mx-auto px-4 mt-20">
      <div className="pb-8 text-center">
        <h2 className="text-slate-900 text-5xl font-italiano text-shadow">
          Apa kata mereka?
        </h2>
      </div>
      <div className="">
        <Swiper
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            '@0.00': { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <TestimonyCard
              image={Image}
              name="Azizah"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In tempore officiis"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonyCard
              image={Image}
              name="Azizah"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In tempore officiis"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonyCard
              image={Image}
              name="Azizah"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In tempore officiis"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonyCard
              image={Image}
              name="Azizah"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In tempore officiis"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonySection;
