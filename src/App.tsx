import { useState } from 'react';
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

  const handleOpenModal = (id: string) => {
    if (id === 'instagram' || id === 'ig') {
      setActiveModal('instagram');
    } else if (id === 'whatsapp' || id === 'wa') {
      setActiveModal('whatsapp');
    } else if (id === 'call') {
      setActiveModal('call');
    }
  };

  const currentModal = activeModal ? modalConfigs[activeModal] : null;

  return (
    <div className="min-h-screen relative pb-16">
      <Header onSocialClick={handleOpenModal} />
      <main className="max-w-xl mx-auto px-4 mt-6 relative z-30">
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
      <BottomBar />

      <SelectionModal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        options={currentModal?.options || []}
      />
    </div>
  );
}

export default App;
