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
} from 'react-icons/fa';
import type { LinkItem, SocialLink } from '../types';
import { APP_URLS } from '../config/constants';

export const links: LinkItem[] = [
  { id: 'website', title: 'Official Website', description: 'Visit our official website', icon: FiGlobe, url: APP_URLS.WEBSITE },
  { id: 'instagram', title: 'Instagram', description: 'Follow our accounts', icon: FaInstagram, url: '#' },
  { id: 'whatsapp', title: 'WhatsApp', description: 'Chat with us on WhatsApp', icon: FaWhatsapp, url: '#' },
  { id: 'call', title: 'Call Us', description: 'Speak directly with our team', icon: FiPhone, url: '#' },
  { id: 'reviews', title: 'Google Review', description: 'Share your experience with us', icon: FaGoogle, url: APP_URLS.GOOGLE_REVIEWS },
  { id: 'location', title: 'Our Location', description: 'Find us on Google Maps', icon: FiMapPin, url: APP_URLS.LOCATION_MAP },
  { id: 'gallery', title: 'Gallery', description: 'Glimpses of our beautiful events', icon: FiImage, url: APP_URLS.GALLERY },
  { id: 'appointment', title: 'Book an Appointment', description: "Let's plan your special event", icon: FiCalendar, url: APP_URLS.BOOK_APPOINTMENT },
];

export const socialLinks: SocialLink[] = [
  { id: 'ig', icon: FaInstagram, url: '#' },
  { id: 'fb', icon: FaFacebookF, url: APP_URLS.FACEBOOK },
  { id: 'yt', icon: FaYoutube, url: APP_URLS.YOUTUBE },
  { id: 'wa', icon: FaWhatsapp, url: '#' },
  { id: 'mail', icon: FiMail, url: APP_URLS.EMAIL },
];
