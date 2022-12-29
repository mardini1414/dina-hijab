import React from 'react';
import HeartIcon from '../icon/HeartIcon';
import ChevronIcon from '../icon/ChevronIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import ProductCard from '../card/ProductCard';
import Image from '../../assets/img/product/product.webp';
import 'swiper/css/navigation';

const OfferSection = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="pt-8">
        <h2 className="text-primary text-2xl sm:text-3xl mx-auto my-8 w-max">
          <HeartIcon />
          Penawaran
          <HeartIcon />
        </h2>
      </div>
      <div className="relative">
        <div className="w-10 h-10 bg-white/80 shadow-lg next-el flex justify-center items-center rounded-full absolute bottom-1/2 left-2 sm:-left-5 z-20">
          <ChevronIcon direction={'left'} />
        </div>
        <div className="w-10 h-10 bg-white/80 shadow-lg prev-el flex justify-center items-center rounded-full absolute bottom-1/2 right-2 sm:-right-5 z-20">
          <ChevronIcon direction={'right'} />
        </div>
        <Swiper
          navigation={{ nextEl: '.next-el', prevEl: '.prev-el' }}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          centeredSlides={true}
          centeredSlidesBounds={true}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            '@0.00': { slidesPerView: 1 },
            640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          <SwiperSlide>
            <ProductCard
              title={'Kerudung'}
              image={Image}
              oldPrice={'99.000'}
              price={'89.000'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              title={'Kerudung'}
              image={Image}
              oldPrice={'99.000'}
              price={'89.000'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              title={'Kerudung'}
              image={Image}
              oldPrice={'99.000'}
              price={'89.000'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              title={'Kerudung'}
              image={Image}
              oldPrice={'99.000'}
              price={'89.000'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              title={'Kerudung'}
              image={Image}
              oldPrice={'99.000'}
              price={'89.000'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              title={'Kerudung'}
              image={Image}
              oldPrice={'99.000'}
              price={'89.000'}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OfferSection;
