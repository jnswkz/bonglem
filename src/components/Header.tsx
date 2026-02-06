import React from "react";
import { motion } from "motion/react";
import { Instagram, ShoppingCart, Menu, X } from "lucide-react";

type Page =
  | "home"
  | "story"
  | "products"
  | "detail"
  | "feedback"
  | "contact"
  | "cart"
  | "checkout";

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
    { name: "Trang chủ", id: "home" },
    { name: "Câu chuyện", id: "story" },
    { name: "Sản phẩm", id: "products" },
    { name: "Feedback", id: "feedback" },
    { name: "Liên hệ", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Tagline Bar (bleibt wie vorher, rosa) */}
      <div className="bg-[#C77B8F] text-[#FDFBF7] py-2 text-center text-xs md:text-sm font-medium overflow-hidden whitespace-nowrap relative h-10 flex items-center">
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

      {/* Main Nav (Design bleibt wie vorher) */}
      <nav className="bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#5C4033]/10 px-6 py-4 md:px-12 flex items-center justify-between">
        {/* LEFT: Brand -> etwas weiter nach links + Mascot größer */}
        <div className="flex items-center gap-8 -ml-3">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3 cursor-pointer"
            aria-label="Go to home"
          >
            {/* Mascot größer */}
            <img
              src="/mascot.png"
              alt="Bông Lém Mascot"
              className="w-11 h-11 md:w-12 md:h-12 object-contain"
            />

            <span className="text-2xl md:text-3xl font-serif font-bold tracking-wider text-[#5C4033] cursor-pointer">
              BÔNG LÉM
            </span>
          </button>

          {/* Desktop Nav (bleibt wie vorher) */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm md:text-base font-medium transition-colors hover:text-[#C77B8F] cursor-pointer ${
                  currentPage === item.id
                    ? "text-[#C77B8F]"
                    : "text-[#5C4033]/70"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Icons -> etwas weiter nach rechts + minimal größer */}
        <div className="flex items-center gap-4 text-[#5C4033] translate-x-3">
          <a
            href="#"
            className="hover:text-[#C77B8F] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={28} />
          </a>

          <button
            onClick={() => onNavigate("cart")}
            className="relative hover:text-[#C77B8F] transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart size={28} />
            <span className="absolute -top-1.5 -right-1.5 bg-[#C77B8F] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {Math.min(cartCount, 99)}
            </span>
          </button>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (bleibt wie vorher) */}
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
                currentPage === item.id ? "text-[#C77B8F]" : "text-[#5C4033]"
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
