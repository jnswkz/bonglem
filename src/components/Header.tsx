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
      {/* Tagline Bar (bleibt wie gehabt) */}
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

      {/* MAIN HEADER */}
      <nav className="bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#5C4033]/10 px-6 md:px-12 py-5">
        {/* 3-Spalten Layout: links (Brand), mitte (Nav), rechts (Icons) */}
        <div className="grid grid-cols-[auto,1fr,auto] items-center">
          {/* LEFT: Brand (ein Stück weiter nach links + mehr Platz) */}
          <div className="flex items-center gap-4 justify-self-start -ml-1">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center gap-3 cursor-pointer group"
              aria-label="Go to home"
            >
              {/* Mascot: deutlich größer, aber mit Luft zu oben/unten */}
              <img
                src="/mascot.png"
                alt="Bông Lém Mascot"
                className="w-11 h-11 md:w-12 md:h-12 object-contain drop-shadow-sm"
              />
              <span className="text-3xl md:text-4xl font-serif font-bold tracking-wider text-[#5C4033] leading-none">
                BÔNG LÉM
              </span>
            </button>
          </div>

          {/* CENTER: Nav (mittiger, nicht gequetscht) */}
          <div className="hidden md:flex justify-self-center">
            <div className="flex items-center gap-10 px-8 py-3 rounded-full border border-[#5C4033]/10 bg-[#FDFBF7]/70 shadow-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-base font-medium transition-colors hover:text-[#C77B8F] ${
                    currentPage === item.id
                      ? "text-[#C77B8F]"
                      : "text-[#5C4033]/75"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Icons (ein Stück weiter nach rechts + etwas größer) */}
          <div className="flex items-center gap-5 justify-self-end pr-1">
            <a
              href="#"
              className="hover:text-[#C77B8F] transition-colors text-[#5C4033]"
              aria-label="Instagram"
            >
              <Instagram size={30} />
            </a>

            <button
              onClick={() => onNavigate("cart")}
              className="relative hover:text-[#C77B8F] transition-colors text-[#5C4033]"
              aria-label="Cart"
            >
              <ShoppingCart size={30} />
              <span className="absolute -top-2 -right-2 bg-[#C77B8F] text-white text-[11px] min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center">
                {Math.min(cartCount, 99)}
              </span>
            </button>

            {/* Mobile menu */}
            <button
              className="md:hidden text-[#5C4033]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#FDFBF7] border-b border-[#5C4033]/10 py-6 px-6 flex flex-col gap-4 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
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
