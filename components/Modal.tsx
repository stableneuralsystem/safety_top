import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { ModalProps } from '../types';

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      // Small delay to allow render before transition
      requestAnimationFrame(() => setIsVisible(true));
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setIsRendered(false), 300); // Match transition duration
      document.body.style.overflow = '';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    // Handle ESC key
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isRendered) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Backdrop (Glassmorphism) */}
      <div 
        className="absolute inset-0 bg-dark-950/70 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div 
        className={`
          relative w-full max-w-2xl bg-dark-900/90 border border-white/10 
          rounded-2xl shadow-2xl overflow-hidden
          transform transition-all duration-300 ease-in-out
          ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}
        `}
      >
        {/* Header */}
        <div className="absolute top-0 right-0 z-10 p-4">
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white bg-dark-800/50 hover:bg-dark-700 rounded-full transition-colors backdrop-blur-sm"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Container */}
        <div className="w-full h-[80vh] sm:h-[600px] overflow-hidden bg-dark-900">
           {/* Skeleton Loader / Placeholder */}
           <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
           </div>

           {/* Fillout Embed Code */}
           <div 
            style={{ width: '100%', height: '100%' }} 
            data-fillout-id="6x6kuCCH6dus" 
            data-fillout-embed-type="standard" 
            data-fillout-inherit-parameters 
            data-fillout-dynamic-resize
          ></div>
        </div>
      </div>
    </div>
  );
};
