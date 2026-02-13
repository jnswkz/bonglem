import React from "react";
import { motion } from "motion/react";
import { Instagram, ShoppingCart, Menu, X } from "lucide-react";
import type { Page } from "../pageTypes";
import { useLanguage } from "../i18n/LanguageContext";

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
  cartCount: number;
}

const ACCENT_PINK = "#F4A3B4";
const TEXT_BROWN = "#5C4033";
const BG_CREAM = "#FDFBF7";

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  currentPage,
  cartCount,
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { language, toggleLanguage, setLanguage } = useLanguage();

  const navItems: { name: string; id: Page }[] =
    language === "vi"
      ? [
          { name: "Trang chủ", id: "home" },
          { name: "Câu chuyện", id: "story" },
          { name: "Sản phẩm", id: "products" },
          { name: "Đánh giá", id: "feedback" },
          { name: "Liên hệ", id: "contact" },
        ]
      : [
          { name: "Home", id: "home" },
          { name: "Story", id: "story" },
          { name: "Products", id: "products" },
          { name: "Feedback", id: "feedback" },
          { name: "Contact", id: "contact" },
        ];

  const marqueePrimary =
    language === "vi"
      ? "Bông Lém - những món quà nhỏ mang niềm vui to"
      : "Bong Lem - tiny gifts that bring big joy";
  const marqueeSecondary =
    language === "vi" ? "Bông Lém chào bạn" : "Welcome to Bong Lem";

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className="text-white font-medium overflow-hidden whitespace-nowrap relative flex items-center"
        style={{
          backgroundColor: ACCENT_PINK,
          height: "48px",
          fontSize: "14px",
        }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap absolute"
        >
          <div className="flex gap-14 items-center px-8">
            <span>{marqueePrimary}</span>
            <span>{marqueeSecondary}</span>
            <span>{marqueePrimary}</span>
            <span>{marqueeSecondary}</span>
          </div>
          <div className="flex gap-14 items-center px-8">
            <span>{marqueePrimary}</span>
            <span>{marqueeSecondary}</span>
            <span>{marqueePrimary}</span>
            <span>{marqueeSecondary}</span>
          </div>
        </motion.div>
      </div>

      <div
        className="backdrop-blur-md border-b"
        style={{
          backgroundColor: `${BG_CREAM}F5`,
          borderColor: `${TEXT_BROWN}20`,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6">
          <div className="flex items-center justify-between gap-4">
            <div className="relative">
              <button
                onClick={() => onNavigate("home")}
                className="cursor-pointer select-none"
                aria-label={language === "vi" ? "Về trang chủ" : "Go to home"}
                style={{
                  paddingLeft: "clamp(38px, 7vw, 0px)",
                }}
              >
                <span
                  className="font-serif font-bold tracking-wider transition-colors"
                  style={{
                    color: TEXT_BROWN,
                    fontSize: "44px",
                    lineHeight: 1,
                  }}
                >
                  BÔNG LÉM
                </span>
              </button>

              <img
                src="/mascot.png"
                alt="Bông Lém Mascot"
                className="pointer-events-none absolute md:hidden"
                style={{
                  width: "32px",
                  height: "32px",
                  top: "52%",
                  left: "0px",
                  transform: "translateY(-50%)",
                  filter: "drop-shadow(0px 6px 12px rgba(0,0,0,0.18))",
                }}
              />

              <img
                src="/mascot.png"
                alt="Bông Lém Mascot"
                className="pointer-events-none absolute hidden md:block"
                style={{
                  width: "clamp(48px, 5vw, 60px)",
                  height: "clamp(48px, 5vw, 60px)",
                  top: "50%",
                  left: "clamp(-54px, -5vw, -66px)",
                  transform: "translateY(-50%)",
                  filter: "drop-shadow(0px 10px 18px rgba(0,0,0,0.18))",
                }}
              />
            </div>

            <div className="hidden lg:flex flex-1 justify-center px-6">
              <div
                className="flex w-full max-w-[860px] items-center gap-2 pl-3 pr-2 py-2 rounded-full border shadow-sm"
                style={{
                  backgroundColor: "rgba(255,255,255,0.75)",
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
                          padding: "12px 22px",
                          fontSize: "17px",
                          color: active ? "#FFFFFF" : `${TEXT_BROWN}B3`,
                          backgroundColor: active ? ACCENT_PINK : "transparent",
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

                <span
                  className="mx-1 h-7 w-px"
                  style={{ backgroundColor: `${TEXT_BROWN}1A` }}
                />

                <div
                  className="inline-flex items-center rounded-full border p-1"
                  style={{
                    borderColor: `${TEXT_BROWN}1A`,
                    backgroundColor: "rgba(255,255,255,0.9)",
                  }}
                  aria-label="Language switcher"
                >
                  <button
                    type="button"
                    onClick={() => setLanguage("vi")}
                    className="rounded-full px-3 py-1.5 text-sm font-semibold transition"
                    style={{
                      color: language === "vi" ? "#fff" : TEXT_BROWN,
                      backgroundColor: language === "vi" ? ACCENT_PINK : "transparent",
                    }}
                  >
                    VI
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className="rounded-full px-3 py-1.5 text-sm font-semibold transition"
                    style={{
                      color: language === "en" ? "#fff" : TEXT_BROWN,
                      backgroundColor: language === "en" ? ACCENT_PINK : "transparent",
                    }}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4" style={{ color: TEXT_BROWN }}>
              <button
                type="button"
                className="hidden sm:flex items-center justify-center rounded-full border transition"
                style={{
                  width: "54px",
                  height: "54px",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  borderColor: `${TEXT_BROWN}1A`,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = ACCENT_PINK)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = `${TEXT_BROWN}1A`)
                }
                onClick={() => window.open("https://instagram.com", "_blank")}
                aria-label="Instagram"
              >
                <Instagram size={30} />
              </button>

              <button
                onClick={() => onNavigate("cart")}
                className="relative flex items-center justify-center rounded-full border transition"
                style={{
                  width: "54px",
                  height: "54px",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  borderColor: `${TEXT_BROWN}1A`,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = ACCENT_PINK)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = `${TEXT_BROWN}1A`)
                }
                aria-label={language === "vi" ? "Giỏ hàng" : "Cart"}
              >
                <ShoppingCart size={30} />

                {cartCount > 0 && (
                  <span
                    className="absolute text-xs min-w-6 h-6 rounded-full flex items-center justify-center text-white"
                    style={{
                      backgroundColor: ACCENT_PINK,
                      top: "-6px",
                      right: "-6px",
                      padding: "0 6px",
                      fontSize: "12px",
                    }}
                  >
                    {Math.min(cartCount, 99)}
                  </span>
                )}
              </button>

              <button
                className="lg:hidden flex items-center justify-center rounded-full border"
                style={{
                  width: "54px",
                  height: "54px",
                  borderColor: `${TEXT_BROWN}1A`,
                  backgroundColor: "rgba(255,255,255,0.9)",
                  color: TEXT_BROWN,
                }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={language === "vi" ? "Mở menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="lg:hidden border-t"
            style={{ borderColor: `${TEXT_BROWN}1A` }}
          >
            <div
              className="px-6 py-6 flex flex-col gap-3"
              style={{ backgroundColor: BG_CREAM }}
            >
              <button
                type="button"
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="font-semibold py-4 px-5 rounded-2xl text-left transition"
                style={{
                  fontSize: "20px",
                  color: TEXT_BROWN,
                  backgroundColor: "rgba(255,255,255,0.7)",
                  border: `1px solid ${TEXT_BROWN}1A`,
                }}
              >
                {language === "vi" ? "Đổi ngôn ngữ: EN" : "Language: VI"}
              </button>

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
                      fontSize: "20px",
                      color: active ? "#FFFFFF" : TEXT_BROWN,
                      backgroundColor: active
                        ? ACCENT_PINK
                        : "rgba(255,255,255,0.7)",
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
