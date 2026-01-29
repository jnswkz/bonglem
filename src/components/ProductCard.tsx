import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  onViewDetail?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, onViewDetail }) => {
  return (
    <div className="group cursor-pointer" onClick={onViewDetail}>
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#F5F1E9] mb-4 shadow-sm group-hover:shadow-md transition-all duration-500">
        <ImageWithFallback 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#5C4033] opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500">
          <Heart size={18} />
        </button>
      </div>
      <div className="space-y-1 text-center">
        <h3 className="text-[#5C4033] font-medium group-hover:text-[#808000] transition-colors">{name}</h3>
        <p className="text-sm text-[#5C4033]/60">{price}đ</p>
        <button className="text-[10px] uppercase tracking-widest font-bold text-[#808000] pt-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};
