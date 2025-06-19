import { NavLink } from './types';

export const HOUSE_NAME = "Casa Aconchego Santo Amaro";
export const INSTAGRAM_URL = "https://www.instagram.com/casaaconchego_stoamaro/";
export const WHATSAPP_PHONE_NUMBER = "5598984082918"; // Brazil country code + state + number
export const WHATSAPP_MESSAGE = `Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20${encodeURIComponent(HOUSE_NAME)}`;
export const WHATSAPP_LINK = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_NUMBER}&text=${WHATSAPP_MESSAGE}`;
export const CONTACT_EMAIL = "casaaconchegosantoamaro@gmail.com"; // Example, replace if real one exists

export const BOOKING_COM_URL = "https://www.booking.com/hotel/br/casa-aconchego-lencois-santo-amaro-do-maranhao.pt-br.html?msockid=3825ade078b16304134dbbe679676205";
export const AIRBNB_URL = "https://www.airbnb.com.br/rooms/1181985584935140985?source_impression_id=p3_1750299849_P3FbiVCA54ACyDh5";

// Google Maps Directions URL using precise coordinates from the user's latest link
export const GOOGLE_MAPS_DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=-2.7314502,-43.1098616";


export const NAV_LINKS: NavLink[] = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "A Casa" },
  { href: "#amenities", label: "Comodidades" },
  { href: "#gallery", label: "Galeria" },
  { href: "#location", label: "Localização" },
  { href: "#booking", label: "Reservas" },
];

// User-provided images.
export const HERO_IMAGE_URL = "https://i.imgur.com/I78cHt8.jpeg";
export const ABOUT_IMAGE_URL = "https://i.imgur.com/k33qnA5.jpeg"; 
export const LOCATION_IMAGE_URL = "https://i.imgur.com/Q7P47jp.jpeg";

export const GALLERY_IMAGES_DATA = [
  { id: '1', src: 'https://i.imgur.com/vzuFryw.jpeg', alt: 'Fachada da Casa Aconchego' },
  { id: '2', src: 'https://i.imgur.com/NpQZfMt.jpeg', alt: 'Piscina da Casa Aconchego' },
  { id: '3', src: 'https://i.imgur.com/byk5hrW.jpeg', alt: 'Sala de estar confortável' },
  { id: '4', src: 'https://i.imgur.com/KyBxqKG.jpeg', alt: 'Suíte espaçosa - Vista 1' },
  { id: '5', src: 'https://i.imgur.com/muBP8ZI.jpeg', alt: 'Suíte espaçosa - Vista 2' },
  { id: '6', src: 'https://i.imgur.com/5gayiDK.jpeg', alt: 'Suíte espaçosa - Detalhe Banheiro' },
  { id: '7', src: 'https://i.imgur.com/BcEl7Pu.jpeg', alt: 'Cozinha equipada - Vista 1' },
  { id: '8', src: 'https://i.imgur.com/OeS6U7o.jpeg', alt: 'Cozinha equipada - Vista 2' },
  { id: '9', src: 'https://i.imgur.com/YKtSmJN.jpeg', alt: 'Paisagem dos Lençóis Maranhenses - Dunas e Lagoas' },
  { id: '10', src: 'https://i.imgur.com/ujHI7tW.jpeg', alt: 'Vista panorâmica dos Lençóis Maranhenses' },
  { id: '11', src: 'https://i.imgur.com/9Vpvrun.jpeg', alt: 'Belezas naturais de Santo Amaro - Lençóis' },
];