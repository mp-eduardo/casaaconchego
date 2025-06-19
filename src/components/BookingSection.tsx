import React, { useState } from 'react';
import { WHATSAPP_LINK, CONTACT_EMAIL, INSTAGRAM_URL, BOOKING_COM_URL, AIRBNB_URL } from '../constants';
import { PhoneIcon, EnvelopeIcon, ShareIcon, BuildingOffice2Icon, HomeModernIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';

const placeholderBookingUrl = "COLOQUE_AQUI_O_LINK_DIRETO_DA_SUA_LISTAGEM_NO_BOOKING_COM";
const placeholderAirbnbUrl = "COLOQUE_AQUI_O_LINK_DIRETO_DA_SUA_LISTAGEM_NO_AIRBNB";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const BookingSection: React.FC = () => {
  const showBookingButton = BOOKING_COM_URL && (BOOKING_COM_URL as string) !== placeholderBookingUrl;
  const showAirbnbButton = AIRBNB_URL && (AIRBNB_URL as string) !== placeholderAirbnbUrl;

  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = "O nome é obrigatório.";
    if (!formData.email.trim()) {
      errors.email = "O e-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "O formato do e-mail é inválido.";
    }
    if (!formData.message.trim()) errors.message = "A mensagem é obrigatória.";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const subject = `Contato do Site - Casa Aconchego - De: ${formData.name}`;
    const body = `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`;
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({});
      setIsSubmitting(false);
      setSubmitStatus('success'); 
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 500);

  };


  return (
    <section id="booking" className="py-16 md:py-24 bg-brand-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold mb-8">
          Faça Sua Reserva ou Fale Conosco
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto text-brand-light leading-relaxed">
          Pronto para viver uma experiência inesquecível nos Lençóis Maranhenses? Entre em contato conosco ou reserve através de nossas plataformas parceiras.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-brand-secondary hover:bg-opacity-80 text-brand-primary font-semibold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105 w-full"
          >
            <PhoneIcon className="h-6 w-6 mr-2" />
            Reservar pelo WhatsApp
          </a>
          
          {showBookingButton && (
            <a
              href={BOOKING_COM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-brand-secondary hover:bg-opacity-80 text-brand-primary font-semibold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105 w-full"
            >
              <BuildingOffice2Icon className="h-6 w-6 mr-2" />
              Reservar no Booking.com
            </a>
          )}

          {showAirbnbButton && (
             <a
              href={AIRBNB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-brand-secondary hover:bg-opacity-80 text-brand-primary font-semibold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105 w-full"
            >
              <HomeModernIcon className="h-6 w-6 mr-2" />
              Reservar no Airbnb
            </a>
          )}
          
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={`flex items-center justify-center border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-brand-primary font-semibold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105 w-full ${(!showBookingButton || !showAirbnbButton) && (showBookingButton !== showAirbnbButton) ? 'sm:col-span-1' : ( (showBookingButton && showAirbnbButton) ? 'sm:col-span-2' : 'sm:col-span-1' ) }`}
          >
            <EnvelopeIcon className="h-6 w-6 mr-2" />
            Enviar E-mail Direto
          </a>
        </div>

        <div className="max-w-2xl mx-auto bg-brand-light p-8 rounded-lg shadow-xl text-brand-dark">
          <h3 className="text-2xl font-serif font-bold text-brand-primary mb-6">
            Ou envie-nos uma mensagem direta
          </h3>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-left mb-1">Seu Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                aria-invalid={!!formErrors.name}
                aria-describedby={formErrors.name ? "name-error" : undefined}
              />
              {formErrors.name && <p id="name-error" className="text-red-600 text-xs mt-1 text-left">{formErrors.name}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-left mb-1">Seu E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                aria-invalid={!!formErrors.email}
                aria-describedby={formErrors.email ? "email-error" : undefined}
              />
              {formErrors.email && <p id="email-error" className="text-red-600 text-xs mt-1 text-left">{formErrors.email}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-left mb-1">Sua Mensagem</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary ${formErrors.message ? 'border-red-500' : 'border-gray-300'}`}
                aria-invalid={!!formErrors.message}
                aria-describedby={formErrors.message ? "message-error" : undefined}
              ></textarea>
              {formErrors.message && <p id="message-error" className="text-red-600 text-xs mt-1 text-left">{formErrors.message}</p>}
            </div>
            
            {submitStatus === 'success' && (
              <p className="text-green-600 mb-4 text-sm">Seu cliente de e-mail deve ter sido aberto. Por favor, envie a mensagem por lá. Obrigado!</p>
            )}
             {submitStatus === 'error' && Object.keys(formErrors).length > 0 && (
              <p className="text-red-600 mb-4 text-sm">Por favor, corrija os erros no formulário.</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center bg-brand-primary hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg disabled:opacity-70"
            >
              <PaperAirplaneIcon className="h-5 w-5 mr-2 transform rotate-[-45deg]" />
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>

        <div className="mt-16">
            <p className="text-brand-light mb-2">Siga-nos e veja mais:</p>
            <a 
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-brand-secondary hover:text-white transition duration-300 text-lg"
            >
                <ShareIcon className="h-6 w-6 inline-block mr-1"/>
                @casaaconchego_stoamaro
            </a>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;