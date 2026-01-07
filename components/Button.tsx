import React from 'react';
import { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900 overflow-hidden group";
  
  const variants = {
    primary: "bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-500/30 focus:ring-brand-500 border border-transparent hover:-translate-y-0.5",
    secondary: "bg-white text-dark-900 hover:bg-gray-100 shadow-lg shadow-white/10 focus:ring-white border border-transparent hover:-translate-y-0.5",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40 focus:ring-white/50"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {/* Liquid Light Effect overlay */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
      
      <span className="relative flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};
