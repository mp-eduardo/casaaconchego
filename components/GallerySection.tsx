
import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_IMAGES_DATA } from '../constants';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const GallerySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImageModal, setSelectedImageModal] = useState<string | null>(null);
  const [currentModalIndex, setCurrentModalIndex] = useState(0);

  const autoPlayInterval = 5000; // 5 seconds

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? GALLERY_IMAGES_DATA.length - 1 : prevIndex - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === GALLERY_IMAGES_DATA.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  useEffect(() => {
    if (GALLERY_IMAGES_DATA.length <= 1) return; // No autoplay for single or no image

    const timer = setTimeout(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearTimeout(timer);
  }, [currentIndex, goToNext]);


  // Modal functions
  const openModal = (src: string, index: number) => {
    setSelectedImageModal(src);
    setCurrentModalIndex(index);
  };

  const closeModal = () => {
    setSelectedImageModal(null);
  };

  const showNextModalImage = () => {
    const nextModalIndex = (currentModalIndex + 1) % GALLERY_IMAGES_DATA.length;
    setSelectedImageModal(GALLERY_IMAGES_DATA[nextModalIndex].src);
    setCurrentModalIndex(nextModalIndex);
  };

  const showPrevModalImage = () => {
    const prevModalIndex = (currentModalIndex - 1 + GALLERY_IMAGES_DATA.length) % GALLERY_IMAGES_DATA.length;
    setSelectedImageModal(GALLERY_IMAGES_DATA[prevModalIndex].src);
    setCurrentModalIndex(prevModalIndex);
  };
  
  if (!GALLERY_IMAGES_DATA || GALLERY_IMAGES_DATA.length === 0) {
    return null; 
  }

  const currentImage = GALLERY_IMAGES_DATA[currentIndex];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-brand-primary text-center mb-12">
          Explore Nossos Espaços e a Região
        </h2>
        
        <div className="relative w-full max-w-3xl mx-auto aspect-[16/9] overflow-hidden rounded-lg shadow-2xl group">
          <img
            key={currentImage.id} 
            src={currentImage.src}
            alt={currentImage.alt}
            className="w-full h-full object-cover cursor-pointer transition-all duration-500 ease-in-out"
            onClick={() => openModal(currentImage.src, currentIndex)}
            loading="lazy"
          />
          <div 
            className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex flex-col items-center justify-end p-4 text-center"
            onClick={() => openModal(currentImage.src, currentIndex)} 
          >
             <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 translate-y-4">
                {currentImage.alt}
            </p>
          </div>

          {GALLERY_IMAGES_DATA.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/70 hover:bg-white rounded-full text-brand-primary transition duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                aria-label="Imagem anterior"
              >
                <ChevronLeftIcon className="h-7 w-7" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/70 hover:bg-white rounded-full text-brand-primary transition duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                aria-label="Próxima imagem"
              >
                <ChevronRightIcon className="h-7 w-7" />
              </button>
            </>
          )}
        </div>

        {GALLERY_IMAGES_DATA.length > 1 && (
          <div className="flex justify-center mt-6 space-x-2.5">
            {GALLERY_IMAGES_DATA.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary ${
                  currentIndex === index ? 'bg-brand-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
                aria-current={currentIndex === index ? "true" : "false"}
              />
            ))}
          </div>
        )}
      </div>

      {selectedImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] p-4"  onClick={closeModal}>
          <div className="relative bg-white p-2 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImageModal} alt="Imagem ampliada da galeria" className="w-full h-auto max-h-[calc(90vh-4rem)] object-contain rounded" />
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 p-1.5 bg-white rounded-full text-brand-primary hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-brand-primary"
              aria-label="Fechar modal"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            {GALLERY_IMAGES_DATA.length > 1 && (
              <>
                <button
                  onClick={showPrevModalImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full text-brand-primary transition duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  aria-label="Imagem anterior no modal"
                >
                  <ChevronLeftIcon className="h-8 w-8" />
                </button>
                <button
                  onClick={showNextModalImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full text-brand-primary transition duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  aria-label="Próxima imagem no modal"
                >
                  <ChevronRightIcon className="h-8 w-8" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
