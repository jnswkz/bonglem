import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, ShoppingCart } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  onViewDetail?: () => void;
  onAddToCart?: () => void;
  stock?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  image, 
  name, 
  price, 
  onViewDetail,
  onAddToCart,
  stock = 0
}) => {
  const { language } = useLanguage();
  const isVi = language === "vi";
  const isOutOfStock = stock <= 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isOutOfStock && onAddToCart) {
      onAddToCart();
    }
  };

  return (
    <div className="group cursor-pointer" onClick={onViewDetail}>
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#F5F1E9] mb-4 shadow-sm group-hover:shadow-md transition-all duration-500">
        <ImageWithFallback 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Out of stock overlay */}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-white/90 px-4 py-2 rounded-full text-sm font-medium text-[#5C4033]">
              {isVi ? "Hết hàng" : "Out of stock"}
            </span>
          </div>
        )}
        
        <button 
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#5C4033] opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500"
          onClick={(e) => e.stopPropagation()}
        >
          <Heart size={18} />
        </button>
        
        {/* Add to cart button */}
        {!isOutOfStock && onAddToCart && (
          <button 
            className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-[#808000] text-white text-sm font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-300 hover:bg-[#6B6B00]"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={16} />
            {isVi ? "Thêm vào giỏ" : "Add to cart"}
          </button>
        )}
      </div>
      <div className="space-y-1 text-center">
        <h3 className="text-[#5C4033] font-medium group-hover:text-[#808000] transition-colors">{name}</h3>
        <p className="text-sm text-[#5C4033]/60">{price}đ</p>
        <button className="text-[10px] uppercase tracking-widest font-bold text-[#808000] pt-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
          {isVi ? "Xem chi tiết" : "View details"}
        </button>
      </div>
    </div>
  );
};
