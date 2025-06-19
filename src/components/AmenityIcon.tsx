import React from 'react';
import { Amenity } from '../types';

interface AmenityIconProps {
  amenity: Amenity;
}

const AmenityIcon: React.FC<AmenityIconProps> = ({ amenity }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="p-3 mb-3 rounded-full bg-brand-accent text-white">
        {React.isValidElement(amenity.icon) ? 
            React.cloneElement(amenity.icon as React.ReactElement<{ className?: string }>, { className: "h-8 w-8" }) 
            : amenity.icon}
      </div>
      <h3 className="text-lg font-semibold text-brand-primary mb-1">{amenity.name}</h3>
      {amenity.description && <p className="text-sm text-brand-dark">{amenity.description}</p>}
    </div>
  );
};

export default AmenityIcon;