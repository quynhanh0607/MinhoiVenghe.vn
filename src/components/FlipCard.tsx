import type { KeyboardEvent, MouseEvent } from 'react';
import { RotateCw } from 'lucide-react';
import type { HeritageCardItem } from '../data/projectData';
import { CardArtworkFrame } from './CardArtworkFrame';

interface FlipCardProps {
  card: HeritageCardItem;
  isFlipped: boolean;
  onToggle: () => void;
}

export function FlipCard({ card, isFlipped, onToggle }: FlipCardProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="perspective-1000 w-full aspect-[1148/1656]">
      <div
        role="button"
        tabIndex={0}
        aria-pressed={isFlipped}
        aria-label={`Lật thẻ bài ${card.title} - ${card.artForm}`}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className={`card-inner relative w-full h-full transform-style-3d cursor-pointer rounded-2xl shadow-[var(--shadow-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e83e8c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf5ea] ${
          isFlipped ? 'is-flipped' : ''
        }`}
      >
        {/* Front Face: User's Crisp Uploaded Collectible Card Artwork */}
        <div
          className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden border-2 ${card.theme.frontBorder} ${card.theme.frontBg} group`}
        >
          <CardArtworkFrame
            src={card.frontImage}
            alt={`Thẻ bài ${card.title} - ${card.artForm}`}
            fallbackBg={card.theme.frontBg}
            fallbackTitle={card.title}
            className="h-full w-full"
          />
          <div className="absolute bottom-2 inset-x-2 flex justify-center pointer-events-none">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#1c1b18]/65 backdrop-blur-xs text-[10px] sm:text-xs font-medium text-white shadow-xs transition-transform duration-200 group-hover:scale-105">
              <span>Chạm để lật</span>
              <RotateCw className="w-3 h-3" aria-hidden="true" />
            </span>
          </div>
        </div>

        {/* Back Face: Detailed Heritage Essence & Pillar Link */}
        <div
          className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl p-3.5 sm:p-4 md:p-5 flex flex-col justify-between ${card.theme.backGradient} border-2 ${card.theme.backBorder} text-left`}
        >
          <div>
            <div className="flex items-center justify-between gap-2">
              <span
                className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider ${card.theme.categoryText}`}
              >
                {card.categoryLabel}
              </span>
              <RotateCw
                className={`w-3.5 h-3.5 opacity-60 ${card.theme.categoryText}`}
                aria-hidden="true"
              />
            </div>

            <h3
              className={`font-serif italic text-lg sm:text-xl font-bold leading-tight mt-1 ${card.theme.titleText}`}
            >
              {card.title}
            </h3>

            <p
              className={`text-xs sm:text-[13px] font-semibold mt-1 ${card.theme.subtitleText}`}
            >
              {card.artForm}
            </p>

            <div className="w-8 h-px bg-current opacity-20 my-2.5" />

            <p className="text-[11px] sm:text-xs text-[#3a332c] leading-relaxed">
              {card.summary}
            </p>
          </div>

          <a
            href={`#${card.anchorId}`}
            onClick={handleAnchorClick}
            className={`mt-3 text-center w-full py-2 px-3 ${card.theme.buttonBg} ${card.theme.buttonText} text-[11px] sm:text-xs font-bold rounded-xl shadow-sm transition-colors duration-200 whitespace-nowrap`}
          >
            Chi tiết Cung Bậc ↓
          </a>
        </div>
      </div>
    </div>
  );
}
