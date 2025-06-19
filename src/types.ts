import React from 'react';

export interface Amenity {
  id: string;
  name: string;
  description?: string;
  icon: React.ReactNode;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface NavLink {
  href: string;
  label: string;
}