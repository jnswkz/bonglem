import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote } from 'lucide-react';

interface FeedbackCardProps {
  type: 'text' | 'image' | 'chat';
  content?: string;
  author?: string;
  image?: string;
  className?: string;
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({ type, content, author, image, className = '' }) => {
  if (type === 'image' && image) {
    return (
      <div className={`rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all ${className}`}>
        <ImageWithFallback src={image} alt="Feedback" className="w-full h-full object-cover" />
      </div>
    );
  }

  if (type === 'chat') {
    return (
      <div className={`bg-[#FDFBF7] p-6 rounded-3xl border border-[#5C4033]/5 shadow-sm space-y-4 ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#D4E1B3]" />
          <div className="text-xs font-bold text-[#5C4033]/60 uppercase tracking-widest">Khách thương</div>
        </div>
        <div className="space-y-2">
          <div className="bg-[#F5F1E9] p-3 rounded-2xl rounded-tl-none text-sm text-[#5C4033] max-w-[80%] shadow-sm">
            {content || "Mình nhận được quà rồi ạ, xinh lắm luôn í!"}
          </div>
          <div className="bg-[#808000]/10 p-3 rounded-2xl rounded-tr-none text-sm text-[#5C4033] ml-auto max-w-[80%]">
            Bông Lém cảm ơn bạn nhiều nhé! 🌼
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-[#F5F1E9] p-8 rounded-3xl relative overflow-hidden group hover:bg-[#FDFBF7] transition-all duration-500 border border-transparent hover:border-[#5C4033]/5 ${className}`}>
      <Quote className="absolute -top-4 -right-4 w-24 h-24 text-[#5C4033]/5 group-hover:text-[#808000]/10 transition-colors" />
      <p className="text-lg text-[#5C4033] leading-relaxed relative z-10 mb-6 font-serif italic">
        "{content}"
      </p>
      {author && (
        <div className="flex items-center gap-3">
          <div className="h-0.5 w-6 bg-[#808000]" />
          <span className="text-sm font-bold text-[#5C4033]/70">{author}</span>
        </div>
      )}
    </div>
  );
};
