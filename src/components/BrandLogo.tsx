import { useState } from 'react';
import { BRAND_LOGO_URL } from '../data/projectData';

interface BrandLogoProps {
  variant?: 'header' | 'hero' | 'footer';
  className?: string;
}

export function BrandLogo({ variant = 'header', className = '' }: BrandLogoProps) {
  const [imgFailed, setImgFailed] = useState(false);

  if (imgFailed) {
    if (variant === 'hero') {
      return (
        <div
          className={`flex flex-col items-center justify-center select-none ${className}`}
          aria-label="Mình ơi Về nghe"
        >
          <span className="font-serif italic font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#fff3c4] via-[#f6c445] to-[#c98b16] drop-shadow-[0_4px_16px_rgba(245,158,11,0.38)] leading-tight">
            Mình ơi
          </span>
          <span className="font-serif italic font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#fff7d6] via-[#f5bd2e] to-[#b87b0d] drop-shadow-[0_6px_22px_rgba(245,158,11,0.42)] -mt-2 leading-none">
            Về nghe
          </span>
        </div>
      );
    }

    return (
      <span
        className={`font-serif italic font-bold tracking-tight whitespace-nowrap ${
          variant === 'footer'
            ? 'text-lg text-[#f7d88b]'
            : 'text-base sm:text-lg text-[#243521]'
        } ${className}`}
      >
        Mình ơi Về nghe
      </span>
    );
  }

  return (
    <img
      src={BRAND_LOGO_URL}
      alt="Logo Mình ơi Về nghe"
      referrerPolicy="no-referrer"
      onError={() => setImgFailed(true)}
      className={className}
    />
  );
}
