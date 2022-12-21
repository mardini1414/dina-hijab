import React, { useState } from 'react';

const Banner = () => {
  const [open, setOpen] = useState(true);
  return (
    open && (
      <div className="bg-slate-900 text-white text-center py-2 relative">
        <span>Gratis ongkir!</span>
        <div
          className="absolute right-2 top-2 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
    )
  );
};

export default Banner;
