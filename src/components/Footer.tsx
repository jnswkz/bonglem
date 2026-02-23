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
  Gift,
  Clock,
  HeartHandshake,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

/**
 * Brand Tokens (match Header)
 */
const ACCENT_PINK = '#F4A3B4';
const TEXT_BROWN = '#5C4033';
const BG_CREAM = '#FDFBF7';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const { language } = useLanguage();
  const isEN = language === 'en';

  // ---- TEXT (VI / EN) ----
  const t = {
    brandLine1: isEN ? 'Tiny gifts that bring big joy 🌼' : 'Những món quà nhỏ mang niềm vui to 🌼',
    brandLine2: isEN
      ? 'Made with love — curated snacks & sweet moments.'
      : 'Made with love — curated snacks & sweet moments.',

    chip1: isEN ? 'Thoughtful gifts' : 'Quà tặng tinh tế',
    chip2: isEN ? 'Fast support' : 'Hỗ trợ nhanh',
    chip3: isEN ? 'Fast local delivery' : 'Giao nhanh nội thành',

    leftTitle: isEN ? 'Stay connected' : 'Kết nối với Bông Lém',
    leftSub: isEN ? 'Follow for updates & deals.' : 'Follow để nhận update & ưu đãi.',
    newsletterTitle: isEN ? 'Get deals & new drops' : 'Nhận ưu đãi & sản phẩm mới',
    newsletterSub: isEN ? 'Join by email (no spam, promise).' : 'Đăng ký email (không spam, hứa luôn).',
    emailPlaceholder: isEN ? 'Your email' : 'Email của bạn',
    subscribeBtn: isEN ? 'Subscribe' : 'Đăng ký',

    quick1: isEN ? 'Products' : 'Sản phẩm',
    quick2: isEN ? 'Story' : 'Câu chuyện',
    quick3: isEN ? 'Feedback' : 'Đánh giá',
    quick4: isEN ? 'Contact' : 'Liên hệ',

    // NEW bottom-left badges (different from the top chips)
    badgeA: isEN ? 'Gift note included' : 'Có thiệp quà tặng',
    badgeB: isEN ? 'Same-day pickup' : 'Nhận trong ngày',
    badgeC: isEN ? 'Custom bundles' : 'Combo theo yêu cầu',

    contactTitle: isEN ? 'Contact info' : 'Thông tin liên hệ',
    addressLabel: isEN ? 'Address' : 'Address',
    phoneLabel: isEN ? 'Phone' : 'Phone',
    emailLabel: isEN ? 'Email' : 'Email',
    helpBox: isEN
      ? 'Need help? DM us on Instagram or TikTok — we reply fastest there 🌼'
      : 'Bạn cần hỗ trợ? Nhắn cho tụi mình qua Instagram hoặc TikTok — tụi mình phản hồi nhanh nhất có thể 🌼',

    supportTitle: isEN ? 'Support & response' : 'Hỗ trợ & phản hồi',
    support1: isEN ? 'Support hours: 09:00 – 21:00 (daily)' : '• Thời gian hỗ trợ: 09:00 – 21:00 (hàng ngày)',
    support2: isEN
      ? 'Instagram/TikTok DMs are usually faster than email'
      : '• DM Instagram/TikTok thường nhanh hơn email 🌼',
    support3: isEN
      ? 'Local orders are prioritized earlier in the day'
      : '• Đơn nội thành: ưu tiên xử lý sớm trong ngày',

    policyTitle: isEN ? 'Policies' : 'Chính sách',
    policy1: isEN ? 'Purchase policy' : 'Chính sách mua hàng',
    policy2: isEN ? 'Privacy policy' : 'Chính sách bảo mật',
    policy3: isEN ? 'Contact' : 'Liên hệ',

    tiktokHeadline: isEN ? 'Follow our TikTok!' : 'Follow TikTok của tụi mình!',
    tiktokSub: isEN ? 'Short videos, new products & fun content 🌼' : 'Video ngắn, sản phẩm mới & content vui 🌼',
    tiktokBtn: isEN ? 'Open TikTok' : 'Xem TikTok',

    bottomMade: isEN ? 'Made with love.' : 'Made with love.',
    bottomLinkContact: isEN ? 'Contact' : 'Contact',
    bottomLinkShop: isEN ? 'Shop' : 'Shop',
    bottomLinkStory: isEN ? 'Story' : 'Story',
  };

  // ---- styles ----
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

  const miniDivider: React.CSSProperties = {
    height: '1px',
    width: '100%',
    backgroundColor: `${TEXT_BROWN}14`,
    margin: '16px 0',
  };

  const quickLinkStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    padding: '12px 14px',
    borderRadius: '16px',
    border: `1px solid ${TEXT_BROWN}14`,
    backgroundColor: 'rgba(255,255,255,0.78)',
    color: `${TEXT_BROWN}CC`,
    textDecoration: 'none',
    transition: 'all 0.2s ease',
  };

  const badgeStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 12px',
    borderRadius: '16px',
    border: `1px solid ${TEXT_BROWN}14`,
    backgroundColor: 'rgba(255,255,255,0.78)',
    color: `${TEXT_BROWN}B3`,
    fontSize: '13px',
  };

  // TikTok icon (Lucide does not ship a TikTok icon by default)
  const TikTokIcon: React.FC<{ size?: number }> = ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M30.8 6c.4 4.2 3 7.9 6.9 9.8 1.8.9 3.7 1.4 5.6 1.5v6.3c-2.4 0-4.8-.6-7-1.6-1.2-.6-2.3-1.3-3.3-2.1v14.6c0 6.8-5.5 12.3-12.3 12.3S8.4 41.3 8.4 34.5c0-6.8 5.5-12.3 12.3-12.3.8 0 1.6.1 2.4.2v6.7c-.7-.3-1.5-.5-2.4-.5-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6V6h4.1Z"
        fill="currentColor"
      />
    </svg>
  );

  const socialHoverIn = (el: HTMLAnchorElement) => {
    el.style.borderColor = ACCENT_PINK;
    el.style.transform = 'translateY(-1px)';
    el.style.boxShadow = '0 14px 26px rgba(244,163,180,0.28)';
  };

  const socialHoverOut = (el: HTMLAnchorElement) => {
    el.style.borderColor = `${TEXT_BROWN}26`;
    el.style.transform = 'translateY(0px)';
    el.style.boxShadow = '0 10px 22px rgba(0,0,0,0.06)';
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
                <div className="font-serif font-bold tracking-wider" style={{ color: TEXT_BROWN, fontSize: '34px', lineHeight: 1 }}>
                  BÔNG LÉM
                </div>
                <div className="mt-2 text-sm md:text-base" style={{ color: `${TEXT_BROWN}CC` }}>
                  {t.brandLine1}
                  <br />
                  <span style={{ color: `${TEXT_BROWN}B3` }}>{t.brandLine2}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span style={chipStyle}>
                <Sparkles size={16} />
                {t.chip1}
              </span>
              <span style={chipStyle}>
                <ShieldCheck size={16} />
                {t.chip2}
              </span>
              <span style={chipStyle}>
                <Truck size={16} />
                {t.chip3}
              </span>
            </div>
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Left */}
            <div className="md:col-span-5 h-full">
              <div className="p-6 md:p-7 h-full flex flex-col" style={cardStyle}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-semibold" style={{ color: TEXT_BROWN, fontSize: '18px' }}>
                      {t.leftTitle}
                    </div>
                    <div className="mt-1 text-sm" style={{ color: `${TEXT_BROWN}B3` }}>
                      {t.leftSub}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      aria-label="Instagram"
                      style={socialBtnStyle}
                      onMouseEnter={(e) => socialHoverIn(e.currentTarget)}
                      onMouseLeave={(e) => socialHoverOut(e.currentTarget)}
                    >
                      <Instagram size={22} />
                    </a>

                    <a
                      href="#"
                      aria-label="Facebook"
                      style={socialBtnStyle}
                      onMouseEnter={(e) => socialHoverIn(e.currentTarget)}
                      onMouseLeave={(e) => socialHoverOut(e.currentTarget)}
                    >
                      <Facebook size={22} />
                    </a>

                    <a
                      href="#"
                      aria-label="TikTok"
                      style={socialBtnStyle}
                      onMouseEnter={(e) => socialHoverIn(e.currentTarget)}
                      onMouseLeave={(e) => socialHoverOut(e.currentTarget)}
                    >
                      <TikTokIcon size={22} />
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
                    {t.newsletterTitle}
                  </div>
                  <div className="mt-1 text-sm" style={{ color: `${TEXT_BROWN}B3` }}>
                    {t.newsletterSub}
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder={t.emailPlaceholder}
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
                      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 14px 28px rgba(244,163,180,0.45)')}
                      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 12px 26px rgba(244,163,180,0.35)')}
                      onClick={() => {
                        // connect later
                      }}
                    >
                      {t.subscribeBtn} <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div style={miniDivider} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="#products"
                    style={quickLinkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = ACCENT_PINK)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${TEXT_BROWN}14`)}
                  >
                    <span style={{ fontWeight: 700, color: TEXT_BROWN }}>{t.quick1}</span>
                    <ArrowRight size={16} />
                  </a>

                  <a
                    href="#story"
                    style={quickLinkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = ACCENT_PINK)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${TEXT_BROWN}14`)}
                  >
                    <span style={{ fontWeight: 700, color: TEXT_BROWN }}>{t.quick2}</span>
                    <ArrowRight size={16} />
                  </a>

                  <a
                    href="#feedback"
                    style={quickLinkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = ACCENT_PINK)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${TEXT_BROWN}14`)}
                  >
                    <span style={{ fontWeight: 700, color: TEXT_BROWN }}>{t.quick3}</span>
                    <ArrowRight size={16} />
                  </a>

                  <a
                    href="#contact"
                    style={quickLinkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = ACCENT_PINK)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${TEXT_BROWN}14`)}
                  >
                    <span style={{ fontWeight: 700, color: TEXT_BROWN }}>{t.quick4}</span>
                    <ArrowRight size={16} />
                  </a>
                </div>

                {/* NEW bottom-left badges (different from top chips) */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div style={badgeStyle}>
                    <Gift size={16} style={{ color: TEXT_BROWN }} />
                    <span>{t.badgeA}</span>
                  </div>
                  <div style={badgeStyle}>
                    <Clock size={16} style={{ color: TEXT_BROWN }} />
                    <span>{t.badgeB}</span>
                  </div>
                  <div style={badgeStyle}>
                    <HeartHandshake size={16} style={{ color: TEXT_BROWN }} />
                    <span>{t.badgeC}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle */}
            <div className="md:col-span-4 h-full">
              <div className="p-6 md:p-7 h-full flex flex-col" style={cardStyle}>
                <div className="font-semibold mb-4" style={{ color: TEXT_BROWN, fontSize: '18px' }}>
                  {t.contactTitle}
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
                        {t.addressLabel}
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
                        {t.phoneLabel}
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
                        {t.emailLabel}
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
                  {t.helpBox}
                </div>

                <div style={miniDivider} />

                <div
                  className="rounded-2xl border p-4"
                  style={{
                    borderColor: `${TEXT_BROWN}14`,
                    backgroundColor: 'rgba(255,255,255,0.78)',
                    color: `${TEXT_BROWN}B3`,
                    fontSize: '13px',
                    lineHeight: 1.5,
                  }}
                >
                  <div style={{ fontWeight: 800, color: TEXT_BROWN, marginBottom: '6px' }}>
                    {t.supportTitle}
                  </div>
                  <div>{t.support1}</div>
                  <div>{t.support2}</div>
                  <div>{t.support3}</div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="md:col-span-3 h-full">
              <div className="p-6 md:p-7 h-full flex flex-col" style={cardStyle}>
                <div className="font-semibold mb-4" style={{ color: TEXT_BROWN, fontSize: '18px' }}>
                  {t.policyTitle}
                </div>

                <div className="flex flex-col gap-3 text-sm md:text-base">
                  <a
                    href="#products"
                    className="hover:underline underline-offset-4 transition"
                    style={{ color: `${TEXT_BROWN}CC` }}
                  >
                    {t.policy1}
                  </a>
                  <a
                    href="#privacy"
                    className="hover:underline underline-offset-4 transition"
                    style={{ color: `${TEXT_BROWN}CC` }}
                  >
                    {t.policy2}
                  </a>
                  <a
                    href="#contact"
                    className="hover:underline underline-offset-4 transition"
                    style={{ color: `${TEXT_BROWN}CC` }}
                  >
                    {t.policy3}
                  </a>
                </div>

                {/* TikTok tile */}
                <div
                  className="mt-7 border overflow-hidden"
                  style={{
                    borderRadius: '22px',
                    borderColor: `${TEXT_BROWN}1A`,
                    background: `linear-gradient(135deg, rgba(244,163,180,0.18), rgba(255,255,255,0.86))`,
                  }}
                >
                  <div style={{ padding: '14px' }}>
                    <div className="flex items-center justify-between gap-2">
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '8px 10px',
                          borderRadius: '999px',
                          border: `1px solid ${TEXT_BROWN}14`,
                          backgroundColor: 'rgba(255,255,255,0.88)',
                          color: TEXT_BROWN,
                          fontSize: '12px',
                          fontWeight: 800,
                        }}
                      >
                        🌼 Bông Lém
                      </div>

                      <a
                        href="#"
                        aria-label="TikTok"
                        className="inline-flex items-center justify-center rounded-full border transition"
                        style={{
                          width: '40px',
                          height: '40px',
                          borderColor: `${TEXT_BROWN}14`,
                          backgroundColor: 'rgba(255,255,255,0.88)',
                          color: TEXT_BROWN,
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.borderColor = ACCENT_PINK)}
                        onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${TEXT_BROWN}14`)}
                      >
                        <TikTokIcon size={18} />
                      </a>
                    </div>

                    <div style={{ marginTop: '10px' }}>
                      <div style={{ color: TEXT_BROWN, fontWeight: 900, fontSize: '14px', lineHeight: 1.2 }}>
                        {t.tiktokHeadline}
                      </div>
                      <div style={{ marginTop: '6px', color: `${TEXT_BROWN}B3`, fontSize: '13px', lineHeight: 1.35 }}>
                        {t.tiktokSub}
                      </div>
                    </div>

                    <div
                      style={{
                        marginTop: '10px',
                        borderRadius: '18px',
                        border: `1px solid ${TEXT_BROWN}14`,
                        background:
                          'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.92), rgba(244,163,180,0.14) 55%, rgba(244,163,180,0.18) 100%)',
                        height: '120px',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          width: '120px',
                          height: '120px',
                          borderRadius: '999px',
                          left: '-40px',
                          top: '-50px',
                          backgroundColor: 'rgba(244,163,180,0.18)',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          width: '140px',
                          height: '140px',
                          borderRadius: '999px',
                          right: '-60px',
                          bottom: '-70px',
                          backgroundColor: 'rgba(244,163,180,0.22)',
                        }}
                      />

                      <img
                        src="/mascot.png"
                        alt="Mascot"
                        style={{
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '92px',
                          maxWidth: '92px',
                          filter: 'drop-shadow(0px 14px 20px rgba(0,0,0,0.14))',
                        }}
                      />
                    </div>

                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-2"
                      style={{
                        marginTop: '14px',
                        width: '100%',
                        color: '#fff',
                        fontWeight: 800,
                        fontSize: '13px',
                        textDecoration: 'none',
                        padding: '11px 12px',
                        borderRadius: '16px',
                        backgroundColor: ACCENT_PINK,
                        boxShadow: '0 12px 26px rgba(244,163,180,0.35)',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 14px 28px rgba(244,163,180,0.45)')}
                      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 12px 26px rgba(244,163,180,0.35)')}
                    >
                      {t.tiktokBtn} <ArrowRight size={16} />
                    </a>
                  </div>
                </div>

                <div style={{ flex: 1 }} />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="mt-10 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3 text-sm"
            style={{ borderColor: `${TEXT_BROWN}1A`, color: `${TEXT_BROWN}B3` }}
          >
            <div>
              © {year} <span style={{ color: TEXT_BROWN, fontWeight: 600 }}>BÔNG LÉM</span>. {t.bottomMade}
            </div>
            <div className="flex items-center gap-3">
              <a href="#contact" className="hover:underline underline-offset-4" style={{ color: `${TEXT_BROWN}B3` }}>
                {t.bottomLinkContact}
              </a>
              <span style={{ opacity: 0.5 }}>•</span>
              <a href="#products" className="hover:underline underline-offset-4" style={{ color: `${TEXT_BROWN}B3` }}>
                {t.bottomLinkShop}
              </a>
              <span style={{ opacity: 0.5 }}>•</span>
              <a href="#story" className="hover:underline underline-offset-4" style={{ color: `${TEXT_BROWN}B3` }}>
                {t.bottomLinkStory}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
