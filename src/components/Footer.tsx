import React from 'react';
import { Facebook, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const TEXT_BROWN = '#5C4033';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const { language } = useLanguage();
  const isEN = language === 'en';

  const t = {
    brand: 'BÔNG LÉM',
    // tagline: isEN ? 'Tiny gifts that bring big joy 🌼' : 'Những món quà nhỏ mang niềm vui to 🌼',
    contactTitle: isEN ? 'Contact us' : 'Liên hệ',
    address: '279 Nguyễn Tri Phương, Phường Diên Hồng, TP. Hồ Chí Minh',
    phone: '082 888 7696',
    policyTitle: isEN ? 'Policies' : 'Chính sách',
    policy1: isEN ? 'Purchase policy' : 'Chính sách mua hàng',
    policy2: isEN ? 'Privacy policy' : 'Chính sách bảo mật',
    policy3: isEN ? 'Contact' : 'Liên hệ',
  };

  return (
    <footer className="w-full mt-16">
      {/* white separator */}
      <div className="h-px w-full bg-white" />

      <div
        className="w-full"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,233,242,0.92) 0%, rgba(247,204,220,0.9) 45%, rgba(238,188,207,0.9) 100%)',
        }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            <section className="flex flex-col items-center md:items-start gap-4">
              <img
                src="/emoji/1.png"
                alt="Bông Lém mascot"
                className="w-[180px] h-[180px] object-contain"
              />
              <div className="text-[44px] font-extrabold leading-none" style={{ color: TEXT_BROWN }}>
                {t.brand}
              </div>
              {/* <p className="text-base font-semibold text-neutral-700 text-center md:text-left" style={{ color: TEXT_BROWN }}>
                {t.tagline}
              </p> */}
            </section>

            <section className="flex flex-col gap-3 text-neutral-800">
              <h3 className="text-[30px] font-extrabold" style={{ color: TEXT_BROWN }}>
                {t.contactTitle}
              </h3>
              <div className="flex items-start gap-3 text-lg">
                <MapPin size={20} className="mt-1 opacity-80" />
                <span>{t.address}</span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <Phone size={20} className="opacity-80" />
                <a
                  href={`tel:${t.phone.replace(/\s/g, '')}`}
                  className="font-bold hover:underline"
                  style={{ color: TEXT_BROWN }}
                >
                  {t.phone}
                </a>
              </div>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="mt-4 inline-flex h-16 w-16 items-center justify-center rounded-full text-[#d44f8d] shadow-[0_10px_20px_rgba(0,0,0,0.02)] border transition hover:scale-[1.05]"
                style={{
                  background: 'rgba(255, 255, 255, 0)',
                  borderColor: 'rgba(255, 255, 255, 0)',
                }}
              >
                <Facebook size={26} strokeWidth={1.4} />
              </a>
            </section>

            <section className="flex flex-col justify-between gap-4 text-neutral-800">
              <div>
                <h3 className="text-[30px] font-extrabold mb-4" style={{ color: TEXT_BROWN }}>
                  {t.policyTitle}
                </h3>
                <div className="flex flex-col gap-2 text-lg font-semibold" style={{ color: TEXT_BROWN }}>
                  <a href="#products" className="hover:underline">{t.policy1}</a>
                  <a href="#privacy" className="hover:underline">{t.policy2}</a>
                  <a href="#contact" className="hover:underline">{t.policy3}</a>
                </div>
              </div>
              <div className="flex justify-end">
                <img
                  src="/emoji/hug 2.png"
                  alt="Mascot"
                  className="w-[200px] h-[200px] object-contain"
                />
              </div>
            </section>
          </div>

          <div className="mt-10 border-t pt-5 text-sm text-center text-neutral-700" style={{ borderColor: 'rgba(92,64,51,0.18)' }}>
            © {year} Bông Lém. Made with love.
          </div>
        </div>
      </div>
    </footer>
  );
};
