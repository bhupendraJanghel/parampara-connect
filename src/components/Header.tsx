import { motion } from 'framer-motion';
import { socialLinks } from '../data/links';

const HangingString = ({ left, length, delay }: { left: string; length: number; delay: number }) => {
  const itemCount = Math.floor(length / 20);

  return (
    <motion.div
      initial={{ y: -160, rotate: 0, opacity: 0 }}
      animate={{ y: 0, rotate: [-3, 3, -3], opacity: 0.3 }}
      transition={{
        y: { type: 'spring', stiffness: 85, damping: 14, delay },
        opacity: { duration: 0.8, delay },
        rotate: { repeat: Infinity, duration: 4 + ((delay * 7) % 2), ease: "easeInOut", delay: delay + 1.2 }
      }}
      whileHover={{
        rotate: [0, 22, -15, 10, -5, 0],
        opacity: 0.6,
        transition: {
          rotate: { duration: 1.8, ease: "easeInOut" },
          opacity: { duration: 0.25 }
        }
      }}
      style={{ transformOrigin: 'top center', left }}
      className="absolute top-0 z-20 w-6 flex flex-col items-center pointer-events-auto cursor-grab active:cursor-grabbing"
    >
      {/* Thin Gold Chain */}
      <div className="w-[1px] bg-gradient-to-b from-[#c39b56] via-[#c39b56]/40 to-[#c39b56]/10" style={{ height: `${length}px` }}></div>

      {/* Golden Beads & Crystals */}
      <div className="absolute top-0 flex flex-col items-center w-full" style={{ height: `${length}px` }}>
        {Array.from({ length: itemCount }).map((_, i) => {
          const type = i % 3; // 0: Big Gold Bead, 1: Small Gold Bead, 2: Crystal Diamond

          if (type === 0) {
            return (
              <div
                key={i}
                className="w-2 h-2 rounded-full border border-black/10 shadow-sm"
                style={{
                  background: 'radial-gradient(circle at 35% 35%, #ffd24d 0%, #b38600 100%)',
                  marginTop: '10px'
                }}
              />
            );
          } else if (type === 1) {
            return (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full border border-black/10 shadow-sm"
                style={{
                  background: 'radial-gradient(circle at 35% 35%, #fff2a3 0%, #997300 100%)',
                  marginTop: '8px'
                }}
              />
            );
          } else {
            return (
              <div
                key={i}
                className="w-2.5 h-2.5 rotate-45 border border-white/40 shadow-inner"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.2) 100%)',
                  backdropFilter: 'blur(2px)',
                  marginTop: '10px'
                }}
              />
            );
          }
        })}
      </div>

      {/* Hanging Royal Lotus Ornament / Pendant at the bottom */}
      <motion.div
        className="relative z-30 flex flex-col items-center -mt-1"
        whileHover={{ scale: 1.2 }}
      >
        {/* Connecting Gold Loop */}
        <div className="w-1.5 h-1.5 border border-[#c39b56] rounded-full -mb-[2px]"></div>

        {/* Diamond frame holding the crystal jewel */}
        <div className="w-4 h-4 sm:w-4.5 sm:h-4.5 rotate-45 border border-[#c39b56] flex items-center justify-center bg-gradient-to-br from-[#241308] to-[#0a0a0a] shadow-lg relative overflow-hidden group">
          {/* Inner shiny glow */}
          <div className="absolute inset-0 bg-brand-gold/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>

          {/* Sparkly crystal center (looks like a glass jewel) */}
          <div className="w-1.5 h-1.5 bg-white rounded-full -rotate-45 shadow-[0_0_8px_rgba(255,255,255,0.9)] animate-pulse"></div>
        </div>

        {/* Hanging Tassel */}
        <div className="w-[1px] h-2.5 bg-[#c39b56] mt-[-1px]"></div>
        <div className="w-1.5 h-1.5 bg-[#c39b56] rounded-full"></div>
      </motion.div>
    </motion.div>
  );
};

const Header = ({ onSocialClick }: { onSocialClick?: (id: string) => void }) => {
  return (
    <div className="relative flex flex-col items-center pt-8 pb-8 px-4 overflow-hidden rounded-b-[40px] bg-gradient-to-b from-[#140b05] to-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.7)] border-b border-brand-gold/20">
      {/* Hanging Traditional Marigold & Bell Garlands */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <HangingString left="6%" length={110} delay={0.1} />
        <HangingString left="20%" length={140} delay={0.25} />
        <HangingString left="34%" length={90} delay={0.15} />
        <HangingString left="66%" length={90} delay={0.2} />
        <HangingString left="80%" length={140} delay={0.3} />
        <HangingString left="94%" length={110} delay={0.18} />
      </div>

      {/* Luxurious ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Texture overlay (subtle gold festive decor & confetti pattern) */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: 'url("/festive-pattern.png")',
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat',
          filter: 'invert(1) hue-rotate(180deg) brightness(1.2)'
        }}
      ></div>

      {/* Logo Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-30 flex flex-col items-center"
      >
        <div className="w-32 h-32 sm:w-40 sm:h-40 mb-5 relative drop-shadow-[0_0_30px_rgba(195,155,86,0.4)]">
          <img src="/parampara-logo.png" alt="Parampara Events Logo" className="w-full h-full object-contain" />
        </div>

        <div className="text-center space-y-1 sm:space-y-2 mb-2">
          <h1 className="font-serif text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#f9f1d9] via-[#c39b56] to-[#f9f1d9] tracking-[0.2em] font-semibold drop-shadow-sm">
            PARAMPARA
          </h1>
          <p className="font-serif text-brand-gold-light text-xs sm:text-sm tracking-[0.5em] uppercase pl-2 font-semibold">
            Decor & Events
          </p>
        </div>
      </motion.div>

      {/* Social Links Panel inside Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative z-30 mt-5 flex flex-col items-center w-full max-w-sm"
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
                  } else if (social.id === 'yt') {
                    e.preventDefault();
                    onSocialClick?.('yt');
                  }
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + (index * 0.1), type: 'spring', stiffness: 200 }}
                whileHover={{
                  scale: 1.15,
                  y: -4,
                  backgroundColor: '#c39b56',
                  color: '#38040e',
                  boxShadow: '0 8px 20px rgba(195,155,86,0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 border border-brand-gold/30 flex items-center justify-center text-brand-gold-light backdrop-blur-sm shadow-lg"
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
