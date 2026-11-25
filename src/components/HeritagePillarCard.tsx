import { ZoomIn } from 'lucide-react';
import type { HeritagePillarItem } from '../data/projectData';
import type { LightboxItem } from './ImageLightbox';

interface HeritagePillarCardProps {
  pillar: HeritagePillarItem;
  index: number;
  onZoomImage: (item: LightboxItem) => void;
}

function renderHighlightedText(
  text: string,
  highlights: string[],
  highlightClass: string,
) {
  if (highlights.length === 0) return text;
  const escaped = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = text.split(regex);
  return parts.map((part, idx) =>
    highlights.includes(part) ? (
      <strong key={idx} className={highlightClass}>
        {part}
      </strong>
    ) : (
      <span key={idx}>{part}</span>
    ),
  );
}

const THEME_STYLES = {
  dan: {
    article: 'bg-[#bfd874] border-[#a2bf56] text-[#283811]',
    divider: 'border-[#a3be57]',
    cardLabel: 'text-[#27460c]',
    title: 'text-[#1e3808]',
    tag: 'bg-white/85 text-[#2a4d0c]',
    subheading: 'text-[#1b3009]',
    body: 'text-[#283811]',
    underline: 'underline decoration-[#558b2f] decoration-2 underline-offset-2 font-bold',
    historyHighlight: 'font-bold text-[#1a3809]',
    signatureHighlight: 'font-bold text-[#1a3809]',
    frameBorder: 'border-white/50 bg-[#a9c45c]/30',
    caption: 'text-[#27460c]/85',
  },
  ca: {
    article: 'bg-[#f25c9f] border-[#df4187] text-white',
    divider: 'border-[#f472ac]',
    cardLabel: 'text-pink-100',
    title: 'text-white',
    tag: 'bg-white text-[#d81b60]',
    subheading: 'text-white',
    body: 'text-pink-50',
    underline: 'underline decoration-white/90 decoration-2 underline-offset-2 font-extrabold text-white',
    historyHighlight: 'font-bold text-yellow-200',
    signatureHighlight: 'font-bold text-white',
    frameBorder: 'border-white/35 bg-[#c93879]/30',
    caption: 'text-pink-100/90',
  },
  mua: {
    article: 'bg-[#f4bf2c] border-[#e1ad1d] text-[#2b2103]',
    divider: 'border-[#dea816]',
    cardLabel: 'text-[#543b01]',
    title: 'text-[#3d2900]',
    tag: 'bg-[#3d2900] text-[#fbc02d]',
    subheading: 'text-[#2a1d00]',
    body: 'text-[#3a2802]',
    underline: 'underline decoration-[#b45309] decoration-2 underline-offset-2 font-bold',
    historyHighlight: 'font-bold text-[#201500]',
    signatureHighlight: 'font-bold text-[#201500]',
    frameBorder: 'border-white/45 bg-[#d9a416]/30',
    caption: 'text-[#473100]/85',
  },
  kich: {
    article: 'bg-[#4d360f] border-[#3e2b0b] text-white',
    divider: 'border-[#6b4d1a]',
    cardLabel: 'text-[#e0cfb8]',
    title: 'text-[#ffebba]',
    tag: 'bg-[#e83e8c] text-white',
    subheading: 'text-[#ffebba]',
    body: 'text-[#ebe0d1]',
    underline: 'underline decoration-[#e83e8c] decoration-2 underline-offset-2 font-bold text-white',
    historyHighlight: 'font-bold text-[#ffd54f]',
    signatureHighlight: 'font-bold text-white',
    frameBorder: 'border-white/20 bg-[#2e1f07]/50',
    caption: 'text-[#e0cfb8]/85',
  },
} as const;

