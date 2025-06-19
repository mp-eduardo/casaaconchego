
import React from 'react';
import { WHATSAPP_LINK, HERO_IMAGE_URL, BOOKING_COM_URL, AIRBNB_URL, GOOGLE_MAPS_DIRECTIONS_URL } from '../constants';
import { BuildingOffice2Icon, HomeModernIcon, MapIcon } from '@heroicons/react/24/solid';

// Define placeholder constants locally to check against, ensuring buttons only show if actual URLs are provided.
const placeholderBookingUrl = "COLOQUE_AQUI_O_LINK_DIRETO_DA_SUA_LISTAGEM_NO_BOOKING_COM";
const placeholderAirbnbUrl = "COLOQUE_AQUI_O_LINK_DIRETO_DA_SUA_LISTAGEM_NO_AIRBNB";
const placeholderGoogleMapsUrl = "COLOQUE_AQUI_O_ENDERECO_OU_COORDENADAS_PARA_O_GOOGLE_MAPS";

const HeroSection: React.FC = () => {
  const showBookingButton = BOOKING_COM_URL && (BOOKING_COM_URL as string) !== placeholderBookingUrl;
  const showAirbnbButton = AIRBNB_URL && (AIRBNB_URL as string) !== placeholderAirbnbUrl;
  const showGoogleMapsButton = GOOGLE_MAPS_DIRECTIONS_URL && (GOOGLE_MAPS_DIRECTIONS_URL as string) !== placeholderGoogleMapsUrl;

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" 
      style={{ backgroundImage: `url('${HERO_IMAGE_URL}')` }}
      aria-label="Vista panorâmica dos Lençóis Maranhenses, dunas e lagoas"
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Casa Aconchego
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Seu refúgio de conforto e tranquilidade nos Lençóis Maranhenses, em Santo Amaro.
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-secondary hover:bg-opacity-80 text-brand-primary font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105 w-full sm:w-auto min-w-[240px]"
          >
            Reservar (WhatsApp)
          </a>
          {showBookingButton && (
            <a
              href={BOOKING_COM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-secondary hover:bg-opacity-80 text-brand-primary font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105 w-full sm:w-auto min-w-[240px] flex items-center justify-center"
            >
              <BuildingOffice2Icon className="h-5 w-5 mr-2" />
              Booking.com
            </a>
          )}
          {showAirbnbButton && (
            <a
              href={AIRBNB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-secondary hover:bg-opacity-80 text-brand-primary font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105 w-full sm:w-auto min-w-[240px] flex items-center justify-center"
            >
              <HomeModernIcon className="h-5 w-5 mr-2" />
              Airbnb
            </a>
          )}
          {showGoogleMapsButton && (
            <a
              href={GOOGLE_MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-secondary hover:bg-opacity-80 text-brand-primary font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105 w-full sm:w-auto min-w-[240px] flex items-center justify-center"
            >
              <MapIcon className="h-5 w-5 mr-2" />
              Traçar Rota
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
