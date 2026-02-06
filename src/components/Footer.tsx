import React from 'react';
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Truck,
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
    backgroundColor: 'rgba(255,255,255,0.74)',
    color: `${TEXT_BROWN}CC`,
    fontSize: '14px',
    boxShadow: '0 8px 18px rgba(0,0,0,0.04)',
  };

  const socialBtnStyle: React.CSSProperties = {
    width: '48px',
    height: '48px',
    borderRadius: '999px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${TEXT_BROWN}26`,
    backgroundColor: 'rgba(255,255,255,0.9)',
    color: TEXT_BROWN,
    transition: 'all 0.2s ease',
    boxShadow: '0 10px 22px rgba(0,0,0,0.06)',
  };

  const cardStyle: React.CSSProperties = {
    borderRadius: '22px',
    border: `1px solid ${TEXT_BROWN}1A`,
    backgroundColor: 'rgba(255,255,255,0.68)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.06)',
  };

  return (
    <footer className="w-full mt-16">
      {/* Top divider band */}
      <div
        style={{
          height: '10px',
          background: `linear-gradient(90deg, rgba(244,163,180,0.0) 0%, rgba(244,163,180,0.45) 20%, rgba(244,163,180,0.45) 80%, rgba(244,163,180,0.0) 100%)`,
        }}
      />

      {/* Main footer background */}
      <div
        className="border-t"
        style={{
          borderColor: `${TEXT_BROWN}1A`,
          background: `linear-gradient(180deg, ${BG_CREAM} 0%, rgba(244,163,180,0.14) 55%, rgba(244,163,180,0.26) 100%)`,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12">
          {/* Brand row + chips */}
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
                <Truck size={16} />
                Giao nhanh nội thành
              </span>
            </div>
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left: social + newsletter */}
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
                      style={socialBtnStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = ACCENT_PINK;
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 14px 26px rgba(244,163,180,0.28)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = `${TEXT_BROWN}26`;
                        e.currentTarget.style.transform = 'translateY(0px)';
                        e.currentTarget.style.boxShadow = '0 10px 22px rgba(0,0,0,0.06)';
                      }}
                    >
                      <Instagram size={22} />
                    </a>

                    <a
                      href="#"
                      aria-label="Facebook"
                      style={socialBtnStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = ACCENT_PINK;
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 14px 26px rgba(244,163,180,0.28)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = `${TEXT_BROWN}26`;
                        e.currentTarget.style.transform = 'translateY(0px)';
                        e.currentTarget.style.boxShadow = '0 10px 22px rgba(0,0,0,0.06)';
                      }}
                    >
                      <Facebook size={22} />
                    </a>

                    <a
                      href="mailto:hello@bonglem.vn"
                      aria-label="Email"
                      style={socialBtnStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = ACCENT_PINK;
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 14px 26px rgba(244,163,180,0.28)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = `${TEXT_BROWN}26`;
                        e.currentTarget.style.transform = 'translateY(0px)';
                        e.currentTarget.style.boxShadow = '0 10px 22px rgba(0,0,0,0.06)';
                      }}
                    >
                      <Mail size={22} />
                    </a>
                  </div>
                </div>

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
                        backgroundColor: 'rgba(255,255,255,0.92)',
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

            {/* Middle: Contact */}
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

                <div
                  className="mt-6 rounded-2xl border p-4"
                  style={{
                    borderColor: `${TEXT_BROWN}1A`,
                    backgroundColor: 'rgba(244,163,180,0.10)',
                    color: `${TEXT_BROWN}B3`,
                    fontSize: '14px',
                  }}
                >
                  Bạn cần hỗ trợ? Nhắn cho tụi mình qua Instagram hoặc Email — tụi mình phản hồi
                  nhanh nhất có thể 🌼
                </div>
              </div>
            </div>

            {/* Right: Policies + NEW clean mascot tile */}
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
                    href="#privacy"
                    className="hover:underline underline-offset-4 transition"
                    style={{ color: `${TEXT_BROWN}CC` }}
                  >
                    Chính sách bảo mật
                  </a>
                  <a
                    href="#contact"
                    className="hover:underline underline-offset-4 transition"
                    style={{ color: `${TEXT_BROWN}CC` }}
                  >
                    Liên hệ
                  </a>
                </div>

                {/* ✅ Rebuilt tile: clean split layout (no overlap) */}
                <div
                  className="mt-7 border overflow-hidden"
                  style={{
                    borderRadius: '22px',
                    borderColor: `${TEXT_BROWN}1A`,
                    background: `linear-gradient(135deg, rgba(244,163,180,0.18), rgba(255,255,255,0.82))`,
                  }}
                >
                  <div
                    className="grid"
                    style={{
                      gridTemplateColumns: '1fr 140px',
                      minHeight: '170px',
                    }}
                  >
                    {/* Left: clean text + CTA */}
                    <div style={{ padding: '14px 14px 14px 14px' }}>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '8px 10px',
                          borderRadius: '999px',
                          border: `1px solid ${TEXT_BROWN}14`,
                          backgroundColor: 'rgba(255,255,255,0.85)',
                          color: TEXT_BROWN,
                          fontSize: '12px',
                          fontWeight: 700,
                        }}
                      >
                        🌼 Bông Lém
                      </div>

                      <div
                        style={{
                          marginTop: '10px',
                          color: TEXT_BROWN,
                          fontWeight: 800,
                          fontSize: '14px',
                          lineHeight: 1.25,
                        }}
                      >
                        Cảm ơn bạn đã ghé chơi!
                      </div>

                      <div
                        style={{
                          marginTop: '6px',
                          color: `${TEXT_BROWN}B3`,
                          fontSize: '13px',
                          lineHeight: 1.35,
                          maxWidth: '210px',
                        }}
                      >
                        Follow tụi mình để xem sản phẩm mới & ưu đãi nhé.
                      </div>

                      <a
                        href="#"
                        className="inline-flex items-center gap-2 mt-4"
                        style={{
                          color: TEXT_BROWN,
                          fontWeight: 700,
                          fontSize: '13px',
                          textDecoration: 'none',
                          width: 'fit-content',
                          padding: '10px 12px',
                          borderRadius: '14px',
                          border: `1px solid ${TEXT_BROWN}1A`,
                          backgroundColor: 'rgba(255,255,255,0.85)',
                          boxShadow: '0 10px 22px rgba(0,0,0,0.05)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = ACCENT_PINK;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = `${TEXT_BROWN}1A`;
                        }}
                      >
                        Xem Instagram <ArrowRight size={16} />
                      </a>
                    </div>

                    {/* Right: mascot zone (separate, clean) */}
                    <div
                      style={{
                        position: 'relative',
                        borderLeft: `1px solid ${TEXT_BROWN}14`,
                        background:
                          'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.9), rgba(244,163,180,0.12) 55%, rgba(244,163,180,0.18) 100%)',
                      }}
                    >
                      {/* subtle badge behind */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '14px',
                          right: '14px',
                          width: '44px',
                          height: '44px',
                          borderRadius: '999px',
                          backgroundColor: 'rgba(244,163,180,0.25)',
                          filter: 'blur(0px)',
                        }}
                      />

                      <img
                        src="/mascot.png"
                        alt="Mascot"
                        style={{
                          position: 'absolute',
                          left: '50%',
                          bottom: '-8px',
                          transform: 'translateX(-50%)',
                          width: '120px',
                          filter: 'drop-shadow(0px 18px 24px rgba(0,0,0,0.14))',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="mt-10 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3 text-sm"
            style={{ borderColor: `${TEXT_BROWN}1A`, color: `${TEXT_BROWN}B3` }}
          >
            <div>
              © {year} <span style={{ color: TEXT_BROWN, fontWeight: 600 }}>BÔNG LÉM</span>. Made
              with love.
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hover:underline underline-offset-4"
                style={{ color: `${TEXT_BROWN}B3` }}
              >
                Contact
              </a>
              <span style={{ opacity: 0.5 }}>•</span>
              <a
                href="#products"
                className="hover:underline underline-offset-4"
                style={{ color: `${TEXT_BROWN}B3` }}
              >
                Shop
              </a>
              <span style={{ opacity: 0.5 }}>•</span>
              <a
                href="#story"
                className="hover:underline underline-offset-4"
                style={{ color: `${TEXT_BROWN}B3` }}
              >
                Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