export function HeritagePillarCard({
  pillar,
  index,
  onZoomImage,
}: HeritagePillarCardProps) {
  const styles = THEME_STYLES[pillar.theme];
  const isReversedOnDesktop = index % 2 === 1;

  const signatureBoldPhrases =
    pillar.theme === 'dan'
      ? ['linh hồn']
      : pillar.theme === 'ca'
        ? ['hành trình kéo dài']
        : pillar.theme === 'mua'
          ? ['lễ vật']
          : ['đỏ, trắng, đen và xanh'];

  return (
    <article
      id={pillar.id}
      className={`${styles.article} rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm border transition-shadow duration-200 hover:shadow-md`}
    >
      {/* Header Row */}
      <div
        className={`flex flex-wrap items-center justify-between gap-2 mb-4 md:mb-6 border-b ${styles.divider} pb-3`}
      >
        <div>
          <span className={`text-xs sm:text-sm font-semibold block ${styles.cardLabel}`}>
            {pillar.cardLabel}
          </span>
          <h3
            className={`font-serif italic text-xl sm:text-2xl md:text-3xl font-bold leading-tight mt-0.5 ${styles.title}`}
          >
            {pillar.title}
          </h3>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wide shadow-xs whitespace-nowrap ${styles.tag}`}
        >
          {pillar.tag}
        </span>
      </div>

      {/* Content + Representative High-Res Photo */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-center">
        {/* Text Narrative Column */}
        <div
          className={`md:col-span-7 space-y-3.5 sm:space-y-4 text-xs sm:text-sm md:text-[15px] leading-relaxed ${styles.body} ${
            isReversedOnDesktop ? 'md:order-2' : 'md:order-1'
          }`}
        >
          <div>
            <h4 className={`font-bold text-sm sm:text-base mb-1 ${styles.subheading}`}>
              {pillar.artName}
            </h4>
            <p>
              {pillar.artDescription.prefix}
              <strong className={styles.underline}>
                {pillar.artDescription.highlight}
              </strong>
              {pillar.artDescription.suffix}
              {pillar.artDescription.highlightSecond && (
                <strong className="font-bold text-[#ffc107]">
                  {pillar.artDescription.highlightSecond}
                </strong>
              )}
              {pillar.artDescription.suffixSecond}
            </p>
          </div>

          <div>
            <h4 className={`font-bold text-sm sm:text-base mb-1 ${styles.subheading}`}>
              {pillar.historyTitle}
            </h4>
            <p>
              {renderHighlightedText(
                pillar.historyBody,
                pillar.historyHighlights,
                styles.historyHighlight,
              )}
            </p>
          </div>

          <div>
            <h4 className={`font-bold text-sm sm:text-base mb-1 ${styles.subheading}`}>
              {pillar.signatureTitle}
            </h4>
            <p>
              {renderHighlightedText(
                pillar.signatureBody,
                signatureBoldPhrases,
                styles.signatureHighlight,
              )}
            </p>
            {pillar.signatureSubline && (
              <p className={`font-serif italic font-semibold mt-1 text-sm sm:text-base ${styles.subheading}`}>
                {pillar.signatureSubline}
              </p>
            )}
          </div>
        </div>

        {/* High-Resolution Photograph Column */}
        <div
          className={`md:col-span-5 ${
            isReversedOnDesktop ? 'md:order-1' : 'md:order-2'
          }`}
        >
          <button
            type="button"
            onClick={() =>
              onZoomImage({
                src: pillar.image,
                alt: pillar.imageAlt,
                title: `${pillar.cardLabel} ${pillar.title} — ${pillar.artName}`,
                subtitle: pillar.tag,
                caption: pillar.imageCaption,
              })
            }
            className={`group relative block w-full rounded-xl md:rounded-2xl overflow-hidden shadow-inner border ${styles.frameBorder} cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white`}
            aria-label={`Phóng to ảnh ${pillar.artName}`}
          >
            <div className="w-full aspect-[4/5] sm:aspect-[4/4.6] overflow-hidden">
              <img
                src={pillar.image}
                alt={pillar.imageAlt}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover ${pillar.imageFocusClass} transition-transform duration-500 group-hover:scale-[1.03]`}
              />
            </div>
            <div className="absolute bottom-2.5 right-2.5 p-2 rounded-full bg-black/50 text-white backdrop-blur-xs opacity-85 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-4 h-4" aria-hidden="true" />
            </div>
          </button>
          <p className={`text-[11px] font-serif italic mt-2 text-center ${styles.caption}`}>
            {pillar.imageCaption}
          </p>
        </div>
      </div>
    </article>
  );
}
