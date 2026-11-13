import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
}

const ZZLogo: React.FC<{ color?: string; className?: string }> = ({
  color = '#E8502F',
  className = 'w-full h-full',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    {/* Top Roof */}
    <path
      d="M 50 8 L 85 28 L 85 35 L 67 35 L 50 23 L 33 35 L 15 35 L 15 28 Z"
      fill={color}
    />
    {/* Upper Right Z (Z2) */}
    <path
      d="M 52 30 L 85 30 L 65 44 L 85 44 L 85 52 L 52 52 L 72 38 L 52 38 Z"
      fill={color}
    />
    {/* Lower Left Z (Z1) */}
    <path
      d="M 15 48 L 48 48 L 28 62 L 48 62 L 48 70 L 15 70 L 35 56 L 15 56 Z"
      fill={color}
    />
    {/* Bottom Roof */}
    <path
      d="M 50 92 L 15 72 L 15 65 L 33 65 L 50 77 L 67 65 L 85 65 L 85 72 Z"
      fill={color}
    />
  </svg>
);

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  toggleDarkMode,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor if project modal is open
  useEffect(() => {
    const checkModal = () => {
      setIsProjectModalOpen(document.body.classList.contains('project-modal-open'));
    };
    checkModal();
    const observer = new MutationObserver(checkModal);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  if (isProjectModalOpen) return null;

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Playground', href: '#playground' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#E8DFF0]/95 dark:bg-[#16141A]/95 backdrop-blur-md shadow-md border-b border-[#DCCFE8] dark:border-white/10'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center font-heading font-black tracking-tighter uppercase"
          >
            <div className={`relative w-11 h-11 sm:w-12 sm:h-12 transition-all duration-300 group-hover:scale-105 flex items-center justify-center p-1 rounded-xl ${
              isScrolled ? 'bg-[#E8502F]/10 hover:bg-[#E8502F]/20' : ''
            }`}>
              <ZZLogo
                color={isScrolled ? '#E8502F' : isDarkMode ? '#FFFFFF' : '#16141A'}
                className="w-full h-full object-contain transition-colors duration-300"
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-white/85 dark:bg-black/50 px-2.5 py-1.5 rounded-full border border-[#DCCFE8] dark:border-white/10 shadow-sm backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#16141A] text-white dark:bg-white dark:text-[#16141A] shadow-md scale-105 ring-2 ring-[#E8502F]'
                      : 'text-[#16141A] dark:text-slate-200 hover:text-[#E8502F] dark:hover:text-[#E8502F] hover:bg-[#EAE3EF]/80 dark:hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle theme"
              className="p-2.5 rounded-xl glass-card text-[#16141A] dark:text-slate-200 hover:text-[#E8502F] dark:hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="w-5 h-5 text-[#16141A] transition-transform duration-300 rotate-0 hover:-rotate-12" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2.5 rounded-xl glass-card text-[#16141A] dark:text-slate-200 hover:text-[#E8502F] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel mt-3 mx-4 p-5 rounded-2xl border border-[#DCCFE8] dark:border-white/10 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 rounded-xl font-heading font-semibold text-lg text-[#16141A] dark:text-slate-200 hover:bg-[#EAE3EF] dark:hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
