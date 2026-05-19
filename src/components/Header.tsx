import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="relative flex flex-col items-center pt-12 pb-10 px-4 overflow-hidden rounded-b-[40px] bg-[#0a0a0a] shadow-[0_10px_40px_rgba(0,0,0,0.5)] border-b border-brand-gold/10">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-gold/15 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Logo Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Adjusted logo size to be more prominent, removed hard borders since logo has its own ring */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 mb-6 relative drop-shadow-[0_0_25px_rgba(195,155,86,0.3)]">
          <img src="/parampara-logo.png" alt="Parampara Events Logo" className="w-full h-full object-contain" />
        </div>

        <div className="text-center space-y-1 sm:space-y-2">
          <h1 className="font-serif text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#f9f1d9] via-[#c39b56] to-[#f9f1d9] tracking-[0.2em] font-semibold">
            PARAMPARA
          </h1>
          <p className="font-serif text-brand-gold/80 text-[10px] sm:text-xs tracking-[0.5em] uppercase pl-2">
            Events
          </p>
        </div>
      </motion.div>

      {/* Elegant Tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center z-10 mt-6 pt-5 border-t border-brand-gold/10 w-full max-w-[240px]"
      >
        <p className="text-[#fdfaf6]/80 font-sans text-sm md:text-base font-light italic">
          We Plan. You Celebrate.
        </p>
        <p className="text-brand-gold/90 font-sans text-xs md:text-sm font-normal mt-1">
          We Make It Timeless.
        </p>
      </motion.div>
    </div>
  );
};

export default Header;
