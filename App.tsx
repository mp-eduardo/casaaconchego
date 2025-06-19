
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AmenitiesSection from './components/AmenitiesSection';
import GallerySection from './components/GallerySection';
import LocationSection from './components/LocationSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-brand-dark bg-brand-light">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <AmenitiesSection />
        <GallerySection />
        <LocationSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
