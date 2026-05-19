import { motion } from 'framer-motion';
import { socialLinks } from '../data/links';

const Footer = () => {
  return (
    <footer className="max-w-xl mx-auto px-4 mt-16 mb-8 flex flex-col items-center">
      {/* Divider */}
      <div className="flex items-center gap-4 w-full justify-center mb-8">
        <div className="h-[1px] bg-brand-gold/30 flex-1 max-w-[100px]"></div>
        <div className="text-brand-gold">
          <svg width="30" height="20" viewBox="0 0 30 20" fill="currentColor">
            <path d="M15 0C15 0 12 10 5 10V12H25V10C18 10 15 0 15 0Z" opacity="0.6"/>
            <path d="M15 4C15 4 14 8 10 8V10H20V8C16 8 15 4 15 4Z"/>
          </svg>
        </div>
        <div className="h-[1px] bg-brand-gold/30 flex-1 max-w-[100px]"></div>
      </div>

      <h3 className="font-sans font-medium text-brand-text tracking-[0.2em] uppercase text-sm mb-6">Connect With Us</h3>
      
      <div className="flex gap-4 sm:gap-6 justify-center mb-10">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-text hover:bg-brand-gold hover:text-white transition-colors hover:border-brand-gold bg-transparent"
            >
              <Icon size={20} />
            </motion.a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
