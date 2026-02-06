import React from 'react';
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Sparkles,
} from 'lucide-react';

/**
 * Brand Tokens (match Header)
 */
const ACCENT_PINK = '#F4A3B4';
const TEXT_BROWN = '#5C4033';
const BG_CREAM = '#FDFBF7';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const chipStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 12px',
    borderRadius: '999px',
    border: `1px solid ${TEXT_BROWN}1A`,
    backgroundColor: 'rgba(255,255,255,0.70)',
    color: `${TEXT_BROWN}CC`,
    fontSize: '14px',
  };

  const iconBtnStyle: React.CSSProperties = {
    width: '44px',
    height: '44px',
    borderRadius: '999px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${TEXT_BROWN}1A`,
    backgroundColor: 'rgba(255,255,255,0.72)',
    color: TEXT_BROWN,
    transition: 'all 0.2s ease',
  };

  const cardStyle: React.CSSProperties = {
    borderRadius: '22px',
    border: `1px solid ${TEXT_BROWN}1A`,
    backgroundColor: 'rgba(255,255,255,0.65)',
    boxShadow: '0 10px 28px rgba(0,0,0,0.05)',
  };

  return (
    <footer className="w-full mt-16">
      {/* Top divider band (gives the footer a strong "section" feel) */}
      <div
        style={{
          height: '10px',
          background: `linear-gradient(90deg, rgba(244,163,180,0.0) 0%, rgba(244,163,180,0.45) 20%, rgba(244,163,180,0.45) 80%, rgba(244,163,180,0.0) 100%)`,
        }}
      />

      {/* Main Footer Panel */}
      <div
        className="border-t"
        style={{
          borderColor: `${TEXT_BROWN}1A`,
          background: `linear-gradient(180deg, ${BG_CREAM} 0%, rgba(244,163,180,0.14) 55%, rgba(244,163,180,0.26) 100%)`,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12">
          {/* A stronger header row inside footer (branding + quick trust chips) */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10">
            <div className="flex items-start gap-4">
              <img
                src="/mascot.png"
                alt="Bông Lém Mascot"
                style={{
                  width: '62px',
                  height: '62px',
                  filter: 'drop-shadow(0px 12px 18px rgba(0,0,0,0.12))',
                }}
              />
              <div>
                <div
                  className="font-serif font-bold tracking-wider"
                  style={{ color: TEXT_BROWN, fontSize: '34px', lineHeight: 1 }}
                >
                  BÔNG LÉM
                </div>
                <div className="mt-2 text-sm md:text-base" style={{ color: `${TEXT_BROWN}CC` }}>
                  Những món quà nhỏ mang niềm vui to 🌼 <br />
                  <span style={{ color: `${TEXT_BROWN}B3` }}>
                    Made with love — curated snacks & sweet moments.
                  </span>
                </div>
              </div>
            </div>

            {/* Trust / value chips (business polish) */}
            <div className="flex flex-wrap gap-2">
              <span style={chipStyle}>
                <Sparkles size={16} />
                Quà tặng tinh tế
              </span>
              <span style={chipStyle}>
                <ShieldCheck size={16} />
                Hỗ trợ nhanh
              </span>
              <span style={chipStyle}>
                <RefreshCw size={16} />
                Đổi trả linh hoạt
              </span>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left: Social + Newsletter (carded) */}
            <div className="md:col-span-5">
              <div className="p-6 md:p-7" style={cardStyle}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-semibold" style={{ color: TEXT_BROWN, fontSize: '18px' }}>
                      Kết nối với Bông Lém
                    </div>
                    <div className="mt-1 text-sm" style={{ color: `${TEXT_BROWN}B3` }}>
                      Follow để nhận update & ưu đãi.
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      aria-label="Instagram"
                      style={iconBtnStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = ACCENT_PINK;
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = `${TEXT_BROWN}1A`;
                        e.currentTarget.style.transform = 'translateY(0px)';
                      }}
                    >
                      <Instagram size={20} />
                    </a>

                    <a
                      href="#"
                      aria-label="Facebook"
                      style={iconBtnStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = ACCENT_PINK;
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = `${TEXT_BROWN}1A`;
                        e.currentTarget.style.transform = 'translateY(0px)';
                      }}
                    >
                      <Facebook size={20} />
                    </a>

                    <a
                      href="mailto:hello@bonglem.vn"
                      aria-label="Email"
                      style={iconBtnStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = ACCENT_PINK;
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = `${TEXT_BROWN}1A`;
                        e.currentTarget.style.transform = 'translateY(0px)';
                      }}
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>

                {/* Newsletter */}
                <div
                  className="mt-6 rounded-2xl border p-4 md:p-5"
                  style={{
                    borderColor: `${TEXT_BROWN}1A`,
                    backgroundColor: 'rgba(244,163,180,0.10)',
                  }}
                >
                  <div className="font-semibold" style={{ color: TEXT_BROWN }}>
                    Nhận ưu đãi & sản phẩm mới
                  </div>
                  <div className="mt-1 text-sm" style={{ color: `${TEXT_BROWN}B3` }}>
                    Đăng ký email (không spam, hứa luôn).
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Email của bạn"
                      className="w-full rounded-2xl border px-4 py-3 outline-none"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        borderColor: `${TEXT_BROWN}1A`,
                        color: TEXT_BROWN,
                      }}
                    />
                    <button
                      className="rounded-2xl px-5 py-3 font-semibold inline-flex items-center justify-center gap-2 transition"
                      style={{
                        backgroundColor: ACCENT_PINK,
                        color: '#fff',
                        boxShadow: '0 12px 26px rgba(244,163,180,0.35)',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.boxShadow = '0 14px 28px rgba(244,163,180,0.45)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.boxShadow = '0 12px 26px rgba(244,163,180,0.35)')
                      }
                      onClick={() => {
                        // connect later
                      }}
                    >
                      Đăng ký <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle: Contact (carded, better hierarchy) */}
            <div className="md:col-span-4">
              <div className="p-6 md:p-7" style={cardStyle}>
                <div className="font-semibold mb-4" style={{ color: TEXT_BROWN, fontSize: '18px' }}>
                  Thông tin liên hệ
                </div>

                <div className="flex flex-col gap-3" style={{ color: `${TEXT_BROWN}CC` }}>
                  <div className="flex items-start gap-3">
                    <span
                      className="inline-flex items-center justify-center rounded-xl border"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderColor: `${TEXT_BROWN}1A`,
                        backgroundColor: 'rgba(255,255,255,0.75)',
                        color: TEXT_BROWN,
                      }}
                    >
                      <MapPin size={18} />
                    </span>
                    <div>
                      <div className="text-sm" style={{ color: `${TEXT_BROWN}B3` }}>
                        Address
                      </div>
                      <div className="text-sm md:text-base">
                        123 Đường Cánh Hoa, Quận 1, TP. Hồ Chí Minh
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span
                      className="inline-flex items-center justify-center rounded-xl border"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderColor: `${TEXT_BROWN}1A`,
                        backgroundColor: 'rgba(255,255,255,0.75)',
                        color: TEXT_BROWN,
                      }}
                    >
                      <Phone size={18} />
                    </span>
                    <div>
                      <div className="text-sm" style={{ color: `${TEXT_BROWN}B3` }}>
                        Phone
                      </div>
                      <div className="text-sm md:text-base">+84 987 654 321</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span
                      className="inline-flex items-center justify-center rounded-xl border"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderColor: `${TEXT_BROWN}1A`,
                        backgroundColor: 'rgba(255,255,255,0.75)',
                        color: TEXT_BROWN,
                      }}
                    >
                      <Mail size={18} />
                    </span>
                    <div>
                      <div className="text-sm" style={{ color: `${TEXT_BROWN}B3` }}>
                        Email
                      </div>
                      <div className="text-sm md:text-base">hello@bonglem.vn</div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div
                  className="mt-6 rounded-2xl border p-4"
                  style={{
                    borderColor: `${TEXT_BROWN}1A`,
                    backgroundColor: 'rgba(244,163,180,0.10)',
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
            </div>

            {/* Right: Policies + big mascot card */}
            <div className="md:col-span-3">
              <div className="p-6 md:p-7" style={cardStyle}>
                <div className="font-semibold mb-4" style={{ color: TEXT_BROWN, fontSize: '18px' }}>
                  Chính sách
                </div>

                <div className="flex flex-col gap-3 text-sm md:text-base">
                  <a
                    href="#products"
                    className="hover:underline underline-offset-4 transition"
                    style={{ color: `${TEXT_BROWN}CC` }}
                  >
                    Chính sách mua hàng
                  </a>
                  <a
                    href="#returns"
                    className="hover:underline underline-offset-4 transition"
                    style={{ color: `${TEXT_BROWN}CC` }}
                  >
                    Chính sách đổi trả
                  </a>
                  <a
                    href="#contact"
                    className="hover:underline underline-offset-4 transition"
                    style={{ color: `${TEXT_BROWN}CC` }}
                  >
                    Liên hệ
                  </a>
                </div>

                {/* Bigger, more integrated mascot block */}
                <div
                  className="mt-7 relative overflow-hidden"
                  style={{
                    borderRadius: '22px',
                    border: `1px solid ${TEXT_BROWN}1A`,
                    background: `linear-gradient(135deg, rgba(244,163,180,0.18), rgba(255,255,255,0.65))`,
                    height: '170px',
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.85), transparent 55%)',
                    }}
                  />
                  <div
                    className="absolute left-4 top-4 text-sm font-semibold"
                    style={{ color: TEXT_BROWN }}
                  >
                    “Cảm ơn bạn đã ghé chơi!”
                  </div>
                  <div
                    className="absolute left-4 top-10 text-xs"
                    style={{ color: `${TEXT_BROWN}B3` }}
                  >
                    See you again 🌼
                  </div>

                  <img
                    src="/mascot.png"
                    alt="Mascot"
                    style={{
                      position: 'absolute',
                      right: '10px',
                      bottom: '-10px',
                      width: '140px',
                      filter: 'drop-shadow(0px 18px 26px rgba(0,0,0,0.14))',
                      transform: 'rotate(-4deg)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar (stronger separation) */}
          <div
            className="mt-10 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3 text-sm"
            style={{ borderColor: `${TEXT_BROWN}1A`, color: `${TEXT_BROWN}B3` }}
          >
            <div>
              © {year} <span style={{ color: TEXT_BROWN, fontWeight: 600 }}>BÔNG LÉM</span>. Made
              with love.
            </div>
            <div className="flex items-center gap-3">
              <a href="#contact" className="hover:underline underline-offset-4" style={{ color: `${TEXT_BROWN}B3` }}>
                Contact
              </a>
              <span style={{ opacity: 0.5 }}>•</span>
              <a href="#products" className="hover:underline underline-offset-4" style={{ color: `${TEXT_BROWN}B3` }}>
                Shop
              </a>
              <span style={{ opacity: 0.5 }}>•</span>
              <a href="#story" className="hover:underline underline-offset-4" style={{ color: `${TEXT_BROWN}B3` }}>
                Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
