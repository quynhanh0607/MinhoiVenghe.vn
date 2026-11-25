import { useState } from 'react';

interface CardArtworkFrameProps {
  src: string;
  alt: string;
  fallbackBg: string;
  fallbackTitle: string;
  className?: string;
}

/**
 * Renders the 2000x2000 uploaded PNG collectible cards using exact pixel-calibrated
 * framing so the inner 1148x1656 card artwork fills the frame edge-to-edge without
 * showing outer white canvas margins.
 */
export function CardArtworkFrame({
  src,
  alt,
  fallbackBg,
  fallbackTitle,
  className = '',
}: CardArtworkFrameProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative w-full aspect-[1148/1656] overflow-hidden ${fallbackBg} ${className}`}
    >
      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <span className="font-serif italic text-xl font-bold text-[#3b2f00]">
            {fallbackTitle}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className="card-artwork-crop select-none pointer-events-none"
        />
      )}
    </div>
  );
}
