import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShare, FiPlusSquare, FiX } from 'react-icons/fi';

const IOSInstallPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if the device is iOS
    const isIOS = 
      /iPad|iPhone|iPod/.test(navigator.userAgent) || 
      (navigator.maxTouchPoints > 0 && navigator.userAgent.includes('Macintosh'));

    // Check if the app is already running in standalone mode (installed)
    const isStandalone = 
      window.matchMedia('(display-mode: standalone)').matches || 
      ('standalone' in navigator && (navigator as Navigator & { standalone?: boolean }).standalone === true);

    // Check if the user has already dismissed the prompt
    const isDismissed = localStorage.getItem('ios-pwa-prompt-dismissed') === 'true';

    // Show the prompt only if it's iOS, not in standalone mode, and not previously dismissed
    if (isIOS && !isStandalone && !isDismissed) {
      // Delay showing the prompt by 2.5 seconds for a smooth initial page entrance
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('ios-pwa-prompt-dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-50 bg-[#140b05]/95 backdrop-blur-md border border-brand-gold/30 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-serif text-[#fdfaf6] text-base font-semibold tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-gold rotate-45"></span>
              Install App on iPhone
            </h3>
            <button
              onClick={handleDismiss}
              className="text-[#fdfaf6]/40 hover:text-brand-gold transition-colors p-1"
              aria-label="Close installation prompt"
            >
              <FiX size={18} />
            </button>
          </div>

          {/* Description */}
          <p className="text-xs text-[#fdfaf6]/80 leading-relaxed font-sans mb-4">
            Add <strong className="text-brand-gold-light">Parampara Connect</strong> to your home screen for quick, offline access and a premium native-like app experience.
          </p>

          {/* Steps */}
          <div className="space-y-3 font-sans text-xs">
            <div className="flex items-center gap-3 text-[#fdfaf6]/95">
              <div className="w-7 h-7 rounded-full bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0">
                <FiShare size={14} />
              </div>
              <span>
                1. Tap the <strong className="text-brand-gold-light">Share</strong> button at the bottom of Safari.
              </span>
            </div>

            <div className="flex items-center gap-3 text-[#fdfaf6]/95">
              <div className="w-7 h-7 rounded-full bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0">
                <FiPlusSquare size={14} />
              </div>
              <span>
                2. Scroll down and tap <strong className="text-brand-gold-light">Add to Home Screen</strong>.
              </span>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-4 pt-3 border-t border-brand-gold/15 text-[10px] text-[#fdfaf6]/50 text-center font-sans">
            Note: This works only when opened in the Safari browser.
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IOSInstallPrompt;
