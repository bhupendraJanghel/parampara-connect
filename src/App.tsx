import Header from './components/Header';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import LinkCard from './components/LinkCard';
import Footer from './components/Footer';
import BottomBar from './components/BottomBar';
import { links } from './data/links';

function App() {
  return (
    <div className="min-h-screen relative pb-16">
      <Header />
      <FloatingWhatsAppButton />

      <main className="max-w-xl mx-auto px-4 mt-6 relative z-30">
        <div className="flex flex-col gap-3">
          {links.map((link, index) => (
            <LinkCard key={link.id} link={link} index={index} />
          ))}
        </div>
      </main>

      <Footer />
      <BottomBar />
    </div>
  );
}

export default App;
