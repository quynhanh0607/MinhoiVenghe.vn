import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Copy, Gift, RotateCcw, Sparkles, X } from 'lucide-react';
import { HERITAGE_CARDS, type HeritageCardItem } from '../data/projectData';
import { CardArtworkFrame } from './CardArtworkFrame';

interface BlindBoxModalProps {
  isOpen: boolean;
  onClose: () => void;
  collectedIds: string[];
  onCardCollected: (cardId: string) => void;
}

export function BlindBoxModal({
  isOpen,
  onClose,
  collectedIds,
  onCardCollected,
}: BlindBoxModalProps) {
  const [stage, setStage] = useState<'sealed' | 'tearing' | 'revealed'>('sealed');
  const [drawnCard, setDrawnCard] = useState<HeritageCardItem | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const handleTearOpen = () => {
    if (stage === 'tearing') return;
    setStage('tearing');

    // Favor uncollected cards first so visitors can experience all 4 easily
    const uncollected = HERITAGE_CARDS.filter((c) => !collectedIds.includes(c.id));
    const pool = uncollected.length > 0 ? uncollected : HERITAGE_CARDS;
    const picked = pool[Math.floor(Math.random() * pool.length)];

    window.setTimeout(() => {
      setDrawnCard(picked);
      onCardCollected(picked.id);
      setStage('revealed');
    }, 650);
  };

  const handleDrawAgain = () => {
    setStage('sealed');
    setDrawnCard(null);
    setCopied(false);
  };

  const handleCopyHashtag = async () => {
    const caption = drawnCard
      ? `Mình vừa xé túi mù nhận được thẻ ${drawnCard.categoryLabel} ${drawnCard.title} (${drawnCard.artForm}) từ dự án "Mình ơi Về nghe"! #MinhOiVeNghe #ThanhSacNamBo`
      : '#MinhOiVeNghe #ThanhSacNamBo';
    try {
      await navigator.clipboard.writeText(caption);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#141911]/80 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="blind-box-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl bg-[#fffaf3] border border-[#e7d6be] shadow-[0_24px_56px_-12px_rgba(20,16,4,0.5)] overflow-hidden my-auto"
          >
            {/* Header Strip */}
            <div className="bg-gradient-to-r from-[#212b1d] via-[#2d3a27] to-[#212b1d] px-5 py-4 text-white flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#f7d88b] font-semibold">
                  Minigame Thanh Sắc Nam Bộ
                </p>
                <h2
                  id="blind-box-title"
                  className="font-serif italic text-lg sm:text-xl font-bold text-[#ffebba]"
                >
                  Xé Túi Mù “Tiếng lòng Mình ơi”
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Đóng hộp xé túi mù"
                className="p-2 rounded-full text-[#e8dcc8] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 sm:p-6 text-center">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs text-[#6b5d4e] mb-4 pb-3 border-b border-[#efe2d0]">
                <span>Bộ sưu tập thẻ bài của bạn</span>
                <span className="font-bold tabular-nums text-[#d81b60]">
                  {collectedIds.length} / {HERITAGE_CARDS.length} thẻ
                </span>
              </div>

              {stage !== 'revealed' ? (
                <div className="flex flex-col items-center py-2">
                  {/* Sealed Blind Pouch Visual */}
                  <motion.button
                    type="button"
                    onClick={handleTearOpen}
                    animate={
                      stage === 'tearing'
                        ? {
                            rotate: [-4, 4, -5, 5, -2, 0],
                            scale: [1, 1.04, 0.98, 1.06, 0.92],
                          }
                        : { y: [0, -4, 0] }
                    }
                    transition={
                      stage === 'tearing'
                        ? { duration: 0.6, ease: 'easeInOut' }
                        : { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }
                    }
                    className="relative w-56 sm:w-60 aspect-[3/4] rounded-2xl bg-gradient-to-br from-[#e83e8c] via-[#c2185b] to-[#7d1142] border-2 border-[#f7d88b] shadow-[0_18px_36px_-10px_rgba(216,27,96,0.48)] flex flex-col items-center justify-between p-5 text-white cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b]"
                  >
                    {/* Tear notch line at top */}
                    <div className="w-full border-b-2 border-dashed border-[#ffebba]/60 pb-2 text-[10px] uppercase tracking-[0.2em] text-[#ffebba] font-semibold">
                      ✂ Xé tại đây
                    </div>

                    <div className="my-auto flex flex-col items-center gap-2.5">
                      <div className="w-14 h-14 rounded-full bg-[#ffebba]/15 border border-[#ffebba]/45 flex items-center justify-center">
                        <Gift className="w-7 h-7 text-[#ffebba]" aria-hidden="true" />
                      </div>
                      <p className="font-serif italic text-2xl font-bold text-[#ffebba] leading-tight">
                        Túi Mù
                        <br />
                        Thanh Sắc
                      </p>
                      <p className="text-[11px] text-pink-100/90 leading-snug max-w-[170px]">
                        Ẩn chứa 1 trong 4 thẻ bài Di sản Nghệ thuật Nam Bộ
                      </p>
                    </div>

                    <div className="w-full pt-2 border-t border-white/20 text-[10px] tracking-widest uppercase text-[#ffe082] font-semibold">
                      Mình ơi Về nghe
                    </div>
                  </motion.button>

                  <p className="text-xs text-[#5d5144] mt-5 leading-relaxed max-w-xs">
                    Chạm vào túi mù hoặc nhấn nút bên dưới để khám phá thẻ bài duyên phận dành riêng cho bạn hôm nay.
                  </p>

                  <button
                    type="button"
                    onClick={handleTearOpen}
                    disabled={stage === 'tearing'}
                    className="mt-4 w-full py-3 px-6 bg-gradient-to-r from-[#e83e8c] to-[#c2185b] hover:from-[#d62a78] hover:to-[#ad1457] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-md transition-transform active:scale-[0.98] cursor-pointer disabled:opacity-75"
                  >
                    {stage === 'tearing' ? 'Đang xé túi mù...' : 'Xé Túi Mù Ngay'}
                  </button>
                </div>
              ) : (
                drawnCard && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#558b2f] mb-3">
                      <Sparkles className="w-4 h-4 text-[#f59e0b]" aria-hidden="true" />
                      <span>
                        Chúc mừng! Bạn đã nhận được {drawnCard.categoryLabel}{' '}
                        <strong className="text-[#c2185b]">{drawnCard.title}</strong>
                      </span>
                    </div>

                    {/* Revealed Authentic Card */}
                    <div
                      className={`w-48 sm:w-52 rounded-2xl overflow-hidden border-2 ${drawnCard.theme.frontBorder} shadow-lg`}
                    >
                      <CardArtworkFrame
                        src={drawnCard.frontImage}
                        alt={`Thẻ bài ${drawnCard.title}`}
                        fallbackBg={drawnCard.theme.frontBg}
                        fallbackTitle={drawnCard.title}
                      />
                    </div>

                    {/* Blessing & Cultural Note */}
                    <div className="mt-4 bg-[#fff4e2] border border-[#edd9bc] rounded-2xl p-3.5 text-left w-full">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#9c6318]">
                        Lời nhắn Thanh Sắc · {drawnCard.artForm}
                      </p>
                      <p className="text-xs text-[#3d3328] mt-1 leading-relaxed italic font-serif">
                        “{drawnCard.blessing}”
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="mt-4 flex flex-col gap-2 w-full">
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href={`#${drawnCard.anchorId}`}
                          onClick={onClose}
                          className="py-2.5 px-3 rounded-full bg-[#558b2f] hover:bg-[#436f23] text-white text-xs font-bold text-center transition-colors whitespace-nowrap"
                        >
                          Xem Cung Bậc ↓
                        </a>
                        <button
                          type="button"
                          onClick={handleDrawAgain}
                          className="py-2.5 px-3 rounded-full bg-[#e83e8c] hover:bg-[#c2185b] text-white text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                        >
                          <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Xé túi khác</span>
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={handleCopyHashtag}
                        className="w-full py-2 px-4 rounded-full border border-[#dec7a9] bg-white hover:bg-[#fdf3e6] text-[#4e342e] text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#558b2f]" aria-hidden="true" />
                            <span>Đã sao chép caption &amp; #MinhOiVeNghe!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Sao chép caption chia sẻ Social Wall</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
