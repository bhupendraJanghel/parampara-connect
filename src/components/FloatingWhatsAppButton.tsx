import { FaWhatsapp } from 'react-icons/fa';
import { APP_URLS } from '../config/constants';

const FloatingWhatsAppButton = () => {
  return (
    <a href={APP_URLS.WHATSAPP} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 border border-brand-gold/30 text-brand-gold-light px-3 py-1.5 rounded-full text-xs font-sans flex items-center gap-2 hover:bg-brand-gold/10 transition-colors backdrop-blur-sm z-10">
      <FaWhatsapp size={14} />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsAppButton;
