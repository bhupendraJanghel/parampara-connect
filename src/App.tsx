import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import LinkCard from './components/LinkCard';
import Footer from './components/Footer';
import BottomBar from './components/BottomBar';
import SelectionModal from './components/SelectionModal';
import QRCodeModal from './components/QRCodeModal';
import { links } from './data/links';
import { APP_URLS } from './config/constants';
import { FaInstagram, FaWhatsapp, FaQrcode } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { useRegisterSW } from 'virtual:pwa-register/react';

type ModalType = 'instagram' | 'whatsapp' | 'call' | 'sketches' | null;

function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered:', r);
    },
    onRegisterError(error) {
      console.error('SW registration error:', error);
    },
  });

  const modalConfigs = {
    instagram: {
      options: [
        { label: 'Events', sublabel: '@theparamparaevents', url: APP_URLS.INSTAGRAM, icon: FaInstagram },
        { label: 'Decor Shop', sublabel: '@parampara_decor_shop', url: APP_URLS.INSTAGRAM_2, icon: FaInstagram },
      ]
    },
    whatsapp: {
      options: [
        { label: 'Events Service', sublabel: 'Chat for Event planning', url: APP_URLS.WHATSAPP_EVENTS, icon: FaWhatsapp },
        { label: 'Decor Shop', sublabel: 'Chat for Decor shopping', url: APP_URLS.WHATSAPP_DECOR, icon: FaWhatsapp },
      ]
    },
    call: {
      options: [
        { label: 'Events Service', sublabel: 'Call for Event planning', url: APP_URLS.PHONE_EVENTS, icon: FiPhone },
        { label: 'Decor Shop', sublabel: 'Call for Decor shopping', url: APP_URLS.PHONE_DECOR, icon: FiPhone },
      ]
    },
    sketches: {
      options: [
        { label: 'Call for Sketches', sublabel: 'Discuss custom sketch ideas', url: APP_URLS.PHONE_DECOR, icon: FiPhone },
        { label: 'Instagram Sketches', sublabel: 'View sketches on Instagram', url: APP_URLS.CUSTOM_SKETCHES, icon: FaInstagram },
      ]
    }
  };

  const [toastMessage, setToastMessage] = useState('');
  const [showQRCodeModal, setShowQRCodeModal] = useState(false);

  const handleOpenModal = (id: string) => {
    if (id === 'instagram' || id === 'ig') {
      setActiveModal('instagram');
    } else if (id === 'whatsapp' || id === 'wa') {
      setActiveModal('whatsapp');
    } else if (id === 'call') {
      setActiveModal('call');
    } else if (id === 'sketches') {
      setActiveModal('sketches');
    } else if (id === 'yt' || id === 'store') {
      const msg = id === 'store' ? 'Online Store Coming Soon!' : 'YouTube Channel Coming Soon!';
      setToastMessage(msg);
      // Auto close after 3 seconds
      const timer = setTimeout(() => setToastMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  };

  const currentModal = activeModal ? modalConfigs[activeModal] : null;

  return (
    <div className="min-h-screen relative pb-[calc(4.5rem+env(safe-area-inset-bottom))] bg-brand-bg overflow-x-hidden pt-[env(safe-area-inset-top)]">
      {/* Seamless Festive Decor & Confetti background pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none z-0"
        style={{
          backgroundImage: 'url("/festive-pattern.png")',
          backgroundSize: '480px 480px',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply'
        }}
      />

      <div className="relative z-10">
        <Header onSocialClick={handleOpenModal} />
        <main className="max-w-xl mx-auto px-4 mt-6 relative z-10">
          <div className="flex flex-col gap-3">
            {links.map((link, index) => (
              <LinkCard
                key={link.id}
                link={link}
                index={index}
                onLinkClick={handleOpenModal}
              />
            ))}
          </div>
        </main>

        <Footer />
      </div>

      <BottomBar />

      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%', scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
            exit={{ opacity: 0, y: -20, x: '-50%', scale: 0.9 }}
            className="fixed top-6 left-1/2 z-50 bg-brand-dark border border-brand-gold/40 text-brand-gold-light px-6 py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] font-serif text-sm tracking-wider flex items-center gap-3 backdrop-blur-md text-center"
          >
            <span className="w-1.5 h-1.5 bg-brand-gold rotate-45"></span>
            {toastMessage}
            <span className="w-1.5 h-1.5 bg-brand-gold rotate-45"></span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {needRefresh && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%', scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
            exit={{ opacity: 0, y: -20, x: '-50%', scale: 0.9 }}
            className="fixed top-6 left-1/2 z-50 bg-[#140b05]/95 border border-brand-gold/30 text-[#fdfaf6] px-5 py-4 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] font-sans text-sm flex flex-col items-center gap-3 backdrop-blur-md w-[90%] max-w-sm"
          >
            <div className="text-center">
              <h4 className="font-serif text-brand-gold-light font-bold text-sm tracking-wider mb-1 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-gold rotate-45"></span>
                New Update Available
                <span className="w-1.5 h-1.5 bg-brand-gold rotate-45"></span>
              </h4>
              <p className="text-xs text-[#fdfaf6]/80 leading-relaxed">
                Update now to experience the latest designs and improvements!
              </p>
            </div>
            <div className="flex gap-3 w-full mt-1">
              <button
                onClick={() => setNeedRefresh(false)}
                className="flex-1 py-2 px-3 border border-brand-gold/20 rounded-xl text-xs font-semibold text-[#fdfaf6]/60 hover:text-[#fdfaf6] hover:bg-white/5 transition-all cursor-pointer"
              >
                Dismiss
              </button>
              <button
                onClick={() => updateServiceWorker(true)}
                className="flex-1 py-2 px-3 bg-brand-gold text-brand-dark rounded-xl text-xs font-semibold hover:bg-brand-gold-light transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                Update
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SelectionModal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        options={currentModal?.options || []}
      />

      {/* Floating QR Code Button */}
      <motion.button
        onClick={() => setShowQRCodeModal(true)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-[#c39b56] via-[#ffd24d] to-[#c39b56] text-brand-dark flex items-center justify-center shadow-[0_8px_30px_rgba(195,155,86,0.6)] border border-[#f9f1d9]/40 cursor-pointer"
        title="Show QR Code"
        aria-label="Show QR Code"
      >
        <FaQrcode size={22} className="text-brand-dark" />
      </motion.button>

      <QRCodeModal
        isOpen={showQRCodeModal}
        onClose={() => setShowQRCodeModal(false)}
      />
    </div>
  );
}

export default App;
