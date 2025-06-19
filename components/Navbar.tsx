
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, HOUSE_NAME } from '../constants';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    if (isOpen) {
      setIsOpen(false);
    }
    const targetId = href.substring(1); // Remove '#'
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback or error logging if target not found
      console.warn(`Element with ID '${targetId}' not found.`);
      // window.location.hash = href; // Optionally fallback to default behavior
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled || isOpen ? 'bg-brand-primary shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, "#home")}
            className={`text-2xl font-serif font-bold ${isScrolled || isOpen ? 'text-brand-light' : 'text-brand-primary sm:text-brand-light'}`}
          >
            {HOUSE_NAME}
          </a>
          <div className="hidden md:flex space-x-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-semibold transition-colors duration-300 ${isScrolled || isOpen ? 'text-brand-light hover:text-brand-secondary' : 'text-brand-primary sm:text-brand-light hover:text-brand-secondary'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${isScrolled || isOpen ? 'text-brand-light' : 'text-brand-primary sm:text-brand-light'}`}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">{isOpen ? 'Fechar menu' : 'Abrir menu'}</span>
              {isOpen ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 py-3 bg-brand-primary rounded-md" id="mobile-menu">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-2 text-brand-light hover:bg-brand-secondary hover:text-brand-primary rounded-md transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
