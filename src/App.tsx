import { motion } from 'framer-motion';
import { 
  FiGlobe, 
  FiPhone, 
  FiMapPin, 
  FiImage, 
  FiCalendar,
  FiMail,
  FiChevronRight
} from 'react-icons/fi';
import { 
  FaInstagram, 
  FaWhatsapp, 
  FaGoogle,
  FaFacebookF,
  FaYoutube,
  FaCrown,
  FaPinterestP
} from 'react-icons/fa';

const links = [
  { id: 'website', title: 'Official Website', description: 'Visit our official website', icon: FiGlobe, url: '#' },
  { id: 'instagram', title: 'Instagram', description: 'Follow us for latest updates', icon: FaInstagram, url: '#' },
  { id: 'whatsapp', title: 'WhatsApp', description: 'Chat with us on WhatsApp', icon: FaWhatsapp, url: '#' },
  { id: 'call', title: 'Call Us', description: 'Speak directly with our team', icon: FiPhone, url: '#' },
  { id: 'reviews', title: 'Google Reviews', description: 'See what our clients say', icon: FaGoogle, url: '#' },
  { id: 'location', title: 'Our Location', description: 'Find us on Google Maps', icon: FiMapPin, url: '#' },
  { id: 'gallery', title: 'Gallery', description: 'Glimpses of our beautiful events', icon: FiImage, url: '#' },
  { id: 'appointment', title: 'Book an Appointment', description: "Let's plan your special event", icon: FiCalendar, url: '#' },
];

const socialLinks = [
  { id: 'ig', icon: FaInstagram, url: '#' },
  { id: 'fb', icon: FaFacebookF, url: '#' },
  { id: 'yt', icon: FaYoutube, url: '#' },
  { id: 'pin', icon: FaPinterestP, url: '#' },
  { id: 'mail', icon: FiMail, url: '#' },
];

function App() {
  return (
    <div className="min-h-screen relative pb-16">
      {/* Top Background Section */}
      <div className="bg-brand-dark relative flex flex-col items-center pt-8 pb-12 px-4 overflow-hidden rounded-b-[30px] md:rounded-b-[50px] shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #c39b56 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        {/* Floating Chat Button */}
        <a href="#" className="absolute top-4 right-4 border border-brand-gold/30 text-brand-gold-light px-3 py-1.5 rounded-full text-xs font-sans flex items-center gap-2 hover:bg-brand-gold/10 transition-colors backdrop-blur-sm z-10">
          <FaWhatsapp size={14} />
          <span className="hidden sm:inline">Chat on WhatsApp</span>
        </a>

        {/* Logo Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center mb-3"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 border border-brand-gold rounded-full flex flex-col items-center justify-center text-brand-gold-light mb-3 bg-brand-dark relative shadow-[0_0_20px_rgba(195,155,86,0.3)]">
            <FaCrown size={16} className="absolute top-1.5 sm:top-2 text-brand-gold" />
            <span className="font-serif text-3xl sm:text-4xl mt-3 text-brand-gold">P</span>
          </div>
          
          <div className="text-center">
            <p className="font-serif text-brand-gold-light text-[8px] sm:text-[10px] tracking-[0.3em] mb-1 uppercase flex items-center justify-center gap-2 sm:gap-4">
              <span className="w-6 h-[1px] bg-brand-gold"></span>
              The
              <span className="w-6 h-[1px] bg-brand-gold"></span>
            </p>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white tracking-widest mb-1 drop-shadow-lg">PARAMPARA</h1>
            <p className="font-serif text-brand-gold text-[10px] sm:text-xs tracking-[0.4em] uppercase flex items-center justify-center gap-2 sm:gap-4">
              <span className="w-4 h-[1px] bg-brand-gold"></span>
              Events
              <span className="w-4 h-[1px] bg-brand-gold"></span>
            </p>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center z-10 mt-1"
        >
          <p className="text-[#fdfaf6] font-sans text-sm md:text-base font-light mb-0.5">We Plan. You Celebrate.</p>
          <p className="text-brand-gold font-sans text-sm md:text-base font-medium">We Make It Timeless.</p>
        </motion.div>
        
        {/* Ornate bottom decoration */}
        <div className="absolute bottom-[-10px] text-brand-gold flex items-center justify-center w-full z-20">
          <svg width="40" height="20" viewBox="0 0 60 30" fill="currentColor">
            <path d="M30 0C30 0 25 20 0 20V30H60V20C35 20 30 0 30 0Z" opacity="0.3"/>
            <path d="M30 5C30 5 27 18 10 18V22H50V18C33 18 30 5 30 5Z" opacity="0.6"/>
            <path d="M30 10C30 10 28 15 20 15V17H40V15C32 15 30 10 30 10Z"/>
          </svg>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-xl mx-auto px-4 mt-6 relative z-30">
        <div className="flex flex-col gap-3">
          {links.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.02, backgroundColor: 'var(--color-brand-card-hover)' }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-card rounded-xl py-3 px-4 flex items-center justify-between shadow-sm hover:shadow-md transition-all border border-brand-gold/20 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-brand-gold-light group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors shadow-inner">
                  <link.icon size={18} />
                </div>
                <div>
                  <h2 className="font-serif text-brand-text font-bold text-base">{link.title}</h2>
                  <p className="text-xs text-brand-text/70 font-sans">{link.description}</p>
                </div>
              </div>
              <div className="w-7 h-7 rounded-full bg-brand-gold flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-sm">
                <FiChevronRight size={16} />
              </div>
            </motion.a>
          ))}
        </div>
      </main>

      {/* Footer Section */}
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
          {socialLinks.map((social) => (
            <motion.a
              key={social.id}
              href={social.url}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-text hover:bg-brand-gold hover:text-white transition-colors hover:border-brand-gold bg-transparent"
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-brand-dark py-4 text-center absolute bottom-0 w-full">
        <p className="font-serif text-brand-gold text-xs sm:text-sm flex items-center justify-center gap-3">
          <span className="w-1.5 h-1.5 bg-brand-gold rotate-45"></span>
          Creating Memories That Last Forever
          <span className="w-1.5 h-1.5 bg-brand-gold rotate-45"></span>
        </p>
      </div>
    </div>
  );
}

export default App;
