import React from 'react';

const TestimonyCard = ({ image, name, text }) => {
  return (
    <div className="max-w-[400px] mx-auto">
      <div className="mb-4">
        <img src={image} alt={name} className="w-[150px] rounded-full mx-auto" />
        <h4 className="text-center text-slate-900 mt-2">{name}</h4>
      </div>
      <div className="bg-light rounded">
        <p className="text-center leading-relaxed text-primary/90 text-xl italic">
          &quot;{text}&quot;
        </p>
      </div>
    </div>
  );
};

export default TestimonyCard;
