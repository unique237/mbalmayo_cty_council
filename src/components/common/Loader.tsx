import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative">
        <img
          src="https://res.cloudinary.com/dipmwyrfq/image/upload/v1746168715/logo_uedy1g.jpg"
          alt="Mbalmayo Council"
          className="h-24 w-24 rounded-full object-cover"
        />
        <div className="absolute inset-0 animate-spin rounded-full border-b-2 border-primary-600"></div>
      </div>
    </div>
  );
};

export default Loader;