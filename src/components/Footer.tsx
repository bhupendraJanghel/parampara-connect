import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="max-w-xl mx-auto px-4 mt-6 mb-4 flex flex-col items-center">
      {/* Elegant minimalist divider */}
      <div className="flex items-center gap-4 w-full justify-center mb-4">
        <div className="h-[1px] bg-gradient-to-r from-transparent to-brand-gold/30 flex-1 max-w-[80px]"></div>
        <div className="text-brand-gold/60">
          <svg width="20" height="14" viewBox="0 0 30 20" fill="currentColor">
            <path d="M15 0C15 0 12 10 5 10V12H25V10C18 10 15 0 15 0Z" opacity="0.6" />
            <path d="M15 4C15 4 14 8 10 8V10H20V8C16 8 15 4 15 4Z" />
          </svg>
        </div>
        <div className="h-[1px] bg-gradient-to-l from-transparent to-brand-gold/30 flex-1 max-w-[80px]"></div>
      </div>

      {/* Thank you message */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-serif italic text-brand-gold text-xs tracking-widest uppercase"
      >
        Thank you for visiting
      </motion.p>
    </footer>
  );
};

export default Footer;
