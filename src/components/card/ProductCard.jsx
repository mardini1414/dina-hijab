import React from 'react';

const ProductCard = ({ image, title, oldPrice, price }) => {
  return (
    <div className="max-w-[400px]">
      <div className="overflow-hidden relative rounded">
        <div className="hover:scale-110 transition duration-300 ease-in-out">
          <div className="absolute left-0 bg-light/20 w-full h-full"></div>
          <img src={image} alt={title} className="object-cover object-center" />
        </div>
      </div>
      <div className="mt-3 grid gap-2 text-center">
        <h3 className="text-slate-900">{title}</h3>
        <small className="block line-through text-red-500 animate-pulse">
          Rp.{oldPrice}
        </small>
        <span className="block text-slate-900 font-semibold">Rp.{price}</span>
        <button className="bg-primary py-2 rounded text-white">Dapatkan sekarang</button>
      </div>
    </div>
  );
};

export default ProductCard;
