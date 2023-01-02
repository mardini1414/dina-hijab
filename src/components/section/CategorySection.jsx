import React from 'react';
import CategoryCard from '../card/CategoryCard';
import Image from '../../assets/img/product/product.webp';
import HeartIcon from '../icon/HeartIcon';

const CategorySection = () => {
  return (
    <section className="container mx-auto px-4" id="category">
      <div className="py-8">
        <h2 className="text-primary text-2xl sm:text-3xl mx-auto my-8 w-max">
          <HeartIcon />
          Kategori pilihan
          <HeartIcon />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          <CategoryCard title={'Kerudung'} image={Image} />
          <CategoryCard title={'Baju muslim'} image={Image} />
          <CategoryCard title={'Aksesoris'} image={Image} />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
