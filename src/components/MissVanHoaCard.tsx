import { useState } from 'react';
import type { MissContestantItem } from '../data/projectData';
import type { LightboxItem } from './ImageLightbox';

interface MissVanHoaCardProps {
  contestant: MissContestantItem;
  onSelect: (item: LightboxItem) => void;
}

export function MissVanHoaCard({ contestant, onSelect }: MissVanHoaCardProps) {
  const [imgError, setImgError] = useState(false);

  const initials = contestant.name
    .split(' ')
    .slice(-2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  return (
    <button
      type="button"
      onClick={() => {
        if (!imgError) {
          onSelect({
            src: contestant.image,
            alt: contestant.name,
            title: contestant.name,
            subtitle: `SBD: ${contestant.sbd} · ${contestant.province} · ${contestant.artAffiliation}`,
            caption: `“${contestant.quote}”`,
          });
        }
      }}
      className="w-full text-left bg-[#2b2420] hover:bg-[#342b26] border border-[#3e342f] hover:border-[#e83e8c]/60 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 flex gap-3.5 items-center shadow-xs transition-all duration-200 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f48fb1]"
    >
      {imgError ? (
        <div
          aria-hidden="true"
          className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full border-2 border-[#e83e8c] bg-gradient-to-br from-[#5d2441] to-[#2c1d18] flex items-center justify-center flex-shrink-0 font-serif font-bold text-lg text-[#ffebba]"
        >
          {initials}
        </div>
      ) : (
        <img
          src={contestant.image}
          alt={contestant.name}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full object-cover border-2 border-[#e83e8c] flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        />
      )}

      <div className="min-w-0 flex-1">
        <h3 className="text-sm sm:text-[15px] font-bold text-[#ffe0b2] group-hover:text-[#ffd54f] transition-colors truncate">
          {contestant.name}
        </h3>
        <p className="text-[11px] sm:text-xs text-[#8bc34a] font-medium mt-0.5 tabular-nums">
          SBD: {contestant.sbd} - {contestant.province}
        </p>
        <p className="text-[11px] sm:text-xs text-[#cfc2b6] mt-1 italic leading-snug line-clamp-2">
          “{contestant.quote}”
        </p>
      </div>
    </button>
  );
}
