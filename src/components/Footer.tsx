import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, ShoppingBag } from 'lucide-react';

type Page =
  | 'home'
  | 'story'
  | 'products'
  | 'detail'
  | 'feedback'
  | 'contact'
  | 'cart'
  | 'checkout';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

/**
 * Brand Tokens (match your header)
 */
const ACCENT_PINK = '#F4A3B4';
const TEXT_BROWN = '#5C4033';
const BG_CREAM = '#FDFBF7';

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-14">
      {/* Main Footer Panel */}
      <div
        className="border-t"
        style={{
          background: `linear-gradient(180deg, ${BG_CREAM} 0%, rgba(244,163,180,0.18) 55%, rgba(244,163,180,0.35) 100%)`,
          borderColor: `${TEXT_BROWN}1A`,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="flex items-start gap-4">
                <img
                  src="/mascot.png"
                  alt="Bông Lém Mascot"
                  className="shrink-0"
                  style={{
                    width: '56px',
                    height: '56px',
                    filter: 'drop-shadow(0px 10px 18px rgba(0,0,0,0.15))',
                  }}
                />
                <div>
                  <div
                    className="font-serif font-bold tracking-wider"
                    style={{ color: TEXT_BROWN, fontSize: '34px', lineHeight: 1 }}
                  >
                    BÔNG LÉM
                  </div>
                  <p className="mt-3 text-sm md:text-base" style={{ color: `${TEXT_BROWN}CC` }}>
                    Những món quà nhỏ mang niềm vui to 🌼
                    <br />
                    Made with love — curated snacks & sweet moments.
                  </p>

                  {/* Socials */}
                  <div className="mt-5 flex items-center gap-3">
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="inline-flex items-center justify-center rounded-full border transition"
                      style={{
                        width: '44px',
                        height: '44px',
                        backgroundColor: 'rgba(255,255,255,0.7)',
                        borderColor: `${TEXT_BROWN}1A`,
                        color: TEXT_BROWN,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = ACCENT_PINK)}
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor = `${TEXT_BROWN}1A`)
                      }
                    >
                      <Instagram size={20} />
                    </a>

                    <a
                      href="#"
                      aria-label="Facebook"
                      className="inline-flex items-center justify-center rounded-full border transition"
                      style={{
                        width: '44px',
                        height: '44px',
                        backgroundColor: 'rgba(255,255,255,0.7)',
                        borderColor: `${TEXT_BROWN}1A`,
                        color: TEXT_BROWN,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = ACCENT_PINK)}
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor = `${TEXT_BROWN}1A`)
                      }
                    >
                      <Facebook size={20} />
                    </a>

                    <a
                      href="mailto:hello@bonglem.vn"
                      aria-label="Email"
                      className="inline-flex items-center justify-center rounded-full border transition"
                      style={{
                        width: '44px',
                        height: '44px',
                        backgroundColor: 'rgba(255,255,255,0.7)',
                        borderColor: `${TEXT_BROWN}1A`,
                        color: TEXT_BROWN,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = ACCENT_PINK)}
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor = `${TEXT_BROWN}1A`)
                      }
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Newsletter / CTA */}
              <div
                className="mt-8 rounded-3xl border p-5 md:p-6"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.65)',
                  borderColor: `${TEXT_BROWN}1A`,
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="flex items-center justify-center rounded-2xl"
                    style={{
                      width: '44px',
                      height: '44px',
                      backgroundColor: 'rgba(244,163,180,0.35)',
                      color: TEXT_BROWN,
                    }}
                  >
                    <ShoppingBag size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold" style={{ color: TEXT_BROWN, fontSize: '16px' }}>
                      Nhận ưu đãi & sản phẩm mới
                    </div>
                    <div className="text-sm mt-1" style={{ color: `${TEXT_BROWN}B3` }}>
                      Đăng ký email để nhận thông tin khuyến mãi (không spam).
                    </div>

                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        placeholder="Email của bạn"
                        className="w-full rounded-2xl border px-4 py-3 outline-none"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.85)',
                          borderColor: `${TEXT_BROWN}1A`,
                          color: TEXT_BROWN,
                        }}
                      />
                      <button
                        className="rounded-2xl px-5 py-3 font-semibold transition"
                        style={{
                          backgroundColor: ACCENT_PINK,
                          color: '#fff',
                          boxShadow: '0 10px 24px rgba(244,163,180,0.35)',
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.boxShadow =
                            '0 12px 26px rgba(244,163,180,0.45)')
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.boxShadow =
                            '0 10px 24px rgba(244,163,180,0.35)')
                        }
                        onClick={() => {
                          // Hook up later to your backend / email tool
                        }}
                      >
                        Đăng ký
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="md:col-span-4">
              <div className="font-semibold mb-4" style={{ color: TEXT_BROWN, fontSize: '18px' }}>
                Thông tin liên hệ
              </div>

              <div className="flex flex-col gap-3 text-sm md:text-base" style={{ color: `${TEXT_BROWN}CC` }}>
                <div className="flex items-start gap-3">
                  <span
                    className="inline-flex items-center justify-center rounded-xl border"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderColor: `${TEXT_BROWN}1A`,
                      backgroundColor: 'rgba(255,255,255,0.65)',
                      color: TEXT_BROWN,
                    }}
                  >
                    <MapPin size={18} />
                  </span>
                  <span>
                    123 Đường Cánh Hoa, Quận 1, TP. Hồ Chí Minh
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span
                    className="inline-flex items-center justify-center rounded-xl border"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderColor: `${TEXT_BROWN}1A`,
                      backgroundColor: 'rgba(255,255,255,0.65)',
                      color: TEXT_BROWN,
                    }}
                  >
                    <Phone size={18} />
                  </span>
                  <span>+84 987 654 321</span>
                </div>

                <div className="flex items-start gap-3">
                  <span
                    className="inline-flex items-center justify-center rounded-xl border"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderColor: `${TEXT_BROWN}1A`,
                      backgroundColor: 'rgba(255,255,255,0.65)',
                      color: TEXT_BROWN,
                    }}
                  >
                    <Mail size={18} />
                  </span>
                  <span>hello@bonglem.vn</span>
                </div>
              </div>

              <div
                className="mt-6 rounded-3xl border p-5"
                style={{
                  borderColor: `${TEXT_BROWN}1A`,
                  backgroundColor: 'rgba(255,255,255,0.6)',
                }}
              >
                <div className="font-semibold" style={{ color: TEXT_BROWN }}>
                  Giờ hoạt động
                </div>
                <div className="mt-2 text-sm" style={{ color: `${TEXT_BROWN}B3` }}>
                  Mon–Fri: 09:00–18:00 <br />
                  Sat–Sun: 10:00–16:00
                </div>
              </div>
            </div>

            {/* Policies / Links + Mascot Illustration */}
            <div className="md:col-span-3">
              <div className="font-semibold mb-4" style={{ color: TEXT_BROWN, fontSize: '18px' }}>
                Chính sách
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { label: 'Chính sách mua hàng', to: 'products' as Page },
                  { label: 'Chính sách đổi trả', to: 'feedback' as Page },
                  { label: 'Liên hệ', to: 'contact' as Page },
                ].map((link) => (
                  <button
                    key={link.label}
                    onClick={() => onNavigate(link.to)}
                    className="text-left underline-offset-4 hover:underline transition"
                    style={{ color: `${TEXT_BROWN}CC`, fontSize: '15px' }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* Right-side mascot (like your orange example) */}
              <div className="mt-8 flex justify-end">
                <div
                  className="relative rounded-[28px] border overflow-hidden"
                  style={{
                    width: '210px',
                    height: '150px',
                    backgroundColor: 'rgba(244,163,180,0.22)',
                    borderColor: `${TEXT_BROWN}1A`,
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.7), transparent 55%)',
                    }}
                  />
                  <img
                    src="/mascot.png"
                    alt="Mascot Illustration"
                    className="absolute"
                    style={{
                      width: '120px',
                      right: '14px',
                      bottom: '-6px',
                      filter: 'drop-shadow(0px 16px 24px rgba(0,0,0,0.14))',
                      transform: 'rotate(-4deg)',
                    }}
                  />
                  <div
                    className="absolute left-4 top-4 text-sm font-semibold"
                    style={{ color: TEXT_BROWN }}
                  >
                    “Cảm ơn bạn đã ghé chơi!”
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="mt-12 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3 text-sm"
            style={{ borderColor: `${TEXT_BROWN}1A`, color: `${TEXT_BROWN}B3` }}
          >
            <div>© {year} BÔNG LÉM. Made with love.</div>
            <div className="flex items-center gap-3">
              <button
                className="underline-offset-4 hover:underline transition"
                style={{ color: `${TEXT_BROWN}B3` }}
                onClick={() => onNavigate('contact')}
              >
                Contact
              </button>
              <span style={{ opacity: 0.5 }}>•</span>
              <button
                className="underline-offset-4 hover:underline transition"
                style={{ color: `${TEXT_BROWN}B3` }}
                onClick={() => onNavigate('products')}
              >
                Shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
