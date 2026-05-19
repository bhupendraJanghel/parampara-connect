import { motion } from 'framer-motion';
import { socialLinks } from '../data/links';

const Header = ({ onSocialClick }: { onSocialClick?: (id: string) => void }) => {
  return (
    <div className="relative flex flex-col items-center pt-8 pb-8 px-4 overflow-hidden rounded-b-[40px] bg-gradient-to-b from-[#140b05] to-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.7)] border-b border-brand-gold/20">
      {/* Luxurious ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Texture overlay (subtle gold pattern) */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23c39b56\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      {/* Logo Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="w-32 h-32 sm:w-40 sm:h-40 mb-5 relative drop-shadow-[0_0_30px_rgba(195,155,86,0.4)]">
          <img src="/parampara-logo.png" alt="Parampara Events Logo" className="w-full h-full object-contain" />
        </div>

        <div className="text-center space-y-1 sm:space-y-2 mb-2">
          <h1 className="font-serif text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#f9f1d9] via-[#c39b56] to-[#f9f1d9] tracking-[0.2em] font-semibold drop-shadow-sm">
            PARAMPARA
          </h1>
          <p className="font-serif text-brand-gold/90 text-[10px] sm:text-xs tracking-[0.5em] uppercase pl-2 font-medium">
            Decor & Events
          </p>
        </div>
      </motion.div>

      {/* Social Links Panel inside Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="z-10 mt-5 flex flex-col items-center w-full max-w-sm"
      >
        <div className="flex items-center gap-4 w-full justify-center mb-5">
          <div className="h-[1px] bg-gradient-to-r from-transparent to-brand-gold/50 flex-1"></div>
          <p className="text-[#fdfaf6]/70 font-sans text-[10px] sm:text-xs font-light tracking-widest uppercase">
            Connect With Us
          </p>
          <div className="h-[1px] bg-gradient-to-l from-transparent to-brand-gold/50 flex-1"></div>
        </div>
        
        <div className="flex gap-4 sm:gap-6 justify-center">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            const isModalTrigger = social.id === 'ig' || social.id === 'wa';
            return (
              <motion.a
                key={social.id}
                href={social.url}
                target={isModalTrigger ? '_self' : '_blank'}
                rel={isModalTrigger ? '' : 'noopener noreferrer'}
                onClick={(e) => {
                  if (isModalTrigger) {
                    e.preventDefault();
                    onSocialClick?.(social.id);
                  }
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + (index * 0.1), type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.15, y: -4, boxShadow: '0 0 20px rgba(195,155,86,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 border border-brand-gold/30 flex items-center justify-center text-brand-gold-light hover:bg-brand-gold hover:text-brand-dark transition-all backdrop-blur-sm shadow-lg"
              >
                <Icon size={18} />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
