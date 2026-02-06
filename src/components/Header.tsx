import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ShoppingCart, Menu, X } from 'lucide-react';

type Page =
  | 'home'
  | 'story'
  | 'products'
  | 'detail'
  | 'feedback'
  | 'contact'
  | 'cart'
  | 'checkout';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
  cartCount: number;
}

/**
 * Brand Tokens (easy to tweak)
 */
const ACCENT_PINK = '#F4A3B4'; // mascot pink
const TEXT_BROWN = '#5C4033';
const BG_CREAM = '#FDFBF7';

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  currentPage,
  cartCount,
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems: { name: string; id: Page }[] = [
    { name: 'Trang chủ', id: 'home' },
    { name: 'Câu chuyện', id: 'story' },
    { name: 'Sản phẩm', id: 'products' },
    { name: 'Feedback', id: 'feedback' },
    { name: 'Liên hệ', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Tagline Bar (pink) */}
      <div
        className="text-white font-medium overflow-hidden whitespace-nowrap relative flex items-center"
        style={{
          backgroundColor: ACCENT_PINK,
          height: '48px',
          fontSize: '14px',
        }}
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap absolute"
        >
          <div className="flex gap-14 items-center px-8">
            <span>Bông Lém – những món quà nhỏ mang niềm vui to 🌼</span>
            <span>Bông Lém chào bạn 🌼</span>
            <span>Bông Lém – những món quà nhỏ mang niềm vui to 🌼</span>
            <span>Bông Lém chào bạn 🌼</span>
          </div>
          <div className="flex gap-14 items-center px-8">
            <span>Bông Lém – những món quà nhỏ mang niềm vui to 🌼</span>
            <span>Bông Lém chào bạn 🌼</span>
            <span>Bông Lém – những món quà nhỏ mang niềm vui to 🌼</span>
            <span>Bông Lém chào bạn 🌼</span>
          </div>
        </motion.div>
      </div>

      {/* Main Nav */}
      <div
        className="backdrop-blur-md border-b"
        style={{
          backgroundColor: `${BG_CREAM}F5`,
          borderColor: `${TEXT_BROWN}20`,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6">
          <div className="flex items-center justify-between gap-4">
            {/* Logo (layout unchanged) + Mascot (desktop + mobile small) */}
            <div className="relative">
              <button
                onClick={() => onNavigate('home')}
                className="cursor-pointer select-none"
                aria-label="Go to home"
                style={{
                  // ✅ Mobile only: give the text a bit of space so a small mascot fits on the left
                  // md+: no padding so desktop stays identical
                  paddingLeft: 'clamp(38px, 7vw, 0px)',
                }}
              >
                <span
                  className="font-serif font-bold tracking-wider transition-colors"
                  style={{
                    color: TEXT_BROWN,
                    fontSize: '44px',
                    lineHeight: 1,
                  }}
                >
                  BÔNG LÉM
                </span>
              </button>

              {/* ✅ Mobile mascot (small, only on < md) */}
              <img
                src="/mascot.png"
                alt="Bông Lém Mascot"
                className="pointer-events-none absolute md:hidden"
                style={{
                  width: '43px',
                  height: '43px',
                  top: '52%', // minimal nach unten für bessere Balance
                  left: '0px',
                  transform: 'translateY(-50%)',
                  filter: 'drop-shadow(0px 6px 12px rgba(0,0,0,0.18))',
                }}
              />

              {/* ✅ Desktop/iPad mascot (md+) */}
              <img
                src="/mascot.png"
                alt="Bông Lém Mascot"
                className="pointer-events-none absolute hidden md:block"
                style={{
                  width: 'clamp(66px, 6vw, 86px)',
                  height: 'clamp(66px, 6vw, 86px)',
                  top: '50%',
                  left: 'clamp(-72px, -6vw, -92px)',
                  transform: 'translateY(-50%)',
                  filter: 'drop-shadow(0px 10px 18px rgba(0,0,0,0.18))',
                }}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center">
              <div
                className="flex items-center gap-2 px-3 py-3 rounded-full border shadow-sm"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.75)',
                  borderColor: `${TEXT_BROWN}1A`,
                }}
              >
                {navItems.map((item, index) => {
                  const active = currentPage === item.id;
                  return (
                    <React.Fragment key={item.id}>
                      <button
                        onClick={() => onNavigate(item.id)}
                        className="relative rounded-full font-medium transition-all"
                        style={{
                          padding: '12px 22px',
                          fontSize: '18px',
                          color: active ? '#FFFFFF' : `${TEXT_BROWN}B3`,
                          backgroundColor: active ? ACCENT_PINK : 'transparent',
                        }}
                      >
                        {item.name}
                      </button>

                      {index !== navItems.length - 1 && (
                        <span
                          className="h-7 w-px"
                          style={{ backgroundColor: `${TEXT_BROWN}1A` }}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4" style={{ color: TEXT_BROWN }}>
              <a
                href="#"
                className="hidden sm:flex items-center justify-center rounded-full border transition"
                style={{
                  width: '54px',
                  height: '54px',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  borderColor: `${TEXT_BROWN}1A`,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = ACCENT_PINK)}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = `${TEXT_BROWN}1A`)
                }
                aria-label="Instagram"
              >
                <Instagram size={30} />
              </a>

              <button
                onClick={() => onNavigate('cart')}
                className="relative flex items-center justify-center rounded-full border transition"
                style={{
                  width: '54px',
                  height: '54px',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  borderColor: `${TEXT_BROWN}1A`,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = ACCENT_PINK)}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = `${TEXT_BROWN}1A`)
                }
                aria-label="Cart"
              >
                <ShoppingCart size={30} />
                <span
                  className="absolute text-xs min-w-6 h-6 rounded-full flex items-center justify-center text-white"
                  style={{
                    backgroundColor: ACCENT_PINK,
                    top: '-6px',
                    right: '-6px',
                    padding: '0 6px',
                    fontSize: '12px',
                  }}
                >
                  {Math.min(cartCount, 99)}
                </span>
              </button>

              <button
                className="lg:hidden flex items-center justify-center rounded-full border"
                style={{
                  width: '54px',
                  height: '54px',
                  borderColor: `${TEXT_BROWN}1A`,
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  color: TEXT_BROWN,
                }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Open menu"
              >
                {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t" style={{ borderColor: `${TEXT_BROWN}1A` }}>
            <div className="px-6 py-6 flex flex-col gap-3" style={{ backgroundColor: BG_CREAM }}>
              {navItems.map((item) => {
                const active = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="font-medium py-4 px-5 rounded-2xl text-left transition"
                    style={{
                      fontSize: '20px',
                      color: active ? '#FFFFFF' : TEXT_BROWN,
                      backgroundColor: active ? ACCENT_PINK : 'rgba(255,255,255,0.7)',
                      border: `1px solid ${TEXT_BROWN}1A`,
                    }}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
