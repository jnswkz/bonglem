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
      {/* Top scrolling tagline bar – KEEP */}
      <div className="bg-[#808000] text-[#FDFBF7] text-center text-sm md:text-base font-medium overflow-hidden whitespace-nowrap relative h-11 flex items-center">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
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
      <div className="bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#5C4033]/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 md:py-7">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <button
              onClick={() => onNavigate('home')}
              className="cursor-pointer"
              aria-label="Go to home"
            >
              <span className="text-4xl md:text-5xl font-serif font-bold tracking-wider text-[#5C4033]">
                BÔNG LÉM
              </span>
            </button>

            {/* Desktop navigation */}
            <div className="hidden lg:flex flex-1 justify-center">
              <div className="flex items-center gap-2 px-3 py-3 rounded-full bg-white/70 border border-[#5C4033]/10 shadow-sm">
                {navItems.map((item, index) => {
                  const active = currentPage === item.id;
                  return (
                    <React.Fragment key={item.id}>
                      <button
                        onClick={() => onNavigate(item.id)}
                        className={`relative px-6 py-3 rounded-full text-lg font-medium transition-all cursor-pointer
                          hover:bg-[#808000]/10 hover:text-[#808000]
                          ${
                            active
                              ? 'bg-[#808000]/12 text-[#808000]'
                              : 'text-[#5C4033]/70'
                          }`}
                      >
                        {item.name}
                        {active && (
                          <span className="absolute left-1/2 -bottom-[7px] h-[2.5px] w-10 -translate-x-1/2 rounded-full bg-[#808000]" />
                        )}
                      </button>

                      {index !== navItems.length - 1 && (
                        <span className="h-7 w-px bg-[#5C4033]/10" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3 md:gap-4 text-[#5C4033]">
              <a
                href="#"
                className="hidden sm:inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/60 border border-[#5C4033]/10 hover:border-[#808000]/40 hover:text-[#808000] transition-all"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>

              <button
                onClick={() => onNavigate('cart')}
                className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/60 border border-[#5C4033]/10 hover:border-[#808000]/40 hover:text-[#808000] transition-all"
                aria-label="Cart"
              >
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 bg-[#808000] text-white text-xs min-w-5 h-5 px-1 rounded-full flex items-center justify-center">
                  {Math.min(cartCount, 99)}
                </span>
              </button>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/60 border border-[#5C4033]/10 hover:border-[#808000]/40 hover:text-[#808000] transition-all"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-[#5C4033]/10 bg-[#FDFBF7]/98 backdrop-blur-md">
            <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col gap-3">
              {navItems.map((item) => {
                const active = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`text-xl font-medium py-4 px-5 rounded-2xl text-left transition-all
                      hover:bg-[#808000]/10 hover:text-[#808000]
                      ${
                        active
                          ? 'bg-[#808000]/12 text-[#808000]'
                          : 'text-[#5C4033]'
                      }`}
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