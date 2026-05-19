import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import type { LinkItem } from '../types';

interface LinkCardProps {
  link: LinkItem;
  index: number;
}

const LinkCard = ({ link, index }: LinkCardProps) => {
  const Icon = link.icon;

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index + 0.4, duration: 0.5 }}
      whileHover={{ scale: 1.02, backgroundColor: 'var(--color-brand-card-hover)' }}
      whileTap={{ scale: 0.98 }}
      className="bg-brand-card rounded-xl py-3 px-4 flex items-center justify-between shadow-sm hover:shadow-md transition-all border border-brand-gold/20 group"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-brand-gold-light group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors shadow-inner">
          <Icon size={18} />
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
  );
};

export default LinkCard;
