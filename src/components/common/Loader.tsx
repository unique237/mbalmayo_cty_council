import React, { useState } from "react";

const Loader: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative">
        {!imageError ? (
          <img
            src="https://res.cloudinary.com/dipmwyrfq/image/upload/v1746168715/logo_uedy1g.jpg"
            alt="Mbalmayo Council"
            className="h-24 w-24 rounded-full object-cover"
            onError={() => setImageError(true)}
            loading="eager" // Preload the image
          />
        ) : (
          <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Logo</span>
          </div>
        )}
        <div className="absolute inset-0 animate-spin rounded-full border-b-4 border-t-4 border-primary-600"></div>
      </div>
    </div>
  );
};

export default Loader;