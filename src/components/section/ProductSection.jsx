import React from 'react';
import ProductCard from '../card/ProductCard';
import Image from '../../assets/img/product/product.webp';
import HeartIcon from '../icon/HeartIcon';

const ProductSection = () => {
  return (
    <section className="container mx-auto px-4" id="product">
      <div className="pt-8">
        <h2 className="text-primary text-2xl sm:text-3xl mx-auto my-8 w-max">
          <HeartIcon />
          Spesial untukmu
          <HeartIcon />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          <ProductCard
            title={'Kerudung'}
            image={Image}
            oldPrice={'99.000'}
            price={'89.000'}
          />
          <ProductCard
            title={'Kerudung'}
            image={Image}
            oldPrice={'99.000'}
            price={'89.000'}
          />
          <ProductCard
            title={'Kerudung'}
            image={Image}
            oldPrice={'99.000'}
            price={'89.000'}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
