import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CollectionCardProps {
  image: string;
  title: string;
  onClick?: () => void;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({ image, title, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="relative group cursor-pointer overflow-hidden rounded-[32px] aspect-[4/5]"
    >
      <ImageWithFallback 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#5C4033]/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
        <h3 className="text-2xl font-serif font-bold mb-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{title}</h3>
        <div className="overflow-hidden">
          <button className="text-sm font-medium border-b border-white/50 pb-1 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};
