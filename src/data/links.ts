import { 
  FiGlobe, 
  FiPhone, 
  FiMapPin, 
  FiImage, 
  FiCalendar,
  FiMail,
} from 'react-icons/fi';
import { 
  FaInstagram, 
  FaWhatsapp, 
  FaGoogle,
  FaFacebookF,
  FaYoutube,
  FaPinterestP
} from 'react-icons/fa';
import type { LinkItem, SocialLink } from '../types';
import { APP_URLS } from '../config/constants';

export const links: LinkItem[] = [
  { id: 'website', title: 'Official Website', description: 'Visit our official website', icon: FiGlobe, url: APP_URLS.WEBSITE },
  { id: 'instagram', title: 'Instagram', description: 'Follow us for latest updates', icon: FaInstagram, url: APP_URLS.INSTAGRAM },
  { id: 'whatsapp', title: 'WhatsApp', description: 'Chat with us on WhatsApp', icon: FaWhatsapp, url: APP_URLS.WHATSAPP },
  { id: 'call', title: 'Call Us', description: 'Speak directly with our team', icon: FiPhone, url: APP_URLS.PHONE },
  { id: 'reviews', title: 'Google Reviews', description: 'See what our clients say', icon: FaGoogle, url: APP_URLS.GOOGLE_REVIEWS },
  { id: 'location', title: 'Our Location', description: 'Find us on Google Maps', icon: FiMapPin, url: APP_URLS.LOCATION_MAP },
  { id: 'gallery', title: 'Gallery', description: 'Glimpses of our beautiful events', icon: FiImage, url: APP_URLS.GALLERY },
  { id: 'appointment', title: 'Book an Appointment', description: "Let's plan your special event", icon: FiCalendar, url: APP_URLS.BOOK_APPOINTMENT },
];

export const socialLinks: SocialLink[] = [
  { id: 'ig', icon: FaInstagram, url: APP_URLS.INSTAGRAM },
  { id: 'fb', icon: FaFacebookF, url: APP_URLS.FACEBOOK },
  { id: 'yt', icon: FaYoutube, url: APP_URLS.YOUTUBE },
  { id: 'pin', icon: FaPinterestP, url: APP_URLS.PINTEREST },
  { id: 'mail', icon: FiMail, url: APP_URLS.EMAIL },
];
