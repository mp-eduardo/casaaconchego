import React from 'react';
import { HOUSE_NAME, INSTAGRAM_URL, WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-brand-light py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="font-semibold text-lg mb-2">{HOUSE_NAME}</p>
        <p className="text-sm mb-4">
          Seu refúgio nos Lençóis Maranhenses.
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors duration-300">
            WhatsApp
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors duration-300">
            Instagram
          </a>
        </div>
        <p className="text-xs text-gray-400">
          &copy; {currentYear} {HOUSE_NAME}. Todos os direitos reservados.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Santo Amaro - Maranhão, Brasil
        </p>
      </div>
    </footer>
  );
};

export default Footer;