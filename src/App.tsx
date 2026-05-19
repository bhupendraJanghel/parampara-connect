import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import LinkCard from './components/LinkCard';
import Footer from './components/Footer';
import BottomBar from './components/BottomBar';
import SelectionModal from './components/SelectionModal';
import { links } from './data/links';
import { APP_URLS } from './config/constants';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

type ModalType = 'instagram' | 'whatsapp' | 'call' | null;

function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

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
    }
  };

  const [showToast, setShowToast] = useState(false);

  const handleOpenModal = (id: string) => {
    if (id === 'instagram' || id === 'ig') {
      setActiveModal('instagram');
    } else if (id === 'whatsapp' || id === 'wa') {
      setActiveModal('whatsapp');
    } else if (id === 'call') {
      setActiveModal('call');
    } else if (id === 'yt') {
      setShowToast(true);
      // Auto close after 3 seconds
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  };

  const currentModal = activeModal ? modalConfigs[activeModal] : null;

  return (
    <div className="min-h-screen relative pb-16 bg-brand-bg overflow-x-hidden">
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
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%', scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
            exit={{ opacity: 0, y: -20, x: '-50%', scale: 0.9 }}
            className="fixed top-6 left-1/2 z-50 bg-brand-dark border border-brand-gold/40 text-brand-gold-light px-6 py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] font-serif text-sm tracking-wider flex items-center gap-3 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 bg-brand-gold rotate-45"></span>
            YouTube Channel Coming Soon!
            <span className="w-1.5 h-1.5 bg-brand-gold rotate-45"></span>
          </motion.div>
        )}
      </AnimatePresence>

      <SelectionModal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        options={currentModal?.options || []}
      />
    </div>
  );
}

export default App;
