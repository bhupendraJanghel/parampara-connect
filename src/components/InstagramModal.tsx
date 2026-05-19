import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { APP_URLS } from '../config/constants';

interface InstagramModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstagramModal = ({ isOpen, onClose }: InstagramModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#140b05] border border-brand-gold/30 rounded-2xl p-6 w-full max-w-sm pointer-events-auto relative shadow-2xl"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-brand-gold/50 hover:text-brand-gold transition-colors"
              >
                <FiX size={24} />
              </button>

              <h3 className="font-serif text-brand-gold text-xl text-center mb-6">Choose an Account</h3>

              <div className="flex flex-col gap-4">
                <a
                  href={APP_URLS.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex items-center gap-4 p-4 rounded-xl border border-brand-gold/20 bg-brand-gold/5 hover:bg-brand-gold/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center text-brand-gold-light border border-brand-gold/30 group-hover:bg-brand-gold group-hover:text-brand-dark transition-all shadow-md">
                    <FaInstagram size={24} />
                  </div>
                  <div>
                    <h4 className="font-sans text-[#fdfaf6] font-medium text-lg">Events</h4>
                    <p className="text-[#fdfaf6]/60 text-sm">@theparamparaevents</p>
                  </div>
                </a>

                <a
                  href={APP_URLS.INSTAGRAM_2}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex items-center gap-4 p-4 rounded-xl border border-brand-gold/20 bg-brand-gold/5 hover:bg-brand-gold/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center text-brand-gold-light border border-brand-gold/30 group-hover:bg-brand-gold group-hover:text-brand-dark transition-all shadow-md">
                    <FaInstagram size={24} />
                  </div>
                  <div>
                    <h4 className="font-sans text-[#fdfaf6] font-medium text-lg">Decor Shop</h4>
                    <p className="text-[#fdfaf6]/60 text-sm">@parampara_decor_shop</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default InstagramModal;
