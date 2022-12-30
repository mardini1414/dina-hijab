import React from 'react';

const CategoryCard = ({ title, image }) => {
  return (
    <div className="max-w-[400px]">
      <div className="relative overflow-hidden rounded">
        <div className="hover:scale-110 transition duration-300 ease-in-out">
          <div className="absolute w-full h-full left-0 bottom-0 bg-gradient-to-t from-light/30 to-light/20"></div>
          <img src={image} alt={title} className="object-cover object-center" />
          <h3 className="text-white text-5xl underline font-italiano text-center absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
