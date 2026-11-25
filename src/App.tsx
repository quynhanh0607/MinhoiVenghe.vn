import { useState } from 'react';
import {
  Check,
  Copy,
  Gift,
  Layers,
  MapPin,
  Menu,
  RotateCw,
  Star,
  X,
  ZoomIn,
} from 'lucide-react';
import {
  HERITAGE_CARDS,
  HERITAGE_LOCATIONS,
  HERITAGE_PILLARS,
  MISS_CONTESTANTS,
} from './data/projectData';
import { BrandLogo } from './components/BrandLogo';
import { FlipCard } from './components/FlipCard';
import { HeritagePillarCard } from './components/HeritagePillarCard';
import { MissVanHoaCard } from './components/MissVanHoaCard';
import { BlindBoxModal } from './components/BlindBoxModal';
import { ImageLightbox, type LightboxItem } from './components/ImageLightbox';

const NAV_LINKS = [
  { href: '#hero', label: 'Trang chủ', desktopLabel: 'Trang chủ', showOnDesktop: false },
  { href: '#y-nghia', label: 'Hành trình lan tỏa', desktopLabel: 'Hành trình', showOnDesktop: true },
  { href: '#bo-tu-the-bai', label: 'Bộ Tứ Thẻ Bài (Lật thẻ)', desktopLabel: 'Thẻ bài', showOnDesktop: true },
  { href: '#bon-cung-bac', label: 'Bốn Cung Bậc Di Sản', desktopLabel: 'Cung bậc', showOnDesktop: true },
  { href: '#ban-do-di-san', label: 'Bản đồ Di sản', desktopLabel: 'Bản đồ', showOnDesktop: true },
  { href: '#miss-van-hoa', label: 'Miss Văn Hóa', desktopLabel: 'Miss Văn Hóa', showOnDesktop: true },
  { href: '#mini-game', label: 'Social Wall & Nhận phẩm', desktopLabel: 'Minigame', showOnDesktop: false },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [flippedCardIds, setFlippedCardIds] = useState<Record<string, boolean>>({});
  const [blindBoxOpen, setBlindBoxOpen] = useState(false);
  const [collectedCards, setCollectedCards] = useState<string[]>([]);
  const [lightboxItem, setLightboxItem] = useState<LightboxItem | null>(null);
  const [hashtagCopied, setHashtagCopied] = useState(false);
  const [socialNotice, setSocialNotice] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setFlippedCardIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const allFlipped = HERITAGE_CARDS.every((card) => flippedCardIds[card.id]);

  const toggleAllCards = () => {
    if (allFlipped) {
      setFlippedCardIds({});
    } else {
      const next: Record<string, boolean> = {};
      HERITAGE_CARDS.forEach((card) => {
        next[card.id] = true;
      });
      setFlippedCardIds(next);
    }
  };

  const handleCardCollected = (cardId: string) => {
    setCollectedCards((prev) => (prev.includes(cardId) ? prev : [...prev, cardId]));
  };

  const handleCopyHashtags = async () => {
    try {
      await navigator.clipboard.writeText('#MinhOiVeNghe #ThanhSacNamBo');
      setHashtagCopied(true);
      window.setTimeout(() => setHashtagCopied(false), 2200);
    } catch {
      setHashtagCopied(false);
    }
  };

  const handleSocialCopy = async (platform: string, handle: string) => {
    try {
      await navigator.clipboard.writeText(handle);
    } catch {
      // Ignore clipboard permission errors in restricted contexts
    }
    setSocialNotice(`Đã sao chép tên kênh ${platform}: "${handle}"`);
    window.setTimeout(() => setSocialNotice(null), 2800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fff9f1] text-[#2c2b29]">
      {/* BEGIN: MainHeader */}
      <header className="sticky top-0 z-50 bg-[#fffaf3]/95 backdrop-blur-md border-b border-[#ebdcc9] transition-all duration-300 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
          {/* Brand Logo / Identity */}
          <a
            href="#hero"
            aria-label="Trang chủ Mình ơi Về nghe"
            className="flex items-center gap-2.5 shrink-0"
          >
            <BrandLogo
              variant="header"
              className="h-9 sm:h-10 w-auto object-contain drop-shadow-xs"
            />
            <span className="font-serif font-bold text-base sm:text-lg text-[#243521] tracking-tight leading-none whitespace-nowrap hidden sm:inline-block">
              Mình ơi Về nghe
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Điều hướng chính"
            className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#3b4737]"
          >
            {NAV_LINKS.filter((item) => item.showOnDesktop).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[#e83e8c] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {item.desktopLabel}
              </a>
            ))}
          </nav>

          {/* Quick Action Buttons + Mobile Menu Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setBlindBoxOpen(true)}
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold text-white bg-[#e83e8c] hover:bg-[#d62a78] rounded-full transition-transform active:scale-95 shadow-xs whitespace-nowrap cursor-pointer"
            >
              Xé túi mù
            </button>
            <a
              href="#miss-van-hoa"
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold text-white bg-[#558b2f] hover:bg-[#457224] rounded-full transition-transform active:scale-95 shadow-xs whitespace-nowrap"
            >
              Miss Văn Hóa
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Đóng thực đơn' : 'Mở thực đơn'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-1.5 text-[#3b4737] rounded-lg hover:bg-[#f5eadc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#558b2f] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Điều hướng di động"
            className="lg:hidden bg-[#fffaf3] border-b border-[#e5d2bc] px-5 pt-2 pb-5 shadow-lg"
          >
            <ul className="flex flex-col space-y-2.5 font-medium text-sm text-[#3b4737]">
              {NAV_LINKS.map((link, idx) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-1.5 hover:text-[#e83e8c] transition-colors ${
                      idx < NAV_LINKS.length - 1 ? 'border-b border-[#f3e6d8]' : ''
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
      {/* END: MainHeader */}

      <main className="flex-1">
        {/* BEGIN: HeroSection */}
        <section
          id="hero"
          className="relative bg-gradient-to-b from-[#212b1d] via-[#2d3a27] to-[#1c2317] text-white pt-10 sm:pt-14 md:pt-16 pb-16 sm:pb-20 px-4 sm:px-6 text-center overflow-hidden bg-khan-ran-subtle"
        >
          {/* Decorative Warm Golden Luminescence */}
          <div
            aria-hidden="true"
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 sm:w-[460px] h-80 sm:h-[360px] bg-[#f59e0b]/20 rounded-full blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#f7d88b]/30 to-transparent"
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Project Pre-Title */}
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.26em] text-[#b2830f] font-medium mb-4">
              Dự án Văn hóa Thanh Sắc
            </p>

            {/* Main Visual Calligraphy Title */}
            <div className="flex justify-center items-center my-2 sm:my-3">
              <BrandLogo
                variant="hero"
                className="w-64 sm:w-80 md:w-96 max-w-[85%] h-auto drop-shadow-[0_6px_24px_rgba(245,158,11,0.38)]"
              />
            </div>

            {/* Tagline & Context Description */}
            <div className="max-w-xl mx-auto mt-5 px-2">
              <h1 className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#efad0c] border-[#a18d1d] leading-snug font-semibold text-balance">
                &ldquo;Mình ơi Về nghe&rdquo; – Hành trình lan tỏa vẻ đẹp thanh sắc Nam Bộ.
              </h1>
              <p className="text-xs sm:text-sm md:text-[15px] text-[#0f4a04] border-[#1a1f19] mt-3.5 leading-relaxed font-normal not-italic">
                Dự án thuộc khuôn khổ môn học:{' '}
                <span className="text-[#c50d7a] font-medium">Lịch sử Văn hóa Việt Nam</span> của sinh
                viên ngành <span className="text-[#d2a73e] font-medium">POHE Quản trị Lữ hành</span>
                , Viện Đào tạo Tiên tiến, Chất lượng cao và POHE, Đại học Kinh tế Quốc dân.
              </p>
            </div>

            {/* Hero Call-To-Action Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <button
                type="button"
                onClick={() => setBlindBoxOpen(true)}
                className="w-full sm:w-auto min-w-[205px] py-3 px-6 bg-gradient-to-r from-[#e83e8c] to-[#c2185b] hover:from-[#d62a78] hover:to-[#ad1457] text-white text-xs sm:text-[13px] font-bold rounded-full uppercase tracking-wider shadow-[0_10px_24px_-6px_rgba(232,62,140,0.5)] active:scale-95 transition cursor-pointer whitespace-nowrap"
              >
                Xé Túi Mù Ngay
              </button>
              <a
                href="#miss-van-hoa"
                className="w-full sm:w-auto min-w-[205px] py-3 px-6 bg-[#558b2f] hover:bg-[#436f23] text-white text-xs sm:text-[13px] font-bold rounded-full uppercase tracking-wider shadow-lg active:scale-95 transition whitespace-nowrap"
              >
                Khám Phá Miss Văn Hóa
              </a>
            </div>
          </div>
        </section>
        {/* END: HeroSection */}

        {/* BEGIN: QuickStatsBar */}
        <section
          aria-label="Điểm nhấn dự án"
          className="relative z-20 -mt-7 sm:-mt-9 px-4 sm:px-6 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-3 gap-2.5 sm:gap-5">
            {/* Stat 1: 04 Bộ Tứ Thẻ Bài */}
            <a
              href="#bo-tu-the-bai"
              className="bg-[#fbc02d] hover:bg-[#f6b71b] text-[#2c2202] rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center shadow-md flex flex-col items-center justify-center active:scale-95 transition"
            >
              <Layers className="w-5 h-5 sm:w-6 sm:h-6 mb-1.5 text-[#4e3905]" aria-hidden="true" />
              <span className="text-2xl sm:text-4xl font-black font-serif leading-none tabular-nums">
                04
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase mt-1.5 leading-tight tracking-tight">
                Bộ Tứ Thẻ Bài
              </span>
            </a>

            {/* Stat 2: 08 Miss Văn Hóa */}
            <a
              href="#miss-van-hoa"
              className="bg-[#e91e63] hover:bg-[#d81b60] text-white rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center shadow-md flex flex-col items-center justify-center active:scale-95 transition"
            >
              <Star className="w-5 h-5 sm:w-6 sm:h-6 mb-1.5 text-pink-100" aria-hidden="true" />
              <span className="text-2xl sm:text-4xl font-black font-serif leading-none tabular-nums">
                08
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase mt-1.5 leading-tight tracking-tight">
                Miss Văn Hóa
              </span>
            </a>

            {/* Stat 3: 04 Không Gian Di Sản */}
            <a
              href="#ban-do-di-san"
              className="bg-[#689f38] hover:bg-[#5a8c2e] text-white rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center shadow-md flex flex-col items-center justify-center active:scale-95 transition"
            >
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mb-1.5 text-green-100" aria-hidden="true" />
              <span className="text-2xl sm:text-4xl font-black font-serif leading-none tabular-nums">
                04
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase mt-1.5 leading-tight tracking-tight">
                Không Gian Di Sản
              </span>
            </a>
          </div>
        </section>
        {/* END: QuickStatsBar */}

        {/* BEGIN: MeaningStatement */}
        <section id="y-nghia" className="py-10 sm:py-14 px-4 sm:px-6 max-w-3xl mx-auto text-center">
          <div className="bg-white/90 rounded-2xl sm:rounded-3xl p-6 sm:p-9 border border-[#eddccb] shadow-xs">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#2d4025] mb-3 leading-snug text-balance">
              Hành trình lan tỏa vẻ đẹp thanh sắc Nam Bộ
            </h2>
            <div className="w-14 h-0.5 bg-[#e83e8c] mx-auto mb-5 rounded-full" />
            <p className="text-xs sm:text-sm md:text-[15px] text-[#4e463e] leading-relaxed max-w-2xl mx-auto">
              <span className="font-semibold text-[#e83e8c]">&ldquo;Mình ơi Về nghe&rdquo;</span> là
              nhịp cầu thế hệ mang văn hóa dân gian miền tây sông nước bước vào đời sống của người
              trẻ qua lăng kính đầy mới mẻ và hiện đại. Từ khoảnh khắc tò mò{' '}
              <span className="font-semibold text-[#558b2f]">&quot;xé túi mù&quot;</span> đến hành
              trình sách balo đến khám phá miền sông nước đậm đà bản sắc. Hành trình ấy không chỉ là
              trải nghiệm mà còn khơi dậy trong mỗi chúng ta niềm tự hào, tình yêu quê hương và mong
              muốn được tiếp nối những giá trị bản sắc truyền thống giữa dòng chảy thời đại mới.
            </p>
          </div>
        </section>
        {/* END: MeaningStatement */}

        {/* BEGIN: FlipCardsSection */}
        <section
          id="bo-tu-the-bai"
          className="py-10 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-[#fbf5ea] to-[#fff9f1] border-y border-[#eddcca]"
        >
          <div className="max-w-5xl mx-auto">
            <div className="max-w-xl mx-auto text-center mb-7 sm:mb-10">
              <p className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#a8742b]">
                Bộ Tứ Thẻ Bài
              </p>
              <h2 className="font-serif italic text-2xl sm:text-3xl md:text-4xl font-bold text-[#d81b60] mt-1.5">
                “Tiếng lòng Mình ơi”
              </h2>
              <p className="text-xs sm:text-sm text-[#6e6357] mt-2 leading-relaxed">
                Bấm vào từng thẻ bài để chiêm ngưỡng một trong{' '}
                <span className="text-[#845014] font-semibold">4 bí ẩn Thanh Sắc!</span>
              </p>

              <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2.5 text-xs">
                <span className="inline-flex items-center gap-1.5 text-[#a12a60] font-medium">
                  <RotateCw className="w-3.5 h-3.5 text-[#e83e8c]" aria-hidden="true" />
                  Chạm thẻ để lật xem bí mật mặt sau
                </span>
                <span aria-hidden="true" className="text-[#cbb69b]">
                  ·
                </span>
                <button
                  type="button"
                  onClick={toggleAllCards}
                  className="font-semibold text-[#558b2f] hover:text-[#33691e] underline underline-offset-2 cursor-pointer"
                >
                  {allFlipped ? 'Úp tất cả thẻ' : 'Lật xem tất cả'}
                </button>
              </div>
            </div>

            {/* 2x2 on Mobile, 4-Column Collector Showcase on Desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 md:gap-6">
              {HERITAGE_CARDS.map((card) => (
                <FlipCard
                  key={card.id}
                  card={card}
                  isFlipped={Boolean(flippedCardIds[card.id])}
                  onToggle={() => toggleCard(card.id)}
                />
              ))}
            </div>
          </div>
        </section>
        {/* END: FlipCardsSection */}

        {/* BEGIN: FourHeritageDetails */}
        <section id="bon-cung-bac" className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#795548]">
              Khám Phá Di Sản Nghệ Thuật
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2e3d23] mt-1.5 text-balance">
              Bốn Cung Bậc Di Sản Nam Bộ
            </h2>
            <div className="w-16 h-0.5 bg-[#8bc34a] mx-auto mt-3 rounded-full" />
          </div>

          <div className="space-y-6 sm:space-y-8">
            {HERITAGE_PILLARS.map((pillar, index) => (
              <HeritagePillarCard
                key={pillar.id}
                pillar={pillar}
                index={index}
                onZoomImage={setLightboxItem}
              />
            ))}
          </div>
        </section>
        {/* END: FourHeritageDetails */}

        {/* BEGIN: HeritageMapLocations */}
        <section
          id="ban-do-di-san"
          className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-y border-[#ecdcc8]"
        >
          <div className="max-w-5xl mx-auto">
            <div className="max-w-xl mx-auto text-center mb-8 sm:mb-10">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2d18]">
                Bản đồ Di sản
              </h2>
              <p className="text-xs sm:text-sm md:text-[15px] text-[#61594f] mt-2 leading-relaxed">
                Theo chân chúng tôi về với những vùng đất rực rỡ nắng gió Nam Bộ để chạm tay vào đời
                sống chân thực của các nghệ nhân gìn giữ lửa nghề.
              </p>
              <div className="w-14 h-0.5 bg-[#e83e8c] mx-auto mt-3.5 rounded-full" />
            </div>

            {/* Single Column Mobile -> Balanced 2x2 Editorial Grid on Tablet/Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
              {HERITAGE_LOCATIONS.map((location) => (
                <article
                  key={location.id}
                  className="bg-[#fffbf5] rounded-2xl overflow-hidden border border-[#eedecb] shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxItem({
                        src: location.image,
                        alt: location.imageAlt,
                        title: location.name,
                        subtitle: location.orderLabel,
                        caption: location.descriptionParts.map((p) => p.text).join(''),
                      })
                    }
                    className="group relative h-52 sm:h-60 w-full overflow-hidden bg-[#efe4d4] cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e83e8c]"
                    aria-label={`Xem ảnh lớn của ${location.name}`}
                  >
                    <img
                      src={location.image}
                      alt={location.imageAlt}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover ${location.imagePosition} transition-transform duration-500 group-hover:scale-[1.04]`}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    <span className="absolute bottom-2.5 right-2.5 p-2 rounded-full bg-black/50 text-white backdrop-blur-xs opacity-85 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </button>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    <span
                      className={`text-[10px] sm:text-[11px] uppercase font-bold tracking-[0.18em] block mb-1 ${location.accentColor}`}
                    >
                      {location.orderLabel}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1f2a1b]">
                      {location.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4d463e] mt-2 leading-relaxed">
                      {location.descriptionParts.map((part, idx) =>
                        part.bold ? (
                          <strong key={idx} className="text-[#1f2a1b] font-semibold">
                            {part.text}
                          </strong>
                        ) : (
                          <span key={idx}>{part.text}</span>
                        ),
                      )}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* END: HeritageMapLocations */}

        {/* BEGIN: MissVanHoaSection */}
        <section id="miss-van-hoa" className="py-12 sm:py-16 px-4 sm:px-6 bg-[#1f1a17] text-white">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-xl mx-auto text-center mb-8 sm:mb-10">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#f48fb1] font-semibold">
                Miss Văn Hóa
              </p>
              <h2 className="font-serif italic text-3xl sm:text-4xl font-bold text-[#ffd54f] mt-1.5">
                “ Hương Sắc ”
              </h2>
              <p className="text-xs sm:text-sm md:text-[15px] text-[#c4b9b0] mt-2 leading-relaxed">
                Nét vẻ đẹp thanh tân của{' '}
                <span className="text-white font-medium">người con gái Nam Bộ</span> hòa mình vào 4
                loại nghệ thuật kinh điển
              </p>
            </div>

            {/* 8 Contestants / Cultural Ambassadors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 max-w-4xl mx-auto">
              {MISS_CONTESTANTS.map((contestant) => (
                <MissVanHoaCard
                  key={contestant.id}
                  contestant={contestant}
                  onSelect={setLightboxItem}
                />
              ))}
            </div>
          </div>
        </section>
        {/* END: MissVanHoaSection */}

        {/* BEGIN: SocialWallAndMiniGame */}
        <section
          id="mini-game"
          className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-[#fff7f0] to-[#feeddf]"
        >
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2e261f]">
              Social Wall &amp; Minigame Nhận phẩm
            </h2>
            <p className="text-xs sm:text-sm text-[#6e5f52] mt-2">
              Cùng gửi trò viral kèm các hashtag
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#e83e8c] mt-1 leading-relaxed">
              <button
                type="button"
                onClick={handleCopyHashtags}
                className="underline decoration-[#e83e8c]/40 hover:decoration-[#e83e8c] underline-offset-2 cursor-pointer"
                title="Nhấn để sao chép hashtag"
              >
                #MinhOiVeNghe, #ThanhSacNamBo
              </button>{' '}
              và{' '}
              <button
                type="button"
                onClick={() => setBlindBoxOpen(true)}
                className="text-[#558b2f] underline decoration-[#558b2f]/50 hover:decoration-[#558b2f] underline-offset-2 cursor-pointer"
              >
                bốc thẻ bài
              </button>{' '}
              dự nhận phẩm may mắn hôm nay!
            </p>

            {/* Quick Minigame Action Bar */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
              <button
                type="button"
                onClick={() => setBlindBoxOpen(true)}
                className="inline-flex items-center gap-2 py-2.5 px-5 bg-[#558b2f] hover:bg-[#436f23] text-white text-xs sm:text-sm font-bold rounded-full shadow-sm active:scale-95 transition cursor-pointer"
              >
                <Gift className="w-4 h-4" aria-hidden="true" />
                <span>
                  Xé Túi Mù Nhận Thẻ
                  {collectedCards.length > 0
                    ? ` (${collectedCards.length}/${HERITAGE_CARDS.length})`
                    : ''}
                </span>
              </button>
              <button
                type="button"
                onClick={handleCopyHashtags}
                className="inline-flex items-center gap-1.5 py-2.5 px-4 bg-white hover:bg-[#fff3e4] text-[#5e4736] border border-[#e3ccb1] text-xs font-semibold rounded-full transition cursor-pointer"
              >
                {hashtagCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#558b2f]" aria-hidden="true" />
                    <span>Đã sao chép hashtag</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Chép hashtag</span>
                  </>
                )}
              </button>
            </div>

            {/* Signature Pink Card Box */}
            <div className="mt-6 bg-gradient-to-br from-[#e83e8c] via-[#d81b60] to-[#ad1457] text-white rounded-3xl p-6 sm:p-8 shadow-[var(--shadow-floating)] border border-pink-400/40 relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute -right-8 -bottom-8 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none"
              />
              <h3 className="font-serif italic text-xl sm:text-2xl font-bold text-[#ffe082]">
                Dự án &quot; Mình ơi Về nghe &quot;
              </h3>
              <p className="text-xs sm:text-sm text-pink-50 mt-2.5 leading-relaxed max-w-md mx-auto">
                Dự án nghiên cứu và sáng tạo truyền thông văn hóa nghệ thuật truyền thống Nam Bộ,
                kết nối di sản ngàn đời với nhịp đập đương đại của thế hệ trẻ.
              </p>

              <div className="mt-4 pt-3.5 border-t border-white/20">
                <p className="text-xs sm:text-[13px] font-semibold text-white/95">
                  Đơn vị thực hiện: Nhóm 2 – POHE Quản trị Lữ hành 67
                </p>
              </div>

              {/* Social Media Actions */}
              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#ffecb3] mb-3">
                  Kết nối Mạng xã hội
                </p>
                <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
                  <button
                    type="button"
                    onClick={() => handleSocialCopy('Facebook', 'Mình ơi Về nghe')}
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-5 bg-white text-[#1877f2] hover:bg-slate-50 rounded-full text-xs sm:text-[13px] font-bold shadow-sm transition active:scale-95 cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span>Mình ơi Về nghe</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSocialCopy('TikTok', '@minhoi.ve.nghe')}
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-5 bg-[#121212] text-white hover:bg-neutral-800 rounded-full text-xs sm:text-[13px] font-bold shadow-sm transition active:scale-95 cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.77 1.81-.03 3.28-1.54 3.32-3.35.03-3.04.01-6.09.01-9.14 0-3.05-.01-6.1.01-9.15z" />
                    </svg>
                    <span>minhoi.ve.nghe</span>
                  </button>
                </div>

                {socialNotice && (
                  <p className="mt-3 text-xs font-medium text-[#ffecb3]">{socialNotice}</p>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* END: SocialWallAndMiniGame */}
      </main>

      {/* BEGIN: MainFooter */}
      <footer className="bg-[#181a17] text-[#a49a8f] py-8 px-4 text-center border-t border-[#2e2f2b]">
        <div className="max-w-xl mx-auto">
          <div className="flex justify-center mb-2.5">
            <BrandLogo
              variant="footer"
              className="h-9 w-auto object-contain opacity-85 brightness-110"
            />
          </div>
          <p className="text-xs text-[#9c9184] leading-relaxed">
            © 2026 Dự án Văn Hóa Thanh Sắc &quot;Mình ơi Về nghe&quot;. Bảo lưu mọi quyền.
          </p>
          <p className="text-[11px] text-[#756c61] mt-1">
            POHE Quản trị Lữ hành 67 - Đại học Kinh tế Quốc dân (NEU)
          </p>
        </div>
      </footer>
      {/* END: MainFooter */}

      {/* Interactive Xé Túi Mù Modal */}
      <BlindBoxModal
        isOpen={blindBoxOpen}
        onClose={() => setBlindBoxOpen(false)}
        collectedIds={collectedCards}
        onCardCollected={handleCardCollected}
      />

      {/* Full-Resolution Lightbox Viewer */}
      <ImageLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </div>
  );
}
