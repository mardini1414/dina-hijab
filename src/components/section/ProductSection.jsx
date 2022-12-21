import React from 'react';
import ProductCard from '../card/ProductCard';
import Image from '../../assets/img/product/product.webp';
import CategoryCard from '../card/CategoryCard';

const ProductSection = () => {
  return (
    <section className="container mx-auto px-4">
      <div>
        <h2 className="text-primary text-3xl mx-auto my-8 w-max">
          Spesial untukmu
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <div>
        <h2 className="text-primary text-3xl mx-auto my-8 w-max">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          Kategori pilihan
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategoryCard title={'Kerudung'} image={Image} />
          <CategoryCard title={'Baju muslim'} image={Image} />
          <CategoryCard title={'Aksesoris'} image={Image} />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
