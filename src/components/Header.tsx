import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ShoppingCart, Menu, X } from 'lucide-react';

type Page = 'home' | 'story' | 'products' | 'detail' | 'feedback' | 'contact' | 'cart' | 'checkout';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage, cartCount }) => {
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
      {/* Tagline Bar */}
      <div className="bg-[#808000] text-[#FDFBF7] py-2 text-center text-xs md:text-sm font-medium overflow-hidden whitespace-nowrap relative h-10 flex items-center">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap absolute"
        >
          <div className="flex gap-12 items-center px-6">
            <span>Bông Lém – những món quà nhỏ mang niềm vui to 🌼</span>
            <span>Bông Lém chào bạn 🌼</span>
            <span>Bông Lém – những món quà nhỏ mang niềm vui to 🌼</span>
            <span>Bông Lém chào bạn 🌼</span>
          </div>
          <div className="flex gap-12 items-center px-6">
            <span>Bông Lém – những món quà nhỏ mang niềm vui to 🌼</span>
            <span>Bông Lém chào bạn 🌼</span>
            <span>Bông Lém – những món quà nhỏ mang niềm vui to 🌼</span>
            <span>Bông Lém chào bạn 🌼</span>
          </div>
        </motion.div>
      </div>

      {/* Main Nav */}
      <nav className="bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#5C4033]/10 px-6 py-5 md:py-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-10 lg:gap-12">
          <button 
            onClick={() => onNavigate('home')}
            className="text-3xl  md:text-4x1 font-serif font-bold tracking-wider text-[#5C4033] cursor-pointer"
          >
            BÔNG LÉM
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-base md:text-lg font-medium transition-colors hover:text-[#808000] cursor-pointer ${
                  currentPage === item.id ? 'text-[#808000]' : 'text-[#5C4033]/70'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 text-[#5C4033]">
          <a href="#" className="hover:text-[#808000] transition-colors"><Instagram size={22} /></a>
          <button onClick={() => onNavigate('cart')} className="relative hover:text-[#808000] transition-colors">
            <ShoppingCart size={22} />
            <span className="absolute -top-1.5 -right-1.5 bg-[#808000] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {Math.min(cartCount, 99)}
            </span>
          </button>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#FDFBF7] border-b border-[#5C4033]/5 py-6 px-6 flex flex-col gap-4 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsMenuOpen(false);
              }}
              className={`text-lg font-medium py-2 text-left ${
                currentPage === item.id ? 'text-[#808000]' : 'text-[#5C4033]'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
