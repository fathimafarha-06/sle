import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../data/site.js';

/**
 * Floating WhatsApp action button.
 * Appears after the user scrolls past the hero so it never blocks
 * the opening animation.
 */
export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          key="wa-fab"
          href={buildWhatsAppLink(
            'Hello Step Less Elevators & Escalators, I would like to request a service.'
          )}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          initial={{ opacity: 0, scale: 0.5, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 24 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: 'spring', stiffness: 320, damping: 22 }}
          className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 p-4 text-white shadow-[0_16px_40px_-10px_rgb(16_185_129_/0.85)] sm:bottom-8 sm:right-8"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 animate-pulse-ring rounded-full bg-emerald-400/40"
          />
          <MessageCircle className="relative h-6 w-6" />
          <span className="relative hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-500 group-hover:max-w-[170px] sm:inline">
            Chat on WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
