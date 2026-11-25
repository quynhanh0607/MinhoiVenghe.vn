import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';

export interface LightboxItem {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  caption?: string;
}

interface ImageLightboxProps {
  item: LightboxItem | null;
  onClose: () => void;
}

export function ImageLightbox({ item, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (!item) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[80] bg-[#12100e]/88 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-[#1f1a17] border border-[#3e342f] rounded-2xl overflow-hidden shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Đóng ảnh phóng to"
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/55 hover:bg-black/80 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="bg-[#14110f] flex items-center justify-center max-h-[72vh] overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                referrerPolicy="no-referrer"
                className="w-full max-h-[72vh] object-contain"
              />
            </div>

            <div className="p-4 sm:p-5 text-left border-t border-[#342c27]">
              {item.subtitle && (
                <p className="text-[11px] font-semibold text-[#8bc34a] uppercase tracking-wider">
                  {item.subtitle}
                </p>
              )}
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#ffebba] mt-0.5">
                {item.title}
              </h3>
              {item.caption && (
                <p className="text-xs sm:text-sm text-[#d6c9bc] mt-1.5 leading-relaxed">
                  {item.caption}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
