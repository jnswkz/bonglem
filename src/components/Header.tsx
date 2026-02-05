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

const ACCENT_PINK = '#F4A3B4'; // Maskottchen-Rosa
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
      {/* Tagline Bar – jetzt Rosa */}
      <div
        className="text-white text-sm md:text-base font-medium overflow-hidden whitespace-nowrap relative h-11 flex items-center"
        style={{ backgroundColor: ACCENT_PINK }}
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

      {/* Main Header */}
      <div
        className="backdrop-blur-md border-b"
        style={{
          backgroundColor: `${BG_CREAM}F5`,
          borderColor: `${TEXT_BROWN}20`,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6">
          <div className="flex items-center justify-between gap-4">
            {/* Logo + Mascot Hover */}
            <div className="relative group">
              <button
                onClick={() => onNavigate('home')}
                className="cursor-pointer"
              >
                <span
                  className="text-4xl md:text-5xl font-serif font-bold tracking-wider transition-colors"
                  style={{ color: TEXT_BROWN }}
                >
                  BÔNG LÉM
                </span>
              </button>

              {/* Mascot on hover */}
              <img
                src="/mascot.png.png"
                alt="Bông Lém Mascot"
                className="pointer-events-none absolute -right-16 -top-10 w-20 opacity-0 scale-95
                           group-hover:opacity-100 group-hover:scale-100
                           transition-all duration-300 ease-out"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center">
              <div className="flex items-center gap-2 px-3 py-3 rounded-full bg-white/70 border border-[#5C4033]/10 shadow-sm">
                {navItems.map((item, index) => {
                  const active = currentPage === item.id;
                  return (
                    <React.Fragment key={item.id}>
                      <button
                        onClick={() => onNavigate(item.id)}
                        className={`relative px-6 py-3 rounded-full text-lg font-medium transition-all
                          ${
                            active
                              ? 'text-white'
                              : 'text-[#5C4033]/70 hover:text-[#F4A3B4]'
                          }`}
                        style={{
                          backgroundColor: active
                            ? ACCENT_PINK
                            : 'transparent',
                        }}
                      >
                        {item.name}
                      </button>

                      {index !== navItems.length - 1 && (
                        <span className="h-7 w-px bg-[#5C4033]/10" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 text-[#5C4033]">
              <a className="hidden sm:flex w-12 h-12 items-center justify-center rounded-full bg-white border border-[#5C4033]/10 hover:border-[#F4A3B4] transition">
                <Instagram size={26} />
              </a>

              <button
                onClick={() => onNavigate('cart')}
                className="relative w-12 h-12 flex items-center justify-center rounded-full bg-white border border-[#5C4033]/10 hover:border-[#F4A3B4] transition"
              >
                <ShoppingCart size={26} />
                <span
                  className="absolute -top-1 -right-1 text-xs min-w-5 h-5 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: ACCENT_PINK }}
                >
                  {Math.min(cartCount, 99)}
                </span>
              </button>

              <button
                className="lg:hidden w-12 h-12 flex items-center justify-center rounded-full border border-[#5C4033]/10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-[#5C4033]/10 bg-[#FDFBF7]">
            <div className="px-6 py-6 flex flex-col gap-3">
              {navItems.map((item) => {
                const active = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="text-xl font-medium py-4 px-5 rounded-2xl text-left"
                    style={{
                      color: active ? 'white' : TEXT_BROWN,
                      backgroundColor: active
                        ? ACCENT_PINK
                        : 'transparent',
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
