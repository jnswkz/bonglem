import React from 'react';
import { Heart, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F5F1E9] py-16 px-6 md:px-12 border-t border-[#5C4033]/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 text-[#5C4033]">
        <div className="space-y-4 max-w-md">
          <h2 className="text-2xl font-serif font-bold tracking-wider">BÔNG LÉM</h2>
          <p className="text-sm opacity-70 leading-relaxed">
            Nơi những món quà nhỏ xinh được tạo nên từ sự tỉ mỉ và tình yêu thương, để mang lại nụ cười rạng rỡ cho người nhận.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-[#FDFBF7] flex items-center justify-center hover:bg-[#808000] hover:text-white transition-all shadow-sm">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#FDFBF7] flex items-center justify-center hover:bg-[#808000] hover:text-white transition-all shadow-sm">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-sm uppercase tracking-widest text-[#808000]">Thông tin liên hệ</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Số điện thoại: 0987 654 321</li>
            <li>Email: chao@bonglem.vn</li>
            <li>Địa chỉ: 123 Đường Cánh Hoa, Quận 1, TP. HCM</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#5C4033]/5 text-center">
        <p className="text-sm font-medium italic mb-2">“Cảm ơn bạn đã ghé chơi cùng Bông Lém 🌼”</p>
        <p className="text-xs opacity-50">&copy; 2026 BÔNG LÉM. Made with love.</p>
      </div>
    </footer>
  );
};
