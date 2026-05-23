import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload } from 'react-icons/fi';
import { FaWhatsapp, FaQrcode } from 'react-icons/fa';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRCodeModal({ isOpen, onClose }: QRCodeModalProps) {
  const qrCodePath = '/qr-code.png'; // Path where the user will store their QR code in the public folder
  const shareUrl = "https://parampara-connect.vercel.app/";

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = qrCodePath;
    link.download = 'parampara-connect-qr.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShareWhatsApp = () => {
    const text = `Hey! Scan this QR code or click the link to connect with Parampara Decor & Events: ${shareUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-sm bg-[#140b05] border border-brand-gold/25 rounded-2xl shadow-2xl z-10 flex flex-col p-6"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-serif text-base font-semibold text-[#fdfaf6] tracking-wide flex items-center gap-2">
              <FaQrcode className="text-brand-gold" size={18} />
              Parampara Connect QR
            </h3>
            <button
              onClick={onClose}
              className="text-[#fdfaf6]/50 hover:text-brand-gold transition-colors cursor-pointer"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="flex flex-col items-center gap-5">
            {/* QR Code Container */}
            <div className="p-3 bg-white rounded-xl border border-brand-gold/30 max-w-[200px] aspect-square w-full flex items-center justify-center">
              <img
                src={qrCodePath}
                alt="Profile QR Code"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(shareUrl);
                }}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 w-full mt-2">
              <button
                onClick={handleShareWhatsApp}
                className="flex-1 py-2.5 px-4 border border-brand-gold/20 rounded-xl text-xs font-semibold text-brand-gold hover:bg-brand-gold/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaWhatsapp size={14} className="text-[#25D366]" />
                Share
              </button>

              <button
                onClick={handleDownload}
                className="flex-1 py-2.5 px-4 bg-brand-gold text-brand-dark rounded-xl text-xs font-semibold hover:bg-brand-gold-light transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <FiDownload size={14} />
                Save Image
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
