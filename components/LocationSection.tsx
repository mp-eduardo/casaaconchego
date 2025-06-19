
import React from 'react';
import { LOCATION_IMAGE_URL, GOOGLE_MAPS_DIRECTIONS_URL } from '../constants';
import { MapIcon } from '@heroicons/react/24/solid';

const placeholderGoogleMapsUrl = "COLOQUE_AQUI_O_ENDERECO_OU_COORDENADAS_PARA_O_GOOGLE_MAPS";

const LocationSection: React.FC = () => {
  const showGoogleMapsButton = GOOGLE_MAPS_DIRECTIONS_URL && (GOOGLE_MAPS_DIRECTIONS_URL as string) !== placeholderGoogleMapsUrl;

  return (
    <section id="location" className="py-16 md:py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-serif font-bold text-brand-primary mb-6">
              Localização Privilegiada em Santo Amaro
            </h2>
            <p className="text-lg text-brand-dark mb-4 leading-relaxed">
              A Casa Aconchego está situada em Santo Amaro do Maranhão, um verdadeiro paraíso conhecido como o "Caribe Nordestino". Santo Amaro oferece um acesso mais tranquilo e exclusivo às lagoas mais deslumbrantes e intocadas dos Lençóis Maranhenses.
            </p>
            <p className="text-lg text-brand-dark mb-4 leading-relaxed">
              Desfrute da paz de uma cidade pequena e acolhedora, com fácil acesso a passeios incríveis como a Lagoa da Gaivota, Lagoa das Emendadas, Betânia e a imensidão das dunas que se perdem de vista. A combinação perfeita de aventura e sossego.
            </p>
            <p className="text-lg text-brand-dark mb-6 leading-relaxed">
              Prepare-se para se encantar com paisagens de tirar o fôlego, um céu estrelado incomparável e a hospitalidade calorosa do povo maranhense.
            </p>
            {showGoogleMapsButton && (
              <a
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-brand-secondary hover:bg-opacity-80 text-brand-primary font-semibold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <MapIcon className="h-6 w-6 mr-2" />
                Traçar Rota no Google Maps
              </a>
            )}
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src={LOCATION_IMAGE_URL} 
              alt="Paisagem deslumbrante dos Lençóis Maranhenses em Santo Amaro" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;