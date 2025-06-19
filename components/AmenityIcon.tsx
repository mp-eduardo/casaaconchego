
import React from 'react';
import { Amenity } from '../types';

interface AmenityIconProps {
  amenity: Amenity;
}

const AmenityIcon: React.FC<AmenityIconProps> = ({ amenity }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="p-3 mb-3 rounded-full bg-brand-accent text-white">
        {/*
          The cast 'as React.ReactElement<{ className?: string }>' is crucial.
          React.cloneElement<P>(element: React.ReactElement<P>, props) infers P from 'element'.
          If 'element' is just 'React.ReactElement' (or 'React.ReactElement<any>'), TypeScript might infer P as 'unknown' in some strict contexts,
          leading to 'props' being typed as 'Partial<unknown> & Attributes'. 'Partial<unknown>' doesn't allow specific properties like 'className'.
          By casting to 'React.ReactElement<{ className?: string }>', we explicitly tell TypeScript that P includes '{ className?: string }',
          so 'Partial<P>' will accept '{ className: "..." }'.
        */}
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
