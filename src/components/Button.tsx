import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  fullWidth = false
}) => {
  const baseStyles = "px-8 py-3 rounded-full transition-all duration-300 font-medium text-sm md:text-base cursor-pointer inline-flex items-center justify-center";
  const variants = {
    primary: "bg-[#808000] text-white hover:bg-[#6b6b00] shadow-sm",
    secondary: "bg-[#F5F1E9] text-[#5C4033] hover:bg-[#EDE7DB] border border-[#5C4033]/10"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
};
