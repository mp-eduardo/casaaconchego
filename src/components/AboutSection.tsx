import React from 'react';
import { ABOUT_IMAGE_URL } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src={ABOUT_IMAGE_URL} 
              alt="Interior aconchegante ou fachada da Casa Aconchego" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-serif font-bold text-brand-primary mb-6">
              Bem-vindo à Casa Aconchego
            </h2>
            <p className="text-lg text-brand-dark mb-4 leading-relaxed">
              Descubra um oásis de paz e conforto em Santo Amaro, o portal para as maravilhas dos Lençóis Maranhenses. Nossa casa foi pensada para oferecer uma experiência autêntica e acolhedora, combinando o charme rústico da região com comodidades modernas.
            </p>
            <p className="text-lg text-brand-dark mb-4 leading-relaxed">
              Com capacidade para até 10 pessoas, a Casa Aconchego dispõe de 3 suítes climatizadas, uma ampla sala de estar, cozinha totalmente equipada e uma deliciosa área gourmet com piscina e churrasqueira. Perfeita para famílias e grupos de amigos que buscam uma estadia memorável.
            </p>
            <p className="text-lg text-brand-dark leading-relaxed">
              Relaxe na piscina, prepare um churrasco delicioso ou simplesmente desfrute da brisa e da tranquilidade que só Santo Amaro pode oferecer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;