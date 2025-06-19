import React from 'react';
import { Amenity } from '../types';
import AmenityIcon from './AmenityIcon';
import { WifiIcon, SparklesIcon, BuildingStorefrontIcon, SunIcon, FireIcon, TvIcon, TruckIcon, UserGroupIcon, InboxStackIcon } from '@heroicons/react/24/outline';

const amenitiesData: Amenity[] = [
  { id: 'wifi', name: 'Wi-Fi de Alta Velocidade', icon: <WifiIcon />, description: "Conectividade para todos os seus dispositivos." },
  { id: 'ac', name: '3 Suítes Climatizadas', icon: <SparklesIcon />, description: "Conforto térmico em todos os quartos." },
  { id: 'kitchen', name: 'Cozinha Completa', icon: <BuildingStorefrontIcon />, description: "Equipada para suas refeições." },
  { id: 'pool', name: 'Piscina Privativa', icon: <SunIcon />, description: "Relaxe e divirta-se sob o sol." },
  { id: 'bbq', name: 'Área Gourmet com Churrasqueira', icon: <FireIcon />, description: "Perfeita para confraternizações." },
  { id: 'tv', name: 'Smart TV', icon: <TvIcon />, description: "Entretenimento com seus apps favoritos." },
  { id: 'capacity', name: 'Acomoda até 10 Pessoas', icon: <UserGroupIcon />, description: "Ideal para famílias e grupos." },
  { id: 'parking', name: 'Estacionamento', icon: <TruckIcon />, description: "Segurança para seu veículo." },
  { id: 'linen', name: 'Roupas de Cama e Banho', icon: <InboxStackIcon />, description: "Conveniência e conforto para sua estadia." },
];

const AmenitiesSection: React.FC = () => {
  return (
    <section id="amenities" className="py-16 md:py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-brand-primary text-center mb-12">
          Comodidades para seu Conforto
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenitiesData.map((amenity) => (
            <AmenityIcon key={amenity.id} amenity={amenity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;