import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { NavItem } from '../types';
import { Button } from './Button';

interface HeaderProps {
  onOpenModal: () => void;
}

const navItems: NavItem[] = [
  { id: 'about', label: 'О компании' },
  { id: 'importance', label: 'Почему это важно' },
  { id: 'courses', label: 'Курсы' },
  { id: 'process', label: 'Как проходит обучение' },
  { id: 'documents', label: 'Документы' },
  { id: 'contacts', label: 'Контакты' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Scroll Effect for Header Background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active Section Logic
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Offset

      let current = '';
      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPosition) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-950/80 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
              <GraduationCap size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Safety<span className="text-brand-500">Pro</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 bg-white/5 px-6 py-2 rounded-full backdrop-blur-sm border border-white/5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-brand-400 ${
                  activeSection === item.id ? 'text-brand-400' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button onClick={onOpenModal} className="!px-6 !py-2.5 !text-sm">
              Начать обучение
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 top-[64px] z-40 bg-dark-950/95 backdrop-blur-xl transform transition-transform duration-300 xl:hidden border-t border-white/10 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 h-[calc(100vh-64px)] overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-lg font-medium text-left py-2 border-b border-white/5 ${
                  activeSection === item.id ? 'text-brand-400' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="mt-auto pb-8">
             <Button onClick={() => { setIsMobileMenuOpen(false); onOpenModal(); }} fullWidth>
              Начать обучение
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
